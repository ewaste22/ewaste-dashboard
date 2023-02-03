import React from 'react'
import Footer from '../../components/dashboard/Footer';
import iconupload from '../../asset/img/upload_icon.png';
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const AddCourier = () => {
  const [email_courier, setEmailCourier] = useState("");
  const [password_courier, setPasswordCourier] = useState("");
  const [fullname_courier, setFullnameCourier] = useState("");
  const [image_courier, setImageCourier] = useState("");
  const [transportationType_courier, setTransportationType] = useState("");
  const [maxLoad_courier, setMaxLoadCourier] = useState("");
  const [nopol_courier, setNopolCourier] = useState("");
  const [nomor_courier, setNomorCourier] = useState("");

  const navigate = useNavigate();
  

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("email_courier", email_courier);
    form.append("password_courier", password_courier);
    form.append("fullname_courier", fullname_courier);
    form.append("image_courier", image_courier);
    form.append("transportationType_courier", transportationType_courier);
    form.append("maxLoad_courier", maxLoad_courier);
    form.append("nopol_courier", nopol_courier);
    form.append("nomor_courier", nomor_courier);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/admin/courier/register",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/courier");
      swal({
        title: "Success!",
        text: "Courier Account added successfully!",
        icon: "success",
        button: "Oke",
      });
    } catch (err) {
      if (Array.isArray(err.response.data.message)) {
        err.response.data.message.forEach((err) => {
          toast(err, {
            type: "error",
          });
        });
      } else {
        toast(err.response.data.message, {
          type: "error",
        });
      }
    }
  }
  return (
    <div
    style={{
      backgroundColor: '#D9D9D9'
    }}
    className="w-screen overflow-x-hidden h-screen flex justify-center items-center bg-white bg-cover bg-center"
  >
  <Footer />

  <div className="container mx-auto max-w-xl shadow-xl rounded-3xl border border-gray-100 pt-1 px-20 pb-10 bg-white">
  <form className='pb-5' onSubmit={handleSubmit}>
  <div className="flex flex-col justify-center w-full items-center mb-12">
    <img src={iconupload} className="w-[347px] h-[200px] pt-5" alt="uploadfile" />
    <input type="file" name='image_courier'  onChange={(e) => setImageCourier(e.target.files[0])}
              required />
    <h1 className="text-[#2D5030] text-[30px] leading-[60px] font-bold">Upload Image</h1>
  </div>

  <div className="flex flex-col  mx-auto h-auto ">
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Email Courier</h1>
            <input type="email" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Email Courier"  value={email_courier}
              onChange={(e) => setEmailCourier(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Password Courier</h1>
            <input type="password" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Password Courier"  value={password_courier}
              onChange={(e) => setPasswordCourier(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Fullname Courier</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Fullname Courier"  value={fullname_courier}
              onChange={(e) => setFullnameCourier(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Transportation Type Courier</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Transportation Type"  value={transportationType_courier}
              onChange={(e) => setTransportationType(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Max Load Courier</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Max Load"  value={maxLoad_courier}
              onChange={(e) => setMaxLoadCourier(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Number Plate Courier</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Number Plate"  value={nopol_courier}
              onChange={(e) => setNopolCourier(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Phone Number Courier</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Phone Number Courier"  value={nomor_courier}
              onChange={(e) => setNomorCourier(e.target.value)}
              required />
          </div>
         <div className="flex flex-col justify-center w-full items-center">
            <button type='submit' className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681]  w-[250px] h-[45px] mt-3">
              Add
            </button>
            <Link to={`/Courier`}><button className="btn rounded-3xl bg-[#D2D2D2] border-none text-white text-lg shadow-xl hover:bg-red-600 opacity-95  w-[250px] h-[45px] mt-3">
              Cancel
            </button></Link>
            </div>
        </div>
        </form>
  </div>
</div>
  )
}
export default AddCourier;