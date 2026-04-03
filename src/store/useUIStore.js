// src/store/useUIStore.js
import { create } from 'zustand'

// ================================================================
// useUIStore
// Menyimpan semua state yang berkaitan dengan UI behavior
// — bukan data konten, tapi perilaku antarmuka
// ================================================================
const useUIStore = create((set) => ({
  // ── NAVBAR ──────────────────────────────────────────────────
  // Apakah mobile menu sedang terbuka?
  isMenuOpen: false,

  // Toggle → kalau buka jadi tutup, kalau tutup jadi buka
  // prev → nilai state sebelumnya
  toggleMenu: () => set((prev) => ({ isMenuOpen: !prev.isMenuOpen })),

  // Set langsung ke nilai tertentu
  // Dipakai saat klik menu item → paksa tutup menu
  setMenuOpen: (value) => set({ isMenuOpen: value }),

  // ── NAVBAR SCROLL ────────────────────────────────────────────
  // Apakah user sudah scroll ke bawah?
  // Dipakai untuk ubah style navbar (tambah shadow, ubah bg)
  isScrolled: false,
  setScrolled: (value) => set({ isScrolled: value }),

  // ── ACTIVE SECTION ───────────────────────────────────────────
  // Section mana yang sedang aktif saat ini?
  // Dipakai untuk highlight menu navbar yang sedang aktif
  // Contoh nilai: 'hero', 'features', 'pricing', dll
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),

  // ── MODAL ────────────────────────────────────────────────────
  // Untuk modal preview template (nanti dipakai di TemplateShowcase)
  isModalOpen: false,
  modalContent: null, // menyimpan data template yang di-preview

  openModal: (content) => set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false, modalContent: null }),

  // ── TOAST / NOTIFIKASI ───────────────────────────────────────
  // Notifikasi kecil yang muncul sebentar lalu hilang
  // Contoh: "Link WhatsApp berhasil dibuka!"
  toast: null, // null = tidak ada toast yang tampil

  showToast: (message, type = 'success') => set({ toast: { message, type } }),

  // Dipanggil setelah durasi toast habis
  hideToast: () => set({ toast: null }),
}))

export default useUIStore
