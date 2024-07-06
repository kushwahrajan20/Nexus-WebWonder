import React from 'react'
import ImageCards from './ImageCards'
import list from '../../public/ArtPhoto.json'

function ArtPhotoLab() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}<span className="text-green-600">Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore stunning forest-inspired art and photography submitted by our community members!
            Discover the breathtaking work of professional artists and photographers who capture the beauty of nature.
            Learn how to share your forest-inspired art and photography with our community and get featured on our website.
            Click here for submission guidelines and terms. Showcase your talent and inspire others!
          </p>
          <button className="mt-10 border-green-600 border-2 text-green-600 px-4 py-2 rounded-md hover:bg-green-100 duration-300">Learn More</button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          {
            list.map((item) => ( <ImageCards key={item.id} item={item} /> ))
          }
        </div>
      </div>
    </>
  )
}

export default ArtPhotoLab