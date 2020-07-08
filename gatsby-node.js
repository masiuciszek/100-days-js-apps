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
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  //
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPostList = path.resolve(`./src/global/article/ArticleList.tsx`)
//   const blogPost = path.resolve(`./src/templates/post.tsx`)
//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//                 keywords
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   if (result.errors) {
//     throw result.errors
//   }
//   const posts = result.data.allMarkdownRemark.edges
//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node

//     createPage({
//       path: post.node.fields.slug,
//       component: path.resolve('./src/templates/post.tsx'),
//       context: {
//         slug: post.node.fields.slug,
//         previous,
//         next
//       }
//     })
//     const postPerPage = 3
//     const numberOfPages = Math.ceil(posts.length / postPerPage)

//     Array.from({ length: numberOfPages }).forEach((_, index) => {
//       // if index 0 then first page
//       const isFirstPage = index === 0
//       const currentPage = index + 1
//       if (isFirstPage) return
//       createPage({
//         // path: `/blog/${currentPage}`,
//         path: index === 0 ? `/blog` : `/blog/${index + 1}`,
//         component: blogPostList,
//         context: {
//           limit: postPerPage,
//           skip: index * postPerPage,
//           currentPage,
//           numberOfPages
//         }
//       })
//     })
//   })
// }
