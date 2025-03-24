import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer py-5" style={{ backgroundColor: '#0a1033' }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="footer-brand mb-3">
              <Logo />
            </div>
            <p className="text-white-50 mb-4">
              Provide world wide survival strategies to ensure proactive domination at the day fueling digital transformation.
            </p>
            <div className="d-flex">
              <img src="/api/placeholder/80/80" alt="Award" className="img-fluid me-2" style={{ maxHeight: '80px' }} />
              <img src="/api/placeholder/80/80" alt="Award" className="img-fluid me-2" style={{ maxHeight: '80px' }} />
              <img src="/api/placeholder/80/80" alt="Award" className="img-fluid" style={{ maxHeight: '80px' }} />
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-4">Company</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none">About</Link></li>
              <li className="mb-2"><Link to="/process" className="text-white-50 text-decoration-none">Work Process</Link></li>
              <li className="mb-2"><Link to="/team" className="text-white-50 text-decoration-none">Our Team</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
              <li><Link to="/careers" className="text-white-50 text-decoration-none">Careers</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-4">Industries</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2"><Link to="/industries/automotive" className="text-white-50 text-decoration-none">Automotive</Link></li>
              <li className="mb-2"><Link to="/industries/education" className="text-white-50 text-decoration-none">Education</Link></li>
              <li className="mb-2"><Link to="/industries/finance" className="text-white-50 text-decoration-none">Financial Services</Link></li>
              <li className="mb-2"><Link to="/industries/healthcare" className="text-white-50 text-decoration-none">Healthcare</Link></li>
              <li><Link to="/industries/logistics" className="text-white-50 text-decoration-none">Logistics</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Subscribe Newsletter</h5>
            <div className="mb-4">
              <input type="email" className="form-control mb-2" placeholder="Email Address" />
              <button className="btn btn-dark w-100">SUBSCRIBE NOW</button>
            </div>
            <div className="social-icons">
              <p className="text-white-50 mb-2">Social Share:</p>
              <div className="d-flex">
                <a href="#" className="text-white me-3"><FaFacebook /></a>
                <a href="#" className="text-white me-3"><FaTwitter /></a>
                <a href="#" className="text-white me-3"><FaGoogle /></a>
                <a href="#" className="text-white"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom pt-4 border-top border-secondary">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-white-50 mb-md-0">Copyright © 2025. Designed by RSTheme.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><Link to="/pricing" className="text-white-50 text-decoration-none">Pricing</Link></li>
                <li className="list-inline-item ms-3"><Link to="/technologies" className="text-white-50 text-decoration-none">Technologies</Link></li>
                <li className="list-inline-item ms-3"><Link to="/appointment" className="text-white-50 text-decoration-none">Appointment</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;