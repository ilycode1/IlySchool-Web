// src/components/ui/AnimatedSection.jsx
// Wrapper komponen untuk animasi saat masuk viewport
// Menggantikan pattern useInView + clsx manual yang berulang
//
// Sebelum pakai AnimatedSection (verbose):
// const [ref, isInView] = useInView()
// <div ref={ref} className={clsx('transition...', isInView ? 'opacity-100' : 'opacity-0')}>
//
// Sesudah (bersih):
// <AnimatedSection>konten</AnimatedSection>

import { motion } from 'framer-motion'

// ── PRESET VARIANTS ────────────────────────────────────────────
// Kumpulan animasi yang bisa dipilih via prop
const VARIANTS = {
  // Muncul dari bawah (paling sering dipakai)
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  // Muncul dari kiri
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  // Muncul dari kanan
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  // Muncul dari atas
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  // Hanya fade (tidak ada gerakan)
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  // Scale dari kecil
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
}

// ── STAGGER CONTAINER ──────────────────────────────────────────
// Untuk animasi anak-anak yang berurutan
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = '',
  ...props
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
    {...props}
  >
    {children}
  </motion.div>
)

// ── STAGGER ITEM ───────────────────────────────────────────────
// Item di dalam StaggerContainer
export const StaggerItem = ({
  children,
  variant = 'fadeUp',
  className = '',
  ...props
}) => (
  <motion.div
    className={className}
    variants={VARIANTS[variant]}
    transition={{
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
    {...props}
  >
    {children}
  </motion.div>
)

// ── ANIMATED SECTION ───────────────────────────────────────────
// Komponen utama
const AnimatedSection = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.15,
  ...props
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={VARIANTS[variant]}
    transition={{
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export default AnimatedSection
