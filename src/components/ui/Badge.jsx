// src/components/ui/Badge.jsx
import clsx from 'clsx'

// ================================================================
// BADGE COMPONENT
//
// Props:
// variant  → 'primary' | 'secondary' | 'accent' | 'success'
//            'warning' | 'danger' | 'outline' | 'ghost'
// size     → 'sm' | 'md'
// dot      → boolean, tampilkan dot bulat di kiri teks
// className→ class tambahan dari luar
// children → teks atau konten badge
// ================================================================

const Badge = ({
  variant = 'primary',
  size = 'md',
  dot = false,
  className,
  children,
}) => {
  // ── BASE CLASSES ─────────────────────────────────────────────
  const baseClasses = clsx(
    'inline-flex items-center gap-1.5',
    'font-heading font-medium',
    'rounded-full', // fully rounded → pill shape
    'whitespace-nowrap' // teks tidak wrap ke baris baru
  )

  // ── VARIANT CLASSES ──────────────────────────────────────────
  const variantClasses = {
    // Background primary muda, teks primary gelap
    primary: 'bg-surface text-primary border border-primary/20',

    // Background secondary muda, teks secondary gelap
    secondary: 'bg-secondary/10 text-secondary border border-secondary/20',

    // Background accent muda, teks accent gelap
    accent: 'bg-accent/15 text-amber-700 border border-accent/30',

    // Hijau — untuk status aktif, berhasil
    success: 'bg-green-50 text-green-700 border border-green-200',

    // Kuning — untuk peringatan, promo
    warning: 'bg-yellow-50 text-yellow-700 border border-yellow-200',

    // Merah — untuk error, urgent
    danger: 'bg-red-50 text-red-700 border border-red-200',

    // Hanya border, background transparan
    outline: 'border border-primary text-primary bg-transparent',

    // Abu-abu muda — untuk label netral
    ghost: 'bg-gray-100 text-gray-600 border border-gray-200',

    // Solid primary — untuk badge yang ingin lebih menonjol
    solid: 'bg-primary text-white',

    // Solid accent
    'solid-accent': 'bg-accent text-primary font-semibold',
  }

  // ── SIZE CLASSES ─────────────────────────────────────────────
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  }

  // ── DOT COLOR per variant ────────────────────────────────────
  // Warna dot menyesuaikan variant badge
  const dotColorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    outline: 'bg-primary',
    ghost: 'bg-gray-400',
    solid: 'bg-white',
    'solid-accent': 'bg-primary',
  }

  return (
    <span
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {/* Dot indicator — hanya tampil kalau prop dot={true} */}
      {dot && (
        <span
          className={clsx(
            'w-1.5 h-1.5 rounded-full flex-shrink-0',
            dotColorClasses[variant]
          )}
        />
      )}
      {children}
    </span>
  )
}

export default Badge
