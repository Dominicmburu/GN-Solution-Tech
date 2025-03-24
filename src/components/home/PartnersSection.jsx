import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'pendo', logo: '/api/placeholder/120/40' },
    { name: 'workato', logo: '/api/placeholder/120/40' },
    { name: 'sisense', logo: '/api/placeholder/120/40' },
    { name: 'flutterwave', logo: '/api/placeholder/120/40' },
    { name: 'riskified', logo: '/api/placeholder/120/40' },
  ];

  return (
    <section className="partners-section py-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {partners.map((partner, index) => (
            <div key={index} className="col-md-2 col-6 mb-3 mb-md-0 text-center">
              <img src={partner.logo} alt={partner.name} className="img-fluid" style={{ maxHeight: "30px" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;