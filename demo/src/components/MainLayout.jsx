import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Contact from "./Pages/Contact";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div>
        <Home/>
        <About/>
        <Features/>
        <Contact/>
      </div>
      
    </>
  );
}
