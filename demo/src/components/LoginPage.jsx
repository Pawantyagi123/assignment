import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import image from "./Image/loginimg.png";
import { Context } from "./Context/Context";
import logo from "./Image/testfy (1).png";
import {toast} from "react-toastify"

export default function LoginPage() {
  const { openLogin, setOpenLogin, openSignup, setOpenSignup } =
    useContext(Context);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

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

  // sendig form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("", data);
      console.log(res);
      setData("");
      setOpenLogin(false);
      toast.success("Welcome user")
    } catch (error) {
      console.log(error);
      toast.error(error)
    }
  };

  return (
    <>
      {openLogin ? (
       <div className="login-page">
         {/* Left side with blue background */}
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
               <label htmlFor="email" className="form-label fs-5">
                 Email
               </label>
               <div className="input-group">
                 <span className="input-group-text">
                   <MdEmail />
                 </span>
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
             <NavLink to={"#"} className=" text-white">
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
     
     
      ) : (
        ""
      )}
    </>
  );
}
