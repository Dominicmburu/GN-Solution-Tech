import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight, FaCheck, FaQuestionCircle, FaAward, FaCheckCircle, FaInfoCircle, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import "../assets/css/network.css";
import "../assets/css/TabsSection.css";
import backgroundImage from "../assets/network-as-code.webp";

// Intro Section Component
const NetworkAsCodeIntro = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-divider"></div>
            <h1 className="main-title">
              What is Network as Code?
            </h1>
          </div>
          <div className="col-lg-7">
            <p className="intro-text">
              Network as Code (NaC) transforms network management by applying DevOps principles to networking. Using code to define, deploy, and manage network configurations, NaC enables automation, version control, and testing for LAN, WAN, SD-WAN, firewalls, VPNs, and cloud-native networks. At GN Solutions, our NaC approach delivers agility, reliability, and consistency across cloud, hybrid, or on-prem environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const NetworkAsCode = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'technologies', label: 'Technologies', icon: <FaTools /> },
    { id: 'benefits', label: 'Benefits', icon: <FaAward /> },
    { id: 'solutions', label: 'Solutions', icon: <FaRocket /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> }
  ];

  const faqs = [
    { 
      question: "Is Network as Code suitable for small and medium businesses?", 
      answer: "Yes. NaC can be scaled to fit the needs of SMBs, offering cost-effective automation and enhanced reliability without enterprise-level complexity." 
    },
    { 
      question: "What kind of networks can be automated with NaC?", 
      answer: "LAN, WAN, SD-WAN, data center networks, firewalls, VPNs, and even cloud-native networking — all can be managed with NaC." 
    },
    { 
      question: "What platform tools do you use to implement NaC?", 
      answer: "We use a combination of open-source and commercial tools, such as Ansible, Terraform, Python, NETCONF/RESTCONF, Jenkins, GitHub, Kafka, cloud-native SDKs, and more — across vendors like Cisco, Juniper, Arista, Palo Alto, etc." 
    },
    { 
      question: "How long does a typical NaC implementation take?", 
      answer: "From weeks to a few months depending on scope. We follow a phased rollout — starting with pilot automation and scaling gradually." 
    },
    { 
      question: "Will you help train our internal team?", 
      answer: "Yes. We provide complete enablement: workshops, documentation, playbooks, and hands-on training for your teams." 
    },
    { 
      question: "What's the difference between Network as Code and traditional network automation?", 
      answer: "Traditional automation may use scripts or tools to push changes, but NaC introduces version control, testing, modular code, and repeatable deployments — just like in software development." 
    },
    { 
      question: "Do I need to replace my current infrastructure to use Network as Code?", 
      answer: "Not at all. We work with your existing hardware and software platforms, integrating NaC practices around them." 
    },
    { 
      question: "Is Network as Code secure?", 
      answer: "Yes — in fact, it enhances security by removing manual intervention, enforcing policy compliance, and offering auditable change logs." 
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <div className="intro-box">
              <NetworkAsCodeIntro />
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Why Choose Us</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { 
                  title: "Vendor-Neutral Expertise", 
                  desc: "Our solutions are platform-agnostic, supporting multi-vendor environments like Cisco, Juniper, and Arista.", 
                  icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} /> 
                },
                { 
                  title: "Secure by Design", 
                  desc: "Integrated RBAC, auditing, and compliance ensure your network is protected.", 
                  icon: <FaLock size={40} style={{ color: "var(--primary-color)" }} /> 
                },
                { 
                  title: "Tailored Solutions", 
                  desc: "Customized NaC implementations for cloud, on-prem, or hybrid environments.", 
                  icon: <FaCode size={40} style={{ color: "var(--primary-color)" }} /> 
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
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Use Cases of Network as Code</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { title: "Cloud Network Automation", desc: "Automatically provision and configure cloud network resources." },
                { title: "Data Center Automation", desc: "Streamline operations in complex data center environments." },
                { title: "5G & Edge Computing", desc: "Manage distributed network resources efficiently." },
                { title: "Security & Compliance", desc: "Enforce consistent security policies through code." }
              ].map((useCase, index) => (
                <motion.div className="col-md-6 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <h5 style={{ color: "var(--ct-color)" }}>{useCase.title}</h5>
                    <p>{useCase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Implementation Steps</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="implementation-timeline position-relative">
              <div className="timeline-connector"></div>
              {[
                { step: "Define Network Requirements", desc: "Assess your network and automation goals", icon: <FaLayerGroup size={24} /> },
                { step: "Choose Automation Tools", desc: "Select tools like Ansible or Terraform", icon: <FaTools size={24} /> },
                { step: "Implement Version Control", desc: "Set up Git for configuration management", icon: <FaCode size={24} /> },
                { step: "Monitor & Validate", desc: "Ensure reliability with continuous monitoring", icon: <FaCheck size={24} /> }
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
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Solutions We Provide</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { 
                  title: "NaC Framework Design", 
                  desc: "Custom architecture for integrating NaC into your existing environment—toolchain selection, workflows, and policies." 
                },
                { 
                  title: "Automated Provisioning & Configuration", 
                  desc: "Use tools like Ansible, Terraform, or Nornir to automate switch, router, firewall, and SD-WAN configuration." 
                },
                { 
                  title: "CI/CD for Networking", 
                  desc: "Implement pipelines to test and deploy network changes using Jenkins, GitLab CI, or GitHub Actions." 
                },
                { 
                  title: "Digital Twin & Network Simulation", 
                  desc: "Build EVE-NG or container-based test environments to validate changes before production." 
                },
                { 
                  title: "Telemetry & Event-Driven Automation", 
                  desc: "Integrate with Kafka, Fluentd, or Prometheus to enable real-time monitoring and reactive workflows." 
                },
                { 
                  title: "Configuration Drift Detection", 
                  desc: "Real-time detection and correction of unauthorized changes." 
                },
                { 
                  title: "Multi-Cloud & Hybrid Networking", 
                  desc: "Automate and manage connectivity across AWS, Azure, GCP, and on-prem." 
                },
                { 
                  title: "Compliance as Code", 
                  desc: "Embed policy checks and security baselines in every deployment." 
                },
                { 
                  title: "Training & Consulting", 
                  desc: "Upskill your team or bring in our experts to accelerate your NaC journey." 
                }
              ].map((solution, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <h5 style={{ color: "var(--ct-color)" }}>{solution.title}</h5>
                    <p>{solution.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'technologies':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Technologies</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row text-center mb-5">
              {[
                { name: "Infrastructure as Code for Networking", icon: <FaCloud size={40} style={{ color: "var(--primary-color)" }} />, desc: "Use code to define routers, switches, firewalls, and policies." },
                { name: "Vendor-Agnostic Automation", icon: <FaCode size={40} style={{ color: "var(--primary-color)" }} />, desc: "Support for multi-vendor environments including Cisco, Juniper, Arista, and more." },
                { name: "CI/CD Integration", icon: <FaServer size={40} style={{ color: "var(--primary-color)" }} />, desc: "Seamlessly integrate network changes into your DevOps pipelines with validation and testing." },
                { name: "Version Control & Auditability", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} />, desc: "Full change tracking using Git and other VCS tools." },
                { name: "Automated Validation & Testing", icon: <FaServer size={40} style={{ color: "var(--primary-color)" }} />, desc: "Perform pre-deployment checks, compliance enforcement, and rollback strategies." },
                { name: "Event-Driven Automation", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} />, desc: "Respond automatically to incidents using real-time telemetry and triggers." }
              ].map((tech, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="text-center mb-3">{tech.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }}>{tech.name}</h5>
                    <p>{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Popular NaC Tools Comparison</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead style={{ backgroundColor: "#f8f9fa" }}>
                  <tr>
                    <th>Tool</th>
                    <th>Best For</th>
                    <th>Learning Curve</th>
                    <th>Network Support</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ansible</td>
                    <td>Multi-vendor network automation</td>
                    <td>Easy</td>
                    <td>Almost all network vendors</td>
                  </tr>
                  <tr>
                    <td>Terraform</td>
                    <td>Cloud network infrastructure</td>
                    <td>Moderate</td>
                    <td>Cloud providers, some physical network devices</td>
                  </tr>
                  <tr>
                    <td>Cisco NSO</td>
                    <td>Service orchestration</td>
                    <td>Steep</td>
                    <td>Multi-vendor support</td>
                  </tr>
                  <tr>
                    <td>Python + NAPALM</td>
                    <td>Custom network automation</td>
                    <td>Moderate</td>
                    <td>Major vendors (Cisco, Juniper, Arista)</td>
                  </tr>
                </tbody>
              </table>
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
            <div className="row text-center">
              {[
                { title: "Faster Time to Delivery", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} />, desc: "Implement network changes in hours, not days." },
                { title: "Operational Consistency", icon: <FaLayerGroup size={40} style={{ color: "var(--primary-color)" }} />, desc: "Eliminate configuration drift and manual errors." },
                { title: "Enhanced Uptime", icon: <FaCode size={40} style={{ color: "var(--primary-color)" }} />, desc: "Proactive validations and test-driven deployments reduce downtime." },
                { title: "Full Visibility", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} />, desc: "Gain control over every change, with traceability and reporting." },
                { title: "Reduced Costs", icon: <FaServer size={40} style={{ color: "var(--primary-color)" }} />, desc: "Save on operational overhead and rework through automation." },
                { title: "Empowered Teams", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} />, desc: "Shift engineers from repetitive tasks to high-value strategic work." }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="text-center mb-3">{benefit.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }}>{benefit.title}</h5>
                    <p>{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Success Stories</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { company: "Global Telecom Provider", result: "Reduced network provisioning time from weeks to hours using Network as Code." },
                { company: "Financial Services Company", result: "Achieved 99.999% network uptime through automated configuration management." },
                { company: "Tech Enterprise", result: "Cut operational costs by 35% through network automation." }
              ].map((story, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <h5 style={{ color: "var(--ct-color)" }}>{story.company}</h5>
                    <p>{story.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="card border-0 p-4" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                  <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">ROI of Network as Code</h3>
                  <div className="d-flex justify-content-center mb-5">
                    <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                  </div>
                  <div className="row">
                    {[
                      { value: "40%", label: "Reduction in operational costs" },
                      { value: "80%", label: "Faster network deployment" },
                      { value: "95%", label: "Reduction in configuration errors" }
                    ].map((metric, index) => (
                      <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                        <div className="text-center">
                          <h4 style={{ color: "var(--primary-color)" }}>{metric.value}</h4>
                          <p>{metric.label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
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
            <Accordion>
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} style={{
                  marginBottom: "15px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(var(--primary-color-rgb), 0.2)"
                }}>
                  <Accordion.Header>
                    <span style={{ color: "var(--ct-color)", fontWeight: "600" }}>{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: "#f9fbff" }}>
                    <p>{faq.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <div className="mt-5">
              <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Resources to Learn More</h3>
              <div className="d-flex justify-content-center mb-5">
                <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Documentation",
                    items: ["Ansible Network Automation", "Terraform Network Providers", "Cisco NSO Guides"]
                  },
                  {
                    title: "Training",
                    items: ["Network Automation Course", "Vendor-specific certifications", "Online workshops"]
                  },
                  {
                    title: "Community",
                    items: ["Network to Code Community", "DevNet Community", "Network Automation Forums"]
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
        className="hero-section text-white text-center d-flex flex-column align-items-center justify-content-center"
        style={{ 
          background: `linear-gradient(rgba(0, 0, 30, 0.7), rgba(0, 0, 30, 0.8)), url(${backgroundImage}) center/cover no-repeat`, 
          height: "60vh"
        }}
      >
        <motion.h1 
          className="display-4 fw-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#fff" }}
        >
          Network as Code: Automate Your Infrastructure
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ fontSize: "1.5rem", marginBottom: "20px" }}
        >
          Leverage automation to deploy, manage, and optimize networks efficiently.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
              ></motion.div>    
              <div className="custom-tabs-container">
                <motion.div 
                  className="tab-navigation mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="nacTabs" role="tablist">
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
                  <div className="tab-content" id="nacTabsContent">
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
              <h3 className="text-white mb-3">Start Your Network Automation Journey Today!</h3>
              <p className="text-white-50 mb-0">Contact us to see how Network as Code can transform your business.</p>
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

export default NetworkAsCode;