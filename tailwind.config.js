/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F45B18',
          'orange-hover': '#DF4810',
          'orange-subtle': '#FFF2EB',
          yellow: '#FFB91F',
          'yellow-subtle': '#FFF9EB',
          cyan: '#08C5C9',
          'cyan-subtle': '#E6FAFB',
          blue: '#1769F5',
          'blue-hover': '#0E56D1',
          'blue-subtle': '#EEF4FE',
          navy: '#101D45',
          'navy-light': '#1A2A5E',
          'navy-muted': '#324068',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F7F8FA',
          subtle: '#F1F4F9',
        },
        ink: {
          primary: '#101D45',
          secondary: '#57647E',
          muted: '#8F9BB3',
        },
        line: {
          DEFAULT: '#E8EAF0',
          strong: '#D7DBE5',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 10px rgba(16, 29, 69, 0.04), 0 1px 3px rgba(16, 29, 69, 0.02)',
        'card-hover': '0 12px 30px -10px rgba(16, 29, 69, 0.12), 0 4px 10px -2px rgba(16, 29, 69, 0.04)',
        'float': '0 20px 40px -15px rgba(16, 29, 69, 0.16)',
        'dropdown': '0 10px 25px -5px rgba(16, 29, 69, 0.1), 0 8px 10px -6px rgba(16, 29, 69, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
