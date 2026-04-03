// src/hooks/useInView.js
import { useEffect, useRef, useState } from 'react'

// ================================================================
// useInView
// Deteksi apakah element sedang terlihat di viewport
//
// Parameter:
// options.threshold → 0-1, seberapa banyak element harus terlihat
//                     sebelum dianggap "in view"
//                     0.1 = 10% element terlihat → trigger
//                     0.5 = 50% element terlihat → trigger
// options.once      → boolean, kalau true animasi hanya jalan sekali
//                     tidak reset saat element keluar viewport
// options.rootMargin→ margin tambahan sebelum trigger
//                     '-100px' = trigger 100px sebelum masuk viewport
//
// Return:
// [ref, isInView]
// ref      → attach ke element yang ingin diobserve
// isInView → boolean, true kalau element sedang terlihat
//
// Cara pakai:
// const [ref, isInView] = useInView({ threshold: 0.1, once: true })
// <div ref={ref} className={isInView ? 'animate' : 'hidden'}>
// ================================================================

const useInView = ({
  threshold = 0.15,
  once = true,
  rootMargin = '0px',
} = {}) => {
  // ref → referensi ke DOM element yang di-observe
  const ref = useRef(null)

  // isInView → apakah element sedang terlihat
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Simpan nilai ref.current ke variable lokal
    // Ini best practice untuk cleanup di useEffect
    // Karena ref.current bisa berubah sebelum cleanup berjalan
    const element = ref.current

    // Guard clause — kalau element tidak ada, hentikan
    if (!element) return

    // Buat Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // entries → array semua element yang diobserve
        // Kita hanya observe satu element, jadi ambil index [0]
        const entry = entries[0]

        if (entry.isIntersecting) {
          // Element masuk viewport → set true
          setIsInView(true)

          // Kalau once=true → berhenti observe setelah pertama kali
          // Animasi tidak akan reset saat element keluar viewport
          if (once) {
            observer.unobserve(element)
          }
        } else {
          // Element keluar viewport
          // Hanya reset kalau once=false
          if (!once) {
            setIsInView(false)
          }
        }
      },
      { threshold, rootMargin }
    )

    // Mulai observe element
    observer.observe(element)

    // Cleanup — berhenti observe saat komponen unmount
    return () => {
      observer.unobserve(element)
    }
  }, [threshold, once, rootMargin])

  return [ref, isInView]
}

export default useInView
