import { SEO_CONFIG } from '@/config/seo'
import HomeClient from './HomeClient'

export const metadata = {
  title: SEO_CONFIG.home.title,
  description: SEO_CONFIG.home.description,
  keywords: SEO_CONFIG.home.keywords,
  alternates: { canonical: SEO_CONFIG.home.canonical },
  openGraph: {
    title: SEO_CONFIG.home.ogTitle,
    description: SEO_CONFIG.home.ogDescription,
    url: SEO_CONFIG.home.canonical,
    images: [SEO_CONFIG.home.ogImage],
  },
}

export default function HomePage() {
  return <HomeClient />
}
