// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: '6rem'
      },
      colors: {
        linkPrimary: '#1F1534',
        navLinkPrimary: '#233348',
        owngray: '#7D7987',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}