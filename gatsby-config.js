module.exports = {
  siteMetadata: {
    title: 'mix of modern JS apps',
    description: 'My showcase for JS-Apps',
    keywords: 'gatsbyjs, gatsby, javascript, Typescript, devdev',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Marcell Ciszek',
      url: 'https://marcellable.com',
      email: 'ciszekmarcell@gmail.com',
      twitter: 'https://twitter/CiszekMarcell',
      instagram: 'https://instagram/masiuciszek',
      github: 'https://github/masiuciszek',
    },
    social: [
      {
        name: 'instagram',
        url: 'https://instagram/masiuciszek',
      },
      {
        name: 'twitter',
        url: 'https://twitter/CiszekMarcell',
      },
      {
        name: 'github',
        url: 'https://github/masiuciszek',
      },
      {
        name: 'marcellable',
        url: 'https://marcellable.com',
      },
      {
        name: 'masiuciszek',
        url: 'https://masiuciszek.com',
      },
    ],
    paths: [
      {
        name: 'home',
        path: '/',
      },
      {
        name: 'projects',
        path: '/projects',
      },
      {
        name: 'contact',
        path: '/contact',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-playground`,
  ],
}
