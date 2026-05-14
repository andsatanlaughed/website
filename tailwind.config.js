/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#ED1C24',
          'red-deep': '#B5151B',
          gold: '#D4B829',
          'gold-light': '#E8D86A',
          black: '#000000',
          cream: '#faf7f2',
        },
      },
    },
  },
  plugins: [],
};
