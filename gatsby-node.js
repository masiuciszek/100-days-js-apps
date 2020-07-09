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

/**
 *
 * @param {Function} createPage
 * @param {Array} projects
 */
const createTagPages = (createPage, projects) => {
  const allTags = path.resolve('src/templates/tags-list.tsx')
  const singleTag = path.resolve('src/templates/tag.tsx')
  // store keys of keywords as key and the node as value
  const projectByTag = {}
  projects.forEach(({ node }) => {
    if (node.frontmatter.keywords) {
      node.frontmatter.keywords.forEach(keyword => {
        if (!projectByTag[keyword]) {
          projectByTag[keyword] = []
        }
        projectByTag[keyword].push(node)
      })
    }
  })

  const keyWords = Object.keys(projectByTag)

  createPage({
    path: '/tags',
    component: allTags,
    context: {
      keywords: keyWords.sort(),
    },
  })
}

exports.createPages = async ({
  graphql,
  reporter,
  actions: { createPage },
}) => {
  const projectTemplate = path.resolve('src/templates/project.tsx')
  const results = await graphql(
    `
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id

              frontmatter {
                title
                path
                keywords
              }
            }
          }
        }
      }
    `,
  )
  if (results.error) {
    reporter.panicOnBuild(`Error while running Graphql query`)
    return
  }

  const projects = results.data.allMarkdownRemark.edges

  createTagPages(createPage, projects)

  const projectPerPage = 4
  const numPages = Math.ceil(projects.length / projectPerPage)
  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/projects` : `/projects/${index + 1}`,
      component: path.resolve('src/templates/projects.tsx'),
      context: {
        limit: projectPerPage,
        skip: index * projectPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  projects.forEach(({ node }, index) => {
    const {
      id,
      frontmatter: { title, path },
    } = node
    createPage({
      path: `/projects${path}`,
      component: projectTemplate,
      context: {
        id,
        pathSlug: path,
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
