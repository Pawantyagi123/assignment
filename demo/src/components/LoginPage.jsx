import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock  } from "react-icons/fa";
import image from "./Image/loginimg.png"

export default function LoginPage({ open, setOpen }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

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
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {open ? (
  <div className="d-flex justify-content-center align-items-center h-auto bg-transparent">
    <div
      className="row w-100 p-4"
      style={{ maxWidth: "900px" }} // Ensuring a max-width for better responsiveness
    >
      {/* Left side with blue background */}
      <div className="col-md-6 bg-primary text-white d-flex justify-content-center align-items-center p-4 flex-column">
        <h2 className="text-center">Welcome Back to Testfy*</h2>
        <img src={image} alt="" style={{width: "300px"}}/>
      </div>

      {/* Right side with form */}
      <div className="col-md-6 bg-white p-4">
        <h1 className="text-center mb-4" style={{fontWeight:"bolder"}}>Hi'There</h1>

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-dark w-100">
            Submit
          </button>
        </form>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <a href="#" className="text-decoration-none text-dark">
            Forgot Password?
          </a>
          <Link to="#" className="text-decoration-none text-dark">
            No account? Signup
          </Link>
        </div>

        <div className="mt-4 text-center">
          <p className="small">
            By clicking Login or signing in through a third party, you
            accept the Terms of Service and acknowledge the Privacy and
            Cookie Policies.
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
