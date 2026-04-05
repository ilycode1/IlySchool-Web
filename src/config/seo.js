// src/config/seo.js
// Konfigurasi SEO per halaman
// Dipakai bersama react-helmet-async

export const SEO_CONFIG = {
  // ── HALAMAN UTAMA ──────────────────────────────────────────
  home: {
    title: 'ilyschool — Website Sekolah Profesional Mulai Rp 100.000/Tahun',
    description:
      'Platform website company profile khusus sekolah Indonesia. Tampil profesional, dikelola mudah, harga yang tidak memberatkan. Mulai dari Rp 100.000 per tahun.',
    keywords:
      'website sekolah, company profile sekolah, website SD SMP SMA SMK, website madrasah, ilyschool',
    ogTitle: 'ilyschool — Website Sekolah Profesional',
    ogDescription:
      'Website company profile untuk sekolah Indonesia. Mulai Rp 100.000/tahun. Jadi dalam 3 hari kerja.',
    ogImage: '/og-image.jpg',
    canonical: 'https://ilyschool.com',
  },

  // ── HALAMAN TEMPLATE PREVIEW ───────────────────────────────
  // Fungsi — bukan object — karena butuh data template dinamis
  templatePreview: (template) => ({
    title: `Template ${template.name} — ilyschool`,
    description: `${template.description} Cocok untuk ${template.suitableFor.join(', ')}. Mulai dari Rp 100.000/tahun.`,
    keywords: `template website sekolah, ${template.name}, ${template.suitableFor.join(', ')}`,
    ogTitle: `Template ${template.name} — ilyschool`,
    ogDescription: template.description,
    ogImage: template.thumbnail,
    canonical: `https://ilyschool.com/template/${template.id}`,
  }),
}

// ── DEFAULT SEO ────────────────────────────────────────────────
// Fallback kalau halaman tidak punya config sendiri
export const DEFAULT_SEO = {
  title: 'ilyschool — Website Sekolah Profesional',
  description: 'Platform website company profile khusus sekolah Indonesia.',
  ogImage: '/og-image.jpg',
}
