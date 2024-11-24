import "./App.css";
import "./Contact.css"
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Features from "./components/Pages/Features";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsPolicy from "./components/Pages/TermsPolicy";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import MainLayout from "./components/MainLayout";
import LoginPage from "./components/Pages/LoginPage";
import SignupPage from "./components/Pages/SignupPage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswReset from "./components/Pages/PasswReset";
import NewPassword from "./components/Pages/NewPassword";


function App() {
  return (
    <>
      <Router>
        <Header />
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
      <ToastContainer/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
