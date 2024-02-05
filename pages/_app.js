import React from 'react'
import Head from 'next/head'

import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import Nav from '../components/nav'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    
    <Nav />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
