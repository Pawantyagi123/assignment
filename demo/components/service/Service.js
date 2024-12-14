import React from 'react'
import "./service.css"
import icon1 from "@/public/service-icon1.webp";
import icon2 from "@/public/service-icon2.webp";
import icon3 from "@/public/service-icon3.webp";
import icon4 from "@/public/service-icon4.webp";
import icon5 from "@/public/service-icon5.webp";
import icon6 from "@/public/service-icon6.webp";
import Image from 'next/image';

export default function Service() {
  return (
    <div className='service-container'>
      <div className='service-heading'>
        <h2>our services</h2>
        <h1>Services we offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis in esse itaque! Qui rem fugit nihil earum quos ipsum doloribus!</p>
      </div>
      <div className='service-features'>
        <div className='feature'>
            <Image src={icon1} alt="icon1" style={{width: "auto", height: "auto"}} priority={false}/>
            <h3>App Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perspiciatis?</p>
        </div>
        <div className='feature'>
            <Image src={icon2} alt="icon2" style={{width: "auto", height: "auto"}} priority={false}/>
            <h3>Web Development</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta?</p>
        </div>
        <div className='feature'>
            <Image src={icon3} alt="icon3" style={{width: "auto", height: "auto"}} priority={false}/>
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, porro.</p>
        </div>
        <div className='feature'>
            <Image src={icon4} alt="icon4" style={{width: "auto", height: "auto"}} priority={false}/>
            <h3>SEO Optimization</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ducimus.</p>
        </div>
        <div className='feature'>
            <Image src={icon5} alt="icon5" style={{width: "auto", height: "auto"}} priority={false}/>
            <h3>Web Hosting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, veritatis?</p>
        </div>
        <div className='feature'>
            <Image src={icon6} alt="icon6" style={{width: "auto", height: "auto"}} priority={false}/>
            <h3>Data Secuity</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, maxime?</p>
        </div>
      </div>
    </div>
  )
}