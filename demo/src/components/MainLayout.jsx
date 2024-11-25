import React, { useContext } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Contact from "./Pages/Contact";
import { Context } from "./Context/Context";

export default function MainLayout() {
  const { show } = useContext(Context);

  return (
    <div className={`main-layout ${show ? "blurred" : ""}`}>
      <Home />
      <Features />
      <About />
      <Contact />
    </div>
  );
}

