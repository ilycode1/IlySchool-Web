'use client'

// src/sections/HowItWorks.jsx
import * as LucideIcons from 'lucide-react'
import clsx from 'clsx'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import useInView from '@/hooks/useInView'
import { HOW_IT_WORKS, TOTAL_DURATION } from '@/data/howItWorks'

// ── CONNECTOR LINE ─────────────────────────────────────────────
// Garis penghubung antar step
// Ditampilkan di antara setiap step (bukan di step terakhir)
const ConnectorLine = ({ isInView, delay }) => (
  // Di mobile: garis vertikal. Di desktop: garis horizontal
  <div className="flex items-center justify-center md:flex-1">
    {/* Mobile: garis vertikal */}
    <div
      className={clsx(
        'md:hidden',
        'w-px bg-gradient-to-b from-primary/30 to-primary/10',
        'transition-all duration-700',
        isInView ? 'h-12 opacity-100' : 'h-0 opacity-0'
      )}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    />

    {/* Desktop: garis horizontal dengan dot di tengah */}
    <div
      className={clsx(
        'hidden md:flex items-center flex-1',
        'transition-all duration-700',
        isInView ? 'opacity-100' : 'opacity-0'
      )}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-primary/10" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mx-1" />
      <div className="flex-1 h-px bg-gradient-to-l from-primary/30 to-primary/10" />
    </div>
  </div>
)

// ── STEP CARD ──────────────────────────────────────────────────
const StepCard = ({ step, index, isInView, isLast }) => {
  // Resolve icon string → komponen lucide
  const Icon = LucideIcons[step.icon] || LucideIcons['HelpCircle']

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 flex-1">
      {/* ── STEP CONTENT ─────────────────────────────────── */}
      <div
        className={clsx(
          'flex flex-col items-center text-center md:items-start md:text-left',
          'flex-1 px-0 md:px-4',
          'transition-all duration-700',
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
        style={{ transitionDelay: isInView ? `${index * 200}ms` : '0ms' }}
      >
        {/* Step number + icon */}
        <div className="relative mb-4">
          {/* Lingkaran step number */}
          <div
            className={clsx(
              'w-16 h-16 rounded-2xl',
              'bg-primary text-white',
              'flex items-center justify-center',
              'shadow-lg shadow-primary/20',
              'transition-all duration-500',
              'group-hover:scale-110'
            )}
            style={{
              // Bounce animation saat masuk viewport
              transform: isInView ? 'scale(1)' : 'scale(0)',
              transitionDelay: isInView ? `${index * 200 + 100}ms` : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <Icon size={26} className="text-white" />
          </div>

          {/* Badge step number — pojok kanan atas ikon */}
          <div
            className={clsx(
              'absolute -top-2 -right-2',
              'w-6 h-6 rounded-full',
              'bg-accent text-primary',
              'flex items-center justify-center',
              'font-heading font-bold text-xs',
              'shadow-md',
              'transition-all duration-500'
            )}
            style={{
              transform: isInView ? 'scale(1)' : 'scale(0)',
              transitionDelay: isInView ? `${index * 200 + 200}ms` : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {step.step}
          </div>
        </div>

        {/* Duration badge */}
        <div
          className={clsx(
            'inline-flex items-center gap-1.5',
            'px-3 py-1 rounded-full mb-3',
            'bg-secondary/10 text-secondary',
            'text-xs font-heading font-semibold'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          {step.duration} · {step.durationLabel}
        </div>

        {/* Title */}
        <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          {step.description}
        </p>
      </div>

      {/* ── CONNECTOR (hanya di antara step, bukan di terakhir) */}
      {!isLast && (
        <ConnectorLine isInView={isInView} delay={index * 200 + 300} />
      )}
    </div>
  )
}

const HowItWorks = () => {
  const [headingRef, headingInView] = useInView({ threshold: 0.3 })
  const [stepsRef, stepsInView] = useInView({ threshold: 0.1 })
  const [noteRef, noteInView] = useInView({ threshold: 0.5 })

  return (
    <SectionWrapper id="how-it-works" background="surface">
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
        <SectionLabel className="mb-4">Prosesnya Sederhana</SectionLabel>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Website Sekolah Anda Jadi dalam{' '}
          <span className="text-primary">{TOTAL_DURATION}</span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          Tidak perlu install apapun. Tidak perlu datang ke kantor. Semua proses
          bisa dilakukan dari mana saja via WhatsApp.
        </p>
      </div>

      {/* ── STEPS ───────────────────────────────────────────── */}
      <div
        ref={stepsRef}
        className={clsx(
          'flex flex-col md:flex-row',
          'items-start md:items-start',
          'gap-6 md:gap-0',
          'mb-16'
        )}
      >
        {HOW_IT_WORKS.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            index={index}
            isInView={stepsInView}
            isLast={index === HOW_IT_WORKS.length - 1}
          />
        ))}
      </div>

      {/* ── BOTTOM NOTE ─────────────────────────────────────── */}
      <div
        ref={noteRef}
        className={clsx(
          'grid grid-cols-1 sm:grid-cols-3 gap-4',
          'transition-all duration-700',
          noteInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        {[
          {
            emoji: '📱',
            title: 'Via WhatsApp',
            desc: 'Semua komunikasi dan pengiriman file cukup lewat WhatsApp',
          },
          {
            emoji: '📝',
            title: 'Google Form',
            desc: 'Data sekolah dikumpulkan via form terstruktur yang kami kirimkan',
          },
          {
            emoji: '🚀',
            title: 'Langsung Online',
            desc: 'Tidak perlu setup server — website langsung aktif setelah selesai',
          },
        ].map((item) => (
          <div
            key={item.title}
            className={clsx(
              'flex items-start gap-4',
              'bg-white rounded-2xl p-5',
              'border border-gray-100 shadow-sm'
            )}
          >
            <span className="text-2xl flex-shrink-0">{item.emoji}</span>
            <div>
              <p className="font-heading font-semibold text-gray-800 text-sm mb-1">
                {item.title}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default HowItWorks