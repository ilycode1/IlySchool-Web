// src/sections/FinalCTA.jsx
import { ArrowRight, MessageCircle } from 'lucide-react'
import clsx from 'clsx'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import useInView from '@/hooks/useInView'
import { generateWALink } from '@/utils/formatWhatsApp'
import { GFORM_URL, PRICING } from '@/config/constants'

const FinalCTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <section
      id="final-cta"
      className="relative py-24 md:py-32 overflow-hidden bg-primary"
    >
      {/* ── BACKGROUND PATTERN ──────────────────────────────── */}
      {/* Dot grid — sama dengan hero untuk konsistensi visual */}
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={clsx(
            'text-center',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Label */}
          <div className="mb-6">
            <SectionLabel variant="light">Mulai Sekarang</SectionLabel>
          </div>

          {/* Headline utama */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Sekolah Anda Layak Tampil{' '}
            <span className="text-accent">Profesional</span> di Internet.
          </h2>

          {/* Sub headline */}
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            Jangan biarkan sekolah Anda tidak terlihat secara online. Mulai
            sekarang dengan investasi sekecil
          </p>

          {/* Harga highlight */}
          <div className="mb-10">
            <span className="font-heading font-bold text-4xl md:text-5xl text-accent">
              Rp 100.000
            </span>
            <span className="text-white/60 text-lg"> / tahun</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="accent"
              size="lg"
              href={generateWALink(
                'Halo ilyschool, saya mau mulai buat website untuk sekolah kami. Bisa bantu?'
              )}
              external
              className="shadow-lg shadow-accent/30"
            >
              <MessageCircle size={20} />
              Mulai via WhatsApp
            </Button>

            <Button variant="white" size="lg" href={GFORM_URL} external>
              Isi Formulir Pendaftaran
              <ArrowRight size={18} />
            </Button>
          </div>

          {/* Fine print — hilangkan kekhawatiran terakhir */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
            {[
              'Tidak ada kontrak jangka panjang',
              'Tidak ada biaya tersembunyi',
              'Bisa upgrade kapan saja',
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                {/* Checkmark kecil */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-accent flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
