import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-container text-center py-5">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We’d love to hear from you! Reach out to us through any of the channels below.
      </p>
      
      <div className="contact-info mt-4">
        {/* Address */}
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p className="contact-text">123 Main Street, Springfield, USA</p>
        </div>

        {/* Phone Number */}
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <p className="contact-text">+1 (123) 456-7890</p>
        </div>

        {/* Email Address */}
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p className="contact-text">info@company.com</p>
        </div>
      </div>

      <div className="social-links mt-4">
        <h3>Follow Us</h3>
        <div className="social-icons d-flex justify-content-center gap-3 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

