import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Title from '../components/styled/title/Title'
import Layout from '../components/layout'
import { StyledPost, StyledContent } from '../styles/PostStyles'

interface Query {}

const Post: React.FC<PageProps<Query>> = () => {
  return (
    <Layout>
      <StyledPost>
        <h1>Hello</h1>
        {/* <Title mainTitle={post.frontmatter.title} bg="rgb(7, 36, 100,.8)" keywords={post.frontmatter.keywords} /> */}
        {/* <StyledContent dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </StyledPost>
    </Layout>
  )
}
// <StyledContent dangerouslySetInnerHTML={{__html:post.}}>
//         </StyledContent>

export default Post
