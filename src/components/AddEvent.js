import "../css/addevent.css";
import { useNavigate } from "react-router-dom";

export function AddEvent() {
  const navigate = useNavigate();
  const createEvent = (newEvent)=>{

    console.log("createUser", newEvent)
    fetch("https://62f4b482535c0c50e7608294.mockapi.io/addnewevent",{
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((data) => data.json())
    .then(() => navigate("/"));

   }
  
  return (
    <div className="addeventclass">
        
        <div className="form-boxes">
        <p>Add New Event</p><br></br>
          <form onSubmit={(newEvent)=>{
            createEvent(newEvent)}}>
            <p>Image URL</p>
            
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="img-url"
                required 
              /><br/>
            </div>


            <div className="form-group">
                <p>Eventname</p>
              <input
                type="text"
                className="form-control"
                id="eventname"
                placeholder="Event Name"
                required 
              /><br/>
            </div>
            

            <div className="form-group">
                <p>Event Date</p>
              <input
                type="date"
                className="form-control"
                placeholder="dd-mm-yyyy"
                id="date"
                required 
              />
              <br/>
            </div>

            <button type="button" className="btn btn-dark">
              Add New Event 
            </button>
          </form>
         
         
        </div>
      </div>
  );
}



// onSubmit: (newUser)=>{
//   //  console.log("onSubmit",values);
//    createUser(newUser)
//   }
//  })

//  const createUser = (newUser)=>{

//   console.log("createUser", newUser)
//   fetch("https://62f4b482535c0c50e7608294.mockapi.io/users",{
//     method: "POST",
//     body: JSON.stringify(newUser),
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })
//   .then((data) => data.json())
//   .then(() => navigate("/"));

//  }