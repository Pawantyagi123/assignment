import { NavLink } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import { useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../Context/Context";
import logo from "../Image/testfy (1).png";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
  const { openLogin, setOpenLogin,show, setShow } = useContext(Context);

  const showNav = () => {
    setShow(!show);
  };

  const openPage = () => {
    setOpenLogin(!openLogin);
    setShow(false)
  };

 
  // Effect to toggle page scroll when mobile menu is open
  useEffect(() => {
    if (show || openLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <>
      <header className="header px-3 py-2 shadow-md">
  <div className="d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center gap-2 justify-content-center">
      <img
        src={logo}
        alt="logo"
        className="rounded-circle"
        style={{ width: "70px", height: "70px" }}
      />
      <h2 className="text-white h4 font-weight-bold m-0">Testify</h2>
    </div>

    <nav className={show ? "mobile-nav" : "desktop-nav"}>
      <ul className="nav gap-4">
        <li className="nav-item">
          <NavLink
            to="/"
            aria-current="page"
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-white fw-bold"
                  : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            aria-current="page"
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-white fw-bold"
                  : ""
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/features"
            aria-current="page"
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-white fw-bold "
                  : ""
              }`
            }
          >
            Features
          </NavLink>
        </li>
       <li className="nav-item">
       <Dropdown>
  <Dropdown.Toggle id="dropdown-basic" className="bg-transparent text-white border-0 fs-5">
    Services
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <NavLink to="/action-1" className="dropdown-item">
      service1
    </NavLink>
    <NavLink to="/action-2" className="dropdown-item">
      service2
    </NavLink>
    <NavLink to="/action-3" className="dropdown-item">
      service3
    </NavLink>
  </Dropdown.Menu>
</Dropdown>
       </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            aria-current="page"
            className={({ isActive }) =>
              `nav-link ${
                isActive
                  ? "text-white fw-bold"
                  : ""
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <NavLink to={"/login"} className="gradient-button" onClick={openPage}>
        Login
      </NavLink>
    </nav>

    <div className="hamburger fs-3" onClick={showNav}>
      {show ? <RxCross1 /> : <RxHamburgerMenu />}
    </div>
  </div>
</header>

      <Modal
        show={openLogin}
        onHide={openPage}
        centered
        dialogClassName="modal-lg"
        className="login-modal"
      >
        <Modal.Body className="modal-body">
          <LoginPage />
        </Modal.Body>
      </Modal>
    </>
  );
}
