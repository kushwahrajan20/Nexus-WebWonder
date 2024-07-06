import React from 'react'
import { Component } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PhotoContributer() {

    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }

    return (
        <>
            <div className="slider-container max-w-screen-2xl container mx-auto md:px-20 px-4 my-8">
                <Slider {...settings} >
                    <div className="avatar  text-center">
                        <div className="ring-primary ring-offset-base-100 w-44 mx-auto my-2 rounded-full ring ring-offset-2">
                            <img src="https://s.yimg.com/fz/api/res/1.2/q739cFXex9C3ZS6ORZjSDw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTg0/https://s.yimg.com/zb/imgv1/86e55f17-b98e-3dc5-a4ad-19f2fe372779/t_500x300" />
                        </div>
                        <p>Art Wolfe</p>
                    </div>
                    <div className="avatar  text-center">
                        <div className="ring-primary ring-offset-base-100 w-44 mx-auto my-2 rounded-full ring ring-offset-2">
                            <img src="https://s.yimg.com/fz/api/res/1.2/Fbj5jhpLDeBtK_yq1y4.wg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjAy/https://s.yimg.com/zb/imgv1/c5e0d8e6-a43e-3bdd-a4dd-388f4e5b74ab/t_500x300" />
                        </div>
                        <p>Frans Lanting</p>
                    </div>
                    <div className="avatar  text-center">
                        <div className="ring-primary ring-offset-base-100 w-44 mx-auto my-2 rounded-full ring ring-offset-2">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.lBNOwAZ4L90by3qTVQTQBAHaE8&pid=Api&P=0&h=180" />
                        </div>
                        <p>Cristina Mittermeier</p>
                    </div>
                    <div className="avatar  text-center">
                        <div className="ring-primary ring-offset-base-100 w-44 mx-auto my-2 rounded-full ring ring-offset-2">
                            <img src="https://s.yimg.com/fz/api/res/1.2/CJ_3G7mapb0Dq58wEIXbyw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjQ2/https://s.yimg.com/zb/imgv1/409c226a-dbe5-349d-bd15-fff5a13fb53c/t_500x300" />
                        </div>
                        <p>Paul Nicklen</p>
                    </div>
                    <div className="avatar  text-center">
                        <div className="ring-primary ring-offset-base-100 w-44 mx-auto my-2 rounded-full ring ring-offset-2">
                            <img src="https://s.yimg.com/fz/api/res/1.2/82l11_qI2133ulUoPTxdSQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTgy/https://s.yimg.com/zb/imgv1/b230f36b-9749-3276-93ef-ea2f38ed7223/t_500x300" />
                        </div>
                        <p>James Nachtwey</p>
                    </div>
                    <div className="avatar  text-center">
                        <div className="ring-primary ring-offset-base-100 w-44 mx-auto my-2 rounded-full ring ring-offset-2">
                            <img src="https://s.yimg.com/fz/api/res/1.2/Ev3mOL74DzC3ezFaWs.XHw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7f01b629-4fcf-3442-84bf-93a5993f5200/t_500x300" />
                        </div>
                        <p>Steve McCurry</p>
                    </div>
                    <div className="avatar  text-center">
                        <div className="ring-primary ring-offset-base-100 w-44 mx-auto my-2 rounded-full ring ring-offset-2">
                            <img src="https://thumbs.dreamstime.com/b/american-photojournalist-national-geographic-magazine-ami-vitale-contributes-panel-discussion-women-130463138.jpg" />
                        </div>
                        <p>Ami Vitale</p>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default PhotoContributer