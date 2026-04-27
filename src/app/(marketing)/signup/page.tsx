"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    setLoading(false);

    if (error) {
      if (error.message.toLowerCase().includes("already registered")) {
        setError("An account with this email already exists.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      return;
    }

    setSent(true);
  };

  useEffect(() => {
    if (!sent) return;
    const supabase = createClient();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push("/dashboard");
      }
    });
    return () => subscription.unsubscribe();
  }, [sent, router]);

  const handleGoogle = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  if (sent) {
    return (
      <section className="flex items-center justify-center px-4 py-16 bg-muted">
        <div style={{ width: "min(440px, 100%)" }}>
          <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col items-center gap-5 text-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h2 className="font-sans text-[20px] leading-[26px] tracking-[-0.4px] font-semibold text-foreground mb-1.5">
                Check your email
              </h2>
              <p className="font-sans text-[14px] leading-[21px] text-muted-foreground">
                We sent a verification link to{" "}
                <span className="text-foreground font-medium">{email}</span>.
                Click the link to activate your account.
              </p>
            </div>
            <p className="font-sans text-[12px] text-muted-foreground/70">
              This page will redirect automatically once verified.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center justify-center px-4 py-16 bg-muted">
      <div style={{ width: "min(440px, 100%)" }}>
        <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-5">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Orbit"
                width={62}
                height={24}
                className="h-6 w-auto dark:invert"
              />
            </Link>
            <div className="text-center">
              <h1 className="font-sans text-[24px] leading-[30px] tracking-[-0.48px] font-semibold text-foreground mb-1.5">
                Create your account
              </h1>
              <p className="font-sans text-[14px] leading-[21px] text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-foreground hover:underline underline-offset-2 transition-colors"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>

          {/* Google OAuth */}
          <button
            type="button"
            onClick={handleGoogle}
            className="cursor-pointer w-full rounded-full border border-border bg-background hover:bg-muted h-11 flex items-center justify-center gap-2.5 font-sans text-[14px] font-medium text-foreground transition-colors"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-1 border-border" />
            <span className="font-sans text-[12px] text-muted-foreground">or</span>
            <hr className="flex-1 border-border" />
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="font-sans text-[13px] font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-border bg-background px-4 h-11 font-sans text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-sans text-[13px] font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-border bg-background px-4 h-11 font-sans text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="font-sans text-[13px] font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 6 characters"
                required
                minLength={6}
                className="w-full rounded-xl border border-border bg-background px-4 h-11 font-sans text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
            </div>

            {error && (
              <p
                className="font-sans text-[13px]"
                style={{ color: "var(--destructive)" }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 px-6 text-[14px] w-full disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
