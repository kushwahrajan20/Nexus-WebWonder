import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Communitypost from './Communitypost'
import CommunityInsta from './CommunityInsta';

function CommunityLab() {

  

  const [copost, setCopost] = useState([])
  useEffect(() => {
    const getCopost = async () => {
      try {
        const res = await axios.get("http://localhost:4001/community/show_copost");
        console.log(res.data);
        setCopost(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getCopost();
  }, [])

  const [isVisible, setIsVisible] = useState(false);


  return (
    <>
      <div className="max-w-screen-2xl container mt-20 mx-auto md:px-20 px-4">
        <div className="w-auto h-auto fixed right-7 bottom-10 z-50 hover:scale-105"
          onClick={() => setIsVisible(!isVisible)}>
          <div className="flex-1 h-full">
            <div className="flex items-center justify-center flex-1 h-full p-2 bg-green-500 text-white shadow rounded-lg">
              <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className={isVisible ? 'block' : 'hidden'}>

            <Communitypost />
          </div>
          {copost.map((item) => (<CommunityInsta item={item} key={item._id} />))}
        </div>
      </div>
    </>
  )
}

export default CommunityLab