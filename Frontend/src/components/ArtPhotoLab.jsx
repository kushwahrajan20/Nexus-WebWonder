import React, { useState } from 'react'
import ImageCards from './ImageCards'
import file from '../../public/ArtPhoto.json'

function ArtPhotoLab() {

  const [list, setList] = useState(file)





  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* <div className="mt-28 items-center justify-center text-center">
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


        </div> */}

        {/* category section */}
       
        <div className="flex overflow-x-auto space-x-5 mt-[4.5rem] no-scrollbar">
          {/* category-1 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.title === "None"))}
              className='indicator bg-cover bg-[url("https://th.bing.com/th/id/R.8b9fdb7898687ca7e6314ec5a99d66c0?rik=K1%2fCpQfnoW8FwQ&riu=http%3a%2f%2fwww.sarahainsworthblog.com%2fwp-content%2fuploads%2f2010%2f08%2fgrid-photo-collage-nature-architecture006.jpg&ehk=EAlatobQTdx%2bvcAjV2kqPPvEExx8dNBWiyL%2b5q7g9LM%3d&risl=&pid=ImgRaw&r=0")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-4 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
                All
              </span>
            </div>
          </section>
          {/* category-2 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Sculpture"))}
              className='indicator bg-cover bg-[url("https://i.pinimg.com/originals/24/f7/91/24f791627885c6e26218cefea949f8a6.jpg")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-3 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
              Sculpture
              </span>
            </div>
          </section>
          {/* category-3 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Art"))}
              className='indicator bg-cover bg-[url("https://th.bing.com/th/id/OIP.ECUn67Aw4hRfPiKh8JSbYQHaJL?rs=1&pid=ImgDetMain")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-5 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
                Art
              </span>
            </div>
          </section>
          {/* category-4 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Forest"))}
              className='indicator bg-cover bg-[url("https://th.bing.com/th/id/OIP.yX6P-re2TCRG7pbwS_W6UAHaE9?rs=1&pid=ImgDetMain")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-2 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
                Forest
              </span>
            </div>
          </section>
          {/* category-5 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Wildlife"))}
              className='indicator bg-cover bg-[url("https://1.bp.blogspot.com/-Mky2yqrCaxg/WeVmQLEXNzI/AAAAAAAAHBg/E0WzuvRYImEjMWc4qbB4UMxMRKoVqusIACLcBGAs/s1600/rahmat-3.jpg")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base  bg-gradient-to-r from-green-600 via-green-700 to-green-600">
                Wildlife
              </span>
            </div>
          </section>
          {/* category-6 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Aerial"))}
              className='indicator bg-cover bg-[url("https://wallup.net/wp-content/uploads/2016/05/24/367051-photography-nature-landscape-aerial_view-mountain_pass-field-pond-village-morning-sunlight-sun_rays-mist-South_Africa.jpg")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base  bg-gradient-to-r from-green-600 via-green-700 to-green-600">
                Aerial
              </span>
            </div>
          </section>
          {/* category-7 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Animal"))}
              className='indicator bg-cover bg-[url("https://w7.pngwing.com/pngs/407/328/png-transparent-cartoon-animal-jungle-jungle-grass-fauna-wildlife-thumbnail.png")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base  bg-gradient-to-r from-green-600 via-green-700 to-green-600">
                Animal
              </span>
            </div>
          </section>
          {/* category-8 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "River"))}
              className='indicator bg-cover bg-[url("https://th.bing.com/th/id/R.51b3177a60187e128658e748ff2b68f7?rik=NGJT6n8uQpz7pA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f167953-nature-landscape-river-trees-forest-clouds-hill-long_exposure-Colorado-USA-flowers-mountain.jpg&ehk=7k%2biOV%2fwfxwcKxO%2bdlLxsCZVjXIvZVYhc0nCa%2fGrXPY%3d&risl=&pid=ImgRaw&r=0")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-3 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
                River
              </span>
            </div>
          </section>
          {/* category-9 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Texture"))}
              className='indicator bg-cover bg-[url("https://i.pinimg.com/736x/7e/c8/5f/7ec85ff0465f9ba6a84d3735a80580c4.jpg")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-3 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
              Texture
              </span>
            </div>
          </section>
          {/* category-10 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Painting"))}
              className='indicator bg-cover bg-[url("https://wallpaperaccess.com/full/2551689.jpg")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-2 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
              Painting
              </span>
            </div>
          </section>
           {/* category-11 */}
           <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Rain"))}
              className='indicator bg-center bg-cover bg-[url("https://wallpapercave.com/wp/wp6338460.jpg")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-4 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
                Rain
              </span>
            </div>
          </section>
          {/* category-12 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Tree"))}
              className='indicator bg-center bg-cover bg-[url("https://th.bing.com/th/id/OIP.kUnvjeRtJXNNlij27xd_4AAAAA?rs=1&pid=ImgDetMain")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-4 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
                Tree
              </span>
            </div>
          </section>
          {/* category-13 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Glasswork"))}
              className='indicator bg-cover bg-[url("https://th.bing.com/th/id/OIP.3VK_cCHhZmxZDfbjMVd0uQHaHq?rs=1&pid=ImgDetMain")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base bg-gradient-to-r from-green-600 via-green-700 to-green-600">
              Glasswork
              </span>
            </div>
          </section>
          {/* category-14 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "Nature"))}
              className='indicator bg-cover bg-[url("https://th.bing.com/th/id/OIP.tOeKOs6JjPexVH80gKmk1QHaEo?rs=1&pid=ImgDetMain")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-2 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
              Nature
              </span>
            </div>
          </section>
          {/* category-15 */}
          <section>
            <div
              onClick={() => setList(file.filter((data) => data.category === "DigitalArt"))}
              className='indicator bg-cover bg-[url("https://i.pinimg.com/originals/f1/02/e3/f102e3a28105ef6b19bfb40c3e2083ce.png")] 
            border-4 outline-3 outline outline-green-600 border-white reen-600 rounded-full h-24 w-24 m-2 px-3 hover:scale-110 duration-500'>
              <span className="indicator-item indicator-bottom indicator-center badge badge-success text-white text-base px-2 bg-gradient-to-r from-green-600 via-green-700 to-green-600">
              DigitalArt
              </span>
            </div>
          </section>
        </div>

          <hr className='mt-3'/>
        {/* image section */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen overflow-y-auto">
          {
            list.map((item) => (<ImageCards key={item.id} item={item} />))
          }
        </div>
      </div>
    </>
  )
}

export default ArtPhotoLab