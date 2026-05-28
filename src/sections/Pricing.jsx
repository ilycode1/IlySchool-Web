'use client'

// src/sections/Pricing.jsx
import { Check, X, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import useInView from '@/hooks/useInView'
import { PRICING_PLANS, formatRupiah } from '@/data/pricing'
import { generateWALinkByPlan } from '@/utils/formatWhatsApp'
import { GFORM_URL } from '@/config/constants'

// ── FEATURE ROW ────────────────────────────────────────────────
const FeatureRow = ({ feature }) => (
  <div className="flex items-start gap-3">
    {feature.included ? (
      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check size={11} className="text-primary" strokeWidth={3} />
      </div>
    ) : (
      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
        <X size={11} className="text-red-400" strokeWidth={3} />
      </div>
    )}
    <span
      className={clsx(
        'text-sm leading-relaxed',
        feature.included ? 'text-gray-600' : 'text-red-400 line-through'
      )}
    >
      {feature.text}
    </span>
  </div>
)

// ── PRICING CARD ───────────────────────────────────────────────
const PricingCard = ({ plan, index, isInView }) => {
  const discountPercent = Math.round(
    ((plan.originalPrice - plan.price) / plan.originalPrice) * 100
  )

  return (
    <div
      className={clsx(
        'relative flex flex-col rounded-2xl',
        'transition-all duration-700',
        plan.popular ? 'lg:-mt-4 lg:-mb-4' : '', // ← sudah benar, pastikan ada lg:
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: isInView ? `${index * 150}ms` : '0ms' }}
    >
      {/* Popular badge di atas card */}
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
          <Badge variant="solid-accent" size="lg">
            ⭐ Paling Banyak Dipilih
          </Badge>
        </div>
      )}

      <div
        className={clsx(
          'flex flex-col h-full rounded-2xl overflow-hidden',
          'border transition-all duration-300',
          plan.popular
            ? 'border-primary shadow-xl shadow-primary/10'
            : 'border-gray-200 shadow-sm hover:shadow-md'
        )}
      >
        {/* ── CARD HEADER ──────────────────────────────────── */}
        <div
          className={clsx(
            'px-6 pt-8 pb-6',
            plan.popular ? 'bg-primary' : 'bg-white'
          )}
        >
          {/* Label */}
          <p
            className={clsx(
              'text-xs font-heading font-semibold uppercase tracking-wider mb-3',
              plan.popular ? 'text-white/70' : 'text-gray-400'
            )}
          >
            {plan.label}
          </p>

          {/* Nama paket */}
          <h3
            className={clsx(
              'font-heading font-bold text-2xl mb-4',
              plan.popular ? 'text-white' : 'text-gray-900'
            )}
          >
            Paket {plan.name}
          </h3>

          {/* Harga */}
          <div className="flex items-end gap-2 mb-2">
            <span
              className={clsx(
                'font-heading font-bold text-4xl',
                plan.popular ? 'text-white' : 'text-primary'
              )}
            >
              {formatRupiah(plan.price)}
            </span>
            <span
              className={clsx(
                'text-sm mb-1',
                plan.popular ? 'text-white/60' : 'text-gray-400'
              )}
            >
              / tahun
            </span>
          </div>

          {/* Harga coret + diskon */}
          <div className="flex items-center gap-2">
            <span
              className={clsx(
                'text-sm line-through',
                plan.popular ? 'text-white/40' : 'text-gray-300'
              )}
            >
              {formatRupiah(plan.originalPrice)}
            </span>
            <Badge
              variant="warning"
              size="sm"
              className={
                plan.popular ? '!bg-white/15 !text-white !border-white/30' : ''
              }
            >
              Hemat {discountPercent}%
            </Badge>
          </div>
        </div>

        {/* ── TAGLINE ──────────────────────────────────────── */}
        <div
          className={clsx(
            'px-6 py-4 border-b',
            plan.popular
              ? 'bg-primary/5 border-primary/10'
              : 'bg-surface border-gray-100'
          )}
        >
          <p className="text-sm text-gray-600 italic">
            &ldquo;{plan.tagline}&rdquo;
          </p>
        </div>

        {/* ── FEATURES LIST ────────────────────────────────── */}
        <div className="px-6 py-6 flex flex-col gap-3 flex-1 bg-white">
          {plan.features.map((feature) => (
            <FeatureRow key={feature.text} feature={feature} />
          ))}

          {/* Layanan tambahan untuk Unggul */}
          {plan.additionalServices && (
            <div className="mt-2 pt-4 border-t border-gray-100">
              <p className="text-xs font-heading font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                Pilih 1 dari layanan berikut:
              </p>
              <div className="flex flex-wrap gap-1">
                {plan.additionalServices.map((service) => (
                  <Badge key={service} variant="primary" size="sm">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── CTA BUTTON ───────────────────────────────────── */}
        <div className="px-6 pb-8 bg-white">
          <Button
            variant={plan.popular ? 'primary' : 'outline'}
            fullWidth
            size="lg"
            href={generateWALinkByPlan(plan.name)}
            external
          >
            {plan.ctaLabel}
            <ArrowRight size={16} />
          </Button>

          {/* Extra charge info
          <p className="text-center text-xs text-gray-400 mt-3">
            Perubahan tambahan:{' '}
            {plan.id === 'hadir'
              ? 'Rp 50.000'
              : plan.id === 'aktif'
                ? 'Rp 70.000'
                : 'Rp 90.000'}
            /request
          </p> */}
        </div>
      </div>
    </div>
  )
}

const Pricing = () => {
  const [headingRef, headingInView] = useInView({ threshold: 0.3 })
  const [cardsRef, cardsInView] = useInView({ threshold: 0.05 })
  const [noteRef, noteInView] = useInView({ threshold: 0.5 })

  return (
    <SectionWrapper id="pricing" background="white">
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
        <SectionLabel className="mb-4">
          Transparan, Tidak Ada Biaya Tersembunyi
        </SectionLabel>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Pilih Paket yang Sesuai{' '}
          <span className="text-primary">Kebutuhan Sekolah Anda</span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          Semua paket sudah termasuk SSL gratis dan dukungan teknis. Tidak ada
          kontrak jangka panjang — perpanjang setiap tahun.
        </p>
      </div>

      {/* ── PRICING CARDS ────────────────────────────────────── */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 items-start"
      >
        {PRICING_PLANS.map((plan, index) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            index={index}
            isInView={cardsInView}
          />
        ))}
      </div>

      {/* ── BOTTOM NOTE ─────────────────────────────────────── */}
      <div
        ref={noteRef}
        className={clsx(
          'max-w-xl mx-auto',
          'transition-all duration-700',
          noteInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        <div className="bg-surface rounded-2xl p-6 text-center border border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            💬{' '}
            <span className="font-semibold">Belum yakin pilih paket mana?</span>
            <br />
            Ceritakan kebutuhan sekolah Anda dan kami bantu rekomendasikan yang
            paling sesuai — gratis, tanpa tekanan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="primary"
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '6285178226071'}?text=${encodeURIComponent('Halo ilyschool, saya belum yakin pilih paket mana. Bisa bantu rekomendasikan?')}`}
              external
            >
              Tanya via WhatsApp
            </Button>
            <Button variant="outline" href={GFORM_URL} external>
              Isi Formulir Dulu
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Pricing
