import React from 'react'
import Slider from "react-slick";

function Showview() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <>
            <dialog id="showview" className="modal">
                <div className="modal-box w-11/12 max-w-5xl no-scrollbar bg-transparent bg-base-300 bg-opacity-[0.5%] shadow-none mt-4">
                    <div className="mb-5 mt-7 items-center justify-center text-center font-semibold">
                        <h1 className=" text-white text-2xl md:text-4xl">Select your dream place for<span className="text-white"> Virtual tour !</span></h1>
                    </div>
                    <Slider {...settings}>
                        <div className='text-center'>
                            <div className='bg-[url("https://th.bing.com/th/id/R.3aa82c9b57ec950890487e5f973f5914?rik=nqE7%2b3sWpJ36HQ&riu=http%3a%2f%2ftravelinnate.com%2fwp-content%2fuploads%2f2016%2f09%2fSocotra-Island-7.jpg&ehk=PobDiusK6KDAZj1f6KYW%2fEoHiYr7%2bkVBSqdJ19wZxig%3d&risl=&pid=ImgRaw&r=0")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/socotra_part_2/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Socotra Island, Yemen</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://a.cdn-hotels.com/gdcs/production51/d1983/1a7e2818-045b-4fcc-973c-6d5f63a523ec.jpg")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/nusa-penida/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Nusa Penida, Indonesia</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://nl.normandie-tourisme.fr/wp-content/uploads/sites/5/wpetourisme/web2-Golf-d-Etretat---green.jpg")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/etretat-france/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Etretat, France, Europe</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://backiee.com/static/wpdb/wallpapers/1920x1080/217198.jpg")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/china-avatar-2/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Zhangjiajie Forest Park</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://www.travel4wildlife.com/wp-content/uploads/2016/10/04-kuvandik.jpg")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/orenburg-shaytan-tau/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Shaytan-Tau, Russia</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://www.nomadasaurus.com/wp-content/uploads/2019/06/Photos-of-Kyrgyzstan.jpg")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/kyrgyzstan/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Kyrgyzstan, Asia</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://backiee.com/static/wpdb/wallpapers/3840x2160/198058.jpg")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/detian-falls/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Detian Falls, Vietnam</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://triptins.com/wp-content/uploads/2019/11/Tumpak-Sewu-Waterfall.jpeg")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/tumpak-sewu-indonesia/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Tumpak Sewu Waterfall</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://th.bing.com/th/id/R.83ee3dec17d38f9cffd20408ef403ece?rik=0XplyH2BOyBy%2fQ&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2016%2f05%2fJiuzhai-Valley-National-Park-Jiuzhaigou-China-Mountain-clear-water-river-stone-pine-forest-blue.jpg&ehk=loH8Hzd1CgejxaXqkzJh%2bBo%2flQYpuGwboNuczZkZJjk%3d&risl=&pid=ImgRaw&r=0")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/china-jiuzhaigou/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>National Park Jiuzhaig</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://airpano.ru/files/360video/vr-china-yuanyang/images/image2.jpg")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/china-yuanyang-rice-terraces/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Yuanyang Hani Rice</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://nationalparks-15bc7.kxcdn.com/images/parks/guilin-lijiang/Guilin%20Li%20River%20National%20Park%20panoramic.jpg")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/guilin-national-park-china/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Guilin National Park</div>
                        </div>

                        <div className='text-center'>
                            <div className='bg-[url("https://lp-cms-production.imgix.net/2021-02/GettyRF_690648166.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=20&dpr=5")] bg-cover w-[60vw] h-[60vh] mt-4 mx-auto text-white hover:scale-105 duration-500 rounded-2xl'
                                onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/dominicana/"}>
                            </div>
                            <div className='text-white mt-4 text-lg'>Dominican Republic </div>
                        </div>
                    </Slider>
                    <div className="modal-action w-32 mx-auto mt-10">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn bg-white w-32">Visit Now</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Showview