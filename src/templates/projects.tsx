/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import styled from 'styled-components'
import Layout, { Page } from '../components/layout'
import Project from '../components/project/Project'

interface Node {
  node: {
    id: string
    frontmatter: {
      title: string
      keywords: string[]
      date: string
    }
  }
}
interface Data {
  allMarkdownRemark: {
    edges: Node[]
  }
}
interface PageContext {
  currentPage: number
  limit: number
  numPages: number
  skip: number
}

const Projects: React.FC<PageProps<Data, PageContext>> = ({
  data,
  pageContext,
}) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const { allMarkdownRemark } = data
  return (
    <Layout>
      <Page>
        {allMarkdownRemark.edges.map(({ node }) => (
          <Project key={node.id} data={node} />
        ))}

        <Pagination>
          {!isFirst && (
            <Link id="prev" to={`/projects/${prevPage}`} rel="prev">
              ⬅ prev
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li key={i + Math.random() * 100}>
              <Link
                className={currentPage === i + 1 ? 'current' : ''}
                to={`/projects/${i === 0 ? '' : i + 1}`}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={`/projects/${nextPage}`} rel="prev" id="next">
              next ➡
            </Link>
          )}
        </Pagination>
      </Page>
    </Layout>
  )
}

const Pagination = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  #prev,
  #next {
    border-radius: 0;
    width: 8rem;
  }
  a {
    font-size: 1.5rem;
    transition: ${props => props.theme.transition.mainTransition};
    color: #333;
    border-radius: 1rem;
    padding: 0.5rem;
    display: block;
    height: 3rem;
    width: 3rem;
    text-align: center;
    &:hover {
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.primary};
      box-shadow: ${props => props.theme.shadow.lightShadow};
    }
  }
  .current {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadow.lightShadow};
  }
`

export const PROJECTS_QUERY = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            keywords
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`

export default Projects
