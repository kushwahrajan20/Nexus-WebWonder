import React from 'react'
import FreeArticle from './FreeArticle';
import ClientSay from './ClientSay';
import { Link } from "react-router-dom";
import { useAuth } from '../Context/AuthProvider';

function AnotherHome() {

    const [authUser, setAuthUser] = useAuth()

    return (
        <>
            <div className='mt-12'>
                <div className="px-6 py-16 h-screen text-center rounded-md bg-top bg-cover bg-[url('https://images.unsplash.com/photo-1526004666140-1863a31e024f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">

                    <div className="mx-auto max-w-lg p-7 mt-44 rounded-md bg-white bg-opacity-80">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-5xl">Welcome to world of forestry!</h1>
                        <p className="mt-6 text-gray-700 dark:text-gray-300">
                            Immerse yourself in interactive forest guides, virtual tours, and educational resources
                            that reveal the secrets of sustainable forestry and wildlife conservation.
                        </p>
                        {authUser ? <div className='mt-6 '>
                            <Link to='/Explore' className=" rounded-lg bg-green-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-green-700 focus:outline-none lg:mx-0 lg:w-auto">Explore more</Link>
                        </div> :
                            <div className='mt-6'>
                                <Link to='/Signup' className=" rounded-lg bg-green-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-green-700 focus:outline-none lg:mx-0 lg:w-auto">Subscribe Now</Link>
                            </div>}
                    </div>
                </div>


                {/* Features */}
                <section className="bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6 py-10">
                        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Latest Features</h1>

                        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">Let's grow a deeper connection with the natural world, together.</p>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
                            <div className='hover:scale-95 duration-300'>
                                <img className="h-96 w-full rounded-lg object-cover " src="https://img.freepik.com/premium-photo/fantasy-floating-island-with-mountains-trees-animals-green-grass-isolated-with-clouds_667286-71.jpg?w=900" alt="" />
                                <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Nature's beauty through lens</h2>
                                <a href='/ArtAndPhoto' className="mt-2 text-lg uppercase tracking-wider text-green-500 dark:text-blue-400">Art&Photo</a>
                            </div>

                            <div className='hover:scale-95 duration-300'>
                                <img className="h-96 w-full rounded-lg object-cover " src="https://media.istockphoto.com/id/639519370/photo/man-using-vr-headset.jpg?s=612x612&w=0&k=20&c=-eQlwaO6dLnntMT3t4dIxdQ0iGnyamm0bu2rvNZgt_8=" alt="" />
                                <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Step into the forest</h2>
                                <a href='/Explore' className="mt-2 text-lg uppercase tracking-wider text-green-500 dark:text-blue-400">Virtual Tour</a>
                            </div>

                            <div className='hover:scale-95 duration-300'>
                                <img className="h-96 w-full rounded-lg object-cover " src="https://www.shleppers.com/wp-content/uploads/2016/11/about_community-feat.jpg" alt="" />
                                <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">forest is our shared passion</h2>
                                <a href='/Community' className="mt-2 text-lg uppercase tracking-wider text-green-500 dark:text-blue-400">Community</a>
                            </div>
                        </div>
                    </div>
                </section>

                

                {/* blog section */}
                <section className="bg-white dark:bg-gray-900">
                    <div className=" container mx-auto px-6 py-10">
                        <div className="text-center">
                            <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">From the blog</h1>

                            <p className="mx-auto mt-4 max-w-lg text-gray-500">Explore stunning forest-inspired blogs submitted by our community members!</p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                            <div className='hover:scale-95 duration-300 border-2 rounded-md p-3'>
                                <div className="relative border-2 rounded-md">
                                    <img className="h-64 w-full rounded-lg object-cover object-center lg:h-80" src="https://content.globalforestwatch.org/wp-content/uploads/2024/06/Smart-Patrol-Punggurawan_Camp-Punggurawan_06062024_MUF_091-4-scaled-e1718746067219-2048x1068.jpg" alt="" />

                                    <div className="absolute bottom-0 flex bg-white p-3 dark:bg-gray-900">
                                        <img className="h-10 w-10 rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                        <div className="mx-4">
                                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Tom Hank</h1>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Blog Director</p>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Small Grants, Big Impact: Meet the 2024 Recipients Driving Change</h1>

                                <hr className="my-6 w-32 text-blue-500" />

                                <p className="text-sm text-gray-500 dark:text-gray-400">This year marks 10 years of impact for Global Forest Watch (GFW) and the Small Grants Fund (SGF). Since 2014, the SGF has made grants to 102 projects</p>

                                <a href="https://www.globalforestwatch.org/blog/users-in-action/2024-global-forest-watch-small-grants-fund-recipients/" className="mt-4 inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                            </div>

                            <div className='hover:scale-95 duration-300 border-2 rounded-md p-3'>
                                <div className="relative  border-2 rounded-md">
                                    <img className="h-64 w-full rounded-lg object-cover object-center lg:h-80" src="https://content.globalforestwatch.org/wp-content/uploads/2023/05/model_output_4km_aggregation_tcd30_model_v1.2.3_20230407_for_pres_with_legend__net_flux-2048x968.jpg" alt="" />

                                    <div className="absolute bottom-0 flex bg-white p-3 dark:bg-gray-900">
                                        <img className="h-10 w-10 rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                        <div className="mx-4">
                                            <h1 className="text-sm text-gray-700 dark:text-gray-200">arthur melo</h1>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">What’s New With GFW’s Forest Carbon Monitoring</h1>

                                <hr className="my-6 w-32 text-blue-500" />

                                <p className="text-sm text-gray-500 dark:text-gray-400">The Intergovernmental Panel on Climate Change’s (IPCC) latest Assessment Report reminds us that forests play a crucial role in the global carbon cycle</p>

                                <a href="https://www.globalforestwatch.org/blog/data-and-tools/whats-new-carbon-flux-monitoring/" className="mt-4 inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                            </div>

                            <div className='hover:scale-95 duration-300 border-2 rounded-md p-3'>
                                <div className="relative border-2 rounded-md">
                                    <img className="h-64 w-full rounded-lg object-cover object-center lg:h-80" src="https://content.globalforestwatch.org/wp-content/uploads/2024/05/Vinicius_YTThumb_v001.png" alt="" />

                                    <div className="absolute bottom-0 flex bg-white p-3 dark:bg-gray-900">
                                        <img className="h-10 w-10 rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                        <div className="mx-4">
                                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">Voices of Global Forest Watch: Vinicius Silgueiro</h1>

                                <hr className="my-6 w-32 text-blue-500" />

                                <p className="text-sm text-gray-500 dark:text-gray-400">The launch of Global Forest Watch (GFW) ushered in a new era of accountability and transparency around monitoring and protecting the forests.</p>

                                <a href="https://www.globalforestwatch.org/blog/users-in-action/gfw-voices-vinicius-silgueiro/" className="mt-4 inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* what client say */}
                <div>
                    <ClientSay />
                </div>

                {/* Contributors */}
                <section className="bg-white dark:bg-gray-900">
                    <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
                        <div className="container mx-auto px-6 py-10">
                            <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl"> Some Great Contributors</h1>

                            <div className="mx-auto mt-6 flex justify-center">
                                <span className="inline-block h-1 w-40 rounded-full bg-green-500"></span>
                                <span className="mx-1 inline-block h-1 w-3 rounded-full bg-green-500"></span>
                                <span className="inline-block h-1 w-1 rounded-full bg-green-500"></span>
                            </div>

                            <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">These individuals have made significant contributions to the field of forestry in India through their research, education, and conservation efforts.</p>
                        </div>
                    </div>

                    <div className="container mx-auto -mt-72 px-6 py-10 sm:-mt-80 md:-mt-96">
                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
                            {/* contributor-1 */}
                            <div className="hover:scale-95 duration-300 flex flex-col items-center rounded-xl border p-4 dark:border-gray-700 sm:p-6">
                                <img className="aspect-square w-full rounded-xl object-cover" src="https://aimst.edu.my/wp-content/uploads/2019/04/Kailash-Chandra-Karkwal.jpg" alt="" />

                                <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white">Dr. Kailash Chandra</h1>

                                <p className="mt-2 capitalize text-center text-gray-500 dark:text-gray-300">Known as the "Father of Indian Forestry", he was a renowned forest ecologist and conservationist.</p>

                            </div>
                            {/* contributor-2 */}
                            <div className="hover:scale-95 duration-300 flex flex-col items-center rounded-xl border p-4 dark:border-gray-700 sm:p-6">
                                <img className="aspect-square w-full rounded-xl object-cover" src="https://th.bing.com/th/id/R.c03f67393050bcba410e8bf917a369ff?rik=fl%2fiCqNFOnBXhw&riu=http%3a%2f%2fwww.thefamouspeople.com%2fprofiles%2fimages%2fm-s-swaminathan-3.jpg&ehk=yirU2%2beJp1Ja8Lx7her40PZJ3Zw5mR86GE%2f%2fNMJj5HQ%3d&risl=&pid=ImgRaw&r=0" alt="" />

                                <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white">Dr. M.S. Swaminathan</h1>

                                <p className="mt-2 capitalize text-center text-gray-500 dark:text-gray-300">A pioneer in the field of agricultural research and forestry, he is known for his contributions to the Green Revolution.</p>

                            </div>
                            {/* contributor-3 */}
                            <div className="hover:scale-95 duration-300 flex flex-col items-center rounded-xl border p-4 dark:border-gray-700 sm:p-6">
                                <img className="aspect-square w-full rounded-xl object-cover" src="https://images.tribuneindia.com/cms/gall_content/2016/8/2016_8$largeimg18_Thursday_2016_231224273.jpg" alt="" />

                                <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white">Dr. V.K. Bahuguna</h1>

                                <p className="mt-2 capitalize text-center text-gray-500 dark:text-gray-300">A renowned forest ecologist and conservationist, he has made significant contributions to the field of forestry research and education.</p>

                            </div>

                        </div>
                    </div>
                </section>

                {/* Also discover This */}
                <div className="bg-white dark:bg-gray-900">
                    <div className="mx-auto w-11/12 px-6 py-8">
                        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Discover More</h1>

                        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500 dark:text-gray-300 xl:mt-6">
                            Discover wonders of forest ecosystems, meet the professionals dedicated to preserving them, and
                            join a community passionate about protecting our forests for generations to come.
                        </p>
                        <div className='mt-14 mx-auto'>
                            <FreeArticle />
                        </div>
                    </div>
                </div>

                {/* frequently asked question */}
                <section className="bg-white dark:bg-gray-900">
                    <div className="container mx-auto max-w-4xl px-6 py-10">
                        <h1 className="text-center text-4xl font-semibold text-gray-800 dark:text-white">Frequently asked questions</h1>

                        <div className="mt-12 space-y-8">

                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title text-xl font-medium">How do I search for specific forestry information on this website?</div>
                                <div className="collapse-content">
                                    <p>You can use the search bar at the top of the page to search for specific keywords or topics.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">How do I contact the forestry department or experts through this website?</div>
                                <div className="collapse-content">
                                    <p> You can visit the "Contact Us" page to find email addresses, phone numbers, and physical addresses to reach out to us.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">Can I trust the information provided on this website?</div>
                                <div className="collapse-content">
                                    <p>Yes, the information on this website is provided by forestry experts and is regularly updated to ensure accuracy and reliability.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">How do I stay updated on the latest forestry news and research?</div>
                                <div className="collapse-content">
                                    <p>You can subscribe to our newsletter or follow us on social media to stay updated on the latest forestry news and research.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">Can I contribute articles or research papers to this website?</div>
                                <div className="collapse-content">
                                    <p>Yes, we welcome contributions from forestry experts and researchers. Please visit the "Contribute" page to learn more about submission guidelines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* contact banner section */}
                <section className="min-h-screen dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
                    <div className="container mx-auto flex min-h-screen flex-col px-6 py-12">
                        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
                            <div className="text-black lg:mx-6 lg:w-1/2">
                                <h1 className="text-3xl font-semibold capitalize lg:text-5xl">Get a quote</h1>

                                <p className="mt-6 max-w-xl">Ask us everything and we would love to hear from you</p>

                                <div className="mt-6 space-y-8 md:mt-8">
                                    <p className="-mx-2 flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>

                                        <span className="mx-2 w-72 truncate text-black"> Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 </span>
                                    </p>

                                    <p className="-mx-2 flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>

                                        <span className="mx-2 w-72 truncate text-black">(257) 563-7401</span>
                                    </p>

                                    <p className="-mx-2 flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>

                                        <span className="mx-2 w-72 truncate text-black">acb@example.com</span>
                                    </p>
                                </div>

                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-black">Follow us</h3>

                                    <div className="-mx-1.5 mt-4 flex">
                                        <a className="mx-1.5 transform text-black transition-colors duration-300 hover:text-blue-500" href="#">
                                            <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 transform text-black transition-colors duration-300 hover:text-blue-500" href="#">
                                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 transform text-black transition-colors duration-300 hover:text-blue-500" href="#">
                                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 transform text-black transition-colors duration-300 hover:text-blue-500" href="#">
                                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* contact form */}
                            <div className="mt-8 lg:mx-6 lg:w-1/2">
                                <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 lg:max-w-xl">
                                    <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

                                    <form className="mt-6">
                                        <div className="flex-1">
                                            <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                            <input type="text" placeholder="Username" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                        </div>

                                        <div className="mt-6 flex-1">
                                            <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input type="email" placeholder="username@example.com" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                        </div>

                                        <div className="mt-6 w-full">
                                            <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 md:h-48" placeholder="Message"></textarea>
                                        </div>

                                        <button className="mt-6 w-full transform rounded-md bg-green-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">get in touch</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div >
        </>
    )
}

export default AnotherHome