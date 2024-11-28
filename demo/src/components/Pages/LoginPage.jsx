import "../css/signupLogin.css"

import React, { useContext, useState } from "react";

import { Context } from "../Context/Context";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import image from "../Image/login.png";
import logo from "../Image/logo.webp";
import { toast } from "react-toastify";

export default function LoginPage() {
  const { openLogin, setOpenLogin, openSignup, setOpenSignup } =
    useContext(Context);
  const [data, setData] = useState({
    emailId: "",
    password: "",
  });

  const handleLogin = () => {
    setOpenLogin(!openLogin);
  }
  const handleSignup = () => {
    setOpenLogin(!openLogin);
    setOpenSignup(!openSignup);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // sending form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("", data);
      console.log(data);
      setData({
        emailId: "",
        password: "",
      });
      setOpenLogin(false);
      toast.success("Welcome user");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <>
      {openLogin ? (
        <div className="d-flex justify-content-between flex-column">
          {/* Left side with blue background */}
          <div className="d-flex justify-content-end">
            <button onClick={()=> setOpenLogin(false)} className="border-0 bg-transparent"><RxCross1 className="text-white fs-3"/></button>
          </div>
          <div className="login-page">
          <div className="bg-transparent text-white d-flex justify-content-center align-items-center p-4 flex-column">
            <img
              src={logo}
              alt="logo"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <h2 className="text-center">Welcome Back</h2>
            <img
              src={image}
              alt=""
              style={{ width: "300px" }}
              className="login-gif"
            />
          </div>

          {/* Right side with form */}
          <div className="p-4 rounded login-form">
            <h1 className="text-center mb-4" style={{ fontWeight: "bolder" }}>
              Login
            </h1>

            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="emailId" className="form-label fs-5">
                  Email
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="emailId"
                    name="emailId"
                    placeholder="Enter your email"
                    value={data.emailId}
                    onChange={handleInput}
                    required
                    autoComplete="true"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label fs-5">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={data.password}
                    onChange={handleInput}
                    required
                    autoComplete="false"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-dark w-100">
                Login
              </button>
            </form>

            {/* Links Section */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <NavLink to={"/resetpassword"} className=" text-white" onClick={handleLogin}>
                Forgot Password?
              </NavLink>
              <NavLink
                to={"register"}
                className="text-white"
                onClick={handleSignup}
              >
                No account? Signup
              </NavLink>
            </div>
          </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
