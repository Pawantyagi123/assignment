import React from 'react'
import gif from "../Image//gif2.gif"
import image from "../Image/about-image.avif"
export default function About() {
  return (
    <div className="about-page d-flex justify-content-between align-items-center">
    <div className="about-heading d-flex flex-column justify-content-start gap-4">
      <div className='d-flex justify-content-start align-items-center'>
        <img src={gif} alt="" width="100px" className='image gif-image'/>
      <h1>About Us</h1>
      </div>
      <h1>Your Experience Is Everything To Us</h1>
      <div className="about-image d-flex justify-content-center">
        <img src={image} alt="Artificial Intelligence" />
      </div>
      <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab distinctio quidem nesciunt, eligendi autem eveniet natus quis harum unde praesentium, odit ex accusamus vel. Cupiditate, nisi facere minima aspernatur dolorum unde perspiciatis incidunt culpa quasi, laborum enim ipsam omnis delectus?</p>
    </div>
    <div className="about-content">
      <div className="about-image gif-image">
        <img src={gif} alt="Developer Coding"/>
      </div>
    </div>
  </div>
  
  )
}
