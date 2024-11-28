import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
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

