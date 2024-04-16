import React from 'react'
import Hero from '../navbar/hero/Hero'
import Search from '../search/Search'
import Selects from '../selects/Selects'
import ImgCarousel from '../carousel/ImgCarousel'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
      <Hero />

      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </>
  )
}

export default Home
