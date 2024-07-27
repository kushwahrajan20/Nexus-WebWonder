import React, { useEffect, useState } from 'react'
import Login from './Login';
import { FcBiohazard } from "react-icons/fc";
import Logout from './Logout';
import { useAuth } from '../Context/AuthProvider';
import Searchbar from './Searchbar';

function Navbar() {

    const [authUser, setAuthUser] = useAuth()

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll
        )
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }
    );

    const navItems = (<>
        <li><a href="/">Home</a></li>
        <li><a href='/Edupoint'>Education</a></li>
        <li><a href="/Dashboard">Dashboard</a></li>
        <li><a href="/Explore">Explore</a></li>
        <li><a href="/ArtAndPhoto">Art&Photo</a></li>
        <li><a href="/Blogs">Blogs</a></li>
        <li><a href="/Career">Career</a></li>
        <li><a href='/Community'>Community</a></li>
    </>)
    return (
        <>
            <div className={`max-w-screen-2xl container outline-2 mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 bg-base-100
                ${sticky ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""}`}>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navItems}
                            </ul>
                        </div>
                        <FcBiohazard className="w-11 h-11" />
                        <a className="text-3xl text-green-600 font-bold cursor-pointer">Forestry</a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navItems}
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <Searchbar/>
                        </div>
                        {
                            authUser ? <Logout /> :
                                <div className="">
                                    <a className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 duration-300 cursor-pointer"
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >Login</a>
                                    <Login />
                                </div>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar