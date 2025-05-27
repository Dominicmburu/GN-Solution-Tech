import React from 'react';
import ContactForm from './ContactForm';
import '../../assets/css/ContactSection.css';

const ContactSection = () => {
  const locations = [
    {
      city: 'Dublin',
      address: 'GN Solutions HQ,The Oaks, Scholastown Wood, Dublin 16',
      email: 'info@gnsolutions.eu',
      phone: '+353 89 278 5147'
    }
  ];

  return (
    <section className="contact-section " style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-4" style={{ color: "var(--tt-color)" }}>Transform Your IT Infrastructure with Expert Solutions</h2>
            <p className="text-muted mb-5">GN Solutions offers enterprise-grade business automation, cybersecurity, and cloud infrastructure services. Our experienced team provides tailored solutions to meet each client's needs.
Our business automation services enhance productivity by streamlining operations and reducing manual errors with advanced technologies.
In cybersecurity, we protect your business against evolving threats, ensuring data confidentiality, integrity, and availability through assessments, threat monitoring, risk management, and incident response.
For cloud infrastructure, we deliver scalable, secure solutions to optimize your cloud environment or deploy hybrid systems, focusing on performance and cost-effectiveness.
Partner with GN Solutions for your digital transformation and join the many businesses that trust us for innovative technology and exceptional service.</p>
            
            <div className="row">
              {locations.slice(0, 2).map((location, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="location-info-card">
                    <h5 className="mb-3" style={{ color: "#0a1033" }}>{location.city}</h5>
                    <p className="mb-1">{location.address}</p>
                    <p className="mb-1">{location.email}</p>
                    <p className="mb-0">{location.phone}</p>
                  </div>
                </div>
              ))}
              {locations.slice(2, 4).map((location, index) => (
                <div key={index} className="col-md-6">
                  <div className="location-info-card">
                    <h5 className="mb-3" style={{ color: "#0a1033" }}>{location.city}</h5>
                    <p className="mb-1">{location.address}</p>
                    <p className="mb-1">{location.email}</p>
                    <p className="mb-0">{location.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-wrapper p-4 p-lg-5 rounded" style={{ backgroundColor: "var(--tt-color)" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;