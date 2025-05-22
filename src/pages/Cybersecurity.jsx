import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from '../components/common/PageBanner';

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
  FaSearch,
  FaUserShield,
  FaInfoCircle,
  FaTools,
  FaAward,
  FaQuestionCircle,
  FaCheckCircle,
  FaTrophy,
  FaNotesMedical,
  FaStore,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import '../assets/css/cybersecurity.css';
import backgroundImage from "../assets/cybersecurity.jpeg";
import "../assets/css/cybersecurity.css";

const CybersecurityAsAServicePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
    const [activeKey, setActiveKey] = useState(null);
  

    const handleAccordionChange = (eventKey) => {
    setActiveKey(eventKey);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'whychooseus', label: 'Why Choose Us', icon: <FaTrophy /> },
    { id: 'benefits', label: 'Key Benefits', icon: <FaAward /> },
    { id: 'solutions', label: 'Key Solutions', icon: <FaCogs /> },
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

  const CybersecurityServicesIntro = () => {
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
               In today’s digital-first world, organizations face growing threats from cybercriminals targeting critical systems, data, and infrastructure. Cybersecurity is no longer optional—it’s essential. At gnsolutions.eu, we provide Cybersecurity as a Service (CSaaS), a comprehensive, scalable, and proactive approach to securing your digital assets. Our services are designed to protect your business against ever-evolving threats, ensuring confidentiality, integrity, and availability of your data and systems.
We combine advanced technology, expert analysis, and strategic advisory services to deliver continuous protection tailored to your organization's needs.
               </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {

      case 'overview':
        return (
          <div className="container py-5">
            <div className="intro-box">
              <CybersecurityServicesIntro />
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Features</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                {
                  title: "24/7 Threat Monitoring",
                  desc: "Real-time monitoring and rapid incident response to detect and neutralize threats before they escalate.",
                  icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Cloud & On-Premises Security",
                  desc: "End-to-end protection across hybrid environments, including public/private clouds and on-premise infrastructure.",
                  icon: <FaCloud size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Advanced Threat Intelligence",
                  desc: "Stay ahead of emerging threats with actionable insights and threat feeds from global sources.",
                  icon: <FaNetworkWired size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Compliance Management",
                  desc: "Support for regulatory standards like GDPR, ISO 27001, HIPAA, and PCI-DSS.",
                  icon: <FaLock size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Scalable & Managed Services",
                  desc: "Flexible plans tailored to your size and risk profile, with optional add-ons for extended security needs.",
                  icon: <FaUsers size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Security Automation",
                  desc: "Integration with SOAR tools for faster detection, triage, and mitigation of security incidents.",
                  icon: <FaDatabase size={40} style={{ color: "var(--primary-color)" }} />
                }
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
                  step: "Risk Assessment",
                  desc: "Comprehensive evaluation of your security posture",
                  icon: <FaSearch size={24} />,
                  nodeIcon: <FaSearch size={20} />
                },
                {
                  step: "Strategy Development",
                  desc: "Custom security architecture tailored to your needs",
                  icon: <FaTools size={24} />,
                  nodeIcon: <FaTools size={20} />
                },
                {
                  step: "Implementation",
                  desc: "Deployment of security technologies and controls",
                  icon: <FaShieldAlt size={24} />,
                  nodeIcon: <FaShieldAlt size={20} />
                },
                {
                  step: "Monitoring & Response",
                  desc: "24/7 proactive oversight and incident management",
                  icon: <FaNetworkWired size={24} />,
                  nodeIcon: <FaNetworkWired size={20} />
                },
                {
                  step: "Continuous Improvement",
                  desc: "Regular assessment and security enhancement",
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
}
`}</style>
          </div>
        );
      case 'whychooseus':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Why Choose Us</h2>
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
                  desc: "Every business is unique. We deliver tailored strategies that align with your specific risks and operations.",
                  icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Integrated Support",
                  desc: "Seamless coordination between security, IT, and business teams for faster, more effective protection.",
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

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Our Security Approach</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <motion.div
                  className="card border-0 p-4 h-100"
                  style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 style={{ color: "var(--ct-color)" }}>Proactive Security</h4>
                  <p>
                    We take a proactive approach to security, constantly monitoring for threats and vulnerabilities before they can be exploited. Our team works to stay ahead of attackers by implementing preventative measures and security controls tailored to your business needs.
                  </p>
                  <ul className="list-unstyled">
                    <li><FaCheckCircle style={{ color: "var(--primary-color)", marginRight: "8px" }} /> Continuous vulnerability scanning</li>
                    <li><FaCheckCircle style={{ color: "var(--primary-color)", marginRight: "8px" }} /> Threat intelligence integration</li>
                    <li><FaCheckCircle style={{ color: "var(--primary-color)", marginRight: "8px" }} /> Security posture assessment</li>
                  </ul>
                </motion.div>
              </div>
              <div className="col-md-6 mb-4">
                <motion.div
                  className="card border-0 p-4 h-100"
                  style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 style={{ color: "var(--ct-color)" }}>Strategic Partnership</h4>
                  <p>
                    We believe cybersecurity is a partnership. We work closely with your team to understand your business goals, challenges, and specific security needs. This collaborative approach ensures our security solutions align with your business strategy.
                  </p>
                  <ul className="list-unstyled">
                    <li><FaCheckCircle style={{ color: "var(--primary-color)", marginRight: "8px" }} /> Regular security reviews</li>
                    <li><FaCheckCircle style={{ color: "var(--primary-color)", marginRight: "8px" }} /> Business-aligned security roadmaps</li>
                    <li><FaCheckCircle style={{ color: "var(--primary-color)", marginRight: "8px" }} /> Knowledge transfer and training</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-4 mt-5">Our Team's Expertise</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div
              className="card border-0 p-4 mb-5"
              style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="row">
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="text-center">
                    <div style={{
                      backgroundColor: "var(--primary-color)",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px"
                    }}>
                      <FaUserShield size={36} color="#fff" />
                    </div>
                    <h5 style={{ color: "var(--ct-color)" }}>Certified Experts</h5>
                    <p>Our team holds industry-leading certifications including CISSP, CEH, CISM, and CompTIA Security+</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="text-center">
                    <div style={{
                      backgroundColor: "var(--primary-color)",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px"
                    }}>
                      <FaTools size={36} color="#fff" />
                    </div>
                    <h5 style={{ color: "var(--ct-color)" }}>Industry Experience</h5>
                    <p>Extensive experience securing environments across financial services, healthcare, retail, and manufacturing</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div style={{
                      backgroundColor: "var(--primary-color)",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px"
                    }}>
                      <FaSyncAlt size={36} color="#fff" />
                    </div>
                    <h5 style={{ color: "var(--ct-color)" }}>Continuous Learning</h5>
                    <p>Our team stays updated with the latest threats, technologies, and security practices through ongoing education</p>
                  </div>
                </div>
              </div>
            </motion.div>

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
                  result: "Reduced cyber incidents by 80% with 24/7 monitoring and MDR services.",
                  icon: <FaShieldAlt size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #f08b0a, #f08b0a)"
                },
                {
                  company: "Healthcare Provider",
                  result: "Achieved HIPAA compliance in 3 months with our compliance management solutions.",
                  icon: <FaNotesMedical size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #301934, #301934)"
                },
                {
                  company: "Retail Chain",
                  result: "Prevented ransomware attacks through endpoint security and employee training.",
                  icon: <FaStore size={36} style={{ color: "#fff" }} />,
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
                  </motion.div>
                </div>
              ))
              }
            </div >

            <div className="metrics-banner mt-5">
              <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">ROI of Cybersecurity as a Service</h3>
              <div className="d-flex justify-content-center mb-5">
                <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
              </div>
              <div className="row">
                {[
                  { value: "90%", label: "Threat Detection Rate", image: "https://i.pinimg.com/736x/e5/90/e3/e590e3ed03eafc3c8816b34dcd21f70b.jpg", alt: "Threat Detection" },
                  { value: "50%", label: "Reduction in Incident Costs", image: "https://i.pinimg.com/736x/37/b8/69/37b86959ba823a2d8c06b1eb8ba76f5c.jpg", alt: "Cost Reduction" },
                  { value: "70%", label: "Faster Compliance", image: "https://i.pinimg.com/736x/0f/47/9b/0f479b6baa1f2129ae4566b7ddbb4445.jpg", alt: "Compliance Speed" },
                  { value: "85%", label: "Improved Security Posture", image: "https://i.pinimg.com/736x/cd/45/2e/cd452efc1cafe7c3d9eaca4ecf0ce375.jpg", alt: "Security Improvement" }
                ].map((metric, index) => (
                  <motion.div
                    className="col-md-3 col-sm-6 mb-4"
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="card border-0 pb-4 text-center h-100 position-relative overflow-hidden"
                      style={{
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                        border: "1px solid rgba(0,0,0,0.05)",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                        transition: "all 0.3s ease"
                      }}
                    >
                      {/* Background accent */}
                      <div className="position-absolute top-0 start-0 w-100" style={{
                        height: "4px",
                        background: "linear-gradient(90deg, var(--primary-color) 0%, rgba(var(--primary-color-rgb, 64, 36, 86), 0.6) 100%)"
                      }}></div>

                      {/* Metric circle background */}
                      <div className="position-absolute" style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(var(--primary-color-rgb, 64, 36, 86), 0.05) 0%, rgba(var(--primary-color-rgb, 64, 36, 86), 0.1) 100%)",
                        zIndex: "1"
                      }}></div>

                      <div className="position-relative" style={{ zIndex: "2" }}>
                        {/* Image */}
                        <div className="mb-3">
                          <img
                            src={metric.image}
                            alt={metric.alt}
                            style={{
                              width: "100%",
                              height: "250px",
                              objectFit: "cover",
                              borderRadius: "8px",
                              // border: "2px solid var(--primary-color)",
                              opacity: "0.9"
                            }}
                          />
                        </div>

                        <div className="metric-value mb-2" style={{
                          color: "var(--primary-color)",
                          fontSize: "3rem",
                          fontWeight: "800",
                          lineHeight: "1"
                        }}>
                          {metric.value}
                        </div>
                        <div className="metric-label" style={{
                          color: "var(--ct-color)",
                          fontSize: "0.95rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          lineHeight: "1.3"
                        }}>
                          {metric.label}
                        </div>
                      </div>

                      <div className="position-absolute bottom-0 start-50 translate-middle-x" style={{
                        width: "30px",
                        height: "2px",
                        backgroundColor: "var(--primary-color)",
                        opacity: "0.6"
                      }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <style jsx>{`
    @media (max-width: 768px) {
      .metric-value {
        font-size: 2.5rem !important;
      }
      .metric-label {
        font-size: 0.85rem !important;
      }
    }
    
    @media (max-width: 576px) {
      .col-sm-6 {
        margin-bottom: 1.5rem;
      }
    }
  `}</style>
            </div>
          </div >
        );

      case 'solutions':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Core Cybersecurity Solutions</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="solutions-grid">
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
                  className="solution-card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}
                
                >
                    <div className="text-center mb-3">{solution.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }}>{solution.title}</h5>
                    <p>{solution.desc}</p>
                </motion.div>
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
                    }}>
                      <Accordion.Header>
                        <div className="faq-question">
                          <span className="question-icon" style={{ paddingRight: "5px" }}>Q</span>
                          <span className="question-text" style={{ color: "var(--ct-color)", fontWeight: "600" }}>{faq.question}</span>
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
      <PageBanner
        title="Cybersecurity as a Service"
        subtitle="Comprehensive protection for your digital assets"
        backgroundImage="https://i.pinimg.com/736x/c9/8f/d7/c98fd754b643148cdd249734fce4f0dd.jpg"
        // backgroundImage={backgroundImage}
        background="#0a1033"
        currentpage="Cybersecurity as a Service"
      />

      {/* Tabs Section */}
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
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="csaasTabs" role="tablist">
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
                          <span style={{ color: "var(--tt-color)" }}>{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tab content */}
                <div className="tab-content-container mt-4">
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