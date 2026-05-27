'use client'

// src/sections/Testimonials.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import clsx from 'clsx'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import useInView from '@/hooks/useInView'
import useCountUp from '@/hooks/useCountUp'
import { TESTIMONIALS, getAverageRating } from '@/data/testimonials'
import { STATS } from '@/data/stats'

// ── STAR RATING ────────────────────────────────────────────────
const StarRating = ({ rating, size = 16 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={i < rating ? '#f5a623' : 'none'}
        stroke={i < rating ? '#f5a623' : '#d1d5db'}
        strokeWidth="2"
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
)

// ── STAT COUNTER ───────────────────────────────────────────────
// Komponen kecil untuk satu angka statistik dengan animasi
const StatCounter = ({ stat, isInView }) => {
  const count = useCountUp({
    target: stat.value,
    decimals: stat.decimals,
    isActive: isInView,
    duration: 1800,
  })

  return (
    <div className="text-center">
      <div className="font-heading font-bold text-3xl text-white mb-1">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-white/60 text-xs font-heading">{stat.label}</div>
    </div>
  )
}

// ── TESTIMONIAL CARD ───────────────────────────────────────────
const TestimonialCard = ({ testimonial, isActive }) => (
  <div
    className={clsx(
      'absolute inset-0',
      'transition-all duration-500',
      isActive
        ? 'opacity-100 translate-x-0 pointer-events-auto'
        : 'opacity-0 translate-x-8 pointer-events-none'
    )}
  >
    <div className="h-full flex flex-col justify-between p-10">
      {/* Quote icon */}
      <Quote
        size={40}
        className="text-primary/20 mb-4 flex-shrink-0"
        fill="currentColor"
      />

      {/* Kutipan */}
      <p className="text-gray-600 text-lg leading-relaxed italic flex-1 mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-gray-100"
        />

        <div>
          <p className="font-heading font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
          <p className="text-xs text-primary font-medium">
            {testimonial.school}
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [headingRef, headingInView] = useInView({ threshold: 0.3 })
  const [statsRef, statsInView] = useInView({ threshold: 0.3 })
  const [carouselRef, carouselInView] = useInView({ threshold: 0.2 })

  // ── AUTO SLIDE ───────────────────────────────────────────────
  useEffect(() => {
    // Jangan auto slide kalau sedang di-hover
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, currentIndex])

  // ── NAVIGASI ────────────────────────────────────────────────
  const goTo = (index) => {
    setCurrentIndex((index + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <SectionWrapper id="testimonials" background="white">
      {/* ── HEADING ─────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className={clsx(
          'text-center max-w-2xl mx-auto mb-16',
          'transition-all duration-700',
          headingInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        )}
      >
        <SectionLabel className="mb-4">Kata Mereka</SectionLabel>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Dipercaya Sekolah-Sekolah{' '}
          <span className="text-primary">di Seluruh Indonesia</span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          Lebih dari 50 sekolah sudah mempercayakan kehadiran digital mereka
          kepada ilyschool.
        </p>
      </div>

      {/* ── STATS BAR ───────────────────────────────────────── */}
      <div
        ref={statsRef}
        className={clsx(
          'bg-primary rounded-2xl p-8 mb-16',
          'grid grid-cols-2 md:grid-cols-4 gap-8',
          'transition-all duration-700',
          statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        {STATS.map((stat) => (
          <StatCounter key={stat.id} stat={stat} isInView={statsInView} />
        ))}
      </div>

      {/* ── CAROUSEL ────────────────────────────────────────── */}
      <div
        ref={carouselRef}
        className={clsx(
          'transition-all duration-700',
          carouselInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* ── KOLOM KIRI: Carousel controls ────────────────── */}
          <div className="flex flex-col gap-4">
            <p className="font-heading font-semibold text-gray-700 text-sm uppercase tracking-wider">
              Testimoni dari klien
            </p>

            {/* Daftar nama testimoni — klik untuk navigasi */}
            <div className="flex flex-col gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => goTo(i)}
                  className={clsx(
                    'flex items-center gap-3 p-3 rounded-xl text-left',
                    'transition-all duration-200',
                    currentIndex === i
                      ? 'bg-surface border border-primary/20'
                      : 'hover:bg-gray-50'
                  )}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={36}
                    height={36}
                    className={clsx(
                      'w-9 h-9 rounded-full object-cover flex-shrink-0',
                      'transition-all duration-200',
                      currentIndex === i
                        ? 'ring-2 ring-primary ring-offset-1'
                        : 'opacity-60'
                    )}
                  />
                  <div>
                    <p
                      className={clsx(
                        'font-heading font-semibold text-xs',
                        currentIndex === i ? 'text-primary' : 'text-gray-500'
                      )}
                    >
                      {t.name.split(',')[0]}
                    </p>
                    <p className="text-xs text-gray-400 truncate max-w-[150px]">
                      {t.school}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── KOLOM TENGAH & KANAN: Testimoni card ─────────── */}
          <div className="lg:col-span-2">
            <div
              className="relative bg-surface rounded-2xl p-10 pb-20 border border-gray-100"
              style={{ minHeight: '320px' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Render semua slide, hanya aktif yang terlihat */}
              {TESTIMONIALS.map((testimonial, i) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={i === currentIndex}
                />
              ))}

              {/* Prev / Next buttons */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                <button
                  onClick={() => goTo(currentIndex - 1)}
                  className={clsx(
                    'w-9 h-9 rounded-full',
                    'border border-gray-200 bg-white',
                    'flex items-center justify-center',
                    'text-gray-400 hover:text-primary hover:border-primary',
                    'transition-all duration-200'
                  )}
                  aria-label="Testimoni sebelumnya"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => goTo(currentIndex + 1)}
                  className={clsx(
                    'w-9 h-9 rounded-full',
                    'border border-gray-200 bg-white',
                    'flex items-center justify-center',
                    'text-gray-400 hover:text-primary hover:border-primary',
                    'transition-all duration-200'
                  )}
                  aria-label="Testimoni berikutnya"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Rating summary */}
            <div className="flex items-center gap-3 mt-4 px-2">
              <StarRating rating={5} size={14} />
              <span className="text-sm text-gray-500">
                Rating rata-rata{' '}
                <span className="font-semibold text-gray-700">
                  {getAverageRating()}/5
                </span>{' '}
                dari klien aktif
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Testimonials