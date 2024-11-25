import { useContext, useState } from 'react';
import { Modal} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SignupPage from './SignupPage';
import {Fade} from "react-awesome-reveal"
import video from "../Image/video.mp4"
import video1 from "../Image/home1.mp4"
import { Context } from '../Context/Context';


function HomePage() {
 const {openSignup, setOpenSignup,show,setShow} = useContext(Context)

  const handlePopup = () => {
    setOpenSignup(!openSignup);
  };

  return (
    <>
   <div className="home">
      {/* Video background */}
       <div className="video-background">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> 
      

      {/* Main Content */}
      <Fade direction="left" cascade duration={4000}>
      <div className="text-white d-flex flex-column justify-content-between align-items-center text-center">
        <div className=" d-flex flex-column justify-content-between gap-4 align-items-center">
            <h1>Testify</h1>
            <h2>Test <span>Smarter</span>, Not <span>Harder</span></h2>
          
            <p className='para'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, mollitia!
            </p>
          
        </div>
        <div className="container py-3 d-flex align-items-center justify-content-center">
          <NavLink to="register" onClick={handlePopup} className="button">
            Join us
          </NavLink>
        </div>
      </div>
      </Fade>

      {/* Optional Image */}
      <div className="image">
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
