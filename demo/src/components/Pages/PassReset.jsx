import React, { useState } from 'react'

import { CiLock } from "react-icons/ci";
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PassReset() {
  const [resetEmail, setResetEmail] = useState("");
  const navigate = useNavigate()

  const data = {
    email: resetEmail
  }

const handleSubmit = async(e)=>{
  e.preventDefault()
  // const res = await axios.post("", data)

  console.log(data)
}
  return (
    <div
      className="reset-page d-flex flex-column justify-content-center align-items-center  text-center"
      style={{ padding: "10px" }}
    >
      <div
        className="pass-form p-3 d-flex flex-column justify-content-between align-items-center"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <div className="mb-4 w-25">
          <CiLock size={50} style={{color: "#8e2de2"}} />
        </div>
        <h1 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>
          Reset Your Password
        </h1>
        <p className="mb-4">
          Forgot password? Please enter your email.
        </p>
        <form className='w-100' onSubmit={handleSubmit}>
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
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
          </div>
          <button
            type="submit"
            className="btn btn-block"
            style={{
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
