import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Image/logo.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Company Details */}
          <div className="col-md-4 mb-3">
            <div className="d-flex  align-items-center gap-1">
            <img src={logo} alt="" style={{ width: "70px", height: "70px",borderRadius: "50%" }}/>
            <h5 className="text-uppercase">Testfy</h5>
            </div>
            <p>
              Testfy is dedicated to providing top-notch AI-driven testing solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="btn btn-outline-light btn-sm me-2">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm me-2">
                <FaTwitter />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm me-2">
                <FaLinkedinIn />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm">
                <FaInstagram />
              </a>
            </div>
            <p className="mt-3 mb-0">
              Email: <a href="mailto:info@testfy.com" className="text-light text-decoration-none">info@testfy.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890" className="text-light text-decoration-none">+1 234 567 890</a>
            </p>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Testfy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
