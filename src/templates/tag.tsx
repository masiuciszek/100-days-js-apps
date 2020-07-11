import * as React from 'react'
import { PageProps } from 'gatsby'
import styled from 'styled-components'
import Layout, { Page } from '../components/layout'
import TagItem from '../components/tag/index'
import Title from '../components/styled/title/Title'

interface Project {
  id: string
  frontmatter: {
    keywords: string[]
    path: string
    title: string
  }
}
interface Data {}
interface PageContext {
  keyword: string
  projects: Project[]
}

type IndexPageProps = PageProps<Data, PageContext>

function SingleTag(props: IndexPageProps) {
  const { keyword, projects } = props.pageContext

  return (
    <Layout>
      <TagPageStyles>
        <StyledTag>
          <Title
            mainTitle={` Keyword  ${keyword}`}
            subTitle={`Projects belongs to Keyword  ${keyword}`}
            center
          />
          <TagGrid>
            {projects &&
              projects.length &&
              projects.map(tag => (
                <TagItem key={tag.id} frontmatter={tag.frontmatter} />
              ))}
          </TagGrid>
        </StyledTag>
      </TagPageStyles>
    </Layout>
  )
}

const TagPageStyles = styled(Page)`
  margin: 5rem auto;
  min-height: 50vh;
`

const StyledTag = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 2rem;
`

const TagGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  align-items: center;
`

export default SingleTag
