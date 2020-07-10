import * as React from 'react'

import { SocialMediaStyles } from './ContactStyles'

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
  const handleIcons = (socialPlatform: SocialType) => {
    switch (socialPlatform) {
      case 'github':
        return '🐼 Github'
      case 'instagram':
        return '📷 Instagram'
      case 'twitter':
        return '🐦 Twitter'
      case 'marcellable':
        return 'λ Blog'
      case 'masiuciszek':
        return '🐙 Porfolio'
      default:
        throw new Error('No matching type')
    }
  }
  return (
    <SocialMediaStyles>
      {onSocial.map(x => (
        <li key={x.name}>
          <a href={x.url} target="_blank" rel="noreferrer">
            {' '}
            {handleIcons(x.name)}{' '}
          </a>
        </li>
      ))}
    </SocialMediaStyles>
  )
}
export default SocialList
