import { NavLink } from "react-router-dom";
import LoginPage from "../LoginPage";
import { useContext, useState } from "react";
import { Modal, ModalHeader, ModalTitle} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from "../Context/Context";
import logo from "../Image/testfy (1).png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [show, setShow ] = useState(false)
  const {openLogin, setOpenLogin} = useContext(Context)
  const showNav = () =>{
    setShow(!show)
  }

  const openPage = ()=>{
    setOpenLogin(!openLogin)
  }
  return (
    <>
      <header className="header px-2 py-2 shadow-sm w-100">
  <div className="container-fluid d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center gap-2">
      <img src={logo} alt="logo" className="rounded-circle" style={{ width: "70px", height: "70px" }} />
      <h2 className="text-white h4 font-weight-bold m-0">Testify</h2>
    </div>

    <nav className={show ? "mobile-nav" : "desktop-nav"}>
    {show ?
    <div className="w-100">
      <button className="border-0 bg-transparent">
      <RxCross1 onClick={showNav} className="fs-4 text-white"/> 
      </button>
      </div>
      : ""}
      <ul className="nav gap-4 ">
        <li className="nav-item">
          <NavLink
            to="/"
             aria-current="page"
            className={({ isActive }) =>
              `nav-link ${isActive ? "text-white fw-bold border-bottom border-danger" : "text-primary"}`
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
              `nav-link ${isActive ? "text-white fw-bold border-bottom border-danger" : "text-primary"}`
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
              `nav-link ${isActive ? "text-white fw-bold border-bottom border-danger" : "text-primary"}`
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
              `nav-link ${isActive ? "text-white fw-bold border-bottom border-danger" : "text-primary"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <NavLink to={"/login"}
      className="gradient-button"
      onClick={openPage}
    >
      Login
    </NavLink>
    </nav>
<div className="hamburger" onClick={showNav}>{show ? "" : <GiHamburgerMenu/>}</div>
  </div>
</header>

<Modal show={openLogin} onHide={openPage}  centered dialogClassName="modal-lg" className="login-modal">
        <Modal.Body className="modal-body">
        <Modal.Header closeButton className="bg-secondary rounded border-0 text-white-50"></Modal.Header>
          <LoginPage />
        </Modal.Body>
      </Modal>
    </>
  );
}
