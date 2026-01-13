"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, X, CornerDownLeft, Sparkles } from "lucide-react"
import { useTasks } from "@/context/task-context"
import { useTimer } from "@/context/timer-context"

export function DistractionBuffer() {
    const [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const { addTask } = useTasks()
    const { activeTaskText, mode } = useTimer()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setIsOpen(prev => !prev)
            }
            if (e.key === "Escape") {
                setIsOpen(false)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100)
        }
    }, [isOpen])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) return

        let finalText = text
        if (activeTaskText && mode === 'focus') {
            finalText += ` (while focusing on: ${activeTaskText})`
        }

        await addTask(finalText, "distraction")
        setText("")
        setIsOpen(false)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        className="relative w-full max-w-lg bg-background border border-border rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6 opacity-50">
                                <Brain className="w-5 h-5 text-accent" />
                                <h3 className="text-sm font-serif italic tracking-wider">Distraction Buffer</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="relative">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="What's on your mind? Capture it and return to flow..."
                                    className="w-full bg-transparent text-2xl font-serif italic placeholder:text-foreground/20 focus:outline-none py-4 pr-12 text-foreground"
                                />
                                <button
                                    type="submit"
                                    disabled={!text.trim()}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-foreground/5 disabled:opacity-0 transition-all opacity-100"
                                >
                                    <CornerDownLeft className="w-5 h-5 opacity-50" />
                                </button>
                            </form>

                            <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-widest opacity-40 font-sans font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 rounded border border-foreground/20">ESC</span> to close
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 rounded border border-foreground/20">↵ Enter</span> to save
                                </div>
                            </div>
                        </div>

                        {/* Ambient decoration */}
                        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
