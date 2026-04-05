// src/components/shared/Navbar.jsx
import { useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import useUIStore from '@/store/useUIStore'
import { NAV_LINKS, NAV_CTA } from '@/data/navigation'
import { handleNavClick } from '@/utils/scrollTo'
import Button from '@/components/ui/Button'

const Navbar = () => {
  // ── AMBIL STATE & ACTION DARI STORE ──────────────────────────
  const {
    isMenuOpen,
    toggleMenu,
    setMenuOpen,
    isScrolled,
    setScrolled,
    activeSection,
  } = useUIStore()

  // ── SCROLL LISTENER ──────────────────────────────────────────
  // Deteksi apakah user sudah scroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      // Kalau sudah scroll lebih dari 50px → set isScrolled true
      setScrolled(window.scrollY > 50)
    }

    // Pasang listener saat komponen mount
    window.addEventListener('scroll', handleScroll)

    // Cleanup — lepas listener saat komponen unmount
    // Penting! Kalau tidak dibersihkan → memory leak
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setScrolled])

  // ── TUTUP MENU SAAT RESIZE KE DESKTOP ────────────────────────
  useEffect(() => {
    const handleResize = () => {
      // Kalau layar sudah cukup lebar (desktop) → tutup mobile menu
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setMenuOpen])

  // ── HANDLE KLIK MENU ITEM ─────────────────────────────────────
  const handleMenuClick = (e, href) => {
    // Tutup mobile menu dulu
    setMenuOpen(false)
    // Lalu scroll ke section
    handleNavClick(e, href)
  }

  return (
    <>
      {/* ── NAVBAR UTAMA ─────────────────────────────────────── */}
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300',
          // Saat scroll → tambah background + shadow
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ── LOGO ─────────────────────────────────────────── */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 flex-shrink-0"
            >
              {/* Logo text — nanti ganti dengan <img> kalau logo sudah jadi */}
              <span
                className={clsx(
                  'font-heading font-light text-xl tracking-wider',
                  'transition-colors duration-300',
                  isScrolled ? 'text-primary' : 'text-white'
                )}
              >
                ily<span className="font-semibold text-accent">school</span>
              </span>
            </a>

            {/* ── DESKTOP MENU ─────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                // Cek apakah link ini adalah section yang aktif
                const isActive = activeSection === link.href.replace('#', '')

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={clsx(
                      'px-4 py-2 rounded-lg',
                      'text-sm font-heading font-medium',
                      'transition-all duration-200',
                      'relative group',
                      // Warna berubah tergantung scroll state dan active state
                      isActive
                        ? isScrolled
                          ? 'text-primary'
                          : 'text-white'
                        : isScrolled
                          ? 'text-gray-600 hover:text-primary hover:bg-surface'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {link.label}
                    {/* Underline animasi saat active */}
                    {isActive && (
                      <span
                        className={clsx(
                          'absolute bottom-1 left-4 right-4 h-0.5 rounded-full',
                          isScrolled ? 'bg-primary' : 'bg-white'
                        )}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* ── DESKTOP CTA ──────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-3">
              {/* Tombol sekunder — Lihat Demo */}
              <a
                href={NAV_CTA.secondary.href}
                onClick={(e) => handleNavClick(e, NAV_CTA.secondary.href)}
                className={clsx(
                  'px-4 py-2 rounded-lg',
                  'text-sm font-heading font-medium',
                  'transition-all duration-200',
                  isScrolled
                    ? 'text-gray-600 hover:text-primary hover:bg-surface'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {NAV_CTA.secondary.label}
              </a>

              {/* Tombol primer — Mulai Sekarang */}
              <Button
                variant={isScrolled ? 'primary' : 'white'}
                size="sm"
                href={NAV_CTA.primary.href}
                onClick={(e) => handleNavClick(e, NAV_CTA.primary.href)}
              >
                {NAV_CTA.primary.label}
              </Button>
            </div>

            {/* ── HAMBURGER BUTTON (mobile) ─────────────────────── */}
            <button
              onClick={toggleMenu}
              className={clsx(
                'md:hidden',
                'p-2 rounded-lg',
                'transition-all duration-200',
                isScrolled
                  ? 'text-gray-600 hover:bg-surface'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {/* Animasi icon hamburger → X */}
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ──────────────────────────────────────── */}
      {isMenuOpen && (
        <div
          className={clsx(
            'fixed top-0 left-0 right-0 z-40',
            'bg-white shadow-xl',
            'md:hidden',
            'transition-all duration-300 ease-in-out',
            'max-h-screen overflow-y-auto',
            'translate-y-0 opacity-100',
          )}
        >
          {/* Padding atas untuk tidak overlap dengan navbar */}
          <div className="pt-20 pb-6 px-4">
            {/* Menu links */}
            <div className="flex flex-col gap-1 mb-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMenuClick(e, link.href)}
                  className={clsx(
                    'px-4 py-3 rounded-lg',
                    'text-sm font-heading font-medium text-gray-700',
                    'hover:bg-surface hover:text-primary',
                    'transition-all duration-200',
                    activeSection === link.href.replace('#', '') &&
                      'bg-surface text-primary'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA buttons di mobile menu */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <Button
                variant="outline"
                fullWidth
                href={NAV_CTA.secondary.href}
                onClick={(e) => handleMenuClick(e, NAV_CTA.secondary.href)}
              >
                {NAV_CTA.secondary.label}
              </Button>
              <Button
                variant="primary"
                fullWidth
                href={NAV_CTA.primary.href}
                onClick={(e) => handleMenuClick(e, NAV_CTA.primary.href)}
              >
                {NAV_CTA.primary.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
