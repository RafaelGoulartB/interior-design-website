import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import DreamHome from '../components/dream-home'
import About from '../components/about'
import Service from '../components/service'
import Footer from '../components/footer'
import { Divider } from '@chakra-ui/core'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <DreamHome />
      <About />
      <Service />

      <Divider mt={['10', '10', '10', '20', '56']} />
      <Footer />
    </>
  )
}

export default Home
