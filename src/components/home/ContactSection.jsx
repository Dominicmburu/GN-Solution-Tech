import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const locations = [
    {
      city: 'Dublin',
      address: 'GN Solutions HQ,The Oaks, Scholastown Wood, Dublin 16',
      email: 'info@gnsolutions.eu',
      phone: '+ 353 (0) 874 896 800'
    }
  ];

  return (
    <section className="contact-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-4" style={{ color: "#0a1033" }}>Transform Your IT Infrastructure with Expert Solutions</h2>
            <p className="text-muted mb-5">GN Solutions specializes in enterprise-grade business automation, cybersecurity, and cloud infrastructure services. Let us help you secure and optimize your digital transformation journey.</p>
            
            <div className="row">
              {locations.slice(0, 2).map((location, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <h5 className="mb-3" style={{ color: "#0a1033" }}>{location.city}</h5>
                  <p className="mb-1">{location.address}</p>
                  <p className="mb-1">{location.email}</p>
                  <p className="mb-0">{location.phone}</p>
                </div>
              ))}
              {locations.slice(2, 4).map((location, index) => (
                <div key={index} className="col-md-6">
                  <h5 className="mb-3" style={{ color: "#0a1033" }}>{location.city}</h5>
                  <p className="mb-1">{location.address}</p>
                  <p className="mb-1">{location.email}</p>
                  <p className="mb-0">{location.phone}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-wrapper p-4 rounded" style={{ backgroundColor: "#0a1033" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;