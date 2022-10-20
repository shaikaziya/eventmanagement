import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function ParticipateList(){

    const[users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getUsers()
    },[])

const getUsers=()=>{
    fetch("https://62f4b482535c0c50e7608294.mockapi.io/register")
.then(data => data.json())
.then((user)=>setUsers(user.reverse()))
}

    return(
        <div className="home">
 <Button  
      onClick={() => navigate(-1)}
      variant="contained" 
      startIcon={<ArrowBackIosIcon />}>
  BACK
</Button>
        
        <div className="container">
            <div className="py-4">
              <h1 className="text-center text-light">Participate List</h1>
             
              <table className="table table-light table-striped border shadow mt-4">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      {/* <th scope="col">Number</th>
      <th scope="col">Member</th>
      <th scope="col">Gender</th> */}
        {/* <th scope="col">Edit</th> */}
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>

     {
                users.map((use,index)=>(
                    <tr>
                       
                    <th scope="row">{index + 1}</th>
                    
                    <td>{use.name}</td>
                    <td>{use.email}</td>
                   
                    {/* <td>
                          <IconButton
                          onClick={()=>{
                              navigate("")
                          }}
                           className="btn btn-primary me-2">
                          <VisibilityIcon color="secondary"/>
                          </IconButton>
                        
                        
                        </td> */}
                        {/* <td>
                            
                                <IconButton onClick={()=>{
                                    navigate(`/edit-user/${use.id}`)
                                }}>
                                    <ModeEditIcon color="primary" />
                                </IconButton>
                            
                        
                        </td> */}
                        <td> 
                                <IconButton
                                onClick={()=>{
                                   fetch(`https://62f4b482535c0c50e7608294.mockapi.io/register/${use.id}`,{method: "DELETE",})
                                   .then(()=>getUsers())
                                   
                               }}
                                >
                                   <DeleteIcon color="error" />
                                </IconButton>

                            
                    
                    </td>
                    </tr>
                ))
                    
              }
  </tbody> 
</table>
            </div>
        </div>
        </div>
    )
}