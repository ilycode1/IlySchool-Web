// src/hooks/useScrollspy.js
import { useEffect } from 'react'
import useUIStore from '@/store/useUIStore'
import { NAV_LINKS } from '@/data/navigation'

// ================================================================
// useScrollspy
// Deteksi section aktif saat scroll dan update Zustand store
//
// Cara kerja:
// 1. Ambil semua section id dari NAV_LINKS
// 2. Observe semua section dengan Intersection Observer
// 3. Saat section masuk viewport → update activeSection di store
// 4. Navbar baca activeSection dari store → highlight menu
//
// Cara pakai:
// Cukup panggil sekali di App.jsx atau Home.jsx
// useScrollspy()
// Tidak perlu return value — efeknya ke Zustand store
// ================================================================

const useScrollspy = () => {
  const setActiveSection = useUIStore((state) => state.setActiveSection)

  useEffect(() => {
    // ── AMBIL SEMUA SECTION ID DARI NAV_LINKS ─────────────────
    // '#features' → 'features'
    const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''))

    // Tambahkan 'hero' karena hero tidak ada di NAV_LINKS
    const allIds = ['hero', ...sectionIds]

    // ── KUMPULKAN SEMUA SECTION ELEMENTS ──────────────────────
    const sections = allIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) // filter null kalau ada id yang tidak ditemukan

    // Guard clause — kalau tidak ada section, hentikan
    if (sections.length === 0) return

    // ── BUAT INTERSECTION OBSERVER ────────────────────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Kalau section masuk viewport dengan cukup terlihat
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // rootMargin negatif → section dianggap aktif saat
        // sudah masuk 30% dari atas layar
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    )

    // Observe semua section
    sections.forEach((section) => observer.observe(section))

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [setActiveSection])
}

export default useScrollspy
