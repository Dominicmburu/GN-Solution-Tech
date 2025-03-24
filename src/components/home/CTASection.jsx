import React from 'react';
import { FaArrowRight, FaPhone } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="cta-section py-5" style={{ backgroundColor: "#00e8ff" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h3 className="text-dark mb-0">Let's talk about how can help you securely advance</h3>
          </div>
          <div className="col-lg-5 text-lg-end">
            <div className="d-flex align-items-center justify-content-lg-end">
              <button className="btn btn-dark px-4 py-2 me-3 rounded-1">
                Let's Start Project <FaArrowRight className="ms-2" />
              </button>
              <div className="d-flex align-items-center">
                <div className="bg-white rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px" }}>
                  <FaPhone color="#00e8ff" />
                </div>
                <div className="ms-2">
                  <p className="mb-0 small">Call Us Now</p>
                  <p className="mb-0 fw-bold">(907) 550-7000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;