import React from 'react'

function ErrorPage() {
    return (
        <>
            <div class="h-screen w-screen bg-gray-50 flex items-center bg-center bg-cover bg-[url('https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg')]">
                <div class="container mx-auto  flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                    {/* <div class="w-full  lg:justify-end  mx-5 my-12">
                        <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page not found" />
                    </div> */}
                    <div class="md:mx-8 fixed md:right-16 md:mr-16 top-10 md:top-80 w-11/12 text-center md:text-white md:w-1/3">
                        <div class="text-7xl text-green-600 font-dark font-extrabold mb-5"> 404</div>
                        <div class="text-2xl md:text-3xl font-light leading-normal mb-5 ">
                            This page is currently under construction. Check back soon for updates!
                        </div>

                        <a href="/" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-green-600 hover:bg-green-700">Go Home</a>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default ErrorPage