import React from 'react'

import { useRef } from 'react';

function CardsBlog({ item }) {

    const handleClick = () => {
        window.open(item.learn,'_blank');
    };

    return (
        <>
            <div className="w-96 m-10 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                <img className="h-48 w-96 object-cover mx-auto rounded-xl" src={item.image} alt="image" />
                <div className="p-2">
                    <h2 className="font-bold text-lg mb-2 ">{item.heading}</h2>
                    <p className="text-sm text-gray-600">{item.details}</p>
                </div>
                <div className="my-2 mx-28">
                    <button onClick={handleClick} className="mt-10 border-green-600 border-2 text-green-600 px-4 py-2 rounded-md hover:bg-green-100 duration-300">Learn More</button>
                </div>
            </div>
        </>
    )
}

export default CardsBlog