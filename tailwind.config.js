/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('images/bg-desktop.svg')",
      }
    },
    screens: {
      'iphone': '375px',
      // => @media (min-width: 375px) { ... }
    },
  },
  plugins: [],
}

