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
        height: "auto" // This will be controlled by content + padding
      }}
    >
      <div className="text-white" style={{
        paddingTop: 'clamp(80px, 8vw, 150px)', // Reduced from clamp(150px, 15vw, 300px)
        paddingRight: 'clamp(0px, 5vw, 100px)',
      }}>
        <div className="container py-4"> {/* Reduced padding from py-5 */}
          <div className="row">
            <div className="col-md-6"></div>

            <div className="col-md-6 px-0" style={{marginTop: 'clamp(30px, 5vw, 80px)'}}> {/* Reduced from clamp(50px, 10vw, 150px) */}
              <div className="row text-end">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-lg-0 footer-description">
                  <p className="text-white mb-4 small-text ms-auto" style={{ 
                    fontSize: '0.95rem', 
                    lineHeight: '1.7', 
                    letterSpacing: '0.02em', 
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)', 
                    textAlign: 'right',
                    maxWidth: '95%',
                    marginRight: 'clamp(-120px, -15vw, 50px)', // Reduced from clamp(0px, 5vw, 100px)
                  }}>
                    GN Solutions delivers enterprise-grade IT automation and cybersecurity services,
                    empowering European businesses with secure, scalable infrastructure solutions.
                  </p>                  
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-lg-0 text-end">
                  <h5 className="text-white mb-3 fw-bold" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Company</h5>
                  <ul className="list-unstyled footer-links" style={{ fontSize: '0.95rem' }}>
                    <li className="mb-2"><Link to="/about" className="text-white text-decoration-none hover-link">About Us</Link></li>
                    <li className="mb-2"><Link to="/services" className="text-white text-decoration-none hover-link">Services</Link></li>
                    <li className="mb-2"><Link to="/case-studies" className="text-white text-decoration-none hover-link">Case Studies</Link></li>
                    <li className="mb-2"><Link to="/blog" className="text-white text-decoration-none hover-link">Insights</Link></li>
                    <li><Link to="/contact" className="text-white text-decoration-none hover-link">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="row mb-3 d-flex justify-content-between"> {/* Reduced margin from mb-4 */}
                <div className="social-icons col-lg-6 col-md-6 col-sm-12 mb-3 mb-lg-0"> {/* Reduced margin */}
                    <p className="text-white mb-2 fw-medium" style={{ fontSize: '0.95rem', letterSpacing: '0.02em', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Connect With Us:</p>
                    <div className="d-flex">
                      <a href="#" className="text-white me-4 social-icon-link"><FaFacebook size={22} /></a>
                      <a href="#" className="text-white me-4 social-icon-link"><FaTwitter size={22} /></a>
                      <a href="#" className="text-white social-icon-link"><FaLinkedin size={22} /></a>
                    </div>
                  </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h5 className="text-white mb-2 fw-bold" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Stay Updated</h5>
                  <div className="mb-3 d-flex"> {/* Reduced margin */}
                    <input
                      type="email"
                      className="form-control py-2"
                      placeholder="Enter business email"
                      style={{ 
                        borderRadius: '4px 0 0 4px',
                        border: 'none',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        fontSize: '0.9rem'
                      }}
                    />
                    <button 
                      className="btn" 
                      style={{ 
                        backgroundColor: '#f08b0a', 
                        borderColor: '#f08b0a', 
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
            </div>
          </div>

          <div className="footer-bottom pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.15)' }}> {/* Reduced padding */}
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
                  <p className="text-white mb-0 me-md-3" style={{ fontSize: '0.85rem', opacity: '0.9' }}>GN Solutions Headquarters</p>
                  <p className="text-white mb-0 me-md-3" style={{ fontSize: '0.85rem', opacity: '0.9' }}>Dublin Office: + 353 (0) 874 896 800‬</p>
                  <p className="text-white mb-0" style={{ fontSize: '0.85rem', opacity: '0.9' }}>© 2025 GN Solutions. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add responsive styles */}
      <style jsx>{`
        /* Option to add a max-height to the footer */
        .footer {
          max-height: 600px; /* This limits the overall height */
        }
        
        @media (max-width: 768px) {
          .footer {
            max-height: none; /* Remove height restriction on mobile */
          }
          
          .small-text {
            font-size: 0.9rem;
            margin-right: 0 !important;
            max-width: 100% !important;
          }
          
          .footer-description {
            padding-right: 15px;
          }
          
          .social-icons {
            text-align: center !important;
          }
          
          .social-icons .d-flex {
            justify-content: center;
          }
        }
        
        @media (max-width: 576px) {
          .footer-bottom p {
            font-size: 0.75rem !important;
          }
        }
        
        .hover-link {
          transition: all 0.2s ease;
          position: relative;
        }
        
        .hover-link:hover {
          color: #f08b0a !important;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        
        .hover-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #f08b0a;
          transition: width 0.3s ease;
        }
        
        .hover-link:hover:after {
          width: 100%;
        }
        
        .social-icon-link {
          transition: all 0.3s ease;
        }
        
        .social-icon-link:hover {
          color: #f08b0a !important;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;