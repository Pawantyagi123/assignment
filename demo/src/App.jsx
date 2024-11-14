import "./App.css";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import ErrorPage from "./components/ErrorPage";
import Features from "./components/Pages/Features";
import Home from "./components/Pages/Home";
import MainLayout from "./components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TermsPolicy from "./components/TermsPolicy";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

// const browserRouter = createBrowserRouter([
//   {
//     path: "/",
//     errorElement: <ErrorPage />,
//     element: <MainLayout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "features",
//         element: <Features/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   },
//   {
//     path: "/termsandPolicy",
//     element: <TermsPolicy/>
//   }

//  ])

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/termsandPolicy" element={<TermsPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
