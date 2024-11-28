import "../css/feature.css"

import Marquee from 'react-fast-marquee';
import React from "react";

export default function Features() {
  const features = [
    { text: "Design", icon: "🌐" },
    { text: "Developer", icon: "👨‍💻" },
    { text: "ISO Developer", icon: "📁" },
    { text: "Digital Agency", icon: "🏢" },
    { text: "Web Solutions", icon: "🌎" },
    { text: "Web Solutions", icon: "🌎" },
    { text: "Web Solutions", icon: "🌎" },
    { text: "Web Solutions", icon: "🌎" },
  ];

  return (
    <>
      <div className="features">
        <h1>Features</h1>
        <div
          className="marquee-container"
          style={{ color: "white", padding: "10px" }}
        >
          <Marquee speed={40} gradient={false}>
            {features.map((feature, index) => (
              <div key={index} className="d-flex gap-2">
                <ul>
              <li className="feature-item d-flex justify-content-center align-items-center">
                  <span className="feature-icon">{feature.icon}</span>
                  <h1 className="feature-text mt-4">{feature.text}</h1>
              </li>
              </ul>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}
