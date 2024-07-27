import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';

function Communitypost() {


  const CurrentUser = JSON.parse(localStorage.getItem("Users"))
  //console.log((CurrentUser.fullname))
  //console.log((CurrentUser.fullname[0].toUpperCase()))

  const [image, setImage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const copostInfo = {
      image: image,
      user: CurrentUser.fullname,
      u: CurrentUser.fullname[0].toUpperCase(),
      title: data.title,
      details: data.details,
      tag1: data.tag1,
      tag2: data.tag2,
      tag3: data.tag3
    }

    await axios.post("http://localhost:4001/community/copost", copostInfo)
      .then(
        (res) => {
          console.log(res.data)
          if (res.data) {
            toast.success('Post Successfully');
          }

          setTimeout(() => {
            window.location.reload();
          }, 2000)
        })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);

        }
      })
  }


  function convertToBase64(e) {
    console.log(e)
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);//base64 encoded string
      setImage(reader.result)
    }
    reader.onerror = error => {
      console.log("Error: ", error);
    }
  }



  return (
    <>
      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
          <div className="bg-white border-gray-300 rounded-lg w-80 md:w-96  border p-2 mx-auto mb-14  transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

            <div class="grid grid-cols-6 items-center p-3 border-b border-b-gray-300">

              <div class="rounded-full  w-9 h-9 text-3xl outline text-center">
              {CurrentUser.fullname[0].toUpperCase()}
              </div>

              <div class="col-span-4 text-sm font-semibold">
              {CurrentUser.fullname}
              </div>

              <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>

            </div>
            {/* image */}
            <img className='h-44 w-full' src={image} alt="" />


            {/* image link */}
            <input type="file" accept='image/' className='my-1' onChange={convertToBase64}
            />

            {/* title */}
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full my-1"
              {...register("title", { required: true })}
            />

            {/* details */}
            <textarea className="textarea textarea-bordered h-32 w-full my-1" placeholder="details"
              {...register("details", { required: true })}
            ></textarea>

            {/* tags */}
            <div className="card-actions justify-end w-full inline">
              <input type="text" placeholder="Tag1" className="input w-1/3 max-w-xs "
                {...register("tag1", { required: true })}
              />
              <input type="text" placeholder="Tag2" className="input w-1/3 max-w-xs"
                {...register("tag2", { required: true })} />
              <input type="text" placeholder="Tag3" className="input w-1/3 max-w-xs"
                {...register("tag3", { required: true })} />
            </div>

            {/* button */}
            <button className="bg-green-600 text-white rounded-md w-full px-3 py-1 my-2 hover:bg-green-700 duration-2000">
              Post
            </button>

          </div>
        </form>
      </div>
    </>
  )
}

export default Communitypost