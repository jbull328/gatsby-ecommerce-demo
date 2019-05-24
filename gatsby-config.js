require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  
  siteMetadata: {
    title: "Gatsby E-Commerce Starter",
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
  ],
}
