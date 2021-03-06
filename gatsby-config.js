module.exports = {
  siteMetadata: {
    siteUrl: "https://awesome-haibt-b798d9.netlify.app/",
    title: "Gatsby Contentful Landing Page",
    author: "Julian Acosta",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
  ],
};
