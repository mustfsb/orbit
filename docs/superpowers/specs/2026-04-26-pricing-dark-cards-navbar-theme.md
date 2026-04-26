# Pricing Dark Cards + Navbar Theme Toggle — Design Spec

**Date:** 2026-04-26  
**Status:** Approved

---

## Scope

Three independent changes shipped together:

1. Pricing card visual redesign (both homepage + `/pricing` route)
2. Navbar: dark/light toggle button + Signup button
3. Anti-FOIT script for theme persistence

---

## 1. Pricing Cards

### Visual treatment

| Card | Background | Text | Ring |
|---|---|---|---|
| Free | `bg-primary` | `text-primary-foreground` | none |
| Pro | `bg-primary` | `text-primary-foreground` | 2px cream outline ring + offset, "Popular" badge |
| Teams | `bg-background` | `text-foreground` | `ring-1 ring-foreground/10` (unchanged) |

### "Popular" badge
- Small pill, top-right of the plan name row
- `bg-primary-foreground text-primary` — inverts relative to card bg
- Text: "Popular", font-size 11px, font-weight 600, px-2 py-0.5 rounded-full

### Pro featured ring
- `ring-2 ring-primary-foreground/30 ring-offset-2 ring-offset-muted`
- Visible in both light and dark mode via semantic tokens

### Dark mode behaviour
- `--primary` is `#1a1816` in light, `#e8e4df` in dark
- `--primary-foreground` inverts accordingly
- Free/Pro cards: dark bg in light mode, cream bg in dark mode — contrast maintained against `bg-muted` section in both modes
- Teams: `bg-background` stays contrasted (opposite end of scale) in both modes

### Files affected
- `src/app/page.tsx` — homepage pricing section (3 card blocks)
- `src/app/pricing/page.tsx` — `/pricing` route plan cards

---

## 2. Navbar

### New file: `src/components/ui/NavActions.tsx`
- `"use client"` directive
- Reads `localStorage.getItem("orbit-theme")` on mount, falls back to `prefers-color-scheme`
- Applies `dark` or `light` class to `document.documentElement`
- Re-applies on every toggle

### Theme toggle button
- Shape: `w-9 h-9 rounded-full`
- Style: `bg-muted hover:bg-accent transition-colors`
- Content: Sun SVG in dark mode (→ click switches to light), Moon SVG in light mode (→ click switches to dark)
- `aria-label`: "Switch to light mode" / "Switch to dark mode"

### Signup button
- Style: `rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-9 px-4 text-sm font-medium`
- Href: `/signup`

### Order in header right slot: `[toggle button] [Signup button]`

### layout.tsx change
- Import `NavActions` (dynamic, ssr: false to avoid hydration mismatch on theme class)
- Insert into existing `<header>` right side, replacing the empty right slot

---

## 3. Anti-FOIT Inline Script

Added as first child of `<head>` in `layout.tsx`, before stylesheets:

```html
<script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('orbit-theme');if(t==='dark'||t==='light'){document.documentElement.classList.add(t);return;}if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}else{document.documentElement.classList.add('light');}}catch(e){}})();` }} />
```

Default (no localStorage entry, no system preference): adds `light`.

---

## 4. Dark Mode Compatibility

- All layout/page tokens are already semantic — no bulk changes needed
- Logo SVG: add `dark:invert` class to the `<Image>` in `layout.tsx` header so it remains visible on dark backgrounds
- Footer uses hardcoded `--footer-bg` / `--footer-fg` vars — intentional, always-dark footer, no change needed

---

## Out of Scope

- Mobile hamburger menu (no mobile nav in current layout.tsx)
- `/signup` page content (route stub acceptable)
- Comparison table or FAQ section changes
