import "../css/about.css"

import React from 'react'
import gif from "../Image//gif2.gif"
import image from "../Image/about-image.avif"

export default function About() {
  return (
    <div className="about-page d-flex justify-content-around align-items-center text-center">
    <div className="about-text d-flex flex-column gap-4 align-items-center">
      <div className='d-flex justify-content-center align-items-center'>
        <img src={gif} alt="" width="100px" className='image gif-image'/>
      <h1>About Us</h1>
      </div>
      <h2>Your Experience Is Everything To Us</h2>
      <div className='w-75'>
        <img src={image} alt="image" width={"100%"}/>
        </div>
      <p>Lorem ipsum dolor sit, amat consectetur adipisicing edit. Ab distinction quem nescient, legend ahem event nats ques harm nude presenting, doit ex accusals vel. Capitate, nisi facer minima aspirator dolour nude perspiciatis incident culpa quasi, labrum enid ipam omni defects?</p>
    </div>

      <div className='about-gif'>
        <img src={gif} alt="Developer Coding" width={"250px"}/>
      </div>

  </div>
  
  )
}
