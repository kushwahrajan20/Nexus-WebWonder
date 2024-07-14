import { colors } from '@mui/material'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

function ExploreLab() {


  const [typeEffect]= useTypewriter({
    words:["The Forest","The Nature","The Wildlife","The Real Paradise"],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40,
  })

  return (
    <>
      <div className=''>
        {/* Title bar */}
        <div className='h-10 mt-14 fixed  navbar bg-green-800'>
          <h1 className='text-4xl text-white mx-auto mt-2'>Virtual Tour - Explore <span className='ml-3 text-green-400'>{typeEffect}</span><span className='text-green-400'>!</span></h1>
        </div>

        {/* left button section */}
        <div className='w-44 h-screen fixed left-0 bg-white'>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.eTODXiMmtE0Yk_roceCyPQHaE7&pid=Api&P=0&h=180")] w-40 h-24 mt-16 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/socotra_part_2/"}>
            </div>
            <div className='text-sm'>Socotra Island, Yemen</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse2.mm.bing.net/th?id=OIP.Xp15iZ3nKy1g0E5ksUJVxwHaE7&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/nusa-penida/"}>
            </div>
            <div className='text-sm'>Nusa Penida, Indonesia</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP._pIyWAOLFy0xB_tJgBrFsgHaE7&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/etretat-france/"}>
            </div>
            <div className='text-sm'>Etretat, France, Europe</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.R9cXQhnkwy0klgLly00MngHaE7&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/china-avatar-2/"}>
            </div>
            <div className='text-sm'>Zhangjiajie Forest Park</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse2.mm.bing.net/th?id=OIP.22kr41SVddiDYs_v_3q8VwHaEN&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/orenburg-shaytan-tau/"}>
            </div>
            <div className='text-sm'>Shaytan-Tau, Russia</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse4.mm.bing.net/th?id=OIP.M5WYHu69tlMWVvgpxrKbJgHaEZ&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/kyrgyzstan/"}>
            </div>
            <div className='text-sm'>Kyrgyzstan, Asia</div>
          </div>

        </div>

        {/* right button section */}
        <div className='w-44 h-screen fixed right-0 bg-white'>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse4.mm.bing.net/th?id=OIP.acc9qgyyReEd85Ir-XA09AHaEK&pid=Api&P=0&h=180")] w-40 h-24 mt-16 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/detian-falls/"}>
            </div>
            <div className='text-sm'>Detian Falls, Vietnam</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.XG8vrH1EBfmXJ91Q5WHMJAHaEq&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/tumpak-sewu-indonesia/"}>
            </div>
            <div className='text-sm'>Tumpak Sewu Waterfall</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.pdFMJa2WFDYElkvf7RUC3wHaFj&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/china-jiuzhaigou/"}>
            </div>
            <div className='text-sm'>National Park Jiuzhaig</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.q8fO78sDQHKJQ6JjNFpyKQHaFc&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/china-yuanyang-rice-terraces/"}>
            </div>
            <div className='text-sm'>Yuanyang Hani Rice</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse1.mm.bing.net/th?id=OIP.WFv773qr-NBl6O38YIIS7wHaE8&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/guilin-national-park-china/"}>
            </div>
            <div className='text-sm'>Guilin National Park</div>
          </div>

          <div className='text-center transform transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl'>
            <div className='bg-[url("https://tse2.mm.bing.net/th?id=OIP.yF18Eu1DlnNHN62LyKMD1AHaE7&pid=Api&P=0&h=180")] w-40 h-24 mt-4 mx-auto text-white'
              onClick={() => document.getElementById("view360").src = "https://www.airpano.com/360photo/dominicana/"}>
            </div>
            <div className='text-sm'>Dominican Republic </div>
          </div>

        </div>
        <div className=''>
          <iframe id='view360' src="https://www.airpano.com/360photo/socotra_part_2/" width={1470} height={910} allowFullScreen frameborder="0"></iframe>
        </div>

      </div>
    </>
  )
}

export default ExploreLab