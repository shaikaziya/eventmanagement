import "../css/adminpage.css";
import { AdminPageEventCards } from "./AdminPageEventCards";

export function AdminPage() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-1">
        <div className="container-fluid">
          <h6>ADMIN PAGE</h6>
          <a className="navbar-brand" href="/">
            List of All Events
          </a>
          <a className="navbar-brand" href="/">
            Participate List
          </a>

          <button className="btn btn-outline-success" type="submit">
            Logout
          </button>
        </div>
      </nav>

      <div className="container">
        <div>
          <p>All Event Data</p>
        </div>
        <div>
          <button>Add Event</button>
        </div>
        <AdminPageEventCards/>

        
          </div>
        </div>
     
  );
}
