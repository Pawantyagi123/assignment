import { NavLink } from "react-router-dom";
import LoginPage from "../LoginPage";
import { useState } from "react";
import { Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
   const [open, setOpen] = useState(false);

  const openPage = ()=>{
    setOpen(!open)
  }
  return (
    <>
      <header className="header px-4 py-3 sticky-top border-bottom border-secondary shadow-sm">
  <div className="container-fluid d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center gap-2">
      <img src="" alt="logo" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
      <h2 className="text-white h4 font-weight-bold m-0">Testify</h2>
    </div>

    <nav className="d-none d-md-flex">
      <ul className="nav gap-4 ">
        <li className="nav-item">
          <NavLink
            to="/"
             aria-current="page"
            className={({ isActive }) =>
              `nav-link ${isActive ? "text-white fw-bold border-bottom border-primary" : "text-primary"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="about"
            aria-current="page"
            className={({ isActive }) =>
              `nav-link ${isActive ? "text-white fw-bold border-bottom border-primary" : "text-primary"}`
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="features"
             aria-current="page"
            className={({ isActive }) =>
              `nav-link ${isActive ? "text-white fw-bold border-bottom border-primary" : "text-primary"}`
            }
          >
            Features
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="contact"
             aria-current="page"
            className={({ isActive }) =>
              `nav-link ${isActive ? "text-white fw-bold border-bottom border-primary" : "text-primary"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>

    <button
      className="gradient-button"
      onClick={openPage}
    >
      Login
    </button>
  </div>
</header>

<Modal show={open} onHide={openPage} centered dialogClassName="modal-md login-model">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <LoginPage open={open} setOpen={setOpen} />
        </Modal.Body>
      </Modal>
    </>
  );
}
