import "../css/adminpage.css";
import { AdminPageEventCards } from "./AdminPageEventCards";
import { useNavigate } from "react-router-dom";
export function AdminPage() {
  const navigate = useNavigate();
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
       
          <p>All Event Data</p>
          <button class="btn btn-primary" type="button"  onClick={() => navigate("/addnewevent")}>Add Event</button>
         
          </div>
          <AdminPageEventCards/>
        </div>
     
  );
}
