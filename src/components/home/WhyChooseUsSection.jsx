import React from 'react';
import { FaCogs, FaLock, FaCloud, FaHeadset } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FaCogs size={40} color="#00e8ff" />,
      title: 'Enterprise-Grade Automation',
      description: 'Pioneers in network-as-code solutions and infrastructure automation for seamless digital transformation across organizations.'
    },
    {
      icon: <FaLock size={40} color="#00e8ff" />,
      title: 'Full-Stack Security',
      description: 'End-to-end cybersecurity solutions combining threat intelligence, zero-trust architecture, and military-grade encryption protocols.'
    },
    {
      icon: <FaCloud size={40} color="#00e8ff" />,
      title: 'Cloud Infrastructure Expertise',
      description: 'Specialists in secure cloud migration, containerization, and building scalable hybrid cloud architectures for enterprise needs.'
    },
    {
      icon: <FaHeadset size={40} color="#00e8ff" />,
      title: '24/7 Smart Hands Support',
      description: 'Dedicated European-based technical teams providing round-the-clock IT management and emergency response services.'
    }
  ];

  return (
    <section className="why-choose-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <SectionTitle 
              subtitle="Why Choose GN Solutions"
              title="Enterprise IT Transformation Experts"
            />
            <p className="text-muted mb-4">
              As a Dublin-based leader since 2022, we deliver cutting-edge business automation 
              and secure infrastructure solutions tailored for European enterprises across all industries.
            </p>
            
            <div className="row">
              {features.map((feature, index) => (
                <div key={index} className={`col-md-6 ${index < features.length - 2 ? 'mb-4' : index === 2 ? 'mb-4 mb-md-0' : ''}`}>
                  <FeatureCard 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img src="https://i.pinimg.com/736x/b2/4d/9d/b24d9d437384311b327970f16419b749.jpg" alt="IT Infrastructure Management" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;