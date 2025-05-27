import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCheck, FaPhone, FaLightbulb, FaUsers, FaShieldAlt, FaStar, FaHandshake, FaLock, FaRocket } from 'react-icons/fa';

// Easing function: easeOutQuad
const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

// Counter component with easing effect
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const endValue = parseInt(end.replace('+', '')) || parseInt(end); // Handle "200+" by removing '+' and parsing

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

  return <span>{count}{end.includes('+') ? '+' : ''}%</span>;
};

const SectionTitle = ({ subtitle, title }) => (
  <div className="mb-4">
    <h6 className="text-uppercase fw-bold mb-2" style={{ color: 'var(--primary-color)', fontSize: '0.875rem' }}>
      {subtitle}
    </h6>
    <h2 className="display-6 fw-bold mb-3">{title}</h2>
  </div>
);

const AboutSection = () => {
  const features = [
    'Business Process Automation',
    'Advanced Cybersecurity',
    'Cloud Migration Expertise',
    'Proactive IT Support'
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and continuously seek innovative solutions to drive business success.'
    },
    {
      icon: FaUsers,
      title: 'Customer-Centricity',
      description: 'Our clients are at the heart of everything we do. We prioritize their needs and work diligently to exceed their expectations.'
    },
    {
      icon: FaShieldAlt,
      title: 'Integrity',
      description: 'We adhere to the highest ethical standards, ensuring transparency, honesty, and trustworthiness in all our engagements.'
    },
    {
      icon: FaStar,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our operations, delivering top-notch services that set industry benchmarks.'
    },
    {
      icon: FaRocket,
      title: 'Resilience',
      description: 'We foster resilience by developing robust and scalable solutions that adapt to changing business environments.'
    },
    {
      icon: FaHandshake,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, leveraging diverse expertise to achieve common goals and drive innovation.'
    }
  ];

  return (
    <section className="about-section py-5">
      <div className="container">
        {/* Main About Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <div className="p-2 rounded" style={{ maxWidth: "550px", borderColor: 'var(--primary-color)', border: '2px solid var(--primary-color)' }}>
                <img src="https://i.pinimg.com/736x/e0/f7/fb/e0f7fb66f4961d539e8b6d0ce2a883b3.jpg" alt="Enterprise IT Solutions" className="img-fluid rounded" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <SectionTitle 
                subtitle="About GN Solutions"
                title={<span style={{ color: 'var(--tt-color)' }}>Empowering Businesses with Innovative IT Solutions</span>}
              />
              <p className="text-muted mb-4">
                At GN Solutions, we understand the complexities and demands of today's dynamic business environment. 
                Founded in Ireland in 2022, our mission is to provide businesses with innovative IT and technology 
                solutions that consistently surpass their expectations.
              </p>
              <p className="text-muted mb-4">
                Our transformation from a break/fix IT service provider to a comprehensive source for Managed IT Services, 
                Cloud Solutions, Cybersecurity, and proactive IT support demonstrates our commitment to remaining at the 
                forefront of the digital world. We are experts in enterprise-grade IT infrastructure, utilizing the 
                latest advancements to deliver robust and scalable solutions tailored to our clients' specific needs.
              </p>
              
              <div className="row mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="me-2" style={{color: 'var(--primary-color)'}}><FaCheck /></div>
                      <p className="mb-0">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="row mb-4">
                <div className="col-6">
                  <h3 style={{color: 'var(--tt-color)'}} className="mb-0 display-5 fw-bold"><Counter end="95" duration={4000} /></h3>
                  <p className="mb-0">Client Satisfaction Rate</p>
                </div>
                <div className="col-6">
                  <h3 style={{color: 'var(--tt-color)'}} className="mb-0 display-5 fw-bold"><Counter end="200+" duration={4000} /></h3>
                  <p className="mb-0">Businesses Empowered</p>
                </div>
              </div> 
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="row mb-5">
          <div className="col-lg-6 mb-4">
            <div 
              className="h-100 p-4 rounded transition-all" 
              style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid rgba(var(--primary-color-rgb), 0.2)', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <div 
                  className="me-3 p-2 rounded-circle" 
                  style={{ 
                    backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', 
                    color: 'var(--primary-color)',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaLightbulb size={24} />
                </div>
                <h4 className="mb-0 fw-bold" style={{ color: 'var(--tt-color)', fontSize: '1.5rem' }}>Our Mission</h4>
              </div>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Our mission is to empower businesses with innovative IT solutions that consistently exceed expectations. 
                We strive to streamline operations, enhance productivity, ensure cybersecurity, and transform challenges 
                into opportunities for growth in the digital age.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div 
              className="h-100 p-4 rounded transition-all" 
              style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid rgba(var(--primary-color-rgb), 0.2)', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <div 
                  className="me-3 p-2 rounded-circle" 
                  style={{ 
                    backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', 
                    color: 'var(--primary-color)',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaRocket size={24} />
                </div>
                <h4 className="mb-0 fw-bold" style={{ color: 'var(--tt-color)', fontSize: '1.5rem' }}>Our Vision</h4>
              </div>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Our vision is to become a leading IT service provider by bridging traditional and next-generation technologies. 
                We aim to set industry standards with tailored solutions that enhance resilience, efficiency, and innovation, 
                helping organizations succeed in a dynamic market.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="row">
          <div className="col-12 mb-4">
            <SectionTitle 
              subtitle="Our Core Values"
              title={<span style={{ color: 'var(--tt-color)' }}>What Drives Us Forward</span>}
            />
          </div>
        </div>
        
        <div className="row">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div 
                  className="h-100 p-4 rounded transition-all" 
                  style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid rgba(var(--primary-color-rgb), 0.15)',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.08)';
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3 p-2 rounded-circle" 
                      style={{ 
                        backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', 
                        color: 'var(--primary-color)',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <h5 className="mb-0 fw-bold" style={{ color: 'var(--tt-color)', fontSize: '1.25rem' }}>{value.title}</h5>
                  </div>
                  <p className="text-muted mb-0 small" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Content Section with Image */}
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <div className="p-3 rounded shadow-sm" style={{ 
                background: 'linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.1) 0%, rgba(var(--primary-color-rgb), 0.05) 100%)',
                border: '2px solid var(--primary-color)',
                maxWidth: "550px"
              }}>
                <img 
                  src="/src/assets/Homepage3.jpg" 
                  alt="GN Solutions Technology Bridge" 
                  className="img-fluid rounded"
                  style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                />
              </div>
              {/* Decorative elements */}
              <div className="position-absolute" style={{
                top: '-10px',
                right: '-10px',
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--primary-color)',
                borderRadius: '50%',
                opacity: '0.1',
                zIndex: '-1'
              }}></div>
              <div className="position-absolute" style={{
                bottom: '-15px',
                left: '-15px',
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--primary-color)',
                borderRadius: '50%',
                opacity: '0.05',
                zIndex: '-1'
              }}></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h3 className="fw-bold mb-4" style={{ color: 'var(--tt-color)' }}>
                Bridging Traditional and Next-Generation Technologies
              </h3>
              <p className="text-muted mb-4 lead">
                At GN Solutions, we bridge the gap between traditional network infrastructure and next-generation 
                automation technologies, delivering solutions that drive efficiency, innovation, and growth.
              </p>
              <p className="text-muted mb-4">
                Whether enhancing existing systems or deploying new technologies, we are committed to empowering 
                organizations to excel in the digital age. Our bespoke solutions are designed to support business 
                objectives, promote resilience, and provide a competitive edge in a rapidly evolving marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;