import React from 'react';

const SectionTitle = ({ subtitle, title, centered = false, light = false }) => {
  return (
    <div className={`section-title ${centered ? 'text-center' : ''} mb-4`}>
      {subtitle && <p style={{color: 'var(--primary-color)'}} className={`mb-2 ${light ? 'text-info' : ''}`}>{subtitle}</p>}
      {typeof title === 'string' ? (
        <h2 className={`mb-4 fw-bold ${light ? 'text-white' : 'text-dark'}`}>{title}</h2>
      ) : (
        <h2 className={`mb-4 fw-bold ${light ? 'text-white' : 'text-dark'}`}>{title}</h2>
      )}
    </div>
  );
};

export default SectionTitle;