/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: 'Arya Murthi',
    author: 'Arya Murthi'
  },
  plugins: [

    `gatsby-plugin-sass`,
    

    {resolve: `gatsby-plugin-s3`,
    options: {
        bucketName: `aryamurthi.info`,}
    },

    {resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`
    }
   }, 
   `gatsby-plugin-sharp`,
   
   {
     resolve: `gatsby-transformer-remark`,
     options:{
       plugins: [
         `gatsby-remark-relative-images`,
         {
           resolve: `gatsby-remark-images`,
           options: {
             maxwidth: 750,
             linkImagesToOriginal: false
           }
         }
       ]
     }
   }
  ]
}
