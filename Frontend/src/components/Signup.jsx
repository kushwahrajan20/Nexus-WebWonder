import React from 'react'
import { Link, useLocation, useNavigate, } from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';
function Signup() {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }

        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)

                if (res.data) {
                    toast.success('Signup Successfully');
                    setTimeout(() => {
                            navigate(from, { replace: true });
                            window.location.reload();
                    }, 2000)
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);

                }
            })
    };


    return (
        <>
            <div>
                <div className="flex h-screen items-center justify-center">
                    <div className="modal-box w-[600px]">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h1 className="font-bold text-lg">Sigup</h1>
                            {/* Name */}
                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input type="text"
                                    placeholder="Enter your full name"
                                    className="w-80 py-1 px-3 border rounded-md outline-none"
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input type="email"
                                    placeholder="Enter your email"
                                    className="w-80 py-1 px-3 border rounded-md outline-none"
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Password */}
                            <div className="mt-4 space-y-2">
                                <span>Password</span>
                                <br />
                                <input type="password"
                                    placeholder="Enter your password"
                                    className="w-80 py-1 px-3 border rounded-md outline-none"
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Button */}
                            <div className="flex justify-around mt-4">
                                <button className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-2000">
                                    Signup
                                </button>
                                <p>
                                    Have account?{" "}
                                    <button
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                        className="underline text-blue-500 cursor-pointer">
                                        Login
                                    </button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup