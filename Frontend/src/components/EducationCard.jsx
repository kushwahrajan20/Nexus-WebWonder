import React from 'react'


function EducationCard({ item }) {

    const handleClick = () => {
        window.open(item.link, '_blank');
    };

    return (
        <>
            <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-95 transition duration-500 inline-block">
                <h3 className="mb-3 text-xl font-bold text-green-600 text-left">{item.head}</h3>
                <div className="relative">
                    <img className="w-full max-w-sm rounded-xl" src={item.img} alt="Colors" />
                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
                </div>
                <h1 className="mt-4 h-12 text-gray-800 text-left text-clip text-xl font-bold cursor-pointer">{item.title}</h1>
                <div className="my-4">
                    <div className="flex space-x-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <p>{item.duration} Minutes</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <p>{item.channel}</p>
                    </div>

                    <button onClick={handleClick} className="mt-4 text-xl w-full text-white bg-green-600 py-2 rounded-xl shadow-lg">Start Watching Now</button>
                </div>
            </div>
        </>
    )
}

export default EducationCard