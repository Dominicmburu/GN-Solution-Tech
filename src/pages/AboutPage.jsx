import React, { useState } from 'react';
import { FaChartLine, FaLightbulb, FaShieldAlt, FaSyncAlt, FaNetworkWired, FaCloud, FaUsers, FaGlobe, FaCoins, FaLock } from 'react-icons/fa';
import PageBanner from '../components/common/PageBanner';
// import TeamMember from '../components/about/TeamMember';
import '../assets/css/AboutPage.css';
import UniqueFonderSection from '../components/about/UniqueFonderSection';

const AboutPage = () => {
  const [isHovered, setIsHovered] = useState(false);

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

  // Team members data
  const teamMembers = [
    {
      name: "George Chege Njeru",
      position: "Founder & CEO",
      image: "/images/george-profile.jpg", // Replace with actual image path
      description: "With over 17 years in telecommunications and network infrastructure, George founded GN Solutions to help enterprises modernize their IT operations through automation, security, and optimization.",
      linkedin: "https://www.linkedin.com/in/georgenjeru/",
      certifications: ["JNCIA-DevOps", "Cisco DevOps", "CCNP", "Prince 2", "ITIL Foundation"]
    }
  ];

  // Timeline milestones
  const milestones = [
    {
      year: "2024",
      title: "Foundation",
      description: "GN Solutions was established in Dublin, Ireland with a mission to modernize enterprise IT infrastructure through automation and security."
    },
    {
      year: "2023",
      title: "Network Automation Experience",
      description: "Successfully managed network automation projects in COMCAST and Magnet Ireland, reducing operational costs by over €1M."
    },
    {
      year: "2022",
      title: "Global Network Management",
      description: "Led the design and implementation of network solutions across 148 global sites at Aptiv, including major segmentation and security upgrades."
    },
    {
      year: "2020",
      title: "DevOps Leadership",
      description: "Led a team of 12 DevOps engineers at AWS, establishing processes for code promotion and automation lifecycle management."
    }
  ];

  // Experience highlights
  const experienceHighlights = [
    {
      title: "Network Operations Leadership",
      description: "Managed teams of 8-27 technical engineers across global operations, ensuring 99.95% SLA adherence.",
      icon: <FaUsers />
    },
    {
      title: "Global Infrastructure Management",
      description: "Designed and maintained networks spanning 50+ countries across multiple continents.",
      icon: <FaGlobe />
    },
    {
      title: "Cost Optimization",
      description: "Implemented network optimization projects saving over €1M in operational expenses.",
      icon: <FaCoins />
    },
    {
      title: "Technical Excellence",
      description: "Expert in MPLS VPN, Data Centers, Routing Protocols, Network Security, and Automation.",
      icon: <FaShieldAlt />
    }
  ];

  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Enterprise Network Solutions Through Automation & Security"
        backgroundImage={"https://i.pinimg.com/736x/51/36/92/513692dfc6f23721327d26b040922275.jpg"}
        background="#0a1033"
        currentpage="About Us"
      />

      {/* Company Story Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative">
                <img
                  src="https://i.pinimg.com/736x/d1/c6/f4/d1c6f4df8380dbbfd15270de804bc882.jpg"
                  alt="GN Solutions Office"
                  className="img-fluid rounded shadow"
                  style={{ borderRadius: '12px', transform: 'rotate(-2deg)' }}
                />
                <div
                  className="circle-founder-intro position-absolute text-white rounded-circle shadow-lg d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  <div className="text-center">
                    <h4 className="mb-0 fw-bold">2024</h4>
                    <small>Founded</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="mb-4">
                <span className="badge text-white p-2 mb-3" style={{ backgroundColor: 'var(--primary-color)' }}>Our Journey</span>
                <h2 className="fw-bold display-5 mb-4" style={{ color: 'var(--tt-color)' }}>
                  Our Story
                </h2>
              </div>
              <p className="lead mb-4" style={{ color: '#455880' }}>
                Founded by George Chege Njeru in Dublin, Ireland, GN Solutions was created to bridge the gap between traditional network infrastructure and next-generation automation technologies.
              </p>
              <p className="mb-4" style={{ color: '#455880' }}>
                With over 17 years of experience in telecommunications and managing networks across 50+ countries, George identified a critical need: enterprises were struggling to modernize their IT infrastructure while maintaining security and operational efficiency.
              </p>
              <p style={{ color: '#455880' }}>
                Drawing from leadership roles at Vodafone, COMCAST, Magnet, Aptiv, and Amazon Web Services, GN Solutions combines deep technical expertise with proven operational excellence to deliver transformative network solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Growth Timeline Section */}
      <section className="py-5" style={{ backgroundColor: "var(--tt-color)" }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4" style={{ color: "#fff" }}>Our Professional Journey</h2>
              <div className="d-flex justify-content-center mb-4">
                <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
              </div>
            </div>
          </div>

          <div className="timeline position-relative">
            {/* Timeline center line */}
            <div className="growth-timeline position-absolute"></div>

            {milestones.map((milestone, index) => (
              <div className={`row about-timeline-item mb-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={index}>
                <div className="col-md-6">
                  <div className={`timeline-content p-4 rounded-3 floating-card ${index % 2 === 0 ? 'ms-auto me-4' : 'me-auto ms-4'}`}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="text-white rounded-circle p-2 me-3 fw-bold" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--primary-color)" }}>
                        {milestone.year}
                      </div>
                      <h4 className="fw-bold mb-0" style={{ color: "var(--ct-color)" }}>{milestone.title}</h4>
                    </div>
                    <p className="mb-0 text-muted">{milestone.description}</p>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UniqueFonderSection />

      {/* Services Overview Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3" style={{ color: "var(--tt-color)" }}>Our Services</h2>
              <p className="text-muted">Enterprise-grade solutions backed by real-world experience</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card services-card h-100">
                <div className="card-body p-4" style={{
                  boxShadow: isHovered
                    ? '0 20px 38px rgba(0,0,0,0.25), 0 15px 12px rgba(0,0,0,0.32)'
                    : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.33)',
                  transition: 'all 0.3s ease-in-out',
                }}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "var(--primary-color)" }}>
                      <i className="fas fa-network-wired text-white"></i>
                    </div>
                    <h4 className="fw-bold m-0" style={{ color: "var(--ct-color)" }}>Network Automation</h4>
                  </div>
                  <p className="card-text">Implementing DevOps practices and automation tools to reduce manual operations, minimize errors, and accelerate service delivery.</p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-info me-2"></i>Network scripting and DevOps</li>
                    <li><i className="fas fa-check text-info me-2"></i>Continuous integration/deployment</li>
                    <li><i className="fas fa-check text-info me-2"></i>Network-as-Code implementation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card services-card h-100">
                <div className="card-body p-4" style={{
                  boxShadow: isHovered
                    ? '0 20px 38px rgba(0,0,0,0.25), 0 15px 12px rgba(0,0,0,0.32)'
                    : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.33)',
                  transition: 'all 0.3s ease-in-out',
                }}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "var(--primary-color)" }}>
                      <i className="fas fa-shield-alt text-white"></i>
                    </div>
                    <h4 className="fw-bold m-0" style={{ color: "var(--ct-color)" }}>Network Security</h4>
                  </div>
                  <p className="card-text">Implementing enterprise-grade security solutions to protect network infrastructure from modern threats.</p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-info me-2"></i>Network segmentation</li>
                    <li><i className="fas fa-check text-info me-2"></i>Vulnerability management</li>
                    <li><i className="fas fa-check text-info me-2"></i>Security architecture design</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card services-card h-100">
                <div className="card-body p-4" style={{
                  boxShadow: isHovered
                    ? '0 20px 38px rgba(0,0,0,0.25), 0 15px 12px rgba(0,0,0,0.32)'
                    : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.33)',
                  transition: 'all 0.3s ease-in-out',
                }}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "var(--primary-color)" }}>
                      <i className="fas fa-tachometer-alt text-white"></i>
                    </div>
                    <h4 className="fw-bold m-0" style={{ color: "var(--ct-color)" }}>Network Optimization</h4>
                  </div>
                  <p className="card-text">Enhancing network performance and reducing operational costs through strategic optimization.</p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-info me-2"></i>Performance monitoring</li>
                    <li><i className="fas fa-check text-info me-2"></i>Capacity planning</li>
                    <li><i className="fas fa-check text-info me-2"></i>Cost reduction strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;