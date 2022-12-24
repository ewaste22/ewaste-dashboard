import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bgLogin from '../../asset/img/bg-login.png'
import iconLogin from '../../asset/img/icon-login.png'

export default function Login() {
  const [email_admin, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:8000/api/v1/auth/admin/login', {
      email_admin: email_admin,
      password: password

      });
      navigate("/Dashboard");
    }catch (error){
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bgLogin})`
      }}
      className="w-screen overflow-x-hidden h-screen flex justify-center items-center bg-white bg-cover bg-center"
    >
      <div className="bg-[#85C681] absolute bottom-0 w-screen h-12 text-white flex justify-center items-center">
        <p>© E-Waste 2022</p>
      </div>
      <div className="container mx-auto max-w-xl shadow-xl rounded-3xl border border-gray-100 pt-1 px-20 pb-10 bg-white">
        <div className="flex flex-col justify-cente w-full items-center mb-12">
          <img src={iconLogin} className="w-[158px] h-[226px]" alt="e waste" />
          <h1 className="text-[#2D5030] text-[40px] leading-[60px]">E-Waste</h1>
        </div>
        <h1 className="font-bold text-4xl text-black mb-2">Log In</h1>
        <p>Welcome!</p>
        <form onSubmit={Auth}>
          <p className='has-text-centered'>{msg}</p>
          <div className="flex flex-col gap-6 mt-10">
            <input type="text" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Username" value={email_admin} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="px-3 py-2 w-full bg-gray-300 outline-none rounded-md" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="btn rounded-3xl bg-[#85C681] border-none text-white text-lg shadow-xl hover:bg-[#85C681] drop-shadow-xl">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
