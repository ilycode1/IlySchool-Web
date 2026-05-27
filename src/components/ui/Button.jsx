'use client'

// src/components/ui/Button.jsx
import { forwardRef } from 'react'
import clsx from 'clsx'

// ── SPINNER dipindah ke LUAR Button ─────────────────────────────
// Didefinisikan sekali di level module, bukan di dalam render
const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
)

const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      href,
      external = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = clsx(
      'inline-flex items-center justify-center gap-2',
      'font-heading font-medium',
      'rounded-lg',
      'transition-all duration-200 ease-in-out',
      'cursor-pointer select-none',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      (loading || disabled) && 'opacity-60 cursor-not-allowed',
      fullWidth && 'w-full'
    )

    const variantClasses = {
      primary: clsx(
        'bg-primary text-white',
        'hover:bg-primary-light',
        'active:scale-[0.97]',
        'focus:ring-primary',
        'shadow-sm hover:shadow-md'
      ),
      secondary: clsx(
        'bg-secondary text-white',
        'hover:opacity-90',
        'active:scale-[0.97]',
        'focus:ring-secondary',
        'shadow-sm hover:shadow-md'
      ),
      outline: clsx(
        'border-2 border-primary text-primary bg-transparent',
        'hover:bg-primary hover:text-white',
        'active:scale-[0.97]',
        'focus:ring-primary'
      ),
      ghost: clsx(
        'text-primary bg-transparent',
        'hover:bg-surface',
        'active:scale-[0.97]',
        'focus:ring-primary'
      ),
      accent: clsx(
        'bg-accent text-primary',
        'hover:opacity-90',
        'active:scale-[0.97]',
        'focus:ring-accent',
        'shadow-sm hover:shadow-md',
        'font-semibold'
      ),
      white: clsx(
        'bg-white text-primary',
        'hover:bg-surface',
        'active:scale-[0.97]',
        'focus:ring-white',
        'shadow-sm hover:shadow-md'
      ),
    }

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    }

    const allClasses = clsx(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    )

    const content = (
      <>
        {loading && <Spinner />}
        {children}
      </>
    )

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          className={allClasses}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={allClasses}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button