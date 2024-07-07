import React from 'react'

import CardsBlog from './CardsBlog'
import list from '../../public/blogs.json'

function BlogLab() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:flex-row my-7 mt-10 grid grid-cols-1 md:grid-cols-3 ">
                {
                    list.map((item) => (<CardsBlog key={item.id} item={item} />))
                }
            </div>
        </>
    )
}

export default BlogLab