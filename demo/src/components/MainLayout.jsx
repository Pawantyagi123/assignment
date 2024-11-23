import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Contact from "./Pages/Contact";
import PricePage from "./Pages/PricePage";

export default function MainLayout() {
  return (
    <>
        <Home/>
        <Features/>
        <About/>
        <Contact/>
    </>
  );
}
