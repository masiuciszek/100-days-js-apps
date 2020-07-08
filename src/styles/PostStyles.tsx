import styled from 'styled-components'
import { AppWrapper } from '../components/styled/Wrapper'

export const StyledPost = styled(AppWrapper)``

export const StyledContent = styled.section`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  width: 100%;
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2.2rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.8rem;
  }

  p {
    font-size: 18px;
    margin: 2rem 0;
  }

  a {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    box-shadow: ${props => props.theme.shadow.lightShadow};
    transition: ${props => props.theme.transition.secondaryTransition};
    display: block;
    width: 70%;
    margin: 1rem auto;
    border-radius: 0.6rem;
    text-align: center;
    font-size: 2rem;
    &:hover {
      box-shadow: ${props => props.theme.shadow.darkShadow};
      color: ${props => props.theme.colors.common};
      background: ${props => props.theme.colors.white};
    }
  }
`
