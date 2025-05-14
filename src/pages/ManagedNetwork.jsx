import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaNetworkWired, FaShieldAlt, FaChartLine, FaTools, FaSyncAlt, FaHeadset, FaRocket, FaArrowRight, FaCogs, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/ManagedNetworkServices.css';
import backgroundImage from '../assets/managed.jpg';
// Import the new images from the same directory
import networkMonitoringImage from '../assets/network-monitoring.jpg';
import networkArchitectureImage from '../assets/network-architecture.jpg';

const ManagedNetworkServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'bi bi-info-circle' },
    { id: 'technologies', label: 'Technologies', icon: 'bi bi-tools' },
    { id: 'benefits', label: 'Benefits', icon: 'bi bi-award' },
    { id: 'solutions', label: 'Solutions', icon: 'bi bi-gear' },
    { id: 'faqs', label: 'FAQs', icon: 'bi bi-question-square' }
  ];

  const faqs = [
    { question: "What types of networks do you manage?", answer: "We manage LANs, WANs, WLANs, SD-WAN, hybrid and cloud-connected networks across multiple sites and geographies." },
    { question: "Do you only support specific vendors or technologies?", answer: "No. We are vendor-agnostic and can manage networks built with Cisco, Juniper, Fortinet, Ubiquiti, HPE Aruba, and more." },
    { question: "What is the typical onboarding process?", answer: "We start with a network assessment, followed by discovery, documentation, transition, and then active management—all with minimal disruption." },
    { question: "Can I retain some control over my network?", answer: "Absolutely. We offer co-managed service models where you retain visibility and decision-making while we handle operations." },
    { question: "How do you ensure security and compliance?", answer: "We integrate robust security features like firewall management, role-based access, logging, and compliance reporting to meet industry standards." },
    { question: "What are your SLAs (Service Level Agreements)?", answer: "Our SLAs cover uptime, response time, resolution targets, and performance metrics—customized to your needs." }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">What is Managed Network Services?</h2>
            <div className="row">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4 mb-5 gradient-card">
                  <p className="text-center text-light fw-bold mb-0">
                    Managed Network Services provide end-to-end design, implementation, monitoring, and management of your enterprise network infrastructure—LAN, WAN, WLAN, SD-WAN, or hybrid environments. We act as your extended IT team, ensuring reliable connectivity, optimized performance, and simplified operations—24/7.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-center text-primary mb-4">Key Features</h3>
            <div className="row">
              {[
                { title: "Proactive Network Monitoring", desc: "24/7/365 monitoring to detect and resolve issues.", icon: <FaSearch size={40} className="feature-icon" /> },
                { title: "LAN/WAN/WLAN Management", desc: "Complete lifecycle management of network infrastructure.", icon: <FaNetworkWired size={40} className="feature-icon" /> },
                { title: "Centralized Visibility", desc: "Real-time dashboards and usage analytics.", icon: <FaChartLine size={40} className="feature-icon" /> },
                { title: "Security Management", desc: "Integrated firewall and intrusion detection.", icon: <FaShieldAlt size={40} className="feature-icon" /> },
                { title: "Configuration Management", desc: "Automated backups and policy enforcement.", icon: <FaCogs size={40} className="feature-icon" /> },
                { title: "24/7 Helpdesk", desc: "Tiered support with guaranteed response times.", icon: <FaHeadset size={40} className="feature-icon" /> },
                { title: "Scalability & Optimization", desc: "Supports growth and new technologies like SD-WAN.", icon: <FaRocket size={40} className="feature-icon" /> }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 feature-card">
                    <div className="text-center mb-3">{feature.icon}</div>
                    <h5 className="text-center">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Implementation Process</h3>
            <div className="implementation-timeline">
              {[
                { step: "Network Assessment", icon: <FaSearch size={24} /> },
                { step: "Design & Planning", icon: <FaTools size={24} /> },
                { step: "Implementation", icon: <FaNetworkWired size={24} /> },
                { step: "Monitoring & Management", icon: <FaCogs size={24} /> },
                { step: "Optimization", icon: <FaSyncAlt size={24} /> }
              ].map((step, index) => (
                <motion.div className="timeline-item" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
                  <div className="timeline-icon">{step.icon}</div>
                  <div className="timeline-content"><h5>{step.step}</h5></div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'technologies':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Technologies & Tools</h2>
            <div className="row text-center">
              {[
                { name: "Cisco Solutions", desc: "Routers, switches, and security appliances.", icon: <FaNetworkWired size={40} className="tech-icon" /> },
                { name: "Juniper Networks", desc: "High-performance networking and security.", icon: <FaCogs size={40} className="tech-icon" /> },
                { name: "Fortinet Firewalls", desc: "Advanced threat protection and VPN.", icon: <FaShieldAlt size={40} className="tech-icon" /> },
                { name: "Aruba WLAN", desc: "Scalable wireless networking solutions.", icon: <FaRocket size={40} className="tech-icon" /> }
              ].map((tech, index) => (
                <motion.div className="col-md-6 col-lg-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 tech-card">
                    {tech.icon}
                    <h5>{tech.name}</h5>
                    <p className="mt-2">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Network Stack</h3>
            <div className="row mb-5">
              {/* First new image placement in a styled box beside the content */}
              <div className="col-lg-6">
                <div className="platform-stack mb-3">
                  {[
                    { title: "Network Security", desc: "Firewalls, IDS/IPS, and VPN.", icon: <FaShieldAlt /> },
                    { title: "Wireless Networking", desc: "WLAN and access points.", icon: <FaRocket /> },
                    { title: "Core Networking", desc: "Routers, switches, and SD-WAN.", icon: <FaNetworkWired /> }
                  ].map((layer, index) => (
                    <motion.div className="stack-layer" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                      <div className="stack-icon">{layer.icon}</div>
                      <div className="stack-content">
                        <h5>{layer.title}</h5>
                        <p>{layer.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <motion.div 
                  className="architecture-image-container"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    backgroundColor: "#f5f9ff",
                    borderRadius: "8px",
                    padding: "20px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    border: "1px solid #e0e9fa",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <h5 className="text-center text-primary mb-3">Network Architecture</h5>
                  <img 
                    src={networkArchitectureImage} 
                    alt="Network architecture diagram showing integrated technologies" 
                    className="img-fluid mb-3" 
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                  <p className="text-center mb-0 text-muted">
                    Comprehensive architecture design for optimal network performance
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="platform-stack">
              {[
                { title: "Monitoring Tools", desc: "Real-time analytics and dashboards.", icon: <FaChartLine /> },
                { title: "Configuration Management", desc: "Automated backups and policies.", icon: <FaCogs /> }
              ].map((layer, index) => (
                <motion.div className="stack-layer" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="stack-icon">{layer.icon}</div>
                  <div className="stack-content">
                    <h5>{layer.title}</h5>
                    <p>{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'benefits':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Key Benefits</h2>
            <div className="row">
              {[
                { title: "Reduced IT Burden", desc: "Free your teams from network management.", icon: <FaTools size={40} className="benefit-icon" /> },
                { title: "Improved Uptime", desc: "Proactive management reduces downtime.", icon: <FaSyncAlt size={40} className="benefit-icon" /> },
                { title: "Cost Efficiency", desc: "Predictable subscription-based pricing.", icon: <FaChartLine size={40} className="benefit-icon" /> },
                { title: "Enhanced Security", desc: "Integrated security reduces threats.", icon: <FaShieldAlt size={40} className="benefit-icon" /> },
                { title: "Scalability", desc: "Solutions grow with your business.", icon: <FaRocket size={40} className="benefit-icon" /> },
                { title: "Access to Expertise", desc: "Top-tier skills without full-time hires.", icon: <FaHeadset size={40} className="benefit-icon" /> }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 benefit-card">
                    <div className="text-center mb-3">{benefit.icon}</div>
                    <h5 className="text-center">{benefit.title}</h5>
                    <p className="text-center">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Second new image placement */}
            <div className="row mt-5 mb-4">
              <div className="col-lg-8 mx-auto">
                <motion.img 
                  src={networkMonitoringImage} 
                  alt="IT professionals monitoring network systems" 
                  className="img-fluid rounded shadow-lg" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Success Stories</h3>
            <div className="success-stories">
              {[
                { company: "Global Retail", result: "Achieved 99.9% network uptime with SD-WAN." },
                { company: "Manufacturing Firm", result: "Reduced network incidents by 80% with proactive monitoring." },
                { company: "Financial Services", result: "Improved compliance with integrated security management." }
              ].map((story, index) => (
                <motion.div className="story-card" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: index * 0.2 }}>
                  <div className="story-content">
                    <h5>{story.company}</h5>
                    <p>{story.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Core Network Solutions</h2>
            <div className="solutions-grid">
              {[
                { title: "Network Design & Implementation", desc: "Custom network architectures for your business.", icon: <FaTools size={40} /> },
                { title: "SD-WAN Deployment", desc: "Optimize connectivity with software-defined WAN.", icon: <FaNetworkWired size={40} /> },
                { title: "Wireless Network Management", desc: "Scalable WLAN solutions for seamless connectivity.", icon: <FaRocket size={40} /> },
                { title: "Network Security", desc: "Firewalls, IDS/IPS, and access control.", icon: <FaShieldAlt size={40} /> },
                { title: "Monitoring & Analytics", desc: "Real-time insights into network performance, maximizing productivity and minimizing downtime.", icon: <FaChartLine size={40} /> },
                { title: "Configuration Management", desc: "Automated backups and policy enforcement.", icon: <FaCogs size={40} /> },
                { title: "24/7 Support", desc: "Dedicated helpdesk for incident resolution.", icon: <FaHeadset size={40} /> }
              ].map((solution, index) => (
                <motion.div className="solution-card" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="solution-icon">{solution.icon}</div>
                  <h5>{solution.title}</h5>
                  <p>{solution.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Why Choose Our Managed Network Services</h3>
            <div className="why-choose-us">
              {[
                { title: "Experience & Expertise", desc: "Certified engineers with real-world experience." },
                { title: "Customized Service Models", desc: "Fully managed, co-managed, or on-demand support." },
                { title: "Vendor-Neutral Approach", desc: "Integration with leading technologies." },
                { title: "Proactive Management", desc: "AI-enhanced monitoring to prevent issues." }
              ].map((item, index) => (
                <motion.div className="why-choose-item" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'faqs':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Frequently Asked Questions</h2>
            <div className="faqs-container">
              {faqs.map((faq, index) => (
                <motion.div className="faq-item" key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Accordion>
                    <Accordion.Item eventKey={index.toString()}>
                      <Accordion.Header>
                        <div className="faq-question">
                          <span className="question-icon">Q</span>
                          <span className="question-text">{faq.question}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="faq-answer">
                          <span className="answer-icon">A</span>
                          <p>{faq.answer}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };
  return (
    <div className="container-fluid p-0">
      <div
        className="hero-section d-flex align-items-center"
        style={{
          background: `url(${backgroundImage}) center/cover no-repeat`,
          height: "60vh",
          position: "relative",
        }}
      >
        <div className="container">
          <motion.div
            className="hero-content-box text-white p-4 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-4 fw-bold">Managed Network Services</h1>
            <p className="lead">
              End-to-end network management for reliable, secure, and scalable connectivity
            </p>
            <Link to="/contact" className="cta-button mt-3 d-inline-flex align-items-center">
              Get Started <FaArrowRight className="ms-2" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="hero-overlay"></div>

      <section className="tabs-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="custom-tabs-container">
                <div className="tab-navigation">
                  <ul className="nav custom-tabs justify-content-center" id="mnsTabs" role="tablist">
                    {tabs.map((tab) => (
                      <li className="nav-item" key={tab.id} role="presentation">
                        <button
                          className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                          onClick={() => setActiveTab(tab.id)}
                          id={`${tab.id}-tab`}
                          type="button"
                          role="tab"
                          aria-controls={tab.id}
                          aria-selected={activeTab === tab.id}
                        >
                          <i className={`${tab.icon} tab-icon`}></i>
                          <span className="tab-text">{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tab-content-container mt-4">
                  <div className="tab-content" id="mnsTabsContent">
                    <motion.div
                      className="tab-pane show active"
                      id="tabContent"
                      role="tabpanel"
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderTabContent()}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="container">
          <h3>Optimize Your Network Today!</h3>
          <p>Contact us to learn how Managed Network Services can enhance your connectivity.</p>
          <Link to="/contact" className="cta-button-secondary">
            Request a Demo <FaArrowRight className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManagedNetworkServicesPage;