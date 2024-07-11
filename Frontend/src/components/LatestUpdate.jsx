import React from 'react'

function LatestUpdate({item}) {
    return (
        <>
            <div>
                <div className="divider divider-success">{item.title}</div>
                <p>
                    {item.details}
                </p>
                <span
                    className="underline text-blue-500 cursor-pointer">
                    <a href={item.url}>
                        visit now
                    </a>
                </span>
            </div>
        </>
    )
}

export default LatestUpdate