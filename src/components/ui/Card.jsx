'use client'

import clsx from 'clsx'

// ================================================================
// CARD COMPONENT
//
// Props:
// variant   → 'default' | 'flat' | 'elevated' | 'bordered' | 'ghost'
// padding   → 'none' | 'sm' | 'md' | 'lg'
// hover     → boolean, aktifkan efek hover (lift + shadow)
// clickable → boolean, tampilkan cursor pointer
// as        → string, HTML tag yang dipakai (default: 'div')
// className → class tambahan
// children  → konten di dalam card
// ...props  → props HTML lainnya (onClick, id, dll)
// ================================================================

const Card = ({
  variant = 'default',
  padding = 'md',
  hover = false,
  clickable = false,
  as,
  className,
  children,
  ...props
}) => {
  const Component = as || 'div'
  // ── BASE CLASSES ─────────────────────────────────────────────
  const baseClasses = clsx(
    'rounded-xl', // rounded-xl = 12px, konsisten dengan brand
    'transition-all duration-300 ease-in-out',
    // Hover effect — card terangkat saat di-hover
    hover && 'hover:-translate-y-1.5 hover:shadow-lg',
    // Cursor pointer kalau card bisa diklik
    clickable && 'cursor-pointer'
  )

  // ── VARIANT CLASSES ──────────────────────────────────────────
  const variantClasses = {
    // Default — background putih + border tipis + shadow ringan
    default: clsx('bg-white', 'border border-gray-100', 'shadow-sm'),
    // Flat — background putih tanpa shadow
    flat: clsx('bg-white', 'border border-gray-100'),
    // Elevated — shadow lebih tebal, kesan "mengambang"
    elevated: clsx('bg-white', 'shadow-md', hover && 'hover:shadow-xl'),
    // Bordered — border lebih tegas, tanpa shadow
    bordered: clsx('bg-white', 'border-2 border-gray-200'),
    // Ghost — background surface (abu sangat muda), tanpa border
    ghost: clsx('bg-surface'),
    // Primary — background primary muda
    primary: clsx('bg-primary/5', 'border border-primary/10'),
    // Highlight — untuk card yang perlu menonjol (popular plan, dll)
    highlight: clsx(
      'bg-white',
      'border-2 border-primary',
      'shadow-lg',
      hover && 'hover:shadow-xl'
    ),
  }

  // ── PADDING CLASSES ──────────────────────────────────────────
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <Component
      className={clsx(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card