import type { GatsbyConfig } from "gatsby";


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["playstation-game"],
  // singleTypes: [],
};

const config: GatsbyConfig = {
  siteMetadata: {
    defaultTitle: `GAMESOURCE`,
    description: `GAMESOURCE`,
    titleTemplate :`%s | GAMESOURCE`,
    author: `GAMESOURCE`,
    siteUrl: `https://hotburger-restaurant.netlify.app`,
    defaultImage:"",
    twitterUsername:"hotburger-restaurant"
  },
  
  plugins: [
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://hotburger-restaurant.netlify.app',
        sitemap: 'https://hotburger-restaurant.netlify.app/sitemap.xml ',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
 
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          // camelCase: true,
          implementation: require("node-sass")
        },
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image",
     "gatsby-plugin-react-helmet", 
     "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },

   "gatsby-plugin-sharp",
   "gatsby-transformer-sharp", { 
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    // __key: "images"
  },
  
  {
    resolve: `gatsby-source-strapi`,
    options: strapiConfig
  }, 
]
};

export default config;
