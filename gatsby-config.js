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
        objects: ["Sku"],
        secretKey: process.env.STIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
  ],
}
