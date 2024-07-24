import React from 'react'
import EducationCard from './EducationCard'
import Slider from "react-slick";
import list from '../../public/EducationVideo.json'


function Education() {

  const filterData1 = list.filter((data) => data.category === "category-1");
  const filterData2 = list.filter((data) => data.category === "category-2");
  const filterData3 = list.filter((data) => data.category === "category-3");
  const filterData4 = list.filter((data) => data.category === "category-4");

  console.log(filterData1)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
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

  return (
    <>
      <div className='max-w-screen-2xl container outline-2 mx-auto md:px-20 px-4 mt-24 mb-10 text-center'>
        <div>
          <h2 class="mt-4 mb-4 text-xl text-gray-900 font-bold md:text-3xl">Land Use and Related Best Management Practices</h2>
          <Slider {...settings}>
            {filterData1.map((item) => (<EducationCard item={item} key={item.id} />))}
          </Slider>
        </div>

        <div className='mt-14'>
          <h2 class="mt-4 mb-4 text-xl text-gray-900 font-bold md:text-3xl">Wildlife and Biodiversity</h2>
          <Slider {...settings}>
            {filterData2.map((item) => (<EducationCard item={item} key={item.id} />))}
          </Slider>
        </div>

        <div className='mt-14'>
          <h2 class="mt-4 mb-4 text-xl text-gray-900 font-bold md:text-3xl">Documentry on Wildlife and Forest</h2>
        <Slider {...settings}>
          {filterData4.map((item) => (<EducationCard item={item} key={item.id} />))}
        </Slider>
        </div>

        <div className='mt-14'>
          <h2 class="mt-4 mb-4 text-xl text-gray-900 font-bold md:text-3xl">Conservation and Restoration</h2>
          <Slider {...settings}>
            {filterData3.map((item) => (<EducationCard item={item} key={item.id} />))}
          </Slider>
        </div>

       
      </div>
    </>
  )
}

export default Education