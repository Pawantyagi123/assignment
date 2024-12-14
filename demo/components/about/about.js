"use client"

import React from 'react'
import image from "@/public/about.jpg";
import icon1 from "@/public/icon-1.svg";
import icon2 from "@/public/icon-2.svg";
import icon3 from "@/public/icon-3.svg";
import icon4 from "@/public/icon-4.svg";
import icon5 from "@/public/icon-5.svg";
import icon6 from "@/public/icon-6.svg";
import { Fade } from "react-awesome-reveal";
import "./about.css"
import Image from 'next/image';

function About() {
  return (
    <div className="about-page">
    {/* Header Section */}
    <div className="about-header text-center">
      <h1 className="primary-color">Why Choose Us</h1>
      <p className="subtitle">Your Experience Is Everything To Us</p>
    </div>

    {/* Features Section */}
    <div className="about-features">
      <Fade direction="left" duration={2000}>
        <div className="features-left">
          <div className="feature">
            <div>
              <h2>Experience</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam viverra feugiat dolor.
              </p>
            </div>
            <Image src={icon1} alt="icon" priority={false} style={{width: "50px", height:"50px"}}/>
          </div>
          <div className="feature">
            <div>
              <h2>Products</h2>
              <p>
                Curabitur pretium nisl ut libero lacinia, eget eleifend felis
                hendrerit. Aenean posuere.
              </p>
            </div>
            <Image src={icon2} alt="icon" priority={false} style={{width: "50px", height:"50px"}}/>
          </div>
          <div className="feature">
            <div>
              <h2>Approach</h2>
              <p>
                Vestibulum eu odio quis ipsum interdum tincidunt. Vivamus
                congue lacinia nulla eu ultricies.
              </p>
            </div>
            <Image src={icon3} alt="icon" priority={false} style={{width: "50px", height:"50px"}}/>
          </div>
        </div>
      </Fade>
      <div className="features-image">
        <Image src={image} alt="About Us" style={{width:"300px", height: "300px"}} className='img' priority={false}/>
      </div>

      <Fade direction="right" duration={2000}>
        <div className="features-right">
          <div className="feature">
            <Image src={icon4} alt="icon" priority={false} style={{width: "50px", height:"50px"}}/>
            <div>
              <h2>Pricing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam viverra feugiat dolor.
              </p>
            </div>
          </div>

          <div className="feature">
            <Image src={icon5} alt="icon" priority={false} style={{width: "50px", height:"50px"}}/>
            <div>
              <h2>Delivery</h2>
              <p>
                Suspendisse potenti. Cras auctor nunc in fermentum vulputate.
                Ut facilisis nisi vel massa.
              </p>
            </div>
          </div>

          <div className="feature">
            <Image src={icon6} alt="icon" priority={false} style={{width: "50px", height:"50px"}}/>
            <div>
              <h2>Support</h2>
              <p>
                Fusce suscipit enim ut diam ullamcorper tempus. Duis bibendum
                consectetur sapien.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </div>
  )
}

export default About
