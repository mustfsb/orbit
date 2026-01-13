"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/page-wrapper";
import { login } from "@/app/auth/actions";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
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
    await login(formData);
    setIsLoading(false);
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <motion.div
            className="w-full max-w-md p-10 rounded-2xl border border-border bg-foreground/[0.02] space-y-8"
          >
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-serif italic tracking-tight text-foreground">Welcome Back</h1>
              <p className="text-sm opacity-60 font-sans">Enter your credentials to access your workspace.</p>
            </div>

            <form action={handleSubmit} className="space-y-6">
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
                <div className="flex items-center justify-between ml-1">
                  <label htmlFor="password" className="text-xs font-medium uppercase tracking-wider opacity-60 font-sans">
                    Password
                  </label>
                  <a href="#" className="text-xs text-accent hover:underline font-sans">Forgot?</a>
                </div>
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

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-full bg-accent text-accent-foreground font-medium text-sm font-sans hover:opacity-90 transition-opacity shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Sign In"
                )}
              </motion.button>
            </form>

            <div className="text-center pt-4">
              <p className="text-sm opacity-60 font-sans">
                New to Orbit?{" "}
                <Link href="/signup" className="text-accent hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
