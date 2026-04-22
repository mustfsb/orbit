"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export type ViewMode = "unified" | "focused"

interface Settings {
  viewMode: ViewMode
  focusDuration: number
  breakDuration: number
  soundEnabled: boolean
  autoStartPomodoros: boolean
  autoStartBreaks: boolean
  longBreakInterval: number
  geminiApiKey: string
  dailyFocusGoal: number
  ambientSound: "off" | "rain" | "white" | "brown"
}

interface SettingsContextType {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
  isMounted: boolean
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>({
    viewMode: "unified",
    focusDuration: 25,
    breakDuration: 5,
    soundEnabled: true,
    autoStartPomodoros: false,
    autoStartBreaks: false,
    longBreakInterval: 4,
    geminiApiKey: "",
    dailyFocusGoal: 120,
    ambientSound: "off",
  })

  const [isMounted, setIsMounted] = useState(false)

  // Load from localStorage
  useEffect(() => {
    setIsMounted(true)
    const saved = localStorage.getItem("orbit-settings")
    if (saved) {
      try {
        setSettings((prev) => ({ ...prev, ...JSON.parse(saved) }))
      } catch (e) {
        console.error("Failed to parse settings", e)
      }
    }
  }, [])

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings }
      localStorage.setItem("orbit-settings", JSON.stringify(updated))
      return updated
    })
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, isMounted }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}
