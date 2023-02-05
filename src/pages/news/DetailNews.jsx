import React from 'react'
import Footer from '../../components/dashboard/Footer';
import iconupload from '../../asset/img/upload_icon.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import swal from "sweetalert";


export const DetailNews = () => {
  const [title_news, setTitleNews] = useState([]);
  const [body_news, setBodyNews] = useState([]);
  const [image_news, setImageNews] = useState([]);
  const [admin_id, setAdminid] = useState([]);
  const { id } = useParams();

  const getNews = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/admin/news/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTitleNews(res.data.data.news.title_news);
      setBodyNews(res.data.data.news.body_news);
      setImageNews(res.data.data.news.image_news);
      setAdminid(res.data.data.news.admin_id);
    } catch (err) {}
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div
    style={{
      backgroundColor: '#D9D9D9'
    }}
    className="w-screen overflow-x-hidden  h-screen flex justify-center items-center bg-white bg-cover bg-center"
  >
  <Footer />

  <div className="container  w-[900px] h-[800px] shadow-xl rounded-3xl border border-gray-100  bg-white">
  <div className="flex flex-col justify-center w-full items-center mt-10 ">
  
    <h1 className="text-[#2D5030] text-[30px] leading-[60px] font-bold">Detail News</h1>
    <img src={image_news} className="w-[450px] h-[200px] " />
    <h1 className='text-[10px] font-extrabold mt-10 text-center'>{title_news}</h1>
    {/* <h1 className='text-[10px] font-extrabold mt-10 text-center'>{admin_id}</h1> */}
    <h1 className='text-[10px] font-mono mb-2 text-justify ml-7 mr-7 mt-7'>{body_news}</h1>
  </div>

  
  </div>
</div>
  )
}
export default DetailNews;