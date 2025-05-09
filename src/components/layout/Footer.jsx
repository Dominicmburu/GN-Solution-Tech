import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer py-5 position-relative" style={{ backgroundColor: '#0a1033', overflow: 'hidden' }}>
      {/* Oceanic Wave Background at the TOP */}
      <div className="position-absolute top-0 start-0 w-100" style={{ height: '120px', zIndex: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          {/* Inverted the path direction to make waves appear at the top */}
          <path fill="#0a1033" fillOpacity="0.8" d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,224C672,235,768,213,864,202.7C960,192,1056,192,1152,208C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#f08b0a" fillOpacity="0.6" d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,218.7C672,192,768,160,864,154.7C960,149,1056,171,1152,197.3C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          <path fill="white" fillOpacity="0.3" d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,160C672,149,768,107,864,117.3C960,128,1056,192,1152,202.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
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
    </footer>
  );
};

export default Footer;