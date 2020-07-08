import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { StyledMenu, StyledNavList } from './Styled.nav'

interface Path {
  name: string
  path: string
}
interface Query {
  site: {
    siteMetadata: {
      paths: Path[]
    }
  }
}

const MenuQuery = graphql`
  {
    site {
      siteMetadata {
        paths {
          name
          path
        }
      }
    }
  }
`

const Menu: React.FC = () => {
  const {
    site: { siteMetadata }
  } = useStaticQuery<Query>(MenuQuery)

  return (
    <StyledMenu>
      <StyledNavList>
        {siteMetadata.paths.map(x => (
          <li key={x.name}>
            <Link to={x.path}> {x.name} </Link>
          </li>
        ))}
      </StyledNavList>
    </StyledMenu>
  )
}
export default Menu
