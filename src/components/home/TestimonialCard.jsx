import React, { useState } from 'react';

const TestimonialCard = ({ image, text, name, role }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card h-100 border-0 position-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="card-body p-4 p-xl-5">
        <div className="testimonial-quote">
          <i className="fas fa-quote-left"></i>
        </div>
        <p className="card-text mb-4">{text}</p>
        <div className="d-flex align-items-center">
          <div className="testimonial-image">
            <img 
              src={image} 
              alt={name} 
              className="rounded-circle"
              width="60"
              height="60"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="ms-3">
            <h5 style={{color: 'var(--ct-color)'}} className="card-title mb-1 fw-bold">{name}</h5>
            <p className="card-subtitle text-muted small mb-0">{role}</p>
          </div>
        </div>
      </div>
      
      {/* Colored bottom line that changes on hover */}
      <div 
        className="position-absolute bottom-0 start-0 w-100 transition-all duration-300"
        style={{
          height: '4px',
          background: isHovered 
            ? 'linear-gradient(to right, yellow, purple, white)' 
            : '#e9ecef',
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
};

export default TestimonialCard;