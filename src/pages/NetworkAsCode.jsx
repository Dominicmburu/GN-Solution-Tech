import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import backgroundImage from "../assets/network-as-code.webp";
import "../assets/css/NetworkAsCode.css";
import "../assets/css/TabsSection.css";

const NetworkAsCode = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Four tabs to match the Infrastructure as Code page
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'bi bi-info-circle' },
    { id: 'solutions', label: 'Solutions', icon: 'bi bi-gear' },
    { id: 'technologies', label: 'Technologies', icon: 'bi bi-tools' },
    { id: 'benefits', label: 'Benefits', icon: 'bi bi-award' },
    { id: 'faqs', label: 'FAQs', icon: 'bi bi-question-square' }
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
            <h2 className="text-center text-primary mb-4">What is Network as Code?</h2>
            <div className="row">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4 mb-5" style={{backgroundColor:"#0a1033"}}>
                  <p className="text-center text-light fw-bold mb-0">
                  NaC transforms networks from static, device-by-device management into dynamic, code-driven environments. This accelerates 
                    service delivery, improves consistency, and enhances visibility and control across your infrastructure. Whether it's managing 
                    WAN, LAN, security policies, or cloud connectivity — NaC brings agility, reliability, and automation to your networking operations.
                  This brings DevOps principles to networking—enabling teams to deploy, test, and scale network changes faster, with confidence 
                    and consistency. At GN Solutions, our Network as Code approach brings DevOps-style agility, automation, and intelligence to 
                    networking — whether in the cloud, hybrid, or on-prem environments.
                  </p>
                </div>
              </div>
            </div>
            
            
            
            <h3 className="text-center text-primary mb-4">Why Choose Us</h3>
            <div className="row mb-5">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4">
                  <p>
                    At GN Solutions, we bring deep experience in network engineering, DevOps, and automation to help enterprises evolve their 
                    legacy networks into programmable, future-ready infrastructures. We specialize in designing NaC solutions that are:
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><FaCheck className="me-2 text-success" /> <strong>Vendor-neutral and platform-agnostic</strong></li>
                    <li className="mb-2"><FaCheck className="me-2 text-success" /> <strong>Secure by design,</strong> with integrated RBAC, auditing, and compliance</li>
                    <li><FaCheck className="me-2 text-success" /> <strong>Tailored to your environment</strong> — cloud, on-prem, or hybrid</li>
                  </ul>
                  <p className="mt-3 mb-0">
                    Whether you're modernizing your infrastructure or starting from scratch, we help you get there faster, safer, and smarter.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-center text-primary mb-4">Use Cases of Network as Code</h3>
            <div className="row">
              {[
                { title: "Cloud Network Automation", desc: "Automatically provision and configure cloud network resources." },
                { title: "Data Center Automation", desc: "Streamline operations in complex data center environments." },
                { title: "5G & Edge Computing", desc: "Manage distributed network resources efficiently." },
                { title: "Security & Compliance", desc: "Enforce consistent security policies through code." }
              ].map((useCase, index) => (
                <motion.div className="col-md-6 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5 className="text-info">{useCase.title}</h5>
                    <p>{useCase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Implementation Steps</h3>
            <div className="row">
              {[
                "Define Network Requirements", 
                "Choose Automation Tools", 
                "Implement Version Control", 
                "Monitor & Validate"
              ].map((step, index) => (
                <motion.div className="col-md-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card shadow-lg border-0 p-4 text-center h-100">
                    <h5 className="mt-3">{step}</h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Key Solutions We Provide</h2>
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
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5 className="text-info">{solution.title}</h5>
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
            <h2 className="text-center text-primary mb-4">Key Features</h2>
            <div className="row text-center mb-5">
              {[
                { name: "Infrastructure as Code for Networking", icon: <FaCloud size={40} className="text-info mb-3" />, desc: "Use code to define routers, switches, firewalls, and policies." },
                { name: "Vendor-Agnostic Automation", icon: <FaCode size={40} className="text-info mb-3" />, desc: "Support for multi-vendor environments including Cisco, Juniper, Arista, Fortinet, and more." },
                { name: "CI/CD Integration", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Seamlessly integrate network changes into your DevOps pipelines with validation and testing." },
                { name: "Version Control & Auditability", icon: <FaTools size={40} className="text-info mb-3" />, desc: "Full change tracking using Git and other VCS tools." },
                { name: "Automated Validation & Testing", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Perform pre-deployment checks, compliance enforcement, and rollback strategies." },
                { name: "Event-Driven Automation", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Respond automatically to incidents using real-time telemetry and triggers." }
              ].map((tech, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card shadow-lg border-0 p-4 h-100">
                    {tech.icon}
                    <h5>{tech.name}</h5>
                    <p className="mt-2">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Popular NaC Tools Comparison</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="bg-light">
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
            <h2 className="text-center text-primary mb-4">Key Benefits</h2>
            <div className="row text-center">
              {[
                { title: "Faster Time to Delivery", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Implement network changes in hours, not days." },
                { title: "Operational Consistency", icon: <FaLayerGroup size={40} className="text-info mb-3" />, desc: "Eliminate configuration drift and manual errors." },
                { title: "Enhanced Uptime", icon: <FaCode size={40} className="text-info mb-3" />, desc: "Proactive validations and test-driven deployments reduce downtime." },
                { title: "Full Visibility", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Gain control over every change, with traceability and reporting." },
                { title: "Reduced Costs", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Save on operational overhead and rework through automation." },
                { title: "Empowered Teams", icon: <FaTools size={40} className="text-info mb-3" />, desc: "Shift engineers from repetitive tasks to high-value strategic work." }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card shadow-lg border-0 p-4 h-100">
                    {benefit.icon}
                    <h5>{benefit.title}</h5>
                    <p className="mt-2">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Success Stories</h3>
            <div className="row">
              {[
                { company: "Global Telecom Provider", result: "Reduced network provisioning time from weeks to hours using Network as Code." },
                { company: "Financial Services Company", result: "Achieved 99.999% network uptime through automated configuration management." },
                { company: "Tech Enterprise", result: "Cut operational costs by 35% through network automation." }
              ].map((story, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5 className="text-info">{story.company}</h5>
                    <p>{story.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="row mt-5">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4">
                  <h3 className="text-center text-primary mb-4">ROI of Network as Code</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success">40%</h4>
                        <p>Reduction in operational costs</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success">80%</h4>
                        <p>Faster network deployment</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success">95%</h4>
                        <p>Reduction in configuration errors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'faqs':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Frequently Asked Questions</h2>
            <Accordion>
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            
            <div className="mt-5">
              <h3 className="text-center text-primary mb-4">Resources to Learn More</h3>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5>Documentation</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Ansible Network Automation</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Terraform Network Providers</li>
                      <li><FaArrowRight className="me-2 text-primary" /> Cisco NSO Guides</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5>Training</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Network Automation Course</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Vendor-specific certifications</li>
                      <li><FaArrowRight className="me-2 text-primary" /> Online workshops</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5>Community</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Network to Code Community</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> DevNet Community</li>
                      <li><FaArrowRight className="me-2 text-primary" /> Network Automation Forums</li>
                    </ul>
                  </div>
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
        className="hero-section text-white text-center d-flex flex-column align-items-center justify-content-center"
        style={{ 
          background: `url(${backgroundImage}) center/cover no-repeat`, 
          height: "45vh",
        }}
      >
       <motion.h1 
  className="display-4 fw-bold"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  style={{ background: 'transparent', color: 'orange' }}
>
  Network as Code: Automate Your Infrastructure
</motion.h1>

        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Leverage automation to deploy, manage, and optimize networks efficiently.
        </motion.p>
        <Link to="/contact" className="btn btn-warning btn-lg fw-bold px-4 py-2 mt-3">
          Get Started
        </Link>
      </div>

      {/* Tabs Section (matching Infrastructure as Code page) */}
      <section className="tabs-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="custom-tabs-container">
                {/* Tab navigation */}
                <div className="tab-navigation">
                  <ul className="nav custom-tabs justify-content-center" id="nacTabs" role="tablist">
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
                
                {/* Tab content */}
                <div className="tab-content-container mt-4">
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
      <div className="container py-5 CTA-section text-center" style={{backgroundColor:"#00e8ff"}}>
        <h3>Start Your Network Automation Journey Today!</h3>
        <p className="text-muted">Contact us to see how Network as Code can transform your business.</p>
        <Link to="/contact" className="btn btn-primary btn-lg fw-bold px-4 py-2">
          Request a Demo
        </Link>
      </div>
    </div>
  );
};

export default NetworkAsCode;