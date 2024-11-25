import { NavLink } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import { useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../Context/Context";
import logo from "../Image/testfy (1).png";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

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
      <header className="header px-2 py-2 shadow-md">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="rounded-circle"
              style={{ width: "70px", height: "70px" }}
            />
            <h2 className="text-white h4 font-weight-bold m-0">Testify</h2>
          </div>

          <nav className={show ? "mobile-nav" : "desktop-nav"}>
            <ul className="nav gap-4 ">
              <li className="nav-item">
                <NavLink
                  to="/"
                  aria-current="page"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "text-white fw-bold border-bottom border-danger"
                        : "text-primary"
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
                        ? "text-white fw-bold border-bottom border-danger"
                        : "text-primary"
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
                        ? "text-white fw-bold border-bottom border-danger"
                        : "text-primary"
                    }`
                  }
                
                  
                >
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  aria-current="page"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "text-white fw-bold border-bottom border-danger"
                        : "text-primary"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink
              to={"/login"}
              className="gradient-button"
              onClick={openPage}
            >
              Login
            </NavLink>
          </nav>
         
          
            <div className="hamburger fs-3" onClick={showNav}>
            
              {show ? <RxCross1/> : <RxHamburgerMenu/>}
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
