import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEvent(){

    const {id} = useParams()

   const[user,setUser]=useState(null)
   useEffect(()=>{
    fetch(`https://62f4b482535c0c50e7608294.mockapi.io/addnewevent/${id}`,{method: "GET",})
    .then(data=>data.json())
    .then((use)=>setUser(use))
  },[])


     return(
        user ? <EditUserForm user={user}/> : "Loading.."
     )
}


function EditUserForm({user}){

    const[name, setName]=useState(user.name)
    const[username, setUsername]=useState(user.username)
    const[email,setEmail]=useState(user.email)
   
    const navigate=useNavigate()
  
    return(
        <div className="container mt-5">
        <div className="w-50 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <input 
          className="form-control form-control-lg mt-3" 
          value={name}
           onChange={(event)=> setName(event.target.value)}
          type="text" 
          placeholder="edit name" 
          aria-label=".form-control-lg example" />
          <input 
          className="form-control form-control-lg mt-3" 
          value={username}
           onChange={(event)=> setUsername(event.target.value)}
          type="username" 
          placeholder="edit username" 
          aria-label=".form-control-lg example" />
          <input 
          className="form-control form-control-lg mt-3" 
          value={email}
           onChange={(event)=> setEmail(event.target.value)}
          type="email" 
          placeholder="edit email" 
          aria-label=".form-control-lg example" />
          <div className="d-grid gap-2 col-6 mx-auto">
  <button
  onClick={()=>{
    const updatedUser={
          name:name,
          username:username,
          email:email,
    }
fetch(`https://62f4b482535c0c50e7608294.mockapi.io/addnewevent/${user.id}`,
{method: "PUT",
   body: JSON.stringify(updatedUser),
   headers: {
    "Content-Type": "application/json",
   }
 })
.then(data=>data.json())
 .then(()=>navigate("/adminpage")) 
}
}
   className="btn btn-info mt-3" type="submit">Add New Event</button>
  </div>
          </div>
          </div>
    )
}