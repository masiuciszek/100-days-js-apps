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
  url: string
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
  const d = new Date()
  const yy = d.getFullYear()
  return (
    <FooterStyles>
      <FooterTitle>
        <h3>
          {siteMetadata.title} {yy} ©
        </h3>
      </FooterTitle>
      <FooterSocial>
        {siteMetadata.social.map(({ name, url }) => (
          <FooterLink key={name} name={name} url={url} />
        ))}
      </FooterSocial>
    </FooterStyles>
  )
}

export default Footer
