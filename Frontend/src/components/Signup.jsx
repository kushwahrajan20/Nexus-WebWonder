import React from 'react'
import { Link } from "react-router-dom";
import Login from './Login';

function Signup() {
    return (
        <>
            <div>
                <div className="flex h-screen items-center justify-center">
                    <div className="modal-box w-[600px]">
                        <form method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        <h1 className="font-bold text-lg">Sigup</h1>
                        {/* Name */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your full name"
                                className="w-80 py-1 px-3 border rounded-md outline-none"
                            />
                        </div>
                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder="Enter your email"
                                className="w-80 py-1 px-3 border rounded-md outline-none"
                            />
                        </div>
                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your password"
                                className="w-80 py-1 px-3 border rounded-md outline-none"
                            />
                        </div>
                        {/* Button */}
                        <div className="flex justify-around mt-4">
                            <button className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-2000">
                                Signup
                            </button>
                            <p>
                                Have account?{" "}
                                <button 
                                onClick={()=>document.getElementById("my_modal_3").showModal()}
                                className="underline text-blue-500 cursor-pointer">
                                Login
                                </button>
                                <Login/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup