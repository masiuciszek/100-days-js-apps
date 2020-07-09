/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { PageProps } from 'gatsby'
import Layout, { Page } from '../components/layout'
import KeyWord from '../components/keyword/KeyWord'

interface PageContext {
  keywords: string[]
}
interface Data {}

const TagsList: React.FC<PageProps<Data, PageContext>> = ({
  data,
  pageContext,
}) => {
  const { keywords } = pageContext

  return (
    <Layout>
      <Page>
        {keywords.map((keyword, i) => (
          <KeyWord
            key={i + Math.floor(Math.random() * 10000)}
            keyword={keyword}
          />
        ))}
      </Page>
    </Layout>
  )
}

export default TagsList
