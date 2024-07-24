import React from 'react'
import EdupointBooks from './EdupointBooks'
import list1 from "../Frontend/public/EduBook.json"
import list2 from "../Frontend/public/Edustory.json"
import list3 from "../Frontend/public/encyclopedia.json"
import EduStories from './EduStories'
import EdupointEncyclopedia from './EdupointEncyclopedia'

function EducationLab() {
    return (
        <>
            <div className='max-w-screen-2xl container outline-2 mx-auto md:px-20 px-4 mt-20 mb-10'>
                <div role="tablist" className="tabs tabs-boxed bg-white w-full">
                    <input type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab "
                        aria-label="Books " />
                    <div role="tabpanel" className="tab-content p-10">
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            {
                                list1.map((item) => (<EdupointBooks key={item.id} item={item} />))
                            }
                        </div>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Stories"
                        defaultChecked
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            {
                                list2.map((item) => (<EduStories key={item.id} item={item} />))
                            }
                        </div>
                    </div>

                    <input type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Encyclopedia" />
                    <div role="tabpanel" className="tab-content p-10">
                        <div className='grid grid-cols-1 md:grid-cols-3'>
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

export default EducationLab