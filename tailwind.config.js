/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nature-inspired editorial palette
        forest: {
          DEFAULT: '#173D32',
          hover: '#0F2921',
          light: '#235043',
          surface: '#EBF0EB',
          subtle: '#F2F5F2',
        },
        sage: {
          DEFAULT: '#A8B8A0',
          dark: '#7D8F74',
          light: '#E2E9DC',
          subtle: '#EEF3EA',
        },
        ivory: {
          DEFAULT: '#F7F5EF',
          light: '#FCFBF8',
          dark: '#EFECE2',
        },
        sand: {
          DEFAULT: '#E8DFD0',
          light: '#F4EFE6',
          dark: '#D5C9B4',
        },
        charcoal: {
          DEFAULT: '#252923',
          light: '#4A5046',
          muted: '#7A8276',
          faint: '#B0B6AC',
        },
        terracotta: {
          DEFAULT: '#C77B5A',
          hover: '#B56846',
          light: '#DE997B',
          subtle: '#F9EFEB',
        },

        // Legacy tokens mapped seamlessly
        brand: {
          orange: '#C77B5A',
          'orange-hover': '#B56846',
          'orange-subtle': '#F9EFEB',
          yellow: '#D4A359',
          cyan: '#589487',
          blue: '#173D32',
          navy: '#173D32',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F2F0E8',
          subtle: '#FAF9F4',
        },
        ink: {
          primary: '#252923',
          secondary: '#555C50',
          muted: '#858E7F',
        },
        line: {
          DEFAULT: '#E8DFD0',
          strong: '#D5C9B4',
          subtle: 'rgba(23, 61, 50, 0.08)',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(37, 41, 35, 0.04), 0 1px 2px rgba(37, 41, 35, 0.02)',
        'editorial': '0 10px 30px -10px rgba(23, 61, 50, 0.08), 0 4px 10px -2px rgba(23, 61, 50, 0.03)',
        'lift': '0 20px 40px -15px rgba(23, 61, 50, 0.12)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
