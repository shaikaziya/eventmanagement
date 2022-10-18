import "../css/adminlogin.css";
import { useNavigate } from "react-router-dom";
export function AdminLogin() {
  const navigate = useNavigate();
  return (
    <div >
      <div className="container">
        <div className="image">
          <img src="https://media.gettyimages.com/photos/-picture-id1256651755?s=612x612"  alt=""></img>
        </div>

        
        <div className="form-boxes">
          <form>
            <h1 className="admin1">Admin here</h1>
            <p className="admin1">Admin account</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Email"
                value="adminlogin@gmail.com"
                id="email"
              />
              <br/>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                value="admin"
                id="Password"
              />
              <br/>
            </div>

            <button
              type="button"
              class="btn btn-dark"
              onClick={() => navigate("/adminpage")}
            >
              Admin login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
