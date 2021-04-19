const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
    },

    typography: (theme) => ({
      dark: {
        css: {
          color: theme("colors.gray.100"),
          a: {
            color: theme("colors.blue.100"),
            "&:hover": {
              color: theme("colors.blue.100"),
            },
          },
        },
      },
    }),
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
