import React, { useContext, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaBuilding,
  FaLock,
  FaServicestack,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { Context } from "./Context/Context";
import signupSchema from "./schema/SignupSchema";
import SignupPoster from "./SignupPoster";

export default function SignupPage() {
  const { openSignup, setOpenSignup, openLogin, setOpenLogin } =
    useContext(Context);
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
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
    if (typeof e === "string") {
      // Handle phone input (assuming it returns a string directly)
      setFormData((prevData) => ({
        ...prevData,
        phone: e,
      }));
    } else {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  const validateForm = async () => {
    try {
      await signupSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("/your-api-endpoint", formData);
      const isValid = await validateForm();
      if (isValid) {
        console.log(formData);
        alert("Form submitted successfully!");
        setPage(1);
        setFormData("");
      }
      setOpenSignup(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed.");
    }
  };

  const handleLogin = () => {
    setOpenSignup(!openSignup);
    setOpenLogin(!openLogin);
  };
  return (
    <>
      {openSignup ? (
        <Container fluid className="signup-container">
          <Row>
            {/* Video/Image Section */}
            <Col md={6} className="signup p-4 text-white">
              <SignupPoster />
            </Col>

            <Col md={6} className="signup-form py-3 bg-light shadow rounded">
  <h1 className="text-center text-primary fw-bold mb-4">Sign Up</h1>

  <form onSubmit={handleSubmit} className="signup-form bg-transparent">
    {/* Page 1 */}
    {page === 1 && (
      <>
        <div className="mb-4 position-relative">
          <FaUserAlt className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
          <input
            type="text"
            className="form-control ps-5 rounded-pill"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-danger small">{errors.name}</p>}
        </div>

        <div className="mb-4 position-relative">
          <MdEmail className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
          <input
            type="email"
            className="form-control ps-5 rounded-pill"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-danger small">{errors.email}</p>}
        </div>

        <div className="mb-4 position-relative">
          <FaPhoneAlt className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
          <PhoneInput
            country={"in"}
            name="phone"
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(value) => handleInputChange(value)}
            inputProps={{
              required: true,
              placeholder: "Enter your phone number",
              className: "form-control ps-5 rounded-pill",
            }}
            inputClass="form-control ps-5 rounded-pill"
            containerClass="phone-input-container"
          />
          {errors.phone && <p className="text-danger small">{errors.phone}</p>}
        </div>

        <button
          type="button"
          className="btn btn-primary btn-lg rounded-pill w-100 shadow-sm"
          onClick={nextPage}
        >
          Next
        </button>
      </>
    )}

    {/* Page 2 */}
    {page === 2 && (
      <>
        <div className="mb-4 position-relative">
          <FaBuilding className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
          <input
            type="text"
            className="form-control ps-5 rounded-pill"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            placeholder="Enter your company name"
          />
          {errors.companyName && (
            <p className="text-danger small">{errors.companyName}</p>
          )}
        </div>

        <div className="mb-4 position-relative">
          <FaLink className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
          <input
            type="url"
            className="form-control ps-5 rounded-pill"
            id="companyUrl"
            name="companyUrl"
            value={formData.companyUrl}
            onChange={handleInputChange}
            required
            placeholder="Enter your company URL"
          />
          {errors.companyUrl && (
            <p className="text-danger small">{errors.companyUrl}</p>
          )}
        </div>

        <div className="mb-4 position-relative">
          <FaServicestack className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
          <select
            className="form-select ps-5 rounded-pill"
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
          <button
            type="button"
            className="btn btn-secondary rounded-pill"
            onClick={prevPage}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </>
    )}

    {/* Page 3 */}
    {page === 3 && (
      <>
        <div className="mb-4 position-relative">
          <FaLock className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
          <input
            type="password"
            className="form-control ps-5 rounded-pill"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-danger small">{errors.password}</p>
          )}
        </div>

        <div className="mb-4 position-relative">
          <FaLock className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
          <input
            type="password"
            className="form-control ps-5 rounded-pill"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="text-danger small">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="form-check mb-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="termsAccepted" className="form-check-label">
            I agree to the{" "}
            <NavLink to={"/termsandPolicy"} className="text-primary">
              Terms and Policy
            </NavLink>
          </label>
        </div>

        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-secondary rounded-pill"
            onClick={prevPage}
          >
            Prev
          </button>
          <button type="submit" className="btn btn-success rounded-pill">
            Submit
          </button>
        </div>
      </>
    )}
  </form>

  <p className="text-center mt-4">
    Have an account?{" "}
    <NavLink to={"/login"} onClick={handleLogin} className="text-primary fw-bold">
      Login
    </NavLink>
  </p>
</Col>

          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}
