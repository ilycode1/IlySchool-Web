import clsx from 'clsx'

// ================================================================
// DIVIDER COMPONENT
//
// Props:
// orientation → 'horizontal' | 'vertical'
// variant     → 'solid' | 'dashed' | 'dotted' | 'gradient'
// spacing     → 'sm' | 'md' | 'lg' — margin atas bawah
// label       → string opsional, teks di tengah garis
// className   → class tambahan
// ================================================================

const Divider = ({
  orientation = 'horizontal',
  variant = 'solid',
  spacing = 'md',
  label,
  className,
}) => {
  // ── SPACING (margin) ─────────────────────────────────────────
  const spacingClasses = {
    sm: orientation === 'horizontal' ? 'my-4' : 'mx-4',
    md: orientation === 'horizontal' ? 'my-6' : 'mx-6',
    lg: orientation === 'horizontal' ? 'my-10' : 'mx-10',
  }

  // ── WARNA & STYLE GARIS ──────────────────────────────────────
  const lineClasses = {
    solid: 'border-gray-200',
    dashed: 'border-gray-200 border-dashed',
    dotted: 'border-gray-200 border-dotted',
    // Gradient tidak pakai border, pakai background gradient
    gradient: '',
  }

  // ── VERTICAL DIVIDER ─────────────────────────────────────────
  if (orientation === 'vertical') {
    return (
      <div
        className={clsx(
          'self-stretch', // tinggi mengikuti parent
          spacingClasses[spacing],
          variant === 'gradient'
            ? 'w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent'
            : clsx('w-px border-l', lineClasses[variant]),
          className
        )}
      />
    )
  }

  // ── HORIZONTAL DENGAN LABEL ──────────────────────────────────
  // Kalau ada label → garis kiri + teks + garis kanan
  if (label) {
    return (
      <div
        className={clsx(
          'flex items-center gap-4',
          spacingClasses[spacing],
          className
        )}
      >
        {/* Garis kiri */}
        <div
          className={clsx(
            'flex-1',
            variant === 'gradient'
              ? 'h-px bg-gradient-to-r from-transparent to-gray-200'
              : clsx('border-t', lineClasses[variant])
          )}
        />
        {/* Label di tengah */}
        <span className="text-xs text-gray-400 font-heading whitespace-nowrap">
          {label}
        </span>
        {/* Garis kanan */}
        <div
          className={clsx(
            'flex-1',
            variant === 'gradient'
              ? 'h-px bg-gradient-to-l from-transparent to-gray-200'
              : clsx('border-t', lineClasses[variant])
          )}
        />
      </div>
    )
  }

  // ── HORIZONTAL TANPA LABEL (default) ─────────────────────────
  return (
    <div
      className={clsx(
        spacingClasses[spacing],
        variant === 'gradient'
          ? 'h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent'
          : clsx('border-t', lineClasses[variant]),
        className
      )}
    />
  )
}

export default Divider
