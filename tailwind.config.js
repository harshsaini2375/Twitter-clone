/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        'xs': { raw: 'screen and (max-width: 432px)' }, // => @media (max-width: 375px) { ... }
      },
  },
  plugins: [],
}
}
