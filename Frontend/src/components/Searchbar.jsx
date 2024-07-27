import React, { useState } from 'react'
import data from '../../public/searchbar.json'
import { FaArrowTrendUp } from "react-icons/fa6";
function Searchbar() {

    const [value, setValue] = useState('');

    const onchange = (event) => {
        setValue(event.target.value);
    }

    const onsearch = (searchTerm) => {
        setValue(searchTerm);
        console.log('search', searchTerm);
    }

   

    return (
        <>
            <label className="px-3 py-2 rounded-md flex items-center gap-2">
                <input type="text" value={value} onChange={onchange} className="grow outline-none bg-transparent" placeholder="Search" />

                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </button>
            </label>
            <div className='fixed w-60'>
                {data.filter(item=>{
                    const searchTerm = value.toLowerCase();
                    const tag = item.tag.toLowerCase();

                    return searchTerm && tag.startsWith(searchTerm) && tag!==searchTerm;
                }).slice(0,10)
                .map((item) => (<div key={item.id} className='dropdown-content bg-base-100 px-3 cursor-pointer'>
                    <div className='inline-flex' onClick={()=>onsearch(item.tag)}>   
                    <FaArrowTrendUp /><div className='ml-2'>{item.tag} </div>
                    </div>
                </div>)
                )}
            </div>
        </>
    )
}

export default Searchbar