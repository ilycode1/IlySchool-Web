/* eslint-disable no-unused-vars */
// src/sections/TemplateShowcase.jsx
import { useState, useMemo } from 'react'
import { Eye, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import useInView from '@/hooks/useInView'
import { TEMPLATES, getPopularTemplates } from '@/data/templates'
import { generateWALinkByTemplate } from '@/utils/formatWhatsApp'

// ── FILTER CATEGORIES ──────────────────────────────────────────
const FILTERS = [
  { id: 'semua', label: 'Semua' },
  { id: 'SMA', label: 'SMA / SMP' },
  { id: 'SD', label: 'SD / TK' },
  { id: 'SMK', label: 'SMK' },
  { id: 'Madrasah', label: 'Madrasah' },
  { id: 'Pesantren', label: 'Pesantren' },
  { id: 'Universal', label: 'Universal' },
]

// ── TEMPLATE CARD ──────────────────────────────────────────────
const TemplateCard = ({ template, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={clsx(
        'group relative rounded-2xl overflow-hidden',
        'border border-gray-100 shadow-sm',
        'transition-all duration-700',
        'cursor-pointer',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: isInView ? `${(index % 6) * 80}ms` : '0ms' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── THUMBNAIL ─────────────────────────────────────── */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={template.thumbnail}
          alt={`Template ${template.name}`}
          className={clsx(
            'w-full h-full object-cover',
            'transition-transform duration-500',
            isHovered && 'scale-105'
          )}
        />

        {/* Color swatches overlay */}
        <div
          className={clsx(
            'absolute top-3 right-3 flex gap-1.5',
            'transition-all duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          {Object.values(template.colors).map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Popular badge */}
        {template.popular && (
          <div className="absolute top-3 left-3">
            <Badge variant="solid-accent" size="sm">
              ⭐ Populer
            </Badge>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className={clsx(
            'absolute inset-0 bg-primary/80',
            'flex flex-col items-center justify-center gap-3',
            'transition-all duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          <a
            href={generateWALinkByTemplate(template.name)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              'flex items-center gap-2',
              'bg-white text-primary',
              'px-5 py-2.5 rounded-xl',
              'text-sm font-heading font-semibold',
              'hover:bg-accent transition-colors duration-200',
              'shadow-lg'
            )}
          >
            <Eye size={16} />
            Pilih Template Ini
          </a>
        </div>
      </div>

      {/* ── CARD INFO ─────────────────────────────────────── */}
      <div className="p-4 bg-white">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <span className="text-xs text-gray-400 font-heading">
              #{template.number}
            </span>
            <h3 className="font-heading font-semibold text-gray-900 text-base">
              {template.name}
            </h3>
          </div>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed mb-3">
          {template.description}
        </p>

        {/* Suitable for tags */}
        <div className="flex flex-wrap gap-1">
          {template.suitableFor.slice(0, 2).map((type) => (
            <Badge key={type} variant="ghost" size="sm">
              {type}
            </Badge>
          ))}
          {template.suitableFor.length > 2 && (
            <Badge variant="ghost" size="sm">
              +{template.suitableFor.length - 2}
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}

const TemplateShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('semua')
  const [headingRef, headingInView] = useInView({ threshold: 0.3 })
  const [filtersRef, filtersInView] = useInView({ threshold: 0.3 })
  const [gridRef, gridInView] = useInView({ threshold: 0.05 })
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 })

  // Filter templates berdasarkan kategori aktif
  const filteredTemplates = useMemo(() => {
    if (activeFilter === 'semua') return TEMPLATES
    return TEMPLATES.filter((t) =>
      t.suitableFor.some((s) => s.includes(activeFilter))
    )
  }, [activeFilter])

  return (
    <SectionWrapper id="templates" background="surface">
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
        <SectionLabel variant="accent" className="mb-4">
          Pilihan Template
        </SectionLabel>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          10 Template Siap Pakai,{' '}
          <span className="text-primary">Tinggal Pilih</span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          Setiap template dirancang untuk jenis sekolah yang berbeda — dari SD,
          SMP, SMA, SMK, hingga Madrasah dan Pesantren.
        </p>
      </div>

      {/* ── FILTER TABS ─────────────────────────────────────── */}
      <div
        ref={filtersRef}
        className={clsx(
          'flex flex-wrap gap-2 justify-center mb-10',
          'transition-all duration-700',
          filtersInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        )}
      >
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={clsx(
              'px-5 py-2 rounded-full',
              'text-sm font-heading font-medium',
              'transition-all duration-200',
              'border',
              activeFilter === filter.id
                ? 'bg-primary text-white border-primary shadow-sm'
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary'
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* ── TEMPLATE GRID ────────────────────────────────────── */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              index={index}
              isInView={gridInView}
            />
          ))
        ) : (
          // Empty state kalau tidak ada template yang cocok
          <div className="col-span-3 text-center py-16">
            <p className="text-gray-400 font-heading">
              Tidak ada template untuk kategori ini
            </p>
          </div>
        )}
      </div>

      {/* ── CTA BOTTOM ──────────────────────────────────────── */}
      <div
        ref={ctaRef}
        className={clsx(
          'text-center',
          'transition-all duration-700',
          ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        {/* Info text */}
        <p className="text-gray-500 text-sm mb-6">
          Tidak yakin pilih yang mana?{' '}
          <span className="text-primary font-medium">
            Konsultasi gratis dengan tim kami.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="primary"
            size="lg"
            href={`https://wa.me/${import.meta.env.VITE_WA_NUMBER || '6281234567890'}?text=${encodeURIComponent('Halo ilyschool, saya mau konsultasi pilih template yang cocok untuk sekolah kami.')}`}
            external
          >
            Konsultasi Pilih Template
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default TemplateShowcase
