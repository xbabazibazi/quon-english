# Günde10 — Günde 10 dakika İngilizce

Türkçe konuşanlar için **tamamen ücretsiz**, reklam destekli, günde 10 dakikalık İngilizce uygulaması (PWA).
Kalp yok, kilit yok. Hataları Türkçe anlatır. Çalışma anında AI yok: tüm içerik önceden üretilir, seans **internetsiz** çalışır.

**Demo sürüm (v0.1):** A1.1–A1.2 seviyesinde 10 ders, seviye testi, 5 adımlı günlük seans, FSRS aralıklı tekrar, seri/XP, Türkçe hata modeli (20 etiket), hata haritası.

## Çalıştırma

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # dist/ (PWA: manifest + service worker)
pnpm preview    # dist/ önizleme, http://localhost:4173
pnpm e2e        # uçtan uca duman testi (önce pnpm preview açık olmalı)
```

Telefonda denemek için: `pnpm build` sonrası `dist/` klasörünü herhangi bir statik barındırmaya (GitHub Pages, Cloudflare Pages, Netlify) koy; tarayıcıda "Ana ekrana ekle" ile kurulur.

## GitHub Pages ile yayın

`.github/workflows/pages.yml` her `main` push'unda build alıp GitHub Pages'e yayınlar.
Repo ayarlarında **Settings → Pages → Source: GitHub Actions** seçilmeli. Adres: `https://<kullanıcı>.github.io/<repo>/`.

## Yapı

```
src/
  content/        # içerik: beceri grafiği, hata etiketleri, dersler, seviye testi (JSON benzeri TS)
    skills.ts       beceri DAG'ı (A1.1 … A2.1)
    errorTags.ts    Türkçe konuşanların 20 sistematik hatası
    lessonsA11.ts   5 ders (to be, a/an, he/she/it, çoğul, iyelik)
    lessonsA12.ts   5 ders (geniş zaman, do/does, there is, can, in/on/at)
    levelTest.ts    adaptif seviye testi havuzu
  engine/         # saf kod, LLM yok
    planner.ts      günün seansını kurar (ısınma → ders → alıştırma → sınav → geri bildirim)
    match.ts        cevap normalizasyonu + hata varyantı eşleştirme
    srs.ts          FSRS (ts-fsrs) sarmalayıcı
    levelTest.ts    adaptif test mantığı
  store.ts        # zustand + localStorage: profil, kartlar, seanslar, hata sayaçları, seri
  screens/        # Onboarding, Home, Session, ErrorMap, Profile
  components/     # ui.tsx (Button, Card…), exercises.tsx (çoktan seçmeli, eşleştir, sırala, serbest yazım)
e2e/smoke.mjs     # Playwright duman testi
```

## İçerik nasıl büyür

Her ders `Lesson` tipinde bir nesnedir (`src/content/types.ts`): Türkçe açıklama, örnekler, 5 kelime, alıştırmalar ve
`quiz[]` — her sınav sorusunda `error_variants[]` ile "Türk öğrencinin olası yanlış cevapları" ve etiketleri.
Yeni dersler LLM ile toplu üretilip (bkz. plan dokümanı, "AI'nin rolü") onaydan sonra bu dosyalara eklenir;
sonraki adımda dersler CDN'den JSON paketi olarak inecek.

## Reklam

Sadece seans sonuç ekranında bir alan var (`AdSlot`, `src/screens/Session.tsx`). Web'de AdSense, native (Capacitor) sürümde AdMob kodu buraya gelir. Ders sırasında reklam yok.

## Lisans

Kod: MIT. İçerik (dersler, örnekler): © Mustafa Dur.
