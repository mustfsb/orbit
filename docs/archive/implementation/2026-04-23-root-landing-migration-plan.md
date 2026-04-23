# Root Landing Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `src/app/landing` altindaki mevcut landing page deneyimini eksiksiz olarak ana `/` rotasina tasimak ve `/landing` rotasini kaldirmak.

**Architecture:** Mevcut `/landing` page kompozisyonu root `src/app/page.tsx` icine alinacak. Landing'e ozel layout davranisi route-local olmaktan cikarilip root layout ve ortak stylesheet seviyesinde desteklenecek. `src/app/landing/page.tsx` ve `src/app/landing/layout.tsx` silinerek `/landing` route'u kaldirilacak; landing component klasoru minimal degisiklik icin korunacak.

**Tech Stack:** Next.js App Router, React 18, TypeScript, CSS, next/font, next-themes

---

### Task 1: Root sayfayi yeni landing kompozisyonuna cevir

**Files:**
- Modify: `src/app/page.tsx`
- Reference: `src/app/landing/page.tsx`

- [ ] **Step 1: Eski root landing dosyasini kaldirip yeni import listesini yaz**

```tsx
import Navbar from "./landing/components/navbar";
import Hero from "./landing/components/hero";
import Features from "./landing/components/features";
import Stats from "./landing/components/stats";
import Pricing from "./landing/components/pricing";
import Privacy from "./landing/components/privacy";
import FAQ from "./landing/components/faq";
import ZenCTA from "./landing/components/zen-cta";
import Newsletter from "./landing/components/newsletter";
import Footer from "./landing/components/footer";

export default function Home() {
  return null;
}
```

- [ ] **Step 2: Root page icin landing wrapper ve tam bileşen sirasini yaz**

```tsx
import Navbar from "./landing/components/navbar";
import Hero from "./landing/components/hero";
import Features from "./landing/components/features";
import Stats from "./landing/components/stats";
import Pricing from "./landing/components/pricing";
import Privacy from "./landing/components/privacy";
import FAQ from "./landing/components/faq";
import ZenCTA from "./landing/components/zen-cta";
import Newsletter from "./landing/components/newsletter";
import Footer from "./landing/components/footer";
import { DarkModeProvider } from "./landing/components/dark-mode-provider";

export default function Home() {
  return (
    <DarkModeProvider>
      <div id="landing-root" className="landing-page" suppressHydrationWarning>
        <div className="landing-container">
          <Navbar />
          <Hero />
          <Features />
          <Stats />
          <Pricing />
          <Privacy />
          <FAQ />
          <ZenCTA />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </DarkModeProvider>
  );
}
```

- [ ] **Step 3: Root page dosyasini lint ile dogrula**

Run: `npx next lint --file src/app/page.tsx`
Expected: `src/app/page.tsx` icin lint hatasi cikmaz.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "refactor: move landing composition to root page"
```

### Task 2: Landing layout davranisini root layouta tasi

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Reference: `src/app/landing/layout.tsx`
- Reference: `src/app/landing/landing.css`

- [ ] **Step 1: Root layout metadata'sini yeni landing metadata ile hizala**

```tsx
export const metadata: Metadata = {
  title: "Orbit — Cultivate your focus",
  description:
    "A minimal environment for deep work, intentional planning, and cognitive flourishing.",
  icons: {
    icon: "/icon.svg",
  },
};
```

- [ ] **Step 2: Landing theme bootstrap script'ini root layouta ekle**

```tsx
const landingThemeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('landing-theme');
      var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var root = document.getElementById('landing-root');
      if (root) root.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;
```

- [ ] **Step 3: Script'i body icinde children'dan once render et**

```tsx
<body className={`${newsreader.variable} ${onest.variable} ${jetbrainsMono.variable} ${overusedGrotesk.variable} antialiased font-sans`}>
  <script dangerouslySetInnerHTML={{ __html: landingThemeScript }} />
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <AuthProvider>
      <SettingsProvider>
        <GoalsProvider>
          <TaskProvider>
            <TimerProvider>{children}</TimerProvider>
          </TaskProvider>
        </GoalsProvider>
      </SettingsProvider>
    </AuthProvider>
  </ThemeProvider>
</body>
```

- [ ] **Step 4: Landing stylesheet secicilerini globals.css icine scoped olarak ekle**

```css
html, body {
  background: var(--landing-bg);
}

.landing-page {
  --landing-bg: hsl(0, 20%, 99%);
  --landing-bg-weak: hsl(0, 8%, 97%);
  --landing-bg-weak-hover: hsl(0, 8%, 94%);
  --landing-bg-strong: hsl(0, 5%, 12%);
  --landing-bg-strong-hover: hsl(0, 5%, 18%);
  --landing-bg-interactive: hsl(62, 84%, 88%);
  --landing-bg-interactive-weaker: hsl(64, 74%, 95%);
  --landing-text: hsl(0, 1%, 39%);
  --landing-text-weak: hsl(0, 1%, 60%);
  --landing-text-weaker: hsl(30, 2%, 81%);
  --landing-text-strong: hsl(0, 5%, 12%);
  --landing-text-inverted: hsl(0, 20%, 99%);
  --landing-border: hsl(30, 2%, 81%);
  --landing-border-weak: hsla(0, 100%, 3%, 0.12);
  --landing-icon: hsl(0, 1%, 55%);
  --landing-padding: 5rem;
  --landing-vpadding: 4rem;
  --landing-font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  background: var(--landing-bg);
  color: var(--landing-text);
  font-family: var(--landing-font-mono);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.landing-page[data-theme="dark"] {
  --landing-bg: hsl(0, 9%, 7%);
  --landing-bg-weak: hsl(0, 6%, 10%);
  --landing-bg-weak-hover: hsl(0, 6%, 15%);
  --landing-bg-strong: hsl(0, 15%, 94%);
  --landing-bg-strong-hover: hsl(0, 15%, 97%);
  --landing-bg-interactive: hsl(62, 100%, 90%);
  --landing-bg-interactive-weaker: hsl(60, 20%, 8%);
  --landing-text: hsl(0, 4%, 71%);
  --landing-text-weak: hsl(0, 2%, 49%);
  --landing-text-weaker: hsl(0, 3%, 28%);
  --landing-text-strong: hsl(0, 15%, 94%);
  --landing-text-inverted: hsl(0, 9%, 7%);
  --landing-border: hsl(0, 3%, 28%);
  --landing-border-weak: hsl(0, 4%, 23%);
  --landing-icon: hsl(10, 3%, 43%);
}

.landing-page ::selection {
  background: var(--landing-bg-interactive);
  color: var(--landing-text-strong);
}

.landing-page[data-theme="dark"] ::selection {
  background: var(--landing-bg-interactive);
  color: var(--landing-text-inverted);
}

.landing-container {
  max-width: 67.5rem;
  margin: 0 auto;
  border: 1px solid var(--landing-border-weak);
  border-top: none;
  width: 100%;
}
```

- [ ] **Step 5: Landing style'in kalan responsive ve logo kurallarini globals.css icine ekle**

```css
@media (max-width: 65rem) {
  .landing-container {
    border: none;
  }
}

@media (max-width: 60rem) {
  .landing-page {
    --landing-padding: 1.5rem;
    --landing-vpadding: 3rem;
  }
}

.landing-section {
  border-top: 1px solid var(--landing-border-weak);
  padding: var(--landing-vpadding) var(--landing-padding);
}

.landing-page h1,
.landing-page h2,
.landing-page h3 {
  color: var(--landing-text-strong);
  font-family: var(--landing-font-mono);
}

.landing-page .logo-apple-calendar,
.landing-page .logo-openai {
  transition: filter 0.2s ease;
}

.landing-page[data-theme="dark"] .logo-apple-calendar {
  filter: invert(1);
}

.landing-page[data-theme="dark"] .logo-openai {
  filter: brightness(1.4) contrast(1.1);
}

.landing-page .integrations-grid img {
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  max-width: 32px;
  max-height: 32px;
  object-fit: contain;
}

.landing-page .integrations-grid .logo-google-calendar {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;
}

.landing-page .integrations-grid .logo-apple-calendar {
  width: 22px;
  height: 22px;
  min-width: 22px;
  min-height: 22px;
  max-width: 22px;
  max-height: 22px;
}

.landing-page .integrations-grid .logo-outlook {
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  max-width: 38px;
  max-height: 38px;
}
```

- [ ] **Step 6: Root layout ve globals degisikliklerini lint ile dogrula**

Run: `npx next lint --file src/app/layout.tsx --file src/app/page.tsx`
Expected: `layout.tsx` ve `page.tsx` icin lint hatasi cikmaz.

- [ ] **Step 7: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css src/app/page.tsx
git commit -m "refactor: move landing shell to root layout"
```

### Task 3: `/landing` route dosyalarini kaldir

**Files:**
- Delete: `src/app/landing/page.tsx`
- Delete: `src/app/landing/layout.tsx`
- Delete: `src/app/landing/landing.css`

- [ ] **Step 1: Route owner dosyalarini sil**

```bash
rm "src/app/landing/page.tsx" "src/app/landing/layout.tsx" "src/app/landing/landing.css"
```

- [ ] **Step 2: Silme sonrasi landing component importlarinin kaldigini kontrol et**

Run: `npx next lint --file src/app/page.tsx --file src/app/layout.tsx --file src/app/landing/components/dark-mode-provider.tsx`
Expected: Silinen route dosyalarina bagli import hatasi cikmaz.

- [ ] **Step 3: Commit**

```bash
git add src/app/landing/page.tsx src/app/landing/layout.tsx src/app/landing/landing.css
git commit -m "refactor: remove legacy landing route"
```

### Task 4: Son dogrulama ve regresyon kontrolu

**Files:**
- Modify: none

- [ ] **Step 1: Tum uygulamayi lint et**

Run: `npm run lint`
Expected: Komut basariyla tamamlanir.

- [ ] **Step 2: Production build al**

Run: `npm run build`
Expected: Next.js build basariyla tamamlanir ve `/landing` route'u output'ta yer almaz.

- [ ] **Step 3: Son degisiklikleri diff ile gozden gecir**

Run: `git diff -- src/app/page.tsx src/app/layout.tsx src/app/globals.css src/app/landing`
Expected: Diff yalnizca root landing migration degisikliklerini gosterir.

- [ ] **Step 4: Son commit**

```bash
git add src/app/page.tsx src/app/layout.tsx src/app/globals.css src/app/landing
git commit -m "refactor: promote landing page to root route"
```
