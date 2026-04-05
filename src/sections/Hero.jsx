// src/sections/Hero.jsx
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shield,
  Star,
  Zap,
} from 'lucide-react'
import clsx from 'clsx'
import Button from '@/components/ui/Button'
import { generateWALink } from '@/utils/formatWhatsApp'
import { handleNavClick } from '@/utils/scrollTo'
import { GFORM_URL } from '@/config/constants'

// ── DATA SLIDES ────────────────────────────────────────────────
// Setiap slide punya background color berbeda
// Nanti ganti bgColor dengan foto asli menggunakan bg-[url(...)]
const SLIDES = [
  {
    id: 0,
    bgColor: '#1a3c6e',
    label: 'SMA & SMP Negeri',
    headline: 'Website Resmi Sekolah',
    highlight: 'Mulai Rp 100.000',
    sub: 'per Tahun',
  },
  {
    id: 1,
    bgColor: '#1b5e3b',
    label: 'Madrasah & Pesantren',
    headline: 'Hadir Digital dengan',
    highlight: 'Tampilan Islami',
    sub: 'Profesional & Terpercaya',
  },
  {
    id: 2,
    bgColor: '#0f6e75',
    label: 'SD, SMK & Semua Jenjang',
    headline: 'Website Jadi dalam',
    highlight: '3 Hari Kerja',
    sub: 'Tanpa Keahlian Coding',
  },
]

// ── FLOATING BADGE ─────────────────────────────────────────────
// Kartu kecil dekoratif yang "mengambang" di hero
const FloatingBadge = ({ icon: Icon, text, subtext, className }) => (
  <div
    className={clsx(
      'absolute bg-white rounded-xl shadow-xl',
      'px-4 py-3 flex items-center gap-3',
      'border border-gray-100',
      className
    )}
  >
    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
      <Icon size={18} className="text-primary" />
    </div>
    <div>
      <p className="text-xs font-heading font-semibold text-gray-800">{text}</p>
      <p className="text-xs text-gray-500">{subtext}</p>
    </div>
  </div>
)

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // ── AUTO PLAY SLIDER ────────────────────────────────────────
  const goToSlide = (index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNext = () => {
    goToSlide((currentSlide + 1) % SLIDES.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 4500)

    return () => clearInterval(interval)
  }, [currentSlide])

  // ── NAVIGASI SLIDE ──────────────────────────────────────────

  const goToPrev = () => {
    goToSlide((currentSlide - 1 + SLIDES.length) % SLIDES.length)
  }

  const slide = SLIDES[currentSlide]

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{
        backgroundColor: slide.bgColor,
        transition: 'background-color 0.8s ease',
      }}
    >
      {/* ── BACKGROUND PATTERN ─────────────────────────────── */}
      {/* Grid pattern dekoratif */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient overlay bawah — transisi ke section berikutnya */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

      {/* ── KONTEN UTAMA ────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ── KOLOM KIRI: Teks ───────────────────────────── */}
            <div className="flex flex-col gap-6">
              {/* Label slide */}
              <div
                key={`label-${currentSlide}`}
                className="inline-flex items-center gap-2 animate-fade-up"
              >
                <span className="w-8 h-px bg-accent" />
                <span className="text-accent text-sm font-heading font-semibold tracking-wider uppercase">
                  {slide.label}
                </span>
              </div>

              {/* Headline */}
              <div key={`headline-${currentSlide}`} className="animate-fade-up">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                  {slide.headline}
                  <br />
                  <span className="font-bold text-accent">
                    {slide.highlight}
                  </span>
                  <br />
                  <span className="font-light text-white/80 text-3xl sm:text-4xl">
                    {slide.sub}
                  </span>
                </h1>
              </div>

              {/* Sub deskripsi */}
              <p
                key={`desc-${currentSlide}`}
                className="text-white/70 text-lg leading-relaxed max-w-lg animate-fade-up"
              >
                Ratusan sekolah masih belum punya website — atau punya tapi
                terbengkalai. ilyschool hadir untuk mengubah itu. Tampil
                profesional, dikelola mudah, harga yang tidak memberatkan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-up">
                <Button
                  variant="accent"
                  size="lg"
                  href={generateWALink()}
                  external
                >
                  Mulai Sekarang
                  <ArrowRight size={18} />
                </Button>

                <Button variant="white" size="lg" href={GFORM_URL} external>
                  Isi Formulir Pendaftaran
                </Button>
              </div>

              {/* Social proof mini */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {[
                  { icon: Shield, text: 'SSL Gratis' },
                  { icon: Star, text: 'Rating 4.9/5' },
                  { icon: Zap, text: 'Jadi 3 Hari' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-1.5 text-white/60"
                  >
                    <Icon size={14} className="text-accent" />
                    <span className="text-xs font-heading">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── KOLOM KANAN: Visual ─────────────────────────── */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Mockup browser placeholder */}
              <div className="relative w-full max-w-lg">
                {/* Browser chrome */}
                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  {/* URL bar */}
                  <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 flex items-center gap-2">
                    <Shield size={10} className="text-green-400" />
                    <span className="text-xs text-gray-400 font-mono">
                      smanusantara.ilyschool.com
                    </span>
                  </div>
                </div>

                {/* Browser content placeholder */}
                <div
                  className="rounded-b-xl overflow-hidden"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <img
                    src="https://placehold.co/600x400/ffffff/1a3c6e?text=Preview+Website+Sekolah"
                    alt="Preview website sekolah"
                    className="w-full"
                  />
                </div>

                {/* Floating badges */}
                <FloatingBadge
                  icon={Shield}
                  text="SSL Aktif"
                  subtext="https:// terlindungi"
                  className="-left-8 top-16"
                />

                <FloatingBadge
                  icon={Star}
                  text="Akreditasi A"
                  subtext="Terverifikasi"
                  className="-right-8 bottom-20"
                />

                <FloatingBadge
                  icon={Zap}
                  text="Website Aktif"
                  subtext="Online 24/7"
                  className="left-8 -bottom-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SLIDER CONTROLS ─────────────────────────────────── */}
      <div className="relative z-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {/* Prev button */}
            <button
              onClick={goToPrev}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
              aria-label="Slide sebelumnya"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {SLIDES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(s.id)}
                  className={clsx(
                    'transition-all duration-300 rounded-full',
                    currentSlide === s.id
                      ? 'w-8 h-2 bg-accent'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  )}
                  aria-label={`Slide ${s.id + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
              aria-label="Slide berikutnya"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ── WAVE DIVIDER ────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
