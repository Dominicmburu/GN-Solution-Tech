import React from 'react';
import { FaShieldAlt, FaGlobe, FaMobile, FaLock, FaUserShield, FaCloud, FaCheck } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaShieldAlt size={36} />,
      title: 'Threat Detection & Prevention',
      features: ['Website Development', 'App Development', 'UI/UX Design']
    },
    {
      icon: <FaGlobe size={36} />,
      title: 'Network Infrastructure Security',
      features: ['Website Development', 'App Development', 'UI/UX Design']
    },
    {
      icon: <FaMobile size={36} />,
      title: 'Endpoint & Device Security',
      features: ['Website Development', 'App Development', 'UI/UX Design']
    },
    {
      icon: <FaLock size={36} />,
      title: 'Data Protection & Privacy',
      features: ['Website Development', 'App Development', 'UI/UX Design']
    },
    {
      icon: <FaUserShield size={36} />,
      title: 'Identity & Access Management',
      features: ['Website Development', 'App Development', 'UI/UX Design'],
      hasCyberGraphic: true
    },
    {
      icon: <FaCloud size={36} />,
      title: 'Cloud Security Services',
      features: ['Website Development', 'App Development', 'UI/UX Design']
    }
  ];

  return (
    <section className="services-section py-5" style={{ backgroundColor: "#0a1033" }}>
      <div className="container">
        <SectionTitle 
          subtitle="Our Services"
          title="We help you transform IT and security"
          centered={true}
          light={true}
        />
        
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                features={service.features}
                hasCyberGraphic={service.hasCyberGraphic}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;