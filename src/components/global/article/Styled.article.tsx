import styled from 'styled-components'
import { Link } from 'gatsby'
import { FlexStyle } from '../../../styles/Globalstyles'

export const StyledArticle = styled(Link)`
  padding: 4rem 0.5rem;
  display: flex;
  /* box-shadow: ${({ theme }) => theme.shadow.lightShadow}; */
  margin: 1rem 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem 0 0.4rem 0;
  position: relative;
  h3 {
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    h3 {
      margin: 1rem 0;
    }
  }
  .date {
    position: absolute;
    top: 0.5rem;
    right: 0.6rem;
    font-size: 1.2rem;
  }
  transition: ${props => props.theme.transition.mainTransition};
  background-image: linear-gradient(to right, #fefefe 50%, ${({ theme }) => theme.colors.common} 50%);
  background-position: 0;
  background-size: 200%;
  &:hover {
    background-position: -100%;
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
    color: ${({ theme }) => theme.colors.white};
    div:nth-child(3) {
      span {
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

export const StyledHeader = styled.div`
  padding: 0.8rem;
`

export const KeyWords = styled.div`
  display: flex;
  padding: 0.8rem;
  span {
    background: ${props => props.theme.colors.common};
    color: ${props => props.theme.colors.white};
    padding: 0.4rem;
    margin: 0 0.3rem;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
  }
  @media (max-width: 900px) {
    margin: 1rem 0;
  }
`

export const Description = styled.div`
  padding: 0.8rem;
  width: 40%;
  p {
    font-size: 1rem;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`
