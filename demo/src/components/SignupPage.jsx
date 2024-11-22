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
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { Context } from "./Context/Context";
import signupSchema from "./schema/SignupSchema";
import SignupPoster from "./SignupPoster";
import { isValidPhoneNumber } from "libphonenumber-js";

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

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  const handleLogin = () => {
    setOpenSignup(!openSignup);
    setOpenLogin(!openLogin);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle phone input changes and update phone and country code
  const handlePhoneChange = (value, country) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
      countryCode: country.countryCode,
    }));
    validateField("phone", value, country.countryCode);
  };

  // Validate a single field
  const validateField = async (fieldName, value, countryCode) => {
    try {
      if (fieldName === "phone") {
        const isValid = isValidPhoneNumber(value, countryCode?.toUpperCase());
        if (!isValid) throw new Error("Invalid phone number for selected country.");
      } else {
        await signupSchema.validateAt(fieldName, formData);
      }
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: null }));
    } catch (err) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: err.message,
      }));
    }
  };

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

  // Validate fields on blur
  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name, formData[name], formData.countryCode);
  };

  // Render validation icons
  const renderValidationIcon = (field) => {
    if (!formData[field]) return null;
    return errors[field] ? (
      <FaTimesCircle className="text-danger position-absolute top-50 end-0 translate-middle-y me-3" />
    ) : (
      <FaCheckCircle className="text-success position-absolute top-50 end-0 translate-middle-y me-3" />
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      
      alert("Form submitted successfully!");
      setOpenSignup(false); // Reset the signup modal or page
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      console.log(validationErrors)
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {openSignup ? (
        <div  className="signup-container">
            <Col md={6} className="signup p-4 text-white">
              <SignupPoster />
            </Col>

            <Col className="signup-page py-3 bg-dark shadow rounded text-white">
              <h1 className="text-center text-primary fw-bold mb-4">Sign Up</h1>

              <form onSubmit={handleSubmit} className=" bg-transparent p-4">
  {/* Page 1: Personal Details */}
  {page === 1 && (
    <>
      {/* Name Input */}
      <div className="mb-4 position-relative">
        <FaUserAlt className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
        <input
          type="text"
          className="form-control ps-5 pe-5 rounded-pill"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Enter your name"
        />
        {renderValidationIcon("name")}
        {errors.name && <p className="text-danger small text-center">{errors.name}</p>}
      </div>

      {/* Email Input */}
      <div className="mb-4 position-relative">
        <MdEmail className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
        <input
          type="email"
          className="form-control ps-5 pe-5 rounded-pill"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Enter your email"
        />
        {renderValidationIcon("email")}
        {errors.email && <p className="text-danger small text-center">{errors.email}</p>}
      </div>

      {/* Phone Input */}
      <div className="mb-4 position-relative">
        <FaPhoneAlt className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
        <PhoneInput
          country={"in"}
          value={formData.phone}
          onChange={handlePhoneChange}
          onBlur={() => validateField("phone", formData.phone, formData.countryCode)}
          inputProps={{
            className: "form-control ps-5 pe-5 rounded-pill",
            placeholder: "Enter your phone number",
          }}
        />
        {renderValidationIcon("phone")}
        {errors.phone && <p className="text-danger small text-center">{errors.phone}</p>}
      </div>

      {/* Next Button */}
      <div className="d-flex justify-content-center">
        {validateForm && (
          <button type="button" className="btn btn-primary rounded-sm-pill shadow-sm" onClick={nextPage}>
            Next
          </button>
        )}
      </div>
    </>
  )}

  {/* Page 2: Company Details */}
  {page === 2 && (
    <>
      {/* Company Name Input */}
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
        {renderValidationIcon("companyName")}
        {errors.companyName && <p className="text-danger small text-center">{errors.companyName}</p>}
      </div>

      {/* Company URL Input */}
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
        {renderValidationIcon("companyUrl")}
        {errors.companyUrl && <p className="text-danger small text-center">{errors.companyUrl}</p>}
      </div>

      {/* Services Select */}
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

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary rounded-sm-pill" onClick={prevPage}>
          Prev
        </button>
        <button type="button" className="btn btn-primary rounded-sm-pill" onClick={nextPage}>
          Next
        </button>
      </div>
    </>
  )}

  {/* Page 3: Password Details */}
  {page === 3 && (
    <>
      {/* Password Input */}
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
        {renderValidationIcon("password")}
        {errors.password && <p className="text-danger small text-center">{errors.password}</p>}
      </div>

      {/* Confirm Password Input */}
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
        {renderValidationIcon("confirmPassword")}
        {errors.confirmPassword && <p className="text-danger small text-center">{errors.confirmPassword}</p>}
      </div>

      {/* Terms and Conditions */}
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

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary rounded-sm" onClick={prevPage}>
          Prev
        </button>
        <button type="submit" className="btn btn-success rounded-sm">
          Submit
        </button>
      </div>
    </>
  )}
</form>

              <p className="text-center mt-4">
                Have an account?{" "}
                <NavLink
                  to={"/login"}
                  onClick={handleLogin}
                  className="text-primary fw-bold"
                >
                  Login
                </NavLink>
              </p>
            </Col>
         
        </div>
      ) : null}
    </>
  );
}

