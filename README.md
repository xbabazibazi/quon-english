# QUON English — Türkler için İngilizce

Türkçe konuşanlar için **tamamen ücretsiz**, A1'den B2'ye İngilizce kursu (PWA): dilbilgisi, kelime, okuma/dinleme, konuşma senaryoları. Süre sınırı yok. Bir QUON SOFT ürünüdür.
Kalp yok, kilit yok. Hataları Türkçe anlatır. Çalışma anında AI yok: tüm içerik önceden üretilir, seans **internetsiz** çalışır.

**Sürüm v0.3:** A1.1–B2.1 seviyesinde 50 ders (her biri 10 alıştırma + 12 soruluk havuz), seviye testi, A1–B2 arası yaklaşık 2.800 kelime (Türkçeden İngilizceye yazarak FSRS tekrar), 30 seviyeli okuma metni (dinleme + dikte), 16 konuşma senaryosu (cihazda kayıt), Türkçe hata modeli (51 etiket), hata haritası. Ses cihazın kendi İngilizce sesiyle çalınır. Ücretli altyapı `src/billing.ts` içinde hazır ama kapalı (`BILLING_ENABLED = false`, `ADS_ENABLED = false`).

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
