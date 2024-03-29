import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
// import { useNavigate } from 'react-router-dom';
import bgLogin from '../../asset/img/bg-login.png'
import iconLogin from '../../asset/img/icon-login.png'

export default function Login() {

  const [email_admin, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);

  const login = () => {
    axios.post("http://localhost:8000/api/v1/auth/admin/login", {
      email_admin: email_admin,
      password: password
    }).then((response) => {
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        toast(error.response.data.message);
        console.log(error)
      });
  }
  // const [msg, setMsg] = useState('');
  // const navigate = useNavigate();

  // const Auth = async (e) => {
  //   // e.preventDefault();
  //   try{
  //     await axios.post('http://192.168.100.8/api/v1/auth/admin/login', {
  //     email_admin: email_admin,
  //     password: password

  //     });
  //     navigate("/Dashboard");
  //   }catch (error){
  //     if(error.response){
  //       setMsg(error.response.data.msg);
  //     }
  //   }
  // }

  return (
    <div
      style={{
        backgroundImage: `url(${bgLogin})`
      }}
      className="w-full overflow-hidden  min-h-screen   bg-white bg-cover bg-center"
    >
      <div className="container mx-auto max-w-xl shadow-xl rounded-3xl border border-gray-100 px-20 my-10 pb-10 bg-white">
        <div className="flex flex-col justify-cente w-full items-center mb-12">
          <img src={iconLogin} className="w-[158px] h-[226px]" alt="e waste" />
          <h1 className="text-[#2D5030] text-[40px] leading-[60px]">E-Waste</h1>
        </div>
        <div>
          <h1 className="font-bold text-4xl text-black mb-2">Log In</h1>
          <p>Welcome!</p>
          <ToastContainer />
        </div>
        {!isLoggedIn ? (
          <div className="flex flex-col gap-6 mt-10">
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type='button' onClick={login} className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681] drop-shadow-xl">
              Login
            </button>
          </div>
        ) : null}
      </div>
      <div className="bg-[#85C681] sticky bottom-0 w-full h-12 text-white flex justify-center items-center">
        <p>© E-Waste 2022</p>
      </div>
    </div>
  );
}
