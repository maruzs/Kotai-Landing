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
        kotai: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f7ced4',
          300: '#f0a7b3',
          400: '#e47487',
          500: '#d3455e',
          600: '#bd2b45',
          700: '#a11c33',
          800: '#8b0b1d', // Color exacto del logo Kotai
          900: '#730c1a',
          950: '#42030c',
        },
        brand: {
          charcoal: '#18181b',
          concrete: '#27272a',
          steel: '#52525b',
          stone: '#f4f4f5',
          sand: '#fafaf9',
        },
        holding: {
          blue: '#1e3a8a',
          gold: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 8px 30px -4px rgba(139, 11, 29, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'hero': '0 20px 50px -10px rgba(139, 11, 29, 0.28)',
        'crimson': '0 10px 25px -5px rgba(139, 11, 29, 0.35)',
      }
    },
  },
  plugins: [],
}
