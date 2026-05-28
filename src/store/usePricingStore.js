// src/store/usePricingStore.js
import { create } from 'zustand'

// ================================================================
// usePricingStore
// Menyimpan state yang berkaitan dengan interaksi di Pricing section
// ================================================================
const usePricingStore = create((set) => ({
  // ── PAKET YANG DIHIGHLIGHT ───────────────────────────────────
  // id paket yang sedang di-hover atau dipilih user
  // null = tidak ada yang dihighlight
  // Contoh nilai: 'hadir', 'aktif', 'unggul'
  highlightedPlan: null,
  setHighlightedPlan: (planId) => set({ highlightedPlan: planId }),
  clearHighlightedPlan: () => set({ highlightedPlan: null }),

  // ── PAKET YANG DIPILIH ───────────────────────────────────────
  // id paket yang dipilih user (untuk konfirmasi sebelum WA)
  selectedPlan: null,
  setSelectedPlan: (planId) => set({ selectedPlan: planId }),

  // ── TOGGLE TAMPILAN HARGA ────────────────────────────────────
  // Apakah tampilkan harga promo atau harga normal?
  // true = tampilkan harga promo (default)
  showPromoPrice: true,
  togglePromoPrice: () =>
    set((prev) => ({ showPromoPrice: !prev.showPromoPrice })),

  // ── LAYANAN TAMBAHAN (untuk Paket Unggul) ───────────────────
  // Menyimpan 1 layanan tambahan yang dipilih user
  // Array karena bisa pilih lebih dari satu (max 3)
  selectedServices: [],

  addService: (service) =>
    set((prev) => {
      // Maksimal 3 layanan yang bisa dipilih
      if (prev.selectedServices.length >= 3) return prev

      // Cegah duplikat — kalau sudah ada jangan tambah lagi
      if (prev.selectedServices.includes(service)) return prev

      return { selectedServices: [...prev.selectedServices, service] }
    }),

  removeService: (service) =>
    set((prev) => ({
      selectedServices: prev.selectedServices.filter((s) => s !== service),
    })),

  clearServices: () => set({ selectedServices: [] }),
}))

export default usePricingStore
