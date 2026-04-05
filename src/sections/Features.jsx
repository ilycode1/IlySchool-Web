// src/sections/Features.jsx
import { useState } from 'react'
import { Check, Monitor } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import clsx from 'clsx'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import useInView from '@/hooks/useInView'
import { FEATURE_GROUPS } from '@/data/features'

// ── FEATURE ITEM ───────────────────────────────────────────────
const FeatureItem = ({ text, delay = 0, isInView }) => (
  <div
    className={clsx(
      'flex items-start gap-3',
      'transition-all duration-500',
      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
    )}
    style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
  >
    {/* Check icon */}
    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check size={11} className="text-primary" strokeWidth={3} />
    </div>
    <span className="text-sm text-gray-600 leading-relaxed">{text}</span>
  </div>
)

// ── TAB BUTTON ─────────────────────────────────────────────────
const TabButton = ({ group, isActive, onClick }) => {
  const Icon = LucideIcons[group.icon] || LucideIcons['HelpCircle']

  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center gap-2.5',
        'px-5 py-3 rounded-xl',
        'text-sm font-heading font-medium',
        'transition-all duration-200',
        'w-full text-left',
        isActive
          ? 'bg-primary text-white shadow-sm'
          : 'text-gray-600 hover:bg-surface hover:text-primary'
      )}
    >
      <Icon size={16} />
      {group.title}
    </button>
  )
}

const Features = () => {
  const [activeTab, setActiveTab] = useState(FEATURE_GROUPS[0].id)
  const [headingRef, headingInView] = useInView({ threshold: 0.3 })
  const [contentRef, contentInView] = useInView({ threshold: 0.1 })

  // Ambil group yang aktif
  const activeGroup = FEATURE_GROUPS.find((g) => g.id === activeTab)

  return (
    <SectionWrapper id="features" background="white">
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
        <SectionLabel className="mb-4">Yang Anda Dapatkan</SectionLabel>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Semua yang Dibutuhkan Sekolah{' '}
          <span className="text-primary">dalam Satu Website</span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          Tidak perlu bayar mahal untuk tampil profesional. Semua fitur penting
          sudah tersedia — langsung aktif tanpa konfigurasi rumit.
        </p>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────── */}
      <div
        ref={contentRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        {/* ── KOLOM KIRI: Tab + Checklist ─────────────────── */}
        <div
          className={clsx(
            'transition-all duration-700',
            contentInView
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-8'
          )}
        >
          {/* Tab buttons */}
          <div className="flex flex-col gap-1 mb-8 p-2 bg-surface rounded-2xl">
            {FEATURE_GROUPS.map((group) => (
              <TabButton
                key={group.id}
                group={group}
                isActive={activeTab === group.id}
                onClick={() => setActiveTab(group.id)}
              />
            ))}
          </div>

          {/* Feature list */}
          {activeGroup && (
            <div className="flex flex-col gap-4">
              {/* Group title */}
              <div className="flex items-center gap-3 mb-2">
                {(() => {
                  const Icon =
                    LucideIcons[activeGroup.icon] || LucideIcons['HelpCircle']
                  return (
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                  )
                })()}
                <div>
                  <h3 className="font-heading font-semibold text-gray-900">
                    {activeGroup.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {activeGroup.items.length} fitur tersedia
                  </p>
                </div>
              </div>

              {/* Checklist items */}
              <div className="flex flex-col gap-3">
                {activeGroup.items.map((item, index) => (
                  <FeatureItem
                    key={item}
                    text={item}
                    delay={index * 60}
                    isInView={contentInView}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── KOLOM KANAN: Visual mockup ───────────────────── */}
        <div
          className={clsx(
            'transition-all duration-700 delay-200',
            contentInView
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-8'
          )}
        >
          <Card variant="elevated" padding="none" className="overflow-hidden">
            {/* Card header */}
            <div className="bg-surface border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Monitor size={16} className="text-primary" />
                <span className="text-sm font-heading font-semibold text-gray-700">
                  Preview Website Sekolah
                </span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
            </div>

            {/* Mockup content */}
            <div className="relative">
              <img
                src="https://placehold.co/600x500/f0f4fa/1a3c6e?text=Website+Sekolah+Preview"
                alt="Preview website sekolah"
                className="w-full"
              />

              {/* Floating feature callouts */}
              <div className="absolute top-4 right-4">
                <div className="bg-white rounded-xl shadow-lg px-3 py-2 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-heading font-semibold text-gray-700">
                      SSL Aktif
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4">
                <div className="bg-white rounded-xl shadow-lg px-3 py-2 border border-gray-100">
                  <p className="text-xs font-heading font-semibold text-gray-700">
                    📱 Responsif di semua perangkat
                  </p>
                </div>
              </div>
            </div>

            {/* Feature highlight di bawah mockup */}
            <div className="p-6 grid grid-cols-3 gap-4 bg-white border-t border-gray-100">
              {[
                { value: '15+', label: 'Section' },
                { value: '10', label: 'Template' },
                { value: '100%', label: 'Responsif' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-xl text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Note di bawah card */}
          <p className="text-xs text-gray-400 text-center mt-4">
            * Fitur CMS dan layanan tambahan tersedia di Paket Aktif & Unggul
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Features
