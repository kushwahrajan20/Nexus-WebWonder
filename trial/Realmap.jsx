import React, { useState } from 'react'

function Realmap() {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <>

            <button
                onClick={() => setIsVisible(!isVisible)}
                type="button"
                class="fixed inline-flex right-5 bottom-12 px-4 py-3 bg-green-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
            >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                {isVisible ? "View" : "Change"}
            </button>

            <div className={isVisible ? 'hidden' : 'block'}>
                <div className='w-screen h-[56rem] overflow-clip -mt-16'>
                    <iframe id='view_iframe' src="https://www.airpano.com/360photo/tibet-grand-canyon/" className='' width={1500} height={962} allowFullScreen frameborder="0"></iframe>
                </div>
            </div>

            <div className={  isVisible ? 'block' : 'hidden'}>
                <div className="justify-center items-center text-center">
                    <h1 className="mt-24 text-2xl md:text-4xl">
                        <span className="text-green-600">Your ideal job{" "}</span> awaits, start the search
                    </h1>
                </div>
                <div className='max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 mt-5'>
                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.eTODXiMmtE0Yk_roceCyPQHaE7&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/socotra_part_2/"}>
                        </div>
                        <div className='text-base'>Socotra Island, Yemen</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse2.mm.bing.net/th?id=OIP.Xp15iZ3nKy1g0E5ksUJVxwHaE7&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/nusa-penida/"}>
                        </div>
                        <div className='text-base'>Nusa Penida, Indonesia</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP._pIyWAOLFy0xB_tJgBrFsgHaE7&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/etretat-france/"}>
                        </div>
                        <div className='text-base'>Etretat, France, Europe</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.R9cXQhnkwy0klgLly00MngHaE7&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/china-avatar-2/"}>
                        </div>
                        <div className='text-base'>Zhangjiajie Forest Park</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse2.mm.bing.net/th?id=OIP.22kr41SVddiDYs_v_3q8VwHaEN&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/orenburg-shaytan-tau/"}>
                        </div>
                        <div className='text-base'>Shaytan-Tau, Russia</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse4.mm.bing.net/th?id=OIP.M5WYHu69tlMWVvgpxrKbJgHaEZ&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/kyrgyzstan/"}>
                        </div>
                        <div className='text-base'>Kyrgyzstan, Asia</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse4.mm.bing.net/th?id=OIP.acc9qgyyReEd85Ir-XA09AHaEK&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/detian-falls/"}>
                        </div>
                        <div className='text-base'>Detian Falls, Vietnam</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.XG8vrH1EBfmXJ91Q5WHMJAHaEq&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/tumpak-sewu-indonesia/"}>
                        </div>
                        <div className='text-base'>Tumpak Sewu Waterfall</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.pdFMJa2WFDYElkvf7RUC3wHaFj&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/china-jiuzhaigou/"}>
                        </div>
                        <div className='text-base'>National Park Jiuzhaig</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.q8fO78sDQHKJQ6JjNFpyKQHaFc&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/china-yuanyang-rice-terraces/"}>
                        </div>
                        <div className='text-base'>Yuanyang Hani Rice</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse1.mm.bing.net/th?id=OIP.WFv773qr-NBl6O38YIIS7wHaE8&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/guilin-national-park-china/"}>
                        </div>
                        <div className='text-base'>Guilin National Park</div>
                    </div>

                    <div className='text-center hover:scale-105 duration-200 border-2 m-4 py-4 border-green-600 rounded-lg'>
                        <div className='bg-[url("https://tse2.mm.bing.net/th?id=OIP.yF18Eu1DlnNHN62LyKMD1AHaE7&pid=Api&P=0&h=180")] w-60 h-40 mt-10 mx-auto text-white'
                            onClick={() => document.getElementById("view_iframe").src = "https://www.airpano.com/360photo/dominicana/"}>
                        </div>
                        <div className='text-base'>Dominican Republic </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Realmap