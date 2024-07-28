import React from 'react'
import FormCareer from './FormCareer'

function CardCareer({ item }) {
    return (
        <>
            <div className="collapse border-2 border-green-600 mx-2 my-3">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-lg font-medium flex">
                    {item.title}
                </div>
                <div className="collapse-content w-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 object-cover">
                        <img className="h-96 w-96 object-cover md:m-4 rounded-xl" src={item.img} alt="image" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className='m-3'><span className='underline '>Salary</span> : <div>{item.salary}</div></p>
                        <p className='m-3'><span className='underline '>Qualification</span> : <div>{item.qualification}</div></p>
                        <p className='m-3'><span className='underline '>Skill</span> : <div>{item.skill}</div></p>
                        <div className='m-3'>
                            <span className='underline '>Primary duties</span> :
                            <ul>{item.d1}</ul>
                            <ul>{item.d2}</ul>
                            <ul>{item.d3}</ul>
                            <ul>{item.d4}</ul>
                            <ul>{item.d5}</ul>
                        </div>
                        <div className='ml-2'>
                        <button className="bg-green-600 text-white rounded-md px-3 py-1.5 hover:bg-green-700 duration-2000"
                        onClick={() => document.getElementById("my_modal_4").showModal()}>
                            Apply now
                        </button>
                        </div>
                        <FormCareer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCareer