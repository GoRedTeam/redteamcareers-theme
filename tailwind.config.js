/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        'grt-black': '#000000',
        'grt-white': '#ffffff',
        'grt-red': {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ff9999',
          400: '#ff6666',
          500: '#ff0000', // Primary red
          600: '#e60000',
          700: '#cc0000',
          800: '#990000',
          900: '#660000',
          950: '#330000',
        },
        'grt-gray': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        'grt-dark-gray': {
          50: '#2d2d2d',
          100: '#282828',
          200: '#232323',
          300: '#1e1e1e',
          400: '#1a1a1a',
          500: '#171717', // Base dark gray (original value)
          600: '#141414',
          700: '#111111',
          800: '#0d0d0d',
          900: '#0a0a0a',
          950: '#080808',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ffffff',
            a: {
              color: '#ff0000',
              '&:hover': {
                color: '#cc0000',
              },
            },
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            h4: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            code: {
              color: '#ffffff',
            },
            blockquote: {
              color: '#d4d4d4',
              borderLeftColor: '#525252',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes when explicitly used
    }),
  ],
}

