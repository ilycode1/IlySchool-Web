'use client'

// src/sections/PromoBanner.jsx
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import useInView from '@/hooks/useInView'
import { generateWALink } from '@/utils/formatWhatsApp'

const WA_PROMO_MESSAGE =
  'Halo ilyschool, saya mau coba promo website sekolah gratis. Boleh info lebih lanjut?'

// ── PROMO BANNER ───────────────────────────────────────────────
// Dipakai 2x di homepage (setelah Hero & sebelum Pricing),
// jadi id dan background diatur via props agar tetap unik.
const PromoBanner = ({ id, background = 'white' }) => {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <SectionWrapper id={id} background={background}>
      <div
        ref={ref}
        className={clsx(
          'relative overflow-hidden rounded-3xl bg-primary',
          'px-6 py-14 sm:px-12 md:px-16 md:py-20 text-center',
          'transition-all duration-700',
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        {/* ── BACKGROUND PATTERN ──────────────────────────────── */}
        {/* Dot grid — sama dengan FinalCTA untuk konsistensi visual */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Gradient radial di tengah — memberi kesan spotlight */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(245,166,35,0.3) 0%, transparent 70%)',
          }}
        />

        {/* ── KONTEN ──────────────────────────────────────────── */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <SectionLabel variant="light" className="mb-6">
            Promo Terbatas
          </SectionLabel>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Website Sekolah. <span className="text-accent">Gratis</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Coba dulu tanpa biaya. Pilih dari 10 template siap pakai, nggak
            pakai ribet, dan website sekolahmu langsung aktif hari ini juga.
          </p>

          <Button
            variant="accent"
            size="lg"
            href={generateWALink(WA_PROMO_MESSAGE)}
            external
            className="shadow-lg shadow-accent/30"
          >
            Coba Sekarang
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default PromoBanner
