// src/hooks/useCountUp.js
import { useEffect, useRef, useState } from 'react'

// ================================================================
// useCountUp
// Animasi angka naik dari 0 ke nilai target
//
// Parameter:
// target    → angka tujuan (contoh: 50)
// duration  → durasi animasi dalam milidetik (default: 2000 = 2 detik)
// decimals  → jumlah angka di belakang koma (default: 0)
// isActive  → boolean, mulai animasi saat true
//             biasanya dihubungkan dengan useInView
//
// Return:
// count → nilai angka saat ini (string, sudah diformat)
//
// Cara pakai:
// const [ref, isInView] = useInView({ once: true })
// const count = useCountUp({ target: 50, isActive: isInView })
// <div ref={ref}>{count}+</div>
// ================================================================

const useCountUp = ({
  target,
  duration = 2000,
  decimals = 0,
  isActive = false,
}) => {
  // count → nilai yang ditampilkan saat ini
  const [count, setCount] = useState(0)

  // Ref untuk menyimpan requestAnimationFrame ID
  // Dipakai untuk cancel animasi saat cleanup
  const rafRef = useRef(null)

  // Ref untuk menyimpan waktu mulai animasi
  const startTimeRef = useRef(null)

  useEffect(() => {
    // Jangan mulai kalau belum aktif
    if (!isActive) return

    // Reset ke 0 setiap kali animasi dimulai ulang
    setCount(0)
    startTimeRef.current = null

    // ── EASING FUNCTION ────────────────────────────────────────
    // easeOutCubic → mulai cepat, melambat di akhir
    // t → progress 0 sampai 1
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    // ── ANIMASI FRAME ──────────────────────────────────────────
    const animate = (timestamp) => {
      // Set waktu mulai di frame pertama
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      // Hitung sudah berapa lama animasi berjalan
      const elapsed = timestamp - startTimeRef.current

      // Progress → 0 sampai 1
      // Math.min memastikan progress tidak melebihi 1
      const progress = Math.min(elapsed / duration, 1)

      // Terapkan easing ke progress
      const easedProgress = easeOutCubic(progress)

      // Hitung nilai saat ini
      const currentValue = easedProgress * target

      // Update state dengan nilai yang sudah diformat
      setCount(
        decimals > 0
          ? parseFloat(currentValue.toFixed(decimals))
          : Math.floor(currentValue)
      )

      // Kalau belum selesai → lanjut ke frame berikutnya
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        // Pastikan nilai akhir tepat = target
        setCount(target)
      }
    }

    // Mulai animasi
    rafRef.current = requestAnimationFrame(animate)

    // Cleanup → cancel animasi yang sedang berjalan
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isActive, target, duration, decimals])

  return count
}

export default useCountUp
