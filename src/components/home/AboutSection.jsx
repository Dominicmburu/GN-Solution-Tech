import React from 'react';
import { FaArrowRight, FaCheck, FaPhone } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
  const features = [
    'Best Value Solutions',
    'Digital Transformation',
    'Trusted IT Partner',
    'Digital Innovation'
  ];

  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <div className="border border-info border-2 p-2 rounded" style={{ maxWidth: "450px" }}>
                <img src="/api/placeholder/450/350" alt="Cyber Security Professional" className="img-fluid rounded" />
              </div>
              <div className="position-absolute" style={{ bottom: "-30px", right: "-30px", zIndex: "-1" }}>
                <img src="/api/placeholder/150/150" alt="Security Shield" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <SectionTitle 
                subtitle="About Company"
                title="The perfect solution for all cyber protection."
              />
              <p className="text-muted mb-4">It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.</p>
              
              <div className="row mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="text-info me-2"><FaCheck /></div>
                      <p className="mb-0">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="row mb-4">
                <div className="col-6">
                  <h3 className="mb-0 display-5 fw-bold text-dark">80%</h3>
                  <p className="mb-0">Business Problem Solving</p>
                </div>
                <div className="col-6">
                  <h3 className="mb-0 display-5 fw-bold text-dark">95%</h3>
                  <p className="mb-0">Business Problem Solving</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <button className="btn btn-info px-4 py-2 me-3 rounded-1">
                  Discover More <FaArrowRight className="ms-2" />
                </button>
                <div className="d-flex align-items-center">
                  <div className="bg-info rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                    <FaPhone color="white" size={16} />
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
      </div>
    </section>
  );
};

export default AboutSection;