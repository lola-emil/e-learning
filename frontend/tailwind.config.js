/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,html}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["winter"]
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-motion")
  ],
}

