import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/data/blog'
import { BRAND_NAME } from '@/config/constants'
import { breadcrumbSchema, jsonLdScript } from '@/lib/jsonLd'
import BlogDetailContent from './BlogDetailContent'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.metaTitle || `${post.title} | ${BRAND_NAME}`,
    description: post.metaDescription || post.excerpt,
    keywords: post.tags.join(', '),
    alternates: { canonical: `https://ilyschool.com/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://ilyschool.com/blog/${post.slug}`,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: 'https://ilyschool.com',
    },
    datePublished: post.publishedAt,
    image: post.thumbnail || '',
    url: `https://ilyschool.com/blog/${post.slug}`,
  }

  const breadcrumb = breadcrumbSchema([
    { name: 'Beranda', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(articleSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <BlogDetailContent post={post} related={related} />
    </>
  )
}
