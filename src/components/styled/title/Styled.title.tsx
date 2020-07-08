/* eslint-disable @typescript-eslint/interface-name-prefix */
import styled from 'styled-components'

interface IStyledTitle {
  sizeH3?: string
  sizeH5?: string
  bg?: string
}
export const StyledTitle = styled.section<IStyledTitle>`
  padding: ${({ theme, bg }) => '2rem 0.5rem' || '1rem 0.5rem'};

  background: ${({ theme, bg }) => bg || 'none'};
  box-shadow: ${({ theme, bg }) => (bg ? theme.shadow.lightShadow : 'none')};
  color: ${({ theme, bg }) => (bg ? theme.colors.white : theme.colors.primary)};
  display: ${({ theme, bg }) => bg && 'flex'};
  justify-content: ${({ theme, bg }) => bg && 'center'};
  border-radius: ${({ theme, bg }) => bg && '1rem'};
  margin-bottom: ${({ theme, bg }) => (bg ? '1.5rem' : '0')};
  /* flex-direction: ${({ theme, bg }) => bg && 'flex'}; */
  position: relative;
  h3 {
    font-size: ${({ sizeH3 }) => sizeH3 || '2.4rem'};
    text-transform: capitalize;
    padding: ${({ theme, bg }) => '.5rem' || 'none'};
  }
  h5 {
    font-size: ${({ sizeH5 }) => sizeH5 || '1.8rem'};
  }
  .keywords{
    position: absolute;
    top: .3rem;
    right: .7rem;
    display: flex;
    li{
      font-size: 1rem;
      padding: .2rem;
      letter-spacing: .1rem;
      text-transform: capitalize;
      a{
        color: ${props => props.theme.colors.white};
      }
    }
  }
`
