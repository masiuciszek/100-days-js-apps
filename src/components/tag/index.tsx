import * as React from 'react'
import { StyledTag } from './Tag.Styles'

interface Props {
  frontmatter: {
    keywords: string[]
    path: string
    title: string
  }
}

const TagItem: React.FC<Props> = ({ frontmatter }) => {
  const { path, title } = frontmatter

  return (
    <StyledTag to={`/projects${path}`}>
      <strong>{title}</strong>
    </StyledTag>
  )
}
export default TagItem
