// src/utils/scrollTo.js

// ================================================================
// scrollToSection
// Smooth scroll ke section berdasarkan id
//
// Parameter:
// sectionId  → id element target, tanpa # (contoh: 'pricing')
// offset     → jarak tambahan dari atas dalam px (default: 80)
//              sesuaikan dengan tinggi navbar
//
// Contoh penggunaan:
// scrollToSection('pricing')
// scrollToSection('features', 100)
// ================================================================
export const scrollToSection = (sectionId, offset = 80) => {
  // Cari element berdasarkan id
  const element = document.getElementById(sectionId)

  // Guard clause — kalau element tidak ditemukan, hentikan
  if (!element) {
    console.warn(
      `scrollToSection: element dengan id "${sectionId}" tidak ditemukan`
    )
    return
  }

  // getBoundingClientRect → posisi element relatif ke viewport
  // window.scrollY → seberapa jauh halaman sudah di-scroll
  // Keduanya dijumlahkan untuk dapat posisi absolut dari atas halaman
  const elementPosition = element.getBoundingClientRect().top + window.scrollY
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

// ================================================================
// scrollToTop
// Scroll kembali ke paling atas halaman
// Dipakai di footer atau tombol "back to top"
// ================================================================
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// ================================================================
// handleNavClick
// Handler untuk klik link navbar
// Otomatis parse href '#pricing' → id 'pricing'
//
// Contoh penggunaan:
// <a onClick={(e) => handleNavClick(e, '#pricing')}>Harga</a>
// ================================================================
export const handleNavClick = (event, href) => {
  // Cegah default behavior anchor tag (pindah halaman / jump)
  event.preventDefault()

  // Hapus karakter '#' dari href untuk dapat id murni
  // '#pricing' → 'pricing'
  const sectionId = href.replace('#', '')

  scrollToSection(sectionId)
}
