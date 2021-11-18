module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'muchSmall': {'raw': '(max-width: 400px)'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
