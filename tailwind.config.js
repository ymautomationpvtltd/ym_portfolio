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
          500: '#015CCF', // Light Mode Primary
          600: '#014ea4',
          700: '#013e84',
          800: '#04356c',
          900: '#0a2d59',
        },
        // Official YM Automation Logo Gold Brand Colors (from ymautomation.com)
        ymGold: {
          300: '#ffdb6e',
          400: '#ffd043',
          500: '#ffb700', // Official Logo Gold (#fb0)
          600: '#e5a500',
          700: '#cc9300',
        },
        ymDark: {
          bg: '#14161d',
          card: '#1e212b',
          border: '#2e3342',
          footer: '#111318',
        },
        pageBg: '#ebf7ff',
        cardBg: '#ffffff',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient-light': 'radial-gradient(ellipse at top, rgba(1, 92, 207, 0.15), rgba(235, 247, 255, 1) 75%)',
        'hero-gradient-dark': 'radial-gradient(ellipse at top, rgba(255, 183, 0, 0.15), rgba(20, 22, 29, 1) 75%)',
        'grid-pattern-light': 'linear-gradient(to right, rgba(1, 92, 207, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(1, 92, 207, 0.08) 1px, transparent 1px)',
        'grid-pattern-dark': 'linear-gradient(to right, rgba(255, 183, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 183, 0, 0.05) 1px, transparent 1px)',
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
