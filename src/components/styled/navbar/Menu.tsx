import * as React from 'react'
import { Link } from 'gatsby'
import { StyledMenu, StyledNavList } from './Styled.nav'

interface P {}

interface NavList {
  id: number
  text: string
  to: string
}

const Menu: React.FC<P> = () => {
  const [navList, setnavList] = React.useState<NavList[]>([
    {
      id: 1,
      text: 'home',
      to: '/'
    },
    {
      id: 2,
      text: 'about',
      to: '/about'
    },
    {
      id: 1,
      text: 'contact',
      to: '/contact'
    }
  ])
  return (
    <StyledMenu>
      <StyledNavList>
        {navList.map(x => (
          <li key={x.text}>
            <Link to={x.to}> {x.text} </Link>
          </li>
        ))}
      </StyledNavList>
    </StyledMenu>
  )
}
export default Menu
