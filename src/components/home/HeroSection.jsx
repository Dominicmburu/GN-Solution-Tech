import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import '../../assets/css/HeroSection.css';

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleVideoModalToggle = () => {
    setIsVideoModalOpen(!isVideoModalOpen);
  };

  return (
    <section
      className="hero-section position-relative"
      style={{
        backgroundColor: '#0a1033',
        padding: "0px 0",
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: 'cover',
          opacity: 0.6,
          zIndex: 1
        }}
      >
        <source src="/videos/Dublin.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay"></div>

      <div className="hero-cont container position-relative" style={{ zIndex: 3 }}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <SectionTitle
              subtitle="Enterprise-grade IT Solutions & Cybersecurity Expertise"
              title={<>Transform Your Business with <span className="text-info fw-bold">Intelligent </span> Automation</>}
              light={true}
            />
            <p className="text-white-50 mb-4">
              Accelerate your digital transformation with cutting-edge network automation,
              cloud infrastructure solutions, and military-grade cybersecurity protection.
            </p>

            <div className="d-flex align-items-center">
              <button
                className={`discover-btn btn me-3 btn-info px-4 py-2 rounded-1  transition-all ${isHovered ? 'shadow-lg' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link
                  to="/about"
                  className="text-white text-decoration-none d-flex align-items-center"
                >
                  Discover More
                  <FaArrowRight
                    className="ms-2 transition-transform"
                    style={{
                      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </Link>
              </button>

            
            </div>
          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="position-relative cyber-container">
              <div className="cyber-circle-bg">
                <svg
                  viewBox="0 0 400 400"
                  className="cyber-rotate w-100"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                >
                 
                  
                 
                  
                </svg>

                <div
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    zIndex: 2,
                    width: '100%',
                    maxWidth: '450px',
                    height: 'auto',
                    transform: 'translate(-50%, -45%)'
                  }}
                >
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1050
          }}
          onClick={handleVideoModalToggle}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-body p-0">
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-3 text-white"
                  onClick={handleVideoModalToggle}
                ></button>
                <video
                  controls
                  autoPlay
                  className="w-100"
                >
                  <source src="/videos/company-overview.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;