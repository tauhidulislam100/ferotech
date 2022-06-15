/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#541690',
        'secondary': '#FF8D29',
        'primary-black': '#1D243C',
        'gray-400': '#3F4959',
      },
      fontFamily: {
        commissioner: ['Commissioner', 'sans-serif']
      },
      screens: {
        'mdMax': {
          max: '1023px',
        },
        'smMax': {
          max: '767px',
        },
      },
      backgroundPosition: {
        'y-bottom'  : 'bottom',
      }
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}
