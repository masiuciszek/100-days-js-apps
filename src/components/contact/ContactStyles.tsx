import styled from 'styled-components'

export const ContactGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`

export const ContactStyles = styled.section`
  height: 100%;

  padding: 1rem;
  h4 {
    font-size: 2rem;
    margin: 1.5rem 0;
  }
  p {
    margin: 1.5rem 0;
    font-size: 1.6rem;
  }
`
export const SocialMediaStyles = styled.ul`
  height: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  li {
    padding: 2rem;
    width: 100%;
    text-align: center;
    transition: ${props => props.theme.transition.mainTransition};
  }
  a {
    transition: ${props => props.theme.transition.mainTransition};
    font-size: 2rem;
    position: relative;
    display: block;
    &:after {
      content: '';
      transition: ${props => props.theme.transition.mainTransition};
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0;
      padding: 0;
      background: ${props => props.theme.colors.primary};
    }
    &:hover {
      &:after {
        width: 100%;
        height: 0.2rem;
        padding: 0.1rem;
      }
    }
  }
`
