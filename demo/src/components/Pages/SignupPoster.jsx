import "../css/signupLogin.css"

import React from 'react'
import gif from "../Image/robot.gif"
import logo from "../Image/logo.webp"

export default function SignupPoster() {
  return (
    <>
    <div>
      <img src={logo} alt="logo" style={{width:"100px", height: "100px",borderRadius: "50%"}}/>
          <h2 className="mb-3 text-center fs-4">Welcome To Testify*</h2>
          </div>
          <div className='poster-img'>
            <img src={gif} alt="" className='img-gif'/>
          </div>
          <div className='poster-text'>
          <h3>Start your Journey with us</h3>
          <p>Get in touch with us to know more about our services</p>
          </div>
    </>
  )
}
