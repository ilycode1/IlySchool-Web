import { SEO_CONFIG } from '@/config/seo'
import { FAQ_ITEMS } from '@/data/faq'
import { PRICING_PLANS } from '@/data/pricing'
import { TESTIMONIALS, getAverageRating } from '@/data/testimonials'
import {
  faqSchema,
  serviceSchema,
  aggregateRatingSchema,
  jsonLdScript,
} from '@/lib/jsonLd'
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema(FAQ_ITEMS))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceSchema(PRICING_PLANS))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          aggregateRatingSchema(getAverageRating(), TESTIMONIALS.length)
        )}
      />
      <HomeClient />
    </>
  )
}
