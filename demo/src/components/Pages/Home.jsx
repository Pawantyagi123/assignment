import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/home.css";

import { Context } from '../Context/Context';
import {Fade} from "react-awesome-reveal"
import { Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import SignupPage from './SignupPage';
import { useContext } from 'react';
import video1 from "../Image/home1.mp4"

function HomePage() {
 const {openSignup, setOpenSignup,show,setShow} = useContext(Context)

  const handlePopup = () => {
    setOpenSignup(!openSignup);
  };

  return (
    <>
   <div className="home">
      {/* Video background */}
       {/* <div className="video-background">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>  */}
      

      {/* Main Content */}
      <Fade direction="left" cascade duration={4000}>
     
        <div className="d-flex flex-column justify-content-start gap-4 align-items-center text-center text-white">
            <h1>Testify</h1>
            <h2>Test <span>Smarter</span>, Not <span>Harder</span></h2>
          
            <p className='para'>
            Lorem, ipsum dolor sit amat consectetur adipisicing elia. Libero, id. Lorem ipsum dolor sit, abet consectetur adipisicing edit. Molesting, cumae.
            </p>
            
          <NavLink to="register" onClick={handlePopup} className="button">
            Join us
          </NavLink>
          </div>
    
      </Fade>

      {/* Optional Image */}
      <div className="image w-100">
       <video autoPlay loop muted>
        <source src={video1} type='video/mp4'/>
       </video>
      </div>
    </div>
      
      {/* Modal for Signup Page */}
      <Modal show={openSignup} onHide={handlePopup} centered dialogClassName="modal-lg" className='signup-modal'>
        <Modal.Body className='modal-body'>
          <SignupPage/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HomePage;
