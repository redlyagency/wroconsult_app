module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Wroconsult",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "a34778262c7153ff933b846f87155b",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "changeItBeforeFinalDeploy",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/img/icon.png",
        name: `Wroconsult - studia wykonalności, restrukturyzacja, dofinansowanie, Wrocław, wroconsult.pl`,
        short_name: `Wroconsult - studia wykonalności, restrukturyzacja, dofinansowanie`,
        description: `Blisko 20-letnie doświadczenie doradców Wroconsult pozwala na skuteczną pomoc klientom z sektora publicznego i prywatnego.`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#BF1E2D`,
        display: `standalone`,
        lang: `pl`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/img/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
