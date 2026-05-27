/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/sections/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3c6e',
          light: '#2e6db4',
        },
        secondary: {
          DEFAULT: '#1a9aa3',
        },
        accent: {
          DEFAULT: '#f5a623',
        },
        surface: {
          DEFAULT: '#f0f4fa',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      screens: {
        xs: '475px',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        float: 'float 3s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'slide-in-left': 'slideInLeft 0.6s ease forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
