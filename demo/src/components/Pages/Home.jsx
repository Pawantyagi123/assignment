import { useState } from 'react';
import { Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SignupPage from '../SignupPage';
import image from "../Image/rolling.png"
import {Fade} from "react-awesome-reveal"

function HomePage() {
  const [open, setOpen] = useState(false);

  const handlePopup = () => {
    setOpen(!open);
  };

  return (
    <>
    <div className='home d-flex justify-content-around align-items-center'>
      <div className="text-white h-fullscreen d-flex flex-column justify-content-between align-items-center p-5 text-center w-50">
        <div className="container py-5 d-flex flex-column justify-content-between gap-4 align-items-center">
        <Fade direction="left" cascade duration={3000}>
          <h1 className="display-1 pb-3">Testfy</h1>
          </Fade>
          <Fade direction="left" cascade duration={4000} delay={1000}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur natus molestias quis maxime amet quod laborum velit. Expedita, modi sed?
          </p>
          </Fade>
        </div>
        <div className="container py-3 d-flex align-items-center justify-content-center">
          <button 
            className="button" 
            onClick={handlePopup}>
            Join us
          </button>
        </div>
      </div>
      
      <div className='image'>
        <img src={image} alt="image" />
      </div>
      
      </div>
      
      {/* Modal for Signup Page */}
      <Modal show={open} onHide={handlePopup} centered dialogClassName="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupPage open={open} setOpen={setOpen} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HomePage;
