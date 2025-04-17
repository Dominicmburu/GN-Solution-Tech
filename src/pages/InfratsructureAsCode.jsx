import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import backgroundImage from "../assets/platform.webp";
import "../assets/css/platform.css";
import "../assets/css/TabsSection.css";

const InfrastructureAsCode = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Reduced to 4 tabs
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'bi bi-info-circle' },
    { id: 'technologies', label: 'Technologies', icon: 'bi bi-tools' },
    { id: 'benefits', label: 'Benefits', icon: 'bi bi-award' },
    { id: 'faqs', label: 'FAQs', icon: 'bi bi-question-square' }
  ];

  const faqs = [
    { 
      question: "What is Infrastructure as Code?", 
      answer: "Infrastructure as Code (IaC) is an approach to infrastructure management that uses code and software development techniques to automate provisioning and management of IT resources." 
    },
    { 
      question: "What tools are commonly used for IaC?", 
      answer: "Common tools include Terraform, Ansible, Kubernetes, Docker, AWS CloudFormation, and Azure Resource Manager templates." 
    },
    { 
      question: "How does IaC improve security?", 
      answer: "IaC improves security by enabling consistent security policies, automated compliance checking, and reducing human error in infrastructure configuration." 
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">What is Infrastructure as Code?</h2>
            <div className="row">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4 mb-5" style={{backgroundColor:"#0a1033"}}>
                  <p className="text-center text-light fw-bold mb-0">
                    Infrastructure as Code (IaC) is a practice that enables the automation and management of infrastructure through code instead of manual processes.
                    By defining infrastructure components in configuration files, teams can version, test, and deploy infrastructure consistently and efficiently.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-center text-primary mb-4">Use Cases of Infrastructure as Code</h3>
            <div className="row">
              {[
                { title: "Cloud Infrastructure", desc: "Rapidly provision and manage cloud resources." },
                { title: "Hybrid Cloud Environments", desc: "Consistently manage resources across multiple platforms." },
                { title: "Continuous Deployment", desc: "Integrate infrastructure deployment into CI/CD pipelines." },
                { title: "Disaster Recovery", desc: "Quickly rebuild infrastructure in case of failures." }
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
                "Define infrastructure requirements", 
                "Select appropriate IaC tools", 
                "Version control your configurations", 
                "Implement automated testing"
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
                { name: "Terraform", icon: <FaCloud size={40} className="text-info mb-3" />, desc: "Infrastructure provisioning across multiple cloud providers" },
                { name: "Kubernetes", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Container orchestration platform for application deployment" },
                { name: "Docker", icon: <FaTools size={40} className="text-info mb-3" />, desc: "Containerization platform for consistent application environments" },
                { name: "Ansible", icon: <FaCode size={40} className="text-info mb-3" />, desc: "Configuration management and application deployment tool" }
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
            
            <h3 className="text-center text-primary mb-4 mt-5">Popular IaC Tools Comparison</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="bg-light">
                  <tr>
                    <th>Tool</th>
                    <th>Best For</th>
                    <th>Learning Curve</th>
                    <th>Cloud Support</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Terraform</td>
                    <td>Multi-cloud infrastructure</td>
                    <td>Moderate</td>
                    <td>AWS, Azure, GCP, Oracle, and more</td>
                  </tr>
                  <tr>
                    <td>Ansible</td>
                    <td>Configuration management</td>
                    <td>Easy</td>
                    <td>Any (agentless)</td>
                  </tr>
                  <tr>
                    <td>Kubernetes</td>
                    <td>Container orchestration</td>
                    <td>Steep</td>
                    <td>All major clouds</td>
                  </tr>
                  <tr>
                    <td>CloudFormation</td>
                    <td>AWS resources</td>
                    <td>Moderate</td>
                    <td>AWS only</td>
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
                { title: "Scalability", icon: <FaLayerGroup size={40} className="text-info mb-3" />, desc: "Easily scale your infrastructure with code-driven approaches" },
                { title: "Efficiency", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Reduce manual interventions and accelerate deployment cycles" },
                { title: "Consistency", icon: <FaCode size={40} className="text-info mb-3" />, desc: "Maintain uniform infrastructure across all environments" },
                { title: "Security", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Implement robust security policies through code" },
                { title: "Cost Savings", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Optimize resource usage and reduce operational costs" }
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
                { company: "Global E-commerce Platform", result: "Reduced infrastructure deployment time from days to minutes using Terraform." },
                { company: "Financial Services Provider", result: "Achieved 99.99% uptime through automated infrastructure management." },
                { company: "Healthcare Organization", result: "Cut operational costs by 40% through infrastructure optimization." }
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
                  <h3 className="text-center text-primary mb-4">ROI of Infrastructure as Code</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success">30-50%</h4>
                        <p>Reduction in operational costs</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success">75%</h4>
                        <p>Faster deployment time</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success">90%</h4>
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
              {[
                ...faqs,
                { 
                  question: "How long does it take to implement IaC?", 
                  answer: "Implementation time varies based on the complexity of your infrastructure and team expertise. Simple implementations can be completed in weeks, while more complex enterprise transitions may take several months." 
                },
                { 
                  question: "Is Infrastructure as Code only for cloud environments?", 
                  answer: "No, while IaC is commonly associated with cloud deployments, it can be used for on-premises infrastructure as well. Many tools support hybrid cloud environments." 
                },
                { 
                  question: "What skills are needed to implement IaC?", 
                  answer: "Teams implementing IaC benefit from skills in programming/scripting, understanding of infrastructure components, version control systems, and CI/CD pipelines. Knowledge of specific IaC tools like Terraform or Ansible is also valuable." 
                }
              ].map((faq, index) => (
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
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Terraform Documentation</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Ansible User Guide</li>
                      <li><FaArrowRight className="me-2 text-primary" /> Kubernetes Docs</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5>Training</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> IaC Fundamentals Course</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Tool-specific certifications</li>
                      <li><FaArrowRight className="me-2 text-primary" /> Hands-on workshops</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5>Community</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> GitHub repositories</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Stack Overflow</li>
                      <li><FaArrowRight className="me-2 text-primary" /> Tool-specific forums</li>
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
          Infrastructure as Code: Automate Your Platform
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Transform Infrastructure Management Through Intelligent Automation
        </motion.p>
        <Link to="/contact" className="btn btn-warning btn-lg fw-bold px-4 py-2 mt-3">
          Get Started
        </Link>
      </div>

      {/* Simple Tabs Section (no scrolling effect) */}
      <section className="tabs-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="custom-tabs-container">
                {/* Simple tab navigation without scroll effect */}
                <div className="tab-navigation">
                  <ul className="nav custom-tabs justify-content-center" id="iacTabs" role="tablist">
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

      {/* Call to Action */}
      <div className="container py-5 CTA-section text-center" style={{backgroundColor:"#00e8ff"}}>
        <h3>Revolutionize Your Infrastructure Management Today!</h3>
        <p className="text-muted">Contact us to see how Infrastructure as Code can transform your operations.</p>
        <Link to="/contact" className="btn btn-primary btn-lg fw-bold px-4 py-2">
          Request a Demo
        </Link>
      </div>
    </div>
  );
};

export default InfrastructureAsCode;