// import './App.css';
import { LoginForm } from './components/LoginForm';
import {RegisterForm} from './components/RegisterForm'
import { AdminLogin } from './components/AdminLogin';
import { AdminPage } from './components/AdminPage';
import {AddEvent} from "./components/AddEvent"
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <section className='appclass'>
    <div className="App">
       <Routes>
    <Route path="/" element={<LoginForm/>} />
    <Route path="/registerform" element={<RegisterForm/>} />
    <Route path="/adminlogin" element={<AdminLogin/>} />
    <Route path="/adminpage" element={<AdminPage/>} />
    <Route path="/addnewevent" element={<AddEvent/>} />
          </Routes>  
      



    </div>
    </section>
  );
}


