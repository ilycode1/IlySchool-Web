'use client'

// src/components/shared/Footer.jsx
import { Globe } from 'lucide-react'
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

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="14" height="14" fill="currentColor">
    <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.654 4.786 1.797 6.788L2 30l7.397-1.77A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.538a11.51 11.51 0 0 1-5.886-1.614l-.422-.252-4.39 1.05 1.077-4.276-.277-.44A11.538 11.538 0 1 1 16.003 27.538zm6.32-8.647c-.347-.174-2.055-1.014-2.374-1.13-.32-.115-.552-.174-.784.174-.232.347-.9 1.13-1.103 1.362-.203.232-.406.26-.753.087-.347-.174-1.463-.54-2.787-1.72-1.03-.918-1.726-2.052-1.928-2.398-.203-.347-.022-.535.152-.707.156-.156.347-.406.52-.608.174-.203.232-.347.347-.578.116-.232.058-.434-.029-.608-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.587-.784-.598l-.667-.012c-.232 0-.608.087-.927.434-.32.347-1.218 1.19-1.218 2.903s1.247 3.368 1.42 3.6c.174.232 2.455 3.748 5.95 5.254.832.359 1.48.573 1.986.733.835.266 1.595.228 2.196.138.67-.1 2.055-.84 2.345-1.652.29-.812.29-1.508.203-1.652-.086-.145-.318-.232-.665-.406z"/>
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { label: 'Tentang Kami', href: '#about', external: false },
    { label: 'Blog & Tips', href: '/blog', external: true },
    { label: 'Kebijakan Privasi', href: '/kebijakan-privasi', external: true },
    { label: 'Syarat & Ketentuan', href: '/syarat-ketentuan', external: true },
  ]

  const socialLinks = [
    { label: 'Instagram', href: SOCIAL_MEDIA.instagram, Icon: InstagramIcon },
    { label: 'TikTok',    href: SOCIAL_MEDIA.tiktok,    Icon: TikTokIcon    },
    { label: 'YouTube',   href: SOCIAL_MEDIA.youtube,   Icon: YouTubeIcon   },
    { label: 'Website',   href: SOCIAL_MEDIA.website,   Icon: Globe         },
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
                const Icon = social.Icon
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
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
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
                  <WhatsAppIcon />
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
              © {currentYear} {BRAND_NAME}.com — Part Of {PARENT_BRAND}
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