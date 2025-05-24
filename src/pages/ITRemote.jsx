import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaNetworkWired, FaShieldAlt, FaChartLine, FaTools, FaSyncAlt, FaHeadset, FaRocket, FaArrowRight, FaCogs, FaSearch, FaInfoCircle, FaCheckCircle, FaQuestionCircle, FaAward, FaUserTie, FaHandshake, FaBalanceScale, FaServer, FaWrench, FaPowerOff, FaClipboardList, FaEye, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/ITRemote.css';
import '../assets/css/TabsSection.css'; // Importing the same TabsSection.css as ITHelpDeskSupport.js
import backgroundImage from '../assets/managed3.jpg';
import networkMonitoringImage from '../assets/network-monitor.jpg';
import networkArchitectureImage from '../assets/network-architecture300.jpg';
import PageBanner from '../components/common/PageBanner';

const ITRemoteSmartHandsIntro = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-divider"></div>
            <h1 className="main-title">
              Remote and Smart Hands Support...
            </h1>
          </div>
          <div className="col-lg-7">
            <p className="intro-text" style={{ textAlign: 'justify' }}>
              In today's fast-paced digital world, uninterrupted IT operations are essential to business success. IT Remote and Smart Hands Support refers to on-demand technical assistance delivered remotely or physically at data centers and client locations. Whether it’s basic troubleshooting, hardware swaps, software configuration, or full-scale infrastructure support, our service ensures your IT environment remains operational, secure, and efficient—without needing your internal team on-site.
              This service is ideal for businesses managing geographically distributed infrastructure or relying on colocation data centers, branch offices, and remote locations. Our certified engineers act as your extended IT team—available 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ITRemoteSmartHandsPage = () => {
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
    { question: "What is the difference between Remote and Smart Hands support?", answer: "Remote support is performed virtually via secure connections to your systems, while Smart Hands support involves physical on-site assistance at your location or data center." },
    { question: "Is your support available 24/7?", answer: "Yes. We operate around the clock to support critical business functions and meet global time zone needs." },
    { question: "Do I need to subscribe or can I use services on-demand?", answer: "We offer flexible plans including on-demand support, scheduled service, and monthly subscriptions based on your needs." },
    { question: "Can you help in colocation data centers?", answer: "Absolutely. Our Smart Hands engineers are trained to work within data center environments under your authorization." },
    { question: "How secure is your remote access?", answer: "All remote sessions use encrypted connections, with multifactor authentication and detailed activity logging to maintain security and compliance." },
    { question: "What type of hardware can you support?", answer: "We support multi-vendor environments including Cisco, Juniper, Dell, HP, Lenovo, and custom-built infrastructure." }
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
              <ITRemoteSmartHandsIntro />
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Features</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { title: "24/7 Availability", desc: "Always-on support across all time zones, with rapid response to incidents or requests.", icon: <FaHeadset size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "On-Site Smart Hands", desc: "Physical presence to perform equipment installations, racking, cabling, and diagnostics.", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Remote Technical Support", desc: "Secure remote access for troubleshooting, patching, monitoring, and updates.", icon: <FaLaptopCode size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Vendor Coordination", desc: "We liaise with third-party vendors for hardware replacements and service escalations.", icon: <FaHandshake size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Secure Access Control", desc: "All actions are logged and monitored for security compliance and transparency.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Scalable Support Levels", desc: "Pay-as-you-go, scheduled, or dedicated service tiers based on your needs.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Proactive Monitoring", desc: "Early problem detection through network monitoring tools minimizes downtime.", icon: <FaSearch size={40} style={{ color: "var(--primary-color)" }} /> }
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
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Service Process</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="position-relative py-3" style={{ marginBottom: "50px" }}>
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
                  step: "Request Submission",
                  desc: "Submit your support request through our portal or phone",
                  icon: <FaClipboardList size={24} />,
                  nodeIcon: <FaClipboardList size={20} />
                },
                {
                  step: "Rapid Assessment",
                  desc: "Our team evaluates the issue and determines the best approach",
                  icon: <FaSearch size={24} />,
                  nodeIcon: <FaSearch size={20} />
                },
                {
                  step: "Remote Resolution",
                  desc: "First attempt via secure remote access when possible",
                  icon: <FaLaptopCode size={24} />,
                  nodeIcon: <FaLaptopCode size={20} />
                },
                {
                  step: "Smart Hands Dispatch",
                  desc: "On-site technician deployment for physical tasks",
                  icon: <FaTools size={24} />,
                  nodeIcon: <FaTools size={20} />
                },
                {
                  step: "Documentation & Follow-up",
                  desc: "Complete reporting and verification of resolution",
                  icon: <FaCheckCircle size={24} />,
                  nodeIcon: <FaCheckCircle size={20} />
                }
              ].map((step, index) => (
                <motion.div
                  className="row mb-5 position-relative"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
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

      case 'whychooseus':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Why Choose Our Remote and Smart Hands Support</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row mb-5">
              {[
                {
                  title: "Expert Engineers",
                  desc: "Our technicians are certified, experienced, and trained in multi-vendor environments with years of hands-on expertise.",
                  icon: <FaUserTie size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Rapid Deployment",
                  desc: "Immediate response for emergencies and same-day dispatch for smart hands tasks to minimize business disruption.",
                  icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Global Reach, Local Touch",
                  desc: "We cover multiple regions and data centers, giving you presence without footprint wherever you need support.",
                  icon: <FaNetworkWired size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Customized SLAs",
                  desc: "Tailored Service Level Agreements to meet your business requirements and ensure accountability for results.",
                  icon: <FaBalanceScale size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Proactive Monitoring",
                  desc: "Early problem detection through our network monitoring tools minimizes downtime and prevents issues.",
                  icon: <FaEye size={40} style={{ color: "var(--primary-color)" }} />
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
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Hardware & Technologies We Support</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row text-center">
              {[
                { name: "Cisco Equipment", desc: "Routers, switches, firewalls, and wireless systems.", icon: <FaNetworkWired size={40} style={{ color: "var(--primary-color)" }} /> },
                { name: "Dell/HP Servers", desc: "Server hardware installation and maintenance.", icon: <FaServer size={40} style={{ color: "var(--primary-color)" }} /> },
                { name: "Juniper Networks", desc: "High-performance networking and security devices.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { name: "Custom Infrastructure", desc: "Multi-vendor and custom-built IT environments.", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} /> }
              ].map((tech, index) => (
                <motion.div className="col-md-6 col-lg-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100"
                    style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    {tech.icon}
                    <h5 style={{ color: "var(--ct-color)" }}>{tech.name}</h5>
                    <p className="mt-2">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                      <FaHandshake size={50} style={{ color: "white", opacity: 0.8, marginBottom: "20px" }} />
                      <h4 style={{ color: "white", marginBottom: "20px" }}>Your Extended IT Team</h4>
                      <p style={{ color: "white", fontSize: "18px", fontStyle: "italic", opacity: 0.9, marginBottom: "25px" }}>
                        "We act as your extended IT team, providing expert technical assistance exactly when and where you need it. Whether it's an emergency at 3 AM or routine maintenance, we're here to keep your systems running smoothly."
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
                { title: "Reduced Downtime", desc: "Immediate response reduces Mean Time to Repair (MTTR), keeping your business online.", icon: <FaSyncAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Cost-Efficiency", desc: "Avoid travel costs and delays by using remote or local smart hands technicians.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Operational Continuity", desc: "Maintain IT operations during emergencies, staff shortages, or after hours.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Focus on Core Business", desc: "Offload infrastructure tasks to our team, freeing your internal resources.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Security & Compliance", desc: "Ensure tasks are completed following strict access control and auditing policies.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Global Coverage", desc: "Get support at any location without maintaining local staff everywhere.", icon: <FaNetworkWired size={40} style={{ color: "var(--primary-color)" }} /> }
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="IT professionals providing remote support"
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
                  company: "Healthcare Network",
                  result: "Reduced critical system downtime by 95% with 24/7 remote monitoring and smart hands support across 50+ clinic locations.",
                  icon: <FaHeadset size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #f08b0a, #f08b0a)"
                },
                {
                  company: "Financial Services Firm",
                  result: "Achieved same-day hardware replacements at colocation facilities, maintaining 99.99% uptime for trading systems.",
                  icon: <FaServer size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #301934, #301934)"
                },
                {
                  company: "Retail Chain",
                  result: "Streamlined IT operations across 200+ stores with centralized remote support, reducing on-site visits by 80%.",
                  icon: <FaNetworkWired size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #000000, #000000)"
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
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Solutions</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { title: "Hardware Installation & Replacement", desc: "Racking/stacking, component swaps, and professional cabling services.", icon: <FaWrench size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Server & Network Equipment Configuration", desc: "BIOS, firmware, network settings, and OS installation support.", icon: <FaServer size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Remote Reboots & Power Cycling", desc: "Safe restart of unresponsive devices or systems without site visits.", icon: <FaPowerOff size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Inventory Management", desc: "Asset tracking and documentation at remote sites or data centers.", icon: <FaClipboardList size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Physical Site Checks", desc: "Environmental checks for temperature, humidity, and cable integrity.", icon: <FaEye size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Software Support", desc: "Remote configuration, patches, application troubleshooting, and backups.", icon: <FaLaptopCode size={40} style={{ color: "var(--primary-color)" }} /> }
              ].map((solution, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100"
                    style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="text-center mb-3">{solution.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{solution.title}</h5>
                    <p className="text-center">{solution.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="row mt-5">
              <div className="col-lg-8 mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 style={{ color: "var(--tt-color)" }} className="mb-3">Ready to Optimize Your IT Operations?</h3>
                  <p className="mb-4">Our IT Remote and Smart Hands Support services are designed to keep your infrastructure running smoothly, no matter where you are.</p>
                  <div className="d-flex justify-content-center gap-3">
                    <Link to="/request-support" className="btn btn-primary" style={{ backgroundColor: "var(--primary-color)", border: "none", padding: "10px 20px" }}>
                      Request Support
                    </Link>
                    <Link to="/contact-expert" className="btn btn-outline-primary" style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)", padding: "10px 20px" }}>
                      Talk to an Expert
                    </Link>
                  </div>
                </motion.div>
              </div>
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
            <Accordion activeKey={activeKey} onSelect={handleAccordionChange}>
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <PageBanner
        title= "Remote and Smart Hands Support"
        subtitle="Your trusted partner for 24/7 technical assistance, remote infrastructure management, and physical data center support."
        backgroundImage={backgroundImage}
        ctaButtons={[
          { label: "Request Support", link: "/request-support", style: { backgroundColor: "var(--primary-color)", border: "none", padding: "10px 20px" } },
          { label: "Talk to an Expert", link: "/contact-expert", style: { borderColor: "var(--primary-color)", color: "var(--primary-color)", padding: "10px 20px" } }
        ]}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      />
      <section className="tabs-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <div className="custom-tabs-container">
                <motion.div
                  className="tab-navigation mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="remoteSmartHandsTabs" role="tablist">
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
                          style={{
                            borderBottom: activeTab === tab.id ? `3px solid var(--primary-color)` : 'none'
                          }}
                        >
                          <i className="tab-icon" style={{ color: "var(--tt-color)" }}>{tab.icon}</i>
                          <span style={{ color: "var(--tt-color)" }} className="tab-text ms-2">{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <div className="tab-content-container">
                  <div className="tab-content" id="remoteSmartHandsTabsContent">
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
    </div>
  );
};

export default ITRemoteSmartHandsPage;