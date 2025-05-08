import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronRight, FaSearch } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
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
      if (windowWidth < 992 && isServiceMenuOpen) {
        setIsServiceMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isServiceMenuOpen, windowWidth]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (isServiceMenuOpen) setIsServiceMenuOpen(false);
  };

  const toggleServiceMenu = (e) => {
    e.preventDefault();
    setIsServiceMenuOpen(!isServiceMenuOpen);
    if (windowWidth >= 992) {
      navigate('/services');
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeNav = () => {
    if (isNavOpen) setIsNavOpen(false);
    if (isServiceMenuOpen) setIsServiceMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const getLinkColor = (path) => {
    return isActive(path) ? '#f08b0a' : isScrolled ? '#0a1033' : '#0a1033';
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

  // Determine if we're on mobile view
  const isMobile = windowWidth < 992;

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'shadow-sm' : ''}`} 
      style={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.6)' : '#ffffff',
        transition: 'all 0.3s ease',
        backdropFilter: isScrolled ? 'blur(5px)' : 'none',
        zIndex: 1000 
      }}
    >
      <div className="container">
        {/* Logo always at far left */}
        <Link className="navbar-brand me-auto" to="/" onClick={closeNav}>
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
            <FaSearch color={isSearchOpen ? 'white' : '#0a1033'} size={16} />
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
            border: '1px solid #0a1033',
            position: 'relative',
            zIndex: 1100
          }}
        >
          <span className="navbar-toggler-icon" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(10, 16, 51, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
          }}></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
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

            {/* Services Dropdown with Mega Menu */}
            <li className={`nav-item dropdown ${isMobile ? '' : 'position-static'} ${isServiceMenuOpen ? 'show' : ''}`}>
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

              {/* Mega Menu with transparent background */}
              <div
                className={`dropdown-menu ${isMobile ? '' : 'w-100'} border-0 shadow ${isServiceMenuOpen ? 'show' : ''}`}
                style={{
                  position: isMobile ? 'relative' : 'absolute',
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  display: isServiceMenuOpen ? 'block' : 'none',
                  zIndex: 1000,
                  marginTop: isMobile ? '0' : '0',
                  borderRadius: isMobile ? '8px' : '0 0 8px 8px',
                  padding: isMobile ? '10px' : '20px 0',
                  boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                  overflow: isMobile ? 'hidden' : 'visible',
                  maxHeight: isMobile ? '75vh' : 'none',
                  overflowY: isMobile ? 'auto' : 'visible'
                }}
              >
                <div className={isMobile ? '' : 'container'}>
                  <div className={`row ${isMobile ? 'mx-0' : ''}`}>
                    {/* Swapped Order: Enterprise, Business Process, IT Consulting */}
                    {[serviceCategories[1], serviceCategories[0], serviceCategories[2]].map((category, index) => (
                      <div className={`${isMobile ? 'col-12 mb-3' : 'col-md-4'}`} key={index}>
                        <h6 className="fw-bold mb-2" style={{ color: '#0a1033' }}>{category.title}</h6>
                        <ul className="list-unstyled">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="mb-2">
                              <Link
                                to={service.link}
                                className="text-decoration-none d-flex align-items-center service-link"
                                style={{
                                  color: location.pathname === service.link ? '#ffffff' : '#0a1033',
                                  padding: '8px 12px',
                                  borderRadius: '4px',
                                  transition: 'all 0.3s ease',
                                  backgroundColor: location.pathname === service.link ? '#f08b0a' : 'transparent',
                                  fontSize: '0.95rem'
                                }}
                                onClick={closeNav}
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
            <li className="nav-item">
              <Link 
                className="nav-link" 
                style={{ 
                  color: getLinkColor('/contact'),
                  fontWeight: isActive('/contact') ? 'bold' : 'normal',
                  padding: '10px 15px'
                }} 
                to="/contact" 
                onClick={closeNav}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Icon and Search Bar - visible only on desktop */}
          <div className="d-none d-lg-flex align-items-center position-relative">
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
              <FaSearch color={isSearchOpen ? 'white' : '#0a1033'} size={16} />
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

      {/* Overlay for service menu and searching - desktop only */}
      {(isServiceMenuOpen || isSearchOpen) && !isMobile && (
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
          onClick={() => {
            setIsServiceMenuOpen(false);
            setIsSearchOpen(false);
          }}
        />
      )}

      {/* Add CSS for hover effects and responsiveness */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .service-link:hover {
          background-color: rgba(245, 245, 245, 0.7) !important;
          transform: translateX(5px);
        }
        
        .nav-link:hover {
          color: #f08b0a !important;
        }
        
        .navbar-nav .nav-link {
          position: relative;
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
            border-bottom: 1px solid rgba(10, 16, 51, 0.1);
          }
          
          .navbar-nav .nav-item:last-child {
            border-bottom: none;
          }
          
          .dropdown-menu {
            margin-left: 10px !important;
            box-shadow: none !important;
            background-color: rgba(245, 245, 245, 0.5) !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;