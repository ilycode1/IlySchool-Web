'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import clsx from 'clsx'
import { formatDate } from '@/data/blog'
import { SOCIAL_MEDIA } from '@/config/constants'

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
          {block.text}
        </h2>
      )
    case 'paragraph':
      return (
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
          {block.text}
        </p>
      )
    case 'list':
      return (
        <ul className="mb-5 flex flex-col gap-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'closing':
      return (
        <div className="mt-10 p-6 bg-primary/5 border-l-4 border-primary rounded-r-2xl">
          <p className="text-primary font-medium leading-relaxed">
            {block.text}
          </p>
        </div>
      )
    default:
      return null
  }
}

const RelatedCard = ({ post }) => (
  <Link
    href={`/blog/${post.slug}`}
    className={clsx(
      'group flex gap-4 p-4 rounded-xl bg-white border border-gray-100',
      'hover:border-primary/30 hover:shadow-md transition-all duration-200'
    )}
  >
    <div className="relative w-20 h-20 rounded-lg bg-primary/10 flex-shrink-0 overflow-hidden">
      {post.thumbnail ? (
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          sizes="80px"
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-heading font-bold text-2xl text-primary/20">
            {post.category.charAt(0)}
          </span>
        </div>
      )}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs text-primary font-heading font-semibold mb-1">
        {post.category}
      </p>
      <h3 className="font-heading font-semibold text-gray-800 text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-xs text-gray-400 mt-1">
        {formatDate(post.publishedAt)}
      </p>
    </div>
  </Link>
)

export default function BlogDetailContent({ post, related }) {
  const handleShare = () => {
    const url =
      typeof window !== 'undefined' ? window.location.href : ''
    const text = encodeURIComponent(`${post.title} — ${url}`)
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section className="bg-primary pt-28 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-heading mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Kembali ke Blog
          </Link>

          <span className="inline-block bg-accent text-gray-900 text-xs font-heading font-bold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime} menit baca
            </span>
            <span className="text-white/40">oleh {post.author}</span>
          </div>
        </div>
      </section>

      {post.thumbnail && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="relative w-full aspect-[16/9] rounded-2xl shadow-xl overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed mb-8 pb-8 border-b border-gray-100">
              {post.excerpt}
            </p>

            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}

            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-heading"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 p-6 bg-primary rounded-2xl text-center">
              <p className="text-white font-heading font-semibold text-lg mb-2">
                Artikel ini bermanfaat?
              </p>
              <p className="text-white/70 text-sm mb-5">
                Bagikan ke rekan guru atau kepala sekolah yang membutuhkan.
              </p>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-accent text-gray-900 font-heading font-semibold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Bagikan via WhatsApp
              </button>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-gray-900 mb-4">
                  Artikel Lainnya
                </h3>
                <div className="flex flex-col gap-3">
                  {related.map((p) => (
                    <RelatedCard key={p.id} post={p} />
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6 text-center">
                <p className="font-heading font-bold text-white text-lg mb-2 leading-tight">
                  Siap Bangun Website Sekolah?
                </p>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Mulai dari Rp 100.000/tahun. Jadi dalam 3 hari kerja.
                </p>
                <a
                  href={SOCIAL_MEDIA.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-accent text-gray-900 font-heading font-semibold text-sm px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Lihat Paket Harga
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
