import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import Navbar from '../styled/navbar/Navbar'
import Globalstyles from '../../styles/Globalstyles'

interface P {
  children: React.ReactNode
}

const Layout: React.FC<P> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <Navbar />
      <main className="MainApp">{children}</main>
    </ThemeProvider>
  )
}
export default Layout
