# Root Landing Migration

> **Status:** Completed. `/landing` route removed; landing experience now lives at `/`.

## Summary

`src/app/landing` altındaki mevcut landing page deneyimini eksiksiz olarak ana `/` rotasına taşımak ve `/landing` rotasını tamamen kaldırmak.

## Scope

- `src/app/page.tsx` artık mevcut eski home landing içeriğini render etmeyecek.
- Ana `/` rotası, bugün `/landing` altında görünen landing page ile aynı bileşen sırasını ve aynı görsel davranışı gösterecek.
- `/landing` route'u kaldırılacak.
- Landing'e özel metadata, tema bootstrap script'i ve `landing.css` ile gelen görsel sistem root rota için çalışmaya devam edecek.
- Değişiklik yalnızca public landing experience kapsamındadır; dashboard, auth, app içi sayfalar ve veri akışları etkilenmemelidir.

## Current State (Pre-Migration)

- `src/app/page.tsx` eski landing sayfasını render ediyor ve kendi bileşen ağacını kullanıyor.
- `src/app/landing/page.tsx` yeni alternatif landing page kompozisyonunu render ediyor.
- `src/app/landing/layout.tsx`, landing'e özel metadata, `landing.css`, tema başlatma script'i ve `DarkModeProvider` sarmalayıcısını sağlıyor.
- `src/app/layout.tsx` tüm uygulamanın ana root layout'u ve global provider zincirini içeriyor.

## Recommended Approach

En küçük doğru değişiklik uygulanacak:

1. `src/app/landing/page.tsx` içindeki landing kompozisyonu root `/` için kullanılacak.
2. `src/app/landing/layout.tsx` içindeki landing-specific layout davranışı route-local olmaktan çıkarılıp root ana sayfanın kullanabileceği şekilde taşınacak.
3. `src/app/page.tsx` eski landing implementation'ını bırakıp landing page kompozisyonunu render edecek.
4. `/landing` route dosyaları kaldırılacak.

Bu yaklaşım, var olan landing bileşenlerini yeniden yazmadan yalnızca route sahipliğini değiştirir. Gereksiz refactor yapılmaz.

## File-Level Design

### `src/app/page.tsx`

- Eski home landing kodu kaldırılacak.
- Dosya, `/landing` sayfasındaki aynı bileşen sırasını render edecek:
  - `Navbar`
  - `Hero`
  - `Features`
  - `Stats`
  - `Pricing`
  - `Privacy`
  - `FAQ`
  - `ZenCTA`
  - `Newsletter`
  - `Footer`
- Root landing wrapper ihtiyaci varsa burada ya da ortak bir wrapper component içinde uygulanacak.

### `src/app/layout.tsx`

- Ana metadata, artık yeni landing ile uyumlu olacak.
- Landing özel tema başlangıç script'i ve gerekli wrapper yapısı root tarafta desteklenecek.
- Mevcut global provider zinciri korunacak; landing migration nedeniyle auth/settings/task/timer provider davranışı bozulmayacak.

### `src/app/globals.css` ve/veya landing styles

- `landing.css` ile gelen görsel sistem root ana sayfada da aktif olacak.
- Bunun için iki kabul edilebilir yol vardır:
  - `landing.css` içeriğini root seviyede erişilebilir ortak bir stylesheet'e taşımak
  - veya root layout/page tarafından güvenli şekilde import edilen ortak bir landing stylesheet kullanmak
- Hedef, yalnızca `/` için gereken landing görünümünü korumaktır; diğer app sayfalarını istemeden yeniden stillendirmekten kaçınılacaktır.

### `src/app/landing/*`

- Route olarak gerekli olmayan `page.tsx` ve `layout.tsx` kaldırılacak.
- `components/` altındaki landing bileşenleri, minimal değişiklik yaklaşımıyla mevcut konumunda kalabilir; route silinmesi bu component klasörünü silmeyi zorunlu kılmaz.
- Eğer import ergonomisi için gerekirse ortak bir public landing alanına alınabilir, ancak bu iş için zorunlu değildir.

## Data / Behavior Considerations

- Landing dark mode davranışı localStorage tabanlı `landing-theme` anahtarı üzerinden çalışıyor; bu davranış `/` altında da aynı kalacak.
- Landing görsel kimliği global app theme sisteminden kısmen bağımsız çalışıyor; migration sonrasında da landing'in kendi görünüm mantığı korunmalı.
- Root layout zaten global provider'lar içerdiği için landing bu provider'larla birlikte render edilecek; bu landing bileşenlerinde regresyona yol açmamalı.

## Error Handling / Regression Risks

### Risk 1: Root seviyede stil çakışması

Landing stylesheet'i doğrudan global alana taşınırsa diğer sayfalar etkilenebilir.

**Mitigation:** Landing CSS seçicileri `landing-page` kökü altında scoped tutulacak ve root `/` sayfasında aynı wrapper korunacak.

### Risk 2: Theme bootstrap timing

`src/app/landing/layout.tsx` içindeki script kaldırılırsa hydration sırasında kısa tema flicker'ı oluşabilir.

**Mitigation:** Aynı bootstrap script'i root tarafında uygun noktaya taşınacak.

### Risk 3: Metadata gerilemesi

Ana route metadata'sı eski landing mesajını göstermeye devam edebilir.

**Mitigation:** Root metadata, yeni landing'in title/description değerleriyle hizalanacak.

## Implementation

**Tech Stack:** Next.js App Router, React 18, TypeScript, CSS, next/font, next-themes

### Task 1: Root sayfayi yeni landing kompozisyonuna cevir

**Files:**
- Modify: `src/app/page.tsx`
- Reference: `src/app/landing/page.tsx`

Eski root landing dosyasini kaldirip yeni import listesini yaz:

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

### Task 2: Landing layout davranisini root layouta tasi

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Reference: `src/app/landing/layout.tsx`
- Reference: `src/app/landing/landing.css`

Root layout metadata'sini yeni landing metadata ile hizala:

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

Landing theme bootstrap script'ini root layouta ekle:

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

Script'i body icinde children'dan once render et:

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

Landing stylesheet secicilerini globals.css icine scoped olarak ekle:

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

### Task 3: `/landing` route dosyalarini kaldir

**Files:**
- Delete: `src/app/landing/page.tsx`
- Delete: `src/app/landing/layout.tsx`
- Delete: `src/app/landing/landing.css`

```bash
rm "src/app/landing/page.tsx" "src/app/landing/layout.tsx" "src/app/landing/landing.css"
```

### Task 4: Son dogrulama ve regresyon kontrolu

```bash
npm run lint
npm run build
git diff -- src/app/page.tsx src/app/layout.tsx src/app/globals.css src/app/landing
```

## Testing Strategy

- Ana doğrulama hedefi davranış eşitliğidir: `/landing` altında görünen landing experience, migration sonrası `/` altında görünmelidir.
- Aşağıdakiler doğrulanacak:
  - `/` sayfası render oluyor
  - yeni landing bileşen sırası korunuyor
  - landing CSS wrapper'ı mevcut
  - metadata beklenen değerlere sahip
  - `/landing` route'u artık mevcut değil
- Mevcut projede route/component test altyapısı varsa önce failing test yazılacak; yoksa en azından ilgili doğrulama komutu ile build/lint seviyesinde regresyon kontrolü yapılacak.

## Out Of Scope

- Landing bileşenlerinin yeniden tasarlanması
- Landing metinlerinin değiştirilmesi
- Dashboard veya uygulama içi ekranların stil/refactor edilmesi
- Public route yapısının landing migration dışındaki kısımlarını değiştirmek

## Success Criteria

- Uygulamanın ana `/` rotası eski home yerine mevcut `/landing` deneyimini eksiksiz gösterir.
- `/landing` route'u kaldırılmıştır.
- Landing theme, CSS ve metadata davranışı korunur.
- Diğer uygulama sayfalarında görünür regresyon oluşmaz.
