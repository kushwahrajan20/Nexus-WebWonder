import React from 'react'
import Slider from "react-slick";
import FreeArticle from '../Frontend/src/components/FreeArticle';

function MainBanner() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    return (
        <>
            <div className='mt-10'>
                <div className="slider-container">
                    <Slider {...settings}>

                        {/* Slide-1 */}
                        <div className=' w-screen h-96 text-left px-3 bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1516571137133-1be29e37143a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
                            {/* <h1 className=' mt-20 max-w-2xl text-white text-6xl w-96'>"The clearest way into the Universe is through a forest wilderness."</h1> */}
                        </div>

                        {/* Slide-2 */}
                        <div className=' w-screen h-96 text-left px-3 bg-cover bg-center bg-[url("https://plus.unsplash.com/premium_photo-1687545808830-6aa3b84c103b?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
                            {/* <h1 className='mt-20 text-white text-6xl w-96'>"Forestry is the art of managing forests for timber, water, wildlife, and recreation."</h1> */}
                        </div>

                        {/* Slide-3 */}
                        <div className=' w-screen h-96 text-left px-3 bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
                            {/* <h1 className='mt-20 text-white text-6xl w-96'>"The forest is not just a collection of trees, it's a community of living beings."</h1> */}
                        </div>

                        {/* Slide-4 */}
                        <div className=' w-screen h-96 text-left px-3 bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1474835944939-50b3a279d8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
                            {/* <h1 className='mt-20 text-white text-6xl w-96'>"Forests are the lungs of the Earth, and we must keep them breathing."</h1> */}
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default MainBanner