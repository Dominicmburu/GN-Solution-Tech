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
import backgroundImage from "../assets/cybersecurity.jpeg";


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
            <h2 className="text-center text-primary mb-4">What is Cybersecurity as a Service?</h2>
            <div className="row">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4 mb-5 gradient-card">
                  <p className="text-center text-light fw-bold mb-0">
                    Cybersecurity as a Service (CSaaS) is a comprehensive, scalable, and proactive approach to securing your digital assets. 
                    We combine advanced technology, expert analysis, and strategic advisory services to deliver continuous protection tailored to your organization's needs.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-center text-primary mb-4">Why Choose Us</h3>
            <div className="row">
              {[
                { 
                  title: "Proven Expertise", 
                  desc: "A team of certified cybersecurity professionals with real-world experience across diverse industries.",
                  icon: <FaUserShield size={40} className="feature-icon" />
                },
                { 
                  title: "End-to-End Coverage", 
                  desc: "From risk assessments to active defense, we cover every aspect of your cybersecurity journey.",
                  icon: <FaShieldAlt size={40} className="feature-icon" />
                },
                { 
                  title: "Custom Solutions", 
                  desc: "Tailored strategies that align with your specific risks and operations.",
                  icon: <FaCogs size={40} className="feature-icon" />
                },
                { 
                  title: "Integrated Support", 
                  desc: "Seamless coordination between security, IT, and business teams for effective protection.",
                  icon: <FaUsers size={40} className="feature-icon" />
                },
                { 
                  title: "Transparent Reporting", 
                  desc: "Clear, actionable insights into your threat landscape and security posture.",
                  icon: <FaDatabase size={40} className="feature-icon" />
                }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 feature-card">
                    <div className="text-center mb-3">
                      {feature.icon}
                    </div>
                    <h5 className="text-center">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Implementation Process</h3>
            <div className="implementation-timeline">
              {[
                { step: "Assess Risks", icon: <FaExclamationTriangle size={24} /> }, 
                { step: "Select Services", icon: <FaCogs size={24} /> }, 
                { step: "Deploy Solutions", icon: <FaServer size={24} /> }, 
                { step: "Monitor & Respond", icon: <FaShieldAlt size={24} /> },
                { step: "Review & Optimize", icon: <FaSyncAlt size={24} /> }
              ].map((step, index) => (
                <motion.div 
                  className="timeline-item" 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="timeline-icon">
                    {step.icon}
                  </div>
                  <div className="timeline-content">
                    <h5>{step.step}</h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'features':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Key Features</h2>
            <div className="row">
              {[
                { 
                  title: "24/7 Threat Monitoring", 
                  desc: "Real-time monitoring and rapid incident response to neutralize threats.",
                  icon: <FaShieldAlt size={40} className="feature-icon" />
                },
                { 
                  title: "Cloud & On-Premises Security", 
                  desc: "End-to-end protection across hybrid environments.",
                  icon: <FaCloud size={40} className="feature-icon" />
                },
                { 
                  title: "Advanced Threat Intelligence", 
                  desc: "Actionable insights from global threat feeds.",
                  icon: <FaNetworkWired size={40} className="feature-icon" />
                },
                { 
                  title: "Compliance Management", 
                  desc: "Support for GDPR, ISO 27001, HIPAA, and PCI-DSS.",
                  icon: <FaLock size={40} className="feature-icon" />
                },
                { 
                  title: "Scalable Services", 
                  desc: "Flexible plans tailored to your size and risk profile.",
                  icon: <FaServer size={40} className="feature-icon" />
                },
                { 
                  title: "Security Automation", 
                  desc: "Integration with SOAR tools for faster incident mitigation.",
                  icon: <FaSyncAlt size={40} className="feature-icon" />
                }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 feature-card">
                    <div className="text-center mb-3">
                      {feature.icon}
                    </div>
                    <h5 className="text-center">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Technology Stack</h3>
            <div className="platform-stack">
              {[
                { layer: "Threat Detection", desc: "SIEM, Behavioral Analytics, ML", icon: <FaExclamationTriangle /> },
                { layer: "Network Security", desc: "Firewalls, IDS/IPS", icon: <FaNetworkWired /> },
                { layer: "Endpoint Protection", desc: "Antivirus, EDR Solutions", icon: <FaServer /> },
                { layer: "Cloud Security", desc: "CSPM, IAM, Encryption", icon: <FaCloud /> },
                { layer: "Incident Response", desc: "SOAR, Forensics Tools", icon: <FaSyncAlt /> }
              ].map((layer, index) => (
                <motion.div className="stack-layer" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="stack-icon">{layer.icon}</div>
                  <div className="stack-content">
                    <h5>{layer.layer}</h5>
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
                { 
                  title: "Reduced Risk Exposure", 
                  desc: "Identify and mitigate vulnerabilities before they're exploited.",
                  icon: <FaShieldAlt size={40} className="benefit-icon" />
                },
                { 
                  title: "Lower Operational Costs", 
                  desc: "Avoid the cost of building in-house security teams.",
                  icon: <FaDatabase size={40} className="benefit-icon" />
                },
                { 
                  title: "Business Continuity", 
                  desc: "Minimize disruption with rapid detection and response.",
                  icon: <FaSyncAlt size={40} className="benefit-icon" />
                },
                { 
                  title: "Improved Compliance", 
                  desc: "Simplify meeting regulatory requirements.",
                  icon: <FaLock size={40} className="benefit-icon" />
                },
                { 
                  title: "Enhanced Trust", 
                  desc: "Show clients you prioritize data protection.",
                  icon: <FaUsers size={40} className="benefit-icon" />
                }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 benefit-card">
                    <div className="benefit-icon-container">
                      {benefit.icon}
                    </div>
                    <h5 className="text-center">{benefit.title}</h5>
                    <p className="text-center">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Success Stories</h3>
            <div className="success-stories">
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
                <motion.div className="story-card" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="story-content">
                    <h5>{story.company}</h5>
                    <p>{story.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="metrics-banner mt-5">
              <h3 className="text-center mb-4">ROI of Cybersecurity as a Service</h3>
              <div className="metrics-container">
                {[
                  { value: "90%", label: "Threat Detection Rate" },
                  { value: "50%", label: "Reduction in Incident Costs" },
                  { value: "70%", label: "Faster Compliance" },
                  { value: "85%", label: "Improved Security Posture" }
                ].map((metric, index) => (
                  <motion.div 
                    className="metric" 
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Core Cybersecurity Solutions</h2>
            <div className="solutions-grid">
              {[
                { 
                  title: "Penetration Testing", 
                  desc: "Simulate real-world attacks to identify security gaps.",
                  icon: <FaExclamationTriangle size={40} />
                },
                { 
                  title: "Vulnerability Management", 
                  desc: "Continuous identification and remediation of vulnerabilities.",
                  icon: <FaCogs size={40} />
                },
                { 
                  title: "Security Awareness Training", 
                  desc: "Empower employees to recognize cyber threats.",
                  icon: <FaUsers size={40} />
                },
                { 
                  title: "Managed Detection & Response", 
                  desc: "24/7 threat detection and response using advanced analytics.",
                  icon: <FaShieldAlt size={40} />
                },
                { 
                  title: "Firewall & Endpoint Security", 
                  desc: "Enterprise-grade protection at the perimeter and device level.",
                  icon: <FaNetworkWired size={40} />
                },
                { 
                  title: "SIEM Solutions", 
                  desc: "Centralized logging and real-time alerting for security events.",
                  icon: <FaDatabase size={40} />
                },
                { 
                  title: "Incident Response & Forensics", 
                  desc: "Contain breaches and investigate to prevent recurrence.",
                  icon: <FaSyncAlt size={40} />
                },
                { 
                  title: "Cloud Security Posture Management", 
                  desc: "Secure public cloud environments with policy enforcement.",
                  icon: <FaCloud size={40} />
                },
                { 
                  title: "Disaster Recovery Planning", 
                  desc: "Ensure business continuity with robust DR solutions.",
                  icon: <FaServer size={40} />
                },
                { 
                  title: "Network Security Hardening", 
                  desc: "Secure your network against malicious traffic.",
                  icon: <FaLock size={40} />
                }
              ].map((solution, index) => (
                <motion.div 
                  className="solution-card" 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="solution-icon">
                    {solution.icon}
                  </div>
                  <h5>{solution.title}</h5>
                  <p>{solution.desc}</p>
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
                <motion.div 
                  className="faq-item" 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
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
            
            <div className="mt-5">
              <h3 className="text-center text-primary mb-4">Resources to Learn More</h3>
              <div className="resources-grid">
                <div className="resource-card">
                  <h5>Documentation</h5>
                  <ul className="list-unstyled">
                    <li><FaArrowRight className="me-2 text-primary" /> Cybersecurity Best Practices</li>
                    <li><FaArrowRight className="me-2 text-primary" /> Compliance Guides</li>
                    <li><FaArrowRight className="me-2 text-primary" /> Threat Intelligence Reports</li>
                  </ul>
                </div>
                <div className="resource-card">
                  <h5>Training</h5>
                  <ul className="list-unstyled">
                    <li><FaArrowRight className="me-2 text-primary" /> Security Awareness Workshops</li>
                    <li><FaArrowRight className="me-2 text-primary" /> Incident Response Training</li>
                    <li><FaArrowRight className="me-2 text-primary" /> Cloud Security Courses</li>
                  </ul>
                </div>
                <div className="resource-card">
                  <h5>Community</h5>
                  <ul className="list-unstyled">
                    <li><FaArrowRight className="me-2 text-primary" /> Cybersecurity Forums</li>
                    <li><FaArrowRight className="me-2 text-primary" /> OWASP Community</li>
                    <li><FaArrowRight className="me-2 text-primary" /> SANS Institute Resources</li>
                  </ul>
                </div>
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
          <Link to="/contact" className="cta-button">
            Get Started
            <FaArrowRight className="ms-2" />
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
                {/* Tab navigation */}
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
                        >
                          {tab.icon}
                          <span className="tab-text ms-2">{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Tab content */}
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
      <div className="cta-section">
        <div className="container">
          <h3>Secure Your Business Today!</h3>
          <p>Contact us to learn how Cybersecurity as a Service can protect your organization.</p>
          <Link to="/contact" className="cta-button-secondary">
            Request a Demo
            <FaArrowRight className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityAsAServicePage;