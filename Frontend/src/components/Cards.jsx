import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className="card w-72 h-60 text-center border-2 border-green-600">
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{item.title}</h2>
                    <p>{item.details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline mx-auto">Explore</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;