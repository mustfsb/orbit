# Pricing Dark Cards + Navbar Theme Toggle — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle pricing cards (Free/Pro dark, Teams white + Pro featured ring), add a dark/light toggle button and Signup button to the navbar, and wire up full dark mode compatibility with anti-FOIT.

**Architecture:** A new `"use client"` component (`NavActions`) handles all client-side theme logic and is imported into the server-component layout via `next/dynamic` with `ssr: false`. Theme state lives in `localStorage` under `"orbit-theme"`. An inline script in `<head>` applies the class synchronously before first paint to prevent flash.

**Tech Stack:** Next.js 14 App Router, Tailwind CSS (`darkMode: "class"`), CSS custom properties in `public/css/theme.css`

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Create | `src/components/ui/NavActions.tsx` | Client component — theme toggle button + Signup button |
| Modify | `src/app/layout.tsx` | Anti-FOIT script, logo dark:invert, import NavActions |
| Modify | `src/app/pricing/page.tsx` | Pricing card reskin (Free dark, Pro dark+ring, Teams white) |
| Modify | `src/app/page.tsx` | Same card reskin in homepage pricing section |

---

## Task 1: Create `NavActions` client component

**Files:**
- Create: `src/components/ui/NavActions.tsx`

- [ ] **Step 1: Create the file**

```tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function NavActions() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = localStorage.getItem("orbit-theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(initial);
  }, []);

  const toggle = () => {
    const next: "dark" | "light" = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    localStorage.setItem("orbit-theme", next);
    setTheme(next);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggle}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        className="w-9 h-9 rounded-full bg-muted hover:bg-accent transition-colors flex items-center justify-center text-foreground/70 hover:text-foreground"
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
      <Link href="/signup">
        <button
          type="button"
          className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-9 px-4 text-sm"
        >
          Sign up
        </button>
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Verify file exists**

```bash
ls src/components/ui/NavActions.tsx
```

Expected: file path printed, no error.

---

## Task 2: Update `layout.tsx`

**Files:**
- Modify: `src/app/layout.tsx`

Three changes: anti-FOIT script in `<head>`, `dark:invert` on logo, dynamic import + render of `NavActions`.

- [ ] **Step 1: Add dynamic import at the top of the file** (after existing imports)

```tsx
import dynamic from "next/dynamic";

const NavActions = dynamic(
  () => import("@/components/ui/NavActions").then((m) => ({ default: m.NavActions })),
  { ssr: false }
);
```

- [ ] **Step 2: Add anti-FOIT script as first child of `<head>`**

Locate the `<head>` block. Add this as the **first child**, before the preload `<link>` tags:

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `(function(){try{var t=localStorage.getItem('orbit-theme');if(t==='dark'||t==='light'){document.documentElement.classList.add(t);return;}if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}else{document.documentElement.classList.add('light');}}catch(e){}})();`,
  }}
/>
```

- [ ] **Step 3: Add `dark:invert` to the header logo `<Image>`**

Find the `<Image>` in the `<header>` that renders `/images/logo.svg`. Add `dark:invert` to its `className`:

```tsx
<Image
  src="/images/logo.svg"
  alt="Orbit"
  width={62}
  height={24}
  priority
  className="h-6 w-auto dark:invert"
/>
```

- [ ] **Step 4: Add `NavActions` to the header right slot**

Find the `<div className="flex items-center justify-between">` inside the header. The right side currently has only the `<nav>` (desktop links) and nothing on the far right. Add `<NavActions />` after the `<nav>`:

```tsx
<div className="flex items-center justify-between">
  <Link href="/" className="flex items-center">
    <Image
      src="/images/logo.svg"
      alt="Orbit"
      width={62}
      height={24}
      priority
      className="h-6 w-auto dark:invert"
    />
  </Link>
  <nav className="hidden lg:flex items-center gap-4">
    <ul className="flex flex-1 list-none items-center justify-center gap-1">
      <li className="relative">
        <Link href="/about" className="hover:bg-muted focus:bg-muted rounded-md py-2 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 inline-flex h-9 w-max items-center justify-center bg-transparent px-3 tracking-wide">
          About Us
        </Link>
      </li>
      <li className="relative">
        <Link href="/policies-and-priorities" className="hover:bg-muted focus:bg-muted rounded-md py-2 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 inline-flex h-9 w-max items-center justify-center bg-transparent px-3 tracking-wide">
          Policies
        </Link>
      </li>
      <li className="relative">
        <Link href="/resources" className="hover:bg-muted focus:bg-muted rounded-md py-2 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 inline-flex h-9 w-max items-center justify-center bg-transparent px-3 tracking-wide">
          Resources
        </Link>
      </li>
      <li className="relative">
        <Link href="/news" className="cursor-pointer border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] inline-flex items-center justify-center whitespace-nowrap transition-all outline-none select-none hover:bg-muted rounded-md h-9 gap-1 px-3 text-sm tracking-wide text-foreground/90 hover:text-foreground">
          News
        </Link>
      </li>
    </ul>
  </nav>
  <NavActions />
</div>
```

- [ ] **Step 5: Verify build still compiles**

```bash
npm run build
```

Expected: `✓ Compiled successfully`, 24/24 static pages generated, no TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/NavActions.tsx src/app/layout.tsx
git commit -m "feat: add theme toggle button and signup button to navbar"
```

---

## Task 3: Restyle pricing cards in `src/app/pricing/page.tsx`

**Files:**
- Modify: `src/app/pricing/page.tsx`

Replace the **Free** card (currently `bg-background`) and update the **Pro** card (add ring + Popular badge). Teams card is unchanged.

- [ ] **Step 1: Replace the Free card block**

Find the `{/* Free */}` comment block. Replace the entire `<div>` from opening to closing tag with:

```tsx
{/* Free */}
<div className="bg-primary rounded-2xl p-8 lg:p-10 flex flex-col gap-6">
  <div>
    <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60 mb-2">
      Free
    </p>
    <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-primary-foreground">
      $0
    </p>
  </div>
  <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80">
    Tasks, focus timer, goals, and journal — always free, no card
    required.
  </p>
  <ul className="space-y-2 flex-1">
    {plans[0].features.map((f) => (
      <li
        key={f}
        className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80 flex items-center gap-2"
      >
        <span className="text-primary-foreground/40">✓</span>
        {f}
      </li>
    ))}
  </ul>
  <Link href="/dashboard">
    <button
      type="button"
      className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 px-6 text-base w-full"
    >
      Get started
    </button>
  </Link>
</div>
```

- [ ] **Step 2: Replace the Pro card block** (add ring + Popular badge)

Find the `{/* Pro */}` comment block. Replace:

```tsx
{/* Pro */}
<div className="bg-primary rounded-2xl ring-2 ring-primary-foreground/30 ring-offset-2 ring-offset-muted p-8 lg:p-10 flex flex-col gap-6">
  <div>
    <div className="flex items-center justify-between mb-2">
      <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">
        Pro
      </p>
      <span className="font-sans text-[11px] font-semibold bg-primary-foreground text-primary rounded-full px-2 py-0.5">
        Popular
      </span>
    </div>
    <div className="flex items-baseline gap-1">
      <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-primary-foreground">
        $9
      </p>
      <span className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">
        /month
      </span>
    </div>
  </div>
  <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80">
    Everything in Free, plus the AI planner and full cross-device
    sync.
  </p>
  <ul className="space-y-2 flex-1">
    {plans[1].features.map((f) => (
      <li
        key={f}
        className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80 flex items-center gap-2"
      >
        <span className="text-primary-foreground/40">✓</span>
        {f}
      </li>
    ))}
  </ul>
  <Link href="/waitlist">
    <button
      type="button"
      className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 px-6 text-base w-full"
    >
      Join waitlist
    </button>
  </Link>
</div>
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: `✓ Compiled successfully`, no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/pricing/page.tsx
git commit -m "feat: restyle pricing cards — Free/Pro dark, Pro featured ring"
```

---

## Task 4: Restyle pricing cards in `src/app/page.tsx`

**Files:**
- Modify: `src/app/page.tsx`

The homepage has the same three cards inlined in the pricing section. Apply identical changes.

- [ ] **Step 1: Replace the Free card block in homepage**

Find the Free card in the pricing section (recognisable by `$0` and `"Unlimited tasks"` feature list). Replace the outer `<div>` through its closing tag with:

```tsx
<div className="bg-primary rounded-2xl p-8 lg:p-10 flex flex-col gap-6">
  <div>
    <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60 mb-2">
      Free
    </p>
    <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-primary-foreground">
      $0
    </p>
  </div>
  <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80">
    Tasks, focus timer, goals, and journal — always free, no card
    required.
  </p>
  <ul className="space-y-2 flex-1">
    {[
      "Unlimited tasks",
      "Pomodoro focus timer",
      "Goal tracking",
      "Journal entries",
      "Basic analytics",
    ].map((f) => (
      <li
        key={f}
        className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80"
      >
        {f}
      </li>
    ))}
  </ul>
  <Link href="/dashboard">
    <button
      type="button"
      className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 px-6 text-base w-full"
    >
      Get started
    </button>
  </Link>
</div>
```

- [ ] **Step 2: Replace the Pro card block in homepage** (add Popular badge)

Find the Pro card (recognisable by `$9` and `text-primary-foreground`). Replace the outer `<div>` through its closing tag with:

```tsx
<div className="bg-primary rounded-2xl ring-2 ring-primary-foreground/30 ring-offset-2 ring-offset-muted p-8 lg:p-10 flex flex-col gap-6">
  <div>
    <div className="flex items-center justify-between mb-2">
      <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">
        Pro
      </p>
      <span className="font-sans text-[11px] font-semibold bg-primary-foreground text-primary rounded-full px-2 py-0.5">
        Popular
      </span>
    </div>
    <div className="flex items-baseline gap-1">
      <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-primary-foreground">
        $9
      </p>
      <span className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">
        /month
      </span>
    </div>
  </div>
  <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80">
    Everything in Free, plus the AI planner and full cross-device
    sync.
  </p>
  <ul className="space-y-2 flex-1">
    {[
      "AI weekly planner",
      "Cross-device sync",
      "Planner history",
      "Advanced analytics",
      "Priority support",
    ].map((f) => (
      <li
        key={f}
        className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80"
      >
        {f}
      </li>
    ))}
  </ul>
  <Link href="/pricing">
    <button
      type="button"
      className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 px-6 text-base w-full"
    >
      Join waitlist
    </button>
  </Link>
</div>
```

- [ ] **Step 3: Final build verification**

```bash
npm run build
```

Expected: `✓ Compiled successfully`, `✓ Generating static pages (24/24)`, zero TypeScript or lint errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: restyle homepage pricing cards to match dark/featured treatment"
```
