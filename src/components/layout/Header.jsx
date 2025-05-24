import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronRight, FaSearch } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close menu on resize to prevent layout issues
      if (windowWidth < 992) {
        if (isServiceMenuOpen) setIsServiceMenuOpen(false);
        if (isProductMenuOpen) setIsProductMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isServiceMenuOpen, isProductMenuOpen, windowWidth]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (isServiceMenuOpen) setIsServiceMenuOpen(false);
    if (isProductMenuOpen) setIsProductMenuOpen(false);
  };

  const toggleServiceMenu = (e) => {
    // Only prevent default on mobile devices
    if (windowWidth < 992) {
      e.preventDefault();
      setIsServiceMenuOpen(!isServiceMenuOpen);
      if (isProductMenuOpen) setIsProductMenuOpen(false);
    }
    if (windowWidth >= 992) {
      navigate('/services');
    }
  };

  const toggleProductMenu = (e) => {
    // Only prevent default on mobile devices
    if (windowWidth < 992) {
      e.preventDefault();
      setIsProductMenuOpen(!isProductMenuOpen);
      if (isServiceMenuOpen) setIsServiceMenuOpen(false);
    }
    if (windowWidth >= 992) {
      navigate('/products');
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeNav = () => {
    if (isNavOpen) setIsNavOpen(false);
    if (isServiceMenuOpen) setIsServiceMenuOpen(false);
    if (isProductMenuOpen) setIsProductMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const getLinkColor = (path) => {
    return isActive(path) ? '#f08b0a' : isScrolled ? 'var(--tt-color)' : 'var(--tt-color)';
  };

  // Product items to display in the Products section
  const products = [
    {
      title: "Cloud Solutions",
      link: "/products/cloud-solutions"
    },
    {
      title: "Network Hardware",
      link: "/products/network-hardware"
    },
    {
      title: "Security Appliances",
      link: "/products/security-appliances"
    },
    {
      title: "Enterprise Software",
      link: "/products/enterprise-software"
    }
  ];

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
          title: "IT Help Desk Support",
          link: "/services/it-help-desk-support"
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

  // Determine if we're on mobile view
  const isMobile = windowWidth < 992;
  const isLaptop = windowWidth < 1200;
  const isBigLaptop = windowWidth > 1400;

  return (
    <nav
      id='header-nav'
      className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'shadow-sm' : ''}`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : '#ffffff',
        transition: 'all 0.3s ease',
        backdropFilter: isScrolled ? 'blur(5px)' : 'none',
        zIndex: 1000,
        width: '100%'
      }}
    >
      <div className="container-fluid px-3 px-lg-5">
        {/* Logo always at far left */}
        <Link className="navbar-brand" to="/" onClick={closeNav} style={{ marginRight: 'auto', paddingLeft: isMobile ? '0' : isLaptop ? '5rem' : isBigLaptop ? '7rem' : '2.2rem' }}>
          <Logo />
        </Link>

        {/* Search button for mobile, BEFORE the collapsed menu toggle */}
        <div className="d-lg-none d-flex">
          <button
            className="btn p-2 me-2"
            onClick={toggleSearch}
            style={{
              backgroundColor: isSearchOpen ? '#f08b0a' : 'transparent',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              border: 'none',
              position: 'relative',
              zIndex: 1100
            }}
          >
            <FaSearch color={isSearchOpen ? 'white' : 'var(--tt-color)'} size={16} />
          </button>
        </div>

        {/* Toggle button for mobile navigation */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          style={{
            border: '1px solid var(--tt-color)',
            position: 'relative',
            zIndex: 1100
          }}
        >
          <span className="navbar-toggler-icon" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(89, 64, 153, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
          }}></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ marginRight: isMobile ? '0' : isLaptop ? '2rem' : '1rem' }}>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{
                  color: getLinkColor('/'),
                  fontWeight: isActive('/') ? 'bold' : 'normal',
                  padding: '10px 15px'
                }}
                to="/"
                onClick={closeNav}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown with Hover Menu */}
            <li 
              className={`nav-item dropdown ${isMobile ? '' : 'dropdown-hover'} ${isServiceMenuOpen ? 'show' : ''}`}
              onMouseEnter={() => isMobile ? null : setIsServiceMenuOpen(true)}
              onMouseLeave={() => isMobile ? null : setIsServiceMenuOpen(false)}
            >
              <a
                className={`nav-link d-flex align-items-center ${isActive('/services') ? 'fw-bold' : ''}`}
                href="#"
                onClick={toggleServiceMenu}
                style={{
                  color: getLinkColor('/services'),
                  padding: '10px 15px'
                }}
              >
                Services <FaChevronDown className="ms-1" size={12} />
              </a>

              {/* CommSec-Inspired Mega Menu */}
              <div
                className={`dropdown-menu ${isMobile ? '' : 'mega-menu border-0'} ${isServiceMenuOpen ? 'show' : ''}`}
                style={{
                  position: isMobile ? 'relative' : 'absolute',
                  left: isMobile ? 0 : '50%',
                  transform: isMobile ? 'none' : 'translateX(-50%)',
                  width: isMobile ? 'auto' : '1000px',
                  maxWidth: isMobile ? 'none' : '90vw',
                  backgroundColor: 'white',
                  display: isServiceMenuOpen ? 'block' : 'none',
                  zIndex: 1000,
                  marginTop: isMobile ? '0' : '-1px',
                  top: isMobile ? 'auto' : 'calc(100% - 1px)',
                  padding: '0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  overflow: isMobile ? 'hidden' : 'visible',
                  maxHeight: isMobile ? '75vh' : 'none',
                  overflowY: isMobile ? 'auto' : 'visible',
                  borderTop: '3px solid var(--tt-color)',
                  borderRadius: '0 0 8px 8px'
                }}
              >
                <div className={`container-fluid ${isMobile ? 'px-0' : 'px-3'}`}>
                  <div className="row g-0">
                    {/* Service Categories */}
                    <div className="col-12">
                      <div className="row g-0">
                        {/* Swapped Order: Enterprise, Business Process, IT Consulting */}
                        {[serviceCategories[1], serviceCategories[0], serviceCategories[2]].map((category, categoryIndex) => (
                          <div
                            key={categoryIndex}
                            className={`col-md-4 ${isMobile ? '' : ''}`}
                            style={{
                              backgroundColor: isMobile ? 'white' : categoryIndex % 2 === 0 ? '#f8f9fa' : 'white'
                            }}
                          >
                            <div className="py-3 px-4">
                              <h6
                                className="fw-bold"
                                style={{
                                  color: 'var(--tt-color)',
                                  fontSize: '1rem',
                                  marginBottom: '15px'
                                }}
                              >
                                {category.title}
                              </h6>
                              <ul className="list-unstyled mb-0">
                                {category.services.map((service, serviceIndex) => (
                                  <li key={serviceIndex} className="mb-2">
                                    <Link
                                      to={service.link}
                                      className="text-decoration-none d-flex align-items-center service-link "
                                      style={{
                                        color: location.pathname === service.link ? '#f08b0a' : '#333',
                                        padding: '8px 0',
                                        letterSpacing: '1.5px',
                                        borderRadius: '0',
                                        transition: 'all 0.2s ease',
                                        fontSize: '0.9rem',
                                        borderLeft: location.pathname === service.link ? '3px solid #f08b0a' : '3px solid transparent',
                                        paddingLeft: '10px'
                                      }}
                                      onClick={closeNav}
                                    >
                                      {service.title}
                                      <FaChevronRight className="ms-2" size={10} style={{ color: '#f08b0a' }} />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* New Products Section */}
            <li 
              className={`nav-item dropdown ${isMobile ? '' : 'dropdown-hover'} ${isProductMenuOpen ? 'show' : ''}`}
              onMouseEnter={() => isMobile ? null : setIsProductMenuOpen(true)}
              onMouseLeave={() => isMobile ? null : setIsProductMenuOpen(false)}
            >
              <a
                className={`nav-link d-flex align-items-center ${isActive('/products') ? 'fw-bold' : ''}`}
                href="#"
                onClick={toggleProductMenu}
                style={{
                  color: getLinkColor('/products'),
                  padding: '10px 15px'
                }}
              >
                Products <FaChevronDown className="ms-1" size={12} />
              </a>

              {/* Products Dropdown */}
              <div
                className="dropdown-menu"
                style={{
                  display: isProductMenuOpen ? 'block' : 'none',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  borderTop: '3px solid var(--tt-color)',
                  borderRadius: '0 0 8px 8px',
                  padding: '15px',
                  minWidth: '200px'
                }}
              >
                {products.map((product, index) => (
                  <Link
                    key={index}
                    to={product.link}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      color: location.pathname === product.link ? '#f08b0a' : '#333',
                      padding: '10px 15px',
                      transition: 'all 0.2s ease',
                      borderLeft: location.pathname === product.link ? '3px solid #f08b0a' : '3px solid transparent',
                    }}
                    onClick={closeNav}
                  >
                    {product.title}
                    <FaChevronRight className="ms-2" size={10} style={{ color: '#f08b0a' }} />
                  </Link>
                ))}
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={{
                  color: getLinkColor('/aboutus'),
                  fontWeight: isActive('/aboutus') ? 'bold' : 'normal',
                  padding: '10px 15px'
                }}
                to="/aboutus"
                onClick={closeNav}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{
                  color: getLinkColor('/blogs'),
                  fontWeight: isActive('/blogs') ? 'bold' : 'normal',
                  padding: '10px 15px'
                }}
                to="/blogs"
                onClick={closeNav}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: '0' }}>
              <Link
                className="nav-link"
                style={{
                  color: getLinkColor('/contact'),
                  fontWeight: isActive('/contact') ? 'bold' : 'normal',
                  padding: '10px 15px',
                  paddingRight: isMobile ? '15px' : '0'
                }}
                to="/contact"
                onClick={closeNav}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Icon and Search Bar - visible only on desktop, now placed after navigation links */}
          <div className="d-none d-lg-flex align-items-center position-relative ms-3">
            <button
              className="btn p-2"
              onClick={toggleSearch}
              style={{
                backgroundColor: isSearchOpen ? '#f08b0a' : 'transparent',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                border: 'none'
              }}
            >
              <FaSearch color={isSearchOpen ? 'white' : 'var(--tt-color)'} size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Search dropdown - can appear on mobile or desktop */}
      {isSearchOpen && (
        <div className="position-absolute search-container bg-white shadow-sm" style={{
          top: isMobile ? '60px' : '70px',
          right: isMobile ? '0' : '10px',
          left: isMobile ? '0' : 'auto',
          width: isMobile ? 'auto' : '300px',
          margin: isMobile ? '0 15px' : '0',
          padding: '15px',
          borderRadius: '8px',
          zIndex: 1100,
          animation: 'fadeIn 0.3s ease-in-out'
        }}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '4px 0 0 4px'
              }}
            />
            <button
              className="btn"
              type="button"
              style={{
                backgroundColor: '#f08b0a',
                color: 'white',
                borderRadius: '0 4px 4px 0'
              }}
            >
              <FaSearch size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Add CSS for hover effects and responsiveness */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .service-link:hover {
          color: #f08b0a !important;
          background-color: rgba(245, 245, 245, 0.7) !important;
          border-left: 3px solid #f08b0a !important;
          transform: translateX(3px);
        }
        
        .nav-link:hover {
          color: #f08b0a !important;
        }
        
        .navbar-nav .nav-link {
          position: relative;
          margin: 0 5px;
        }
        
        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #f08b0a;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .navbar-nav .nav-link:hover::after {
          width: 70%;
        }
        
        /* Search button hover effect */
        .btn:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        /* CommSec Inspired Mega Menu */
        .mega-menu {
          border-top: 1px solid #eee !important;
        }
        
        /* Fix for dropdown menus */
        .dropdown-hover .dropdown-menu {
          /* Key CSS to ensure smooth transitions between dropdown menus */
          transition: opacity 0.15s ease-in-out;
        }
        
        /* Dropdown menus need to be statically positioned for proper hovering */
        .dropdown-menu {
          transition: all 0.3s ease;
        }
        
        /* Products dropdown hover effect */
        .dropdown-item:hover {
          color: #f08b0a !important;
          background-color: rgba(245, 245, 245, 0.7) !important;
          border-left: 3px solid #f08b0a !important;
          transform: translateX(3px);
        }
        
        /* Mobile menu adjustments */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background-color: rgba(255, 255, 255, 0.98);
            border-radius: 0 0 10px 10px;
            padding: 10px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          }
          
          .nav-link::after {
            display: none;
          }
          
          .navbar-nav .nav-item {
            border-bottom: 1px solid rgba(89, 64, 153, 0.1);
          }
          
          .navbar-nav .nav-item:last-child {
            border-bottom: none;
          }
          
          .dropdown-menu {
            margin-left: 10px !important;
            box-shadow: none !important;
            background-color: rgba(245, 245, 245, 0.5) !important;
            /* Override desktop transition for mobile */
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            transition: none !important;
          }
          
          /* Ensure dropdown menus appear/disappear properly on mobile */
          .dropdown-menu.show {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;