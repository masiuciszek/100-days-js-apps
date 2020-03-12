import styled from 'styled-components'
import { FlexStyle } from '../../styles/Globalstyles'

export const StyledErrorWrapper = styled.div`
  ${FlexStyle}
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transition.mainTransition};
  box-shadow: ${props => props.theme.shadow.lightShadow};
  transform: rotate(-3deg);
  &:hover{
    transform: rotate(0deg);
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.common};
    section{
      color: ${props => props.theme.colors.primary};
    }
  }
  a{
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    padding: .3em .5em;
    border: 2px solid ${props => props.theme.colors.white};
    margin-bottom: 1em;
    font-size: 1.5em;
    transition: ${props => props.theme.transition.mainTransition};
    width: 12em;
    text-align: center;
    &:hover{
    transform: rotate(0deg);
    border: 2px solid ${props => props.theme.colors.common};
    color: ${props => props.theme.colors.common};
    background: ${props => props.theme.colors.white};
    width: 14em;
    box-shadow: ${props => props.theme.shadow.lightShadow};
  }
  }
  section {
    color: ${props => props.theme.colors.white};
  }
`
