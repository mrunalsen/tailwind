/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
