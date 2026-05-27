'use client'

// src/components/shared/WhatsAppButton.jsx
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import clsx from 'clsx'
import { generateWALink } from '@/utils/formatWhatsApp'

// WhatsApp official SVG logo
const WhatsAppIcon = ({ size = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill="white"
  >
    <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.654 4.786 1.797 6.788L2 30l7.397-1.77A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.538a11.51 11.51 0 0 1-5.886-1.614l-.422-.252-4.39 1.05 1.077-4.276-.277-.44A11.538 11.538 0 1 1 16.003 27.538zm6.32-8.647c-.347-.174-2.055-1.014-2.374-1.13-.32-.115-.552-.174-.784.174-.232.347-.9 1.13-1.103 1.362-.203.232-.406.26-.753.087-.347-.174-1.463-.54-2.787-1.72-1.03-.918-1.726-2.052-1.928-2.398-.203-.347-.022-.535.152-.707.156-.156.347-.406.52-.608.174-.203.232-.347.347-.578.116-.232.058-.434-.029-.608-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.587-.784-.598l-.667-.012c-.232 0-.608.087-.927.434-.32.347-1.218 1.19-1.218 2.903s1.247 3.368 1.42 3.6c.174.232 2.455 3.748 5.95 5.254.832.359 1.48.573 1.986.733.835.266 1.595.228 2.196.138.67-.1 2.055-.84 2.345-1.652.29-.812.29-1.508.203-1.652-.086-.145-.318-.232-.665-.406z" />
  </svg>
)

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // ── MUNCUL SETELAH SCROLL ────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── AUTO BUKA TOOLTIP setelah 3 detik ────────────────────────
  useEffect(() => {
    if (isVisible && !isDismissed) {
      const timer = setTimeout(() => {
        setIsTooltipOpen(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, isDismissed])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── TOOLTIP / CHAT BUBBLE ──────────────────────────── */}
      {isTooltipOpen && !isDismissed && (
        <div className="relative">
          <div
            className={clsx(
              'bg-white rounded-2xl shadow-xl',
              'p-4 pr-10',
              'max-w-[220px]',
              'border border-gray-100',
              'animate-fade-up'
            )}
          >
            <button
              onClick={() => {
                setIsTooltipOpen(false)
                setIsDismissed(true)
              }}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 text-gray-400"
              aria-label="Tutup"
            >
              <X size={12} />
            </button>
            <p className="text-xs font-heading font-semibold text-gray-800 mb-1">
              Ada yang bisa kami bantu? 👋
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Chat langsung dengan tim ilyschool via WhatsApp
            </p>
          </div>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      )}

      {/* ── TOMBOL UTAMA ─────────────────────────────────────── */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-pulse-ring" />
        <div
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-20"
          style={{ animation: 'pulseRing 2s ease-out 0.5s infinite' }}
        />
        <a
          href={generateWALink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsTooltipOpen(false)}
          aria-label="Chat via WhatsApp"
          className={clsx(
            'relative w-14 h-14 rounded-full',
            'bg-[#25D366] hover:bg-[#1ebe5d]',
            'flex items-center justify-center',
            'shadow-lg hover:shadow-xl',
            'transition-all duration-300',
            'hover:scale-110 active:scale-95',
          )}
        >
          <WhatsAppIcon size={26} />
        </a>
      </div>
    </div>
  )
}

export default WhatsAppButton