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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
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