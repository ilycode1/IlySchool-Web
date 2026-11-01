# IlySchool

Website promosi & landing page jasa pembuatan website sekolah dari **IlyCode Softwarelabs**. Project ini menyajikan paket layanan, template showcase, portofolio, FAQ, blog, hingga CTA pemesanan via WhatsApp/Google Form untuk sekolah yang ingin memiliki website profesional.

## Ringkasan Project

- **Nama produk:** ilyschool
- **Induk brand:** IlyCode Softwarelabs
- **Tujuan:** Landing page conversion-focused untuk layanan jasa website sekolah (SD/SMP/SMA/MA/SMK/Pesantren).
- **Fitur utama:** Hero section, PainPoint, Features, How It Works, Product Overview, Template Showcase, Pricing (dinamis via state), Promo Banner, Testimonials, FAQ, Final CTA, Blog (list & detail), halaman Syarat & Ketentuan, Kebijakan Privasi, dan preview template.
- **SEO:** Sudah dioptimasi dengan metadata, JSON-LD, sitemap, dan robots.

## Teknologi Utama

- **[Next.js 15](https://nextjs.org/)** — React framework dengan App Router.
- **[React 19](https://react.dev/)** — Library UI.
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — Utility-first styling.
- **JavaScript (JSX)** — Bahasa pemrograman utama.
- **PostCSS + Autoprefixer** — Build pipeline CSS.

## Dependencies (Runtime)

| Package | Versi | Kegunaan |
|---|---|---|
| `next` | ^15.0.0 | Framework utama (App Router, SSR, routing, SEO). |
| `react` | ^19.2.4 | Core library UI. |
| `react-dom` | ^19.2.4 | Rendering React ke DOM. |
| `framer-motion` | ^12.38.0 | Animasi section, transisi, scroll reveal. |
| `lucide-react` | ^1.7.0 | Icon set modern. |
| `clsx` | ^2.1.1 | Utility untuk conditional className. |
| `react-hook-form` | ^7.72.0 | Manajemen form (validasi & handling input). |
| `zustand` | ^5.0.12 | State management ringan (UI store & pricing store). |

## Dev Dependencies

| Package | Versi | Kegunaan |
|---|---|---|
| `tailwindcss` | ^3.4.17 | Framework CSS. |
| `postcss` | ^8.5.8 | Prosesor CSS. |
| `autoprefixer` | ^10.4.27 | Prefix otomatis CSS vendor. |
| `eslint` | ^9.39.4 | Linter JavaScript/JSX. |
| `eslint-config-next` | ^15.0.0 | Konfigurasi ESLint untuk Next.js. |
| `eslint-config-prettier` | ^10.1.8 | Integrasi ESLint + Prettier. |
| `prettier` | ^3.8.1 | Code formatter. |
| `@types/react` | ^19.2.14 | Type definitions React. |
| `@types/react-dom` | ^19.2.3 | Type definitions React DOM. |

## Struktur Folder (ringkas)

```
src/
├── app/                  # App Router (layouts, pages, sitemap, robots)
│   ├── (site)/           # Grup route halaman publik
│   ├── template/         # Preview template
│   └── layout.jsx        # Root layout
├── components/
│   ├── shared/           # Navbar, Footer, WhatsAppButton, SectionWrapper
│   └── ui/               # Button, Card, Badge, Divider, AnimatedSection, dll.
├── sections/             # Hero, Features, Pricing, FAQ, Testimonials, dll.
├── data/                 # Data statis (pricing, templates, blog, faq, dll.)
├── store/                # Zustand stores (UI, pricing)
├── hooks/                # Custom hooks (useInView, useScrollspy, useCountUp)
├── lib/                  # Utilities (jsonLd)
├── config/               # Konstanta brand & konfigurasi SEO
└── utils/                # Helper (scrollTo, formatWhatsApp)
```

## Menjalankan Project

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build production
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

## Environment Variables (opsional)

```
NEXT_PUBLIC_WA_NUMBER=6285178226071
NEXT_PUBLIC_GFORM_URL=https://forms.gle/...
NEXT_PUBLIC_EMAIL=ilycode2@gmail.com
NEXT_PUBLIC_INSTAGRAM=
NEXT_PUBLIC_TIKTOK=
NEXT_PUBLIC_YOUTUBE=
NEXT_PUBLIC_WEBSITE=
```

## Lisensi

© IlyCode Softwarelabs. All rights reserved.
