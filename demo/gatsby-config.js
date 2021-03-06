module.exports = {
  siteMetadata: {
    info: "MrQuery is graphql test component",
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/PageLayout.tsx`),
      },
    },
  ],
};
