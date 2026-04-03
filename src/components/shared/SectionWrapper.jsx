import clsx from 'clsx'

// ================================================================
// SECTION WRAPPER COMPONENT
//
// Props:
// id         → string, id untuk scroll target (wajib)
// background → 'white' | 'surface' | 'primary' | 'dark'
// spacing    → 'sm' | 'md' | 'lg'
// className  → class tambahan
// children   → konten section
// ================================================================

const SectionWrapper = ({
  id,
  background = 'white',
  spacing = 'md',
  className,
  children,
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    surface: 'bg-surface',
    primary: 'bg-primary',
    dark: 'bg-gray-900',
  }

  const spacingClasses = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
  }

  return (
    <section
      id={id}
      className={clsx(
        backgroundClasses[background],
        spacingClasses[spacing],
        'w-full overflow-hidden', // overflow-hidden cegah animasi keluar layar
        className
      )}
    >
      {/* Container — max width dan padding horizontal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export default SectionWrapper
