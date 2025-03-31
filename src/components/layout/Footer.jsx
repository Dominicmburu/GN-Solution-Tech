import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer py-5" style={{ backgroundColor: '#0a1033' }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer-brand mb-3">
              <Logo />
            </div>
            <p className="text-white-50 mb-4">
              GN Solutions delivers enterprise-grade IT automation and cybersecurity services, 
              empowering European businesses with secure, scalable infrastructure solutions.
            </p>
            <div className="social-icons">
              <p className="text-white-50 mb-2">Connect With Us:</p>
              <div className="d-flex">
                <a href="#" className="text-white me-3"><FaFacebook /></a>
                <a href="#" className="text-white me-3"><FaTwitter /></a>
                <a href="#" className="text-white"><FaLinkedin /></a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-4">Company</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/services" className="text-white-50 text-decoration-none">Services</Link></li>
              <li className="mb-2"><Link to="/case-studies" className="text-white-50 text-decoration-none">Case Studies</Link></li>
              <li className="mb-2"><Link to="/blog" className="text-white-50 text-decoration-none">Insights</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
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
              <button className="btn btn-dark w-100">Get Industry Insights</button>
            </div>
            <div className="text-white-50">
              <small>GN Solutions EU Headquarters</small>
              <p className="mb-0">Dublin Office: + 353 (0) 874 896 800‬
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom pt-4 border-top border-secondary">
          <div className="row align-items-center">
            <div className="col-12 text-center text-md-start">
              <p className="text-white-50 mb-0">
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