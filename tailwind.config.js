module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  purge: [
    './pages/*.html',
    './layouts/*.html',
    './elements/*.html',
    './snippets/*.html',
    './css/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
