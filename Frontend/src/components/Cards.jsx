import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className="card w-96 border-2 border-green-600">
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline">Explore</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;