import HeadBar from '../../components/dashboard/HeadBar';
import SideBar from '../../components/dashboard/SideBar';
import { AiOutlineBell } from 'react-icons/ai';
import { IoMdExit } from "react-icons/io";

export default function Transactions() {
    return(   
    <>
    <SideBar />
    <div className="relative bg-[#D9D9D9] md:ml-64">
      {/* <HeadBar /> */}
      <div className='flex flex-row grow gap-4 w-full px-10 py-10'>
        <div className='bg-white rounded-md w-full flex flex-row gap-3 items-center px-3 py-1'>
          {/* <image src='/user.png' alt='user' className='rounded-full w-[40px] h-[40px]'/> */}
          <p className=''>Good Morning, Lee Ji Eun! </p>
        </div>
        <div className='bg-white rounded-full flex items-center justify-center p-2'>
          <AiOutlineBell className='w-[35px] h-[35px]'/>
        </div>
        <div className="flex w-[160px] flex-row items-center gap-3 rounded-md bg-white px-3 py-1">
            {/* <image src='/user.png' alt='user' className='rounded-full w-[40px] h-[40px]'/> */}
            <p className="">Logout</p>
            <IoMdExit  className="h-[35px] w-[25px]" />
          </div>
      </div>

      {/* Title */}
      <div className='container px-8 mx-auto my-10 pb-28'>
        <div className='bg-white border rounded-lg shadow-lg p-10'>
            <div className='flex flex-row w-full px-2'> 
            <div className='flex flex-row w-1/2'>
            <h1 className='text-xl mb-2 font-bold'>Transaction List</h1>
            </div>
            <div className='flex relative flex-row w-1/2 '>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </div>
            <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-80 pl-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search"></input>
             <button type="submit" class="text-white absolute right-5  bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
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
                  <th className='px-5 py-3 border-b-2  text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    ID
                  </th>
                  <th className='px-5 py-3 border-b-2  text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    Date
                  </th>
                  <th className='px-5 py-3 border-b-2  text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    Customer Name
                  </th>
                  <th className='px-5 py-3 border-b-2  text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    Status Transaction
                  </th>
                  <th className='px-5 py-3 border-b-2  text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    Total Quantity
                  </th>
                  <th className='px-5 py-3 border-b-2  text-center text-xs font-semibold text-gray-600 uppercase tracking-wide'>
                    Actions
                  </th>
                </tr>
              </thead>

            <tbody>
              <tr>
                <td className='px-5 py-5 text-sm text-center'>
                  1
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>00001</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>24-10-2022</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>Kim Jiso</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>Success</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>5 Items</p>
                </td>
                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-gray-800 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                    </div>
              </td>
              </tr>

              <tr>
                <td className='px-5 py-5 text-sm text-center'>
                  2
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>00002</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>23-10-2022</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>Kim Jennie</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>Success</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>10 Items</p>
                </td>
                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-gray-800 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                    </div>
              </td>
              </tr>

              <tr>
                <td className='px-5 py-5 text-sm text-center'>
                  3
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>00003</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>22-10-2022</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>Lalisa</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>Cancel</p>
                </td>
                <td className='px-5 py-5 text-sm text-center'>
                  <p>7 Items</p>
                </td>
                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-gray-800 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                    </div>
              </td>
              </tr>
            </tbody>
            </table>

           
          </div>
          {/* <div className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between '>
            <div className="inline-flex mt-2 xs:mt-0">
							<button className="text-sm text-indigo-50 transition duration-150 bg-gray-700 hover:bg-gray-800 font-semibold py-2 px-4 rounded-lg">
              Prev
              </button>
							&nbsp; &nbsp;
							<button className="text-sm text-indigo-50 transition duration-150 bg-gray-700 hover:bg-gray-800 font-semibold py-2 px-4 rounded-lg">
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
  
  