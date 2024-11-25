import React from 'react'
import { CiLock } from "react-icons/ci";
import { MdEmail } from 'react-icons/md';

export default function PasswReset() {
  return (
    <div
      className="reset-page d-flex flex-column justify-content-center align-items-center  text-center"
      style={{ padding: "20px" }}
    >
      <div
        className="pass-form p-3 d-flex flex-column justify-content-between align-items-center"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="mb-4  w-25">
          <CiLock size={50} style={{color: "#8e2de2"}} />
        </div>
        <h1 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>
          Reset Your Password
        </h1>
        <p className="mb-4">
          Forgot your password? Please enter your email, and we'll send you a
          verification link.
        </p>
        <form className='w-75'>
          <div className='input-group mb-3'>
            <span className="input-group-text"><MdEmail/></span>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            className="form-control"
            style={{ padding: "10px", fontSize: "16px" }}
            required
            autoComplete='true'
          />
          </div>
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
