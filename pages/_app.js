import React from 'react'
import Head from 'next/head'

import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'

import theme from '../components/theme.js'
import { ThemeProvider } from 'theme-ui'
import Nav from '../components/nav'
import { css } from 'theme-ui'
import './global.css'
const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>

  <Nav></Nav>
  <Component
  {...pageProps}
  css={css({
    backgroundColor: '#202134 !important',
  })}
/>
  </ThemeProvider>
)

export default App
