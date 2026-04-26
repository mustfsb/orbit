"use client"

import React, { createContext, useContext, useEffect, useState, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"
import { useAuth } from "@/context/auth-context"
import type { WeeklyPlan, ChatMessage, PlanTask, PdfData } from "@/lib/gemini"
import { normalizeWeeklyPlan } from "@/lib/gemini"

interface PlannerState {
  currentPlan: WeeklyPlan | null
  chatHistory: ChatMessage[]
  completions: Record<string, boolean>
  goal: string
  pdfData: PdfData | null
  pdfFileName: string | null
  isHydrated: boolean
}

interface PlannerContextType extends PlannerState {
  setCurrentPlan: (plan: WeeklyPlan | null) => void
  setChatHistory: (history: ChatMessage[] | ((prev: ChatMessage[]) => ChatMessage[])) => void
  setCompletions: (completions: Record<string, boolean>) => void
  setGoal: (goal: string) => void
  setPdfData: (data: PdfData | null) => void
  setPdfFileName: (name: string | null) => void
  toggleCompletion: (key: string) => void
  handleReorderDay: (dayIndex: number, reorderedTasks: PlanTask[]) => void
  resetPlanner: () => void
}

const PlannerContext = createContext<PlannerContextType | undefined>(undefined)

const LS_KEYS = {
  plan: "orbit-current-plan",
  history: "orbit-chat-history",
  completions: "orbit-plan-completions",
  goal: "orbit-planner-goal",
  pdfName: "orbit-planner-pdf-name",
  pdfData: "orbit-planner-pdf-data",
}

function loadLocalPlannerState(): Partial<PlannerState> {
  if (typeof window === "undefined") return {}
  try {
    const plan = window.localStorage.getItem(LS_KEYS.plan)
    const history = window.localStorage.getItem(LS_KEYS.history)
    const completions = window.localStorage.getItem(LS_KEYS.completions)
    const goal = window.localStorage.getItem(LS_KEYS.goal)
    const pdfName = window.localStorage.getItem(LS_KEYS.pdfName)
    const pdfData = window.localStorage.getItem(LS_KEYS.pdfData)

    let currentPlan: WeeklyPlan | null = null
    if (plan) {
      currentPlan = normalizeWeeklyPlan(JSON.parse(plan) as WeeklyPlan)
    }

    let chatHistory: ChatMessage[] = []
    if (history) {
      chatHistory = JSON.parse(history)
    }

    let parsedCompletions: Record<string, boolean> = {}
    if (completions) {
      parsedCompletions = JSON.parse(completions)
      if (currentPlan) {
        const migrated = { ...parsedCompletions }
        currentPlan.forEach((dayPlan) => {
          dayPlan.tasks.forEach((task, index) => {
            const legacyKey = `${dayPlan.day}-${index}`
            if (parsedCompletions[legacyKey] && task.id) {
              migrated[task.id] = true
            }
          })
        })
        parsedCompletions = migrated
      }
    }

    return {
      currentPlan,
      chatHistory,
      completions: parsedCompletions,
      goal: goal ?? "",
      pdfFileName: pdfName,
      pdfData: pdfData ? JSON.parse(pdfData) : null,
    }
  } catch (e) {
    console.error("Failed to load planner state from localStorage", e)
    return {}
  }
}

function clearLocalPlannerState() {
  if (typeof window === "undefined") return
  Object.values(LS_KEYS).forEach((key) => window.localStorage.removeItem(key))
}

function saveLocalPlannerState(state: PlannerState) {
  if (typeof window === "undefined") return
  if (state.currentPlan) {
    window.localStorage.setItem(LS_KEYS.plan, JSON.stringify(state.currentPlan))
  } else {
    window.localStorage.removeItem(LS_KEYS.plan)
  }
  window.localStorage.setItem(LS_KEYS.history, JSON.stringify(state.chatHistory))
  window.localStorage.setItem(LS_KEYS.completions, JSON.stringify(state.completions))
  if (state.goal) {
    window.localStorage.setItem(LS_KEYS.goal, state.goal)
  } else {
    window.localStorage.removeItem(LS_KEYS.goal)
  }
  if (state.pdfFileName) {
    window.localStorage.setItem(LS_KEYS.pdfName, state.pdfFileName)
  } else {
    window.localStorage.removeItem(LS_KEYS.pdfName)
  }
  if (state.pdfData) {
    window.localStorage.setItem(LS_KEYS.pdfData, JSON.stringify(state.pdfData))
  } else {
    window.localStorage.removeItem(LS_KEYS.pdfData)
  }
}

export function PlannerProvider({ children }: { children: React.ReactNode }) {
  const { user, loading: authLoading } = useAuth()
  const [currentPlan, setCurrentPlanState] = useState<WeeklyPlan | null>(null)
  const [chatHistory, setChatHistoryState] = useState<ChatMessage[]>([])
  const [completions, setCompletionsState] = useState<Record<string, boolean>>({})
  const [goal, setGoalState] = useState("")
  const [pdfData, setPdfDataState] = useState<PdfData | null>(null)
  const [pdfFileName, setPdfFileNameState] = useState<string | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  // Hydration
  useEffect(() => {
    if (authLoading) return
    let cancelled = false

    const hydrate = async () => {
      const localState = loadLocalPlannerState()

      if (user) {
        const supabase = createClient()
        const { data, error } = await supabase
          .from("weekly_plans")
          .select("*")
          .eq("user_id", user.id)
          .single()

        if (!cancelled) {
          if (data && !error) {
            setCurrentPlanState(data.plan_data ? normalizeWeeklyPlan(data.plan_data as WeeklyPlan) : null)
            setChatHistoryState((data.chat_history as ChatMessage[]) ?? [])
            setCompletionsState((data.completions as Record<string, boolean>) ?? {})
            setGoalState(data.goal ?? "")
            setPdfFileNameState(data.pdf_name ?? null)
            setPdfDataState(data.pdf_data as PdfData | null)
            clearLocalPlannerState()
          } else {
            if (localState.currentPlan || localState.chatHistory?.length) {
              const migratedPlan = localState.currentPlan ?? null
              const migratedHistory = localState.chatHistory ?? []
              const migratedCompletions = localState.completions ?? {}
              const migratedGoal = localState.goal ?? ""
              const migratedPdfName = localState.pdfFileName ?? null
              const migratedPdfData = localState.pdfData ?? null

              setCurrentPlanState(migratedPlan)
              setChatHistoryState(migratedHistory)
              setCompletionsState(migratedCompletions)
              setGoalState(migratedGoal)
              setPdfFileNameState(migratedPdfName)
              setPdfDataState(migratedPdfData)

              const { error: upsertError } = await supabase.from("weekly_plans").upsert({
                user_id: user.id,
                plan_data: migratedPlan,
                chat_history: migratedHistory,
                completions: migratedCompletions,
                goal: migratedGoal,
                pdf_name: migratedPdfName,
                pdf_data: migratedPdfData,
                updated_at: new Date().toISOString(),
              })

              if (!upsertError) {
                clearLocalPlannerState()
              } else {
                console.error("Failed to migrate planner state to Supabase:", upsertError)
              }
            }
          }
          setIsHydrated(true)
        }
      } else {
        if (!cancelled) {
          setCurrentPlanState(localState.currentPlan ?? null)
          setChatHistoryState(localState.chatHistory ?? [])
          setCompletionsState(localState.completions ?? {})
          setGoalState(localState.goal ?? "")
          setPdfFileNameState(localState.pdfFileName ?? null)
          setPdfDataState(localState.pdfData ?? null)
          setIsHydrated(true)
        }
      }
    }

    hydrate()

    return () => {
      cancelled = true
    }
  }, [user, authLoading])

  // Logout cleanup
  useEffect(() => {
    if (!authLoading && !user && isHydrated) {
      setCurrentPlanState(null)
      setChatHistoryState([])
      setCompletionsState({})
      setGoalState("")
      setPdfFileNameState(null)
      setPdfDataState(null)
      setIsHydrated(false)
    }
  }, [user, authLoading, isHydrated])

  // Persistence
  useEffect(() => {
    if (!isHydrated) return

    const timeout = setTimeout(() => {
      if (user) {
        const saveToSupabase = async () => {
          const supabase = createClient()
          const { error } = await supabase.from("weekly_plans").upsert({
            user_id: user.id,
            plan_data: currentPlan,
            chat_history: chatHistory,
            completions,
            goal,
            pdf_name: pdfFileName,
            pdf_data: pdfData,
            updated_at: new Date().toISOString(),
          })
          if (error) {
            console.error("Error saving planner state:", error)
          }
        }
        saveToSupabase()
      } else {
        const state: PlannerState = {
          currentPlan,
          chatHistory,
          completions,
          goal,
          pdfData,
          pdfFileName,
          isHydrated,
        }
        saveLocalPlannerState(state)
      }
    }, 300)

    return () => clearTimeout(timeout)
  }, [currentPlan, chatHistory, completions, goal, pdfData, pdfFileName, isHydrated, user])

  const setCurrentPlan = useCallback((plan: WeeklyPlan | null) => {
    setCurrentPlanState(plan ? normalizeWeeklyPlan(plan) : null)
  }, [])

  const setChatHistory = useCallback((history: ChatMessage[] | ((prev: ChatMessage[]) => ChatMessage[])) => {
    setChatHistoryState((prev) => {
      const next = typeof history === "function" ? history(prev) : history
      return next
    })
  }, [])

  const setCompletions = useCallback((completions: Record<string, boolean>) => {
    setCompletionsState(completions)
  }, [])

  const setGoal = useCallback((goal: string) => {
    setGoalState(goal)
  }, [])

  const setPdfData = useCallback((data: PdfData | null) => {
    setPdfDataState(data)
  }, [])

  const setPdfFileName = useCallback((name: string | null) => {
    setPdfFileNameState(name)
  }, [])

  const toggleCompletion = useCallback((key: string) => {
    setCompletionsState((prev) => {
      const updated = { ...prev, [key]: !prev[key] }
      return updated
    })
  }, [])

  const handleReorderDay = useCallback((dayIndex: number, reorderedTasks: PlanTask[]) => {
    setCurrentPlanState((prev) => {
      if (!prev) return prev
      return prev.map((dayPlan, index) =>
        index === dayIndex ? { ...dayPlan, tasks: reorderedTasks } : dayPlan
      )
    })
  }, [])

  const resetPlanner = useCallback(() => {
    if (typeof window !== "undefined" && !window.confirm("Reset the current plan and history?")) {
      return
    }
    setCurrentPlanState(null)
    setChatHistoryState([])
    setGoalState("")
    setPdfFileNameState(null)
    setPdfDataState(null)
    setCompletionsState({})
    if (!user) {
      clearLocalPlannerState()
    }
  }, [user])

  const value = React.useMemo(
    () => ({
      currentPlan,
      chatHistory,
      completions,
      goal,
      pdfData,
      pdfFileName,
      isHydrated,
      setCurrentPlan,
      setChatHistory,
      setCompletions,
      setGoal,
      setPdfData,
      setPdfFileName,
      toggleCompletion,
      handleReorderDay,
      resetPlanner,
    }),
    [
      currentPlan,
      chatHistory,
      completions,
      goal,
      pdfData,
      pdfFileName,
      isHydrated,
      setCurrentPlan,
      setChatHistory,
      setCompletions,
      setGoal,
      setPdfData,
      setPdfFileName,
      toggleCompletion,
      handleReorderDay,
      resetPlanner,
    ]
  )

  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>
}

export function usePlanner() {
  const context = useContext(PlannerContext)
  if (context === undefined) {
    throw new Error("usePlanner must be used within a PlannerProvider")
  }
  return context
}
