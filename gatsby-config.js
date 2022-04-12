module.exports = {
  siteMetadata: {
    title: `My first blog Site`,
    description: `This is my first project created using Gatsby. In progress....`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `stories`,
        path: `${__dirname}/stories`
      }
    }
  ],
}
