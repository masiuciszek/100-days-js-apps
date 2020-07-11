import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledTag = styled(Link)`
  font-size: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.common};
  color: ${({ theme }) => theme.colors.white};
  margin: 1rem 0;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  transition: ${({ theme }) => theme.transition.secondaryTransition};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  strong {
    font-size: 1.3rem;
  }
  &:hover {
    transform: scale(0.9);
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`
