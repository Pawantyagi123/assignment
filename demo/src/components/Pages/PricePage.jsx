import React from 'react';

export default function PricePage() {
  return (
    <div className="price-page">
      <h1 className="price-page-title">Membership Plans</h1>
      <div className="price-cards-container">
        {/* Silver Membership */}
        <div className="price-card silver-card">
          <h2 className="price-card-title">Silver Membership</h2>
          <p className="price-card-description">
            Perfect for individuals starting out. Includes access to basic features.
          </p>
          <div className="price-card-price">$19/month</div>
          <button className="price-card-button">Choose Plan</button>
        </div>

        {/* Gold Membership */}
        <div className="price-card gold-card">
          <h2 className="price-card-title">Gold Membership</h2>
          <p className="price-card-description">
            Ideal for professionals. Includes additional premium features.
          </p>
          <div className="price-card-price">$49/month</div>
          <button className="price-card-button">Choose Plan</button>
        </div>

        {/* Platinum Membership */}
        <div className="price-card platinum-card">
          <h2 className="price-card-title">Platinum Membership</h2>
          <p className="price-card-description">
            The ultimate package for advanced users. Unlock all features.
          </p>
          <div className="price-card-price">$99/month</div>
          <button className="price-card-button">Choose Plan</button>
        </div>
      </div>
    </div>
  );
}

