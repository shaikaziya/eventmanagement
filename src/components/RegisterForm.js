import "../css/registerform.css";

export function RegisterForm() {
  return (
    <div>
      <div className="container">
        <div className="image">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-2578971-2147152.png" alt=""></img>
        </div>
        <div className="form-boxes">
        <form>
        <h1 className="register1">Register here</h1>
            <p className="register2">Sign up into your account</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your Name"
              aria-describedby="emailHelp"
            />
            <br/>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              id="email"
            />
            <br/>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              id="Password"
            />
            <br/>
          </div>
          
          <button type="button" class="btn btn-dark">Register</button>
           
        
         
        </form>
        <hr/>
        <p>Click here to Login Page ⬇ Login</p>
      
        </div>
      </div>
    </div>
    
  );
}
