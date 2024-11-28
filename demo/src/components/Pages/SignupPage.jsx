import "react-phone-input-2/lib/style.css";
import "../css/signupLogin.css"

import {FaBuilding, FaCheckCircle, FaLock, FaServicestack, FaTimesCircle, FaUserAlt,} from "react-icons/fa";
import React, { useContext, useState } from "react";

import { Col } from "react-bootstrap";
import { Context } from "../Context/Context";
import { FaLink } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import SignupPoster from "./SignupPoster";
import axios from "axios";
import { isValidPhoneNumber } from "libphonenumber-js";
import signupSchema from "../schema/SignupSchema";
import { toast } from "react-toastify";

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
  const options = [
    { label: "Service 1", value: "Service1" },
    { label: "Service 2", value: "Service2" },
    { label: "Service 3", value: "Service3" },
  ];

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  const handleLogin = () => {
    setOpenSignup(!openSignup);
    setOpenLogin(!openLogin);
  };

  const handleInputChange = ( e ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      services: selectedValues,
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
        if (!isValid)
          throw new Error("Invalid phone number for selected country.");
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
      setOpenSignup(false);
      toast.success("Register Successfully");
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      console.log(validationErrors);
      setErrors(validationErrors);
      toast.error("Some error is occurred");
    }
  };

  return (
    <>
      {openSignup ? (
        <div className="signup-container">
          <div className="d-flex justify-content-end">
            <button
              onClick={() => setOpenSignup(false)}
              className="border-0 bg-transparent"
            >
              <RxCross1 className="fs-3 text-white" />
            </button>
          </div>
          <div className="signup-page d-flex">
            <div  className="signup p-4 text-white">
              <SignupPoster />
            </div>

            <Col className="py-3 bg-dark shadow rounded text-white ">
              <h1 className="text-center text-primary fw-bold fs-3">
                Sign Up
              </h1>

              <form onSubmit={handleSubmit} className="signup-form p-4">
                {/* Page 1: Personal Details */}
                {page === 1 && (
                  <>
                    {/* Name Input */}
                    <div className="mb-2">
                      <label htmlFor="name" className="form-label fs-5">
                        Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaUserAlt />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          onBlur={handleBlur}
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          autoComplete="true"
                        />
                        {renderValidationIcon("name")}
                      </div>
                      {errors.name && (
                        <p className="text-danger small">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label fs-5">
                        Email
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <MdEmail />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          onBlur={handleBlur}
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          autoComplete="true"
                        />
                        {renderValidationIcon("email")}
                      </div>
                      {errors.email && (
                        <p className="text-danger small">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div className="mb-2">
                      <label htmlFor="phone" className="form-label fs-5">
                        Phone
                      </label>
                      <div className="input-group">
                        <PhoneInput
                          country={"in"}
                          id="phone"
                          name="phone"
                          placeholder= "Enter your phone number"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          onBlur={() =>
                            validateField(
                              "phone",
                              formData.phone,
                              formData.countryCode
                            )
                          }
                          inputProps={{
                            className: "form-control ps-5 pe-5 rounded-pill",
                          }}
                        />
                        {renderValidationIcon("phone")}
                      </div>
                      {errors.phone && (
                        <p className="text-danger small">{errors.phone}</p>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-center pt-2">
                      {validateForm && (
                        <button
                          type="button"
                          className="btn btn-primary rounded-sm-pill shadow-sm"
                          onClick={nextPage}
                          
                        >
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
                    <div className="mb-2">
                      <label htmlFor="companyName" className="form-label fs-5">
                        Company Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaBuilding />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="companyName"
                          onBlur={handleBlur}
                          name="companyName"
                          placeholder="Enter your company name"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          autoComplete="true"
                        />
                        {renderValidationIcon("companyName")}
                      </div>
                      {errors.companyName && (
                        <p className="text-danger small">
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    {/* Company URL Input */}
                    <div className="mb-2">
                      <label htmlFor="companyUrl" className="form-label fs-5">
                        Company URL
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaLink />
                        </span>
                        <input
                          type="url"
                          className="form-control"
                          id="companyUrl"
                          onBlur={handleBlur}
                          name="companyUrl"
                          placeholder="Enter your company URL"
                          value={formData.companyUrl}
                          onChange={handleInputChange}
                          required
                          autoComplete="true"
                        />
                        {renderValidationIcon("companyUrl")}
                      </div>
                      {errors.companyUrl && (
                        <p className="text-danger small">{errors.companyUrl}</p>
                      )}
                    </div>

                    {/* Services Select */}
                    <div className="mb-2">
                      <label htmlFor="services" className="form-label fs-5">
                        Services
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaServicestack />
                        </span>
                        {/* <select
            className="form-select"
            id="services"
            name="services"
            onBlur={handleBlur}
            value={formData.services}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Service1">Service 1</option>
            <option value="Service2">Service 2</option>
            <option value="Service3">Service 3</option>
          </select> */}
                        <Select
                          options={options}
                          isMulti
                          isSearchable
                          className="form-select"
                          id="services"
                          name="services"
                          onBlur={handleBlur}
                          value={options.filter((option) =>
                            formData.services.includes(option.value)
                          )}
                          onChange={handleServiceChange}
                        />
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={prevPage}
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={nextPage}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {/* Page 3: Password Details */}
                {page === 3 && (
                  <>
                    {/* Password Input */}
                    <div className="mb-2">
                      <label htmlFor="password" className="form-label fs-5">
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          onBlur={handleBlur}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          autoComplete="false"
                        />
                        {renderValidationIcon("password")}
                      </div>
                      {errors.password && (
                        <p className="text-danger small">{errors.password}</p>
                      )}
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-2">
                      <label
                        htmlFor="confirmPassword"
                        className="form-label fs-5"
                      >
                        Confirm Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          name="confirmPassword"
                          onBlur={handleBlur}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                          autoComplete="false"
                        />
                        {renderValidationIcon("confirmPassword")}
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-danger small">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="form-check mb-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={(e) => 
                          setFormData({ ...formData, termsAccepted: e.target.checked })
                        }
                        required
                      />
                      <label
                        htmlFor="termsAccepted"
                        className="form-check-label"
                      >
                        I agree to the{" "}
                        <NavLink
                          to={"/termsPolicy"}
                          className="text-primary"
                        >
                          Terms and Policy
                        </NavLink>
                      </label>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-secondary rounded-sm"
                        onClick={prevPage}
                      >
                        Prev
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success rounded-sm"
                      >
                        Submit
                      </button>
                    </div>
                  </>
                )}
              </form>

              <p className="text-center">
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
        </div>
      ) : null}
    </>
  );
}
