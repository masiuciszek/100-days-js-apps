import * as React from 'react'
import { handleIcons } from '../../../utils'

type SocialType =
  | 'github'
  | 'twitter'
  | 'instagram'
  | 'marcellable'
  | 'masiuciszek'
interface Props {
  name: SocialType
  url: string
}

const FooterLink: React.FC<Props> = ({ name, url }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        {handleIcons(name)}
      </a>
    </li>
  )
}
export default FooterLink
