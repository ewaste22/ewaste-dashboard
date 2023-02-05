import React from 'react'
import Footer from '../../components/dashboard/Footer';
import iconupload from '../../asset/img/upload_icon.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import swal from "sweetalert";


export const DetailWaste = () => {
  const [name_waste, setNameWaste] = useState([]);
  const [description_waste, setDescriptionWaste] = useState([]);
  const [poin_waste, setPoinWaste] = useState([]);
  const [weight_waste, setWeightWaste] = useState([]);
  const [image_waste, setImageWaste] = useState([]);
  const [category_id, setCategoryId] = useState([]);
  const { id } = useParams();

  const getWaste = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/admin/waste/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setNameWaste(res.data.data.waste.name_waste);
      setDescriptionWaste(res.data.data.waste.description_waste);
      setPoinWaste(res.data.data.waste.poin_waste);
      setWeightWaste(res.data.data.waste.weight_waste);
      setImageWaste(res.data.data.waste.image_waste);
      setCategoryId(res.data.data.waste.Category_waste.name_category);
    } catch (err) {}
  }
  useEffect(() => {
    getWaste();
  }, []);
  return (
    <div
    style={{
      backgroundColor: '#D9D9D9'
    }}
    className="w-screen overflow-x-hidden h-screen flex justify-center items-center bg-white bg-cover bg-center"
  >
  <Footer />

  <div className="container mx-auto max-w-xl shadow-xl rounded-3xl border border-gray-100 pt-1 px-20 pb-10 bg-white">
  <div className="flex flex-col justify-center w-full items-center mt-10 ">
  
    <h1 className="text-[#2D5030] text-[30px] leading-[60px] font-bold">Detail Waste</h1>
    <img src={image_waste} className="w-[450px] h-[200px] " />
  </div>

  <div className="flex flex-col  mx-auto h-auto mt-3">
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-extrabold mb-2'>{name_waste}</h1>
          </div>
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-mono mb-2'>{poin_waste} Point</h1>
          </div>
          <div className="flex flex-col  w-full mt-10">
          <h1 className='text-[20px] font-bold mb-2'>Waste Information</h1>
          </div>
          <div className="flex w-full justify-between">
          <h1 className='text-[18px] font-thin mb-2'>Weight :</h1>
          <h3 className='inline-block '>{weight_waste} kg</h3>
          </div>
          <div className="flex w-full justify-between">
          <h1 className='text-[18px] font-thin mb-2'>Category :</h1>
          <h3 className='inline-block '>{category_id}</h3>
          </div>
          <div className="flex flex-col w-full ">
          <h1 className='text-[18px] font-thin mb-2'>Description :</h1>
        <p className='text-justify'>{description_waste}</p>
          </div>
         {/* <div className="flex flex-col justify-center w-full items-center">
            <button type='submit' className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681]  w-[250px] h-[45px]  mt-3">
              Add
            </button>
            <Link to={`/Waste`}><button className="btn rounded-3xl bg-[#D2D2D2] border-none text-white text-lg shadow-xl hover:bg-red-600 opacity-95  w-[250px] h-[45px] mt-3">
              Cancel
            </button></Link>
            </div> */}
        </div>
  </div>
</div>
  )
}
export default DetailWaste;