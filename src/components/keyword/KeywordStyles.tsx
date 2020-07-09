import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledKeyword = styled(Link)`
  display: block;
  padding: 1rem 1.3rem;
  font-size: 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transition.quickTransition};
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadow.lightShadow};
    transform: scale(0.9);
  }
`
