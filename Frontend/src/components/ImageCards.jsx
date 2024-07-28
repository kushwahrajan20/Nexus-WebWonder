import React from 'react'

import { FcBookmark, FcLike, FcComments, FcShare } from "react-icons/fc";


function ImageCards({ item }) {

    const handleclick = () => {
        window.open(item.link, "_blank")
    }

    return (
        <>
            <div className="bg-base-100 image-full w-[23rem] h-96  shadow-xl mt-6 mb-10 mx-auto"
                onClick={() => handleclick()}
            >
                <figure >
                    <img
                        className="h-80 w-full"
                        src={item.link}
                        alt="Loading" />
                </figure>
                {/* <div className="Container flex justify-evenly m-2">
                    <div className="badge badge-info gap-2"></div>
                    <div className="badge badge-success gap-2">
                        Share
                    </div>
                    <div className="badge badge-error gap-2 justify-self-end">
                        Like
                    </div>
                    <div className="badge badge-warning gap-2 justify-self-end"></div>
                </div> */}
                <div className="Container flex justify-evenly m-2">
                    <div >
                        <FcLike className="h-6 w-6 mx-auto" />
                        Like
                    </div>
                    <div>
                        <FcComments className="h-6 w-6 mx-auto" />
                        Comment
                    </div>
                    <div>
                        <FcShare className="h-6 w-6 mx-auto " />
                        Share
                    </div>
                    <div>
                        <FcBookmark className="h-6 w-6 mx-auto" />
                        Bookmark
                    </div>
                </div>
            </div>

        </>
    )
}

export default ImageCards