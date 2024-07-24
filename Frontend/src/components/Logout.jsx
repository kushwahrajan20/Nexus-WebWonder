import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()

    const handleLogout=()=>{
        try {
            setAuthUser(
                {
                    ...authUser,
                    user:null
                }
            )
            localStorage.removeItem("Users");
            toast.success("Logout successfully");
            setTimeout(()=>{
                window.location.reload();
            },1000);

        } catch (error) {
            toast.error("Error: "+error);
            setTimeout(()=>{},2000)
        }
    }
    

    return (
        <div>
            <button className='px-3 py-2 bg-green-600 text-white rounded-md cursor-pointer block'
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Logout