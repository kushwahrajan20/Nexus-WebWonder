import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

function ClientSay() {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }

    return (
        <>
            <div className="slider-container max-w-screen-2xl container mx-auto md:px-20 px-4 my-12">
                <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">What clients saying</h1>

                <div class="mx-auto mt-6 flex justify-center">
                    <span class="inline-block h-1 w-40 rounded-full bg-green-500"></span>
                    <span class="mx-1 inline-block h-1 w-3 rounded-full bg-green-500"></span>
                    <span class="inline-block h-1 w-1 rounded-full bg-green-500"></span>
                </div>

                <div className="slider-container w-full flex">
                    <div className='w-1/12'>
                        <button onClick={previous} class=" hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <Slider {...settings} ref={slider => {sliderRef = slider;}} className='w-10/12' >
                        {/* contributor-1 */}
                        <section class="bg-white dark:bg-gray-900">
                            <div class="container mx-auto px-6">

                                <div class="mx-auto mt-16 flex max-w-6xl items-start">


                                    <div>
                                        <p class="flex items-center text-center text-gray-500 lg:mx-8">Acclaimed wildlife photographer capturing intimate big cat portraits, working with National Geographic, and winning numerous awards for his conservation-focused work. His photography highlights the beauty and vulnerability of endangered species, inspiring action to protect them. With a career spanning over 20 years, Winter's work has been featured in various publications and exhibitions, cementing his reputation as a leading wildlife photographer.
                                        </p>

                                        <div class="mt-8 flex flex-col items-center justify-center">
                                            <img class="h-14 w-14 rounded-full object-cover" src="https://metrophiladelphia.com/wp-content/uploads/2018/10/steve_winter_main.jpg" alt="" />

                                            <div class="mt-4 text-center">
                                                <h1 class="font-semibold text-gray-800 dark:text-white">Steve Winter</h1>
                                                <span class="text-sm text-gray-500 dark:text-gray-400">Wildlife Photographer</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                        {/* contributor-2 */}
                        <section class="bg-white dark:bg-gray-900">
                            <div class="container mx-auto px-6">

                                <div class="mx-auto mt-16 flex max-w-6xl items-start">


                                    <div>
                                        <p class="flex items-center text-center text-gray-500 lg:mx-8">Renowned Canadian wildlife artist and naturalist creating realistic animal depictions, publishing in National Geographic, and inspiring conservation through his art. Bateman's work explores the intricate relationships between species and their habitats, promoting a deeper understanding of the natural world. With a career spanning over 50 years, Bateman has become a household name, using his art to advocate for environmental stewardship and conservation.
                                        </p>

                                        <div class="mt-8 flex flex-col items-center justify-center">
                                            <img class="h-14 w-14 rounded-full object-cover" src="https://thenarwhal.ca/wp-content/uploads/2020/05/2015-Bateman-cover-Life-Sketches1-scaled-e1590255032837-1024x1146.jpg" alt="" />

                                            <div class="mt-4 text-center">
                                                <h1 class="font-semibold text-gray-800 dark:text-white">Robert Bateman</h1>
                                                <span class="text-sm text-gray-500 dark:text-gray-400">Wildlife Artist
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                        {/* contributor-3 */}
                        <section class="bg-white dark:bg-gray-900">
                            <div class="container mx-auto px-6">

                                <div class="mx-auto mt-16 flex max-w-6xl items-start">


                                    <div>
                                        <p class="flex items-center text-center text-gray-500 lg:mx-8">Mexican marine biologist and photographer promoting ocean conservation through her work with National Geographic, SeaLegacy Collective, and stunning underwater images. Mittermeier's photography reveals the beauty and importance of marine ecosystems, highlighting the impact of human actions on these fragile environments. As a leading voice in ocean conservation, Mittermeier uses her platform to advocate for policy change and inspire individual action.
                                        </p>

                                        <div class="mt-8 flex flex-col items-center justify-center">
                                            <img class="h-14 w-14 rounded-full object-cover" src="https://alchetron.com/cdn/cristina-mittermeier-adcb1292-0c66-4c4e-a719-a714fd0079e-resize-750.jpeg" alt="" />

                                            <div class="mt-4 text-center">
                                                <h1 class="font-semibold text-gray-800 dark:text-white">Cristina Mittermeier</h1>
                                                <span class="text-sm text-gray-500 dark:text-gray-400">Marine Biologist and Photographer</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                        {/* contributor-4 */}
                        <section class="bg-white dark:bg-gray-900">
                            <div class="container mx-auto px-6">

                                <div class="mx-auto mt-16 flex max-w-6xl items-start">


                                    <div>
                                        <p class="flex items-center text-center text-gray-500 lg:mx-8">Award-winning Canadian wildlife photographer and marine biologist capturing breathtaking Arctic and oceanic images, working with National Geographic, and advocating for conservation. Nicklen's work highlights the impact of climate change on fragile ecosystems and the species that inhabit them. With a career spanning over 20 years, Nicklen has become a leading voice in conservation photography, using his platform to raise awareness and inspire action.
                                        </p>

                                        <div class="mt-8 flex flex-col items-center justify-center">
                                            <img class="h-14 w-14 rounded-full object-cover" src="https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1675214-TC-252863-web-Paul-Nicklen.jpg;w=960" alt="" />

                                            <div class="mt-4 text-center">
                                                <h1 class="font-semibold text-gray-800 dark:text-white">Paul Nicklen</h1>
                                                <span class="text-sm text-gray-500 dark:text-gray-400">Wildlife Photographer</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                        {/* contributor-5 */}
                        <section class="bg-white dark:bg-gray-900">
                            <div class="container mx-auto px-6">

                                <div class="mx-auto mt-16 flex max-w-6xl items-start">


                                    <div>
                                        <p class="flex items-center text-center text-gray-500 lg:mx-8">American wildlife artist and illustrator creating vibrant, conservation-focused paintings of birds, mammals, and ecosystems, inspiring environmental awareness through her art. Skinner's work explores the intricate relationships between species and their habitats, highlighting the importance of preserving biodiversity. With a passion for education and outreach, Skinner uses her art to engage audiences and promote environmental stewardship, inspiring a new generation of conservationists.</p>

                                        <div class="mt-8 flex flex-col items-center justify-center">
                                            <img class="h-14 w-14 rounded-full object-cover" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/editorial/profiles/editors/Becca-Skinner/headshot.jpg.rend.hgtvcom.616.462.suffix/1616435042058.jpeg" alt="" />

                                            <div class="mt-4 text-center">
                                                <h1 class="font-semibold text-gray-800 dark:text-white">Becca Skinner</h1>
                                                <span class="text-sm text-gray-500 dark:text-gray-400">Wildlife Artist
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>

                    </Slider>
                    <div className='w-1/12'>
                        <button onClick={next} class="ml-auto hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientSay