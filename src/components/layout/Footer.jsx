import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer 
      className="footer position-relative overflow-hidden p-0 m-0"
      style={{
        backgroundImage: "url('./images/footer.jpg')",
        backgroundSize: "cover",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "auto" // Changed from fixed height to auto
      }}
    >
      <div className="text-white" style={{ 
        paddingTop: 'clamp(150px, 15vw, 300px)' // Responsive padding that scales with viewport
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
        }
      `}</style>
    </footer>
  );
};

export default Footer;