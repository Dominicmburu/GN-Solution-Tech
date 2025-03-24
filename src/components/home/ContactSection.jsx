import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const locations = [
    {
      city: 'New York',
      address: '37485 William River Road 272172',
      email: 'company@example.com',
      phone: '888 999 0002'
    },
    {
      city: 'Texas',
      address: '206 Mail Parking Nuages 14529',
      email: 'company@example.com',
      phone: '888 999 0004'
    },
    {
      city: 'California',
      address: 'Richardson California 62639',
      email: 'company@example.com',
      phone: '888 999 0005'
    },
    {
      city: 'Los Angeles',
      address: '2464 Royal New Jersey 45463',
      email: 'company@example.com',
      phone: '888 999 0008'
    }
  ];

  return (
    <section className="contact-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-4" style={{ color: "#0a1033" }}>Let's build a safer digital world together your security</h2>
            <p className="text-muted mb-5">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut finibus nisl mi, sed venenatis lectus into congue at semper tellus consectetur</p>
            
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