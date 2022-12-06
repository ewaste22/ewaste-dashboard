import React from 'react'
import Footer from '../../components/dashboard/Footer';
import iconupload from '../../asset/img/upload_icon.png';
import { Link } from "react-router-dom";

export const AddNews = () => {
  return (
    <div
    style={{
      backgroundColor: '#D9D9D9'
    }}
    className="w-screen overflow-x-hidden h-screen flex justify-center items-center bg-white bg-cover bg-center"
  >
  <Footer />

  <div className="container mx-auto max-w-xl shadow-xl rounded-3xl border border-gray-100 pt-1 px-20 pb-1 bg-white ">
  <div className="flex flex-col justify-center w-full items-center mb-12">
    <img src={iconupload} className="w-[347px] h-[200px] pt-5" alt="uploadfile" />
    <h1 className="text-[#2D5030] text-[30px] leading-[60px] font-bold">Upload Image</h1>
  </div>
  <form>
          <div className="flex flex-col gap-6 mt-10">
          <div className="flex flex-col  w-full">
            <h1 className='text-[20px] font-bold mb-2'>Title News</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Name" />
          </div>
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>Date Created</h1>
          <input type="text placeholder" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="MM/DD/YYYY" onfocus="(this.type='date')"
            onblur="(this.type='text')" />
          </div>
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>Description</h1>
          <input type="password" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md pb-16" placeholder="Description" />
          </div>
         <div className="flex flex-col justify-center w-full items-center">
            <button className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681]  w-[250px] h-[45px] ">
              Add
            </button>
             <Link to={`/News`}><button className="btn rounded-3xl bg-[#D2D2D2] border-none text-white text-lg shadow-xl hover:bg-red-600 opacity-95  w-[250px] h-[45px] mt-3">
              Cancel
            </button></Link>
            </div>
           
          </div>
        </form>
  </div>
</div>
  )
}
export default AddNews;