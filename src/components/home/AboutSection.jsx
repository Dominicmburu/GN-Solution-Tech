import React from 'react';
import { FaArrowRight, FaCheck, FaPhone } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
  const features = [
    'Enterprise-grade Security',
    '24/7 Technical Support',
    'Custom IT Solutions',
    'Certified Expertise'
  ];

  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <div className="border border-info border-2 p-2 rounded" style={{ maxWidth: "550px" }}>
                <img src="https://i.pinimg.com/736x/e0/f7/fb/e0f7fb66f4961d539e8b6d0ce2a883b3.jpg" alt="Cyber Security Professional" className="img-fluid rounded" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <SectionTitle 
                subtitle="About Us"
                title="Empowering Businesses Through Intelligent Automation & Security"
              />
              <p className="text-muted mb-4">
                Established in 2022 with headquarters in Dublin, GN Solutions specializes in enterprise-grade 
                IT infrastructure, business process automation, and cybersecurity solutions. We help organizations 
                streamline operations, secure digital assets, and achieve seamless cloud migration through 
                cutting-edge network automation and containerization technologies.
              </p>
              
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
                  <h3 className="mb-0 display-5 fw-bold text-dark">95%</h3>
                  <p className="mb-0">Client Retention Rate</p>
                </div>
                <div className="col-6">
                  <h3 className="mb-0 display-5 fw-bold text-dark">200+</h3>
                  <p className="mb-0">Projects Completed</p>
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