import * as React from 'react'
import { StyledTitle } from './Styled.title'

interface P {
  mainTitle: string
  subTitle?: string
}

const Title: React.FC<P> = ({ mainTitle, subTitle }) => {
  return (
    <StyledTitle>
      <h3> {mainTitle} </h3>
      <h5>{subTitle}</h5>
    </StyledTitle>
  )
}
export default Title
