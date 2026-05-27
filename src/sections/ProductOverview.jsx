'use client'

// src/sections/ProductOverview.jsx
import * as LucideIcons from 'lucide-react'
import clsx from 'clsx'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import useInView from '@/hooks/useInView'
import { PRODUCT_PILLARS } from '@/data/features'

// ── WARNA PER PILAR ────────────────────────────────────────────
// Mapping color string → class Tailwind
// Kita tidak bisa pakai string dinamis langsung di Tailwind
// karena Tailwind hanya include class yang tertulis secara literal
// Solusi: buat object mapping manual
const COLOR_MAP = {
  primary: {
    bg: 'bg-primary/10',
    icon: 'text-primary',
    border: 'border-primary/20',
  },
  secondary: {
    bg: 'bg-secondary/10',
    icon: 'text-secondary',
    border: 'border-secondary/20',
  },
  accent: {
    bg: 'bg-accent/15',
    icon: 'text-amber-600',
    border: 'border-accent/25',
  },
}

// ── PILLAR CARD ────────────────────────────────────────────────
const PillarCard = ({ pillar, index, isInView }) => {
  // Resolve nama ikon string → komponen lucide
  const Icon = LucideIcons[pillar.icon] || LucideIcons['HelpCircle']
  const colors = COLOR_MAP[pillar.color] || COLOR_MAP.primary

  return (
    <Card
      variant="default"
      hover
      className={clsx(
        'flex flex-col gap-5 h-full group',
        'transition-all duration-700',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
    >
      {/* Icon container */}
      <div
        className={clsx(
          'w-14 h-14 rounded-2xl flex items-center justify-center',
          'border transition-all duration-300',
          'group-hover:scale-110',
          colors.bg,
          colors.border
        )}
      >
        <Icon size={24} className={colors.icon} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading font-semibold text-gray-900 text-xl">
          {pillar.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {pillar.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        className={clsx(
          'mt-auto h-0.5 rounded-full',
          'transition-all duration-500 w-0 group-hover:w-full',
          pillar.color === 'accent'
            ? 'bg-accent'
            : pillar.color === 'secondary'
              ? 'bg-secondary'
              : 'bg-primary'
        )}
      />
    </Card>
  )
}

const ProductOverview = () => {
  const [headingRef, headingInView] = useInView({ threshold: 0.3 })
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ threshold: 0.3 })

  return (
    <SectionWrapper id="about" background="white">
      {/* ── HEADING ─────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className={clsx(
          'text-center max-w-3xl mx-auto mb-16',
          'transition-all duration-700',
          headingInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        )}
      >
        <SectionLabel className="mb-4">Apa itu ilyschool?</SectionLabel>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Platform Website Khusus untuk{' '}
          <span className="text-primary">Institusi Pendidikan Indonesia</span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          ilyschool menyediakan website company profile sekolah yang
          profesional, responsif, dan mudah dikelola — tanpa perlu tim IT, tanpa
          install apapun, dan tanpa biaya yang membebani anggaran sekolah.
        </p>
      </div>

      {/* ── 4 PILAR GRID ────────────────────────────────────── */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
      >
        {PRODUCT_PILLARS.map((pillar, index) => (
          <PillarCard
            key={pillar.id}
            pillar={pillar}
            index={index}
            isInView={cardsInView}
          />
        ))}
      </div>

      {/* ── DIVIDER ─────────────────────────────────────────── */}
      <div className="flex items-center gap-6 mb-20">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xl font-heading font-semibold text-black uppercase tracking-widest">
          Mengapa memilih ilyschool
        </span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* ── COMPARISON TABLE ────────────────────────────────── */}
      {/* Perbandingan ilyschool vs alternatif lain */}
      <div
        ref={statsRef}
        className={clsx(
          'max-w-3xl mx-auto',
          'transition-all duration-700',
          statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          {/* Table header */}
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100">
            <div className="col-span-2 px-6 py-4">
              <span className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">
                Perbandingan
              </span>
            </div>
            <div className="px-4 py-4 text-center border-l border-gray-100">
              <span className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">
                Freelancer
              </span>
            </div>
            <div className="px-4 py-4 text-center border-l border-primary/20 bg-primary/5">
              <span className="text-xs font-heading font-bold text-primary uppercase tracking-wider">
                ilyschool
              </span>
            </div>
          </div>

          {/* Table rows */}
          {[
            {
              label: 'Harga',
              freelancer: 'Rp 1–5 juta',
              ily: 'Rp 100rb/tahun',
            },
            {
              label: 'Waktu pengerjaan',
              freelancer: '2–4 minggu',
              ily: '3 hari kerja',
            },
            {
              label: 'Revisi konten',
              freelancer: 'Bayar per revisi',
              ily: '12x gratis/tahun',
            },
            {
              label: 'SSL / https://',
              freelancer: 'Bayar terpisah',
              ily: 'Gratis semua paket',
            },
            {
              label: 'Dukungan teknis',
              freelancer: 'Tidak tentu',
              ily: 'Selalu tersedia',
            },
            {
              label: 'Update & maintenance',
              freelancer: 'Tidak ada',
              ily: 'Included',
            },
          ].map((row, i) => (
            <div
              key={row.label}
              className={clsx(
                'grid grid-cols-4',
                'border-b border-gray-50 last:border-0',
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              )}
            >
              <div className="col-span-2 px-6 py-4">
                <span className="text-sm text-gray-600 font-medium">
                  {row.label}
                </span>
              </div>
              <div className="px-4 py-4 text-center border-l border-gray-100">
                <span className="text-sm text-gray-400">{row.freelancer}</span>
              </div>
              <div className="px-4 py-4 text-center border-l border-primary/20 bg-primary/5">
                <span className="text-sm font-semibold text-primary">
                  {row.ily}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Caption
        <p className="text-center text-xs text-gray-400 mt-4">
          * Harga dan estimasi berdasarkan rata-rata pasar, dapat bervariasi
        </p> */}
      </div>
    </SectionWrapper>
  )
}

export default ProductOverview