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
          50: '#fdf2f3',
          100: '#fce4e6',
          200: '#f9cbd0',
          300: '#f3a4ad',
          400: '#e87280',
          500: '#d74456',
          600: '#be293c',
          700: '#9f1e2f',
          800: '#881020', // Color dominante del logo Kotai
          900: '#72121e',
          950: '#40060e',
        },
        holding: {
          blue: '#1e3a8a',
          gold: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 10px 30px -5px rgba(136, 16, 32, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'hero': '0 20px 50px -10px rgba(136, 16, 32, 0.25)',
      }
    },
  },
  plugins: [],
}
