const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/pages/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bracketsBlue: "#2885F6",
        bracketsGray: "#767D84",
        bracketsOrange: "#F65928",
      },
      screens: {
        content: "1169px",
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
