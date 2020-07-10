import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProjectStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 4rem auto;
`
export const ProjectLink = styled(Link)`
  font-size: 2.5rem;
  display: block;
  padding: 1rem;
  text-transform: capitalize;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  span {
    display: inline-block;
    margin: 0 0.5rem;
    &:nth-child(1) {
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
      font-size: 2rem;
    }
    &:nth-child(2) {
      color: ${props => props.theme.colors.common};
      font-weight: 600;
      font-size: 2rem;
    }
  }
`
