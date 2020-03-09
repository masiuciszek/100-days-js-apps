import * as React from 'react'
import { StyledArticle } from './Styled.article'

interface P {
  id: string
  title: string
  keywords: string[]
  to: string
}

const Article: React.FC<P> = ({ id, title, keywords, to }) => {
  return (
    <StyledArticle>
      {' '}
      <h1> {title} </h1>
    </StyledArticle>
  )
}
export default Article
