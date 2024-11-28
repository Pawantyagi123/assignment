import "./customcursor.css"

import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation(); // Get the current location
  const [isVisible, setIsVisible] = useState(false); // Visibility state based on route

  useEffect(() => {
    // Show cursor only on specific routes
    const allowedRoutes = ["/", "/about", "/features", "/contact", "/login", "/register", "/termsPolicy", "/resetpassword",
      "/createpassword"
    ]; // Add your desired routes
    setIsVisible(allowedRoutes.includes(location.pathname));
  }, [location]);

  useEffect(() => {
    if (!isVisible) return; // Skip events if cursor is hidden

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Handle hover effect
  useEffect(() => {
    if (!isVisible) return;

    const hoverElements = document.querySelectorAll("a, button");

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseover", addHover);
      el.addEventListener("mouseout", removeHover);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseover", addHover);
        el.removeEventListener("mouseout", removeHover);
      });
    };
  }, [isVisible]);

  // Conditionally render the cursor only if it is visible
  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? "hover" : ""}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    ></div>
  );
};

export default Cursor;