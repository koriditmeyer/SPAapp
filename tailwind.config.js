/** @type {import('tailwindcss').Config} */
const config = {
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
        amazon: {
          background: "#EAEDED",
          // blue: "#485769",
          ligh_blue: "#232F3A",
          yellow: "#FEBD69",
          yellow_dark: "#c7511f",

          blue:"#131921",
          light: "#232F3A",
          // yellow: "#FEBD69",
          whiteText:"#ffffff",
          lightText:"#ccc",
          // quantity_box:"#F0F2F2",
          // footerBottom:"#131A22",
          DEFAULT: "#131921",
        },
      },
      boxShadow: {
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgba(228, 121, 17, 0.5)",
      },
      // Updated font family
      fontFamily: {
        Inconsolata: ["Inconsolata", "monospace"],
        titleFont:"Inconsolata",
        bodyFont: "monospace"
      },
      maxWidth: {
        constainer: "1440px",
      },
      // Updated media queries
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};


export default config;