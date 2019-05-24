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
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Sku", 'Product'],
        secretKey: "sk_test_#",
        downloadFiles: true,
        auth: false,
      },
    },
  ],
}
