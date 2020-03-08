import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StyledNav, NavTitle } from './Styled.nav'

interface P {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
    author: {
      name: string
    }
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          name
        }
      }
    }
  }
`

const Navbar: React.FC<P> = () => {
  const data = useStaticQuery<P>(query)
  return (
    <StyledNav>
      <NavTitle>
        <h3>{data.site.siteMetadata.title}</h3>
        <p>{data.site.siteMetadata.description}</p>
      </NavTitle>
    </StyledNav>
  )
}
export default Navbar
