/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,html}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["corporate"]
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-motion")
  ],
}

