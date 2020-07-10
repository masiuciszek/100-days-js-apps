import * as React from 'react'

import { SocialMediaStyles } from './ContactStyles'
import { handleIcons } from '../../utils'

type SocialType =
  | 'github'
  | 'twitter'
  | 'instagram'
  | 'marcellable'
  | 'masiuciszek'
interface Social<T> {
  name: T
  url: T
}
interface Props {
  onSocial: Social<SocialType>[]
}

const SocialList: React.FC<Props> = ({ onSocial }) => {
  return (
    <SocialMediaStyles>
      {onSocial.map(x => (
        <li key={x.name}>
          <a href={x.url} target="_blank" rel="noreferrer">
            {handleIcons(x.name)}{' '}
          </a>
        </li>
      ))}
    </SocialMediaStyles>
  )
}
export default SocialList
