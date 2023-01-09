import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import Head from 'next/head'
import '../styles/globals.css'

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      {/* <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
      </Head> */}
      <SessionProvider session={session} refetchOnWindowFocus={false}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default App;