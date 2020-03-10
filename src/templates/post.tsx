import * as React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/styled/title/Title'
import Layout from '../components/layout'

interface P {}

const Post: React.FC<P> = ({ data }) => {
  return (
    <div>
      {' '}
      <h1> Legia CWSKS </h1>{' '}
    </div>
  )
}

export const POST_QUERY = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`

export default Post
