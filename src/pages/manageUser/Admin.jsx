import HeadBar from '../../components/dashboard/HeadBar';
import SideBar from '../../components/dashboard/SideBar';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Admin() {
  const [admin, setAdmin] = useState([]);

  const getAdmin = async () => {
    await axios.get('http://localhost:8000/api/v1/admin/admin/', {
      headers:{
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }).then(res => {
      console.log(res.data.data.admin)
      setAdmin(res.data.data.admin)
    }).catch(err => console.log(err))
  }
  
  useEffect(() => {
      getAdmin()
  }, [])
    return(   
    <>
      <SideBar />
      <div className="relative bg-[#D9D9D9] md:ml-64">
      <HeadBar />

      {/* Title */}
      <div className='container px-8 mx-auto my-10 pb-28'>
        <div className='bg-white border rounded-lg shadow-lg p-10'>
            <div className='flex flex-row w-full px-2'> 
            <div className='flex flex-row w-1/2'>
            <h1 className='text-xl mb-2 font-bold'>Admin</h1>
            </div>
            <div className='flex relative flex-row w-1/2 '>
            {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </div> */}
            {/* <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-80 pl-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search"></input> */}
            {/* <Link to={`/AddAdmin`}><button className="text-white absolute right-5  bg-[#85C681] font-medium rounded-lg text-sm px-4 py-2"> 
        Add</button></Link> */}
            </div>
            </div>
           
          {/* Table */}
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto my-10'>
          <div className='inline-block min-w-full shadow overflow-hidden'>
            <table className='min-w-full leading-normal '>
              <thead>
                <tr>
                  <th className='px-5 py-3 border-b-2  text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    No
                  </th>
                  <th className='px-5 py-3 border-b-2 text-center  text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    Admin ID
                  </th>
                  <th className=' px-5 py-3 border-b-2  text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    Name
                  </th>
                  <th className=' px-5 py-3 border-b-2 text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    Email
                  </th>
                  <th className=' px-5 py-3 border-b-2  text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    Actions
                  </th>
                </tr>
              </thead>

            <tbody>
            {
                (admin.length > 0) ? (
                  admin.map((item, index) => {
                return(
              <tr>
                <td className='px-5 py-5 text-sm text-center'>
                {index + 1}
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>{item?.id}</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>{item?.fullname_admin}</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>{item?.email_admin}</p>
                </td>
                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-gray-800 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        {/* <div class="w-4 mr-2 transform hover:text-gray-800 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-gray-800 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div> */}
                                    </div>
                                </td>
                         </tr>
                             )
                            })
                          ):(
                         <tr>
                            <td colSpan="4" className="text-center">No data</td>
                        </tr>
                        )}
                 </tbody>
            </table>
          </div>
          {/* <div className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between '>
            <div className="inline-flex mt-2 xs:mt-0">
							<button className="text-sm text-indigo-50 transition duration-150 bg-[#85C681] font-semibold py-2 px-4 rounded-lg">
              Prev
              </button>
							&nbsp; &nbsp;
							<button className="text-sm text-indigo-50 transition duration-150 bg-[#85C681] font-semibold py-2 px-4 rounded-lg">
              Next
              </button>
						</div>
            </div>
            */}
        </div>
        </div>
      </div>
      </div>
  </>
    );
  }
  
  