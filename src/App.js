
import { LoginForm } from './components/LoginForm';
import {RegisterForm} from './components/RegisterForm'
import { AdminLogin } from './components/AdminLogin';
import { AdminPage } from './components/AdminPage';
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
       <Routes>
    <Route path="/" element={<LoginForm/>} />
    <Route path="/registerform" element={<RegisterForm/>} />
    <Route path="/adminlogin" element={<AdminLogin/>} />
    <Route path="/adminpage" element={<AdminPage/>} />
    
          </Routes>  
      



    </div>
  );
}


