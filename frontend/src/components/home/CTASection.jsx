import React from 'react';
import { FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-4" style={{ backgroundColor: "var(--tt-color)" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-3 mb-lg-0">
            <h4 style={{color: 'var(--card-color)'}} className="mb-0 fw-bold">
              Transform Your IT Infrastructure with Intelligent Automation
            </h4>
          </div>
          <div className="col-lg-5">
            <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
              <button className="px-4 py-2 me-3 mb-2 mb-sm-0 d-inline-flex align-items-center" 
                     style={{ backgroundColor: "#f08b0a", border: "none", color: "#fff" }}>
                <span>Schedule Consultation</span> <FaArrowRight className="ms-2" size={14} />
              </button>

              <div className="d-flex align-items-center">
                {/* Phone */}
                <a href="tel:+353874896800" className="text-decoration-none d-flex align-items-center me-3">
                  <div className="d-flex align-items-center">
                    <FaPhone color="#f08b0a" size={14} />
                    <span className="ms-2 text-white">+353 89 278 5147</span>
                  </div>
                </a>
                
                {/* Email */}
                <a href="mailto:info@gnsolutions.com" className="text-decoration-none d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <FaEnvelope color="#f08b0a" size={14} />
                    <span className="ms-2 text-white">info@gnsolutions.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .btn:hover {
          background-color: #ff9f2b !important;
          transform: translateY(-2px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        @media (max-width: 768px) {
          .d-flex.flex-wrap {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;