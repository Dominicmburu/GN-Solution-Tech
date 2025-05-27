import React from 'react';
import { FaCogs, FaLock, FaCloud, FaHeadset } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FaCogs size={40} color="var(--primary-color)" />,
      title: 'Enterprise-Grade Automation',
      description: 'Streamline operations and reduce costs with network-as-code solutions and infrastructure automation tailored for seamless digital transformation.'
    },
    {
      icon: <FaLock size={40} color="var(--primary-color)" />,
      title: 'Full-Stack Security',
      description: 'Protect your business with threat intelligence, zero-trust architecture, military-grade encryption, and continuous monitoring for robust cybersecurity.'
    },
    {
      icon: <FaCloud size={40} color="var(--primary-color)" />,
      title: 'Cloud Infrastructure Expertise',
      description: 'Enhance agility with secure cloud migration, containerization, and scalable hybrid cloud architectures customized for enterprise performance.'
    },
    {
      icon: <FaHeadset size={40} color="var(--primary-color)" />,
      title: '24/7 Smart Hands Support',
      description: 'Rely on our European-based teams for round-the-clock IT management, routine maintenance, and rapid emergency response services.'
    }
  ];

  return (
    <section className="why-choose-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <img src="https://i.pinimg.com/736x/b2/4d/9d/b24d9d437384311b327970f16419b749.jpg" alt="IT Infrastructure Management" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-lg-6">
            <SectionTitle 
              subtitle="Why Choose Us"
              title={<span style={{ color: 'var(--tt-color)' }}>Driving Enterprise Success Through IT Innovation</span>}
            />
            <p className="text-muted mb-4">
              Since 2022, GN Solutions, headquartered in Dublin, has been a trusted leader in delivering 
              state-of-the-art business automation, cybersecurity, and cloud infrastructure solutions. 
              We empower European enterprises to achieve operational excellence, secure digital assets, 
              and optimize cloud environments with innovative, tailored technologies.
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
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;