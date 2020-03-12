/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react'
import { Link } from 'gatsby'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Twitter } from '@styled-icons/fa-brands/Twitter'
import { SocialMediaWrapper } from './Styled.nav'

interface P {}

interface ISocial {
  id: number
  icon: React.ReactNode
  url: string
}

const SocialMedia: React.FC<P> = () => {
  const [state, setState] = React.useState<ISocial[]>([
    {
      id: 1,
      icon: <Github size="35" color="#fff" />,
      url: 'https://www.github.com/masiuciszek'
    },
    {
      id: 2,
      icon: <Twitter size="30" color="#fff" />,
      url: 'https://twitter.com/CiszekMarcell'
    },
    {
      id: 3,
      icon: <Linkedin size="35" color="#fff" />,
      url: 'https://www.Linkedin.com/masiuciszek'
    }
  ])
  return (
    <SocialMediaWrapper>
      {' '}
      <span id="myShowCase">
        <Link to="/">Modern Js Apps</Link>
      </span>
      {state.map(s => (
        <span key={s.id} className="social">
          <a href={s.url} target="_blank" rel="noopener noreferrer">
            {s.icon}
          </a>
        </span>
      ))}
    </SocialMediaWrapper>
  )
}
export default SocialMedia
