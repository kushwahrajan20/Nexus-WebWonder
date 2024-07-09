import React from 'react'
import CardCareer from './CardCareer'
import list from '../../public/career.json'
function CareerLab() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 grid grid-cols-1 md:grid-cols-3 ">
                
                    {
                        list.map((item) => (<CardCareer key={item.id} item={item} />))
                    }
                
            </div>
        </>
    )
}

export default CareerLab