import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight, FaDocker, FaGitlab, FaJenkins, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import backgroundImage from "../assets/software.jpg";
import "../assets/css/SoftwareAsCode.css";
import "../assets/css/TabsSection.css";

const SoftwareAsCodePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Four tabs to match the Infrastructure as Code and Network as Code pages
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'bi bi-info-circle' },
    { id: 'technologies', label: 'Technologies', icon: 'bi bi-tools' },
    { id: 'benefits', label: 'Benefits', icon: 'bi bi-award' },
    { id: 'faqs', label: 'FAQs', icon: 'bi bi-question-square' }
  ];

  const faqs = [
    { 
      question: "What is Software as Code?", 
      answer: "Software as Code (SaC) defines software environments, configurations, and infrastructure using code to automate development, deployment, and maintenance." 
    },
    { 
      question: "What are the benefits of SaC?", 
      answer: "It improves automation, security, and consistency while reducing manual errors and speeding up software delivery." 
    },
    { 
      question: "How does it improve DevOps efficiency?", 
      answer: "By automating software configurations and deployments, SaC enhances collaboration, reduces operational overhead, and accelerates development cycles." 
    },
    { 
      question: "Is Software as Code the same as Infrastructure as Code?", 
      answer: "Software as Code focuses specifically on application configurations, environments, and deployments while Infrastructure as Code focuses on the underlying infrastructure resources. They are complementary approaches often used together." 
    },
    { 
      question: "What skills are needed to implement Software as Code?", 
      answer: "Teams implementing SaC benefit from skills in programming, DevOps practices, version control systems, CI/CD pipelines, and containerization technologies. Knowledge of specific tools like Docker, Kubernetes, and CI/CD systems is also valuable." 
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">What is Software as Code?</h2>
            <div className="row">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4 mb-5" style={{backgroundColor:"#0a1033"}}>
                  <p className="text-center text-light fw-bold mb-0">
                    Software as Code (SaC) is a methodology that automates software configurations, deployments, and environments through code,
                    ensuring scalability, security, and efficiency while reducing human errors and speeding up development cycles.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-center text-primary mb-4">Use Cases of Software as Code</h3>
            <div className="row">
              {[
                { title: "Automated Deployments", desc: "Streamline software release processes with automation." },
                { title: "Infrastructure as Code (IaC)", desc: "Define and manage infrastructure using code." },
                { title: "Configuration Management", desc: "Maintain consistency across multiple environments." },
                { title: "Continuous Integration & Delivery", desc: "Enhance DevOps efficiency with automated testing and deployment." }
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
                "Define requirements", 
                "Choose the right tools", 
                "Write infrastructure code", 
                "Test and validate"
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
                { name: "Docker", icon: <FaDocker size={40} className="text-info mb-3" />, desc: "Containerization for consistent application environments" },
                { name: "Kubernetes", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Container orchestration and management" },
                { name: "Jenkins", icon: <FaJenkins size={40} className="text-info mb-3" />, desc: "Continuous integration and deployment automation" },
                { name: "GitLab CI/CD", icon: <FaGitlab size={40} className="text-info mb-3" />, desc: "Pipeline automation integrated with source control" }
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
            
            <h3 className="text-center text-primary mb-4 mt-5">Popular SaC Tools Comparison</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="bg-light">
                  <tr>
                    <th>Tool</th>
                    <th>Best For</th>
                    <th>Learning Curve</th>
                    <th>Integration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Docker</td>
                    <td>Application containerization</td>
                    <td>Moderate</td>
                    <td>Works with most CI/CD tools</td>
                  </tr>
                  <tr>
                    <td>Kubernetes</td>
                    <td>Container orchestration</td>
                    <td>Steep</td>
                    <td>Cloud-native ecosystem</td>
                  </tr>
                  <tr>
                    <td>Jenkins</td>
                    <td>CI/CD automation</td>
                    <td>Moderate</td>
                    <td>Extensive plugin ecosystem</td>
                  </tr>
                  <tr>
                    <td>GitLab CI/CD</td>
                    <td>End-to-end DevOps</td>
                    <td>Easy</td>
                    <td>Tightly integrated with GitLab</td>
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
                { title: "Automation", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Streamlines software deployment and update processes" },
                { title: "Consistency", icon: <FaLayerGroup size={40} className="text-info mb-3" />, desc: "Ensures uniform configurations across all environments" },
                { title: "Version Control", icon: <FaCode size={40} className="text-info mb-3" />, desc: "Tracks changes and enables efficient rollbacks" },
                { title: "Security", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Enforces security policies through code" },
                { title: "Faster Deployment", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Accelerates the entire software development lifecycle" }
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
                { company: "Netflix", result: "Uses Software as Code practices to manage thousands of cloud instances efficiently, with automated deployments reducing deployment time by 90%." },
                { company: "Spotify", result: "Automated deployments and configuration management reduced downtime by 80% and accelerated feature releases by 60%." },
                { company: "Airbnb", result: "CI/CD pipelines and containerization speed up feature releases and ensure consistent environments across development and production." }
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
                  <h3 className="text-center text-primary mb-4">ROI of Software as Code</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success">35%</h4>
                        <p>Reduction in development costs</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success">70%</h4>
                        <p>Faster time to market</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success">85%</h4>
                        <p>Reduction in deployment errors</p>
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
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Docker Documentation</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Kubernetes Guides</li>
                      <li><FaArrowRight className="me-2 text-primary" /> CI/CD Best Practices</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5>Training</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> DevOps Certification</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Container Management Courses</li>
                      <li><FaArrowRight className="me-2 text-primary" /> CI/CD Pipelines Workshop</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5>Community</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> DevOps Community</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Docker and Kubernetes Forums</li>
                      <li><FaArrowRight className="me-2 text-primary" /> GitHub DevOps Resources</li>
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
          Software as Code: Automate Your Development
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Automate, streamline, and optimize your software infrastructure using code-based principles.
        </motion.p>
        <Link to="/contact" className="btn btn-warning btn-lg fw-bold px-4 py-2 mt-3">
          Get Started
        </Link>
      </div>

      {/* Tabs Section (matching the other pages) */}
      <section className="tabs-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="custom-tabs-container">
                {/* Tab navigation */}
                <div className="tab-navigation">
                  <ul className="nav custom-tabs justify-content-center" id="sacTabs" role="tablist">
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
                  <div className="tab-content" id="sacTabsContent">
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
        <h3>Start Your Software Automation Journey Today!</h3>
        <p className="text-muted">Contact us to see how Software as Code can transform your development process.</p>
        <Link to="/contact" className="btn btn-primary btn-lg fw-bold px-4 py-2">
          Request a Demo
        </Link>
      </div>
    </div>
  );
};

export default SoftwareAsCodePage;