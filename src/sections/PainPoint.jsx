'use client'

// src/sections/PainPoint.jsx
import { FileText, SearchX, AlertTriangle } from 'lucide-react'
import clsx from 'clsx'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import useInView from '@/hooks/useInView'

// ── DATA PAIN POINTS ───────────────────────────────────────────
const PAIN_POINTS = [
  {
    id: 'brosur',
    icon: FileText,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    title: 'Masih pakai brosur fisik',
    description:
      'Informasi PPDB, profil sekolah, dan pengumuman masih disebarkan manual. Tidak efisien, mudah terlewat, dan tidak bisa diupdate real-time.',
    stat: '73%',
    statLabel: 'orang tua cari info sekolah lewat internet',
  },
  {
    id: 'google',
    icon: SearchX,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'Tidak muncul di pencarian Google',
    description:
      'Ketika orang tua cari "SMP terbaik di [kota]", sekolah Anda tidak muncul. Calon siswa baru tidak tahu Anda ada — dan memilih sekolah lain.',
    stat: '90%',
    statLabel: 'calon siswa mulai dari pencarian online',
  },
  {
    id: 'terbengkalai',
    icon: AlertTriangle,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    title: 'Punya website tapi tidak terurus',
    description:
      'Dibuat sekali, tidak pernah diupdate. Desain lama, link mati, informasi sudah tidak relevan. Justru merusak citra sekolah di mata pengunjung.',
    stat: '60%',
    statLabel: 'website sekolah terakhir diupdate > 1 tahun lalu',
  },
]

// ── PAIN POINT CARD ────────────────────────────────────────────
const PainCard = ({ item, index, isInView }) => {
  const Icon = item.icon

  return (
    <Card
      variant="default"
      hover
      className={clsx(
        'flex flex-col gap-4 h-full',
        'transition-all duration-700',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      // Staggered delay — setiap card muncul 150ms setelah card sebelumnya
      style={{ transitionDelay: isInView ? `${index * 150}ms` : '0ms' }}
    >
      {/* Icon */}
      <div
        className={clsx(
          'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
          item.iconBg
        )}
      >
        <Icon size={22} className={item.iconColor} />
      </div>

      {/* Teks */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading font-semibold text-gray-800 text-lg">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Stat */}
      <div
        className={clsx(
          'mt-auto pt-4 border-t border-gray-100',
          'flex items-baseline gap-2'
        )}
      >
        <span
          className={clsx('font-heading font-bold text-2xl', item.iconColor)}
        >
          {item.stat}
        </span>
        <span className="text-xs text-gray-400 leading-tight">
          {item.statLabel}
        </span>
      </div>
    </Card>
  )
}

const PainPoint = () => {
  // Observe heading
  const [headingRef, headingInView] = useInView({ threshold: 0.3 })
  // Observe cards
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 })
  // Observe closing
  // eslint-disable-next-line no-unused-vars
  const [closingRef, closingInView] = useInView({ threshold: 0.5 })

  return (
    <SectionWrapper id="pain-point" background="surface">
      {/* ── HEADING ─────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className={clsx(
          'text-center max-w-2xl mx-auto mb-12',
          'transition-all duration-700',
          headingInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        )}
      >
        <SectionLabel className="mb-4">
          Masalah yang sering terjadi
        </SectionLabel>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Sekolah Anda Sudah Punya{' '}
          <span className="text-primary">Website?</span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          Kalau belum — calon orang tua mungkin sudah memilih sekolah lain yang
          lebih mudah ditemukan secara online.
        </p>
      </div>

      {/* ── CARDS ───────────────────────────────────────────── */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {PAIN_POINTS.map((item, index) => (
          <PainCard
            key={item.id}
            item={item}
            index={index}
            isInView={cardsInView}
          />
        ))}
      </div>

      {/* ── CLOSING LINE ────────────────────────────────────── */}
      <div
        ref={closingRef}
        className={clsx(
          'text-center max-w-2xl mx-auto',
          'transition-all duration-700',
          closingRef ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        {/* Garis dekoratif */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300" />
          <span className="text-2xl">💡</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300" />
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          Kami membangun ilyschool dengan satu tujuan:{' '}
          <span className="font-semibold text-primary">
            setiap sekolah berhak tampil profesional di internet, tanpa harus mahal.
          </span>
        </p>
      </div>
    </SectionWrapper>
  )
}

export default PainPoint