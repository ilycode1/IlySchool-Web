// src/components/shared/WhatsAppButton.jsx
import { useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import clsx from 'clsx'
import { generateWALink } from '@/utils/formatWhatsApp'

const WhatsAppButton = () => {
  // State lokal — tidak perlu disimpan di Zustand
  // karena hanya dipakai komponen ini saja
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // ── MUNCUL SETELAH SCROLL ────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      // Muncul setelah scroll 300px
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

  // Kalau tombol di-dismiss, sembunyikan saja
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
            {/* Tombol tutup tooltip */}
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

          {/* Ekor chat bubble */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      )}

      {/* ── TOMBOL UTAMA ─────────────────────────────────────── */}
      <a
        href={generateWALink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsTooltipOpen(false)}
        aria-label="Chat via WhatsApp"
        className={clsx(
          'w-14 h-14 rounded-full',
          'bg-green-500 hover:bg-green-600',
          'flex items-center justify-center',
          'shadow-lg hover:shadow-xl',
          'transition-all duration-300',
          'hover:scale-110 active:scale-95',
          // Pulse animation untuk menarik perhatian
          'ring-4 ring-green-500/30'
        )}
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>
    </div>
  )
}

export default WhatsAppButton
