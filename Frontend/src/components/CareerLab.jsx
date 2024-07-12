import React from 'react'
import CardCareer from './CardCareer'
import list from '../../public/career.json'
import list1 from '../../public/LatestUpdate.json'
import LatestUpdate from './LatestUpdate'


function CareerLab() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20">
                <div className="justify-center items-center text-center">
                    <h1 className="mt-24 mb-10 text-2xl md:text-4xl">
                        <span className="text-green-600">Your ideal job{" "}</span> awaits, start the search
                    </h1>
                </div>
                <div className="flex w-full md:m-4">
                    <div className="hidden md:inline w-1/3 m-2 border-2 text-center border-green-600 rounded-2xl">
                        <h1 className="text-2xl m-3">
                            Latest update
                        </h1> 
                        {
                            list1.map((item) => (<LatestUpdate key={item.id} item={item} />))
                        }                       
                    </div>
                    <div className="w-full md:w-3/4 ">
                        {
                            list.map((item) => (<CardCareer key={item.id} item={item} />))
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CareerLab