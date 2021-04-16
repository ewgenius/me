const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
