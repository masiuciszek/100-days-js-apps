import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProjectStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`
export const ProjectLink = styled(Link)`
  font-size: 2.5rem;
  display: block;
  padding: 1rem;
  text-transform: capitalize;
`
