import React from 'react'
import Navbar from '../components/Navbar'
import ArtPhotoLab from '../components/ArtPhotoLab'
import Footer from '../components/Footer'
import PhotoContributer from '../components/PhotoContributer'

function ArtAndPhoto() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen"> <ArtPhotoLab /> </div>
            <PhotoContributer/>
            <Footer />
        </>
    )
}

export default ArtAndPhoto