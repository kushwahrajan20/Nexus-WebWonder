import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div>
                <div className="card bg-base-100 image-full w-96 shadow-2xl">
                    <figure>
                        <img
                            src={item.image}
                            alt="Image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.details}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline">Read</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;