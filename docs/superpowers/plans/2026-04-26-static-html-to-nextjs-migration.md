# Static HTML to Next.js Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert 18 static HTML pages from `public/landing/` into proper Next.js TSX pages under `src/app/`, using the existing `MarketingPage` wrapper so the Orbit Navbar appears identically on every route.

**Architecture:** Each HTML page's `<main>` content is extracted and rewritten as clean TSX (no dangerouslySetInnerHTML). All pages wrap content in the existing `MarketingPage` component. Missing CSS variables and custom Tailwind utilities are added to `globals.css` and `tailwind.config.ts` first so Tailwind classes from the original HTML compile correctly.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, CSS custom properties, `next/image`, `next/link`

**Spec:** `docs/superpowers/specs/2026-04-26-static-html-to-nextjs-migration-design.md`

---

## Conversion Rules (read before every task)

When converting HTML → TSX:

1. Read the source HTML file. Extract ONLY what is inside `<main id="main-content">` tags. Ignore `<head>`, `<header>`, `<footer>`, and all `<script>` tags.
2. Convert HTML attributes to JSX: `class` → `className`, `for` → `htmlFor`, `tabindex` → `tabIndex`, `strokewidth` → `strokeWidth`, `viewbox` → `viewBox`, etc.
3. Self-close void elements: `<img />`, `<br />`, `<hr />`, `<input />`.
4. Replace `<img>` with Next.js `<Image>` from `"next/image"` when `src` starts with `/` (local asset). Use appropriate `width` and `height`.
5. Replace `<a href="/...">` with `<Link href="/...">` from `"next/link"` for internal links. Keep `<a>` for external `https://` links.
6. Keep ALL Tailwind class strings as-is — they will compile once CSS infra is in place.
7. Remove any `data-nimg`, `data-rsc-css-href`, `data-static-nav-link`, `fetchpriority`, `decoding`, `data-slot` attributes — they are vinext internals.
8. Remove HTML comments (`<!-- -->`).
9. Wrap the whole page in `<MarketingPage>` and export a default function.
10. Add a `metadata` export with a page-specific `title` and `description`.
11. SVG icons may be kept inline as JSX or extracted as small helper components above the default export.

---

## Task 0: CSS Infrastructure

**Files:**
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Add CSS custom properties to `src/app/globals.css`**

Open `src/app/globals.css` and add the following at the end of the file (after the existing `:root` and `html.light` blocks). These variables are required by the Tailwind classes used in the migrated pages.

```css
/* ── Site spacing tokens (used by custom Tailwind utilities) ── */
:root {
  --site-max-w: 1250px;
  --site-px: 24px;
  --section-py: 80px;
  --section-py-tight: 64px;
  --section-py-loose: 96px;
}

/* ── Orbit CIO theme variables (dark) ── */
html.dark {
  color-scheme: dark;
  --background: #1a1a1a;
  --foreground: #e8e4df;
  --card: #2a2a2a;
  --card-foreground: #e8e4df;
  --popover: #2a2a2a;
  --popover-foreground: #e8e4df;
  --primary: #e8e4df;
  --primary-foreground: #1a1a1a;
  --secondary: #222;
  --secondary-foreground: #e8e4df;
  --muted: #222;
  --muted-foreground: #9a9590;
  --accent: #333;
  --accent-foreground: #e8e4df;
  --destructive: oklch(70.4% 0.191 22.216);
  --border: #ffffff0f;
  --input: #ffffff14;
  --ring: #706b66;
}

/* ── Orbit CIO theme variables (light) ── */
html.light {
  color-scheme: light;
  --background: #f5f3f0;
  --foreground: #1a1816;
  --card: #fff;
  --card-foreground: #1a1816;
  --popover: #fff;
  --popover-foreground: #1a1816;
  --primary: #1a1816;
  --primary-foreground: #f5f3f0;
  --secondary: #eceae7;
  --secondary-foreground: #1a1816;
  --muted: #eceae7;
  --muted-foreground: #6b6560;
  --accent: #eceae7;
  --accent-foreground: #1a1816;
  --destructive: oklch(58% 0.22 27);
  --border: #00000012;
  --input: #00000012;
  --ring: #9a948f;
}

/* ── Custom Tailwind utilities (site layout) ── */
@layer utilities {
  .max-w-site { max-width: var(--site-max-w); }
  .px-site    { padding-inline: var(--site-px); }
  .py-section        { padding-block: var(--section-py); }
  .py-section-tight  { padding-block: var(--section-py-tight); }
  .py-section-loose  { padding-block: var(--section-py-loose); }
  .bg-primary { background-color: var(--primary); }
  .text-primary-foreground { color: var(--primary-foreground); }
  .bg-muted { background-color: var(--muted); }
  .text-muted-foreground { color: var(--muted-foreground); }
  .text-card-foreground { color: var(--card-foreground); }
  .border-border { border-color: var(--border); }
  .ring-foreground\/10 { --tw-ring-color: rgb(from var(--foreground) r g b / 0.10); }
}
```

- [ ] **Step 2: Update `tailwind.config.ts` to recognise CSS variable colors**

Replace the contents of `tailwind.config.ts` with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: "var(--border)",
        ring: "var(--ring)",
        input: "var(--input)",
      },
      maxWidth: {
        site: "var(--site-max-w)",
      },
      fontFamily: {
        sans: ["var(--font-geist)"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 3: Verify build still compiles**

```bash
cd /Users/mustafa/Downloads/orbit
npm run build
```

Expected: build succeeds (pricing page still works, no CSS errors).

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css tailwind.config.ts
git commit -m "feat: add CIO theme CSS variables and site spacing utilities"
```

---

## Task 1: `/about` page

**Files:**
- Source HTML: `public/landing/about/index.html` → read the `<main>` content
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create `src/app/about/page.tsx`**

Read `public/landing/about/index.html`, extract the `<main>` element content, convert HTML→JSX following the Conversion Rules at the top of this document, and write the file:

```tsx
import type { Metadata } from "next";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "About | CIO Council",
  description:
    "Learn about the CIO Council — the body that brings together Chief Information Officers from across the federal government to improve how agencies design, acquire, develop, and manage information resources.",
};

export default function AboutPage() {
  return (
    <MarketingPage>
      {/* Paste the converted <main> content here */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Open `public/landing/about/index.html`. Find the `<main id="main-content">` tag and copy everything inside it. Convert it to JSX (follow Conversion Rules). Replace the comment above with the real JSX. Keep Tailwind class strings unchanged.

- [ ] **Step 2: Verify page renders**

```bash
npm run dev
```

Open `http://localhost:3000/about` — page must show the Orbit Navbar and the About page content (title "Technology Leadership, Unified Purpose", stat cards for "24+ Federal Agencies", "2 Sub-Councils", "2002 Established").

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: add /about page from static HTML"
```

---

## Task 2: `/about/members-and-leadership` page

**Files:**
- Source HTML: `public/landing/about/members-and-leadership/index.html`
- Create: `src/app/about/members-and-leadership/page.tsx`

- [ ] **Step 1: Create `src/app/about/members-and-leadership/page.tsx`**

Read `public/landing/about/members-and-leadership/index.html`, extract `<main>`, convert, wrap:

```tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Members & Leadership | CIO Council",
  description: "Meet the members and leadership of the Federal CIO Council.",
};

export default function MembersAndLeadershipPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/about/members-and-leadership/index.html`. Extract the `<main>` content and convert to JSX. Member profile images use paths like `/assets/images/members/bio-gregb.jpeg` — keep them as Next.js `<Image>` with width/height guessed from context (use 200x200 for avatar-style images). Internal links to `/about/members-and-leadership/...` should use `<Link>`.

- [ ] **Step 2: Verify**

```bash
npm run dev
```

`http://localhost:3000/about/members-and-leadership` shows Navbar + member grid.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/members-and-leadership/page.tsx
git commit -m "feat: add /about/members-and-leadership page"
```

---

## Task 3: Member profile — Gregory Barbaccia

**Files:**
- Source HTML: `public/landing/about/members-and-leadership/barbaccia-gregory/index.html`
- Create: `src/app/about/members-and-leadership/barbaccia-gregory/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Gregory Barbaccia | CIO Council",
  description: "Profile of Gregory Barbaccia, member of the Federal CIO Council.",
};

export default function BarbacciaPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/about/members-and-leadership/barbaccia-gregory/index.html`. Extract `<main>` content and convert following the rules.

- [ ] **Step 2: Verify** — `http://localhost:3000/about/members-and-leadership/barbaccia-gregory`

- [ ] **Step 3: Commit**

```bash
git add src/app/about/members-and-leadership/barbaccia-gregory/page.tsx
git commit -m "feat: add barbaccia-gregory member profile page"
```

---

## Task 4: Member profile — Michael Duffy

**Files:**
- Source HTML: `public/landing/about/members-and-leadership/duffy-michael/index.html`
- Create: `src/app/about/members-and-leadership/duffy-michael/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Michael Duffy | CIO Council",
  description: "Profile of Michael Duffy, member of the Federal CIO Council.",
};

export default function DuffyPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/about/members-and-leadership/duffy-michael/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/about/members-and-leadership/duffy-michael`

- [ ] **Step 3: Commit**

```bash
git add src/app/about/members-and-leadership/duffy-michael/page.tsx
git commit -m "feat: add duffy-michael member profile page"
```

---

## Task 5: Member profile — David Shive

**Files:**
- Source HTML: `public/landing/about/members-and-leadership/shive-david/index.html`
- Create: `src/app/about/members-and-leadership/shive-david/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "David Shive | CIO Council",
  description: "Profile of David Shive, Vice Chair of the Federal CIO Council.",
};

export default function ShivePage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/about/members-and-leadership/shive-david/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/about/members-and-leadership/shive-david`

- [ ] **Step 3: Commit**

```bash
git add src/app/about/members-and-leadership/shive-david/page.tsx
git commit -m "feat: add shive-david member profile page"
```

---

## Task 6: `/news` listing page

**Files:**
- Source HTML: `public/landing/news/index.html`
- Create: `src/app/news/page.tsx`

- [ ] **Step 1: Create `src/app/news/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "News | CIO Council",
  description:
    "News and updates from the Federal Chief Information Officers Council.",
};

export default function NewsPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/news/index.html`. Extract `<main>`. The page has a hero `<h1>News</h1>` followed by a sidebar + article card grid. Convert all `<a href="/news/...">` to `<Link>`. Keep all Tailwind classes.

- [ ] **Step 2: Verify** — `http://localhost:3000/news` shows Navbar + news article cards.

- [ ] **Step 3: Commit**

```bash
git add src/app/news/page.tsx
git commit -m "feat: add /news listing page"
```

---

## Task 7: News article — AI in Action

**Files:**
- Source HTML: `public/landing/news/ai-in-action/index.html`
- Create: `src/app/news/ai-in-action/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "AI in Action | CIO Council News",
  description: "CIO Council news article on AI in Action.",
};

export default function AiInActionPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/news/ai-in-action/index.html`. Extract `<main>`. Article pages include a breadcrumb bar at top (inside main), followed by article body sections. Convert breadcrumb `<a>` links to `<Link>`. Convert inline SVG chevrons to JSX (change attribute names to camelCase).

- [ ] **Step 2: Verify** — `http://localhost:3000/news/ai-in-action`

- [ ] **Step 3: Commit**

```bash
git add src/app/news/ai-in-action/page.tsx
git commit -m "feat: add /news/ai-in-action article page"
```

---

## Task 8: News article — AI Policy

**Files:**
- Source HTML: `public/landing/news/ai-policy/index.html`
- Create: `src/app/news/ai-policy/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "AI Policy | CIO Council News",
  description: "CIO Council news article on AI Policy.",
};

export default function AiPolicyPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/news/ai-policy/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/news/ai-policy`

- [ ] **Step 3: Commit**

```bash
git add src/app/news/ai-policy/page.tsx
git commit -m "feat: add /news/ai-policy article page"
```

---

## Task 9: News article — Federal Zero Trust Data Security Guide

**Files:**
- Source HTML: `public/landing/news/federal-zero-trust-data-security-guide/index.html`
- Create: `src/app/news/federal-zero-trust-data-security-guide/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Federal Zero Trust Data Security Guide | CIO Council News",
  description: "CIO Council news article on the Federal Zero Trust Data Security Guide.",
};

export default function FederalZeroTrustPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/news/federal-zero-trust-data-security-guide/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/news/federal-zero-trust-data-security-guide`

- [ ] **Step 3: Commit**

```bash
git add src/app/news/federal-zero-trust-data-security-guide/page.tsx
git commit -m "feat: add federal-zero-trust-data-security-guide article page"
```

---

## Task 10: News article — NCAM 2023

**Files:**
- Source HTML: `public/landing/news/2023-10-23-ncam-2023-protecting-yourself-online/index.html`
- Create: `src/app/news/2023-10-23-ncam-2023-protecting-yourself-online/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "NCAM 2023: Protecting Yourself Online | CIO Council News",
  description: "National Cybersecurity Awareness Month 2023 — tips for protecting yourself online.",
};

export default function Ncam2023Page() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/news/2023-10-23-ncam-2023-protecting-yourself-online/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/news/2023-10-23-ncam-2023-protecting-yourself-online`

- [ ] **Step 3: Commit**

```bash
git add "src/app/news/2023-10-23-ncam-2023-protecting-yourself-online/page.tsx"
git commit -m "feat: add ncam-2023 article page"
```

---

## Task 11: `/policies-and-priorities` listing page

**Files:**
- Source HTML: `public/landing/policies-and-priorities/index.html`
- Create: `src/app/policies-and-priorities/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Policies & Priorities | CIO Council",
  description:
    "Federal IT policies and priorities from the CIO Council, covering cybersecurity, cloud, data, workforce, and more.",
};

export default function PoliciesPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/policies-and-priorities/index.html`. Extract `<main>`. The page contains a hero section and a grid of policy cards linking to `/policies-and-priorities/[slug]`. Convert all internal `<a>` to `<Link>`.

- [ ] **Step 2: Verify** — `http://localhost:3000/policies-and-priorities`

- [ ] **Step 3: Commit**

```bash
git add src/app/policies-and-priorities/page.tsx
git commit -m "feat: add /policies-and-priorities listing page"
```

---

## Task 12: Policy detail — Cybersecurity

**Files:**
- Source HTML: `public/landing/policies-and-priorities/cybersecurity/index.html`
- Create: `src/app/policies-and-priorities/cybersecurity/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Cybersecurity | CIO Council Policies",
  description: "Federal cybersecurity policy priorities from the CIO Council.",
};

export default function CybersecurityPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/policies-and-priorities/cybersecurity/index.html`. Extract `<main>`. Policy detail pages have a breadcrumb nav, a hero section, and a long structured content body. Convert inline SVGs to JSX camelCase attributes.

- [ ] **Step 2: Verify** — `http://localhost:3000/policies-and-priorities/cybersecurity`

- [ ] **Step 3: Commit**

```bash
git add src/app/policies-and-priorities/cybersecurity/page.tsx
git commit -m "feat: add cybersecurity policy detail page"
```

---

## Task 13: Policy detail — Cloud Smart

**Files:**
- Source HTML: `public/landing/policies-and-priorities/cloud-smart/index.html`
- Create: `src/app/policies-and-priorities/cloud-smart/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Cloud Smart | CIO Council Policies",
  description: "The federal Cloud Smart policy from the CIO Council.",
};

export default function CloudSmartPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/policies-and-priorities/cloud-smart/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/policies-and-priorities/cloud-smart`

- [ ] **Step 3: Commit**

```bash
git add src/app/policies-and-priorities/cloud-smart/page.tsx
git commit -m "feat: add cloud-smart policy detail page"
```

---

## Task 14: Policy detail — FITARA

**Files:**
- Source HTML: `public/landing/policies-and-priorities/fitara/index.html`
- Create: `src/app/policies-and-priorities/fitara/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "FITARA | CIO Council Policies",
  description: "Federal IT Acquisition Reform Act (FITARA) policy overview from the CIO Council.",
};

export default function FitaraPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/policies-and-priorities/fitara/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/policies-and-priorities/fitara`

- [ ] **Step 3: Commit**

```bash
git add src/app/policies-and-priorities/fitara/page.tsx
git commit -m "feat: add fitara policy detail page"
```

---

## Task 15: Policy detail — FedRAMP

**Files:**
- Source HTML: `public/landing/policies-and-priorities/fedramp/index.html`
- Create: `src/app/policies-and-priorities/fedramp/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "FedRAMP | CIO Council Policies",
  description: "Federal Risk and Authorization Management Program (FedRAMP) policy overview.",
};

export default function FedrampPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/policies-and-priorities/fedramp/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/policies-and-priorities/fedramp`

- [ ] **Step 3: Commit**

```bash
git add src/app/policies-and-priorities/fedramp/page.tsx
git commit -m "feat: add fedramp policy detail page"
```

---

## Task 16: `/resources` listing page

**Files:**
- Source HTML: `public/landing/resources/index.html`
- Create: `src/app/resources/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Resources | CIO Council",
  description: "Resources from the Federal CIO Council including the CISO Handbook and IT benchmarking data.",
};

export default function ResourcesPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/resources/index.html`. Extract `<main>`. The page has a hero section and a sidebar + resource card layout. Convert `<a href="/resources/...">` to `<Link>`.

- [ ] **Step 2: Verify** — `http://localhost:3000/resources`

- [ ] **Step 3: Commit**

```bash
git add src/app/resources/page.tsx
git commit -m "feat: add /resources listing page"
```

---

## Task 17: CISO Handbook resource

**Files:**
- Source HTML: `public/landing/resources/ciso-handbook/index.html`
- Create: `src/app/resources/ciso-handbook/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "CISO Handbook | CIO Council Resources",
  description: "The Federal CISO Handbook from the CIO Council.",
};

export default function CisoHandbookPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/resources/ciso-handbook/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/resources/ciso-handbook`

- [ ] **Step 3: Commit**

```bash
git add src/app/resources/ciso-handbook/page.tsx
git commit -m "feat: add /resources/ciso-handbook page"
```

---

## Task 18: SOFIT resource

**Files:**
- Source HTML: `public/landing/resources/sofit/index.html`
- Create: `src/app/resources/sofit/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "State of Federal IT | CIO Council Resources",
  description: "State of Federal IT (SOFIT) report from the CIO Council.",
};

export default function SofitPage() {
  return (
    <MarketingPage>
      {/* converted <main> content */}
    </MarketingPage>
  );
}
```

> **Agent instruction:** Read `public/landing/resources/sofit/index.html`. Extract `<main>` and convert.

- [ ] **Step 2: Verify** — `http://localhost:3000/resources/sofit`

- [ ] **Step 3: Commit**

```bash
git add src/app/resources/sofit/page.tsx
git commit -m "feat: add /resources/sofit page"
```

---

## Task 19: Update Navbar + Cleanup

**Files:**
- Modify: `src/components/layout/Navbar.tsx`
- Delete: `public/landing/` directory

- [ ] **Step 1: Update nav links in `src/components/layout/Navbar.tsx`**

Replace the `navLinks` array (currently Blog, Updates, Pricing, About, Careers) with links that include the newly migrated sections:

```tsx
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/policies-and-priorities", label: "Policies" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
];
```

> Remove the `badge` from Careers or remove Careers entirely since that route is not migrated. Keep Contact and Join Waitlist CTA buttons.

- [ ] **Step 2: Remove `public/landing/` directory**

```bash
rm -rf /Users/mustafa/Downloads/orbit/public/landing
```

- [ ] **Step 3: Run final build**

```bash
npm run build
```

Expected: build succeeds with zero TypeScript errors, zero ESLint errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Navbar.tsx
git rm -r public/landing
git commit -m "feat: update Navbar links and remove static HTML landing pages"
```

---

## Self-Review Notes

- Task 0 must complete before any other task (CSS variables required)
- Tasks 1–18 are independent of each other and can run in parallel after Task 0
- Task 19 should run last (depends on all pages being ready)
- The `jay-teitelbaum` member profile was intentionally excluded (not in original page list) — add as Task 5b if needed
- Images in HTML pages are already using `/_vinext/image/[hash].ext` paths which exist in `public/_vinext/image/` — no image migration needed. Use these paths as-is in `<Image src="/_vinext/image/..." />` tags.
