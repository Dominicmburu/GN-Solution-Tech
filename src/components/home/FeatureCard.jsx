import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card p-4 border rounded">
      <div className="text-info mb-3">
        <img src={icon} alt="Feature Icon" className="img-fluid" />
      </div>
      <h5 className="mb-3">{title}</h5>
      <p className="text-muted mb-0">{description}</p>
    </div>
  );
};

export default FeatureCard;