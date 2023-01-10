import HeadBar from "../../components/dashboard/HeadBar";
import SideBar from "../../components/dashboard/SideBar";
import { AiOutlineBell } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaDropbox } from "react-icons/fa";
import { CategoryDashboard } from "./CategoryDasboard";
import { IoMdExit } from "react-icons/io";
import userImage from '../../asset/img/user.png';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const labels = ["Jul", "Aug", "Sept", "Oct", "Nov", "Des"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 200, 250, 300, 350, 400],
        backgroundColor: "#85C681",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Transaction Summary",
      },
    },
  };
  return (
    <>
      <SideBar />
      <div className="relative bg-[#D9D9D9] md:ml-64">
      <HeadBar />

        <div className="grid grid-cols-1 gap-4 px-10 pb-5 md:grid-cols-2">
          <div className="flex w-full flex-row items-center gap-3 rounded-xl bg-white px-3 py-12">
            {/* <image src='/user.png' alt='user' className='rounded-full w-[40px] h-[40px]'/> */}
            <BiUser className="h-[100px] w-[100px]" />
            <p className="text-[50px] font-bold">193 USER</p>
          </div>
          <div className="flex w-full flex-row items-center gap-3 rounded-xl bg-white px-3 py-12">
            {/* <image src='/user.png' alt='user' className='rounded-full w-[40px] h-[40px]'/> */}
            <GrUserWorker className="h-[100px] w-[100px]" />
            <p className="text-[50px] font-bold">20 Courier </p>
          </div>
        </div>

        <div className="container mx-auto mb-6 flex max-w-[67rem] flex-col items-center justify-center rounded-xl bg-white md:px-12">
          <h1 className="py-2 text-[32px] leading-10">Transaction Summary</h1>
          <Bar data={data} options={options} />
        </div>

        <div className="mb-6 px-10">
          <div className="grid grid-cols-2 gap-4 rounded-xl bg-white px-10 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-2 py-4">
              <FaDropbox className="h-[125px] w-[120px]" />
              <h3 className="text-2xl font-medium">Pickup</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-2xl font-medium">Perlu diproses</h3>
              <div className="flex h-[72px] w-[70px] items-center justify-center rounded-3xl bg-red-500 text-center text-3xl text-white">
                <h2>1</h2>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-2xl font-medium">Perlu diproses</h3>
              <div className="flex h-[72px] w-[70px] items-center justify-center rounded-3xl bg-red-500 text-center text-3xl text-white">
                <h2>1</h2>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-2xl font-medium">Perlu diproses</h3>
              <div className="flex h-[72px] w-[70px] items-center justify-center rounded-3xl bg-red-500 text-center text-3xl text-white">
                <h2>1</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 pb-6">
          <div className="flex flex-row rounded-xl bg-white px-3 py-3">
            <CategoryDashboard />
            <div className="flex flex-col items-center justify-center gap-7 pl-8">
              <h1 className="text-2xl">Waste By Categories</h1>
              <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-3">
                <div className="flex flex-row items-center gap-2">
                  <div className="h-[42px] w-[40px] rounded-xl bg-[#E61C24]"></div>
                  <p>Temperature exchange equipment</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="h-[42px] w-[40px] rounded-xl bg-[#2C5EBF]"></div>
                  <p>Lamps</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="h-[42px] w-[40px] rounded-xl bg-[#902CBF]"></div>
                  <p>Small equipment</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="h-[42px] w-[40px] rounded-xl bg-[#2D5030]"></div>
                  <p> Screens and monitors</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="h-[42px] w-[40px] rounded-xl bg-[#FE9B00]"></div>
                  <p>Large equipment</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="h-[42px] w-[40px] rounded-xl bg-[#75A8C3]"></div>
                  <p>Small IT and Telecommunication <br/> equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
