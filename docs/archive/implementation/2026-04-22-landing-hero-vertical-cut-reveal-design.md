# Landing Hero Vertical Cut Reveal Design

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

## Verification

- TypeScript/Next lint ile yeni component ve hero degisikligi kontrol edilecek
- Mumkunse `next build` ile entegrasyon dogrulanacak
- Repo genelinde ilgisiz mevcut hatalar cikarsa, landing hero degisikliklerinin etkisi ayrica raporlanacak

## Risks

- Yeni font asset'inin lokal yuklenmesi bundle ve cache davranisina etki edebilir; `next/font/local` bunu minimize eder
- Reveal line sayisi artarsa hero yuksekligi buyuyebilir; bu nedenle uc satirla sinirli kalinacak
