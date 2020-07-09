/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { PageProps } from 'gatsby'
import styled from 'styled-components'
import Layout, { Page } from '../components/layout'
import KeyWord from '../components/keyword/KeyWord'

interface PageContext {
  keywords: string[]
}
interface Data {}

const TagsList: React.FC<PageProps<Data, PageContext>> = ({ pageContext }) => {
  const { keywords } = pageContext

  return (
    <Layout>
      <Page>
        <StyledList>
          {keywords.map((keyword, i) => (
            <KeyWord
              key={i + Math.floor(Math.random() * 10000)}
              keyword={keyword}
            />
          ))}
        </StyledList>
      </Page>
    </Layout>
  )
}
const StyledList = styled.ul`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  justify-items: center;
  grid-gap: 15px;
`
export default TagsList
