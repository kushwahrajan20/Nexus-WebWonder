import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import FreeArticle from './components/FreeArticle'
import Footer from './components/Footer'
import Carousel from './components/Carousel'


function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Banner />
      <FreeArticle />
      <Footer/>
    </>
  )
}

export default App