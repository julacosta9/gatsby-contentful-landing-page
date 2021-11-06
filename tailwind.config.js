module.exports = {
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm: "14.4px",
        "4xl": ["2.25rem", "3.25rem"],
        "6xl": ["56px", "68px"],
      },
      colors: {
        bracketsBlue: {
          DEFAULT: "#2885F6",
          dark: "#1A66C4",
        },
        bracketsGray: {
          DEFAULT: "#767D84",
          dark: "#464B4F",
        },
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
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
