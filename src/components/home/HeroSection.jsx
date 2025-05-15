import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import '../../assets/css/HeroSection.css';

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

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

  // Handle Support Request button click
  const handleSupportRequest = () => {
    navigate('/contact');
    // After navigation, scroll to the contact form section
    setTimeout(() => {
      const contactForm = document.querySelector('.contact-form-wrapper');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Handle Get In Touch button click
  const handleGetInTouch = () => {
    // First check if we're already on the home page
    if (window.location.pathname === '/') {
      // If we're on the home page, just scroll to footer
      const footer = document.querySelector('.footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
        // Focus on the email input after scrolling
        setTimeout(() => {
          const emailInput = footer.querySelector('input[type="email"]');
          if (emailInput) {
            emailInput.focus();
          }
        }, 500);
      }
    } else {
      // If we're on another page, navigate to home first
      navigate('/');
      // Then scroll to footer after navigation
      setTimeout(() => {
        const footer = document.querySelector('.footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const emailInput = footer.querySelector('input[type="email"]');
            if (emailInput) {
              emailInput.focus();
            }
          }, 500);
        }
      }, 100);
    }
  };

  // Handle Live Chat button click
  const handleLiveChat = () => {
    navigate('/contact');
    // After navigation, trigger the live chat to open
    setTimeout(() => {
      const liveChatButton = document.querySelector('.support-btn');
      if (liveChatButton) {
        liveChatButton.click();
      }
      // Also scroll to the support options section
      const supportOptions = document.querySelector('.support-options-section');
      if (supportOptions) {
        supportOptions.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <section
      id='hero-section'
      className="hero-section position-relative"
      style={{
        backgroundColor: '#0a1033',
        padding: isMobile ? "100px 0 120px" : "140px 0 200px",
        position: 'relative',
        overflow: 'hidden',
        minHeight: isMobile ? '600px' : '420px'
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
            <p className="text-white-50 mb-5" 
            style={{ 
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto 3rem auto'
            }}
            >
              Accelerate your digital transformation with cutting-edge network automation,
              cloud infrastructure solutions, and military-grade cybersecurity protection.
            </p>

            {/* New Three Buttons Section */}
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap button-group">
              <button
                id='support-request-btn'
                className="btn hero-action-btn support-request-btn"
                onClick={handleSupportRequest}
                style={{
                  backgroundColor: 'var(--tt-color)',
                  color: 'white',
                  padding: isMobile ? '14px 24px' : '16px 36px',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: isMobile ? '15px' : '16px',
                  minWidth: isMobile ? '260px' : '200px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 102, 255, 0.2)',
                  textTransform: 'none',
                  letterSpacing: '0.5px',
                  cursor: 'pointer'
                }}
              >
                Support Request
              </button>

              <button
                className="btn hero-action-btn get-in-touch-btn"
                onClick={handleGetInTouch}
                style={{
                  backgroundColor: '#FF6B00',
                  color: 'white',
                  padding: isMobile ? '14px 24px' : '16px 36px',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: isMobile ? '15px' : '16px',
                  minWidth: isMobile ? '260px' : '200px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 107, 0, 0.2)',
                  textTransform: 'none',
                  letterSpacing: '0.5px',
                  cursor: 'pointer'
                }}
              >
                Get In Touch
              </button>

              <button
                id='live-chat-btn'
                className="btn hero-action-btn live-chat-btn"
                onClick={handleLiveChat}
                style={{
                  backgroundColor: '#fff',
                  color: 'var(--tt-color)',
                  padding: isMobile ? '14px 24px' : '16px 36px',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: isMobile ? '15px' : '16px',
                  minWidth: isMobile ? '260px' : '200px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 102, 255, 0.2)',
                  textTransform: 'none',
                  letterSpacing: '0.5px',
                  cursor: 'pointer'
                }}
              >
                Live Chat
              </button>
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