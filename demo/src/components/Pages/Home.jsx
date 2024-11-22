import { useContext, useState } from 'react';
import { Modal} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SignupPage from '../SignupPage';
import {Fade} from "react-awesome-reveal"
import video from "../Image/video.mp4"
import video1 from "../Image/home1.mp4"
import { Context } from '../Context/Context';


function HomePage() {
 const {openSignup, setOpenSignup} = useContext(Context)

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
      <div className="text-white d-flex flex-column justify-content-between align-items-center text-center">
        <div className=" d-flex flex-column justify-content-between gap-4 align-items-center">
          <Fade direction="left" cascade duration={4000}>
            <h1>Testify</h1>
            <h2>Test <span>Smarter</span>, Not <span>Harder</span></h2>
          </Fade>
          <Fade direction="left" cascade duration={4000} delay={4000}>
            <p className='para'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, mollitia!
            </p>
          </Fade>
        </div>
        <Fade direction="up" cascade duration={5000} delay={4000}>
        <div className="container py-3 d-flex align-items-center justify-content-center">
          <NavLink to="register" onClick={handlePopup} className="button">
            Join us
          </NavLink>
        </div>
        </Fade>
      </div>

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
        <Modal.Header closeButton className="bg-secondary rounded border-0 text-white-50"></Modal.Header>
          <SignupPage/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HomePage;
