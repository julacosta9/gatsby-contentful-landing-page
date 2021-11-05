module.exports = {
  purge: ["./src/pages/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
