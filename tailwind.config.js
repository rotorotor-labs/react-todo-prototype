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
        },
        "olive": {
          "50": "#FCFDFC",
          "100": "#F9FBF9",
          "200": "#F0F4F0",
          "300": "#EAF0EB",
          "400": "#E1EAE2",
          "500": "#DAE5DB",
          "600": "#A5C0A7",
          "700": "#729C76",
          "800": "#4A694C",
          "900": "#263627"
        },
        "leaf": {
          "50": "#FCFDF7",
          "100": "#F8FAEB",
          "200": "#F3F6DA",
          "300": "#ECF0C6",
          "400": "#E7ECB6",
          "500": "#E0E7A1",
          "600": "#CCD865",
          "700": "#ADBB30",
          "800": "#757E20",
          "900": "#383D10"
        },
        "dentist": {
          "50": "#F8FCFB",
          "100": "#F5FAF8",
          "200": "#E7F3EF",
          "300": "#DDEEE9",
          "400": "#D0E7E0",
          "500": "#C6E2D9",
          "600": "#8CC5B3",
          "700": "#56A98F",
          "800": "#39705E",
          "900": "#1D3931"
        }
      }
    },
  },
  plugins: [],
}
