import React from 'react'
import Footer from '../../components/dashboard/Footer';
import iconupload from '../../asset/img/upload_icon.png';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import swal from "sweetalert";

export const AddWaste = ({users}) => {
  const [category, setCategory] = useState([{'id' : ''}]);
  const [name_waste, setNameWaste] = useState([]);
  const [description_waste, setDescriptionWaste] = useState([]);
  const [poin_waste, setPoinWaste] = useState([]);
  const [weight_waste, setWeightWaste] = useState([]);
  const [image_waste, setImageWaste] = useState([]);
  const [category_id, setCategoryId] = useState([]);

  const navigate = useNavigate();
  
  

  const getCategory = async () => {
    await axios.get('http://localhost:8000/api/v1/admin/categoryWaste', {
      headers:{
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }).then(res => {
      console.log(res.data.data.categoryWaste)
      setCategory(res.data.data.categoryWaste)
    }).catch(err => console.log(err))
  }

   
  useEffect(() => {
    getCategory()
}, [])

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("category_id", category_id);
    form.append("name_waste", name_waste);
    form.append("description_waste", description_waste);
    form.append("poin_waste", poin_waste);
    form.append("weight_waste",  weight_waste);
    form.append("image_waste",  image_waste);


  //  const data = {
  //   name_waste : name_waste,
  //   description_waste : description_waste,
  //   poin_waste : poin_waste,
  //   weight_waste : weight_waste,
  //   category_id : category_id,

  //  }


    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/admin/waste", form, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data"
          },
        }
      );
      navigate("/waste");
      swal({
        title: "Success!",
        text: "Category added successfully!",
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
    <input type="file" name='image_waste'  onChange={(e) => setImageWaste(e.target.files[0])}
              required />
    <h1 className="text-[#2D5030] text-[30px] leading-[60px] font-bold">Upload Image</h1>
  </div>

  <div className="flex flex-col  mx-auto h-auto ">
          <div className="flex flex-col  w-full ">
            <h1 className='text-[20px] font-bold mb-2'>Waste Name</h1>
            <input type="text"  name='name_waste' className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Name" value={name_waste}
              onChange={(e) => setNameWaste(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>Description Waste</h1>
          <input type="text" name='description_waste' className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md pb-16" placeholder="Description Waste" value={description_waste}
              onChange={(e) => setDescriptionWaste(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>Category Waste</h1>
          
          <select className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Category" value={category_id}
              onChange={(e) => setCategoryId(e.target.value)}
              required>
          {category.map((item) => {
            return(
                <option value={item.id}>{item.name_category}</option>
             );
            })}
                </select>
          </div>
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>Point Waste</h1>
          <input type="text" name='poin_waste' className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md pb-16" placeholder="Point Waste" value={poin_waste}
              onChange={(e) => setPoinWaste(e.target.value)}
              required />
          </div>
          <div className="flex flex-col  w-full">
          <h1 className='text-[20px] font-bold mb-2'>Weight Waste</h1>
          <input type="text" name='weight_waste' className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md pb-16" placeholder="Weight Waste" value={weight_waste} 
           onChange={(e) => setWeightWaste(e.target.value)}
           required/>
          </div>
         <div className="flex flex-col justify-center w-full items-center">
            <button type='submit' className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681]  w-[250px] h-[45px]  mt-3">
              Add
            </button>
            <Link to={`/Waste`}><button className="btn rounded-3xl bg-[#D2D2D2] border-none text-white text-lg shadow-xl hover:bg-red-600 opacity-95  w-[250px] h-[45px] mt-3">
              Cancel
            </button></Link>
            </div>
        </div>
        </form>
  </div>
</div>
  )
}
export default AddWaste;