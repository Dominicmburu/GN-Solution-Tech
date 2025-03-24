import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ServiceCard = ({ icon, title, features, hasCyberGraphic = false }) => {
  return (
    <div className="service-card p-4 rounded position-relative" style={{ backgroundColor: "#0d1545", height: "100%" }}>
      <div className="service-icon mb-3 text-info">
        {icon}
      </div>
      <h4 className="text-white mb-3">{title}</h4>
      <ul className="list-unstyled mb-0">
        {features.map((feature, index) => (
          <li key={index} className={`${index !== features.length - 1 ? 'mb-2' : ''} d-flex align-items-center`}>
            <div className="text-info me-2"><FaCheck /></div>
            <p className="mb-0 text-white-50">{feature}</p>
          </li>
        ))}
      </ul>
      
      {hasCyberGraphic && (
        <div className="position-absolute" style={{ bottom: "-120px", right: "-80px", zIndex: "1", opacity: "0.3" }}>
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