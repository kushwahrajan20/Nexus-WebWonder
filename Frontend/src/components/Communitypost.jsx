import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';

function Communitypost() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const copostInfo = {
      image: data.image,
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
        <div className="card w-72 md:w-96 mx-auto shadow-xl">
          {/* image link */}
          <textarea
            className="grow outline-none bg-transparent textarea textarea-bordered h-40"
            placeholder="Image" 
            {...register("image", { required: true })}
          >
          </textarea>


          {/* title */}
          <div className="card-body">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full max-w-xs"
              {...register("title", { required: true })}
            />

            {/* details */}
            <textarea className="textarea textarea-bordered h-40" placeholder="details"
              {...register("details", { required: true })}
            ></textarea>

            {/* tags */}
            <div className="card-actions justify-end w-full inline">
              <input type="text" placeholder="Tag1" className="input w-1/3 max-w-xs"
                {...register("tag1", { required: true })}
              />
              <input type="text" placeholder="Tag2" className="input w-1/3 max-w-xs"
                {...register("tag2", { required: true })} />
              <input type="text" placeholder="Tag3" className="input w-1/3 max-w-xs"
                {...register("tag3", { required: true })} />
            </div>

            {/* button */}
            <button className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-2000">
              Post
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Communitypost