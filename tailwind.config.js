/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      // Updated with my colors
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        amazon:{
          background: "#EAEDED",
          blue:"#485769",
          ligh_blue: "#232F3A",
          yellow: "#FEBD69",
          yellow_dark:"#c7511f",
          DEFAULT: "#131921"
        }
      },
      // Updated font family
      fontFamily: {
        Inconsolata: ["Inconsolata", "monospace"],
      },
    },
    // Updated media queries
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};