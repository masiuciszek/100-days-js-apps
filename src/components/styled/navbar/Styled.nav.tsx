import styled from 'styled-components'
import { FlexStyle } from '../../../styles/Globalstyles'
import { FadeIn } from '../animation'

export const StyledNav = styled.nav`
  padding: 1rem 0.5rem;
  /* background: ${props => props.theme.colors.primary}; */
  background: none;
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
  transition: ${props => props.theme.transition.mainTransition};
  animation: ${FadeIn} 300ms ease-in-out;
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
export const SocialMediaWrapper = styled.div`
  ${FlexStyle};
  flex-direction: row;
  padding: 1em 0.4em;
  margin-top: 1rem;

  #myShowCase {
    a {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.2em;
      width: 100%;
    }
  }
  span,
  a {
    font-size: 1.6em;
    background: ${({ theme }) => theme.colors.primary};
    transition: ${props => props.theme.transition.mainTransition};
    margin: 0 0.4em;
  }
  span {
    color: ${({ theme }) => theme.colors.white};
    padding: 0.6em;
    height: 3rem;
    box-shadow: ${props => props.theme.shadow.lightShadow};
    display: flex;
    border-radius: 0.3rem 0 0.3rem 0;
    align-items: center;
    transition: ${props => props.theme.transition.mainTransition};
    &:hover {
      box-shadow: ${props => props.theme.shadow.darkShadow};
    }
  }
  a {
  }
  @media (max-width: 448px) {
    width: 100%;
    flex-wrap: wrap;
    span {
      margin: 0.5em;
    }
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
