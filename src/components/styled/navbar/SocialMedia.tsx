/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react'
import { Link } from 'gatsby'
import { SocialMediaWrapper } from './Styled.nav'
// import { ReactComponent as Github } from '../../../images/github.svg'

interface P {}

interface ISocial {
  id: number
  icon: string
  url: string
}

const SocialMedia: React.FC<P> = () => {
  const [state, setState] = React.useState<ISocial[]>([
    {
      id: 1,
      icon: '⚛️',
      url: 'https://www.github.com/masiuciszek'
    },
    {
      id: 2,
      icon: '🧘🏽‍♀️',
      url: 'https://www.twitter.com/masiuciszek'
    },
    {
      id: 3,
      icon: '🦋',
      url: 'https://www.Linkedin.com/masiuciszek'
    }
  ])
  return (
    <SocialMediaWrapper>
      {' '}
      <span id="myShowCase">
        <Link to="/">Modern 100 Js Apps</Link>
      </span>
      {state.map(s => (
        <span key={s.id}>
          <a href={s.url} target="_blank" rel="noopener noreferrer">
            {s.icon}
          </a>
        </span>
      ))}
    </SocialMediaWrapper>
  )
}
export default SocialMedia
