"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface Intention {
  text: string
  done: boolean
}

function getTodayKey() {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, "0")
  const dd = String(d.getDate()).padStart(2, "0")
  return `orbit-intentions-${yyyy}-${mm}-${dd}`
}

const DEFAULT_INTENTIONS: Intention[] = [
  { text: "", done: false },
  { text: "", done: false },
  { text: "", done: false },
]

export function DailyIntentions() {
  const [intentions, setIntentions] = useState<Intention[]>(DEFAULT_INTENTIONS)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsMounted(true)
    const key = getTodayKey()
    const saved = localStorage.getItem(key)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed.intentions)) {
          setIntentions(parsed.intentions)
        }
      } catch {
        // ignore
      }
    }
  }, [])

  const save = (updated: Intention[]) => {
    const key = getTodayKey()
    localStorage.setItem(key, JSON.stringify({ intentions: updated }))
    setIntentions(updated)
  }

  const toggleDone = (i: number) => {
    const updated = intentions.map((item, idx) =>
      idx === i ? { ...item, done: !item.done } : item
    )
    save(updated)
  }

  const startEdit = (i: number) => {
    setEditingIndex(i)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const commitEdit = (i: number, value: string) => {
    const updated = intentions.map((item, idx) =>
      idx === i ? { ...item, text: value } : item
    )
    save(updated)
    setEditingIndex(null)
  }

  if (!isMounted) return null

  return (
    <div className="mb-8 space-y-3">
      <p className="text-xs font-sans uppercase tracking-widest opacity-40 font-medium">
        Today&apos;s Intentions
      </p>
      <div className="space-y-2">
        {intentions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            className="flex items-center gap-3 p-4 rounded-xl border border-border bg-foreground/[0.01] group"
          >
            <button
              onClick={() => toggleDone(i)}
              className={`flex-shrink-0 w-5 h-5 rounded-full border-2 transition-all ${
                item.done
                  ? "border-accent bg-accent"
                  : "border-border hover:border-accent/60"
              }`}
            >
              {item.done && (
                <svg viewBox="0 0 10 10" className="w-full h-full p-0.5 text-accent-foreground">
                  <path
                    d="M2 5l2.5 2.5L8 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            {editingIndex === i ? (
              <input
                ref={inputRef}
                defaultValue={item.text}
                placeholder={`Intention ${i + 1}…`}
                className="flex-1 bg-transparent focus:outline-none font-sans text-sm"
                onBlur={(e) => commitEdit(i, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitEdit(i, e.currentTarget.value)
                  if (e.key === "Escape") setEditingIndex(null)
                }}
              />
            ) : (
              <span
                onClick={() => startEdit(i)}
                className={`flex-1 font-sans text-sm cursor-text transition-all ${
                  item.done
                    ? "line-through opacity-40"
                    : item.text
                    ? "opacity-80"
                    : "opacity-25 italic"
                }`}
              >
                {item.text || `Set intention ${i + 1}…`}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
