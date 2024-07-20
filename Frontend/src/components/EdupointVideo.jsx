import React from 'react'

function EdupointVideo({ item }) {
    return (
        <>
            <div className=''>
                <iframe
                    width="320"
                    height="315"
                    src={item.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
        </>
    )
}

export default EdupointVideo