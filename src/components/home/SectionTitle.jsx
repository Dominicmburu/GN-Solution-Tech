import { color } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const SectionTitle = ({ subtitle, title, centered = false, light = false }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  const isMobile = windowWidth <= 767;

  return (
    <div className={`section-title ${centered ? 'text-center' : ''} mb-4 w-100`}>
      {subtitle && <p style={{ color: 'var(--primary-color)', fontSize: isMobile ? "16px" : "21px" }} className={`mb-2 ${light ? 'var(--primary-color)' : ''}`}>{subtitle}</p>}
      {typeof title === 'string' ? (
        <h2 className={` fw-bold `}
          style={{ fontSize: isMobile ? "20px" : "30px", color: light ? "#ffffff" : 'var(--tt-color)'} }
        >{title}</h2>
      ) : (
        <h2 className={`mb-4 fw-bold`}
        style={{ fontSize: isMobile ? "20px" : "30px", color: light ? "#ffffff" : 'var(--tt-color)' }}
        >{title}</h2>
      )}
    </div>
  );
};

export default SectionTitle;