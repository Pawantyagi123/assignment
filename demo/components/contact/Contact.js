"use client";

import React, { useState } from "react";
import "./Contact.css";
import { FaUserAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import contactImage from "@/public/contact.jpeg";

export default function Contact() {
  const [contactDetail, setContactDetail] = useState({
    name: "",
    email: "",
    contactPhone: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactDetail);
    setContactDetail({
      name: "",
      email: "",
      contactPhone: "",
      message: "",
    });
  };

  return (
   
    <div className="contact-wrapper">
      <div className="contact-text">
        <h1 className="contact-title mb-4">Contact Us</h1>
        <p className="contact-description">
          We’d love to hear from you! Please fill out the form below, and we’ll
          get back to you shortly.
        </p>
      </div>
      <div className="contact-details">
        <div className="contact-image-container">
          <Image
            src={contactImage}
            alt="Contact us"
            priority={false}
            className="contact-image"
            style={{width:"100%", height:"auto"}}
          />
        </div>
        <form className="contact-form w-100 mx-auto" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-icon">
              <FaUserAlt />
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="form-control"
              value={contactDetail.name}
              onChange={handleInput}
              required
              autoComplete="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-icon">
              <MdEmail />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="form-control"
              value={contactDetail.email}
              onChange={handleInput}
              required
              autoComplete="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactPhone" className="form-icon">
              <FaPhoneAlt />
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              placeholder="Your Phone Number"
              className="form-control"
              value={contactDetail.contactPhone}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-icon">
              <FaEnvelope />
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="form-control"
              rows="3"
              value={contactDetail.message}
              onChange={handleInput}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-50">
            Submit
          </button>
        </form>
      </div>
      <time dateTime="2016-10-25" suppressHydrationWarning />
    </div>
  );
}
