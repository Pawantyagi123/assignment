import "../css/price.css"

import React from 'react';

export default function PricePage() {
  return (
    <div className="price-page">
      <div>
    <h1 className="price-page-title">Find The Perfect Plan For You</h1>
    <p>Explore our range of plans to find the perfect fit for your needs.</p>
    </div>
    <div className="price-cards-container">
      {/* Free Plan */}
      <div className="price-card free-card">
        <h2 className="price-card-title">Free Plan</h2>
        <div className="price-card-price">$0/month</div>
        <ul className="price-card-features">
          <li>Basic access to features</li>
          <li>Limited support</li>
          <li>Access to community forums</li>
          <li>1 month free</li>
        </ul>
        <button className="price-card-button">Choose Plan</button>
      </div>
  
      {/* Pro Plan */}
      <div className="price-card pro-card">
        <h2 className="price-card-title">Pro Plan</h2>
        <div className="price-card-price">$29/month</div>
        <ul className="price-card-features">
          <li>All features of Free Plan</li>
          <li>Priority support</li>
          <li>Advanced analytics</li>
          <li>Custom integrations</li>
        </ul>
        <button className="price-card-button">Choose Plan</button>
      </div>
  
      {/* Personal Plan */}
      <div className="price-card personal-card">
        <h2 className="price-card-title">Personal Plan</h2>
        <div className="price-card-price">$49/month</div>
        <ul className="price-card-features">
          <li>All features of Pro Plan</li>
          <li>Dedicated account manager</li>
          <li>Unlimited usage</li>
          <li>Customizable solutions</li>
        </ul>
        <button className="price-card-button">Choose Plan</button>
      </div>
    </div>
  </div>
  
  );
}

