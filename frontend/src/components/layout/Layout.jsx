import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      <a
        href="https://wa.me/353892785147?text=Hello%20I%27m%20interested%20in%20your%20services%21"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1050, 
          backgroundColor: '#25D366', 
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <FaWhatsapp size={32} />
      </a>

    </>
  );
};

export default Layout;