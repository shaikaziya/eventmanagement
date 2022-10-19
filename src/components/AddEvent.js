import "../css/addevent.css";
import { useNavigate } from "react-router-dom";

export function AddEvent() {
  const navigate = useNavigate();
  const createEvent = (newEvent)=>{

    console.log("createEvent 111111111111", newEvent)
    fetch("https://62f4b482535c0c50e7608294.mockapi.io/addnewevent",{
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((data) => data.json())
    .then(() => navigate("participatelist"));

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

            <button     onClick={() => { navigate("participatelist");
        }} 
           type="button" className="btn btn-dark" >
              Add New Event 
            </button>
          </form>
         
         
        </div>
      </div>
  );
}



