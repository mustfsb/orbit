"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/auth-context"
import { motion } from "framer-motion"

export function WelcomeHeader() {
    const { user } = useAuth()
    const [greeting, setGreeting] = useState("Good day")

    useEffect(() => {
        const hour = new Date().getHours()
        if (hour < 12) setGreeting("Good morning")
        else setGreeting("Good evening")
    }, [])

    const userName = user?.user_metadata?.full_name as string | undefined

    if (!userName) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <h1 className="text-2xl md:text-3xl font-sans tracking-tight">
                {greeting}, <span className="text-accent">{userName}</span>
            </h1>
            <p className="text-sm opacity-50 font-sans mt-1">
                Ready to cultivate your focus?
            </p>
        </motion.div>
    )
}
