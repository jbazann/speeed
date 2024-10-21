/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,html}",
    "./src/**/*.{js,html}",
    "./public/**/*.html",
    "./public/*.html",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'jblack': '#01060C'
      },
      dropShadow: {
        'strong': '0 2rem 1.5rem rgba(0, 0, 0, 1)',
        'medium': '0 1rem 0.75rem rgba(0, 0, 0, 0.5)',
        'glow': '0 0.1rem 0.3rem rgba(241,245,249,0.7)'
      }
    },
  },
  plugins: [],
}

