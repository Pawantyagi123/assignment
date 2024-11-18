import React from 'react'
import gif from "../Image//gif2.gif"
import image from "../Image/about-image.avif"
export default function About() {
  return (
    <div className="about-page d-flex justify-content-between align-items-center">
    <div className="about-text d-flex flex-column gap-4 align-items-start">
      <div className='d-flex justify-content-center align-items-center'>
        <img src={gif} alt="" width="100px" className='image gif-image'/>
      <h1>About Us</h1>
      </div>
      <h2>Your Experience Is Everything To Us</h2>
      <div className="about-image">
        <img src={image} alt="image" />
      </div>
      <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab distinctio quidem nesciunt, eligendi autem eveniet natus quis harum unde praesentium, odit ex accusamus vel. Cupiditate, nisi facere minima aspernatur dolorum unde perspiciatis incidunt culpa quasi, laborum enim ipsam omnis delectus?</p>
    </div>

      <div className="gif-img">
        <img src={gif} alt="Developer Coding"/>
      </div>

  </div>
  
  )
}
