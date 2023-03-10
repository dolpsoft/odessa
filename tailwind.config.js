/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, #00000080, #00000080), url('../media/images/v.jpg')",
        'hero-pattern-2': "linear-gradient(to bottom, #00000080, #00000080), url('../media/images/anime-pic.jpg')",
     },
    },
    fontFamily: {
      sans : ["Poppins", 'sans-serif']
    }
  },
  plugins: [],
}
// url(./src/anime-pic.jpg