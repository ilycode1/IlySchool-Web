import './globals.css'
import { Poppins, Inter } from 'next/font/google'
import { DEFAULT_SEO } from '@/config/seo'
import { BRAND_NAME, BRAND_DOMAIN } from '@/config/constants'
import { organizationSchema, websiteSchema, jsonLdScript } from '@/lib/jsonLd'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(`https://${BRAND_DOMAIN}`),
  title: {
    default: DEFAULT_SEO.title,
    template: `%s | ${BRAND_NAME}`,
  },
  description: DEFAULT_SEO.description,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: BRAND_NAME,
    images: [DEFAULT_SEO.ogImage],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg' },
  manifest: '/site.webmanifest',
}

export const viewport = {
  themeColor: '#1a3c6e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationSchema)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(websiteSchema)} />
      </head>
      <body>{children}</body>
    </html>
  )
}
