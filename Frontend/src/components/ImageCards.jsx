import React from 'react'

function ImageCards({item}) {
    return (
        <>
            <div className="bg-base-100 image-full w-80 shadow-xl h-fit m-6">
                <figure >
                    <img
                    className="h-80 w-80"
                        src={item.link}
                        alt="Loading"  />
                </figure>
                <div className="Container flex justify-evenly m-2">
                    <div className="badge badge-info gap-2"></div>
                    <div className="badge badge-success gap-2">
                        Share
                    </div>
                    <div className="badge badge-error gap-2 justify-self-end">
                        Like
                    </div>
                    <div className="badge badge-warning gap-2 justify-self-end"></div>
                </div>
            </div>

        </>
    )
}

export default ImageCards