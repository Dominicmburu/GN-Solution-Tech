import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const HeroSection = () => {
  return (
    <section className="hero-section position-relative" style={{ backgroundColor: '#0a1033', padding: "80px 0" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <SectionTitle 
              subtitle="Best Cyber Security Services"
              title={<>We Provide Advance <span className="text-info fw-bold">Cyber</span> Protection</>}
              light={true}
            />
            <p className="text-white-50 mb-4">Lectus urna duis convallis convallis tellus id interdum morbi tincidunt augue interdum velit euismod intesque.</p>
            <button className="btn btn-info px-4 py-2 rounded-1">
              Discover More <FaArrowRight className="ms-2" />
            </button>
          </div>
          <div className="col-lg-6 text-center">
            <div className="position-relative">
              <div className="cyber-circle-bg">
                {/* SVG representation of the cyber circle */}
                <svg width="400" height="400" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="#00e8ff" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="200" cy="200" r="150" fill="none" stroke="#00e8ff" strokeWidth="3" />
                </svg>
                {/* Placeholder for the figure in a hoodie */}
                <div className="position-absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                  <div className="bg-dark rounded-circle" style={{ width: "200px", height: "200px", position: "relative" }}>
                    <div className="bg-dark position-absolute" style={{ width: "140px", height: "140px", borderRadius: "100px 100px 0 0", top: "-75px", left: "30px" }}></div>
                    {/* Simulating the cyber glow */}
                    <div className="position-absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, 10%)", width: "100px", height: "50px", backgroundColor: "#00e8ff", opacity: "0.5", filter: "blur(15px)" }}></div>
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

export default HeroSection;