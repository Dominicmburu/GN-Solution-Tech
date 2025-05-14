import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="footer position-relative overflow-hidden p-0 m-0"
      style={{
        width: "100%",
        height: "auto", 
        position: "relative"
      }}
    >
      {/* SVG Wave overlay */}
      <div className="wave-container" style={{ position: "absolute", top: 0, left: 0, width: "100%", overflow: "hidden", lineHeight: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: "relative", display: "block", width: "calc(100% + 1.3px)", height: "120px" }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            style={{ fill: "#f8f9fa" }}></path>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            style={{ fill: "#f08b0a", transform: "translateY(30px)" }}></path>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            style={{ fill: "#0a1033", transform: "translateY(60px)" }}></path>
        </svg>
      </div>

      {/* Content area with dark purple background */}
      <div className="content-area" style={{ 
        backgroundColor: "#0a1033", 
        paddingTop: "clamp(120px, 12vw, 180px)",
        color: "white"
      }}>
        <div className="container py-4">
          <div className="row mb-4">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <p className="text-white mb-4 small-text">
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
            
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <h5 className="text-white mb-4">Company</h5>
              <ul className="list-unstyled footer-links">
                <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
                <li className="mb-2"><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
                <li className="mb-2"><Link to="/case-studies" className="text-white text-decoration-none">Case Studies</Link></li>
                <li className="mb-2"><Link to="/blog" className="text-white text-decoration-none">Insights</Link></li>
                <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              </ul>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-12">
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
                <small>GN Solutions Headquarters</small>
                <p className="mb-0">Dublin Office: + 353 (0) 874 896 800‬</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom pt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <p className="text-white mb-0 small-text">
                  © 2025 GN Solutions. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .small-text {
            font-size: 0.9rem;
          }
          .wave-container svg {
            height: 60px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;