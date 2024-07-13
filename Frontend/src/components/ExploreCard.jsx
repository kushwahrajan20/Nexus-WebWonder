import React from 'react'

function ExploreCard({ item }) {
    function changeUrl() {
        document.getElementById("view360").src = item.url
    }
    return (
        <>
            <div
                onClick={() => document.getElementById("view360").src = item.url}
                className='m-2 object-cover border-2 h-36 w-32 inline-block'>
                <img className=" h-32 w-32 object-cover rounded-xl " src={item.img} alt="image" />

                <div className="text-sm">
                {item.title}
                </div>
            </div>
        </>
    )
}

export default ExploreCard