import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserAlt,FaPhoneAlt,FaBuilding,FaLock,FaServicestack  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

export default function SignupPage({ open, setOpen }) {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companyUrl: "",
    services: [],
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("/your-api-endpoint", formData);
      console.log(formData);
      alert("Form submitted successfully!");
      setPage(1);
      setFormData("");
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed.");
    }
  };

  return (
    <>
      {open ? (
        <Container fluid className="position-relative top-0">
          <Row>
            <Col md={6} className="bg-light p-4">
              <h2>With your new Account, you get:</h2>
              <ul>
                <li>Access to 3000+ browsers, OS, & devices</li>
                <li>70% faster test execution</li>
                <li>AI-powered test intelligence</li>
              </ul>
              <p>Trusted by 2 Million+ users globally at:</p>
              <div className="d-flex"></div>
            </Col>

            <Col md={6} className="p-4">
              <h3 className="mb-3">Get started for free</h3>
              <form onSubmit={handleSubmit}>
  {page === 1 && (
    <>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-5"><FaUserAlt/></label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label fs-5"><MdEmail/></label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label fs-5"><FaPhoneAlt/></label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          placeholder="Enter your phone number"
        />
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={nextPage}
        disabled={!formData.name || !formData.email}
      >
        Next
      </button>
    </>
  )}

  {page === 2 && (
    <>
      <div className="mb-3">
        <label htmlFor="companyName" className="form-label fs-5"><FaBuilding/></label>
        <input
          type="text"
          className="form-control"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          required
          placeholder="Enter your company name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="companyUrl" className="form-label fs-5"><FaLink/></label>
        <input
          type="url"
          className="form-control"
          id="companyUrl"
          name="companyUrl"
          value={formData.companyUrl}
          onChange={handleInputChange}
          required
          placeholder="Enter your company URL"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="services" className="form-label fs-5"><FaServicestack/></label>
        <select
          className="form-select"
          id="services"
          name="services"
          value={formData.services}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a service</option>
          <option value="Service1">Service 1</option>
          <option value="Service2">Service 2</option>
          <option value="Service3">Service 3</option>
        </select>
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={prevPage}>
          Prev
        </button>
        <button type="button" className="btn btn-primary" onClick={nextPage}>
          Next
        </button>
      </div>
    </>
  )}

  {page === 3 && (
    <>
      <div className="mb-3">
        <label htmlFor="password" className="form-label fs-5"><FaLock/></label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          placeholder="Enter your password"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label fs-5"><FaLock/></label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
          placeholder="Confirm your password"
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="termsAccepted"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="termsAccepted" className="form-check-label fs-5">
          I agree to the Terms and Policy <Link to={"/termsandPolicy"}>Terms and Policy</Link>
        </label>
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={prevPage}>
          Prev
        </button>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </>
  )}
</form>

            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}
