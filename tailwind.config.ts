import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        // Surface palette (dark-first, near-black canvas)
        ink: {
          DEFAULT: '#06060A',
          50: '#0A0A0F',
          100: '#0E0E15',
          200: '#13131C',
          300: '#1A1A26',
        },
        // Brand accents — violet → indigo → cyan
        brand: {
          50: '#EEF0FF',
          100: '#E0E3FF',
          200: '#C4C9FF',
          300: '#A5A9FF',
          400: '#8B86FF',
          500: '#7C5CFF', // primary violet
          600: '#6B46E5',
          700: '#5836C4',
          800: '#3F2890',
          900: '#2A1B61',
        },
        cyan: {
          400: '#34E0EE',
          500: '#22D3EE',
          600: '#0FB6D1',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,92,255,0.18), 0 8px 40px -8px rgba(124,92,255,0.45)',
        'glow-cyan': '0 0 0 1px rgba(34,211,238,0.18), 0 8px 40px -8px rgba(34,211,238,0.40)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(110deg, #7C5CFF 0%, #8B86FF 40%, #22D3EE 100%)',
        'radial-fade': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      keyframes: {
        'aurora-1': {
          '0%, 100%': { transform: 'translate(-10%, -10%) scale(1)' },
          '50%': { transform: 'translate(10%, 8%) scale(1.25)' },
        },
        'aurora-2': {
          '0%, 100%': { transform: 'translate(8%, 6%) scale(1.1)' },
          '50%': { transform: 'translate(-12%, -8%) scale(0.9)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        'aurora-1': 'aurora-1 18s ease-in-out infinite',
        'aurora-2': 'aurora-2 22s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2,0.6,0.3,1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
