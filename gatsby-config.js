if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.prod`
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
  })
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.wroconsult.pl",
    title: "Wroconsult",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
    },
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-528B47J1XX",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://wroconsult.pl",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
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
        theme_color: `#ffffff`,
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
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'wroconsult.pl', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 404 404.html
        `,
        custom: `
          RewriteEngine On
          RewriteCond %{HTTPS} off [OR]
          RewriteCond %{HTTP_HOST} !^wroconsult\.pl$ [NC]
          RewriteRule ^(.*)$ https://wroconsult.pl/$1 [L,R=301]
          
          <IfModule mod_rewrite.c>
              RewriteEngine On
              RewriteBase /
              RewriteRule ^index\.html$ - [L]
              RewriteCond %{REQUEST_FILENAME} !-f
              RewriteCond %{REQUEST_FILENAME} !-d
              RewriteCond %{REQUEST_FILENAME} !-l
              RewriteRule . /index.html [L]
          </IfModule>
        `,
      },
    },
  ],
};