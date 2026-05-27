import { BRAND_NAME, BRAND_DOMAIN, PARENT_BRAND, SOCIAL_MEDIA, EMAIL } from '@/config/constants'

const BASE_URL = `https://${BRAND_DOMAIN}`

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: BRAND_NAME,
  alternateName: 'IlySchool',
  url: BASE_URL,
  logo: `${BASE_URL}/ilyschool.png`,
  description: 'Platform website company profile khusus sekolah Indonesia. Mulai Rp 100.000/tahun.',
  email: EMAIL,
  parentOrganization: { '@type': 'Organization', name: PARENT_BRAND },
  areaServed: { '@type': 'Country', name: 'Indonesia' },
  sameAs: [SOCIAL_MEDIA.instagram, SOCIAL_MEDIA.tiktok, SOCIAL_MEDIA.youtube, SOCIAL_MEDIA.website],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: BRAND_NAME,
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'id-ID',
}

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
})

export const serviceSchema = (plans) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Pembuatan Website Sekolah',
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'Indonesia' },
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'school',
  },
  offers: plans.map((plan) => ({
    '@type': 'Offer',
    name: `Paket ${plan.name}`,
    description: plan.description,
    price: plan.price,
    priceCurrency: 'IDR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: plan.price,
      priceCurrency: 'IDR',
      unitText: 'YEAR',
    },
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/#pricing`,
  })),
})

export const aggregateRatingSchema = (ratingValue, reviewCount) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${BRAND_NAME} — Website Sekolah Profesional`,
  description: 'Platform pembuatan website sekolah Indonesia mulai Rp 100.000/tahun.',
  brand: { '@type': 'Brand', name: BRAND_NAME },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(ratingValue),
    reviewCount: String(reviewCount),
    bestRating: '5',
    worstRating: '1',
  },
})

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${BASE_URL}${item.path}`,
  })),
})

export const productSchema = (template) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `Template ${template.name} — Website Sekolah`,
  description: template.description,
  image: `${BASE_URL}${template.thumbnail}`,
  brand: { '@type': 'Brand', name: BRAND_NAME },
  category: 'Template Website Sekolah',
  offers: {
    '@type': 'Offer',
    price: 100000,
    priceCurrency: 'IDR',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/template/${template.id}`,
    seller: { '@id': `${BASE_URL}/#organization` },
  },
})

export const jsonLdScript = (schema) => ({
  __html: JSON.stringify(schema),
})
