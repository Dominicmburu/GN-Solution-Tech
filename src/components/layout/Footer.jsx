import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer position-relative overflow-hidden p-0 m-0" style={{ overflow: 'hidden' }}>
      {/* SVG Wave Background */}
      <div className="position-relative w-full" style={{ height: '200px' }}>
        <svg
          className="position-absolute bottom-0 start-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Lightest blue wave */}
          <path
            fill="#E8F1FD"
            fillOpacity="1"
            d="M0,224L120,213.3C240,203,480,181,720,181.3C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>

          {/* Light blue wave */}
          <path
            fill="#C5DCF8"
            fillOpacity="1"
            d="M0,256L120,245.3C240,235,480,213,720,202.7C960,192,1200,192,1320,192L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>

          {/* Medium blue wave */}
          <path
            fill="#6A9EE2"
            fillOpacity="1"
            d="M0,288L120,272C240,256,480,224,720,213.3C960,203,1200,213,1320,218.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>

          {/* Dark blue wave */}
          <path
            fill="#123977"
            fillOpacity="1"
            d="M0,288L120,277.3C240,267,480,245,720,234.7C960,224,1200,224,1320,224L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>

          {/* Darkest blue wave */}
          <path
            fill="#a55d00"
            fillOpacity="1"
            d="M0,320L120,309.3C240,299,480,277,720,266.7C960,256,1200,256,1320,256L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* <div className="container position-relative" style={{ zIndex: 1 }}> */}
      <div className="text-white p-0" style={{ backgroundColor: '#0a1033' }}>
        <div className="position-relative" style={{ height: '60px', overflow: 'hidden' }}>
          <svg
            className="position-absolute top-0 start-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%' }}
          >
            <path
              fill="#5c3402"
              fillOpacity="1"
              d="M0,32L80,37.3C160,43,320,53,80,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,0,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="container py-4">
          <div className="row mb-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <p className="text-white mb-4">
                GN Solutions delivers enterprise-grade IT automation and cybersecurity services,
                empowering European businesses with secure, scalable infrastructure solutions.
              </p>
              <div className="social-icons">
                <p className="text-white mb-2">Connect With Us:</p>
                <div className="d-flex">
                  <a href="#" className="text-white me-3"><FaFacebook size={20} /></a>
                  <a href="#" className="text-white me-3"><FaTwitter size={20} /></a>
                  <a href="#" className="text-white"><FaLinkedin size={20} /></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-white mb-4">Company</h5>
              <ul className="list-unstyled footer-links">
                <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
                <li className="mb-2"><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
                <li className="mb-2"><Link to="/case-studies" className="text-white text-decoration-none">Case Studies</Link></li>
                <li className="mb-2"><Link to="/blog" className="text-white text-decoration-none">Insights</Link></li>
                <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-4">Stay Updated</h5>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter business email"
                />
                <button className="btn w-100" style={{ backgroundColor: '#f08b0a', borderColor: '#f08b0a', color: 'white' }}>Get Industry Insights</button>
              </div>
              <div className="text-white">
                <small>GN Solutions EU Headquarters</small>
                <p className="mb-0">Dublin Office: + 353 (0) 874 896 800‬</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom pt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            <div className="row align-items-center">
              <div className="col-12 text-center text-md-start">
                <p className="text-white mb-0">
                  © 2025 GN Solutions EU. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

