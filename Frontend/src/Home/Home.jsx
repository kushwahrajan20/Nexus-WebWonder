import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import FreeArticle from '../components/FreeArticle'
import Footer from '../components/Footer'
import MainBanner from '../components/MainBanner'
import AnotherHome from '../components/AnotherHome'

function Home() {
    return (
        <>
            <Navbar />
            <AnotherHome/>
            <Footer />
        </>
    )
}

export default Home