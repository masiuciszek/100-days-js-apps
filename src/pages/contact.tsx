import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import Layout, { Page } from '../components/layout'
import { ContactGrid } from '../components/contact/ContactStyles'
import Contact from '../components/contact/Contact'
import SocialList from '../components/contact/SocialList'
import Title from '../components/styled/title/Title'

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
interface Data {
  site: {
    siteMetadata: {
      title: string
      social: Social<SocialType>[]
    }
  }
}

const ContactPage: React.FC<PageProps<Data>> = ({ data }) => {
  const {
    siteMetadata: { social, title },
  } = data.site

  return (
    <Layout>
      <Page>
        <Title
          mainTitle="Contact info"
          subTitle="If anything you can reach me here"
          center
        />
        <ContactGrid>
          <Contact onTitle={title} />
          <SocialList onSocial={social} />
        </ContactGrid>
      </Page>
    </Layout>
  )
}

export default ContactPage

export const CONTACT_PAGE_QUERY = graphql`
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
