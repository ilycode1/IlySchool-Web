import { notFound } from 'next/navigation'
import { SEO_CONFIG } from '@/config/seo'
import { getTemplateById, TEMPLATES } from '@/data/templates'
import { productSchema, breadcrumbSchema, jsonLdScript } from '@/lib/jsonLd'
import TemplatePreviewClient from './TemplatePreviewClient'

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ id: t.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const template = getTemplateById(id)
  if (!template) return {}

  const seo = SEO_CONFIG.templatePreview(template)
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: seo.ogImage ? [seo.ogImage] : [],
      url: seo.canonical,
    },
  }
}

export default async function TemplatePreviewPage({ params }) {
  const { id } = await params
  const template = getTemplateById(id)
  if (!template) notFound()

  const related = TEMPLATES.filter((t) => t.id !== template.id).slice(0, 3)

  const breadcrumb = breadcrumbSchema([
    { name: 'Beranda', path: '/' },
    { name: 'Template', path: '/#templates' },
    { name: template.name, path: `/template/${template.id}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(productSchema(template))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <TemplatePreviewClient template={template} related={related} />
    </>
  )
}
