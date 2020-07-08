/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const { resolve } = require('url')

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: 'markdown' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const results = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  )

  const projects = results.data.allMarkdownRemark.edges

  projects.forEach(({ node }, index) => {
    const {
      id,
      fields: { slug },
      frontmatter: { title },
    } = node

    createPage({
      path: `/projects${slug}`,
      component: path.resolve('src/templates/post.tsx'),
      context: {
        id,
        slug,
        title,
        prev: index === 0 ? null : projects[index - 1].node,
        next: index === projects.length - 1 ? null : projects[index + 1].node,
      },
    })
  })
}

// const path = require('path');

// exports.createPages = async ({ graphql, actions: { createPage } }) => {
//   const results = await graphql(
//     `
//       {
//         allShopifyProduct {
//           edges {
//             node {
//               id
//               handle
//               productType
//             }
//           }
//         }
//       }
//     `
//   );

//   results.data.allShopifyProduct.edges.forEach(({ node }) => {
//     const { id, handle, productType } = node;
//     createPage({
//       path: `/products/${handle}`,
//       component: path.resolve('src/templates/single-product-template.tsx'),
//       context: {
//         id,
//         handle,
//       },
//     });
//     createPage({
//       path: `products/category/${productType}`,
//       component: path.resolve('src/templates/category-template.tsx'),
//       context: {
//         id,
//         productType,
//         handle,
//       },
//     });
//   });
// };
