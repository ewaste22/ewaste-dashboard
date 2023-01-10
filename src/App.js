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
import NavigateToDashboard from './auth/NavigateToDashboard';
import ProtectedToken from './auth/ProtectedToken';

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
const [users, setUsers] = useState("");
  const whoami = () => {
    axios
      .get('http://localhost:8000/api/v1/auth/admin/whoami', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.data);
      });
  };

  useEffect(() => {
    whoami();
  },[])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedToken>
            <Dashboard />
          </ProtectedToken>
        } />
        <Route path="login" element={
          <NavigateToDashboard users={users}>
          <Login />
          </NavigateToDashboard>
        } />
        <Route path="admin" element={
           <ProtectedToken>
           <Admin />
         </ProtectedToken>
        } />
        <Route path='addadmin' element={
         <ProtectedToken>
           <AddAdmin />
         </ProtectedToken>
        } />
        <Route path="courier" element={
           <ProtectedToken>
           <Courier />
           </ProtectedToken>
        } />
        <Route path='addcourier' element={
          <ProtectedToken>
          <AddCourier />
          </ProtectedToken>
        } />
        <Route path="/user" element={
          <ProtectedToken>
          <User />
          </ProtectedToken>
        } />
        <Route path='adduser' element={
          <ProtectedToken>
          <AddUser />
          </ProtectedToken>
        } />
        <Route path="transactions" element={
          <ProtectedToken>
          <Transactions />
          </ProtectedToken>
        } />
        <Route path="waste" element={
          <ProtectedToken>
          <Waste />
          </ProtectedToken>
        } />
        <Route path='addwaste' element={
          <ProtectedToken>
          <AddWaste />
          </ProtectedToken>
        } />
        <Route path="pickup" element={
          <ProtectedToken>
          <Pickup />
          </ProtectedToken>
        } />
        <Route path="addpickup" element={
          <ProtectedToken>
          <AddPickup />
          </ProtectedToken>
        } />
        <Route path="news" element={
          <ProtectedToken>
          <News />
          </ProtectedToken>
        } />
        <Route path="addnews" element={
          <ProtectedToken>
          <AddNews />
          </ProtectedToken>
        } />
        <Route path="category" element={
          <ProtectedToken>
          <Category />
          </ProtectedToken>
        } />
        <Route path="addcategory" element={
          <ProtectedToken>
          <AddCategory />
          </ProtectedToken>
        } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
