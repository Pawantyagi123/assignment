import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="d-flex justify-content-center align-items-center h-auto">
          <div
            className="bg-transparent  w-100 p-4"
            style={{ maxWidth: "400px", backdropFilter: "blur(10px)" }}
          >
            <h1 className="text-center mb-4">Login</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">
                  Email address
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
                <label htmlFor="password" className="form-label text-white">
                  Password
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
              <Link to="/register" className="text-decoration-none text-dark">
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
      ) : (
        ""
      )}
    </>
  );
}
