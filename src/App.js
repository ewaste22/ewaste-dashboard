import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Transactions from './pages/transactions/Transactions';
import Category from './pages/category/Category';
import Waste from './pages/waste/Waste';
import Pickup from './pages/pickup/Pickup';
import News from './pages/news/News';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/waste" element={<Waste />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/news" element={<News />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
