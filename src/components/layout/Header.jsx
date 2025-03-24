import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleServiceMenu = (e) => {
    e.preventDefault();
    setIsServiceMenuOpen(!isServiceMenuOpen);
  };

  // Optional: Close the navbar when a link is clicked (better UX on mobile)
  const closeNav = () => {
    if (isNavOpen) setIsNavOpen(false);
    setIsServiceMenuOpen(false);
  };

  const serviceMenuItems = [
    {
      title: "Digital Workplace",
      link: "/services/digital-workplace",
      featured: true
    },
    {
      title: "Cloud & Application Services",
      link: "/services/cloud-application"
    },
    {
      title: "Depot & Logistics Services",
      link: "/services/depot-logistics"
    },
    {
      title: "Strategic Staffing and Payroll Services",
      link: "/services/staffing-payroll"
    },
    {
      title: "Professional Services",
      link: "/services/professional"
    },
    {
      title: "Hardware as a Service",
      link: "/services/hardware"
    },
    {
      title: "Software Procurement",
      link: "/services/software"
    },
    {
      title: "Device as a Service (DaaS)",
      link: "/services/daas",
      column: 2
    },
    {
      title: "Smart Lockers and Vending Machines",
      link: "/services/smart-lockers",
      column: 2
    },
    {
      title: "HW Maintenance & Support Services",
      link: "/services/hw-maintenance",
      column: 2
    },
    {
      title: "IT Field Technical Services",
      link: "/services/it-field",
      column: 2
    },
    {
      title: "Centralized Walk-Up Centres",
      link: "/services/walk-up-centres",
      column: 2
    }
  ];

  // Separate services for left and right columns
  const leftColumnServices = serviceMenuItems.filter(item => !item.column || item.column === 1);
  const rightColumnServices = serviceMenuItems.filter(item => item.column === 2);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0a1033' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeNav}>
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-info" to="/" onClick={closeNav}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/pages" onClick={closeNav}>Pages</Link>
            </li>
            
            {/* Services Dropdown with Mega Menu */}
            <li className={`nav-item dropdown position-static ${isServiceMenuOpen ? 'show' : ''}`}>
              <a
                className="nav-link text-white d-flex align-items-center"
                href="#"
                onClick={toggleServiceMenu}
              >
                Services <FaChevronDown className="ms-1" size={12} />
              </a>
              
              {/* Mega Menu for Services */}
              <div
                className={`dropdown-menu w-100 border-0 shadow ${isServiceMenuOpen ? 'show' : ''}`}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  backgroundColor: 'white',
                  display: isServiceMenuOpen ? 'block' : 'none',
                  zIndex: 1000,
                  marginTop: '0',
                  borderRadius: '0 0 4px 4px',
                  padding: '20px 0'
                }}
              >
                <div className="container">
                  <div className="row">
                    {/* Left Service Links Column */}
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        {leftColumnServices.map((service, index) => (
                          <li key={index} className="mb-3">
                            <Link
                              to={service.link}
                              className="text-decoration-none d-flex align-items-center"
                              style={{
                                color: service.featured ? '#00e8ff' : '#333',
                                backgroundColor: service.featured ? '#0d1545' : 'transparent',
                                padding: '10px',
                                borderRadius: '4px'
                              }}
                              onClick={closeNav}
                            >
                              {service.title} <FaChevronRight className="ms-2" size={12} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Service Links Column */}
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        {rightColumnServices.map((service, index) => (
                          <li key={index} className="mb-3">
                            <Link
                              to={service.link}
                              className="text-decoration-none d-flex align-items-center"
                              style={{ color: '#333' }}
                              onClick={closeNav}
                            >
                              {service.title} <FaChevronRight className="ms-2" size={12} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Featured Service Cards */}
                    <div className="col-md-3">
                      <div className="card border-0 h-100">
                        <img src="/api/placeholder/300/200" className="card-img-top" alt="IT Service Desk" />
                        <div className="card-body p-0 pt-3">
                          <h6 className="card-title text-info">The case for a global IT service desk</h6>
                          <p className="card-text small text-muted">The help desk function typically makes up less than five percent of a firm's IT spending, but can represent almost 50% of the IT organization's perceived value.</p>
                          <Link
                            to="/services/global-it"
                            className="text-decoration-none text-info"
                            onClick={closeNav}
                          >
                            Know More <FaChevronRight className="ms-1" size={10} />
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-3">
                      <div className="card border-0 h-100">
                        <img src="/api/placeholder/300/200" className="card-img-top" alt="Field Service Management" />
                        <div className="card-body p-0 pt-3">
                          <h6 className="card-title text-info">Revolutionizing Field Service Management</h6>
                          <p className="card-text small text-muted">The AVASO Field Force Application (FFA) is your ultimate partner for efficient, seamless, and innovative field service management.</p>
                          <Link
                            to="/services/field-service"
                            className="text-decoration-none text-info"
                            onClick={closeNav}
                          >
                            Know More <FaChevronRight className="ms-1" size={10} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-white" to="/industries" onClick={closeNav}>Industries</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/case-studies" onClick={closeNav}>Case Studies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/blog" onClick={closeNav}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact" onClick={closeNav}>Contact</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="bg-info rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px" }}>
              <FaPhone color="white" />
            </div>
            <div className="ms-2">
              <p className="mb-0 text-white small">Call us today</p>
              <p className="mb-0 text-white fw-bold">+123-4669-1234</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for closing mega menu when clicking outside */}
      {isServiceMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0,0,0,0.5)', 
            cursor: 'pointer'
          }}
          onClick={() => setIsServiceMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Header;