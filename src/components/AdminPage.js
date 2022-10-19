import "../css/adminpage.css";
import { AdminPageEventCards } from "./AdminPageEventCards";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export function AdminPage() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-1">
        <div className="container-fluid">
          <h6 className="adminpage">ADMIN PAGE</h6>
          {/* <a className="navbar-brand" href="/">
            List of All Events
          </a> */}
          {/* <a className="navbar-brand" href="participatelist">
            Participate List
          </a> */}

          <Button onClick={() => navigate("/participatelist")} color="secondary"><KeyboardArrowRightIcon/>Participate List</Button>

          <button className="btn btn-outline-success" type="submit">
            Logout
          </button>
        </div>
      </nav>

      <div className="container">
       
          <p>All Event Data</p>
          <button className="btn btn-primary" type="button"  onClick={() => navigate("/addnewevent")}>Add Event</button>
         
          </div>
          <AdminPageEventCards/>
        </div>
     
  );
}
