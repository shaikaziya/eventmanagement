// import './App.css';
import { LoginForm } from './components/LoginForm';
import {RegisterForm} from './components/RegisterForm'
import { AdminLogin } from './components/AdminLogin';
import { AdminPage } from './components/AdminPage';
import {AddEvent} from "./components/AddEvent"
import {AddUser} from "./components/AddUser"
import {ParticipateList} from "./components/ParticipateList"
import {Registerdummy} from "./components/Registerdummy"
import {EditEvent} from "./components/EditEvent"
import {ViewUser} from "./components/ViewUser"
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
    <Route path="/create-user" element={<AddUser/>} />
    <Route path="/participatelist" element={<ParticipateList/>} />
    <Route path="/edit-user" element={<EditEvent/>} />
    {/* <Route path="/register" element={<Registerdummy/>} /> */}
    <Route path="/:id" element={<ViewUser/>} />
    
          </Routes>  
      

    </div>
    </section>
  );
}


