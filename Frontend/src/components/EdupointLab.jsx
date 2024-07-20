import React from 'react'
import EdupointBooks from './EdupointBooks'
import list1 from "../../public/EduBook.json"
import list2 from "../../public/Edustory.json"
import list3 from "../../public/encyclopedia.json"
import EduStories from './EduStories'
import EdupointEncyclopedia from './EdupointEncyclopedia'

function EdupointLab() {

    return (
        <>
            <div className='max-w-screen-2xl container outline-2 mx-auto md:px-20 px-4 mt-20 mb-10'>
                <div className="mockup-browser bg-green-200 border-green-600 border">
                    <div className="mockup-browser-toolbar ">
                        <div className="input border-green-600 border">Forestry Bookstore</div>
                    </div>
                    <div className="border-green-600 bg-white border-t px-4">
                        <div className='grid grid-cols-1 md:grid-cols-4 h-96 overflow-y-auto no-scrollbar'>
                            {
                                list1.map((item) => (<EdupointBooks key={item.id} item={item} />))
                            }
                        </div>
                    </div>
                </div>
                <div className="mockup-browser bg-green-200 border-green-600 border mt-10">
                    <div className="mockup-browser-toolbar">
                        <div className="input border-green-600 border">Forest Conservation Stories</div>
                    </div>
                    <div className="border-green-600 bg-white border-t px-4">
                        <div className='grid grid-cols-1 md:grid-cols-4 h-96 overflow-y-auto no-scrollbar'>
                        {
                            list2.map((item) => (<EduStories key={item.id} item={item} />))
                        }
                        </div>
                    </div>
                </div>
                <div className="mockup-browser bg-green-200 border-green-600 border mt-10">
                    <div className="mockup-browser-toolbar">
                        <div className="input border-green-600 border">Forestry Encyclopedia Articles</div>
                    </div>
                    <div className="border-green-600 bg-white border-t px-4">
                        <div className='grid grid-cols-1 md:grid-cols-4 h-96 overflow-y-auto no-scrollbar'>
                        {
                            list3.map((item) => (<EdupointEncyclopedia key={item.id} item={item} />))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EdupointLab