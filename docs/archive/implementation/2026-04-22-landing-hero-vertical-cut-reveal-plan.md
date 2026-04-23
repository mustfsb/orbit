# Landing Hero Vertical Cut Reveal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fancy `Vertical Cut Reveal` component davranisini ayni fontla landing hero'nun sol metin bloguna entegre etmek.

**Architecture:** Lokal bir reveal component eklenecek, Fancy'nin kullandigi `Overused Grotesk` fontu `next/font/local` ile yuklenecek, sonra `hero.tsx` icindeki statik baslik bu component ile cok satirli reveal yapiya cevrilecek. Mevcut CTA, logolar ve sagdaki orbit gorunumu korunacak.

**Tech Stack:** Next.js App Router, React 18, TypeScript, framer-motion, next/font/local

---

### Task 1: Fontu lokal olarak ekle

**Files:**
- Create: `src/app/fonts/overused-grotesk.woff2`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Font asset'ini projeye indir**

```bash
mkdir -p src/app/fonts
curl -L "https://www.fancycomponents.dev/_next/static/media/overused-grotesk.752ab6d3.woff2" -o "src/app/fonts/overused-grotesk.woff2"
```

- [ ] **Step 2: Layout dosyasina local font tanimi ekle**

```tsx
import localFont from "next/font/local";

const overusedGrotesk = localFont({
  src: "./fonts/overused-grotesk.woff2",
  display: "swap",
  variable: "--font-overused-grotesk",
  weight: "300 900",
});
```

- [ ] **Step 3: Body class zincirine yeni font variable'ini bagla**

```tsx
<body className={`${newsreader.variable} ${onest.variable} ${jetbrainsMono.variable} ${overusedGrotesk.variable} antialiased font-sans`}>
```

### Task 2: Fancy benzeri reveal component ekle

**Files:**
- Create: `src/app/landing/components/vertical-cut-reveal.tsx`

- [ ] **Step 1: Reveal component iskeletini ekle**

```tsx
"use client";

import { forwardRef } from "react";

export interface VerticalCutRevealRef {
  startAnimation: () => void;
  reset: () => void;
}

const VerticalCutReveal = forwardRef<VerticalCutRevealRef>(function VerticalCutReveal() {
  return null;
});

export default VerticalCutReveal;
```

- [ ] **Step 2: Text parcalama ve stagger mantigini ekle**

```tsx
const splitIntoCharacters = (text: string): string[] => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }

  return Array.from(text);
};
```

- [ ] **Step 3: framer-motion ile reveal animasyonunu uygula**

```tsx
<motion.span
  custom={index}
  initial="hidden"
  animate={isAnimating ? "visible" : "hidden"}
  variants={variants}
>
  {char}
</motion.span>
```

### Task 3: Hero metnini reveal yapisina cevir

**Files:**
- Modify: `src/app/landing/components/hero.tsx`

- [ ] **Step 1: Yeni component import'unu ekle**

```tsx
import VerticalCutReveal from "./vertical-cut-reveal";
```

- [ ] **Step 2: Statik `h1` yerine uc satirli reveal kompozisyonunu koy**

```tsx
<h1 className="hero-title hero-reveal-heading">
  <VerticalCutReveal>{`CULTIVATE YOUR`}</VerticalCutReveal>
  <VerticalCutReveal reverse staggerFrom="last" transition={{ type: "spring", stiffness: 200, damping: 21, delay: 0.5 }}>{`FOCUS.`}</VerticalCutReveal>
  <VerticalCutReveal staggerFrom="center" transition={{ type: "spring", stiffness: 200, damping: 21, delay: 1.1 }}>{`PLAN DEEPER DAYS.`}</VerticalCutReveal>
</h1>
```

- [ ] **Step 3: Supporting paragrafi kisalt ve yeni tipografiye gore bosluklari guncelle**

```tsx
<p className="hero-subtitle">
  Orbit is a minimal productivity environment for deep work and intentional planning.
  AI-powered scheduling, focus timers, and goal tracking help you reclaim your attention.
</p>
```

- [ ] **Step 4: Responsive hero stillerini yeni reveal blok icin ayarla**

```css
.hero-reveal-heading {
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  font-family: var(--font-overused-grotesk), sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.75rem);
  line-height: 0.92;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #0015ff;
}
```

### Task 4: Verify degisikligi

**Files:**
- Modify: none

- [ ] **Step 1: Degisen dosyalari lint et**

```bash
npx next lint --file src/app/layout.tsx --file src/app/landing/components/hero.tsx --file src/app/landing/components/vertical-cut-reveal.tsx
```

- [ ] **Step 2: Uygulama build'ini calistir**

```bash
npm run build
```

- [ ] **Step 3: Sonuclari kontrol et ve sadece bu degisikliklerle ilgili problemleri duzelt**

```bash
git diff -- src/app/layout.tsx src/app/landing/components/hero.tsx src/app/landing/components/vertical-cut-reveal.tsx
```
