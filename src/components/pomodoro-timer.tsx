"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom";
import { Play, Pause, RotateCcw, Maximize2, Minimize2, Volume2, VolumeX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useSettings } from "@/context/settings-context"
import { useTimer } from "@/context/timer-context"
import { useGoals } from "@/context/goals-context";
import { createClient } from "@/lib/supabase/client"

type AmbientSound = "off" | "rain" | "white" | "brown"
type WindowWithWebkitAudio = Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext };

function createNoiseBuffer(
  ctx: AudioContext,
  type: "white" | "brown" | "rain"
): AudioBuffer {
  const bufferSize = ctx.sampleRate * 2 // 2 seconds
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = buffer.getChannelData(0)

  if (type === "white") {
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1
    }
  } else if (type === "brown") {
    let lastOut = 0
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1
      lastOut = (lastOut + 0.02 * white) / 1.02
      data[i] = lastOut * 3.5
    }
  } else {
    // Rain: pink-ish noise with occasional droplet transients
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1
      b0 = 0.99886 * b0 + white * 0.0555179
      b1 = 0.99332 * b1 + white * 0.0750759
      b2 = 0.96900 * b2 + white * 0.1538520
      b3 = 0.86650 * b3 + white * 0.3104856
      b4 = 0.55000 * b4 + white * 0.5329522
      b5 = -0.7616 * b5 - white * 0.0168980
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
      b6 = white * 0.115926
    }
  }

  return buffer
}

export function PomodoroTimer({ borderless = false }: { borderless?: boolean }) {
  const { settings, updateSettings } = useSettings()
  const { isActive, setIsActive, activeTaskText, activeTaskId, mode, setMode, clearFocus } = useTimer()
  const { refreshGoalsData } = useGoals();
  const [minutes, setMinutes] = useState(settings.focusDuration)
  const [seconds, setSeconds] = useState(0)
  const [isZenMode, setIsZenMode] = useState(false)
  const [isMuted, setIsMuted] = useState(!settings.soundEnabled)
  const [sessionsCompleted, setSessionsCompleted] = useState(0)
  const [mounted, setMounted] = useState(false)
  const sessionStartRef = useRef<Date | null>(null)

  // Refs to keep interval callback stable without stale closures
  const minutesRef = useRef(minutes)
  const secondsRef = useRef(seconds)
  const modeRef = useRef(mode)
  const settingsRef = useRef(settings)
  const sessionsCompletedRef = useRef(sessionsCompleted)

  useEffect(() => { minutesRef.current = minutes }, [minutes])
  useEffect(() => { secondsRef.current = seconds }, [seconds])
  useEffect(() => { modeRef.current = mode }, [mode])
  useEffect(() => { settingsRef.current = settings }, [settings])
  useEffect(() => { sessionsCompletedRef.current = sessionsCompleted }, [sessionsCompleted])

  // Ambient audio refs
  const ambientCtxRef = useRef<AudioContext | null>(null)
  const ambientNodeRef = useRef<AudioBufferSourceNode | null>(null)
  const ambientGainRef = useRef<GainNode | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stopAmbient = useCallback(() => {
    try {
      if (ambientNodeRef.current) {
        ambientNodeRef.current.stop()
        ambientNodeRef.current.disconnect()
        ambientNodeRef.current = null
      }
      if (ambientGainRef.current) {
        ambientGainRef.current.disconnect()
        ambientGainRef.current = null
      }
      if (ambientCtxRef.current) {
        ambientCtxRef.current.close()
        ambientCtxRef.current = null
      }
    } catch {
      // ignore cleanup errors
    }
  }, [])

  const startAmbient = useCallback((sound: AmbientSound) => {
    if (sound === "off") return
    try {
      const AudioContextClass = window.AudioContext || (window as WindowWithWebkitAudio).webkitAudioContext
      if (!AudioContextClass) return

      const ctx = new AudioContextClass() as AudioContext
      ambientCtxRef.current = ctx

      const buffer = createNoiseBuffer(ctx, sound as "white" | "brown" | "rain")
      const source = ctx.createBufferSource()
      source.buffer = buffer
      source.loop = true

      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.15, ctx.currentTime)

      source.connect(gain)
      gain.connect(ctx.destination)
      source.start()

      ambientNodeRef.current = source
      ambientGainRef.current = gain
    } catch (e) {
      console.error("Ambient audio failed to start", e)
    }
  }, [])

  // Ambient sound effect: react to isActive + ambientSound setting
  useEffect(() => {
    stopAmbient()
    if (isActive && settings.ambientSound !== "off") {
      startAmbient(settings.ambientSound)
    }
    return () => {
      stopAmbient()
    }
  }, [isActive, settings.ambientSound, startAmbient, stopAmbient])

  const playSound = useCallback((type: "click" | "bell" = "click") => {
    if (isMuted) return
    try {
      const AudioContextClass = window.AudioContext || (window as WindowWithWebkitAudio).webkitAudioContext
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

      oscillator.onended = () => {
        audioCtx.close().catch(e => console.error("Error closing audio context", e))
      }
    } catch (e) {
      console.error("Audio failed", e)
    }
  }, [isMuted])

  const saveSession = useCallback(async (status: 'completed' | 'interrupted') => {
    if (!sessionStartRef.current || modeRef.current !== 'focus') return

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      console.log('No user found, skipping session save')
      return
    }

    const startTime = sessionStartRef.current
    const endTime = new Date()
    const elapsedMinutes = Math.round((endTime.getTime() - startTime.getTime()) / 60000)

    if (elapsedMinutes < 1) {
      sessionStartRef.current = null
      return
    }

    const { error } = await supabase.from('pomodoro_sessions').insert({
      user_id: user.id,
      duration: status === 'completed' ? settingsRef.current.focusDuration : elapsedMinutes,
      started_at: startTime.toISOString(),
      completed_at: endTime.toISOString(),
      status: status,
      task_id: activeTaskId || null
    })

    if (error) {
      console.error('Error saving session:', error)
    } else {
      await refreshGoalsData()
    }

    sessionStartRef.current = null
  }, [activeTaskId, refreshGoalsData])

  const toggleTimer = useCallback(() => {
    playSound("click")
    const newActive = !isActive

    if (newActive && mode === "focus" && !sessionStartRef.current) {
      sessionStartRef.current = new Date()
    }

    setIsActive(newActive)
  }, [playSound, mode, isActive, setIsActive])

  const resetTimer = useCallback(() => {
    playSound("click")

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

  // Stable interval: only depends on isActive, reads current values from refs
  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      const s = secondsRef.current
      const m = minutesRef.current

      if (s > 0) {
        setSeconds(s - 1)
      } else if (m > 0) {
        setMinutes(m - 1)
        setSeconds(59)
      } else {
        // Timer completed
        clearInterval(interval)
        setIsActive(false)
        playSound("bell")
        sendNotification()

        const currentMode = modeRef.current
        const currentSettings = settingsRef.current
        const currentSessionsCompleted = sessionsCompletedRef.current

        if (currentMode === "focus") {
          const nextSessionCount = currentSessionsCompleted + 1
          setSessionsCompleted(nextSessionCount)
          saveSession('completed')
          setMode("break")
          const isLongBreak = nextSessionCount % currentSettings.longBreakInterval === 0
          setMinutes(isLongBreak ? currentSettings.breakDuration * 3 : currentSettings.breakDuration)
          setSeconds(0)
          if (currentSettings.autoStartBreaks) {
            setIsActive(true)
          }
        } else {
          setMode("focus")
          setMinutes(currentSettings.focusDuration)
          setSeconds(0)
          if (currentSettings.autoStartPomodoros) {
            setIsActive(true)
          }
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, playSound, saveSession, sendNotification, setIsActive, setMode])

  useEffect(() => {
    const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`
    document.title = isActive ? `${timeString} - Orbit` : "Orbit"
  }, [minutes, seconds, isActive])

  const ambientOptions: { label: string; value: AmbientSound }[] = [
    { label: "Off", value: "off" },
    { label: "Rain", value: "rain" },
    { label: "White", value: "white" },
    { label: "Brown", value: "brown" },
  ]

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
                className="text-[12rem] md:text-[16rem] font-sans tracking-tighter text-foreground tabular-nums leading-none"
              >
                {minutes}:{seconds.toString().padStart(2, "0")}
              </motion.div>

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
                className="mt-8 text-xl font-sans tracking-wide"
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
          className={`p-10 md:p-16 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-12 shadow-sm ${
            borderless ? "bg-foreground/[0.02]" : "border border-border bg-foreground/[0.02]"
          }`}
        >
          {activeTaskText && mode === "focus" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={clearFocus}
              className={`group/badge flex cursor-pointer items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-red-500 hover:text-white ${
                borderless ? "" : "border border-accent"
              }`}
              title="Click to stop focusing on this task"
            >
              <span className="animate-pulse group-hover/badge:hidden">🔥</span>
              <span className="hidden group-hover/badge:inline">✕</span>
              Focusing on: {activeTaskText}
            </motion.div>
          )}

          <div className="space-y-4">
            <motion.h2 layout className="text-xl tracking-tight italic opacity-60 font-sans">
              {mode === "focus" ? "Focus Session" : "Restorative Break"}
            </motion.h2>
            <motion.div
              layout
              key={minutes + seconds}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              className="text-8xl md:text-9xl font-sans tracking-tighter text-foreground tabular-nums"
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
              className="group flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-90"
            >
              {isActive ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={resetTimer}
              className={`w-12 h-12 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors opacity-60 hover:opacity-100 ${
                borderless ? "bg-foreground/[0.05]" : "border border-border"
              }`}
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
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-sans cursor-pointer transition-all ${
                  borderless ? "bg-foreground/[0.05]" : "border border-border"
                } ${mode === "focus" ? "opacity-100" : "opacity-30 hover:opacity-60"}`}
              >
                Focus
              </span>
              <span
                onClick={() => { setMode("break"); setMinutes(settings.breakDuration); setSeconds(0); setIsActive(false); }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-sans cursor-pointer transition-all ${
                  borderless ? "bg-foreground/[0.05]" : "border border-border"
                } ${mode === "break" ? "opacity-100" : "opacity-30 hover:opacity-60"}`}
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

          {/* Ambient Sound Control */}
          <motion.div
            layout
            className={`flex items-center gap-1 p-1 rounded-full bg-foreground/[0.02] ${
              borderless ? "" : "border border-border"
            }`}
          >
            {ambientOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => updateSettings({ ambientSound: opt.value })}
                className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                  settings.ambientSound === opt.value
                    ? "bg-foreground/10 opacity-100"
                    : "opacity-30 hover:opacity-60"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
