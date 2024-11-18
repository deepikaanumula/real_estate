import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeSection from './components/HomeSection';
import AdminRegister from './components/AdminRegister';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  const token = localStorage.getItem('token');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/mnadmin' element={<HomeSection />}></Route>
          <Route path='/Register' element={<AdminRegister />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          


        </Routes>

      </BrowserRouter>
    </div>
  );

}
export default App;
