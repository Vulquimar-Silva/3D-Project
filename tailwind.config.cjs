/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#bebdc6",
        tertiary: "#202949b4",
        "black-100": "#111527",
        "black-200": "#22294d",
        "white-100": "#ececec",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #29796d",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": 'linear-gradient(180deg, #000000 0, #111520 30%, #21212e 50%, #0e1221 75%, #000000 100%)',
      },
    },
  },

  plugins: [],
};