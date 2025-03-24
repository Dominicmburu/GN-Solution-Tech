import React from 'react';

const TestimonialCard = ({ image, text, name, role }) => {
  return (
    <div className="testimonial-card p-4 rounded" style={{ backgroundColor: "#0a1033", height: "100%" }}>
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex align-items-center">
          <img src={image} alt="Client" className="img-fluid rounded-circle" style={{ width: "60px", height: "60px" }} />
        </div>
        <div className="testimonial-rating text-warning">
          ★★★★★
        </div>
      </div>
      <p className="text-white-50 mb-4">{text}</p>
      <div className="testimonial-info">
        <h5 className="text-white mb-1">{name}</h5>
        <p className="text-info mb-0">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;