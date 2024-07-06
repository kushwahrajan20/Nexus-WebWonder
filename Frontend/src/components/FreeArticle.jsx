import React from 'react'
import list from '../../public/list.json'
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function FreeArticle() {

    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // console.log(filterData)

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
                <div className="slider-container">
                    <Slider {...settings} >
                        {filterData.map((item) => (<Cards item={item} key={item.id} />))}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default FreeArticle;