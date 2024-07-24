import React, { useEffect, useState } from 'react'
import CommunityCard from './CommunityCard'
import axios from 'axios'
import Communitypost from './Communitypost'

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

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

        <div className="collapse collapse-plus border-2 w-11/12 mx-auto mt-20 text-center border-green-600">
          <input type="checkbox" name="my-accordion-3"/>
          <div className="collapse-title text-xl font-medium">Create Your Post</div>
          <div className="collapse-content">
          <Communitypost />
            
          </div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 mt-7'>
          {copost.map((item) => (<CommunityCard item={item} key={item.id} />))}
        </div>
      </div>
    </>
  )
}

export default CommunityLab