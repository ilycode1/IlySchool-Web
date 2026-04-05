// src/sections/FAQ.jsx
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import clsx from 'clsx'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import useInView from '@/hooks/useInView'
import { FAQ_ITEMS, FAQ_CATEGORIES } from '@/data/faq'
import { generateWALink } from '@/utils/formatWhatsApp'

// ── ACCORDION ITEM ─────────────────────────────────────────────
// Satu baris FAQ — pertanyaan + jawaban yang bisa dibuka tutup
const AccordionItem = ({ item, isOpen, onToggle, delay, isInView }) => (
  <div
    className={clsx(
      'border border-gray-100 rounded-2xl overflow-hidden',
      'transition-all duration-700 bg-white',
      // Shadow lebih tebal saat terbuka
      isOpen ? 'shadow-md' : 'shadow-sm hover:shadow-md',
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    )}
    style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
  >
    {/* ── PERTANYAAN (selalu terlihat) ──────────────────────── */}
    <button
      onClick={onToggle}
      className={clsx(
        'w-full flex items-center justify-between',
        'px-6 py-5 text-left',
        'transition-colors duration-200',
        isOpen ? 'bg-surface' : 'bg-white hover:bg-gray-50'
      )}
      // Aksesibilitas — aria-expanded memberi tahu screen reader
      // apakah accordion sedang terbuka
      aria-expanded={isOpen}
    >
      <span
        className={clsx(
          'font-heading font-semibold text-sm sm:text-base pr-4',
          'transition-colors duration-200',
          isOpen ? 'text-primary' : 'text-gray-800'
        )}
      >
        {item.question}
      </span>

      {/* Icon plus/minus dengan animasi rotate */}
      <div
        className={clsx(
          'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
          'transition-all duration-300',
          isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
        )}
      >
        {isOpen ? (
          <Minus size={14} strokeWidth={2.5} />
        ) : (
          <Plus size={14} strokeWidth={2.5} />
        )}
      </div>
    </button>

    {/* ── JAWABAN (animasi buka tutup) ──────────────────────── */}
    {/* Animasi pakai max-height karena height: auto tidak bisa dianimasikan */}
    <div
      style={{
        maxHeight: isOpen ? '400px' : '0px',
        transition: 'max-height 0.35s ease',
        overflow: 'hidden',
      }}
    >
      <div className="px-6 py-5 border-t border-gray-100">
        <p className="text-gray-500 text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  </div>
)

const FAQ = () => {
  // State untuk track item mana yang terbuka
  // null = semua tertutup
  const [openId, setOpenId] = useState(null)

  // State untuk filter kategori
  const [activeCategory, setActiveCategory] = useState('semua')

  const [headingRef, headingInView] = useInView({ threshold: 0.3 })
  const [categoryRef, categoryInView] = useInView({ threshold: 0.3 })
  const [listRef, listInView] = useInView({ threshold: 0.05 })
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 })

  // Toggle accordion — kalau klik yang sudah buka → tutup
  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  // Filter FAQ berdasarkan kategori aktif
  const filteredFAQ =
    activeCategory === 'semua'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <SectionWrapper id="faq" background="surface">
      {/* ── HEADING ─────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className={clsx(
          'text-center max-w-2xl mx-auto mb-10',
          'transition-all duration-700',
          headingInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        )}
      >
        <SectionLabel className="mb-4">
          Pertanyaan yang Sering Ditanyakan
        </SectionLabel>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ada yang Masih <span className="text-primary">Bingung?</span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          Kami kumpulkan pertanyaan yang paling sering ditanyakan. Kalau masih
          belum terjawab, langsung tanya via WhatsApp.
        </p>
      </div>

      {/* ── FILTER KATEGORI ─────────────────────────────────── */}
      <div
        ref={categoryRef}
        className={clsx(
          'flex flex-wrap gap-2 justify-center mb-10',
          'transition-all duration-700',
          categoryInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        )}
      >
        {FAQ_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id)
              // Reset accordion saat ganti kategori
              setOpenId(null)
            }}
            className={clsx(
              'px-4 py-2 rounded-full',
              'text-sm font-heading font-medium',
              'border transition-all duration-200',
              activeCategory === cat.id
                ? 'bg-primary text-white border-primary shadow-sm'
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── ACCORDION LIST ──────────────────────────────────── */}
      <div
        ref={listRef}
        className="max-w-3xl mx-auto flex flex-col gap-3 mb-12"
      >
        {filteredFAQ.length > 0 ? (
          filteredFAQ.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
              delay={index * 60}
              isInView={listInView}
            />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-400 font-heading">
              Tidak ada pertanyaan untuk kategori ini
            </p>
          </div>
        )}
      </div>

      {/* ── CLOSING CTA ─────────────────────────────────────── */}
      <div
        ref={ctaRef}
        className={clsx(
          'text-center',
          'transition-all duration-700',
          ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4">
          <p className="text-gray-500 text-sm">Masih ada pertanyaan lain?</p>
          <Button
            variant="primary"
            href={generateWALink(
              'Halo ilyschool, saya punya pertanyaan tentang layanan kalian.'
            )}
            external
          >
            Tanya Langsung via WhatsApp
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default FAQ
