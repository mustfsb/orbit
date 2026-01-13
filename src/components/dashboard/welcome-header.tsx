"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { motion } from "framer-motion"

export function WelcomeHeader() {
    const [userName, setUserName] = useState<string | null>(null)
    const [greeting, setGreeting] = useState("Good day")

    useEffect(() => {
        const hour = new Date().getHours()
        if (hour < 12) setGreeting("Good morning")
        else setGreeting("Good evening")

        const supabase = createClient()
        supabase.auth.getUser().then(({ data: { user } }) => {
            if (user?.user_metadata?.full_name) {
                setUserName(user.user_metadata.full_name)
            }
        })
    }, [])

    if (!userName) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <h1 className="text-2xl md:text-3xl font-serif italic tracking-tight">
                {greeting}, <span className="text-accent">{userName}</span>
            </h1>
            <p className="text-sm opacity-50 font-sans mt-1">
                Ready to cultivate your focus?
            </p>
        </motion.div>
    )
}
