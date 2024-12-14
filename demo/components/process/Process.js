import React from "react";
import "./process.css";

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Choose a Service",
      description: "We focus on the best practices for IT solutions and services.",
      icon: "🔧", // Replace with your actual icon or image
    },
    {
      id: "02",
      title: "Request a Meeting",
      description: "We focus on the best practices for IT solutions and services.",
      icon: "📋", // Replace with your actual icon or image
    },
    {
      id: "03",
      title: "Receive Custom Plan",
      description: "We focus on the best practices for IT solutions and services.",
      icon: "✏️", // Replace with your actual icon or image
    },
  ];

  return (
    <div className="process-container">
      <h2 className="process-subtitle">Our Process Flow</h2>
      <h1 className="process-title">
        How we help your business <br />
        Grow and successful
      </h1>
      <div className="process-steps">
        {steps.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="step-icon">
              {step.icon}
              <span className="step-number">{step.id}</span>
            </div>
            <h1 className="step-title">{step.title}</h1>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;