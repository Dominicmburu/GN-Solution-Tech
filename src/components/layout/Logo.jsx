import React from 'react';

const Logo = () => {
  return (
    <div className="d-flex align-items-center">
      <div style={{ 
        width: "40px", 
        height: "40px", 
        backgroundColor: "#00e8ff", 
        borderRadius: "8px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        marginRight: "5px" 
      }}>
        <span style={{ fontSize: "24px", color: "#0a1033", fontWeight: "bold" }}>+</span>
      </div>
      <span className="ms-1 fw-bold" style={{ fontSize: "24px", color: "#fff" }}>Techtlk</span>
    </div>
  );
};

export default Logo;