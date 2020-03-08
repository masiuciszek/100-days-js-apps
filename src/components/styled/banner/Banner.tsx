import * as React from 'react'
import { StyledBanner } from './Styled.banner'

interface P {
  title: string
  desc: string
  children: React.ReactNode
  info?: Record<string, any>
  width?: string
}

const Banner: React.FC<P> = ({ info, desc, children, width, title }) => {
  return (
    <StyledBanner width={width}>
      <h2>{title}</h2>
      <small>{desc}</small>
      <p>{info}</p>
      {children}
    </StyledBanner>
  )
}
export default Banner
