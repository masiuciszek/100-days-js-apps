import * as React from 'react'
import BackgroundImage from 'gatsby-background-image'

interface P {
  img: string
  className: string
  children: React.ReactNode
  home?: boolean
}

const Hero: React.FC<P> = ({ img, className, children, home }) => {
  return <div> {children} </div>
}

export default Hero
