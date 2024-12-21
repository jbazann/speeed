/** @type {import('tailwindcss').Config}; */
import {getPalette} from "./palettes.js";

const palette = getPalette();

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
        'background': palette.background,
        'foreground': palette.foreground,
        'border': palette.highlight,
        'highlight': palette.highlight,
        'text': palette.content,
        'detail': palette.detail,
        'accent': palette.accent
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

