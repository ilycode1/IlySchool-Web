// src/components/shared/Footer.jsx
import { Camera, Play, MessageCircle } from 'lucide-react'
import clsx from 'clsx'
import { NAV_LINKS } from '@/data/navigation'
import {
  BRAND_NAME,
  PARENT_BRAND,
  EMAIL,
  SOCIAL_MEDIA,
} from '@/config/constants'
import { handleNavClick, scrollToTop } from '@/utils/scrollTo'
import { generateWALink } from '@/utils/formatWhatsApp'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Blog & Tips', href: '#blog' },
    { label: 'Karir', href: '#karir' },
    { label: 'Kebijakan Privasi', href: '#privasi' },
    { label: 'Syarat & Ketentuan', href: '#syarat' },
  ]

  const socialLinks = [
    {
      label: 'Instagram',
      href: SOCIAL_MEDIA.instagram,
      icon: Camera,
    },
    {
      label: 'YouTube',
      href: SOCIAL_MEDIA.youtube,
      icon: Play,
    },
    {
      label: 'WhatsApp',
      href: generateWALink(),
      icon: MessageCircle,
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* ── MAIN FOOTER ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── KOLOM 1: Brand ─────────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="font-heading font-light text-2xl tracking-wider mb-4 block"
            >
              ily<span className="font-semibold text-accent">school</span>
            </button>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Platform website profesional khusus institusi pendidikan
              Indonesia. Mulai dari Rp 100.000 per tahun.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={clsx(
                      'w-9 h-9 rounded-lg',
                      'flex items-center justify-center',
                      'bg-white/10 text-gray-400',
                      'hover:bg-primary hover:text-white',
                      'transition-all duration-200'
                    )}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* ── KOLOM 2: Produk ────────────────────────────── */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-gray-300 mb-5">
              Produk
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── KOLOM 3: Perusahaan ─────────────────────────── */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-gray-300 mb-5">
              Perusahaan
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── KOLOM 4: Kontak ─────────────────────────────── */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-gray-300 mb-5">
              Kontak
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={generateWALink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <MessageCircle size={14} />
                  WhatsApp Kami
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="text-sm text-gray-400">
                Depok, Jawa Barat, Indonesia
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ──────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              © {currentYear} {BRAND_NAME}.com — Produk dari {PARENT_BRAND}
            </p>
            <p className="text-xs text-gray-500">
              Semua hak dilindungi undang-undang.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
