/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}", "./public/**/*.{html,css,js}"],
  theme: {
    extend: {
      "colors": {
        "cream": {
          "50": "#FFFFFF",
          "100": "#FEFEFB",
          "200": "#FEFEFB",
          "300": "#FDFCF7",
          "400": "#FDFCF7",
          "500": "#FCFBF4",
          "600": "#E7DEA7",
          "700": "#D1C157",
          "800": "#9C8D2B",
          "900": "#4C4515"
        }
      }
    },
  },
  plugins: [],
}
