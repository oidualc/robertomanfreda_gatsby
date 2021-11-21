module.exports = {
  siteMetadata: {
    siteUrl: "https://robertomanfreda.github.io",
    title: "robertomanfreda",
  },
  plugins: [
    "gatsby-plugin-postcss",
    { resolve: "gatsby-plugin-anchor-links", options: { offset: -100 } },
  ],
};
