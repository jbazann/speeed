/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,html}",
    "./src/**/*.{js,html}",
    "./public/**/*.html",
    "./public/*.html",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'not-pearl': '#030316', // not rock
        'less-black': '#23233c',
        'lesser-black': '#424258',
        'lesserer-black': '#626274',
        'aiaia': '#a1a1ab',
        'cococ': '#c0c0c7',
        'eoeoe': '#e0e0e3',
        'not-bell': '#9797c9',
        'shadest-cata': '#3b1e05',
        'shaderer-cata': '#2c1704',
        'shader-cata': '#1d0f03',
        'shade-cata': '#0f0801',
        'tintest-cata': '#a98666',
        'tinterer-cata': '#bb9e85',
        'tinter-cata': '#ccb6a3',
        'tint-cata': '#ddcfc2',
        'clear-cata': '#ebecec',
        'darkest-cata': '#01080f',
        'darkerer-cata': '#03111d',
        'darker-cata': '#04192c',
        'dark-cata': '#05223b',
        'not-cata': '#0a4376',
        'less-cata': '#295b87',
        'lesser-cata': '#477298',
        'lesserer-cata': '#668aa9',
        'mini-cata': '#85a1bb',
        'minini-cata': '#a3b9cc',
        'mininini-cata': '#c2d0dd',
        'purple-cata': '#580a76',
        'purpler-cata': '#3d0a76',
        'blue-cata': '#220a76',
        'bluer-cata': '#0a0d76',
        'bluerer-cata': '#0a2876',
        'teal-cata': '#0a4376',
        'lesserer-pie': '#3d0a76',
        'lesser-pie': '#350967',
        'less-pie': '#2e0859',
        'pie': '#26064a',
        'dark-pie': '#1e053b',
        'darker-pie': '#17042c',
        'darkerer-pie': '#0f031d',



      },
      dropShadow: {
        'bg': '0 0 0 rgba(3, 3, 22, 1)',
        'text': '0 0 0.15rem rgba(3, 3, 22, 1)',
        'strong': '0 2rem 1.5rem rgba(3, 3, 22, 1)',
        'medium': '0 1rem 0.75rem rgba(3, 3, 22, 0.5)',
        'glow': '0 0rem 0.35rem rgba(235,236,236,0.5)'
      }
    },
  },
  plugins: [],
}

