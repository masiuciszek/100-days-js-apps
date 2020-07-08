import * as React from 'react'
import { Link } from 'gatsby'
import { StyledTitle } from './Styled.title'

interface P {
  mainTitle: string
  subTitle?: string
  sizeH3?: string
  sizeH5?: string
  bg?: string
  keywords?: string[]
}

const Title: React.FC<P> = ({ mainTitle, subTitle, sizeH3, sizeH5, bg, keywords }) => {
  return (
    <StyledTitle sizeH3={sizeH3} sizeH5={sizeH5} bg={bg}>
      <h3> {mainTitle} </h3>
      <h5>{subTitle}</h5>
      <ul className="keywords">
        {keywords?.map((x, i) => (
          <li key={x}>
            <Link to="/">{i === keywords.length - 1 ? '' : `${x} | `}</Link>
          </li>
        ))}
      </ul>
    </StyledTitle>
  )
}
export default Title
