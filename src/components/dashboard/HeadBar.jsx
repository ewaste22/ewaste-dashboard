import UserDropdown from '../dropdowns/UserDropdown';
import { AiOutlineBell } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import userImage from '../../asset/img/user.png';
import { useState, useEffect } from "react";

export default function HeadBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
       {/* <HeadBar /> */}
       <div className="flex w-full grow flex-row gap-4 px-10 py-10">
          <div className="flex w-full flex-row items-center gap-3 rounded-md bg-white px-3 py-1">
            <div>
              <img src={userImage} alt="user" />
            </div>
            {/* <image src='/user.png' alt='user' className='rounded-full w-[40px] h-[40px]'/> */}
            <p className="">Good Morning, Lee Ji Eun! </p>
          </div>
          <div className="flex items-center justify-center rounded-full bg-white p-2">
            <AiOutlineBell className="h-[35px] w-[35px]" />
          </div>

          {isLoggedIn ? ( 
          <div className="flex w-[160px] flex-row items-center gap-3 rounded-md bg-white px-3 py-1">
                {/* <image src='/user.png' alt='user' className='rounded-full w-[40px] h-[40px]'/> */}
                <button className='flex w-[160px] flex-row gap-3' onClick={logout}>
                  <p>Logout</p>
                  <IoMdExit  className="h-[35px] w-[25px]" />
                </button>
              </div>
           ) : null}
           
        </div>
    </>
  )
}
