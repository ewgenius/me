module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            color: theme("colors.gray.800"),
            h1: {
              color: theme("colors.gray.800"),
            },
            h2: {
              color: theme("colors.gray.800"),
            },
            h3: {
              color: theme("colors.gray.800"),
            },
            h4: {
              color: theme("colors.gray.800"),
            },
            a: {
              color: theme("colors.gray.600"),
              "&:hover": {
                color: theme("colors.gray.800"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
