import React from 'react';

const TestimonialCard = ({ image, text, name, role }) => {
  return (
    <div className="card testimonial-card h-100 border-0">
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
            <h5 className="card-title mb-1 fw-bold">{name}</h5>
            <p className="card-subtitle text-muted small mb-0">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;