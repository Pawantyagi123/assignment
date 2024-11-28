import "./components/css/signupLogin.css"

import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import { Context } from "./components/Context/Context.jsx";
import Cursor from "./components/layout/Cursor.jsx";
import Features from "./components/pages/Features.jsx";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import MainLayout from "./components/MainLayout";
import NewPassword from "./components/pages/NewPassword.jsx";
import PassReset from "./components/pages/PassReset.jsx";
import SignupPage from "./components/pages/SignupPage.jsx";
import TermsPolicy from "./components/pages/TermsPolicy.jsx";

function App() {
  const { show } = useContext(Context);
  return (
    <>
      <Router future={{ v7_startTransition: true }}>
        <Header />
        <Cursor/> 
        <div className={`main-layout ${show ? "blurred" : ""}`}>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<SignupPage/>}/>
          </Route>
          <Route path="/termsPolicy" element={<TermsPolicy />} />
          <Route path="/resetpassword" element={<PassReset/>}/>
          <Route path="/createpassword" element={<NewPassword/>}/>
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
