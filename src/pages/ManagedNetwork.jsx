import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaNetworkWired, FaShieldAlt, FaChartLine, FaTools, FaSyncAlt, FaHeadset, FaRocket, FaArrowRight, FaCogs, FaSearch, FaInfoCircle, FaCheckCircle, FaQuestionCircle, FaAward, FaUserTie, FaHandshake, FaBalanceScale } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/ManagedNetworkServices.css';
import backgroundImage from '../assets/managed.jpg';
import networkMonitoringImage from '../assets/network-monitoring.jpg';
import networkArchitectureImage from '../assets/network-architecture.jpg';
import PageBanner from '../components/common/PageBanner';

const ManagedNetworkServicesIntro = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-divider"></div>
            <h1 className="main-title">
              What is managed network services?
            </h1>
          </div>
          <div className="col-lg-7">
            <p className="intro-text">
              In today's connected world, a resilient and secure network infrastructure is crucial for business continuity and growth. Our Managed Network Services offer end-to-end design, implementation, monitoring, and management of your enterprise network infrastructure—whether it's Local Area Networks (LAN), Wide Area Networks (WAN), Wireless LANs (WLAN), SD-WAN or hybrid environments.
              We act as your extended IT team, taking responsibility for the performance, availability, and security of your network. Our services are tailored to meet the unique demands of your business, ensuring reliable connectivity, optimized performance, and simplified operations—24/7.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const ManagedNetworkServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeKey, setActiveKey] = useState(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'whychooseus', label: 'Why Choose Us', icon: <FaAward /> },
    { id: 'benefits', label: 'Key Benefits', icon: <FaCheckCircle /> },
    { id: 'solutions', label: 'Key Solutions', icon: <FaRocket /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> }
  ];

  const faqs = [
    { question: "What types of networks do you manage?", answer: "We manage LANs, WANs, WLANs, SD-WAN, hybrid and cloud-connected networks across multiple sites and geographies." },
    { question: "Do you only support specific vendors or technologies?", answer: "No. We are vendor-agnostic and can manage networks built with Cisco, Juniper, Fortinet, Ubiquiti, HPE Aruba, and more." },
    { question: "What is the typical onboarding process?", answer: "We start with a network assessment, followed by discovery, documentation, transition, and then active management—all with minimal disruption." },
    { question: "Can I retain some control over my network?", answer: "Absolutely. We offer co-managed service models where you retain visibility and decision-making while we handle operations." },
    { question: "How do you ensure security and compliance?", answer: "We integrate robust security features like firewall management, role-based access, logging, and compliance reporting to meet industry standards." },
    { question: "What are your SLAs (Service Level Agreements)?", answer: "Our SLAs cover uptime, response time, resolution targets, and performance metrics—customized to your needs." }
  ];

  const handleAccordionChange = (eventKey) => {
    setActiveKey(eventKey);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <div className="intro-box">
              <ManagedNetworkServicesIntro />
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

            {/* Implementation Timeline - Vertical responsive design */}
            <div className="position-relative py-3" style={{ marginBottom: "50px" }}>
              {/* Vertical timeline line */}
              <div className="position-absolute" style={{
                top: "0",
                bottom: "0",
                left: "50%",
                width: "4px",
                backgroundColor: "var(--primary-color)",
                transform: "translateX(-50%)"
              }}></div>

              {[
                {
                  step: "Network Assessment",
                  desc: "Comprehensive evaluation of your current infrastructure",
                  icon: <FaSearch size={24} />,
                  nodeIcon: <FaSearch size={20} />
                },
                {
                  step: "Design & Planning",
                  desc: "Custom architecture tailored to your business needs",
                  icon: <FaTools size={24} />,
                  nodeIcon: <FaTools size={20} />
                },
                {
                  step: "Implementation",
                  desc: "Seamless deployment with minimal disruption",
                  icon: <FaNetworkWired size={24} />,
                  nodeIcon: <FaNetworkWired size={20} />
                },
                {
                  step: "Monitoring & Management",
                  desc: "24/7 proactive oversight and support",
                  icon: <FaCogs size={24} />,
                  nodeIcon: <FaCogs size={20} />
                },
                {
                  step: "Optimization",
                  desc: "Continuous improvement and performance tuning",
                  icon: <FaSyncAlt size={24} />,
                  nodeIcon: <FaSyncAlt size={20} />
                }
              ].map((step, index) => (
                <motion.div
                  className="row mb-5 position-relative"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline node/circle with icon - properly centered */}
                  <div className="col-12 d-flex justify-content-center" style={{
                    marginBottom: "0px",
                    height: "0px"
                  }}>
                    <div style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#402456",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      border: "4px solid var(--primary-color)",
                      boxShadow: "0 0 0 5px rgba(255,255,255,0.8)",
                      zIndex: "2",
                      position: "relative",
                      top: "-30px"
                    }}>
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold"
                      }}>
                        {step.nodeIcon}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`col-md-5 ${index % 2 === 0 ? "offset-md-1 pe-md-5 text-md-end" : "offset-md-6 ps-md-5 text-md-start"}`}>
                    <div style={{
                      backgroundColor: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      position: "relative",
                      marginTop: "-20px"
                    }}>
                      {/* Triangle pointer */}
                      <div style={{
                        position: "absolute",
                        top: "20px",
                        [index % 2 === 0 ? "right" : "left"]: "-10px",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "white",
                        transform: "rotate(45deg)",
                        borderLeft: index % 2 !== 0 ? "1px solid rgba(0,0,0,0.05)" : "none",
                        borderBottom: index % 2 !== 0 ? "1px solid rgba(0,0,0,0.05)" : "none",
                        borderRight: index % 2 === 0 ? "1px solid rgba(0,0,0,0.05)" : "none",
                        borderTop: index % 2 === 0 ? "1px solid rgba(0,0,0,0.05)" : "none"
                      }}></div>

                      <div className="d-flex align-items-center" style={{
                        marginBottom: "12px",
                      }}>
                        <div style={{
                          backgroundColor: "var(--primary-color)",
                          borderRadius: "50%",
                          width: "38px",
                          height: "38px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "12px",
                          color: "white"
                        }}>
                          {step.icon}
                        </div>
                        <h5 style={{
                          color: "var(--ct-color)",
                          margin: "0",
                          fontWeight: "600"
                        }}>{step.step}</h5>
                      </div>
                      <p style={{
                        margin: "0",
                        color: "#666",
                        fontSize: "15px"
                      }}>{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Responsive styles for mobile */}
            <style jsx>{`
  @media (max-width: 767px) {
    .position-relative > div:first-child {
      left: 20px !important;
      transform: none !important;
    }
    .col-md-5 {
      margin-left: 60px !important;
      padding-left: 20px !important;
      text-align: left !important;
    }
    .col-md-5 > div > div:first-of-type {
      left: -10px !important;
      right: auto !important;
      border-left: 1px solid rgba(0,0,0,0.05) !important;
      border-bottom: 1px solid rgba(0,0,0,0.05) !important;
      border-right: none !important;
      border-top: none !important;
    }
    .col-12.d-flex.justify-content-center {
      justify-content: flex-start !important;
      padding-left: 20px !important;
    }
  }
`}</style>
          </div>
        );
      case 'features':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Features</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { title: "Proactive Monitoring", desc: "Continuous monitoring to prevent issues.", icon: <FaSearch size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Scalable Infrastructure", desc: "Adapts to your growing business needs.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Centralized Management", desc: "Unified control with real-time analytics.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Security Integration", desc: "Robust protection with firewalls and IDS.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> }
              ].map((feature, index) => (
                <motion.div className="col-md-6 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="text-center mb-3">{feature.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'whychooseus':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Why Choose Our Managed Network Services</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>

            {/* Why Choose Us Cards Section */}
            <div className="row mb-5">
              {[
                {
                  title: "Experience & Expertise",
                  desc: "With certified network engineers and years of real-world experience, we deliver reliable, standards-based network solutions.",
                  icon: <FaUserTie size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Customized Service Models",
                  desc: "Choose from fully managed, co-managed, or on-demand support based on your business needs.",
                  icon: <FaHandshake size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Vendor-Neutral Approach",
                  desc: "We integrate and manage leading technologies from Cisco, Juniper, Fortinet, Aruba, and others—tailored to your environment.",
                  icon: <FaBalanceScale size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Proactive, Not Reactive",
                  desc: "Our systems predict and prevent issues with AI-enhanced monitoring, reducing downtime and costly outages.",
                  icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Customer-Centric Support",
                  desc: "You'll always have access to a dedicated account manager and a knowledgeable support team that understands your environment.",
                  icon: <FaHeadset size={40} style={{ color: "var(--primary-color)" }} />
                }
              ].map((feature, index) => (
                <motion.div className="col-md-6 col-lg-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100"
                    style={{
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      border: "1px solid #eaeaea",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div className="text-center mb-3">
                      <div style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(var(--primary-color-rgb), 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 15px"
                      }}>
                        {feature.icon}
                      </div>
                    </div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center mb-3">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies We Support Section */}
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Technologies We Support</h3>
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

            {/* Customer Testimonial or Highlight Section */}
            <div className="row mt-5">
              <div className="col-12">
                <motion.div
                  className="card shadow-lg border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    background: "linear-gradient(135deg, var(--primary-color) 0%, var(--tt-color) 100%)",
                    padding: "3rem"
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-8 mx-auto text-center">
                      <FaQuestionCircle size={50} style={{ color: "white", opacity: 0.8, marginBottom: "20px" }} />
                      <h4 style={{ color: "white", marginBottom: "20px" }}>Expert Support When You Need It Most</h4>
                      <p style={{ color: "white", fontSize: "18px", fontStyle: "italic", opacity: 0.9, marginBottom: "25px" }}>
                        "We understand that your network is the backbone of your business operations. That's why we're committed to providing expert support 24/7/365, ensuring that your systems remain operational and secure at all times."
                      </p>
                      <div style={{ width: "80px", height: "4px", backgroundColor: "white", margin: "0 auto" }}></div>
                    </div>
                  </div>
                </motion.div>
              </div>
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
                  color: "linear-gradient(135deg, #f08b0a, #f08b0a"
                },
                {
                  company: "Manufacturing Firm",
                  result: "Reduced network incidents by 80% with AI-powered proactive monitoring, eliminating production downtime caused by connectivity issues.",
                  icon: <FaChartLine size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #301934, #301934"
                },
                {
                  company: "Financial Services Group",
                  result: "Improved compliance posture with integrated security management, passing all audits with zero findings for the first time in company history.",
                  icon: <FaShieldAlt size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #000000, #000000"
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
            <div className="solutions-grid mb-5">
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

            <div className="faqs-container custom-accordion">
              {faqs.map((faq, index) => (
                <motion.div
                  className="faq-item"
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Accordion
                    activeKey={activeKey}
                    onSelect={handleAccordionChange}>
                    <Accordion.Item
                      eventKey={index.toString()}
                      style={{
                        marginBottom: "15px",
                        borderRadius: "8px",
                        overflow: "hidden"
                      }}
                    >
                      <Accordion.Header>
                        <div className="faq-question">
                          <span className="question-icon" style={{ paddingRight: "5px" }}>Q</span>
                          <span className="question-text" style={{ fontWeight: "600" }}>{faq.question}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body style={{ backgroundColor: "var(--card-color)" }}>
                        <div className="faq-answer">
                          <span className="answer-icon" style={{ color: "var(--tt-color)" }}>A</span>
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
                boxShadow: "0 4px 15px var(--primary-color)"
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

  const tabTextStyle = {
    color: 'var(--tt-color)',
    fontWeight: 500
  };

  const activeTabTextStyle = {
    color: 'var(--tt-color)',
    fontWeight: 700
  };

  return (
    <div className="container-fluid p-0">
      <PageBanner
        title="Managed Network Services"
        subtitle="End-to-end network management for reliable, secure, and scalable connectivity"
        // backgroundImage={backgroundImage}
        backgroundImage="https://i.pinimg.com/736x/cb/23/0f/cb230f95556f05c3ae9b592b6ffe6a3e.jpg"
        background="#0a1033"
        currentpage="Managed Network Services"
      />
      <div className="hero-overlay"></div>
      <section className="tabs-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
              </motion.div>
              <div className="custom-tabs-container">
                <motion.div
                  className="tab-navigation mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="iacTabs" role="tablist">
                    {tabs.map((tab) => (
                      <li className="nav-item" key={tab.id} role="presentation">
                        <button
                          className={`nav-link-tab ${activeTab === tab.id ? 'active' : ''}`}
                          onClick={() => setActiveTab(tab.id)}
                          id={`${tab.id}-tab`}
                          type="button"
                          role="tab"
                          aria-controls={tab.id}
                          aria-selected={activeTab === tab.id}
                          style={activeTab === tab.id ? activeTabTextStyle : tabTextStyle}
                        >
                          <i className="tab-icon" style={{ color: "var(--tt-color)" }}>{tab.icon}</i>
                          <span style={{ color: "var(--tt-color)" }}>{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <div className="tab-content-container">
                  <div className="tab-content" id="iacTabsContent">
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