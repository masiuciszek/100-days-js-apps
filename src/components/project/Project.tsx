import * as React from 'react'
import { ProjectStyles, ProjectLink } from './ProjectStyles'

interface Props {
  data: {
    id: string
    frontmatter: {
      title: string
      keywords: string[]
      date: string
    }
  }
}

const Project: React.FC<Props> = ({ data }) => {
  return (
    <ProjectStyles>
      <ProjectLink to="/">{data.frontmatter.title}</ProjectLink>
    </ProjectStyles>
  )
}
export default Project
