"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { useSettings } from "./settings-context"

interface TimerContextType {
  isActive: boolean
  setIsActive: (active: boolean) => void
  activeTaskId: string | null
  startFocus: (taskId: string, text: string) => void
  clearFocus: () => void
  activeTaskText: string | null
  mode: "focus" | "break"
  setMode: (mode: "focus" | "break") => void
}

const TimerContext = createContext<TimerContextType | undefined>(undefined)

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useSettings()
  const [isActive, setIsActive] = useState(false)
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null)
  const [activeTaskText, setActiveTaskText] = useState<string | null>(null)
  const [mode, setMode] = useState<"focus" | "break">("focus")

  const startFocus = useCallback((taskId: string, text: string) => {
    setActiveTaskId(taskId)
    setActiveTaskText(text)
    setMode("focus")
    setIsActive(true)

    // Smooth scroll to timer if on mobile or small screen
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const clearFocus = useCallback(() => {
    setActiveTaskId(null)
    setActiveTaskText(null)
  }, [])

  return (
    <TimerContext.Provider value={{
      isActive,
      setIsActive,
      activeTaskId,
      startFocus,
      clearFocus,
      activeTaskText,
      mode,
      setMode
    }}>
      {children}
    </TimerContext.Provider>
  )
}

export function useTimer() {
  const context = useContext(TimerContext)
  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider")
  }
  return context
}
