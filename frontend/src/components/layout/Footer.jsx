import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { API_URL } from '../../api/main';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState(false);
  const [newsletterErrorMsg, setNewsletterErrorMsg] = useState('');


  const handleSubscribe = async () => {
    try {
      const response = await fetch(`${API_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail.trim() })
      });
      const result = await response.json();

      if (response.ok) {
        setNewsletterSuccess(true);
        setNewsletterEmail('');
        setNewsletterError(false);
        setNewsletterErrorMsg('');
        setTimeout(() => setNewsletterSuccess(false), 5000);
      } else {
        setNewsletterError(true);
        setNewsletterErrorMsg(result.message || 'Subscription failed');
        setTimeout(() => {
          setNewsletterError(false);
          setNewsletterErrorMsg('');
        }, 5000);
      }
    } catch (err) {
      setNewsletterError(true);
      setNewsletterErrorMsg('Subscription failed. Please try again later.');
      setTimeout(() => {
        setNewsletterError(false);
        setNewsletterErrorMsg('');
      }, 5000);
    }
  };


  return (
    <footer className="footer position-relative overflow-hidden p-0 m-0">
      {/* Wave backgrounds - updated to match the reference image */}
      <div className="wave-container">
        <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path className="wave-path wave1" d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,138.7C672,117,768,75,864,64C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path className="wave-path wave2" d="M0,160L48,154.7C96,149,192,139,288,133.3C384,128,480,128,576,138.7C672,149,768,171,864,181.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path className="wave-path wave3" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,176C672,192,768,224,864,234.7C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="content-container" style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: 'clamp(80px, 8vw, 150px)',
      }}>
        <div className="container py-4">
          {/* Restructured content in a single row */}
          <div className="row">
            {/* Company description */}
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <p className="mb-4 small-text" style={{
                fontSize: '0.95rem',
                lineHeight: '1.7',
                letterSpacing: '0.02em',
                color: '#301934',
                textAlign: 'justify',
              }}>
                GN Solutions delivers enterprise-grade IT automation and cybersecurity services,
                empowering European businesses with secure, scalable infrastructure solutions.
              </p>
            </div>

            {/* Quick links */}
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <h5 className="fw-bold mb-3" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', color: '#301934' }}>Company</h5>
              <ul className="list-unstyled footer-links" style={{ fontSize: '0.95rem' }}>
                <li className="mb-2"><Link to="/" className="text-decoration-none hover-link">Home</Link></li>
                <li className="mb-2"><Link to="/" className="text-decoration-none hover-link">Services</Link></li>
                <li className="mb-2"><Link to="/products" className="text-decoration-none hover-link">Products</Link></li>
                <li className="mb-2"><Link to="/aboutus" className="text-decoration-none hover-link">About Us</Link></li>
                <li className="mb-2"><Link to="/blogs" className="text-decoration-none hover-link">Blogs</Link></li>
                <li><Link to="/contact" className="text-decoration-none hover-link">Contact</Link></li>
              </ul>
            </div>

            {/* Social icons */}
            <div className="col-lg-2 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <h5 className="fw-bold mb-3" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', color: '#301934' }}>Connect</h5>
              <div className="d-flex flex-column">
                <a href="#" className="mb-2 social-icon-link d-flex align-items-center">
                  <FaFacebook size={20} className="me-2" /> Facebook
                </a>
                <a href="#" className="mb-2 social-icon-link d-flex align-items-center">
                  <FaTwitter size={20} className="me-2" /> Twitter
                </a>
                <a href="#" className="social-icon-link d-flex align-items-center">
                  <FaLinkedin size={20} className="me-2" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Newsletter subscription */}
            <div className="col-lg-3 col-md-12 col-sm-12">
              <h5 className="mb-3 fw-bold" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', color: '#301934' }}>Stay Updated</h5>
              <div className="mb-3 d-flex">
                <input
                  type="email"
                  className=" py-2"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter business email"
                  style={{
                    borderRadius: '4px 0 0 4px',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    backgroundColor: 'rgba(242, 242, 242, 0.9)',
                    fontSize: '0.9rem'
                  }}
                />
                <button
                  className="btn"
                  onClick={handleSubscribe}
                  style={{
                    backgroundColor: '#F08B04',
                    borderColor: '#F08B04',
                    color: 'white',
                    borderRadius: '0 4px 4px 0',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    padding: '0.5rem 1rem',
                    whiteSpace: 'nowrap'
                  }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer bottom section with the three elements in one row on desktop */}
          <div className="footer-bottom pt-4 mt-4 border-top" style={{ borderColor: 'rgba(48, 25, 52, 0.15)' }}>
            <div className="d-flex flex-wrap justify-content-center align-items-center text-center gap-md-4">
              <p className="mb-md-0 mb-2" style={{ fontSize: '0.85rem', opacity: '0.9', color: '#301934' }}>GN Solutions Headquarters</p>
              <p className="mb-md-0 mb-2" style={{ fontSize: '0.85rem', opacity: '0.9', color: '#301934' }}>Dublin Office: +353 89 278 5147</p>
              <p className="mb-0" style={{ fontSize: '0.85rem', opacity: '0.9', color: '#301934' }}>© 2025 GN Solutions. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main footer styling */
        .footer {
          position: relative;
          background-color: #FFFFFF;
          width: 100%;
          min-height: 400px;
          overflow: hidden;
        }
        
        /* Wave styling - updated to match the reference image */
        .wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .wave-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          transform-origin: bottom;
        }
        
        .wave-path {
          fill-opacity: 0;
          animation: fadeInAnimation 0.8s forwards;
        }
        
        @keyframes fadeInAnimation {
          to {
            fill-opacity: 1;
          }
        }
        
        .wave-svg:nth-child(1) {
          z-index: 3;
          height: 50%;
        }
        
        .wave-svg:nth-child(2) {
          z-index: 2;
          height: 60%;
        }
        
        .wave-svg:nth-child(3) {
          z-index: 1;
          height: 70%;
        }
        
        /* Updated wave colors to match requested colors */
        .wave1 {
          fill: rgba(240, 139, 4, 0.3); /* #F08B04 with opacity */
          transform: translateY(-5%);
        }
        
        .wave2 {
          fill: rgba(48, 25, 52, 0.15); /* #301934 with opacity */
          transform: translateY(0%);
        }
        
        .wave3 {
          fill: rgba(242, 242, 242, 0.8); /* #F2F2F2 with opacity */
          transform: translateY(5%);
        }
        
        /* Responsive styling */
        @media (max-width: 768px) {
          .footer {
            min-height: auto;
          }
          
          .wave-svg {
            height: 40%;
          }
          
          .footer-bottom {
            flex-direction: column;
          }
        }
        
        /* Link styling */
        .hover-link {
          transition: all 0.2s ease;
          position: relative;
          color: #301934;
        }
        
        .hover-link:hover {
          color: #F08B04 !important;
        }
        
        .hover-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #F08B04;
          transition: width 0.3s ease;
        }
        
        .hover-link:hover:after {
          width: 100%;
        }
        
        /* Social icon styling */
        .social-icon-link {
          transition: all 0.3s ease;
          color: #301934;
          text-decoration: none;
          margin-bottom: 8px;
        }
        
        .social-icon-link:hover {
          color: #F08B04 !important;
          transform: translateX(3px);
        }
      `}</style>


      {newsletterSuccess && <p className="text-success small mt-2">You're subscribed!</p>}
      {newsletterError && (
        <p className="text-danger small mt-2">
          {newsletterErrorMsg}
        </p>
      )}

    </footer>
  );
};

export default Footer;