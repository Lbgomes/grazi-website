import GlobalStyles from '../styles/globals'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from "../styles/theme";
import { ProSidebarProvider } from 'react-pro-sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
