"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";

export default function SignupConfirmPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-md text-center"
            >
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-accent bg-accent">
                    <Mail className="w-10 h-10 text-accent-foreground" />
                </div>

                <h1 className="text-3xl font-sans tracking-tight mb-4">
                    Check Your Email
                </h1>

                <p className="text-sm opacity-60 font-sans mb-8 leading-relaxed">
                    We&apos;ve sent a confirmation link to your email address.
                    Please click the link to verify your account and start your focus journey.
                </p>

                <div className="p-6 rounded-2xl border border-border bg-foreground/[0.02] mb-8">
                    <p className="text-xs opacity-40 font-sans">
                        Didn&apos;t receive the email? Check your spam folder or try signing up again.
                    </p>
                </div>

                <Link
                    href="/login"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-sans"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Login
                </Link>
            </motion.div>
        </div>
    );
}
