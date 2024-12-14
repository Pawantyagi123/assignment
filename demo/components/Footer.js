import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "@/public/logo.webp"
import Image from 'next/image';

function Footer() {
  return (
    <>
        <footer className="text-light py-4 z-50 position-fixed-bottom" style={{backgroundColor: "rgb(18 26 53)"}}>
      <div className="container">
        <div className="row">
          {/* Company Details */}
          <div className="col-md-4 mb-3">
            <div className="d-flex  align-items-center gap-1">
            <Image src={logo} alt="company-logo" width={60} height={60} className='rounded-circle' priority={false}/>
            <h4>Codeless</h4>
            </div>
            <p>
              Codeless is dedicated to providing top-notch AI-driven testing solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-light text-decoration-none" aria-label="home-tag">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-light text-decoration-none" aria-label="about-tag">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-light text-decoration-none" aria-label="features-tag">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="text-light text-decoration-none" aria-label="contact-tag">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="btn btn-outline-light btn-sm me-2" aria-label="facebook-link">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm me-2" aria-label="twitter-link">
                <FaTwitter />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm me-2" aria-label="linkedin-link">
                <FaLinkedinIn />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm" aria-label="instagram-link">
                <FaInstagram />
              </a>
            </div>
            <p className="mt-3 mb-0">
              Email: <a href="mailto:info@testfy.com" className="text-light text-decoration-none" aria-label="email-link">info@testfy.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890" className="text-light text-decoration-none" aria-label="phone">+1 234 567 890</a>
            </p>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Codeless. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
