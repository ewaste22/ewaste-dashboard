import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Transactions from './pages/transactions/Transactions';
import Category from './pages/category/Category';
import Waste from './pages/waste/Waste';
import Pickup from './pages/pickup/Pickup';
import News from './pages/news/News';
import Admin from './pages/manageUser/Admin';
import Courier from './pages/manageUser/Courier';
import User from './pages/manageUser/User';
import { AddNews } from './pages/news/AddNews';
import { AddWaste } from './pages/waste/AddWaste';
import { AddPickup } from './pages/pickup/AddPickup';
import { AddCategory } from './pages/category/AddCategory';
import { AddAdmin } from './pages/manageUser/AddAdmin';
import { AddCourier } from './pages/manageUser/AddCourier';
import { AddUser } from './pages/manageUser/AddUser';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/addadmin' element={<AddAdmin/>} />
        <Route path="/courier" element={<Courier />} />
        <Route path='/addcourier' element={<AddCourier/>} />
        <Route path="/user" element={<User />} />
        <Route path='/adduser' element={<AddUser/>} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/waste" element={<Waste />} />
        <Route path='/addwaste' element={<AddWaste/>} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/addpickup" element={<AddPickup />} />
        <Route path="/news" element={<News />} />
        <Route path="/addnews" element={<AddNews />} />
        <Route path="/category" element={<Category />} />
        <Route path="/addcategory" element={<AddCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
