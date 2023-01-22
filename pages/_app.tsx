import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react'
import { Session } from 'next-auth';
import Head from 'next/head'
import { theme } from '../styles/theme'

function App({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <SessionProvider session={session} refetchOnWindowFocus={false}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChakraProvider>
    </>
  )
}

export default App;