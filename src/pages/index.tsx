import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../styles/hero/Hero'
import Banner from '../components/styled/banner/Banner'
import { BtnLink } from '../components/styled/Button'

interface Props {
  data: {
    heroBg: {
      childImageSharp: {
        fluid: string
      }
    }
  }
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Layout>
        <Hero home img={data.heroBg.childImageSharp.fluid}>
          <Banner title="Welcome to 100 JS apps" desc="Small blog for modern js apps">
            <BtnLink to="/projects">Projects</BtnLink>
          </Banner>
        </Hero>
      </Layout>
    </>
  )
}

export const PAGE_QUERY = graphql`
  query {
    heroBg: file(relativePath: { eq: "flowers.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    siteDesc: site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
