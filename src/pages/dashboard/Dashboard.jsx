import HeadBar from '../../components/dashboard/HeadBar';
import SideBar from '../../components/dashboard/SideBar';
import { AiOutlineBell } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GrUserWorker } from 'react-icons/gr';

export default function Dashboard() {
  return (
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
          <div className='bg-white rounded-md w-[207px] flex flex-row gap-3 items-center px-3 py-1'>
            {/* <image src='/user.png' alt='user' className='rounded-full w-[40px] h-[40px]'/> */}
            <p className=''>Lee Ji Eun / IU</p>
          </div>
        </div>

          <div className='flex flex-row gap-12 w-full px-10 pb-5'>
            <div className='bg-white rounded-md w-full flex flex-row gap-3 items-center px-3 py-12'>
              {/* <image src='/user.png' alt='user' className='rounded-full w-[40px] h-[40px]'/> */}
              <BiUser className='w-[100px] h-[100px]'/>
              <p className='text-[50px] font-bold'>193 USER</p>
            </div>
            <div className='bg-white rounded-md w-full flex flex-row gap-3 items-center px-3 py-12'>
              {/* <image src='/user.png' alt='user' className='rounded-full w-[40px] h-[40px]'/> */}
              <GrUserWorker className='w-[100px] h-[100px]'/>
              <p className='text-[50px] font-bold'>20 Courier </p>
            </div>
          </div>
      </div>
    </>
  );
}
