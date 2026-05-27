'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { getAllPosts, getAllCategories, formatDate } from '@/data/blog'

const BlogCard = ({ post }) => (
  <Link
    href={`/blog/${post.slug}`}
    className={clsx(
      'group flex flex-col bg-white rounded-2xl overflow-hidden',
      'border border-gray-100 shadow-sm',
      'hover:shadow-lg hover:-translate-y-1',
      'transition-all duration-300'
    )}
  >
    <div className="relative aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary/20 overflow-hidden">
      {post.thumbnail ? (
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-heading font-bold text-4xl text-primary/20">
            {post.category.charAt(0)}
          </span>
        </div>
      )}
      <span className="absolute top-3 left-3 bg-primary text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">
        {post.category}
      </span>
    </div>

    <div className="flex flex-col flex-1 p-6">
      <h2 className="font-heading font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
        {post.title}
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {formatDate(post.publishedAt)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={12} />
          {post.readTime} menit baca
        </span>
      </div>

      <span className="inline-flex items-center gap-1.5 text-primary font-heading font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
        Baca Selengkapnya
        <ArrowRight size={14} />
      </span>
    </div>
  </Link>
)

export default function BlogClient() {
  const allPosts = getAllPosts()
  const categories = getAllCategories()
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filtered =
    activeCategory === 'Semua'
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <section className="bg-primary pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-heading font-semibold tracking-wider uppercase">
              Blog & Tips
            </span>
            <span className="w-8 h-px bg-accent" />
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Tips Sekolah <span className="text-accent">Digital</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Panduan praktis dan inspirasi seputar website sekolah, konten
            digital, dan transformasi pendidikan di era modern.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-heading font-medium transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                )}
              >
                <Tag size={12} className="inline mr-1.5" />
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-heading">
                Belum ada artikel di kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
