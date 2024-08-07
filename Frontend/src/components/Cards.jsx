import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className="mb-10 card w-[19.3rem] md:w-[21rem] h-60 text-center border-2 border-green-600">
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{item.title}</h2>
                    <p>{item.details}</p>
                    <div className="card-actions justify-end">
                        <a href={item.category} className="btn btn-outline mx-auto">Explore</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;