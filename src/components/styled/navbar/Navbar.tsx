/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/accessible-emoji */
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StyledNav, NavTitle } from './Styled.nav'
import useToggle from '../../hooks/useToggle'
import Menu from './Menu'
import SocialMedia from './SocialMedia'

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
  const [showMenu, toggleMenu] = useToggle(false)
  return (
    <StyledNav>
      {showMenu && <Menu />}
      <NavTitle>
        <h3>{data.site.siteMetadata.title}</h3>
        <p>{data.site.siteMetadata.description}</p>
      </NavTitle>
      <SocialMedia />
      <div id="NavMenu">
        <span role="img" onClick={toggleMenu}>
          🎲
        </span>
      </div>
    </StyledNav>
  )
}
export default Navbar
