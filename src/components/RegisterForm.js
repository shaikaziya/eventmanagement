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
        <h1>Register here</h1>
            <p>Sign up into your account</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your Name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              id="email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              id="Password"
            />
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
