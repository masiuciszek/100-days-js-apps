import React, { ReactElement } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FooterStyles, FooterTitle, FooterSocial } from './Footer.styles'
import FooterLink from './FooterLink'

const FOOTER_QUERY = graphql`
  {
    site {
      siteMetadata {
        title

        social {
          name
          url
        }
      }
    }
  }
`

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

interface Query {
  site: {
    siteMetadata: {
      title: string
      social: Social<SocialType>[]
    }
  }
}

const Footer: React.FC = (): ReactElement => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<Query>(FOOTER_QUERY)
  return (
    <FooterStyles>
      <FooterTitle>
        <h1>Footer</h1>
      </FooterTitle>
      <FooterSocial>
        {siteMetadata.social.map(({ name, url }) => (
          <FooterLink name={name} url={url} />
        ))}
      </FooterSocial>
    </FooterStyles>
  )
}

export default Footer
