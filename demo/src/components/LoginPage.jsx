import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock  } from "react-icons/fa";
import image from "./Image/loginimg.png"
import { Context } from "./Context/Context";
import logo from "./Image/testfy (1).png"

export default function LoginPage() {
  const {openLogin,setOpenLogin, openSignup,setOpenSignup} = useContext(Context);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
 
  const handleSignup = () =>{
    setOpenLogin(!openLogin);
    setOpenSignup(!openSignup)
  }
 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // sendig form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("", data);
      console.log(res);
      setData("");
      setOpenLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {openLogin ? (
  <div className="d-flex justify-content-center align-items-center h-auto bg-transparent">
    <div
      className="row w-100"
      style={{ maxWidth: "900px" }} // Ensuring a max-width for better responsiveness
    >
      {/* Left side with blue background */}
      <div className="col-md-6 bg-transparent text-white d-flex justify-content-center align-items-center p-4 flex-column">
  <img src={logo} alt="logo" style={{width:"100px", height: "100px",borderRadius: "50%"}}/>
        <h2 className="text-center">Welcome Back</h2>
        <img src={image} alt="" style={{width: "300px"}} className="login-gif"/>
      </div>

      {/* Right side with form */}
      <div className="col-md-6 p-4 rounded login-form">
  <h1 className="text-center mb-4" style={{ fontWeight: "bolder" }}>
   Login
  </h1>

  <form onSubmit={handleSubmit}>
    {/* Email Input */}
    <div className="mb-3">
      <label htmlFor="email" className="form-label fs-5">
        <MdEmail />
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={data.email}
        onChange={handleInput}
        required
      />
    </div>

    {/* Password Input */}
    <div className="mb-3">
      <label htmlFor="password" className="form-label fs-5">
        <FaLock />
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={data.password}
        onChange={handleInput}
        required
      />
    </div>

    {/* Submit Button */}
    <button type="submit" className="btn btn-dark w-100">
      Login
    </button>
  </form>

  {/* Links Section */}
  <div className="d-flex justify-content-between align-items-center mt-3">
    <NavLink
      to={"#"}
      className=" text-white"
      
    >
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

  {/* Terms and Privacy Section */}
  <div className="mt-4 text-center">
    <p className="small">
      By logging in or signing in through a third party, you accept the{" "}
      <a href="/termsandPolicy" className="text-blue">
        Terms of Service and Privacy and Cookie Policies.
      </a>
    </p>
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
