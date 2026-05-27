import { SEO_CONFIG } from '@/config/seo'
import { BRAND_NAME } from '@/config/constants'
import BlogClient from './BlogClient'

export const metadata = {
  title: SEO_CONFIG.blog.title,
  description: SEO_CONFIG.blog.description,
  keywords: SEO_CONFIG.blog.keywords,
  alternates: { canonical: SEO_CONFIG.blog.canonical },
  openGraph: {
    title: SEO_CONFIG.blog.ogTitle,
    description: SEO_CONFIG.blog.ogDescription,
    url: SEO_CONFIG.blog.canonical,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: `Blog & Tips | ${BRAND_NAME}`,
  url: 'https://ilyschool.com/blog',
  description:
    'Tips dan panduan seputar website sekolah dan transformasi digital pendidikan.',
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  )
}
