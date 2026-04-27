# Auth Pages Design — /signup & /login

**Date:** 2026-04-27  
**Status:** Approved

---

## Overview

Create `/signup` and `/login` routes for Orbit. Both pages must follow the existing design system exactly — same typography scale, color tokens, button shapes, card patterns, and spacing utilities used across the rest of the marketing site.

---

## Design System Constraints

- **Font:** Inter variable (`var(--font-inter)`)
- **Colors:** CSS custom properties — `--background`, `--foreground`, `--primary`, `--primary-foreground`, `--muted`, `--muted-foreground`, `--border`
- **Buttons:** `rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 px-6 font-medium`
- **Card:** `bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10`
- **Page background:** `bg-muted` (same as pricing sections)
- **Layout:** Pages render inside the root layout — `SiteHeader` remains visible

---

## Page Layout

Both pages share the same layout structure:

```
<main> (from root layout)
  <section class="bg-muted min-h-screen flex items-center justify-center px-site py-section">
    <div class="w-full max-w-[440px]">
      <card>
        Logo (small, centered)
        Heading
        Subtext + cross-link
        Google OAuth button (outlined)
        Divider "or"
        Form fields
        Primary CTA button (full width)
      </card>
    </div>
  </section>
```

---

## /signup — Card Contents

| Element | Value |
|---|---|
| Heading | "Create your account" |
| Subtext | "Already have an account?" + link to `/login` |
| OAuth button | "Continue with Google" (outlined, Google SVG, full width) |
| Divider | "or" |
| Fields | Name, Email, Password |
| CTA | "Create account" (primary, full width) |
| Error state | Inline below form, muted-foreground red |

---

## /login — Card Contents

| Element | Value |
|---|---|
| Heading | "Welcome back" |
| Subtext | "Don't have an account?" + link to `/signup` |
| OAuth button | "Continue with Google" (outlined, Google SVG, full width) |
| Divider | "or" |
| Fields | Email, Password |
| CTA | "Log in" (primary, full width) |
| Error state | Inline below form, muted-foreground red |

---

## Auth Architecture

**Provider:** Supabase Auth via `@supabase/ssr`

### Files

| File | Purpose |
|---|---|
| `src/lib/supabase/client.ts` | Browser-side Supabase client (`createBrowserClient`) |
| `src/lib/supabase/server.ts` | Server-side Supabase client (`createServerClient`) |
| `src/app/signup/page.tsx` | Signup page (client component) |
| `src/app/login/page.tsx` | Login page (client component) |
| `src/app/auth/callback/route.ts` | OAuth code exchange → session → redirect to `/dashboard` |
| `src/middleware.ts` | Route protection — redirects unauthenticated users away from `/dashboard`; redirects logged-in users away from `/login` and `/signup` |

### Auth Flow

1. **Email/password signup:** `supabase.auth.signUp({ email, password, options: { data: { name } } })` → redirect to `/dashboard`
2. **Email/password login:** `supabase.auth.signInWithPassword({ email, password })` → redirect to `/dashboard`
3. **Google OAuth:** `supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: '/auth/callback' } })`
4. **OAuth callback:** `src/app/auth/callback/route.ts` — exchanges code for session, redirects to `/dashboard`
5. **Middleware:** Reads session from cookie, protects `/dashboard` route

### Environment Variables Required

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Component Details

### Input fields

```
label: text-sm font-medium text-foreground mb-1.5
input: w-full rounded-xl border border-border bg-background px-4 h-11 text-sm
       focus:outline-none focus:ring-2 focus:ring-ring text-foreground
       placeholder:text-muted-foreground
```

### Google button

```
outlined: w-full rounded-full border border-border bg-background hover:bg-muted
          h-11 flex items-center justify-center gap-2 text-sm font-medium
          text-foreground transition-colors
```

### Divider

```html
<div class="flex items-center gap-3 my-6">
  <hr class="flex-1 border-border" />
  <span class="text-xs text-muted-foreground">or</span>
  <hr class="flex-1 border-border" />
</div>
```

---

## Error Handling

- Supabase error messages are caught and displayed inline below the submit button
- Generic message shown to user: "Something went wrong. Please try again."
- Specific cases handled: "Invalid login credentials", "User already registered"
- Loading state: button disabled + spinner icon during async calls

---

## Redirect Logic

| Scenario | Redirect |
|---|---|
| Signup success | `/dashboard` |
| Login success | `/dashboard` |
| OAuth callback success | `/dashboard` |
| Already logged in visits `/login` or `/signup` | `/dashboard` |
| Unauthenticated visits `/dashboard` | `/login` |

---

## Out of Scope

- Password reset / forgot password flow
- Email verification UI
- Social providers beyond Google
- Profile page
