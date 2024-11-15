import React from 'react';
import { FaUserAlt,FaPhoneAlt, FaEnvelope  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import video from "../Image/ContactUs (1).mp4"

export default function Contact() {
  return (
  <>
   <div className="contact-wrapper d-flex flex-column flex-md-row align-items-stretch justify-content-between gap-4 p-4">
  {/* Video Section */}
  <div className="contact-video-container flex-fill">
    <video autoPlay loop muted playsInline className="contact-video w-100 h-100 rounded shadow">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Contact Form Section */}
  <div className="contact-details flex-fill d-flex flex-column justify-content-center text-center text-md-start">
    <h1 className="mb-4">Contact Us</h1>
    <p className="mb-4">
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
      <div className='d-flex gap-2 '>
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
      <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 mt-3 shadow">
        Send Message
      </button>
    </form>
  </div>
</div>

    </>
  );
}

