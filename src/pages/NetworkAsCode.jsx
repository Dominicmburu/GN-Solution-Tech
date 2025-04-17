import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight } from "react-icons/fa";
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
    { id: 'technologies', label: 'Technologies', icon: 'bi bi-tools' },
    { id: 'benefits', label: 'Benefits', icon: 'bi bi-award' },
    { id: 'faqs', label: 'FAQs', icon: 'bi bi-question-square' }
  ];

  const faqs = [
    { 
      question: "What is Network as Code?", 
      answer: "Network as Code (NaC) is an approach that automates the deployment and management of network infrastructure using code-based principles." 
    },
    { 
      question: "Which tools are commonly used?", 
      answer: "Common tools include Terraform, Ansible, Cisco NSO, and NetBox for network automation." 
    },
    { 
      question: "Can NaC be integrated with existing networks?", 
      answer: "Yes, NaC can integrate with existing network architectures, allowing gradual automation adoption." 
    },
    { 
      question: "How long does it take to implement Network as Code?", 
      answer: "Implementation time varies based on network complexity and team expertise. Simple implementations can be completed in weeks, while enterprise-wide transitions may take several months." 
    },
    { 
      question: "What skills are needed to implement Network as Code?", 
      answer: "Teams implementing NaC benefit from skills in networking fundamentals, programming/scripting, version control systems, and CI/CD pipelines. Knowledge of specific automation tools like Ansible or Terraform is also valuable." 
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
                    Network as Code (NaC) is a methodology that applies Infrastructure as Code principles to network management.
                    By defining network configurations in code, teams can automate deployment, ensure consistency, and manage network infrastructure more efficiently.
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
      case 'technologies':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Technologies & Tools</h2>
            <div className="row text-center">
              {[
                { name: "Terraform", icon: <FaCloud size={40} className="text-info mb-3" />, desc: "Infrastructure provisioning for network resources" },
                { name: "Ansible", icon: <FaCode size={40} className="text-info mb-3" />, desc: "Configuration management and network automation" },
                { name: "Cisco NSO", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Network service orchestration platform" },
                { name: "NetBox", icon: <FaTools size={40} className="text-info mb-3" />, desc: "IP address management and network documentation" }
              ].map((tech, index) => (
                <motion.div className="col-md-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
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
                { title: "Automation", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Eliminate manual configuration and reduce human error" },
                { title: "Scalability", icon: <FaLayerGroup size={40} className="text-info mb-3" />, desc: "Easily scale network resources based on demand" },
                { title: "Consistency", icon: <FaCode size={40} className="text-info mb-3" />, desc: "Ensure uniform configurations across all network devices" },
                { title: "Speed", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Accelerate network changes and deployments" },
                { title: "Security", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Implement security policies consistently through code" }
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
          style={{background: 'transparent'}}
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