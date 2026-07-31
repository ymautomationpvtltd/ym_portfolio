/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#36a9f7',
          500: '#015CCF', // User Primary Color
          600: '#014ea4',
          700: '#013e84',
          800: '#04356c',
          900: '#0a2d59',
          950: '#071c3b',
        },
        pageBg: '#ebf7ff', // User Requested Background Color
        cardBg: '#ffffff',
        cyanAccent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        techEmerald: {
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient-light': 'radial-gradient(ellipse at top, rgba(1, 92, 207, 0.15), rgba(235, 247, 255, 1) 75%)',
        'hero-gradient-dark': 'radial-gradient(ellipse at top, rgba(6, 182, 212, 0.18), rgba(9, 13, 22, 1) 75%)',
        'grid-pattern-light': 'linear-gradient(to right, rgba(1, 92, 207, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(1, 92, 207, 0.08) 1px, transparent 1px)',
        'grid-pattern-dark': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
