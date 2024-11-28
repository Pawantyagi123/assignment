import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Home from "./pages/Home";
import PricePage from "./pages/PricePage";

export default function MainLayout() {
  return (
    <>
      <Home />
      <Features />
      <About />
      <PricePage/>
      <Contact />
    </>
  );
}

