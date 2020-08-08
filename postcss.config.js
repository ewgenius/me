const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelist: [
      "html",
      "body",
      "max-w-none",
      "ul",
      "li",
      "ol",
      "pre",
      "h1",
      "h2",
      "h3",
      "h4",
      "blockquote",
      "figure",
      "hr",
    ],
    whitelistPatterns: [/prose*/],
    whitelistPatternsChildren: [/prose*/],
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
