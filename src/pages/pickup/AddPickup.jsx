import React from 'react'
import Footer from '../../components/dashboard/Footer';
import { Link } from "react-router-dom";

export const AddPickup = () => {
  return (
    <div
    style={{
      backgroundColor: '#D9D9D9'
    }}
    className="w-screen overflow-x-hidden h-screen flex justify-center items-center bg-white bg-cover bg-center"
  >
  <Footer />

  <div className="container mx-auto max-w-xl shadow-xl rounded-3xl border border-gray-100 pt-1 px-20 pb-1 bg-white ">
  <form>
          <div className="flex flex-col gap-6 mt-10">
          <div className="flex flex-col  w-full">
            <h1 className='text-[20px] font-bold mb-2'>Id Pickup</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Id" />
          </div>
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>Status Pickup</h1>
          <select className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Status Pickup">
                <option>Need Process</option>
                <option>On Process</option>
                <option>Success</option>
          </select>
          </div>
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>Courier Name</h1>
          <input type="password" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Courier Name" />
          </div>
         <div className="flex flex-col justify-center w-full items-center">
            <button className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681]  w-[250px] h-[45px] ">
              Add
            </button>
            <Link to={`/Pickup`}><button className="btn rounded-3xl bg-[#D2D2D2] border-none text-white text-lg shadow-xl hover:bg-red-600 opacity-95  w-[250px] h-[45px] mt-3">
              Cancel
            </button></Link>
            </div>
           
          </div>
        </form>
  </div>
</div>
  )
}
export default AddPickup;