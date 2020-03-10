import * as React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/styled/title/Title'
import Layout from '../components/layout'
import { StyledPost, StyledContent } from '../styles/PostStyles'

interface P {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        keywords: string[]
      }
      html: string
    }
  }
}

const Post: React.FC<P> = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <StyledPost>
        <Title mainTitle={post.frontmatter.title} bg="rgb(7, 36, 100,.8)" keywords={post.frontmatter.keywords} />
        <StyledContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledPost>
    </Layout>
  )
}
// <StyledContent dangerouslySetInnerHTML={{__html:post.}}>
//         </StyledContent>
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
