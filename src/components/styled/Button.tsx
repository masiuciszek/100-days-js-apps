import styled from 'styled-components'
import { Link } from 'gatsby'

export const BtnLink = styled(Link)`
  cursor: pointer;
  display: block;
  text-align: center;
  padding: 0.4rem 0.6rem;
  font-size: 1.3rem;
  text-transform: capitalize;
  border-radius: 0.4rem;
  border: 2px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transition.secondaryTransition};
  background: none;
  width: 12rem;

  &:hover {
    color: ${props => props.theme.colors.common};
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.common};
  }
`
