import { BLOG_POSTS } from '@/data/blog'
import { TEMPLATES } from '@/data/templates'
import { BRAND_DOMAIN } from '@/config/constants'

const BASE_URL = `https://${BRAND_DOMAIN}`

export default function sitemap() {
  const now = new Date()

  const staticRoutes = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const templateRoutes = TEMPLATES.map((t) => ({
    url: `${BASE_URL}/template/${t.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes, ...templateRoutes]
}
