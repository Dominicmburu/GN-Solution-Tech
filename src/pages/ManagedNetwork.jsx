import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaNetworkWired, FaShieldAlt, FaChartLine, FaTools, FaSyncAlt, FaHeadset, FaRocket, FaArrowRight, FaCogs, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/ManagedNetworkServices.css';
import backgroundImage from '../assets/managed.jpg';
import PageBanner from '../components/common/PageBanner';
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
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">What is Managed Network Services?</h2>
            <div className="row">
              <div className="col-12">
                <div style={{ backgroundColor: 'var(--tt-color)' }} className="card shadow-lg border-0 p-4 mb-5">
                  <p className="text-center text-light fw-bold mb-0">
                    Managed Network Services provide end-to-end design, implementation, monitoring, and management of your enterprise network infrastructure—LAN, WAN, WLAN, SD-WAN, or hybrid environments. We act as your extended IT team, ensuring reliable connectivity, optimized performance, and simplified operations—24/7.
                  </p>
                </div>
              </div>
            </div>

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Features</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { title: "Proactive Network Monitoring", desc: "24/7/365 monitoring to detect and resolve issues.", icon: <FaSearch size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "LAN/WAN/WLAN Management", desc: "Complete lifecycle management of network infrastructure.", icon: <FaNetworkWired size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Centralized Visibility", desc: "Real-time dashboards and usage analytics.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Security Management", desc: "Integrated firewall and intrusion detection.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Configuration Management", desc: "Automated backups and policy enforcement.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "24/7 Helpdesk", desc: "Tiered support with guaranteed response times.", icon: <FaHeadset size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Scalability & Optimization", desc: "Supports growth and new technologies like SD-WAN.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100"
                  style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="text-center mb-3">{feature.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Implementation Process</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="implementation-timeline position-relative">
              {/* Timeline connector line */}
              <div className="timeline-connector"></div>

              {[
                { step: "Network Assessment", desc: "Comprehensive evaluation of your current infrastructure", icon: <FaSearch size={24} /> },
                { step: "Design & Planning", desc: "Custom architecture tailored to your business needs", icon: <FaTools size={24} /> },
                { step: "Implementation", desc: "Seamless deployment with minimal disruption", icon: <FaNetworkWired size={24} /> },
                { step: "Monitoring & Management", desc: "24/7 proactive oversight and support", icon: <FaCogs size={24} /> },
                { step: "Optimization", desc: "Continuous improvement and performance tuning", icon: <FaSyncAlt size={24} /> }
              ].map((step, index) => (
                <motion.div
                  className={` d-flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="timeline-content-wrapper col-5">
                    <div className="timeline-content p-4 bg-white rounded shadow-sm">
                      <h5 style={{ color: "var(--ct-color)" }}>{step.step}</h5>
                      <p className="mb-0 text-muted">{step.desc}</p>
                    </div>
                  </div>

                  <div className="timeline-icon-wrapper col-2 d-flex justify-content-center">
                    <div className="timeline-icon-circle">
                      <div style={{ color: "#fff", backgroundColor: "var(--primary-color)" }} className="timeline-icon d-flex align-items-center justify-content-center">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  <div className="col-5"></div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'technologies':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Technologies & Tools</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row text-center">
              {[
                { name: "Cisco Solutions", desc: "Routers, switches, and security appliances.", icon: <FaNetworkWired size={40} style={{ color: "var(--primary-color)" }} /> },
                { name: "Juniper Networks", desc: "High-performance networking and security.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { name: "Fortinet Firewalls", desc: "Advanced threat protection and VPN.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { name: "Aruba WLAN", desc: "Scalable wireless networking solutions.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> }
              ].map((tech, index) => (
                <motion.div className="col-md-6 col-lg-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100 "
                  style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    {tech.icon}
                    <h5 style={{ color: "var(--ct-color)" }}>{tech.name}</h5>
                    <p className="mt-2">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Network Stack</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="platform-stack mb-3">
                  {[
                    { title: "Network Security", desc: "Firewalls, IDS/IPS, and VPN.", icon: <FaShieldAlt style={{ color: "var(--primary-color)" }} /> },
                    { title: "Wireless Networking", desc: "WLAN and access points.", icon: <FaRocket style={{ color: "var(--primary-color)" }} /> },
                    { title: "Core Networking", desc: "Routers, switches, and SD-WAN.", icon: <FaNetworkWired style={{ color: "var(--primary-color)" }} /> }
                  ].map((layer, index) => (
                    <motion.div className="stack-layer" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                      <div className="icon-circle-net">
                        {layer.icon}
                      </div>
                      <div className="stack-content">
                        <h5 style={{ color: "var(--ct-color)" }}>{layer.title}</h5>
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
                    backgroundColor: "var(--card-color)",
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
                  <h5 style={{ color: "var(--tt-color)" }} className="text-center mb-3">Network Architecture</h5>
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
                { title: "Monitoring Tools", desc: "Real-time analytics and dashboards.", icon: <FaChartLine style={{ color: "var(--primary-color)" }} /> },
                { title: "Configuration Management", desc: "Automated backups and policies.", icon: <FaCogs style={{ color: "var(--primary-color)" }} /> }
              ].map((layer, index) => (
                <motion.div className="stack-layer" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="icon-circle-net">{layer.icon}</div>
                  <div className="stack-content">
                    <h5 style={{ color: "var(--ct-color)" }}>{layer.title}</h5>
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
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Benefits</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { title: "Reduced IT Burden", desc: "Free your teams from network management.", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Improved Uptime", desc: "Proactive management reduces downtime.", icon: <FaSyncAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Cost Efficiency", desc: "Predictable subscription-based pricing.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Enhanced Security", desc: "Integrated security reduces threats.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Scalability", desc: "Solutions grow with your business.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Access to Expertise", desc: "Top-tier skills without full-time hires.", icon: <FaHeadset size={40} style={{ color: "var(--primary-color)" }} /> }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 benefit-card">
                    <div className="text-center mb-3">{benefit.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{benefit.title}</h5>
                    <p className="text-center">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

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

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-3">Success Stories</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                {
                  company: "Global Retail Chain",
                  result: "Achieved 99.9% network uptime across 200+ locations with centralized SD-WAN management, reducing IT costs by 30%.",
                  icon: <FaNetworkWired size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #f08b0a,rgba(110, 71, 20, 0.7)"
                },
                {
                  company: "Manufacturing Firm",
                  result: "Reduced network incidents by 80% with AI-powered proactive monitoring, eliminating production downtime caused by connectivity issues.",
                  icon: <FaChartLine size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #301934,rgb(112, 5, 131))"
                },
                {
                  company: "Financial Services Group",
                  result: "Improved compliance posture with integrated security management, passing all audits with zero findings for the first time in company history.",
                  icon: <FaShieldAlt size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #000000,rgb(165, 162, 162))"
                }
              ].map((story, index) => (
                <div className="col-lg-4 mb-4" key={index}>
                  <motion.div
                    className="success-story-card h-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <div className="story-header p-4 d-flex align-items-center" style={{ background: story.color }}>
                      <div className="story-icon me-3 d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          width: "60px",
                          height: "60px"
                        }}>
                        {story.icon}
                      </div>
                      <h5 className="text-white mb-0">{story.company}</h5>
                    </div>
                    <div className="story-content p-4 bg-white flex-grow-1 d-flex align-items-center">
                      <p className="mb-0">{story.result}</p>
                    </div>
                    <div className="story-footer p-3 text-center" style={{ background: "#f7f9fc", borderTop: "1px solid #eaeaea" }}>
                      <a href="#" className="btn btn-sm" style={{ color: "var(--primary-color)", fontWeight: "600" }}>
                        Read Case Study <FaArrowRight style={{ marginLeft: "5px", fontSize: "12px" }} />
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Core Network Solutions</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="solutions-grid">
              {[
                { title: "Network Design & Implementation", desc: "Custom network architectures for your business.", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "SD-WAN Deployment", desc: "Optimize connectivity with software-defined WAN.", icon: <FaNetworkWired size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Wireless Network Management", desc: "Scalable WLAN solutions for seamless connectivity.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Network Security", desc: "Firewalls, IDS/IPS, and access control.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Monitoring & Analytics", desc: "Real-time insights into network performance, maximizing productivity and minimizing downtime.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Configuration Management", desc: "Automated backups and policy enforcement.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "24/7 Support", desc: "Dedicated helpdesk for incident resolution.", icon: <FaHeadset size={40} style={{ color: "var(--primary-color)" }} /> }
              ].map((solution, index) => (
                <motion.div
                  className="solution-card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}
                >
                  <div className="icon-circle-core">{solution.icon}</div>
                  <h5 style={{ color: "var(--ct-color)" }}>{solution.title}</h5>
                  <p>{solution.desc}</p>
                </motion.div>
              ))}
            </div>

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Why Choose Our Managed Network Services</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                {
                  title: "Experience & Expertise",
                  desc: "Our team of certified network engineers brings decades of combined experience across diverse technologies and industries.",
                  icon: <FaTools size={32} style={{ color: "var(--primary-color)" }} />,
                  delay: 0.1
                },
                {
                  title: "Customized Service Models",
                  desc: "Choose from fully managed, co-managed, or on-demand support options tailored to your specific requirements and internal capabilities.",
                  icon: <FaCogs size={32} style={{ color: "var(--primary-color)" }} />,
                  delay: 0.2
                },
                {
                  title: "Vendor-Neutral Approach",
                  desc: "We integrate with all leading network technologies, ensuring you get the best solution for your needs, not just what we prefer to sell.",
                  icon: <FaSyncAlt size={32} style={{ color: "var(--primary-color)" }} />,
                  delay: 0.3
                },
                {
                  title: "Proactive Management",
                  desc: "Our AI-enhanced monitoring systems identify and address potential issues before they impact your business operations.",
                  icon: <FaRocket size={32} style={{ color: "var(--primary-color)" }} />,
                  delay: 0.4
                }
              ].map((item, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <motion.div
                    className="why-choose-card h-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay }}
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                      border: "1px solid #eaeaea",
                      height: "100%"
                    }}
                  >
                    <div className="card-header d-flex align-items-center p-4" style={{ background: "rgba(var(--primary-color-rgb), 0.08)", borderBottom: "1px solid rgba(var(--primary-color-rgb), 0.1)" }}>
                      <div className="icon-container me-3 rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          background: "#fff",
                          width: "60px",
                          height: "60px",
                          boxShadow: "0 4px 15px rgba(var(--primary-color-rgb), 0.2)"
                        }}>
                        {item.icon}
                      </div>
                      <h5 style={{ color: "var(--ct-color)", margin: 0 }}>{item.title}</h5>
                    </div>
                    <div className="card-body p-4">
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'faqs':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Frequently Asked Questions</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="faqs-container">
              {faqs.map((faq, index) => (
                <motion.div className="faq-item" key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Accordion>
                    <Accordion.Item
                      eventKey={index.toString()}
                      style={{
                        marginBottom: "15px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: "1px solid rgba(var(--primary-color-rgb), 0.2)"
                      }}
                    >
                      <Accordion.Header>
                        <div className="faq-question">
                          <span className="question-icon" style={{ backgroundColor: "var(--primary-color)" }}>Q</span>
                          <span className="question-text" style={{ color: "var(--ct-color)", fontWeight: "600" }}>{faq.question}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body style={{ backgroundColor: "#f9fbff" }}>
                        <div className="faq-answer">
                          <span className="answer-icon" style={{ backgroundColor: "var(--tt-color)" }}>A</span>
                          <p>{faq.answer}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link to="/contact" className="btn" style={{
                backgroundColor: "var(--primary-color)",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "30px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(var(--primary-color-rgb), 0.3)"
              }}>
                Have More Questions? Contact Us <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="container-fluid p-0">
      <PageBanner
        title="Managed Network Services"
        subtitle="End-to-end network management for reliable, secure, and scalable connectivity"
        backgroundImage={backgroundImage}
        background="#0a1033"
        currentpage="Managed Network Services"
      />

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
                          style={{
                            borderBottom: activeTab === tab.id ? `3px solid var(--primary-color)` : 'none'
                          }}
                        >
                          <i className={`${tab.icon} tab-icon`} style={{ color: "var(--primary-color)" }}></i>
                          <span style={{ color: "var(--tt-color)" }}>{tab.label}</span>
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

      {/* Added Call-to-Action Section */}
      <section style={{
        backgroundColor: "var(--tt-color)",
        padding: "50px 0",
        marginTop: "40px"
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <h3 className="text-white mb-3">Ready to optimize your network infrastructure?</h3>
              <p className="text-white-50 mb-0">Get in touch for a free consultation and discover how our managed network services can transform your connectivity.</p>
            </div>
            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <Link to="/contact" className="btn" style={{
                backgroundColor: "var(--primary-color)",
                color: "#fff",
                padding: "12px 25px",
                borderRadius: "30px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}>
                Request a Consultation <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedNetworkServicesPage;