"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { signup } from "@/app/auth/actions";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export function SignupForm() {
    const searchParams = useSearchParams();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const errorParam = searchParams.get('error');
        if (errorParam) {
            setError(errorParam);
        }
    }, [searchParams]);

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true);
        setError("");
        await signup(formData);
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center p-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md p-10 rounded-2xl border border-border bg-foreground/[0.02] space-y-8"
                >
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-serif italic tracking-tight text-foreground">Begin Your Journey</h1>
                        <p className="text-sm opacity-60 font-sans">Create an account to start cultivating your focus.</p>
                    </div>

                    <form action={handleSubmit} className="space-y-5">
                        {error && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-xs text-red-500 text-center font-sans p-3 rounded-lg bg-red-500/10"
                            >
                                {error}
                            </motion.p>
                        )}
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="text-xs font-medium uppercase tracking-wider opacity-60 font-sans ml-1">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:border-accent/50 transition-colors font-sans text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider opacity-60 font-sans ml-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:border-accent/50 transition-colors font-sans text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-xs font-medium uppercase tracking-wider opacity-60 font-sans ml-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                minLength={6}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:border-accent/50 transition-colors font-sans text-sm"
                            />
                        </div>

                        <div className="pt-2">
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 rounded-full bg-accent text-accent-foreground font-medium text-sm font-sans hover:opacity-90 transition-opacity shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    "Create Account"
                                )}
                            </motion.button>
                        </div>
                    </form>

                    <div className="text-center pt-2">
                        <p className="text-sm opacity-60 font-sans">
                            Already have an account?{" "}
                            <Link href="/login" className="text-accent hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </motion.div>

                <div className="mt-8 text-xs opacity-40 font-sans max-w-sm text-center">
                    By creating an account, you agree to our Terms of Service and Privacy Policy.
                </div>
            </div>
        </div>
    );
}
