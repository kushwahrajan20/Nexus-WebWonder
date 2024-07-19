import React from 'react'
import EdupointBooks from './EdupointBooks'
import list1 from "../../public/EduBook.json"
import EdupointVideo from './EdupointVideo'
function EdupointLab() {

    return (
        <>
            <div className='max-w-screen-2xl container outline-2 mx-auto md:px-20 px-4 mt-20 mb-10'>
                <div className="mockup-browser border-green-600 border">
                    <div className="mockup-browser-toolbar">
                        <div className="input border-green-600 border">https://forestry/edupoint/books</div>
                    </div>
                    <div className="border-green-600 border-t px-4">
                        <div className='grid grid-cols-1 md:grid-cols-4 h-96 overflow-y-auto no-scrollbar'>
                            {
                                list1.map((item) => (<EdupointBooks key={item.id} item={item} />))
                            }
                        </div>
                    </div>
                </div>
                
                <div className="mockup-browser border-green-600 border mt-14">
                    <div className="mockup-browser-toolbar">
                        <div className="input border-green-600 border">https://forestry/edupoint/videos</div>
                    </div>
                    <div className="border-green-600 border-t px-4">
                        <div className='grid grid-cols-1 md:grid-cols-2 h-screen overflow-y-auto no-scrollbar '>
                            <EdupointVideo/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EdupointLab