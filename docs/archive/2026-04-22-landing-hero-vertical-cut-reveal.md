# Landing Hero Vertical Cut Reveal

> **Status:** Completed. Merged into root landing.

## Summary

Landing sayfasindaki hero bolumunun sol metin blogu, Fancy Components `Vertical Cut Reveal` demosundaki yapiya yaklastirilacak. Degisiklik yalnizca sol metin sunumunu hedefleyecek; rozet, logo satiri, CTA, pricing note ve sagdaki `HeroAsciiOrbit` korunacak.

## Goals

- Fancy demosundaki `VerticalCutReveal` davranisini lokal bir component olarak projeye almak
- Demo ile ayni font ailesini kullanmak: `Overused Grotesk`
- Hero soldaki metni cok satirli, karakter bazli reveal yapisina donusturmek
- Landing sayfasinin mevcut responsive yapisini korumak

## Non-Goals

- Landing sayfasinin tamamini yeniden tasarlamak
- Hero sag kolonunu veya alt bolumleri degistirmek
- Yeni bir tasarim sistemi kurmak

## Architecture

### Font

Fancy demo `Overused Grotesk` variable `woff2` fontunu `@font-face` ile kullaniyor. Bu repo icinde ayni font asset'i lokal olarak tutulacak ve `next/font/local` ile `--font-overused-grotesk` CSS variable'i uretilecek.

### Reveal Component

`src/app/landing/components/vertical-cut-reveal.tsx` adinda lokal bir client component eklenecek. Component, Fancy ornegindeki temel davranisi koruyacak:

- `splitBy` ile yazi parcaciklara bolunecek
- `characters` modunda kelime sinirlari korunacak
- Her parca `overflow: hidden` kapsayicisi icinde `motion.span` ile yukari/asagi reveal animasyonu alacak
- `staggerFrom`, `reverse`, `transition`, `autoStart` gibi opsiyonlar desteklenecek

### Hero Integration

`src/app/landing/components/hero.tsx` icindeki statik `h1` alani, uc satirli reveal kompozisyonuna donusecek:

- `CULTIVATE YOUR`
- `FOCUS.`
- `PLAN DEEPER DAYS.`

Ilk iki satir Fancy demodaki ana ornege en yakin sekilde farkli stagger yonleri ile calisacak. Altinda daha kisa bir aciklama paragrafi korunacak; bu paragraf mevcut uzun metnin daha sikistirilmis bir versiyonu olacak.

## Visual Direction

- Font: `Overused Grotesk`, sans-serif fallback
- Renk: Fancy demodaki mavi vurguya yakin `#0015ff`
- Tipografi: uppercase, sik harf araligi, sikistirilmis satir yuksekligi
- Yerlesim: solda stack, mevcut CTA ve logolarla uyumlu bosluklar

## Responsive Behavior

- Mobilde mevcut `hero-right` gizlenmeye devam edecek
- Reveal metin boyutu `clamp(...)` ile kuculecek
- Satirlar soldan hizali kalacak
- Uzunluk tasmasi olusmamasi icin alt reveal satiri ana satirlardan biraz daha kontrollu olceklenebilecek

## Accessibility

- Semantik baslik yapisi korunacak; reveal satirlari `h1` icinde kalacak
- Animated spans icin ekran okuyucuya uygun gizli metin korunacak
- CTA ve diger interaktif alanlar degismeyecek

## Implementation

**Tech Stack:** Next.js App Router, React 18, TypeScript, framer-motion, next/font/local

### Task 1: Fontu lokal olarak ekle

**Files:**
- Create: `src/app/fonts/overused-grotesk.woff2`
- Modify: `src/app/layout.tsx`

```bash
mkdir -p src/app/fonts
curl -L "https://www.fancycomponents.dev/_next/static/media/overused-grotesk.752ab6d3.woff2" -o "src/app/fonts/overused-grotesk.woff2"
```

Layout dosyasina local font tanimi ekle:

```tsx
import localFont from "next/font/local";

const overusedGrotesk = localFont({
  src: "./fonts/overused-grotesk.woff2",
  display: "swap",
  variable: "--font-overused-grotesk",
  weight: "300 900",
});
```

Body class zincirine yeni font variable'ini bagla:

```tsx
<body className={`${newsreader.variable} ${onest.variable} ${jetbrainsMono.variable} ${overusedGrotesk.variable} antialiased font-sans`}>
```

### Task 2: Fancy benzeri reveal component ekle

**Files:**
- Create: `src/app/landing/components/vertical-cut-reveal.tsx`

Reveal component iskeleti:

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

Text parcalama ve stagger mantigi:

```tsx
const splitIntoCharacters = (text: string): string[] => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }

  return Array.from(text);
};
```

framer-motion ile reveal animasyonu:

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

Yeni component import'u:

```tsx
import VerticalCutReveal from "./vertical-cut-reveal";
```

Statik `h1` yerine uc satirli reveal kompozisyonu:

```tsx
<h1 className="hero-title hero-reveal-heading">
  <VerticalCutReveal>{`CULTIVATE YOUR`}</VerticalCutReveal>
  <VerticalCutReveal reverse staggerFrom="last" transition={{ type: "spring", stiffness: 200, damping: 21, delay: 0.5 }}>{`FOCUS.`}</VerticalCutReveal>
  <VerticalCutReveal staggerFrom="center" transition={{ type: "spring", stiffness: 200, damping: 21, delay: 1.1 }}>{`PLAN DEEPER DAYS.`}</VerticalCutReveal>
</h1>
```

Supporting paragraf kisaltmasi:

```tsx
<p className="hero-subtitle">
  Orbit is a minimal productivity environment for deep work and intentional planning.
  AI-powered scheduling, focus timers, and goal tracking help you reclaim your attention.
</p>
```

Responsive hero stilleri:

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

### Task 4: Verify

```bash
npx next lint --file src/app/layout.tsx --file src/app/landing/components/hero.tsx --file src/app/landing/components/vertical-cut-reveal.tsx
npm run build
git diff -- src/app/layout.tsx src/app/landing/components/hero.tsx src/app/landing/components/vertical-cut-reveal.tsx
```

## Risks

- Yeni font asset'inin lokal yuklenmesi bundle ve cache davranisina etki edebilir; `next/font/local` bunu minimize eder
- Reveal line sayisi artarsa hero yuksekligi buyuyebilir; bu nedenle uc satirla sinirli kalinacak
