const defaultTheme = require('tailwindcss/defaultTheme');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `gatsby-source-gooten plugin`,
    description: `a first try at an example page of using the gatsby-source-gooten plugin`,
    author: `@ahut10`
  },
  plugins: [
    {
      resolve: `gatsby-source-gooten`,
      options: {
        recipeId: process.env.GOOTEN_RECIPEID,
        countryCode: process.env.GOOTEN_COUNTRYCODE,
        currencyCode: process.env.GOOTEN_CURRENCY
      }
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-source-gooten`,
        short_name: `starter`,
        start_url: `/`,
        background_color: defaultTheme.colors.white,
        theme_color: defaultTheme.colors.teal[600],
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    }
  ]
};
