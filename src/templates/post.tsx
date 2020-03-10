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
  console.log('POST COMPONENT TEMPLATE  ', data)
  const post = data.markdownRemark
  return (
    <Layout>
      <StyledPost>
        <Title mainTitle={post.frontmatter.title} />
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
