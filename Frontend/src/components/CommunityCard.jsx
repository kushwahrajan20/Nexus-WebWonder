import React from 'react'

function CommunityCard({item}) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl mx-auto my-5">
        <figure className=''>
          <img
            className='w-11/12 h-48 object-fill'
            src={item.image}
            alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {item.title}
          </h2>
          <p className='h-40 overflow-y-auto no-scrollbar'>{item.details}</p>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">#{item.tag1}</div>
            <div className="badge badge-outline">#{item.tag2}</div>
            <div className="badge badge-outline">#{item.tag3}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityCard