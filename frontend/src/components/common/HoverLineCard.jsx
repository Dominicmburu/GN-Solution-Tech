import React, { useState } from 'react';

const HoverLineCard = ({ children, className = '', style: customStyle = {} }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${className}`}
      style={customStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-body">
        {children}
      </div>
      <div
        className="position-absolute bottom-0 start-0 w-100 transition-all duration-300"
        style={{
          height: '4px',
          background: isHovered
            ? 'linear-gradient(to right, yellow, purple, white)'
            : '#e9ecef',
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
};

export default HoverLineCard;