# Static HTML to Next.js Migration — Design Spec

**Date:** 2026-04-26  
**Status:** Approved

---

## Overview

Migrate ~20 static HTML pages from `public/landing/` to proper Next.js TSX page components under `src/app/`. All pages will use the existing `MarketingPage` wrapper (which includes the Orbit Navbar and Footer), ensuring a consistent navbar across every route. The `public/landing/` directory will be removed after migration.

---

## Scope

### Sections to migrate (4 sections, ~20 pages)

| Route | Source HTML |
|-------|-------------|
| `/about` | `public/landing/about/index.html` |
| `/about/members-and-leadership` | `public/landing/about/members-and-leadership/index.html` |
| `/about/members-and-leadership/barbaccia-gregory` | `public/landing/about/members-and-leadership/barbaccia-gregory/index.html` |
| `/about/members-and-leadership/duffy-michael` | `public/landing/about/members-and-leadership/duffy-michael/index.html` |
| `/about/members-and-leadership/shive-david` | `public/landing/about/members-and-leadership/shive-david/index.html` |
| `/news` | `public/landing/news/index.html` |
| `/news/ai-in-action` | `public/landing/news/ai-in-action/index.html` |
| `/news/ai-policy` | `public/landing/news/ai-policy/index.html` |
| `/news/federal-zero-trust-data-security-guide` | `public/landing/news/federal-zero-trust-data-security-guide/index.html` |
| `/news/2023-10-23-ncam-2023-protecting-yourself-online` | `public/landing/news/2023-10-23-ncam-2023-protecting-yourself-online/index.html` |
| `/policies-and-priorities` | `public/landing/policies-and-priorities/index.html` |
| `/policies-and-priorities/cybersecurity` | `public/landing/policies-and-priorities/cybersecurity/index.html` |
| `/policies-and-priorities/cloud-smart` | `public/landing/policies-and-priorities/cloud-smart/index.html` |
| `/policies-and-priorities/fitara` | `public/landing/policies-and-priorities/fitara/index.html` |
| `/policies-and-priorities/fedramp` | `public/landing/policies-and-priorities/fedramp/index.html` |
| `/resources` | `public/landing/resources/index.html` |
| `/resources/ciso-handbook` | `public/landing/resources/ciso-handbook/index.html` |
| `/resources/sofit` | `public/landing/resources/sofit/index.html` |

**Total: ~18 pages** (about section has 5, news 5, policies 5, resources 3)

---

## Architecture

### Directory structure (after migration)

```
src/
  app/
    layout.tsx              (existing root layout)
    pricing/
      page.tsx              (existing)
    about/
      page.tsx              (NEW)
      members-and-leadership/
        page.tsx            (NEW)
        barbaccia-gregory/
          page.tsx          (NEW)
        duffy-michael/
          page.tsx          (NEW)
        shive-david/
          page.tsx          (NEW)
    news/
      page.tsx              (NEW)
      ai-in-action/
        page.tsx            (NEW)
      ai-policy/
        page.tsx            (NEW)
      federal-zero-trust-data-security-guide/
        page.tsx            (NEW)
      2023-10-23-ncam-2023-protecting-yourself-online/
        page.tsx            (NEW)
    policies-and-priorities/
      page.tsx              (NEW)
      cybersecurity/
        page.tsx            (NEW)
      cloud-smart/
        page.tsx            (NEW)
      fitara/
        page.tsx            (NEW)
      fedramp/
        page.tsx            (NEW)
    resources/
      page.tsx              (NEW)
      ciso-handbook/
        page.tsx            (NEW)
      sofit/
        page.tsx            (NEW)
```

### Page wrapper

Every new page uses the existing `MarketingPage` component:

```tsx
import { MarketingPage } from "@/components/layout/MarketingPage";

export default function SomePage() {
  return (
    <MarketingPage>
      {/* page content as clean TSX */}
    </MarketingPage>
  );
}
```

This guarantees the Orbit Navbar and Footer appear on all pages identically.

---

## CSS Infrastructure Changes

### Problem

The HTML pages from `public/landing/` use CSS variables and Tailwind utility classes that are defined in the vinext-compiled CSS (`/assets/index-cMd7Si16.css`) but are **not** present in the current Next.js project:

- Missing CSS variables: `--primary`, `--primary-foreground`, `--muted`, `--muted-foreground`, `--ring`, `--border`  
- Missing Tailwind custom utilities: `max-w-site`, `px-site`, `py-section`, `py-section-tight`, `py-section-loose`

### Solution

1. **`public/orbit-theme.css`** already defines `--primary`, `--muted`, etc. for `html.dark` and `html.light`.  
   Copy the theme variable blocks (`html.dark { ... }` and `html.light { ... }`) directly into `src/app/globals.css` so they are bundled with the Next.js build. Do **not** use a `<link>` or `@import` for a file in `public/` inside a CSS module.

2. **`tailwind.config.ts`**: Extend the theme with the custom spacing tokens:
   - `maxWidth: { site: 'var(--site-max-w)' }`
   - Custom padding utilities via plugin or CSS variables in `@layer utilities`

3. Add CSS variable declarations to `:root` in `globals.css`:
   ```css
   :root {
     --site-max-w: 1250px;
     --site-px: 24px;
     --section-py: 80px;
     --section-py-tight: 64px;
     --section-py-loose: 96px;
   }
   ```

---

## Content Conversion Rules

Each HTML page is converted by hand (by a subagent) following these rules:

1. **Extract `<main>` content** from the source HTML — ignore `<head>`, `<header>`, `<footer>`, and `<script>` tags.
2. **Convert HTML → JSX**: `class` → `className`, `for` → `htmlFor`, self-closing tags, etc.
3. **Use Next.js `<Image>`** for `<img>` tags when the image path is known and local.
4. **Use Next.js `<Link>`** for `<a>` tags with internal hrefs.
5. **Wrap in `MarketingPage`** — no separate header or footer markup.
6. **Export `metadata`** object with correct `title` and `description` from the original `<head>`.
7. **Keep Tailwind classes as-is** — they will work once CSS variables are defined.
8. **Do not import** `/assets/index-cMd7Si16.css` or `/cio-overrides.css` — the converted pages must rely solely on the project's `globals.css` and `orbit-theme.css`.

---

## Cleanup

After all pages are migrated and verified:

- Remove `public/landing/` directory entirely.
- Remove scripts (`orbit-copy-overrides.js`) that were only used by the static pages.
- Optionally update `public/_vinext/` if no longer needed.

---

## Out of Scope

- handbook/ pages (not converted in this iteration)
- accessibility-policy/, privacy-statement/, government-technology-jobs/ (not converted)
- Remaining news articles (kept in `public/landing/` or deleted)
- Server-side data fetching (all content is static, hard-coded in TSX)

---

## Success Criteria

1. `localhost:3000/about`, `/news`, `/policies-and-priorities`, `/resources` and all sub-pages render with the Orbit Navbar identical to `localhost:3000/pricing`.
2. No static HTML files remain under `public/landing/` for the converted routes.
3. `next build` completes without TypeScript or ESLint errors.
4. All 18 pages render with proper content — no blank pages or broken layouts.
