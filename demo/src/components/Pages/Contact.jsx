import React from 'react';
import { FaUserAlt,FaPhoneAlt, FaEnvelope  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import video from "../Image/contact.webm"
import { FaLocationDot,FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
  <>
   <div className="contact-wrapper d-flex justify-content-between gap-4 p-4 bg-black">
  {/* Video Section */}
  <div className="contact-video-container bg-transparent">
    <video autoPlay loop muted playsInline className="contact-video rounded ">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className='text-white'>
      <h2 className='d-flex justify-content-center align-items-center gap-3 fs-5'><span><FaLocationDot/></span> Our Office Location </h2>
      <p>The Interior Design Studio Company</p>
      <p>The Courtyard, ​Al Quoz 1,​ Colorado, ​ USA</p>
    </div>
    <div className='text-white'>
      <h2 className='d-flex justify-content-center align-items-center gap-3 fs-5'><span><FaPhone/></span>
      Phone (Landline)</h2>
      <p> +1 123 456 7890</p>
    </div>
  </div>

  {/* Contact Form Section */}
  <div className="contact-details d-flex flex-column justify-content-center">
    <h1 className="mb-4">Contact Us</h1>
    <p className="mb-4 px-2">
      We’d love to hear from you! Please fill out the form below, and we’ll get back to you shortly.
    </p>

    {/* Contact Form */}
    <form className="contact-form mx-auto w-100" style={{ maxWidth: "350px" }}>
      <div className='d-flex gap-2'>
        <label htmlFor="name"><FaUserAlt/></label>
      <input
        type="text"
        id='name'
        placeholder="Your Name"
        className="form-control rounded-pill p-2 shadow-sm mb-3"
        required
      />
      </div>
      <div className='d-flex gap-2 '>
        <label htmlFor="email"><MdEmail/></label>
      <input
        type="email"
        id='email'
        placeholder="Your Email"
        className="form-control rounded-pill p-2 shadow-sm mb-3"
        required
      />
      </div>
      <div className='d-flex gap-2'>
        <label htmlFor="phone"><FaPhoneAlt/></label>
      <input
        type="tel"
        id='phone'
        placeholder="Your Phone Number"
        className="form-control rounded-pill p-2 shadow-sm mb-3"
        required
      />
      </div>
      <div className='d-flex gap-2'>
        <label htmlFor="message"><FaEnvelope/></label>
      <textarea
        placeholder="Your Message"
        className="form-control rounded-3 p-2 shadow-sm mb-3"
        rows="3"
        required
      ></textarea>
      </div>
      <div className='d-flex justify-content-center px-2'>
      <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 mt-3 shadow w-75">
        Send
      </button>
      </div>
    </form>
  </div>
</div>

    </>
  );
}

