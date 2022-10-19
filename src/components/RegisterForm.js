import "../css/registerform.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const userValidationSchema = yup.object({
  name: yup.string().required("Why not fill the name?"),
  email: yup
    .string()
    .min(3, "Need a longer email😆")
    .required("why not fill the email?"),
  password: yup
    .string()
    .min(5, "Need a longer password😆")
    .required("why not fill the password?"),
});
export function RegisterForm() {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: userValidationSchema,
    onSubmit: (newUser) => {
      //  console.log("onSubmit",values);
      createUser(newUser);
    },
  });

  const createUser = (newUser) => {
    console.log("createUser", newUser);
    fetch("https://62f4b482535c0c50e7608294.mockapi.io/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/"));
  };

  const navigate = useNavigate();

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
          <form onSubmit={formik.handleSubmit}>
            <h1 className="register1">Register here</h1>
            <p className="register2">Sign up into your account</p>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
                aria-label=".form-control-lg example"
              />

              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
              <br></br>
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
                aria-label=".form-control-lg example"
              />
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
              <br></br>
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your password"
                aria-label=".form-control-lg example"
              />
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}

              <br />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">

            <button onClick={createUser} className="btn btn-dark" type="submit">Register</button>
              
            {/* <button onClick={navigate("/")} className="btn btn-dark" type="submit">Register</button> */}
              
            </div>
          </form>
          <hr />
          <p>Click here to Login Page ⬇<a href="/">   Login</a> </p>
        </div>
      </div>
    </div>
  );
}
