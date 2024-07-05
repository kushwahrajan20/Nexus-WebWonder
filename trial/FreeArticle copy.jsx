import React from 'react'
import list from '../Frontend/public/list.json'
import Cards from "../Frontend/src/components/Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function FreeArticle() {

    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                <h1 className="font-semibold text-x1 pb-2">Sample Article</h1>
                <p>Read some articles to increase your knowledge towards forestry.</p>
            </div>
            <div >
                <div className="slider-container">
                    <Slider {...settings} className="mb-10 p-3 w-auto">
                        {filterData.map((item)=>(<Cards item={item} key={item.id}/>))}
                    </Slider>
                </div>
            </div>
            </div>
        </>
    )
}

export default FreeArticle;