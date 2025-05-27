import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaUsers, FaShieldAlt, FaStar, FaHandshake, FaLock, FaRocket, FaChartLine, FaSyncAlt, FaCloud } from 'react-icons/fa';
import CTASection from './CTASection';

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
  const [isHovered, setIsHovered] = useState(false);


  const features = [
    'Business Process Automation',
    'Advanced Cybersecurity',
    'Cloud Migration Expertise',
    'Proactive IT Support'
  ];

  const companyValues = [
    {
      icon: <FaLightbulb style={{ color: "var(--primary-color)" }} size={36} />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and continuously seek innovative solutions to drive business success."
    },
    {
      icon: <FaShieldAlt style={{ color: "var(--primary-color)" }} size={36} />,
      title: "Customer-Centricity",
      description: "Our clients are at the heart of everything we do. We prioritize their needs and work diligently to exceed their expectations."
    },
    {
      icon: <FaCloud style={{ color: "var(--primary-color)" }} size={36} />,
      title: "Integrity",
      description: "We adhere to the highest ethical standards, ensuring transparency, honesty, and trustworthiness in all our engagements."
    },
    {
      icon: <FaChartLine style={{ color: "var(--primary-color)" }} size={36} />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our operations, delivering top-notch services and products that set industry benchmarks."
    },
    {
      icon: <FaSyncAlt style={{ color: "var(--primary-color)" }} size={36} />,
      title: "Resilience",
      description: "We foster resilience by developing robust and scalable solutions that adapt to changing business environments and challenges."
    },
    {
      icon: <FaUsers style={{ color: "var(--primary-color)" }} size={36} />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaboration, leveraging diverse expertise to achieve common goals and drive innovation."
    },
    {
      icon: <FaLock style={{ color: "var(--primary-color)" }} size={36} />,
      title: "Security",
      description: "We prioritize cybersecurity, safeguarding our clients’ digital assets and ensuring their peace of mind in an increasingly complex cyber landscape."
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
                <img src="./images/image2.jpg" alt="Enterprise IT Solutions" className="img-fluid rounded" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">

              <p className="mb-4" style={{ textAlign: 'justify', letterSpacing: "1.5px" }}>
                At GN Solutions, we understand the complexities and demands of today's dynamic business environment. Founded in Ireland in 2022, our mission is to provide businesses with innovative IT and technology solutions that consistently surpass their expectations.
                Our transformation from a break/fix IT service provider to a comprehensive source for Managed IT Services, Cloud Solutions, Cyber Security, and proactive IT support demonstrates our commitment to remaining at the forefront of the digital world. We are experts in enterprise-grade IT infrastructure, utilizing the latest advancements to deliver robust and scalable solutions tailored to our clients’ specific needs.
                Our proficiency in business process automation enables us to streamline operations, reduce manual efforts, and enhance productivity. By implementing state-of-the-art network automation and containerization technologies, we facilitate seamless cloud migration, ensuring that digital assets are secure and readily accessible.
                Cybersecurity is a fundamental aspect of our services. We recognize the critical importance of safeguarding sensitive information and maintaining client trust. Through advanced security measures, we protect against threats and vulnerabilities, providing peace of mind in an increasingly complex cyber landscape.
                At GN Solutions, we bridge the gap between traditional network infrastructure and next-generation automation technologies, delivering solutions that drive efficiency, innovation, and growth. Our dedicated team of experts works diligently to understand the unique challenges faced by each business and to develop strategies that convert those challenges into opportunities.
                Whether enhancing existing systems or deploying new technologies, GN Solutions is committed to empowering organizations to excel in the digital age. Our bespoke solutions are designed to support business objectives, promote resilience, and provide a competitive edge in a rapidly evolving marketplace.
              </p>

            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid">

        {/* Mission & Vision Section with Diagonal Design */}
        <section className="py-5 position-relative" style={{ backgroundColor: "#f8f9fa", overflow: "hidden" }}>
          <div className="diagonal-bg position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(135deg, rgba(6, 26, 138, 0.07) 25%, transparent 25%)" }}></div>
          <div className="container position-relative">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="fw-bold mb-4" style={{ color: "var(--tt-color)" }}>Our Mission & Vision</h2>
                <div className="d-flex justify-content-center mb-4">
                  <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="card mission-vision-card h-100"
                  style={{
                    boxShadow: isHovered
                      ? '0 20px 38px rgba(0,0,0,0.25), 0 15px 12px rgba(0,0,0,0.32)'
                      : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.33)',
                    transition: 'all 0.3s ease-in-out',
                  }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "var(--primary-color)" }}>
                        <i className="fas fa-rocket text-white"></i>
                      </div>
                      <h3 className="fw-bold m-0" style={{ color: "var(--ct-color)" }}>Mission</h3>
                    </div>
                    <p className="card-text">
                      Our mission is to empower businesses with innovative IT solutions that consistently exceed expectations. We strive to streamline operations, enhance productivity, ensure cybersecurity, and transform challenges into opportunities for growth in the digital age.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mission-vision-card h-100"
                  style={{
                    boxShadow: isHovered
                      ? '0 20px 38px rgba(0,0,0,0.25), 0 15px 12px rgba(0,0,0,0.32)'
                      : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.33)',
                    transition: 'all 0.3s ease-in-out',
                  }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "var(--primary-color)" }}>
                        <i className="fas fa-eye text-white"></i>
                      </div>
                      <h3 className="fw-bold m-0" style={{ color: "var(--ct-color)" }}>Vision</h3>
                    </div>
                    <p className="card-text">
                      Our vision is to become a leading IT service provider by bridging traditional and next-generation technologies. We aim to set industry standards with tailored solutions that enhance resilience, efficiency, and innovation, helping organizations succeed in a dynamic market.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="fw-bold mb-3" style={{ color: "var(--tt-color)" }}>Our Core Values</h2>
                <p className="text-muted">The principles that guide our work and relationships</p>
              </div>
            </div>
            <div className="row">
              {companyValues.map((value, index) => (
                <div className="col-md-6 col-lg-4 mb-4" key={index}>
                  <div className="card values-card h-100 text-center"
                    style={{
                      boxShadow: isHovered
                        ? '0 20px 38px rgba(0,0,0,0.25), 0 15px 12px rgba(0,0,0,0.32)'
                        : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.33)',
                      transition: 'all 0.3s ease-in-out',
                    }}>
                    <div className="card-body p-4">
                      <div className="mb-3 card-icon">
                        {value.icon}
                      </div>
                      <h4 className="fw-bold mb-3" style={{ color: "var(--ct-color)" }}>{value.title}</h4>
                      <p className="card-text text-muted">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <CTASection />

    </section >
  );
};

export default AboutSection;