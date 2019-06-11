require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
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
        secretKey: "sk_test_ivRZqvBlI7nizpZ1VHGUcELs00Xp3CmZrX",
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
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`]},
    },
  ],
}
