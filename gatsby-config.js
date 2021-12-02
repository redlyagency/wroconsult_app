module.exports = {
  siteMetadata: {
    siteUrl: "https://www.wroconsult.pl",
    title: "Wroconsult",
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-528B47J1XX',
          // Setting this parameter is optional
          anonymize: true
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "6415ce12fe772a3e45d8b15d6fc0e2",
        preview: false,
        disableLiveReload: false,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `extra`,
        path: `./src/extra`,
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files-enhanced',
      options: {
        source: `./src/extra`,
        destination: '/',
        purge: false,
      },
    },
    `gatsby-plugin-transition-link`,
  ],
};
