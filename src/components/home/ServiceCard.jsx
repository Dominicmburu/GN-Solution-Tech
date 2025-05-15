import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import '../../assets/css/ServiceCard.css';

const ServiceCard = ({ icon, title, features, hasCyberGraphic = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="service-card p-4 rounded position-relative"
      style={{
        backgroundColor: "var(--tt-color)",
        height: "100%",
        boxShadow: isHovered
          ? '0 20px 38px rgba(0,0,0,0.55), 0 15px 12px rgba(0,0,0,0.52)'
          : '0 3px 6px rgba(0,0,0,0.56), 0 3px 6px rgba(0,0,0,0.53)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div className="service-icon mb-3" style={{ color: "var(--primary-color)" }}>
        {icon}
      </div>
      <h4 className="text-white mb-3">{title}</h4>
      <ul className="list-unstyled mb-0">
        {features.map((feature, index) => (
          <li key={index} className={`${index !== features.length - 1 ? 'mb-2' : ''} d-flex align-items-center`}>
            <div style={{ color: 'var(--primary-color)' }} className="me-2"><FaCheck /></div>
            <p className="mb-0 text-white-50">{feature}</p>
          </li>
        ))}
      </ul>

      {hasCyberGraphic && (
        <div className="hasCyberGraphic position-absolute">
          <svg width="250" height="250" viewBox="0 0 250 250">
            <circle cx="125" cy="125" r="120" fill="none" stroke="#00e8ff" strokeWidth="2" />
            <circle cx="125" cy="125" r="90" fill="none" stroke="#00e8ff" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;