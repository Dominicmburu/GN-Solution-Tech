import React, { useState } from 'react';

const FeatureCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`feature-card p-4 border rounded bg-white transition-all duration-300 ${isHovered ? 'transform -translate-y-2' : ''}`}
      style={{
        boxShadow: isHovered 
          ? '0 20px 38px rgba(0,0,0,0.25), 0 15px 12px rgba(0,0,0,0.22)' 
          : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-info mb-3">
        {icon}
      </div>
      <h5 style={{color: 'var(--ct-color)'}} className="mb-3">{title}</h5>
      <p className="text-muted mb-0">{description}</p>
    </div>
  );
};

export default FeatureCard;