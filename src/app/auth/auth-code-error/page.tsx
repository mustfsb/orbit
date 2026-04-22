"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { XCircle, ArrowLeft } from "lucide-react"

export default function AuthCodeErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md text-center"
            >
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-10 h-10 text-red-500" />
                </div>

                <h1 className="text-3xl font-sans tracking-tight mb-4">
                    Verification Failed
                </h1>

                <p className="text-sm opacity-60 font-sans mb-8 leading-relaxed">
                    The verification link may have expired or is invalid.
                    Please try signing up again or request a new verification email.
                </p>

                <div className="space-y-4">
                    <Link
                        href="/signup"
                        className="inline-block w-full rounded-full bg-accent px-8 py-3 text-sm font-medium font-sans text-accent-foreground transition-opacity hover:opacity-90"
                    >
                        Try Again
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 text-sm opacity-60 hover:opacity-100 font-sans transition-opacity"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
