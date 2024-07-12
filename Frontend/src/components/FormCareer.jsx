import React from 'react'

function FormCareer() {
  return (
    <>
      <div>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h1 className="font-bold text-lg">Job Application Form</h1>
            {/*Name*/}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input type="text"
                placeholder="First name"
                className="w-80 py-1 px-3 border rounded-md outline-none"
              />
              <input type="text"
                placeholder="Last name"
                className="w-80 py-1 px-3 border rounded-md outline-none"
              />
            </div>
            {/*Email*/}
            <div className="mt-4 space-y-2">
              <span>Email address</span>
              <br />
              <input type="text"
                placeholder="username@gmail.com"
                className="w-80 py-1 px-3 border rounded-md outline-none"
              />
            </div>
            {/*Phone no.*/}
            <div className="mt-4 space-y-2">
              <span>Phone number</span>
              <br />
              <input type="email"
                placeholder="+91 xxxxxxxxxx"
                className="w-80 py-1 px-3 border rounded-md outline-none"
              />
            </div>
            {/*Job post*/}
            <div className="mt-4 space-y-2">
              <span>Position applied for</span>
              {"  "}
              <select className="outline outline-slate-300">
                <option value="" disabled hidden selected>select</option>
                <option value="Forester">Forester</option>
                <option value=" Agronomy Manager"> Agronomy Manager</option>
                <option value="Environmental Scientist">Environmental Scientist</option>
                <option value="Wildlife Biologist">Wildlife Biologist</option>
                <option value="Conservation Biologist">Conservation Biologist</option>
                <option value="Forestry Technician">Forestry Technician</option>
                <option value="Agricultural Specialist">Agricultural Specialist</option>
                <option value="Ecologist">Ecologist</option>
                <option value="Range Manager">Range Manager</option>
              </select>
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-2000">Submit</button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default FormCareer