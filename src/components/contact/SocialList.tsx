import * as React from 'react'
import { SocialMediaStyles } from './ContactStyles'

interface Social<T> {
  name: T
  url: T
}
interface Props {
  onSocial: Social<string>[]
}
type SocialType = 'github' | 'twitter' | 'instagram'

const SocialList: React.FC<Props> = ({ onSocial }) => {
  const handleIcons = (socialPlatform: SocialType) => {
    switch (socialPlatform) {
      case 'github':
        return 'https://github/masiuciszek.com'
      case 'instagram':
        return 'https://instagram/masiuciszek.com'
      case 'twitter':
        return 'https://twitter/CiszekMarcell.com'

      default:
        throw new Error('No matching type')
    }
  }
  return (
    <SocialMediaStyles>
      {' '}
      <h1> Legia CWSKS </h1>{' '}
    </SocialMediaStyles>
  )
}
export default SocialList
