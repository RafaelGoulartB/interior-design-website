import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import DreamHome from '../components/dream-home'
import About from '../components/about'
import Service from '../components/service'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <DreamHome />
      <About />
      <Service />
    </>
  )
}

export default Home
