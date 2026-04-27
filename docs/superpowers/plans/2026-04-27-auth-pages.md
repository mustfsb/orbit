# Auth Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `/signup` and `/login` pages with Supabase Auth (email/password + Google OAuth), matching the existing Orbit design system exactly.

**Architecture:** Client components handle form state and Supabase auth calls. A server-side OAuth callback route exchanges the OAuth code for a session. Next.js middleware protects `/dashboard` and redirects already-authenticated users away from auth pages.

**Tech Stack:** Next.js 14 App Router, `@supabase/ssr`, `@supabase/supabase-js`, Tailwind CSS, TypeScript

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Create | `src/lib/supabase/client.ts` | Browser-side Supabase client factory |
| Create | `src/lib/supabase/server.ts` | Server-side Supabase client factory (cookie-aware) |
| Create | `src/app/auth/callback/route.ts` | OAuth PKCE code exchange → session → redirect |
| Create | `src/app/signup/page.tsx` | Signup form — name, email, password + Google OAuth |
| Create | `src/app/login/page.tsx` | Login form — email, password + Google OAuth |
| Create | `src/middleware.ts` | Route guard — protect `/dashboard`, redirect authed users from auth pages |
| Create | `.env.local` | Supabase env vars (not committed) |

---

## Task 1: Install Supabase packages

**Files:** `package.json`, `package-lock.json`

- [ ] **Step 1: Install dependencies**

```bash
npm install @supabase/ssr @supabase/supabase-js
```

Expected output: `added X packages` with no errors.

- [ ] **Step 2: Verify install**

```bash
node -e "require('@supabase/ssr'); require('@supabase/supabase-js'); console.log('ok')"
```

Expected: `ok`

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add @supabase/ssr and @supabase/supabase-js"
```

---

## Task 2: Add environment variables

**Files:** `.env.local`

- [ ] **Step 1: Create `.env.local`**

Create the file at the project root with these keys (fill in values from your Supabase project → Settings → API):

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

- [ ] **Step 2: Verify `.env.local` is git-ignored**

```bash
grep -r "\.env" .gitignore
```

Expected: `.env.local` or `.env*` appears. If not, add it:

```bash
echo ".env.local" >> .gitignore
```

*(Do not commit `.env.local` — it contains secrets.)*

---

## Task 3: Create Supabase client utilities

**Files:**
- Create: `src/lib/supabase/client.ts`
- Create: `src/lib/supabase/server.ts`

- [ ] **Step 1: Create browser client**

Create `src/lib/supabase/client.ts`:

```ts
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

- [ ] **Step 2: Create server client**

Create `src/lib/supabase/server.ts`:

```ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server component — cookie writes are ignored safely
          }
        },
      },
    }
  );
}
```

- [ ] **Step 3: Type-check**

```bash
npm run typecheck
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/supabase/client.ts src/lib/supabase/server.ts
git commit -m "feat: add Supabase browser and server client utilities"
```

---

## Task 4: Create OAuth callback route

**Files:**
- Create: `src/app/auth/callback/route.ts`

- [ ] **Step 1: Create the route handler**

Create `src/app/auth/callback/route.ts`:

```ts
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(`${origin}/dashboard`);
}
```

- [ ] **Step 2: Type-check**

```bash
npm run typecheck
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/auth/callback/route.ts
git commit -m "feat: add OAuth callback route handler"
```

---

## Task 5: Create middleware for route protection

**Files:**
- Create: `src/middleware.ts`

- [ ] **Step 1: Create middleware**

Create `src/middleware.ts` at the project root (next to `src/`):

```ts
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Unauthenticated user trying to access /dashboard → send to /login
  if (!user && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Authenticated user visiting auth pages → send to /dashboard
  if (user && (pathname === "/login" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
```

- [ ] **Step 2: Type-check**

```bash
npm run typecheck
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/middleware.ts
git commit -m "feat: add route protection middleware for dashboard and auth pages"
```

---

## Task 6: Create /signup page

**Files:**
- Create: `src/app/signup/page.tsx`

- [ ] **Step 1: Create the signup page**

Create `src/app/signup/page.tsx`:

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

    router.push("/dashboard");
  };

  const handleGoogle = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-site py-section"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="w-full max-w-[440px]">
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
```

- [ ] **Step 2: Type-check**

```bash
npm run typecheck
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/signup/page.tsx
git commit -m "feat: add /signup page with email/password and Google OAuth"
```

---

## Task 7: Create /login page

**Files:**
- Create: `src/app/login/page.tsx`

- [ ] **Step 1: Create the login page**

Create `src/app/login/page.tsx`:

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      if (error.message.toLowerCase().includes("invalid login")) {
        setError("Invalid email or password.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      return;
    }

    router.push("/dashboard");
  };

  const handleGoogle = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-site py-section"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="w-full max-w-[440px]">
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
                Welcome back
              </h1>
              <p className="font-sans text-[14px] leading-[21px] text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-foreground hover:underline underline-offset-2 transition-colors"
                >
                  Sign up
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
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                placeholder="Your password"
                required
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
              {loading ? "Logging in…" : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
npm run typecheck
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/login/page.tsx
git commit -m "feat: add /login page with email/password and Google OAuth"
```

---

## Task 8: Verify end-to-end in dev

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Check /signup**

Open `http://localhost:3000/signup`. Verify:
- Card renders centered on muted background
- Logo links to `/`
- "Log in" link goes to `/login`
- All three form fields present
- Google button shows Google icon
- "Create account" button is full width, rounded-full, primary color

- [ ] **Step 3: Check /login**

Open `http://localhost:3000/login`. Verify:
- "Welcome back" heading
- "Sign up" link goes to `/signup`
- Email + password fields present
- Google button present
- "Log in" button full width

- [ ] **Step 4: Check dark mode**

Toggle dark mode via the header theme button. Verify both pages adapt correctly — card background, text, border, input backgrounds all switch.

- [ ] **Step 5: Check middleware redirect**

While logged out, navigate to `http://localhost:3000/dashboard`. Verify you are redirected to `/login`.
