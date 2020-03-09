import * as React from 'react'
import Layout from '../components/layout'
import ArticleList from '../components/global/article/ArticleList'
import { AppWrapper } from '../components/styled/Wrapper'

interface P {}

const ProjectPage: React.FC<P> = () => {
  return (
    <Layout>
      <AppWrapper>
        <ArticleList />
      </AppWrapper>
    </Layout>
  )
}
export default ProjectPage
