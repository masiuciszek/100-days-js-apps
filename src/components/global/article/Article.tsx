import * as React from 'react'
import { StyledArticle, KeyWords, Description, StyledHeader } from './Styled.article'

interface P {
  id: string
  title: string
  keywords: string[]
  to: string
  date: string
  desc: string
}

const Article: React.FC<P> = ({ id, title, keywords, to, date, desc }) => {
  return (
    <StyledArticle>
      <StyledHeader>
        <h3> {title} </h3>
      </StyledHeader>

      <Description>
        <p>{desc.slice(0, 200)}...</p>
      </Description>

      <KeyWords>
        {keywords.map(k => (
          <span key={k}>{`${k} `}</span>
        ))}
      </KeyWords>
      <span className="date">{date}</span>
    </StyledArticle>
  )
}
export default Article
