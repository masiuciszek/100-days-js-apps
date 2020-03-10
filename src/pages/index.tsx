import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../styles/hero/Hero'

interface Props {
  data: any
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Layout>
        <h1>apa</h1>
        <Hero home="true">
          <h1>hero title</h1>
        </Hero>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            date
            keywords
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
