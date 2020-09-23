import React from 'react'
import { AppProps } from 'next/app'
import ThemeContainer from '../context/theme/ThemeContainer'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Interior Home Design</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="description"
          content="Interior home design project made using Next.js and Chakra UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
