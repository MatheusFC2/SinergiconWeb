/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-button': '#00CCDA',
        'b1': '#02363D',
        'b2': '#031319',
        'b3': '#2B383D',
        'span': '#96A4A9',
        'color-button': '#2B383D',
        'line': ' #0C3441',
        'sd': '#051D25',
        'Depoimentos-modal': '#0A252E'
      },
      screens: {
        'xl' : '1292px',
        'sa' : '1432px' 
      }, 
    },
  },
  plugins: [],
}
