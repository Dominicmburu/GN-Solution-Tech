import React from 'react';
import { FaRobot, FaNetworkWired, FaShieldAlt, FaCloud, FaUsersCog, FaCode } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaRobot size={36} />,
      title: 'Business Process Automation',
      features: ['Network as Code', 'Platform as Code', 'Software as Code']
    },
    {
      icon: <FaNetworkWired size={36} />,
      title: 'Enterprise Solutions',
      features: ['SD-WAN Management', 'Containerization', 'Smart Hands Support']
    },
    {
      icon: <FaShieldAlt size={36} />,
      title: 'Cybersecurity Services',
      features: ['Security Audits', 'Firewall Management', 'Data Protection']
    },
    {
      icon: <FaCloud size={36} />,
      title: 'Cloud Infrastructure',
      features: ['Cloud Migration', 'Virtualization', 'Scalable Architecture']
    },
    {
      icon: <FaUsersCog size={36} />,
      title: 'IT Consulting',
      features: ['Digital Transformation', 'Project Management', 'Staff Training'],
      hasCyberGraphic: true
    },
    {
      icon: <FaCode size={36} />,
      title: 'Custom Development',
      features: ['API Integration', 'Workflow Automation', 'Legacy Modernization']
    }
  ];

  return (
    <section className="services-section py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <SectionTitle
          subtitle="Our Services"
          title="Comprehensive IT Solutions for Modern Enterprises"
          centered={true}
          light={false}
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