import * as React from 'react'
import Layout from '../components/layout'
import ArticleList from '../components/global/article/ArticleList'

interface P {}

const ProjectPage: React.FC<P> = () => {
  return (
    <Layout>
      <ArticleList />
    </Layout>
  )
}
export default ProjectPage
