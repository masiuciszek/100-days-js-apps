import styled from 'styled-components'
import { FlexStyle } from '../../../styles/Globalstyles'

export const StyledNav = styled.nav`
  padding: 1rem 0.5rem;
  background: ${props => props.theme.colors.primary};
`
export const NavTitle = styled.nav`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  /* TODO: DELETE */
  border: 2px solid #fff;
  margin: 0 auto;
  width: 40%;
  ${FlexStyle};
  letter-spacing: 0.1rem;
  h3 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1.8em;
  }
`
