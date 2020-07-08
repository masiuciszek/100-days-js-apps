import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import styled from 'styled-components'
import Title from '../components/styled/title/Title'
import Layout, { Page } from '../components/layout'
import { StyledPost, StyledContent } from '../styles/PostStyles'

interface Query {
  markdownRemark: {
    id: string
    frontmatter: {
      title: string
      keywords: string[]
      date: string
    }
    html: string
    excerpt: string
  }
}
interface Node {
  fields: {
    slug: string
  }
  frontmatter: { title: string }
  id: string
}
interface PageContext {
  id: string
  next: Node | null
  prev: Node | null
  title: string
  slug: string
}

const Post: React.FC<PageProps<Query, PageContext>> = ({ data, pageContext }) => {
  const { frontmatter, html, excerpt } = data.markdownRemark
  const { slug, next, prev } = pageContext

  return (
    <Layout>
      <StyledPost>
        <Wrapper>
          <Title mainTitle={frontmatter.title} bg="rgb(7, 36, 100,.8)" keywords={frontmatter.keywords} />
          <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
          <div className="navigation">
            {prev && <Link to={`/projects${prev.fields.slug}`}>⬅ {prev?.frontmatter.title}</Link>}
            {next && <Link to={`/projects${next.fields.slug}`}> {next?.frontmatter.title} ➡</Link>}
          </div>
        </Wrapper>
      </StyledPost>
    </Layout>
  )
}

const Wrapper = styled(Page)`
  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      font-size: 1.4rem;
      transition: ${props => props.theme.transition.mainTransition};
      display: block;
      position: relative;
      &:after {
        transition: ${props => props.theme.transition.mainTransition};
        content: '';
        padding: 0;
        width: 0;
        height: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${props => props.theme.colors.dark};
      }
      &:hover {
        &:after {
          padding: 0.1rem;
          width: 100%;
          height: 0.2rem;
        }
      }
    }
  }
`

export const PAGE_QUERY = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        keywords
        date(formatString: "MMMM Do, YYYY")
      }
      html
      excerpt
    }
  }
`

export default Post
