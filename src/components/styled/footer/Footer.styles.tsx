import styled from 'styled-components'

export const FooterStyles = styled.footer`
  background: none;
  height: 4rem;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: 910px) {
    flex-direction: column;
  }
`

export const FooterTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 1.6rem;
    text-transform: capitalize;
  }
`
export const FooterSocial = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding: 0.5rem;
  }
  a {
    font-size: 1rem;
    display: block;
    position: relative;
    &:after {
      content: '';
      transition: ${props => props.theme.transition.mainTransition};
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 0;
      padding: 0;
      background: ${props => props.theme.colors.primary};
    }
    &:hover {
      &:after {
        width: 100%;
        height: 0.1rem;
        padding: 0.1rem;
      }
    }
  }
  /* flex-direction: column; */
`
