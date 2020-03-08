import styled from 'styled-components'
import { FlexStyle } from '../../../styles/Globalstyles'

export const StyledNav = styled.nav`
  padding: 1rem 0.5rem;
  background: ${props => props.theme.colors.primary};
  position: relative;
  #NavMenu {
    position: absolute;
    top: 0.6rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 2;
  }
`

export const NavTitle = styled.nav`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
  transition: ${props => props.theme.transition.mainTransition};
  transform: rotate(2deg);
  margin-right: auto;
  width: 60%;
  ${FlexStyle};
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  h3 {
    font-size: 1.8rem;
    margin-right: auto;
    padding: 0.4rem 0;
  }
  p {
    font-size: 1.8em;
    margin-right: auto;
  }

  @media (min-width: 735px) {
    margin: 0 auto;
    width: 40%;
    h3,
    p {
      margin: 0 auto;
    }
  }
  &:hover {
    transform: rotate(0deg);
    color: ${({ theme }) => theme.colors.common};
    background: ${({ theme }) => theme.colors.primary};
  }
`

export const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: ${({ theme }) => theme.colors.white};
  ${FlexStyle};
  z-index: 2;
`

export const StyledNavList = styled.ul`
  li {
    padding: 1.5rem 0.2rem;
  }
  a {
    font-size: 2rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 0.3rem;
    transition: ${props => props.theme.transition.mainTransition};
    padding: 0.3rem;
    &:hover {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.common};
    }
  }
`
