import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPhone, FaChevronDown, FaChevronRight, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleServiceMenu = (e) => {
    e.preventDefault();
    setIsServiceMenuOpen(!isServiceMenuOpen);
    navigate('/services');
  };

  const closeNav = () => {
    if (isNavOpen) setIsNavOpen(false);
    setIsServiceMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const getLinkColor = (path) => {
    return isActive(path) ? '#f08b0a' : 'white';
  };

  const serviceCategories = [
    {
      title: "Business Process Automation",
      services: [
        {
          title: "Network as Code",
          link: "/services/network-as-code"
        },
        {
          title: "Infrastructure as Code",
          link: "/services/infrastructure-as-code"
        },
        {
          title: "Platform as Code",
          link: "/services/platform-as-code"
        }
      ]
    },
    {
      title: "Enterprise Solutions",
      services: [
        {
          title: "Managed Network",
          link: "/services/managed-network"
        },
        {
          title: "Cybersecurity",
          link: "/services/cybersecurity"
        },
        {
          title: "Infrastructure Design & Management",
          link: "/services/infrastructure-design"
        },
        {
          title: "IT Remote & Smart Hands Support",
          link: "/services/remote-smart-hands"
        }
      ]
    },
    {
      title: "IT Consulting Services",
      services: [
        {
          title: "IT Project Management",
          link: "/services/it-project-management"
        },
        {
          title: "Technology Transitions & Transformation",
          link: "/services/technology-transitions"
        },
        {
          title: "IT Training",
          link: "/services/it-training"
        }
      ]
    }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0a1033', zIndex: 1000 }}>
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
              <Link className="nav-link" style={{ color: getLinkColor('/') }} to="/" onClick={closeNav}>Home</Link>
            </li>

            {/* Services Dropdown with Mega Menu */}
            <li className={`nav-item dropdown position-static ${isServiceMenuOpen ? 'show' : ''}`}>
              <a
                className={`nav-link d-flex align-items-center ${location.pathname.includes('/services') ? '#f08b0a' : 'text-white'}`}
                href="#"
                onClick={toggleServiceMenu}
              >
                Services <FaChevronDown className="ms-1" size={12} />
              </a>

              {/* Mega Menu */}
              <div
                className={`dropdown-menu w-100 border-0 shadow ${isServiceMenuOpen ? 'show' : ''}`}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(10, 16, 51, 0.95)',
                  display: isServiceMenuOpen ? 'block' : 'none',
                  zIndex: 1000,
                  marginTop: '0',
                  borderRadius: '0 0 4px 4px',
                  padding: '20px 0'
                }}
              >
                <div className="container">
                  <div className="row">
                    {/* Swapped Order: Enterprise, Business Process, IT Consulting */}
                    {[serviceCategories[1], serviceCategories[0], serviceCategories[2]].map((category, index) => (
                      <div className="col-md-4" key={index}>
                        <h6 className="fw-bold mb-3" style={{ color: '#fff' }}>{category.title}</h6>
                        <ul className="list-unstyled">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="mb-2">
                              <Link
                                to={service.link}
                                className="text-decoration-none d-flex align-items-center"
                                style={{
                                  color: location.pathname === service.link ? '#00e8ff' : '#fff',
                                  padding: '6px 10px',
                                  borderRadius: '4px',
                                  transition: 'all 0.2s ease',
                                  backgroundColor: location.pathname === service.link ? '#f08b0a' : 'transparent'
                                }}
                                onClick={closeNav}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = location.pathname === service.link ? '#f08b0a' : 'transparent'}
                              >
                                {service.title} <FaChevronRight className="ms-2" size={12} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" style={{ color: getLinkColor('/aboutus') }} to="/aboutus" onClick={closeNav}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: getLinkColor('/blogs') }} to="/blogs" onClick={closeNav}>Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: getLinkColor('/contact') }} to="/contact" onClick={closeNav}>Contact</Link>
            </li>

            {/* Mobile Contact Info */}
            <li className="nav-item d-lg-none mt-3">
              <div className="d-flex align-items-center">
                <div className="rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px", backgroundColor: 'var(--primary-color)' }}>
                  <FaPhone color="white" size={16} />
                </div>
                <div className="ms-2">
                  <p className="mb-0 text-white small">Call us today</p>
                  <p className="mb-0 text-white fw-bold">+ 353 (0) 874 896 800‬</p>
                </div>
              </div>
            </li>
            <li className="nav-item d-lg-none mt-3">
              <div className="d-flex align-items-center">
                <div className="rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px", backgroundColor: 'var(--primary-color)' }}>
                  <FaEnvelope color="white" size={16} />
                </div>
                <div className="ms-2">
                  <p className="mb-0 text-white small">Email us</p>
                  <p className="mb-0 text-white fw-bold">info@gnsolutions.com</p>
                </div>
              </div>
            </li>
          </ul>

          {/* Desktop Contact Info */}
          <div className="d-none d-lg-flex align-items-center flex-wrap">
            <div className="d-flex align-items-center me-3 mb-2 mb-md-0">
              <div className="rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: "45px", height: "45px", backgroundColor: 'var(--primary-color)' }}>
                <FaPhone color="white" />
              </div>
              <div className="ms-2">
                <p className="mb-0 text-white small">Call us today</p>
                <p className="mb-0 text-white fw-bold">+ 353 (0) 874 896 800‬</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: "45px", height: "45px", backgroundColor: 'var(--primary-color)' }}>
                <FaEnvelope color="white" />
              </div>
              <div className="ms-2">
                <p className="mb-0 text-white small">Email us</p>
                <p className="mb-0 text-white fw-bold">info@gnsolutions.eu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
