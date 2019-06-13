
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV }`,
})

module.exports = {
  
  siteMetadata: {
    title: "Greater U",
  },
  plugins: [
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-stripe",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Sku", 'Product'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
        auth: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
