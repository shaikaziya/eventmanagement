import "../css/addevent.css";

export function AddEvent() {
  return (
    <div className="addeventclass">
        
        <div className="form-boxes">
        <p>Add New Event</p><br></br>
          <form>
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

            <button type="button" class="btn btn-dark">
              Add New Event 
            </button>
          </form>
         
         
        </div>
      </div>
  );
}
