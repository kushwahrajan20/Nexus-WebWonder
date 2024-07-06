import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import FreeArticle from '../components/FreeArticle'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <Banner />
            <FreeArticle />
            <Footer />
        </>
    )
}

export default Home