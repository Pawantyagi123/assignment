"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "@/public/logo.webp";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Context } from "@/context/Context";
import "./navbar.css";

function Navbar() {
  const { openLogin, setOpenLogin, show, setShow } = useContext(Context);
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  };

  const handleBlur = (e) => {
    if (!dropdownRef.current?.contains(e.relatedTarget)) {
      setShowDropDown(false);
    }
  };

  const openLoginPage = () => {
    setOpenLogin(!openLogin);
    setShow(false);
  };

  useEffect(() => {
    document.body.style.overflow = show || openLogin ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show, openLogin]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header px-3 py-2 ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="d-flex align-items-center gap-2 text-center" style={{ width: "70px" }}>
          <Image src={logo} alt="company-logo" className="rounded-circle" width={60} height={60} priority={false} />
          <h2 className="text-white font-weight-bold fs-4">Codeless</h2>
        </div>

        {/* Navigation */}
        <nav className={`nav-container ${show ? "mobile-nav" : "desktop-nav"}`}>
          <ul className="nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/features" className="nav-link">
                Features
              </Link>
            </li>
            {/* Dropdown */}
            <li
              className="nav-item dropdown"
              tabIndex="0"
              onBlur={handleBlur}
              aria-haspopup="true"
              aria-expanded={showDropDown}
            >
              <div
                className={`nav-link ${showDropDown ? "active-dropdown" : ""}`}
                onClick={() => setShowDropDown(!showDropDown)}
                style={{ cursor: "pointer" }}
              >
                Services <FaChevronDown className="text-white" />
              </div>
              {showDropDown && (
                <ul
                  ref={dropdownRef}
                  className={`dropdown-menu ${showDropDown ? "show" : ""}`}
                  aria-label="submenu"
                >
                  <li>
                    <Link href="/services/service1" className="dropdown-item">
                      Service 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service2" className="dropdown-item">
                      Service 2
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service3" className="dropdown-item">
                      Service 3
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service4" className="dropdown-item">
                      Service 4
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <button className="gradient-button" onClick={openLoginPage}>
            Login
          </button>
        </nav>

        {/* Hamburger Menu */}
        <div className="hamburger fs-3 pt-1" onClick={toggleNav} aria-label="Toggle navigation">
          {show ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
