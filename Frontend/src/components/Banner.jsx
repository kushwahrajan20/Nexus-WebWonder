import React from 'react'
import banner from '../../public/animal.png'
function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold">
                            Hello, Welcome to gateway to captivating{" "}
                            <span className="text-green-600">
                                World of Forestry!!!
                            </span>
                        </h1>
                        <p>
                            Explore the beauty, importance, and magic of our planet's woodlands like never before.
                            Immerse yourself in interactive forest guides, virtual tours, & educational resources
                            that reveal the secrets of sustainable forestry and wildlife conservation. Discover the
                            wonders of forest ecosystems, meet the professionals dedicated to preserving them, and
                            join a community passionate about protecting our forests for generations to come. Let's
                            grow a deeper connection with the natural world, together.
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className="mt-6 btn btn-outline btn-success">Login</button>
                </div>
                <div className="w-full md:w-1/2 order-1 mt-14">
                    <img src={banner} className="mask mask-squircle w-10/12" alt="Forest"/>
                    
                </div>
            </div>
        </>
    )
}

export default Banner