import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import '../../assets/css/HeroSection.css';

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 767;

  const handleVideoModalToggle = () => {
    setIsVideoModalOpen(!isVideoModalOpen);
  };

  return (
    <section
      id='hero-section'
      className="hero-section position-relative"
      style={{
        backgroundColor: '#0a1033',
        padding: isMobile ? "80px 0 100px" : "120px 0 140px",
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
          <div className="col-lg-12">
            <SectionTitle
              subtitle="Enterprise-grade IT Solutions & Cybersecurity Expertise"
              title={<>Transform Your Business with <span style={{color: "var(--primary-color)"}} className="fw-bold">Intelligent </span> Automation</>}
              light={true}
            />
            <p className="text-white-50 mb-4">
              Accelerate your digital transformation with cutting-edge network automation,
              cloud infrastructure solutions, and military-grade cybersecurity protection.
            </p>

            <div className="d-flex align-items-center justify-content-center mt-4 button-container">
              <Link
                to="/aboutus"
                className={`btn discover-btn px-4 py-3 rounded-1 ${isHovered ? 'shadow-lg' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  minWidth: isMobile ? '80%' : '220px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span>Discover More</span>
                <FaArrowRight
                  className="ms-2"
                  style={{
                    transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </Link>
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

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 0.3;
          }
        }

        .cyber-rotate {
          animation: rotate 20s linear infinite;
          transform-origin: center center;
        }

        .cyber-rotate-reverse {
          animation: rotate 25s linear infinite reverse;
          transform-origin: center center;
        }

        .cyber-glow {
          animation: pulse 2s ease-in-out infinite;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(80, 80, 90, 0.1);
          z-index: 2;
        }

        .discover-btn {
          position: relative;
        }

        .discover-btn:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .discover-btn:hover:after {
          height: 100%;
        }

        .discover-btn:hover {
          transform: translateY(-3px);
          background-color: #ff9f2b !important;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;
        }

        .discover-btn:active {
          transform: translateY(0);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1) !important;
        }

        /* Responsive Styles */
        @media (max-width: 991px) {
          .hero-section .row {
            flex-direction: row;
          }

          .cyber-container {
            max-width: 450px;
            margin: 0 auto;
          }
        }

        @media (max-width: 767px) {
          .hero-section .row {
            padding-top: 60px;
          }

          .discover-btn {
            max-width: 85%;
            margin: 0 auto;
            padding: 12px 30px !important;
            font-size: 16px;
            letter-spacing: 0.5px;
            border-radius: 4px !important;
          }
          
          .button-container {
            margin-top: 30px !important;
          }
        }

        @media (max-width: 575px) {
          .hero-section {
            padding: 60px 0 80px !important;
          }
          
          .hero-section .row {
            padding-top: 20px;
          }

          .hero-section .col-lg-12 {
            text-align: center;
          }

          .discover-btn {
            max-width: 90%;
            margin: 0 auto;
            font-size: 15px;
            padding: 10px 20px !important;
          }
          
          .button-container {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;