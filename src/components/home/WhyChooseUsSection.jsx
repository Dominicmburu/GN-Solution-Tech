import React, { useState, useEffect } from 'react';
import { FaCogs, FaLock, FaCloud, FaHeadset, FaCheck } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import FeatureCard from './FeatureCard';
import CTASection from './CTASection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';


const WhyChooseUsSection = () => {

  const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

  // Counter component with easing effect
  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const endValue = parseInt(end.replace("+", "")) || parseInt(end);

    useEffect(() => {
      let startTime = null;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
        const easedProgress = easeOutQuad(progress); // Apply easing
        const currentCount = Math.floor(easedProgress * endValue);

        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
    }, [end, duration]);

    return (
      <span>
        {count}
        {end.includes("+") ? "+" : ""}
      </span>
    );
  };

  const features = [
    {
      icon: <FaCogs size={40} color="var(--primary-color)" />,
      title: 'Enterprise-Grade Automation',
      description: 'We provide network-as-code solutions and infrastructure automation to support digital transformation. Our technologies help enterprises streamline operations, improve efficiency, and cut costs by automating complex tasks and workflows.'
    },
    {
      icon: <FaLock size={40} color="var(--primary-color)" />,
      title: 'Full-Stack Security',
      description: 'Our cybersecurity solutions combine threat intelligence, zero-trust architecture, and military-grade encryption to ensure complete security. We protect clients from cyber threats, safeguard data, and maintain IT system integrity through continuous monitoring, vulnerability assessments, and incident response.'
    },
    {
      icon: <FaCloud size={40} color="var(--primary-color)" />,
      title: 'Cloud Infrastructure Expertise',
      description: 'We offer secure cloud migration, containerization, and scalable hybrid cloud architectures for enterprises. Our cloud services enhance agility, scalability, and cost-efficiency. We deliver customized cloud solutions, from planning and implementation to management and optimization.'
    },
    {
      icon: <FaHeadset size={40} color="var(--primary-color)" />,
      title: '24/7 Smart Hands Support',
      description: 'Our European-based technical teams provide 24/7 IT management and emergency response services. We handle routine maintenance and urgent troubleshooting, ensuring your IT systems run smoothly.'
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
              Since 2022, we have established ourselves as a leading provider in Dublin, delivering state-of-the-art business automation and secure infrastructure solutions tailored specifically for European enterprises across diverse industries. Our firm commitment to innovation and excellence has earned us a reputation for transformative IT solutions that drive business success and growth.
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

      <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f5f5f5', padding: '20px', margin: "40px 0", boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '48px', fontWeight: 'bold', margin: '0' }}>
            <Counter end="96" duration={4000} />%
          </h3>
          <p style={{ color: '#333', fontSize: '16px', margin: '5px 0 0' }}>Happy Customers</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '48px', fontWeight: 'bold', margin: '0' }}>
            <Counter end="23" duration={4000} />
          </h3>
          <p style={{ color: '#333', fontSize: '16px', margin: '5px 0 0' }}>Vendors</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '48px', fontWeight: 'bold', margin: '0' }}>
            <Counter end="70" duration={4000} />%
          </h3>
          <p style={{ color: '#333', fontSize: '16px', margin: '5px 0 0' }}>Reach in Europe</p>
        </div>
      </div>

      <CTASection />

      <ServicesSection />

      <TestimonialsSection />
      {/* <BlogSection /> */}
      <ContactSection />

    </section >
  );
};

export default WhyChooseUsSection;