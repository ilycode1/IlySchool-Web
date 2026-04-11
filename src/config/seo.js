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

  // ── BLOG LISTING ───────────────────────────────────────────
  blog: {
    title: 'Blog & Tips Sekolah Digital | ilyschool',
    description:
      'Tips dan panduan seputar website sekolah, konten digital, dan transformasi digital untuk institusi pendidikan Indonesia.',
    keywords: 'blog website sekolah, tips digital sekolah, panduan website pendidikan',
    ogTitle: 'Blog & Tips | ilyschool',
    ogDescription: 'Tips praktis seputar website sekolah dan transformasi digital pendidikan.',
    canonical: 'https://ilyschool.com/blog',
  },

  // ── BLOG DETAIL ─────────────────────────────────────────────
  // Fungsi — butuh data post dinamis
  blogPost: (post) => ({
    title: post.metaTitle || `${post.title} | ilyschool`,
    description: post.metaDescription || post.excerpt,
    keywords: post.tags.join(', '),
    ogTitle: post.title,
    ogDescription: post.excerpt,
    ogImage: post.thumbnail || '/og-image.jpg',
    canonical: `https://ilyschool.com/blog/${post.slug}`,
  }),

  // ── KEBIJAKAN PRIVASI ───────────────────────────────────────
  privacyPolicy: {
    title: 'Kebijakan Privasi | ilyschool',
    description: 'Kebijakan privasi ilyschool — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
    canonical: 'https://ilyschool.com/kebijakan-privasi',
  },

  // ── SYARAT & KETENTUAN ──────────────────────────────────────
  termsConditions: {
    title: 'Syarat & Ketentuan | ilyschool',
    description: 'Syarat dan ketentuan penggunaan layanan ilyschool — platform website sekolah profesional Indonesia.',
    canonical: 'https://ilyschool.com/syarat-ketentuan',
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
