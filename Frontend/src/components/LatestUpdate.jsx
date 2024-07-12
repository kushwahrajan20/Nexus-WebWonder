import React from 'react'

function LatestUpdate({item}) {
    return (
        <>
            <div className='m-2'>
                <div className="divider divider-success">{item.title}</div>
                <p>
                    {item.details}
                </p>
                <span
                    className="underline text-blue-500 cursor-pointer">
                    <a 
                    target="_blank"
                    href={item.url}>
                        visit now
                    </a>
                </span>
            </div>
        </>
    )
}

export default LatestUpdate