// ================================================================
// BRAND
// ================================================================
export const BRAND_NAME = 'ilyschool'
export const PARENT_BRAND = 'IlyCode Softwarelabs'
export const BRAND_DOMAIN = 'ilyschool.com'

// KONTAK
export const WHATSAPP_NUMBER = import.meta.env.VITE_WA_NUMBER || '6285178226071'
export const GFORM_URL =
  import.meta.env.VITE_GFORM_URL || 'https://forms.gle/xxxxxx'
export const EMAIL = import.meta.env.VITE_EMAIL || 'halo@ilyschool.com'

// SOCIAL MEDIA
export const SOCIAL_MEDIA = {
  instagram:
    import.meta.env.VITE_INSTAGRAM || 'https://instagram.com/ilyschool',
  tiktok: import.meta.env.VITE_TIKTOK || 'https://tiktok.com/@ilyschool',
  youtube: import.meta.env.VITE_YOUTUBE || 'https://youtube.com/@ilyschool',
  website: import.meta.env.VITE_WEBSITE || `https://${BRAND_DOMAIN}`,
}

// PESAN WHATSAPP DEFAULT
export const WA_DEFAULT_MESSAGE = encodeURIComponent(
  'Halo ilyschool, saya tertarik membuat website untuk sekolah kami. Boleh info lebih lanjut?'
)

// STATISTIK
export const STATS = {
  schools: 50,
  rating: 4.9,
  workDays: 3,
  templates: 10,
}

//HARGA
export const PRICING = {
  entry: {
    normal: 250000,
    promo: 100000,
  },
  middle: {
    normal: 1000000,
    promo: 750000,
  },
  advanced: {
    normal: 2000000,
    promo: 1500000,
  },
}
