import { BRAND_DOMAIN } from '@/config/constants'

const BASE_URL = `https://${BRAND_DOMAIN}`

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/kebijakan-privasi', '/syarat-ketentuan'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
