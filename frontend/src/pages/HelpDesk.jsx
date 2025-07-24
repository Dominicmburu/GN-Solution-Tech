import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeadset, FaClock, FaUsers, FaLock, FaServer, FaRocket, FaInfoCircle, FaAward, FaQuestionCircle, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import "../assets/css/infrastructure.css";
import "../assets/css/TabsSection.css";
import backgroundImage from "../assets/IT HelpDesk.jpeg";
import PageBanner from '../components/common/PageBanner';
import HoverLineCard from "../components/common/HoverLineCard";

const ITHelpDeskSupport = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionChange = (eventKey) => {
    setActiveKey(eventKey);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'why-choose-us', label: 'Why Choose Us', icon: <FaAward /> },
    { id: 'benefits', label: 'Key Benefits', icon: <FaRocket /> },
    { id: 'solutions', label: 'Key Solutions', icon: <FaHeadset /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> }
  ];

  const faqs = [
    {
      question: "What is the difference between IT Help Desk and IT Service Desk?",
      answer: "An IT Help Desk focuses on resolving user issues and providing basic technical support. An IT Service Desk offers broader IT service management, including change management, asset tracking, and strategic IT operations."
    },
    {
      question: "What kind of businesses do you support?",
      answer: "We support small businesses, mid-sized enterprises, and large organizations across various industries."
    },
    {
      question: "Can we outsource only a portion of our help desk tasks?",
      answer: "Yes, we offer co-managed help desk models where we complement your in-house IT team."
    },
    {
      question: "Do you support remote and hybrid workers?",
      answer: "Absolutely. Our help desk is designed to assist users in office, remote, or hybrid environments."
    },
    {
      question: "How do users reach your help desk?",
      answer: "Users can reach us via phone, email, live chat, or a web-based portal, depending on your preferred communication channels."
    },
    {
      question: "Can we brand the support experience for our users?",
      answer: "Yes, we offer white-label and co-branded help desk services to maintain a consistent user experience."
    },
    {
      question: "Do you offer after-hours or 24/7 support?",
      answer: "Yes, our help desk is available during business hours, after-hours, weekends, or 24/7 based on your selected plan."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <div className="intro-box">
              <section className="intro-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="section-divider"></div>
                      <h1 className="main-title">IT Help Desk Support...</h1>
                    </div>
                    <div className="col-lg-7">
                      <p className="intro-text" style={{ textAlign: 'justify' }}>
                        Technology is the backbone of every modern business—but even the best systems experience occasional hiccups. Our IT Help Desk Support services ensure your users receive quick, friendly, and effective support whenever they encounter technical issues.
                        <p> Whether it’s a login problem, a frozen application, or a connectivity issue, our help desk acts as your business’s first line of defense—resolving issues swiftly and keeping productivity high. </p>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Features</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
              {[
                {
                  title: "Multichannel Access",
                  icon: <FaHeadset size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Support via phone, email, live chat, web portal, and mobile app for user convenience."
                },
                {
                  title: "First Call Resolution (FCR)",
                  icon: <FaCheckCircle size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "High resolution rates at the first point of contact to ensure user satisfaction and fast turnaround."
                },
                {
                  title: "Tiered Support",
                  icon: <FaUsers size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Level 1 support handles common issues, while Level 2 provides deeper technical expertise and escalation."
                },
                {
                  title: "Ticketing System Integration",
                  icon: <FaServer size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Full incident logging and tracking with ticket updates, status visibility, and SLA compliance."
                },
                {
                  title: "Remote Support Capabilities",
                  icon: <FaRocket size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Secure remote desktop tools for real-time troubleshooting and issue resolution."
                },
                {
                  title: "Custom Workflows & Knowledge Base",
                  icon: <FaLock size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Tailored support procedures and internal articles to address common problems quickly."
                },
                {
                  title: "End-User Training",
                  icon: <FaUsers size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Proactive education on common IT issues, best practices, and preventive measures."
                }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                      <div className="mb-3">{feature.icon}</div>
                      <h5 style={{ color: "var(--ct-color)" }}>{feature.title}</h5>
                      <p className="text-muted mb-0">{feature.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      case 'why-choose-us':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Why Choose Us</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
              {[
                {
                  title: "Certified, Friendly Support Team",
                  icon: <FaHeadset size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Our help desk professionals are ITIL-trained, customer-focused, and experienced in supporting a wide range of IT environments."
                },
                {
                  title: "Customizable Support Plans",
                  icon: <FaRocket size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Choose support levels and hours that match your business needs—from standard office hours to 24/7/365 coverage."
                },
                {
                  title: "Fast Response & Resolution",
                  icon: <FaClock size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Our SLAs ensure rapid response times and quick ticket resolution, helping minimize disruption to your business."
                },
                {
                  title: "Scalable for Growth",
                  icon: <FaUsers size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "As your business grows, our help desk services scale with you—supporting more users, tools, and locations."
                },
                {
                  title: "Security & Compliance Ready",
                  icon: <FaLock size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Our help desk operations follow strict protocols to protect user data, with adherence to GDPR, ISO 27001, and other standards."
                }
              ].map((advantage, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                      <div className="mb-3">{advantage.icon}</div>
                      <h5 style={{ color: "var(--ct-color)" }}>{advantage.title}</h5>
                      <p className="text-muted mb-0">{advantage.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="row mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <div className="col-12">
                <div className="card border-0 p-5 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                  <h3 style={{ color: "var(--tt-color)" }} className="mb-4">Quick, friendly, and effective IT support to keep your business productive.</h3>
                  <Link to="/contact" className="btn" style={{
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                    padding: "12px 25px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}>
                    Request Support <FaArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        );
      case 'benefits':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Benefits of IT Help Desk Support</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div className="row text-center" variants={containerVariants} initial="hidden" animate="visible">
              {[
                {
                  title: "Enhanced Productivity",
                  icon: <FaRocket size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Employees can return to work quickly, with minimal downtime from technical issues."
                },
                {
                  title: "Cost-Efficient IT Support",
                  icon: <FaServer size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Reduce internal IT workload and save on staffing costs by outsourcing common support tasks."
                },
                {
                  title: "Improved User Satisfaction",
                  icon: <FaUsers size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Friendly, professional, and responsive support increases confidence in your IT environment."
                },
                {
                  title: "Centralized Issue Tracking",
                  icon: <FaCheckCircle size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Visibility into all support requests with detailed reporting on trends and recurring problems."
                },
                {
                  title: "Proactive IT Health",
                  icon: <FaHeadset size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Identify recurring issues early, enabling proactive resolution and long-term stability."
                }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                      <div className="mb-3">{benefit.icon}</div>
                      <h5 style={{ color: "var(--ct-color)" }}>{benefit.title}</h5>
                      <p className="text-muted mt-2 mb-0">{benefit.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Solutions We Offer</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
              {[
                {
                  title: "User Account & Access Management",
                  icon: <FaUsers size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Password resets, account lockouts, user creation, and permission changes."
                },
                {
                  title: "Hardware & Peripheral Support",
                  icon: <FaServer size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Assistance with desktops, laptops, printers, scanners, and other peripherals."
                },
                {
                  title: "Software & Application Support",
                  icon: <FaHeadset size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Troubleshooting issues with productivity tools, business applications, and operating systems."
                },
                {
                  title: "Network Connectivity Support",
                  icon: <FaRocket size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Resolving basic issues related to Wi-Fi, VPN, remote access, and LAN/WAN connectivity."
                },
                {
                  title: "Email & Communication Tools Support",
                  icon: <FaCheckCircle size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Setup and troubleshooting of Outlook, Microsoft Teams, Zoom, and other collaboration tools."
                },
                {
                  title: "Workstation Setup & Maintenance",
                  icon: <FaLock size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Assisting users with initial setup, software installation, updates, and basic configurations."
                },
                {
                  title: "IT Asset Logging & Incident Tracking",
                  icon: <FaServer size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Maintain records of support activities, devices, and issue trends."
                }
              ].map((solution, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                      <div className="mb-3">{solution.icon}</div>
                      <h5 style={{ color: "var(--ct-color)" }}>{solution.title}</h5>
                      <p className="text-muted mb-0">{solution.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      case 'faqs':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Frequently Asked Questions</h2>
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
                        overflow: "hidden",
                      }}>
                      <Accordion.Header>
                        <div className="faq-question">
                          <span className="question-icon" style={{ paddingRight: "5px" }}>Q</span>
                          <span className="question-text" style={{ fontWeight: "600" }}>{faq.question}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body style={{ backgroundColor: "#f9fbff" }}>
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
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="container-fluid p-0">
      <PageBanner
        title="IT Help Desk Support"
        subtitle="Quick, friendly, and effective support to keep your business productive."
        backgroundImage={backgroundImage}
        background="#0a1033"
        currentpage="IT Help Desk Support"
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
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="helpDeskTabs" role="tablist">
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
                  <div className="tab-content" id="helpDeskTabsContent">
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
      <section style={{ backgroundColor: "var(--tt-color)", padding: "50px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white mb-3">
                  Boost Productivity with Reliable IT Support!
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-white-50 mb-0">
                  Contact us to see how our IT Help Desk can keep your team focused and your systems running smoothly.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to="/contact" className="btn" style={{
                  backgroundColor: "var(--primary-color)",
                  color: "#fff",
                  padding: "12px 25px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}>
                  Request Support <FaArrowRight style={{ marginLeft: "8px" }} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITHelpDeskSupport;