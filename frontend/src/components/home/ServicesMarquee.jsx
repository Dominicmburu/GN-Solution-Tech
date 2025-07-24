import React from 'react';
import { FaNetworkWired, FaShieldAlt, FaServer, FaProjectDiagram, FaLaptopCode, FaUsersCog, FaCloudUploadAlt, FaSyncAlt, FaHeadset } from 'react-icons/fa';
import '../../assets/css/ServicesMarquee.css';

const ServicesMarquee = () => {
  // Define our services with icons
  const services = [
    { name: 'Network as Code', icon: <FaNetworkWired size={24} style={{color: 'var(--primary-color)'}} /> },
    { name: 'Cybersecurity', icon: <FaShieldAlt size={24} style={{color: 'var(--primary-color)'}} /> },
    { name: 'Infrastructure Design', icon: <FaServer size={24} style={{color: 'var(--primary-color)'}} /> },
    { name: 'IT Project Management', icon: <FaProjectDiagram size={24} style={{color: 'var(--primary-color)'}} /> },
    { name: 'Software as Code', icon: <FaLaptopCode size={24} style={{color: 'var(--primary-color)'}} /> },
    { name: 'IT Training', icon: <FaUsersCog size={24} style={{color: 'var(--primary-color)'}} /> },
    { name: 'Cloud Solutions', icon: <FaCloudUploadAlt size={24} style={{color: 'var(--primary-color)'}} /> },
    { name: 'Technology Transitions', icon: <FaSyncAlt size={24} style={{color: 'var(--primary-color)'}} /> },
    { name: 'IT Support Services', icon: <FaHeadset size={24} style={{color: 'var(--primary-color)'}} /> }
  ];

  // Create duplicate array to ensure smooth infinite scrolling
  const duplicatedServices = [...services, ...services];

  return (
    <section className="services-marquee-section py-4" style={{ backgroundColor: "#f8f9fa", overflow: "hidden" }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedServices.map((service, index) => (
            <div key={index} className="marquee-item">
              <div className="service-icon-box">
                {service.icon}
                <h6 className="mt-2 mb-0" style={{ color: "var(--tt-color)" }}>{service.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;