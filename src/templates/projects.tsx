/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import styled from 'styled-components'
import Layout, { Page } from '../components/layout'

interface Node {
  id: string
  frontmatter: {
    title: string
    keywords: string[]
    date: string
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

  console.log(
    'isFirst ',
    isFirst,
    ' isLast ',
    isLast,
    ' prevPage ',
    prevPage,
    ' nextpage ',
    nextPage,
    ' current page ',
    currentPage,
    ' numpages ',
    numPages,
  )
  return (
    <Layout>
      <Page>
        <h1>apa</h1>

        <Pagination>
          {!isFirst && (
            <Link to={`/projects/${prevPage}`} rel="prev">
              ⬅ prev
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li key={i + Math.random() * 100}>
              <Link
                style={{
                  color: currentPage === i + 1 ? '#fff' : '#333',
                  background: currentPage === i + 1 ? '#333' : '#fff',
                  border:
                    currentPage === i + 1
                      ? '2px solid  #fff'
                      : ' 2px solid #333',
                }}
                to={`/projects/${i === 0 ? '' : i + 1}`}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={`/projects/${nextPage}`} rel="prev">
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
  border: 3px solid red;
  justify-content: space-between;
  a {
    font-size: 2rem;
    color: #333;
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
