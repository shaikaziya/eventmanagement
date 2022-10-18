import "../css/loginform.css";

export function LoginForm() {
  return (
    <div className="container1">
      <div className="container">
        <div className="image">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-2578971-2147152.png"
            alt=""
          ></img>
        </div>

        <div className="form-boxes">
          <form>
            <h1 className="login1">Login</h1>
            <p className="login2">Sign into your account</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your Name"
                aria-describedby="emailHelp"
              /><br/>
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

            <button type="button" className="btn btn-dark">
              login
            </button>
          </form>
          <hr />
          <p>
            Don't have an account? <a href="registerform">Register here</a>
          </p>
          <hr />
          <br />
          <p>
            Admin account? <a href="adminlogin">Admin</a>
          </p>
        </div>
      </div>
    </div>
  );
}
