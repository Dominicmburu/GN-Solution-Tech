import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPhone, FaChevronDown, FaChevronRight, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const location = useLocation(); // Get current route location
  const navigate = useNavigate(); // Add useNavigate hook for programmatic navigation
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleServiceMenu = (e) => {
    e.preventDefault();
    setIsServiceMenuOpen(!isServiceMenuOpen);
    
    // Navigate to services page when clicking the services button
    navigate('/services');
  };

  // Optional: Close the navbar when a link is clicked (better UX on mobile)
  const closeNav = () => {
    if (isNavOpen) setIsNavOpen(false);
    setIsServiceMenuOpen(false);
  };

  // Function to check if link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Get link text color based on active state
  const getLinkColor = (path) => {
    return isActive(path) ? '#f08b0a' : 'white';
  };

  // Updated service categories based on the new information
  const serviceCategories = [
    {
      title: "Business Process Automation",
      services: [
        {
          title: "Network as Code",
          link: "/services/network-as-code",
          description: "Automated deployment and management of network infrastructure."
        },
        {
          title: "Infrastructure as Code",
          link: "/services/infrastructure-as-code",
          description: "Infrastructure provisioning and configuration automation."
        },
        {
          title: "Software as Code",
          link: "/services/software-as-code",
          description: "Software development and deployment automation."
        }
      ]
    },
    {
      title: "Enterprise Solutions",
      services: [
        {
          title: "Managed Network",
          link: "/services/managed-network",
          description: "Comprehensive network management solutions (LAN, WAN, SD-WAN)."
        },
        {
          title: "Cybersecurity",
          link: "/services/cybersecurity",
          description: "Security audits, firewall management, and data security strategies."
        },
        {
          title: "Infrastructure Design & Management",
          link: "/services/infrastructure-design",
          description: "Containerization, virtualization, and scalable IT infrastructure solutions."
        },
        {
          title: "IT Remote & Smart Hands Support",
          link: "/services/remote-smart-hands",
          description: "Remote and on-site IT assistance for businesses."
        }
      ]
    },
    {
      title: "IT Consulting Services",
      services: [
        {
          title: "IT Project Management",
          link: "/services/it-project-management",
          description: "End-to-end project lifecycle management for IT implementations."
        },
        {
          title: "Technology Transitions & Transformation",
          link: "/services/technology-transitions",
          description: "Consulting services for upgrading and modernizing IT infrastructures."
        },
        {
          title: "IT Training",
          link: "/services/it-training",
          description: "Customized IT training programs for teams and professionals."
        }
      ]
    }
  ];

  // Featured services for the cards
  const featuredServices = [
    {
      title: "The case for a global IT service desk",
      description: "The help desk function typically makes up less than five percent of a firm's IT spending, but can represent almost 50% of the IT organization's perceived value.",
      link: "/services/global-it",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Revolutionizing Field Service Management",
      description: "The AVASO Field Force Application (FFA) is your ultimate partner for efficient, seamless, and innovative field service management.",
      link: "/services/field-service",
      image: "/api/placeholder/300/200"
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
              <Link className={"nav-link"} style={{ color: getLinkColor('/') }} to="/" onClick={closeNav}>Home</Link>
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
                    {/* Service Categories */}
                    {serviceCategories.map((category, index) => (
                      <div className="col-md-3" key={index}>
                        <h6 className="fw-bold mb-3" style={{ color: '#0a1033' }}>{category.title}</h6>
                        <ul className="list-unstyled">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="mb-3">
                              <Link
                                to={service.link}
                                className="text-decoration-none d-flex align-items-center"
                                style={{ 
                                  color: location.pathname === service.link ? '#00e8ff' : '#333',
                                  padding: '6px 10px',
                                  borderRadius: '4px',
                                  transition: 'all 0.2s ease',
                                  backgroundColor: location.pathname === service.link ? '#f08b0a' : 'transparent'
                                }}
                                onClick={closeNav}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = location.pathname === service.link ? '#f5f5f5' : 'transparent'}
                              >
                                {service.title} <FaChevronRight className="ms-2" size={12} />
                              </Link>
                              <small className="text-muted d-block ps-2" style={{ fontSize: '0.75rem' }}>
                                {service.description}
                              </small>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Featured Service Cards Column */}
                    <div className="col-md-3">
                      {featuredServices.map((featured, index) => (
                        <div className="card border-0 mb-4" key={index}>
                          <img src={featured.image} className="card-img-top" alt={featured.title} />
                          <div className="card-body p-0 pt-3">
                            <h6 className="card-title text-info">{featured.title}</h6>
                            <p className="card-text small text-muted">{featured.description}</p>
                            <Link
                              to={featured.link}
                              className={`text-decoration-none ${location.pathname === featured.link ? 'text-primary' : 'text-info'}`}
                              onClick={closeNav}
                            >
                              Know More <FaChevronRight className="ms-1" size={10} />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            {/* <li className="nav-item">
              <Link className={`nav-link ${getLinkColor('/testimonials')}`} to="/testimonials" onClick={closeNav}>Testimonials</Link>
            </li> */}
            <li className="nav-item">
              <Link className={`nav-link`} style={{ color: getLinkColor('/aboutus')}} to="/aboutus" onClick={closeNav}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link`} style={{ color: getLinkColor('/blogs')}} to="/blogs" onClick={closeNav}>Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link`} style={{ color: getLinkColor('/contact')}} to="/contact" onClick={closeNav}>Contact</Link>
            </li>
            
            {/* Mobile Contact Info */}
            <li className="nav-item d-lg-none mt-3">
              <div className="d-flex align-items-center">
                <div className="bg-info rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
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
                <div className="bg-info rounded-circle p-2 d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                  <FaEnvelope color="white" size={16} />
                </div>
                <div className="ms-2">
                  <p className="mb-0 text-white small">Email us</p>
                  <p className="mb-0 text-white fw-bold">info@gnsolutions.com</p>
                </div>
              </div>
            </li>
          </ul>
          
          {/* Desktop Contact Info - Hidden on mobile */}
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
            
            {/* Email Section */}
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