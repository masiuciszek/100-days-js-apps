/* eslint-disable @typescript-eslint/interface-name-prefix */
import styled from 'styled-components'
import { FlexStyle } from '../../../styles/Globalstyles'

interface IStyledBanner {
  width?: string
}

export const StyledBanner = styled.section<IStyledBanner>`
  width: ${({ width }) => width || '80%'};
  background: rgba(0, 0, 0, 0.6);
  color: ${props => props.theme.colors.white};
  padding: 1rem;
  box-shadow: ${props => props.theme.shadow.lightShadow};
  ${FlexStyle};
  transform: rotate(-3deg);
  transition: ${props => props.theme.transition.quickTransition};
  &:hover {
    transform: rotate(0deg) scale(1.1, 1.1);
  }
  h2 {
    font-size: 2.2rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    margin: 0.5rem 0;
  }
  span {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
  @media (max-width: 700px) {
    align-items: center;
  }
`
