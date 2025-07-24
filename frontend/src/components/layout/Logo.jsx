import React from 'react';
import '../../assets/css/logo.css';

// ../../../public
const Logo = () => {
  return (
    <div id='logo' className="logo d-flex align-items-center">
      <img 
        src="/images/logo.png" 
        alt="Logo" 
        className="logo-img"
      />

    </div>
  );
};

export default Logo;
