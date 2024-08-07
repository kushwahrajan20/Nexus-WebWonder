import React from 'react'

import { useRef } from 'react';

function CardsBlog({ item }) {

    const handleClick = () => {
        window.open(item.learn, '_blank');
    };

    return (
        <>
            <div className="md:w-96 w-fit mx-auto md:my-7 my-3 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <img className="h-48 w-96 object-cover mx-auto rounded-xl" src={item.image} alt="image" />
                <div className="p-2">
                    <h2 className="font-bold text-lg mb-1 ">{item.heading}</h2>
                    <p className="text-sm text-gray-600">{item.details}</p>
                </div>
                <div className="w-full mb-2 mt-2">
                    <button
                        onClick={handleClick}
                        className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans font-bold text-green-600 transition-all hover:bg-green-600/10 active:bg-green-600/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="h-4 w-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardsBlog