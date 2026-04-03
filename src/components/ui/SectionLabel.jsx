import clsx from 'clsx'

// ================================================================
// SECTION LABEL COMPONENT
// Teks kecil dekoratif di atas section heading
//
// Props:
// variant  → 'default' | 'light' (untuk background gelap)
// align    → 'left' | 'center' | 'right'
// className→ class tambahan
// children → teks label
// ================================================================

const SectionLabel = ({
  variant = 'default',
  align = 'center',
  className,
  children,
}) => {
  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  const variantClasses = {
    // Default — untuk section background putih/terang
    default: clsx(
      'text-secondary', // warna teal
      'bg-secondary/10', // background teal sangat muda
      'border border-secondary/20' // border teal tipis
    ),
    // Light — untuk section background gelap (hero, CTA, dll)
    light: clsx('text-white/90', 'bg-white/15', 'border border-white/25'),
    // Accent — menggunakan warna amber
    accent: clsx('text-amber-700', 'bg-accent/15', 'border border-accent/25'),
    // Primary
    primary: clsx('text-primary', 'bg-primary/10', 'border border-primary/20'),
  }

  return (
    // Wrapper div untuk kontrol alignment
    <div className={clsx('flex', alignClasses[align], className)}>
      <span
        className={clsx(
          // Base styling
          'inline-flex items-center gap-2',
          'px-4 py-1.5',
          'rounded-full',
          'text-xs font-heading font-semibold',
          'tracking-wider uppercase', // huruf kapital + spasi antar huruf
          // Variant styling
          variantClasses[variant]
        )}
      >
        {/* Garis dekoratif kiri */}
        <span className="w-4 h-px bg-current opacity-60" />
        {children}
        {/* Garis dekoratif kanan */}
        <span className="w-4 h-px bg-current opacity-60" />
      </span>
    </div>
  )
}

export default SectionLabel
