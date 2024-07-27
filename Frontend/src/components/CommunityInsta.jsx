import React from 'react'

function CommunityInsta({ item }) {
    return (
        <>

            <div className=" bg-white border-gray-300 rounded-lg w-80 md:w-96 border mx-auto mb-14  transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                <div className="grid grid-cols-6 items-center p-3 border-b border-b-gray-300">

                    <div className="rounded-full  w-9 h-9 text-3xl outline text-center">
                       {item.u}
                    </div>

                    <div className="col-span-4 text-sm font-semibold">
                        {item.user}
                    </div>

                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </div>

                </div>

                <div>
                    <img src={item.image} className='h-64 w-full' />
                </div>

                <div className="flex flex-col p-4 gap-3">

                    <div className="flex flex-row gap-3">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>

                    </div>


                    <div className="text-sm h-36 overflow-y-auto no-scrollbar">
                        <div className="font-semibold text-base">{item.title}</div> {item.details}
                    </div>

                    <div className="text-blue-500 text-sm overflow-x-clip">
                       #{item.tag1} <span>{" "}</span> 
                       #{item.tag2} <span>{" "}</span> 
                       #{item.tag3} <span>{" "}</span> 
                    </div>

                   

                </div>

            </div>

        </>
    )
}

export default CommunityInsta