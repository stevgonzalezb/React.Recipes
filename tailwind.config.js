/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'bangers': ['Bangers', 'sans-serif'],
      'inter': ['Inter var'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'green-cookify': "#528265"
      }
    }
  },
  plugins: [],
}
