import React, { useContext, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUserAlt,FaPhoneAlt,FaBuilding,FaLock,FaServicestack  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { Context } from "./Context/Context";
import signupSchema from "./schema/SignupSchema";
import SignupPoster from "./SignupPoster";

export default function SignupPage() {
  const {openSignup, setOpenSignup,openLogin, setOpenLogin} = useContext(Context)
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
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
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
      errors.inner.forEach((error) => {
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
      if(isValid){
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

  const handleLogin = () =>{
    setOpenSignup(!openSignup)
      setOpenLogin(!openLogin);
  }
  return (
    <>
    { openSignup ?
      <Container fluid className="signup-container">
      <Row className="">
        {/* Video/Image Section */}
        <Col md={6} className="signup p-4 text-white">
        <SignupPoster/>
        </Col>

        <Col md={6} className=" bg-body-secondary">
        <h1 className="text-center">SignUp</h1>
        <p className="text-center">Have an account? <NavLink to={"login"} onClick={handleLogin}>Login</NavLink></p>
          <form onSubmit={handleSubmit} className=" p-3">
            {page === 1 && (
              <>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-5">
                    <FaUserAlt />
                  </label>
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
                  {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fs-5">
                    <MdEmail />
                  </label>
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
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fs-5">
                    <FaPhoneAlt />
                  </label>
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
                  {errors.phone && <p className="text-danger">{errors.phone}</p>}
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={nextPage}
                >
                  Next
                </button>
              </>
            )}

            {page === 2 && (
              <>
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label fs-5">
                    <FaBuilding />
                  </label>
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
                  {errors.companyName && <p className="text-danger">{errors.companyName}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="companyUrl" className="form-label fs-5">
                    <FaLink />
                  </label>
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
                  {errors.companyUrl && <p className="text-danger">{errors.companyUrl}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="services" className="form-label fs-5">
                    <FaServicestack />
                  </label>
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
                  <label htmlFor="password" className="form-label fs-5">
                    <FaLock />
                  </label>
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
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label fs-5">
                    <FaLock />
                  </label>
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
                  {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
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
                    I agree to the Terms and Policy{" "}
                    <NavLink to={"/termsandPolicy"}>Terms and Policy</NavLink>
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
    : ""
}
    </>
  );
}
