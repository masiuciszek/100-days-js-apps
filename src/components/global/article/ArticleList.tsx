/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Article from './Article'

interface INode {
  node: {
    id: string
    frontmatter: {
      title: string
      image: string
      date: string
      keywords: string[]
    }
    excerpt: string
  }
}

interface QueryProps {
  allMarkdownRemark: {
    totalCount: number
    edges: INode[]
  }
}
interface P {}

const GET_ARTICLES = graphql`
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

const ArticleList: React.FC<P> = () => {
  const articleListData = useStaticQuery<QueryProps>(GET_ARTICLES)
  return (
    <div>
      {articleListData.allMarkdownRemark.edges.map(({ node }) => (
        <Article
          key={node.id}
          id={node.id}
          to="/"
          keywords={node.frontmatter.keywords}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          desc={node.excerpt}
        />
      ))}
    </div>
  )
}

export default ArticleList
