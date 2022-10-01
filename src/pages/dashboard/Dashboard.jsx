import HeadBar from '../../components/dashboard/HeadBar';
import SideBar from '../../components/dashboard/SideBar';

export default function Dashboard() {
  return (
    <>
      <SideBar />
      <div className="relative bg-stone-100 md:ml-64">
        <HeadBar />
      </div>
    </>
  );
}
