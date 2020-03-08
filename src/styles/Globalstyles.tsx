import { createGlobalStyle, css } from 'styled-components'

export const FlexStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default createGlobalStyle`

  *::before,*::after,*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    background: ${props => props.theme.colors.white};
    line-height: 1.4;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* font-family: 'Fredoka One', cursive; */
    /* font-family: 'Bangers', cursive; */
    font-family: sans-serif;
    font-size: ${props => props.theme.appSize};
  }

  .MainApp {
    flex-grow: 1 auto;
  }


    h1,h2{
      /* font-family: 'Bangers',sans-serif; */
      font-family: sans-serif;
      text-transform: capitalize;
    }

    p {
      margin-bottom: 1.25rem;
    }

    ul,li{
      list-style: none;
    }

    a{
      text-decoration: none;
      color: ${props => props.theme.colors.primary};
    }

    h1{
      font-size: 5rem;
    }

    h2{
      font-size: 4.4rem;
    }

    h3{
      font-size: 4rem;
    }

    h4{
      font-size: 3.3rem;
    }

    h5{
      font-size: 2.8rem;
    }
`
