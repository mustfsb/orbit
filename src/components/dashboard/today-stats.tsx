"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { createClient } from "@/lib/supabase/client"
import { formatMinutes } from "@/lib/focus-insights";

interface Stats {
  focusMinutes: number
  sessions: number
  tasksDone: number
}

export function TodayStats() {
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    async function fetchStats() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const todayStart = new Date()
      todayStart.setHours(0, 0, 0, 0)
      const todayEnd = new Date()
      todayEnd.setHours(23, 59, 59, 999)

      const [{ data: sessions }, { data: todos }] = await Promise.all([
        supabase
          .from("pomodoro_sessions")
          .select("duration")
          .eq("user_id", user.id)
          .gte("started_at", todayStart.toISOString())
          .lte("started_at", todayEnd.toISOString()),
        supabase
          .from("todos")
          .select("completed")
          .eq("user_id", user.id)
          .eq("completed", true),
      ])

      const focusMinutes = sessions?.reduce((acc, s) => acc + (s.duration || 0), 0) ?? 0
      const sessionCount = sessions?.length ?? 0
      const tasksDone = todos?.length ?? 0

      setStats({ focusMinutes, sessions: sessionCount, tasksDone })
    }

    fetchStats()
  }, [])

  const cards = [
    { label: "Focus Today", value: stats?.focusMinutes ?? 0, unit: "min", format: "minutes" as const },
    { label: "Sessions", value: stats?.sessions ?? 0, unit: "" },
    { label: "Tasks Done", value: stats?.tasksDone ?? 0, unit: "" },
  ]

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="p-6 rounded-2xl border border-border bg-foreground/[0.02] flex flex-col justify-between"
        >
          <p className="text-xs font-sans uppercase tracking-widest opacity-40 font-medium mb-3">
            {card.label}
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-sans tracking-tight">
              {stats === null
                ? "–"
                : card.format === "minutes"
                  ? formatMinutes(card.value)
                  : card.value}
            </span>
            {card.unit && card.format !== "minutes" && (
              <span className="text-xs opacity-40 font-sans">{card.unit}</span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
