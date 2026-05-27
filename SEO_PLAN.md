# SEO Plan — ilyschool

> Notulen strategi & rencana optimasi SEO untuk ilyschool.com
> Dibuat: 2026-05-27 · Status: **Fase 1+2+3 SELESAI** · Fase 4–6 belum
> Bisa dijalankan per fase, tidak harus berurutan (kecuali Fase 1 sebagai foundation).

---

## 1. Context

| Atribut | Detail |
|---|---|
| Produk | Platform website builder khusus sekolah Indonesia |
| Target audience | SD, SMP, SMA, SMK, Madrasah (MI/MTs/MA), Pesantren |
| USP | Mulai Rp 100.000/tahun, jadi dalam 3 hari kerja |
| Aset konten saat ini | 10 template, 3 blog post, FAQ, Testimonial, Pricing |
| Domain | ilyschool.com |
| Tech stack | Next.js 15 App Router, React 19, Tailwind 3 |

---

## 2. Current SEO State (Audit)

### Sudah Bagus
- Next.js App Router (SSR/SSG) — HTML jadi sebelum Google crawl
- Metadata per page (home, blog, blog detail, template, terms, privacy)
- JSON-LD `Article` di blog detail, `Blog` di blog index
- `generateStaticParams` untuk blog & template (pre-rendered)
- next/font (Poppins + Inter) — no layout shift
- OG tags, Twitter cards, canonical URL

### Gap yang Harus Ditutup

| # | Gap | Impact |
|---|---|---|
| 1 | Tidak ada `sitemap.xml` | Google sulit discover semua page |
| 2 | Tidak ada `robots.txt` | Tidak ada crawl directive |
| 3 | Tidak ada `Organization` JSON-LD | Knowledge Graph & brand panel hilang |
| 4 | Tidak ada `FAQPage` schema padahal FAQ section ada | Lose rich snippet di SERP |
| 5 | Tidak ada `Service/Product` schema untuk pricing | Lose price snippet |
| 6 | Tidak ada `BreadcrumbList` | Lose breadcrumb di SERP |
| 7 | `<img>` di 8 lokasi (belum `next/image`) | LCP buruk → ranking turun |
| 8 | `themeColor` masih di `metadata` (deprecated) | Build warning |
| 9 | Cuma 3 blog post | Topical authority lemah |
| 10 | Tidak ada landing page per jenjang | Hilang long-tail traffic |
| 11 | Meta keyword generic | Tidak match user intent spesifik |
| 12 | Tidak ada `manifest.json` | PWA + mobile SEO signal hilang |
| 13 | Tidak ada Google Search Console verification | Tidak bisa monitor |

---

## 3. Keyword Strategy

### Tier 1 — Money Keywords (High Commercial Intent)
| Keyword | Target Page |
|---|---|
| jasa pembuatan website sekolah | Home |
| website sekolah murah | Home / pricing |
| harga website sekolah | Halaman pricing baru |
| template website sekolah | Halaman `/template` (baru) |

### Tier 2 — Jenjang & Niche (High Conversion Long-tail)
| Keyword | Target Page (Baru) |
|---|---|
| website SD / website sekolah dasar | `/website-sekolah-sd` |
| website SMP | `/website-sekolah-smp` |
| website SMA | `/website-sekolah-sma` |
| website SMK | `/website-sekolah-smk` |
| website madrasah / MI / MTs / MA | `/website-madrasah` |
| website pesantren | `/website-pesantren` |

### Tier 3 — Informational (Blog Cluster)
Existing: kenapa-sekolah-butuh-website, tips-konten-website-sekolah, perbedaan-domain-sch-id

Ide artikel baru (10):
1. Cara bikin website sekolah dari nol (panduan A–Z)
2. Biaya bikin website sekolah 2026 — perbandingan
3. 10 fitur wajib di website sekolah modern
4. Cara daftar domain `.sch.id` step-by-step
5. Panduan PPDB online untuk sekolah
6. Tips menulis profil sekolah yang menarik
7. Cara optimasi galeri foto sekolah agar cepat dimuat
8. Studi kasus: sekolah yang naik pendaftaran berkat website
9. Perbedaan website sekolah vs landing page sekolah
10. Tips SEO untuk website sekolah agar muncul di Google

### Tier 4 — Brand & Defensive
- `ilyschool`, `ilyschool review`, `ilyschool harga`, `alternatif [agensi web]`

---

## 4. Plan Eksekusi — 6 Fase

### Fase 1 — Foundation ✅ SELESAI (2026-05-27)
- [x] Buat `src/app/sitemap.js` (auto-generate dari `BLOG_POSTS` & `TEMPLATES`)
- [x] Buat `src/app/robots.js`
- [x] Fix `themeColor` → pindah ke `viewport` export di root layout
- [x] Tambah `Organization` JSON-LD di [src/app/layout.jsx](src/app/layout.jsx)
- [x] Tambah `WebSite` JSON-LD
- [x] Tambah `public/site.webmanifest`
- [x] Link manifest di root layout

### Fase 2 — Schema Markup untuk Rich Results ✅ SELESAI (2026-05-27)
- [x] `FAQPage` JSON-LD di home (10 FAQ items)
- [x] `Service` + `Offer` JSON-LD di home (3 paket pricing)
- [x] `BreadcrumbList` di blog detail page
- [x] `BreadcrumbList` di template detail page
- [x] `AggregateRating` di home (rating 5.0 dari 5 testimoni)
- [x] `Product` JSON-LD per template page

> Helper schema terpusat di [src/lib/jsonLd.js](src/lib/jsonLd.js).

### Fase 3 — Core Web Vitals & Performance ✅ SELESAI (2026-05-27)
- [x] Migrate `<img>` → `next/image` di 9 lokasi:
  - [x] [src/app/(site)/blog/BlogClient.jsx](src/app/(site)/blog/BlogClient.jsx)
  - [x] [src/app/(site)/blog/[slug]/BlogDetailContent.jsx](src/app/(site)/blog/[slug]/BlogDetailContent.jsx) (2 lokasi)
  - [x] [src/app/template/[id]/TemplatePreviewClient.jsx](src/app/template/[id]/TemplatePreviewClient.jsx)
  - [x] [src/sections/Features.jsx](src/sections/Features.jsx)
  - [x] [src/sections/Hero.jsx](src/sections/Hero.jsx)
  - [x] [src/sections/TemplateShowcase.jsx](src/sections/TemplateShowcase.jsx)
  - [x] [src/sections/Testimonials.jsx](src/sections/Testimonials.jsx) (2 lokasi)
- [x] Tambah `priority` prop ke hero image + blog detail hero (LCP boost)
- [x] Fix `useEffect` missing dependency di Hero.jsx (functional setState, drop `goToNext` ref)
- [x] Audit alt text — semua image punya alt descriptive (mention "Template X" / "Preview website sekolah")
- [ ] Run Lighthouse di production — target ≥90 semua kategori (post-deploy)

### Fase 4 — Content Expansion (Topical Authority) — ⏸️ ON HOLD
> Dipending sampai keputusan ulang. Effort tinggi, butuh copywriting. Lanjutkan setelah Fase 1+2+3+5+6 selesai dan ada data dari GSC untuk validasi keyword.

- [ ] 6 landing page per jenjang:
  - [ ] `/website-sekolah-sd`
  - [ ] `/website-sekolah-smp`
  - [ ] `/website-sekolah-sma`
  - [ ] `/website-sekolah-smk`
  - [ ] `/website-madrasah`
  - [ ] `/website-pesantren`
- [ ] Tulis 5–10 blog post baru (lihat Tier 3 di atas)
- [ ] Buat halaman `/harga` dedicated yang lebih SEO-friendly (saat ini cuma section di home)
- [ ] Buat halaman `/template` index (saat ini cuma per-detail di `/template/[id]`)

### Fase 5 — Refinement & Internal Linking (~2 jam)
- [ ] Refactor meta title/description per page sesuai keyword Tier 1–2
- [ ] Audit H1/H2 hierarchy semua page (cuma 1 H1, H2 hirarkis)
- [ ] Internal link strategy: blog → landing jenjang → home/pricing
- [ ] URL slug optimization
- [ ] Image filename SEO (rename `slide_01.webp` → `website-sma-negeri-template-royal-blue.webp`)

### Fase 6 — Monitoring (~1 jam)
- [ ] Setup Google Search Console + submit sitemap.xml
- [ ] (Opsional) Google Analytics 4 atau Plausible (privacy-friendly)
- [ ] Tambah Web Vitals tracking (`@vercel/analytics` / `@vercel/speed-insights`)
- [ ] Setup tracking konversi WhatsApp click & form submit

---

## 5. Estimasi Impact

| Fase | Effort | Expected Impact | Timeline Effect |
|---|---|---|---|
| 1 (Foundation) | 2 jam | Indexing 100% halaman | 1–2 minggu |
| 2 (Schema) | 2 jam | Rich snippet di SERP, CTR +20–40% | 2–4 minggu |
| 3 (CWV) | 3 jam | Ranking boost CWV signal + mobile UX | 1 bulan |
| 4 (Content) | High | Topical authority + organic traffic | 3–6 bulan |
| 5 (Refinement) | 2 jam | CTR & conversion dari title/desc match | 1 bulan |
| 6 (Monitoring) | 1 jam | Data untuk iterasi & validasi | Immediate |

---

## 6. Rekomendasi Urutan Eksekusi

**Sprint 1 (technical SEO, ~7 jam)**: Fase 1 + 2 + 3 — hasil cepat keliatan di GSC dalam 1–2 minggu.
**Sprint 2 (content, ongoing)**: Fase 4 — copywriting per landing/artikel, paralel dengan operasi.
**Sprint 3 (polish, ~3 jam)**: Fase 5 + 6 — setelah konten dasar siap.

---

## 7. Decisions (Locked — 2026-05-27)

| # | Pertanyaan | Jawaban |
|---|---|---|
| 1 | Site sudah live? | ✅ Sudah live di `ilyschool.com` via Vercel |
| 2 | Analytics? | `@vercel/analytics` + `@vercel/speed-insights` (zero config, privacy-friendly, no cookie banner) |
| 3 | Fase 4 (landing per jenjang)? | ⏸️ HOLD — kerjakan setelah Fase 1+2+3+5+6 selesai & ada data GSC |
| 4 | Google Business Profile? | ❌ Belum ada, skip dulu. ilyschool produk digital — GBP opsional, bisa dibuat nanti sebagai service-area business |

Konsekuensi:
- `LocalBusiness` JSON-LD tidak diperlukan di Fase 2. Cukup `Organization`.
- Untuk Fase 6, install `@vercel/analytics` + `@vercel/speed-insights` + Google Search Console.

---

## 8. Catatan Tambahan

- **Tidak perlu `hreflang`** karena single language (id-ID).
- **Tidak perlu AMP** — sudah deprecated oleh Google sejak 2024.
- **Server Component default** di Next.js App Router sudah optimal untuk SEO — pastikan section yang butuh interactivity saja yang pakai `'use client'`.
- Setelah deploy live, **submit sitemap ke Bing Webmaster Tools** juga (selain GSC).
- Periksa file referensi di repo: [src/config/seo.js](src/config/seo.js), [src/config/constants.js](src/config/constants.js), [src/data/blog.js](src/data/blog.js), [src/data/templates.js](src/data/templates.js), [src/data/faq.js](src/data/faq.js).
