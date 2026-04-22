"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle2, Sparkles } from "lucide-react"

export default function EmailConfirmedPage() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(3)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    router.push("/dashboard")
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-md text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500/10 flex items-center justify-center"
                >
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h1 className="text-3xl font-sans tracking-tight mb-4">
                        Email Verified!
                    </h1>

                    <p className="text-sm opacity-60 font-sans mb-8 leading-relaxed">
                        Your account has been confirmed successfully.
                        Welcome to Orbit — your focus journey begins now.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-accent font-sans text-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>Redirecting to dashboard in {countdown}...</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12"
                >
                    <button
                        onClick={() => router.push("/dashboard")}
                        className="rounded-full bg-accent px-8 py-3 text-sm font-medium font-sans text-accent-foreground transition-opacity hover:opacity-90"
                    >
                        Go to Dashboard Now
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}
