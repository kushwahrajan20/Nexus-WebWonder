import React from 'react'

function EdupointEncyclopedia({ item }) {

    const handleClick = () => {
        window.open(item.link, '_blank');
    };

    return (
        <>

            <div className='mx-auto my-7'>
                <div className="h-80 border-2 border-black rounded-md group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-80 w-64 rounded-md">
                        <img className="h-full w-full  object-fill transition-transform duration-500 group-hover:scale-125" src={item.image} alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="mb-10 text-lg font-bold text-white">{item.title}</h1>
                        <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
                        <button onClick={handleClick} className="rounded-full border-2 border-white py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Read</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EdupointEncyclopedia