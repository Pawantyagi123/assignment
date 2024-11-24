import React from 'react'
import { CiLock } from "react-icons/ci";

export default function PasswReset() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center"
      style={{ padding: "20px" }}
    >
      <div
        className="bg-white p-3 shadow rounded d-flex flex-column justify-content-between align-items-center"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="mb-4  w-25">
          <CiLock size={50} style={{color: "#8e2de2"}} />
        </div>
        <h1 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>
          Reset Your Password
        </h1>
        <p className="mb-4 text-muted">
          Forgot your password? Please enter your email, and we'll send you a
          verification link.
        </p>
        <form className='w-75'>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            className="form-control mb-3"
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <button
            type="submit"
            className="btn btn-block"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "600",
              backgroundColor:"#8e2de2",
              color:"white"
            }}
          >
            Send Verification link
          </button>
        </form>
      </div>
    </div>
  )
}
