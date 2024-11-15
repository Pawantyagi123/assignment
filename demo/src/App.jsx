import "./App.css";
import "./Contact.css"
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Features from "./components/Pages/Features";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsPolicy from "./components/TermsPolicy";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import MainLayout from "./components/MainLayout";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/termsandPolicy" element={<TermsPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
