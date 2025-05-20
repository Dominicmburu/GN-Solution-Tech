import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaShieldAlt, 
  FaCloud, 
  FaServer, 
  FaLock, 
  FaNetworkWired, 
  FaUsers, 
  FaArrowRight, 
  FaCogs, 
  FaSyncAlt, 
  FaExclamationTriangle,
  FaDatabase,
  FaUserShield,
  FaInfoCircle,
  FaTools,
  FaAward,
  FaQuestionCircle,
  FaCheckCircle
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import '../assets/css/cybersecurity.css';
import backgroundImage from "../assets/cybersecurity.jpeg";

// Intro Section Component
const CybersecurityIntro = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-divider"></div>
            <h1 className="main-title">
              What is Cybersecurity as a Service?
            </h1>
          </div>
          <div className="col-lg-7">
            <p className="intro-text">
              Cybersecurity as a Service (CSaaS) is a subscription-based model that delivers comprehensive, scalable, and proactive cybersecurity solutions. 
              Combining advanced technology, expert analysis, and 24/7 monitoring, CSaaS protects your digital assets from threats, ensures compliance, and reduces the need for an in-house security team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CybersecurityAsAServicePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'features', label: 'Key Features', icon: <FaCheckCircle /> },
    { id: 'benefits', label: 'Benefits', icon: <FaAward /> },
    { id: 'solutions', label: 'Solutions', icon: <FaCogs /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> }
  ];

  const faqs = [
    { 
      question: "What is Cybersecurity as a Service (CSaaS)?", 
      answer: "CSaaS is a subscription-based model that delivers a range of cybersecurity services—such as threat monitoring, vulnerability assessments, and incident response—without the need to build an in-house security team."
    },
    { 
      question: "Do I need cybersecurity if I'm a small business?", 
      answer: "Absolutely. Small businesses are often targeted due to perceived weak security. Our services are scalable and designed to fit businesses of any size."
    },
    { 
      question: "How quickly can you respond to threats?", 
      answer: "Our SOC (Security Operations Center) operates 24/7 with SLA-backed incident response times, ensuring fast containment and resolution."
    },
    { 
      question: "Will your services help with compliance?", 
      answer: "Yes, we help clients achieve and maintain compliance with regulatory standards through technical controls, documentation, and audits."
    },
    { 
      question: "How do you charge for CSaaS?", 
      answer: "Pricing is based on the number of assets/users, service tiers, and optional add-ons. We offer flexible monthly or annual subscriptions."
    },
    { 
      question: "Is my data safe with you?", 
      answer: "Yes. We follow strict data protection protocols, encrypt all client data, and comply with privacy laws such as GDPR."
    },
    { 
      question: "Can I customize the services I need?", 
      answer: "Yes, we offer modular services. You can choose only what's relevant to your business risk profile and goals."
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <div className="intro-box">
              <CybersecurityIntro />
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Why Choose Us</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { 
                  title: "Proven Expertise", 
                  desc: "A team of certified cybersecurity professionals with real-world experience across diverse industries.",
                  icon: <FaUserShield size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "End-to-End Coverage", 
                  desc: "From risk assessments to active defense, we cover every aspect of your cybersecurity journey.",
                  icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Custom Solutions", 
                  desc: "Tailored strategies that align with your specific risks and operations.",
                  icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Integrated Support", 
                  desc: "Seamless coordination between security, IT, and business teams for effective protection.",
                  icon: <FaUsers size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Transparent Reporting", 
                  desc: "Clear, actionable insights into your threat landscape and security posture.",
                  icon: <FaDatabase size={40} style={{ color: "var(--primary-color)" }} />
                }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
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
              <div className="timeline-connector"></div>
              {[
                { step: "Assess Risks", desc: "Identify vulnerabilities and threats in your environment", icon: <FaExclamationTriangle size={24} /> },
                { step: "Select Services", desc: "Choose tailored cybersecurity solutions", icon: <FaCogs size={24} /> },
                { step: "Deploy Solutions", desc: "Implement security tools with minimal disruption", icon: <FaServer size={24} /> },
                { step: "Monitor & Respond", desc: "24/7 threat detection and incident response", icon: <FaShieldAlt size={24} /> },
                { step: "Review & Optimize", desc: "Continuous improvement of security posture", icon: <FaSyncAlt size={24} /> }
              ].map((step, index) => (
                <motion.div
                  className={`d-flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
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
      case 'features':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Features</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { 
                  title: "24/7 Threat Monitoring", 
                  desc: "Real-time monitoring and rapid incident response to neutralize threats.",
                  icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Cloud & On-Premises Security", 
                  desc: "End-to-end protection across hybrid environments.",
                  icon: <FaCloud size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Advanced Threat Intelligence", 
                  desc: "Actionable insights from global threat feeds.",
                  icon: <FaNetworkWired size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Compliance Management", 
                  desc: "Support for GDPR, ISO 27001, HIPAA, and PCI-DSS.",
                  icon: <FaLock size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Scalable Services", 
                  desc: "Flexible plans tailored to your size and risk profile.",
                  icon: <FaServer size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Security Automation", 
                  desc: "Integration with SOAR tools for faster incident mitigation.",
                  icon: <FaSyncAlt size={40} style={{ color: "var(--primary-color)" }} />
                }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="text-center mb-3">{feature.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Technology Stack</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="platform-stack">
              {[
                { layer: "Threat Detection", desc: "SIEM, Behavioral Analytics, ML", icon: <FaExclamationTriangle style={{ color: "var(--primary-color)" }} /> },
                { layer: "Network Security", desc: "Firewalls, IDS/IPS", icon: <FaNetworkWired style={{ color: "var(--primary-color)" }} /> },
                { layer: "Endpoint Protection", desc: "Antivirus, EDR Solutions", icon: <FaServer style={{ color: "var(--primary-color)" }} /> },
                { layer: "Cloud Security", desc: "CSPM, IAM, Encryption", icon: <FaCloud style={{ color: "var(--primary-color)" }} /> },
                { layer: "Incident Response", desc: "SOAR, Forensics Tools", icon: <FaSyncAlt style={{ color: "var(--primary-color)" }} /> }
              ].map((layer, index) => (
                <motion.div className="stack-layer" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="stack-icon">{layer.icon}</div>
                  <div className="stack-content">
                    <h5 style={{ color: "var(--ct-color)" }}>{layer.layer}</h5>
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
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Benefits</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { 
                  title: "Reduced Risk Exposure", 
                  desc: "Identify and mitigate vulnerabilities before they're exploited.",
                  icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Lower Operational Costs", 
                  desc: "Avoid the cost of building in-house security teams.",
                  icon: <FaDatabase size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Business Continuity", 
                  desc: "Minimize disruption with rapid detection and response.",
                  icon: <FaSyncAlt size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Improved Compliance", 
                  desc: "Simplify meeting regulatory requirements.",
                  icon: <FaLock size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Enhanced Trust", 
                  desc: "Show clients you prioritize data protection.",
                  icon: <FaUsers size={40} style={{ color: "var(--primary-color)" }} />
                }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="text-center mb-3">{benefit.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{benefit.title}</h5>
                    <p className="text-center">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Success Stories</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { 
                  company: "Financial Institution", 
                  result: "Reduced cyber incidents by 80% with 24/7 monitoring and MDR services."
                },
                { 
                  company: "Healthcare Provider", 
                  result: "Achieved HIPAA compliance in 3 months with our compliance management solutions."
                },
                { 
                  company: "Retail Chain", 
                  result: "Prevented ransomware attacks through endpoint security and employee training."
                }
              ].map((story, index) => (
                <motion.div className="col-lg-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <h5 style={{ color: "var(--ct-color)" }}>{story.company}</h5>
                    <p>{story.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="metrics-banner mt-5">
              <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">ROI of Cybersecurity as a Service</h3>
              <div className="d-flex justify-content-center mb-5">
                <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
              </div>
              <div className="row">
                {[
                  { value: "90%", label: "Threat Detection Rate" },
                  { value: "50%", label: "Reduction in Incident Costs" },
                  { value: "70%", label: "Faster Compliance" },
                  { value: "85%", label: "Improved Security Posture" }
                ].map((metric, index) => (
                  <motion.div 
                    className="col-md-3 mb-4" 
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="card border-0 p-4 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                      <div className="metric-value" style={{ color: "var(--primary-color)", fontSize: "2rem", fontWeight: "bold" }}>{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Core Cybersecurity Solutions</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { 
                  title: "Penetration Testing", 
                  desc: "Simulate real-world attacks to identify security gaps.",
                  icon: <FaExclamationTriangle size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Vulnerability Management", 
                  desc: "Continuous identification and remediation of vulnerabilities.",
                  icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Security Awareness Training", 
                  desc: "Empower employees to recognize cyber threats.",
                  icon: <FaUsers size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Managed Detection & Response", 
                  desc: "24/7 threat detection and response using advanced analytics.",
                  icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Firewall & Endpoint Security", 
                  desc: "Enterprise-grade protection at the perimeter and device level.",
                  icon: <FaNetworkWired size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "SIEM Solutions", 
                  desc: "Centralized logging and real-time alerting for security events.",
                  icon: <FaDatabase size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Incident Response & Forensics", 
                  desc: "Contain breaches and investigate to prevent recurrence.",
                  icon: <FaSyncAlt size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Cloud Security Posture Management", 
                  desc: "Secure public cloud environments with policy enforcement.",
                  icon: <FaCloud size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Disaster Recovery Planning", 
                  desc: "Ensure business continuity with robust DR solutions.",
                  icon: <FaServer size={40} style={{ color: "var(--primary-color)" }} />
                },
                { 
                  title: "Network Security Hardening", 
                  desc: "Secure your network against malicious traffic.",
                  icon: <FaLock size={40} style={{ color: "var(--primary-color)" }} />
                }
              ].map((solution, index) => (
                <motion.div 
                  className="col-md-4 mb-4" 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="card border-0 p-4" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="text-center mb-3">{solution.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }}>{solution.title}</h5>
                    <p>{solution.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'faqs':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="faqs-container">
              {faqs.map((faq, index) => (
                <motion.div 
                  className="faq-item" 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Accordion>
                    <Accordion.Item eventKey={index.toString()} style={{
                      marginBottom: "15px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: "1px solid rgba(var(--primary-color-rgb), 0.2)"
                    }}>
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
            <div className="mt-5">
              <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Resources to Learn More</h3>
              <div className="d-flex justify-content-center mb-5">
                <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Documentation",
                    items: ["Cybersecurity Best Practices", "Compliance Guides", "Threat Intelligence Reports"]
                  },
                  {
                    title: "Training",
                    items: ["Security Awareness Workshops", "Incident Response Training", "Cloud Security Courses"]
                  },
                  {
                    title: "Community",
                    items: ["Cybersecurity Forums", "OWASP Community", "SANS Institute Resources"]
                  }
                ].map((resource, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="card border-0 p-4" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                      <h5 style={{ color: "var(--ct-color)" }}>{resource.title}</h5>
                      <ul className="list-unstyled">
                        {resource.items.map((item, i) => (
                          <li key={i}><FaArrowRight style={{ color: "var(--primary-color)", marginRight: "8px" }} /> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div 
        className="hero-section text-white d-flex flex-column align-items-center justify-content-center"
        style={{ 
          background: `linear-gradient(rgba(0, 0, 30, 0.7), rgba(0, 0, 30, 0.8)), url(${backgroundImage}) center/cover no-repeat`,
          height: "60vh",
          position: "relative",
          marginBottom: "-20px"
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cybersecurity as a Service
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Comprehensive protection for your digital assets
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/contact" className="btn" style={{
            backgroundColor: "var(--primary-color)",
            color: "#fff",
            padding: "12px 25px",
            borderRadius: "30px",
            fontWeight: "600",
            transition: "all 0.3s ease"
          }}>
            Get Started <FaArrowRight style={{ marginLeft: "8px" }} />
          </Link>
        </motion.div>
      </div>
      
      {/* Tabs Section */}
      <section className="tabs-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div 
                className="text-center mb-5"
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
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="csaasTabs" role="tablist">
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
                          <i className="tab-icon" style={{ color: "var(--primary-color)" }}>{tab.icon}</i>
                          <span style={{ color: "var(--tt-color)" }}>{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <div className="tab-content-container">
                  <div className="tab-content" id="csaasTabsContent">
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

      {/* Call to Action */}
      <section style={{
        backgroundColor: "var(--tt-color)",
        padding: "50px 0",
        marginTop: "40px"
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <h3 className="text-white mb-3">Secure Your Business Today!</h3>
              <p className="text-white-50 mb-0">Contact us to learn how Cybersecurity as a Service can protect your organization.</p>
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
                Request a Demo <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityAsAServicePage;