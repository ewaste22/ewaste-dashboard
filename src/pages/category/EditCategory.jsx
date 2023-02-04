import React from 'react'
import Footer from '../../components/dashboard/Footer';
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const EditCategory = () => {
  const [name_category, setNameCategory] = useState("");
  const [typeOf_weight, setTypeofWeight] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/admin/categoryWaste/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setNameCategory(res.data.data.categoryWaste.name_category);
      setTypeofWeight(res.data.data.categoryWaste.typeOf_weight);
    } catch (err) {}
  };


  async function handleEdit(e) {
    e.preventDefault();

   const data = {
    name_category : name_category,
    typeOf_weight : typeOf_weight
   }


    try {
      const res = await axios.put(
        `http://localhost:8000/api/v1/admin/categoryWaste/${id}`, data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/category");
      swal({
        title: "Success!",
        text: "Category changed successfully!",
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
  useEffect(() => {
    getCategory();
  }, []);
  
  return (
    <div
    style={{
      backgroundColor: '#D9D9D9'
    }}
    className="w-screen overflow-x-hidden h-screen flex justify-center items-center bg-white bg-cover bg-center"
  >
  <Footer />

  <div className="container mx-auto max-w-xl shadow-xl rounded-3xl border border-gray-100 pt-1 px-20 pb-1 bg-white ">
  <form onSubmit={handleEdit}>
          <div className="flex flex-col gap-6 mt-10">
          <div className="flex flex-col  w-full">
            <h1 className='text-[20px] font-bold mb-2'>Category Name</h1>
            {/* <input type="hidden" name='admin_id' value={users.admin.id} /> */}
            <input type="text" name='name_category' className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Category Name" value={name_category}  onChange={(e) => setNameCategory(e.target.value)}
             required />
          </div>
          <div className="flex flex-col  w-full">
            <h1 className='text-[20px] font-bold mb-2'>Type of Weight</h1>
            <input type="text" name='typeof_weight' className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Type Of Weight" value={typeOf_weight}  onChange={(e) => setTypeofWeight(e.target.value)}
            required />
          </div>
         <div className="flex flex-col justify-center w-full items-center">
            <button type='submit' className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681]  w-[250px] h-[45px] ">
              Add
            </button>
            <Link to={`/Category`}><button className="btn rounded-3xl bg-[#D2D2D2] border-none text-white text-lg shadow-xl hover:bg-red-600 opacity-95  w-[250px] h-[45px] mt-3">
              Cancel
            </button></Link>
            </div>
           
          </div>
        </form>
  </div>
</div>
  )
}
export default EditCategory;