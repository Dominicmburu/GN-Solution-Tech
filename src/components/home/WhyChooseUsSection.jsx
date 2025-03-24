import React from 'react';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: '/api/placeholder/40/40',
      title: 'Cutting-Edge Protection',
      description: 'The wise man therefore always doing holding these matters to this busines principles sunt offer data technology or system settings to ensure.'
    },
    {
      icon: '/api/placeholder/40/40',
      title: 'Proactive Threat Detection',
      description: 'The wise man therefore always doing holding these matters to this busines principles sunt offer data technology or system settings to ensure.'
    },
    {
      icon: '/api/placeholder/40/40',
      title: 'Tailored Security Solutions',
      description: 'The wise man therefore always doing holding these matters to this busines principles sunt offer data technology or system settings to ensure.'
    },
    {
      icon: '/api/placeholder/40/40',
      title: '24/7 Security Operations',
      description: 'The wise man therefore always doing holding these matters to this busines principles sunt offer data technology or system settings to ensure.'
    }
  ];

  return (
    <section className="why-choose-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <SectionTitle 
              subtitle="Why Choose Us"
              title="Why client choose techtlk over microsoft"
            />
            <p className="text-muted mb-4">It is a long established fact that a reader will be distracted the readable content page when layout the point.</p>
            
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
              <img src="/api/placeholder/540/380" alt="Security Professional" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;