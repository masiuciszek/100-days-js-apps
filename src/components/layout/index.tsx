import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import Navbar from '../styled/navbar/Navbar'
import Globalstyles from '../../styles/Globalstyles'

interface P {
  children: React.ReactNode
}
const Main = styled.main`
  flex-grow: 1 auto;
`

export const Page = styled.div`
  max-width: 900px;
  margin: 2rem auto;
`

const Layout: React.FC<P> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <Navbar />
      <Main className="MainApp">{children}</Main>
    </ThemeProvider>
  )
}
export default Layout
