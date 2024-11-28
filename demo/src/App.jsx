import React, { useContext } from "react";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Features from "./components/pages/Features.jsx";
import Home from "./components/pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsPolicy from "./components/pages/TermsPolicy.jsx";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainLayout from "./components/MainLayout";
import LoginPage from "./components/pages/LoginPage.jsx";
import SignupPage from "./components/pages/SignupPage.jsx";
import PasswReset from "./components/pages/PasswReset.jsx";
import NewPassword from "./components/pages/NewPassword.jsx";
import { Context } from "./components/Context/Context.jsx";
import CustomeCursor from "./CustomeCursor.jsx";


function App() {
  const { show } = useContext(Context);
  return (
    <>
      <Router future={{ v7_startTransition: true }}>
        <Header />
        <CustomeCursor/> 
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
          <Route path="/termsandPolicy" element={<TermsPolicy />} />
          <Route path="/resetpassword" element={<PasswReset/>}/>
          <Route path="/createpassword" element={<NewPassword/>}/>
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
