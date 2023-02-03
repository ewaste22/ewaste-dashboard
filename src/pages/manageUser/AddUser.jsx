import React from 'react'
import Footer from '../../components/dashboard/Footer';
import iconupload from '../../asset/img/upload_icon.png';
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [image_user, setImageUser] = useState("");
  const [address, setAddress] = useState("");
  const [point, setPoint] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("fullname", fullname);
    form.append("image_user", image_user);
    form.append("address", address);
    form.append("point", point);
    form.append("phone_number", phone_number);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/admin/user/register",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/user");
      swal({
        title: "Success!",
        text: "User Account added successfully!",
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
    <input type="file" name='image_user'  onChange={(e) => setImageUser(e.target.files[0])}
              required />
    <h1 className="text-[#2D5030] text-[30px] leading-[60px] font-bold">Upload Image</h1>
  </div>

  <div className="flex flex-col  mx-auto h-auto ">
       
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Email User</h1>
            <input type="email" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Email User" value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Password User</h1>
            <input type="password" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Password User" value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Fullname User</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Fullname User" value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Address User</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Address User" value={address}
              onChange={(e) => setAddress(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Point User</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Point User" value={point}
              onChange={(e) => setPoint(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Phone Number User</h1>
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Phone Number User" value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required />
          </div>
         <div className="flex flex-col justify-center w-full items-center">
            <button type='submit' className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681]  w-[250px] h-[45px] mt-3">
              Add
            </button>
            <Link to={`/User`}><button className="btn rounded-3xl bg-[#D2D2D2] border-none text-white text-lg shadow-xl hover:bg-red-600 opacity-95  w-[250px] h-[45px] mt-3">
              Cancel
            </button></Link>
            </div>
        </div>
        </form>
  </div>
</div>
  )
}
export default AddUser;