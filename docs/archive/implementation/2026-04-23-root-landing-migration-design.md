# Root Landing Migration Design

**Goal:** `src/app/landing` altındaki mevcut landing page deneyimini eksiksiz olarak ana `/` rotasına taşımak ve `/landing` rotasını tamamen kaldırmak.

## Scope

- `src/app/page.tsx` artık mevcut eski home landing içeriğini render etmeyecek.
- Ana `/` rotası, bugün `/landing` altında görünen landing page ile aynı bileşen sırasını ve aynı görsel davranışı gösterecek.
- `/landing` route'u kaldırılacak.
- Landing'e özel metadata, tema bootstrap script'i ve `landing.css` ile gelen görsel sistem root rota için çalışmaya devam edecek.
- Değişiklik yalnızca public landing experience kapsamındadır; dashboard, auth, app içi sayfalar ve veri akışları etkilenmemelidir.

## Current State

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
