"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom";
import { Play, Pause, RotateCcw, Maximize2, Minimize2, Volume2, VolumeX, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useSettings } from "@/context/settings-context"
import { useTimer } from "@/context/timer-context"
import { createClient } from "@/lib/supabase/client"

export function PomodoroTimer() {
  const { settings } = useSettings()
  const { isActive, setIsActive, activeTaskText, activeTaskId, mode, setMode, clearFocus } = useTimer()
  const [minutes, setMinutes] = useState(settings.focusDuration)
  const [seconds, setSeconds] = useState(0)
  const [isZenMode, setIsZenMode] = useState(false)
  const [isMuted, setIsMuted] = useState(!settings.soundEnabled)
  const [sessionsCompleted, setSessionsCompleted] = useState(0)
  const [mounted, setMounted] = useState(false)
  const sessionStartRef = useRef<Date | null>(null)
  const sessionIdRef = useRef<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const playSound = useCallback((type: "click" | "bell" = "click") => {
    if (isMuted) return
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioContextClass) return

      const audioCtx = new AudioContextClass()
      const oscillator = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()

      const endTime = audioCtx.currentTime + (type === "bell" ? 0.5 : 0.05)

      if (type === "bell") {
        oscillator.type = "sine"
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(880, endTime)
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, endTime)
      } else {
        oscillator.type = "sine"
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime)
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, endTime)
      }

      oscillator.connect(gainNode)
      gainNode.connect(audioCtx.destination)

      oscillator.start()
      oscillator.stop(endTime)

      // Important: Close context to prevent leaks and Safari crashes
      oscillator.onended = () => {
        audioCtx.close().catch(e => console.error("Error closing audio context", e))
      }
    } catch (e) {
      console.error("Audio failed", e)
    }
  }, [isMuted])

  const saveSession = useCallback(async (status: 'completed' | 'interrupted') => {
    if (!sessionStartRef.current || mode !== 'focus') return

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      console.log('No user found, skipping session save')
      return
    }

    const startTime = sessionStartRef.current
    const endTime = new Date()
    const elapsedMinutes = Math.round((endTime.getTime() - startTime.getTime()) / 60000)

    // Only save if at least 1 minute elapsed
    if (elapsedMinutes < 1) {
      sessionStartRef.current = null
      return
    }

    const { error } = await supabase.from('pomodoro_sessions').insert({
      user_id: user.id,
      duration: status === 'completed' ? settings.focusDuration : elapsedMinutes,
      started_at: startTime.toISOString(),
      completed_at: endTime.toISOString(),
      status: status,
      task_id: activeTaskId || null
    })

    if (error) {
      console.error('Error saving session:', error)
    } else {
      console.log(`Session saved: ${status}, ${elapsedMinutes} minutes`)
    }

    sessionStartRef.current = null
  }, [mode, settings.focusDuration, activeTaskId])

  const toggleTimer = useCallback(() => {
    playSound("click")
    const newActive = !isActive

    if (newActive && mode === "focus" && !sessionStartRef.current) {
      // Starting a new focus session
      sessionStartRef.current = new Date()
    }

    setIsActive(newActive)
  }, [playSound, mode, isActive, setIsActive])

  const resetTimer = useCallback(() => {
    playSound("click")

    // Save interrupted session if timer was running
    if (isActive && mode === "focus" && sessionStartRef.current) {
      saveSession('interrupted')
    }

    setIsActive(false)
    setMode("focus")
    setMinutes(settings.focusDuration)
    setSeconds(0)
    sessionStartRef.current = null
  }, [settings.focusDuration, playSound, isActive, mode, saveSession, setIsActive, setMode])

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      if (e.code === "Space") {
        e.preventDefault()
        toggleTimer()
      } else if (e.key.toLowerCase() === "n") {
        // This is a placeholder for focusing add task, which might be in a parent
        const taskInput = document.querySelector('input[placeholder*="Add task"]') as HTMLInputElement
        if (taskInput) {
          e.preventDefault()
          taskInput.focus()
        }
      } else if (e.key === "Escape" && isZenMode) {
        setIsZenMode(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleTimer, isZenMode])

  // Update minutes when settings change
  // Update minutes when settings change
  useEffect(() => {
    if (!isActive) {
      setMinutes(mode === "focus" ? settings.focusDuration : settings.breakDuration)
      setSeconds(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.focusDuration, settings.breakDuration, mode])

  const sendNotification = useCallback(() => {
    if (Notification.permission === "granted") {
      new Notification("Orbit Focus", {
        body: mode === "focus" ? "Time for a break." : "Back to focus.",
        icon: "/favicon.ico"
      })
    }
  }, [mode])

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "default") {
      Notification.requestPermission()
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          setIsActive(false)
          playSound("bell")
          sendNotification()

          if (mode === "focus") {
            const nextSessionCount = sessionsCompleted + 1
            setSessionsCompleted(nextSessionCount)

            // Save completed session to Supabase
            saveSession('completed')

            setMode("break")

            // Check for long break
            const isLongBreak = nextSessionCount % settings.longBreakInterval === 0
            setMinutes(isLongBreak ? settings.breakDuration * 3 : settings.breakDuration)
            setSeconds(0)

            if (settings.autoStartBreaks) {
              setIsActive(true)
            }
          } else {
            setMode("focus")
            setMinutes(settings.focusDuration)
            setSeconds(0)

            if (settings.autoStartPomodoros) {
              setIsActive(true)
            }
          }
          clearInterval(interval!)
        }
      }, 1000)
    } else {
      clearInterval(interval!)
    }

    return () => clearInterval(interval!)
  }, [isActive, minutes, seconds, mode, settings, playSound, sendNotification, sessionsCompleted])

  useEffect(() => {
    const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`
    document.title = isActive ? `${timeString} - Focus` : "Orbit Research"
  }, [minutes, seconds, isActive])

  return (
    <>
      {mounted && createPortal(
        <AnimatePresence>
          {isZenMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
              onClick={() => setIsZenMode(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[12rem] md:text-[16rem] font-serif italic tracking-tighter text-foreground tabular-nums leading-none"
              >
                {minutes}:{seconds.toString().padStart(2, "0")}
              </motion.div>

              {/* Zen Mode Controls */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                className="mt-4 flex items-center gap-8 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={toggleTimer} className="p-4 rounded-full hover:bg-foreground/5 transition-all">
                  {isActive ? <Pause className="w-8 h-8 opacity-70" /> : <Play className="w-8 h-8 opacity-70 ml-1" />}
                </button>
                <button onClick={resetTimer} className="p-4 rounded-full hover:bg-foreground/5 transition-all">
                  <RotateCcw className="w-8 h-8 opacity-70" />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-xl font-serif italic tracking-wide"
              >
                Zen Mode is active
              </motion.p>
              <button
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-foreground/5 opacity-40 hover:opacity-100 transition-all"
                onClick={(e) => { e.stopPropagation(); setIsZenMode(false); }}
              >
                <Minimize2 className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <div className="relative z-[10] w-full max-w-2xl mx-auto">
        <motion.div
          layout
          className="p-10 md:p-16 rounded-[2.5rem] border border-border bg-foreground/[0.02] flex flex-col items-center justify-center text-center space-y-12 shadow-sm"
        >
          {activeTaskText && mode === "focus" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={clearFocus}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-transparent bg-accent/[0.05] text-[10px] uppercase tracking-widest font-bold text-accent cursor-pointer hover:bg-red-500/10 hover:text-red-500 transition-colors group/badge"
              title="Click to stop focusing on this task"
            >
              <span className="animate-pulse group-hover/badge:hidden">🔥</span>
              <span className="hidden group-hover/badge:inline">✕</span>
              Focusing on: {activeTaskText}
            </motion.div>
          )}

          <div className="space-y-4">
            <motion.h2 layout className="text-xl tracking-tight italic opacity-60 font-serif">
              {mode === "focus" ? "Focus Session" : "Restorative Break"}
            </motion.h2>
            <motion.div
              layout
              key={minutes + seconds}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              className="text-8xl md:text-9xl font-serif italic tracking-tighter text-foreground tabular-nums"
            >
              {minutes}:{seconds.toString().padStart(2, "0")}
            </motion.div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-20 font-sans">
              Press Space to {isActive ? "Pause" : "Start"}
            </p>
          </div>

          <motion.div layout className="flex items-center gap-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTimer}
              className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm group"
            >
              {isActive ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={resetTimer}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground/5 transition-colors opacity-60 hover:opacity-100"
            >
              <RotateCcw className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div layout className="flex items-center gap-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full hover:bg-foreground/5 opacity-40 hover:opacity-100 transition-all"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <div className="flex gap-2">
              <span
                onClick={() => { setMode("focus"); setMinutes(settings.focusDuration); setSeconds(0); setIsActive(false); }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-sans border border-border cursor-pointer transition-all ${mode === "focus" ? "bg-foreground/5 opacity-100" : "opacity-30 hover:opacity-60"}`}
              >
                Focus
              </span>
              <span
                onClick={() => { setMode("break"); setMinutes(settings.breakDuration); setSeconds(0); setIsActive(false); }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-sans border border-border cursor-pointer transition-all ${mode === "break" ? "bg-foreground/5 opacity-100" : "opacity-30 hover:opacity-60"}`}
              >
                Break
              </span>
            </div>
            <button
              onClick={() => setIsZenMode(!isZenMode)}
              className="p-2 rounded-full hover:bg-foreground/5 opacity-40 hover:opacity-100 transition-all"
            >
              {isZenMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </motion.div>
        </motion.div>
      </div >
    </>
  )
}
