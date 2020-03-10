import * as React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

interface P {
  img: string
  className: string
  children: React.ReactNode
  home?: boolean
}

const Hero: React.FC<P> = ({ img, className, children, home }) => {
  return (
    <BackgroundImage fluid={img} home={home} className={className}>
      {' '}
      {children}{' '}
    </BackgroundImage>
  )
}

export default styled(Hero)`
  min-height: ${props => (props.home ? `calc(100vh - 62px)` : `50vh`)};
  background: ${props => (props.home ? `linear-gradient(rgba(2, 8, 2, 0.2), rgba(0, 0, 0, 0.7))` : `none`)};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
