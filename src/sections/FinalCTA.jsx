'use client'

// src/sections/FinalCTA.jsx
import { ArrowRight } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
    <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.654 4.786 1.797 6.788L2 30l7.397-1.77A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.538a11.51 11.51 0 0 1-5.886-1.614l-.422-.252-4.39 1.05 1.077-4.276-.277-.44A11.538 11.538 0 1 1 16.003 27.538zm6.32-8.647c-.347-.174-2.055-1.014-2.374-1.13-.32-.115-.552-.174-.784.174-.232.347-.9 1.13-1.103 1.362-.203.232-.406.26-.753.087-.347-.174-1.463-.54-2.787-1.72-1.03-.918-1.726-2.052-1.928-2.398-.203-.347-.022-.535.152-.707.156-.156.347-.406.52-.608.174-.203.232-.347.347-.578.116-.232.058-.434-.029-.608-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.587-.784-.598l-.667-.012c-.232 0-.608.087-.927.434-.32.347-1.218 1.19-1.218 2.903s1.247 3.368 1.42 3.6c.174.232 2.455 3.748 5.95 5.254.832.359 1.48.573 1.986.733.835.266 1.595.228 2.196.138.67-.1 2.055-.84 2.345-1.652.29-.812.29-1.508.203-1.652-.086-.145-.318-.232-.665-.406z"/>
  </svg>
)
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
              <WhatsAppIcon />
              Hubungi Kami Sekarang
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