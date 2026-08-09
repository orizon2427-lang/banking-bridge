/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2540',
          dark: '#071A2F',
          light: '#1A3A5C',
        },
        brand: {
          yellow: '#FCD116',
          blue: '#1E5AA8',
          green: '#7CB342',
        },
        accent: {
          DEFAULT: '#7CB342',
          green: '#7CB342',
          'green-light': '#8BC34A',
          light: '#8BC34A',
          dark: '#689F38',
          gold: '#FCD116',
          'gold-light': '#FFE066',
          blue: '#1E5AA8',
          teal: '#1B998B',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          bg: '#FAFAFA',
          text: '#404040',
          'text-light': '#737373',
          light: '#F5F5F5',
          border: '#E8E8E8',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0A2540 0%, #1A3A5C 100%)',
        'gradient-accent': 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)',
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h1': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        'prose-wide': '75ch',
      },
    },
  },
  plugins: [],
};
