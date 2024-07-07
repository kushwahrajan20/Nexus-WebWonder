import React from 'react'
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 className="font-bold text-lg">Login</h1>
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
                        <button className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-2000">Login</button>
                        <p>
                            Not registered?{" "} 
                            <Link 
                            to="/Signup"
                            className="underline text-blue-500 cursor-pointer">
                                Signup
                            </Link>

                        </p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login