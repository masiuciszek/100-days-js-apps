/* eslint-disable no-unused-expressions */
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: 'markdown' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPages } = actions

  // create page return a promise
  return new Promise(resolve => {
    graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  }).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPages({
        path: node.fields.slug,
        component: path.resolve('./src/templates/post.tsx'),
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}
