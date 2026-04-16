// ================================================================
// BRAND
// ================================================================
export const BRAND_NAME = 'ilyschool'
export const PARENT_BRAND = 'IlyCode Softwarelabs'
export const BRAND_DOMAIN = 'ilyschool.com'

// KONTAK
export const WHATSAPP_NUMBER = import.meta.env.VITE_WA_NUMBER || '6285178226071'
export const GFORM_URL =
  import.meta.env.VITE_GFORM_URL ||
  'https://forms.gle/https://forms.gle/1uBfy1Hj3ci7Vj6E9'
export const EMAIL = import.meta.env.VITE_EMAIL || 'ilycode2@gmail.com'

// SOCIAL MEDIA
export const SOCIAL_MEDIA = {
  instagram:
    import.meta.env.VITE_INSTAGRAM || 'https://www.instagram.com/ilycode_/',
  tiktok:
    import.meta.env.VITE_TIKTOK ||
    'https://www.tiktok.com/@ily_code?lang=id-ID',
  youtube:
    import.meta.env.VITE_YOUTUBE ||
    'https://youtube.com/@ilycode-z4f?si=_zzrxAcWmQOnnmM',
  website: import.meta.env.VITE_WEBSITE || `https://ilycode.my.id`,
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
