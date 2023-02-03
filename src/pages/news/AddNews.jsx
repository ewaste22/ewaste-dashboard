import React from 'react'
import Footer from '../../components/dashboard/Footer';
import iconupload from '../../asset/img/upload_icon.png';
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export const AddNews = ({users}) => {
  const [title_news, setTitleNews] = useState("");
  const [body_news, setBodyNews] = useState("");
  const [image_news, setImageNews] = useState("");
  const [admin_id, setAdminid] = useState(users.admin.id);
  const navigate = useNavigate();
  
  console.log(users);
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("admin_id", admin_id);
    form.append("title_news", title_news);
    form.append("body_news", body_news);
    form.append("image_news", image_news);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/admin/news/",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/news");
      swal({
        title: "Success!",
        text: "News added successfully!",
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

  <div className="container mx-auto max-w-xl shadow-xl rounded-3xl border border-gray-100 pt-1 px-20 pb-1 bg-white ">
  <form onSubmit={handleSubmit}>
  <div className="flex flex-col justify-center w-full items-center mb-12">
    <img  src={iconupload} className="w-[347px] h-[200px] pt-5" alt="uploadfile" />
    <input type="file" name='image_news'  onChange={(e) => setImageNews(e.target.files[0])}
              required />
    <h1 className="text-[#2D5030] text-[30px] leading-[60px] font-bold">Upload Image</h1>
  </div>
  
          <div className="flex flex-col gap-6 mt-10">
          <div className="flex flex-col  w-full">
            <h1 className='text-[20px] font-bold mb-2'>Title News</h1>
            <input type="text" name='title_news' className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Title News"  value={title_news}
              onChange={(e) => setTitleNews(e.target.value)}
              required />
          </div>
          {/* <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>Date Created</h1>
          <input type="text placeholder" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="MM/DD/YYYY" onfocus="(this.type='date')"
            onblur="(this.type='text')" />
          </div> */}
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>News</h1>
          <input type="text" name='body_news' className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md pb-16" placeholder="Description News" value={body_news}
              onChange={(e) => setBodyNews(e.target.value)}
              required />
          <input type="hidden" name='admin_id' value={users.admin.id} />
          </div>
         <div className="flex flex-col justify-center w-full items-center">
            <button type='submit' className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681]  w-[250px] h-[45px] ">
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