import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaCloud, 
  FaTools, 
  FaServer, 
  FaRocket, 
  FaCode, 
  FaLayerGroup, 
  FaArrowRight, 
  FaInfoCircle, 
  FaAward, 
  FaQuestionCircle,
  FaCheckCircle
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion, Card } from 'react-bootstrap';
import backgroundImage from "../assets/platform.webp";
import "../assets/css/platform.css";
import "../assets/css/TabsSection.css";


const InfrastructureAsCode = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'features', label: 'Key Features', icon: <FaCheckCircle /> },
    { id: 'technologies', label: 'Technologies', icon: <FaTools /> },
    { id: 'benefits', label: 'Benefits', icon: <FaAward /> },
    { id: 'solutions', label: 'Solutions', icon: <FaRocket /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> }
  ];

  const faqs = [
    { 
      question: "What's the difference between traditional infrastructure management and IaC?", 
      answer: "Traditional infrastructure is manually configured, which is time-consuming and error-prone. IaC automates this using scripts or configuration files, making deployments faster, more consistent, and scalable." 
    },
    { 
      question: "Can IaC work with both cloud and on-prem environments?", 
      answer: "Yes. Our IaC solutions support hybrid and multi-cloud environments, allowing you to manage everything from a single source of truth." 
    },
    { 
      question: "Do I need to know how to code to use your IaC service?", 
      answer: "Not at all. We design and manage everything for you. However, we provide training and documentation if your team wishes to take over or collaborate." 
    },
    { 
      question: "Is Infrastructure as Code secure?", 
      answer: "Yes. IaC allows for security policies to be codified and enforced automatically. We implement role-based access control, encryption, and secure secret management as part of our deployments." 
    },
    { 
      question: "What if I already have some infrastructure deployed manually?", 
      answer: "We offer infrastructure state import and refactoring services to bring your existing environments under IaC management without disrupting operations." 
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

  // Animation variants
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
            <motion.div 
              className="row"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="col-12">
                <motion.div className="card bg-gradient-primary shadow-lg border-0 p-4 mb-5" variants={itemVariants}>
                  <h2 className="text-center text-white mb-4">What is Infrastructure as Code?</h2>
                  <p className="text-center text-white mb-0">
                    Infrastructure as Code (IaC) is a modern approach to provisioning and managing IT infrastructure using 
                    machine-readable configuration files, rather than through manual processes. It allows system administrators 
                    and DevOps teams to define infrastructure using code, enabling repeatable, reliable, and automated deployments.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="row"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="col-md-6">
                <motion.div className="card shadow-lg border-0 p-4 h-100" variants={itemVariants}>
                  <h3 className="text-primary mb-3">Key Principles</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3">
                          <FaCheckCircle className="text-success" size={20} />
                        </div>
                        <div>
                          <h6 className="mb-1">Declarative Definitions</h6>
                          <p className="text-muted mb-0">Define the desired end state of resources and let the IaC engine handle provisioning steps.</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex">
                        <div className="me-3">
                          <FaCheckCircle className="text-success" size={20} />
                        </div>
                        <div>
                          <h6 className="mb-1">Idempotency</h6>
                          <p className="text-muted mb-0">Applying the same configuration multiple times yields the same infrastructure state, preventing configuration drift.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className="me-3">
                          <FaCheckCircle className="text-success" size={20} />
                        </div>
                        <div>
                          <h6 className="mb-1">Version Control</h6>
                          <p className="text-muted mb-0">Store all infrastructure definitions in source control (Git), enabling collaboration, history tracking, and rollback.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <motion.div className="card shadow-lg border-0 p-4 h-100" variants={itemVariants}>
                  <h3 className="text-primary mb-3">Use Cases</h3>
                  <div className="row">
                    {[
                      { title: "Cloud Infrastructure", desc: "Rapidly provision and manage cloud resources." },
                      { title: "Hybrid Environments", desc: "Consistently manage resources across multiple platforms." },
                      { title: "Continuous Deployment", desc: "Integrate infrastructure deployment into CI/CD pipelines." },
                      { title: "Disaster Recovery", desc: "Quickly rebuild infrastructure in case of failures." }
                    ].map((useCase, index) => (
                      <div className="col-6 mb-3" key={index}>
                        <h6 className="text-info">{useCase.title}</h6>
                        <p className="small mb-0">{useCase.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );
      case 'features':
        return (
          <div className="container py-5">
            <motion.h2 
              className="text-center text-primary mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Key Features of Our IaC Service
            </motion.h2>
            
            <motion.div 
              className="row"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { 
                  title: "Code-Driven Infrastructure", 
                  icon: <FaCode size={30} className="text-primary mb-3" />,
                  desc: "Use industry-standard tools (Terraform, Ansible, CloudFormation, etc.) to define infrastructure resources programmatically." 
                },
                { 
                  title: "Multi-Cloud & Hybrid Support", 
                  icon: <FaCloud size={30} className="text-primary mb-3" />,
                  desc: "Deploy infrastructure on AWS, Azure, Google Cloud, or on-premises data centers with consistent automation." 
                },
                { 
                  title: "Modular and Reusable Templates", 
                  icon: <FaLayerGroup size={30} className="text-primary mb-3" />,
                  desc: "Use customizable and scalable code modules for common services like load balancers, firewalls, and databases." 
                },
                { 
                  title: "CI/CD Integration", 
                  icon: <FaRocket size={30} className="text-primary mb-3" />,
                  desc: "Seamlessly integrate with your CI/CD pipelines for automated infrastructure testing and delivery." 
                },
                { 
                  title: "Drift Detection & Compliance", 
                  icon: <FaTools size={30} className="text-primary mb-3" />,
                  desc: "Automatically detect and remediate configuration drift and enforce policies for compliance and security." 
                },
                { 
                  title: "Role-Based Access Control", 
                  icon: <FaServer size={30} className="text-primary mb-3" />,
                  desc: "Track changes and manage who can apply, modify, or destroy infrastructure using granular access control." 
                }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card shadow-lg border-0 p-4 h-100 text-center">
                    <div className="feature-icon-container mb-3">
                      {feature.icon}
                    </div>
                    <h5>{feature.title}</h5>
                    <p className="text-muted mb-0">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="row mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="col-12">
                <div className="card bg-light shadow-lg border-0 p-4">
                  <h3 className="text-center text-primary mb-4">Why Choose Us</h3>
                  <div className="row">
                    {[
                      { title: "Expertise Across Technologies", desc: "Our team has hands-on experience with leading tools like Terraform, Ansible, and Pulumi, and across platforms including AWS, Azure, GCP, and VMware." },
                      { title: "Customized Solutions", desc: "We don't believe in one-size-fits-all. We tailor IaC strategies to your environment, whether you're starting fresh or transitioning from manual configurations." },
                      { title: "Security and Compliance First", desc: "We integrate DevSecOps practices, ensuring your infrastructure is compliant, auditable, and protected by policy-as-code." },
                      { title: "End-to-End Delivery", desc: "From architecture design to code development, deployment, and ongoing support—we handle it all." },
                      { title: "Training and Handover", desc: "We empower your teams with documentation, training, and best practices so you remain in control." }
                    ].map((item, index) => (
                      <div className="col-md-6 mb-3" key={index}>
                        <div className="d-flex">
                          <div className="me-3">
                            <FaCheckCircle className="text-success" size={20} />
                          </div>
                          <div>
                            <h6 className="mb-1">{item.title}</h6>
                            <p className="text-muted small mb-0">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      case 'technologies':
        return (
          <div className="container py-5">
            <motion.h2 
              className="text-center text-primary mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Technologies & Tools
            </motion.h2>
            
            <motion.div 
              className="row text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "Terraform", icon: <FaCloud size={40} className="text-info mb-3" />, desc: "Infrastructure provisioning across multiple cloud providers" },
                { name: "Kubernetes", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Container orchestration platform for application deployment" },
                { name: "Docker", icon: <FaTools size={40} className="text-info mb-3" />, desc: "Containerization platform for consistent application environments" },
                { name: "Ansible", icon: <FaCode size={40} className="text-info mb-3" />, desc: "Configuration management and application deployment tool" }
              ].map((tech, index) => (
                <motion.div className="col-md-3 mb-4" key={index} variants={itemVariants}>
                  <div className="card shadow-lg border-0 p-4 h-100 tech-card">
                    {tech.icon}
                    <h5>{tech.name}</h5>
                    <p className="text-muted mt-2 mb-0">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.h3 
              className="text-center text-primary mb-4 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Popular IaC Tools Comparison
            </motion.h3>
            
            <motion.div 
              className="table-responsive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <table className="table table-bordered table-hover">
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
                    <td><strong>Terraform</strong></td>
                    <td>Multi-cloud infrastructure</td>
                    <td>Moderate</td>
                    <td>AWS, Azure, GCP, Oracle, and more</td>
                  </tr>
                  <tr>
                    <td><strong>Ansible</strong></td>
                    <td>Configuration management</td>
                    <td>Easy</td>
                    <td>Any (agentless)</td>
                  </tr>
                  <tr>
                    <td><strong>Kubernetes</strong></td>
                    <td>Container orchestration</td>
                    <td>Steep</td>
                    <td>All major clouds</td>
                  </tr>
                  <tr>
                    <td><strong>CloudFormation</strong></td>
                    <td>AWS resources</td>
                    <td>Moderate</td>
                    <td>AWS only</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        );
      case 'benefits':
        return (
          <div className="container py-5">
            <motion.h2 
              className="text-center text-primary mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Key Benefits of Infrastructure as Code
            </motion.h2>
            
            <motion.div 
              className="row text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { 
                  title: "Speed and Efficiency", 
                  icon: <FaRocket size={40} className="text-info mb-3" />, 
                  desc: "Provision infrastructure in minutes instead of hours or days." 
                },
                { 
                  title: "Consistency", 
                  icon: <FaCode size={40} className="text-info mb-3" />, 
                  desc: "Eliminate human error by automating standard environments with code." 
                },
                { 
                  title: "Scalability", 
                  icon: <FaLayerGroup size={40} className="text-info mb-3" />, 
                  desc: "Easily replicate infrastructure across multiple environments and regions." 
                },
                { 
                  title: "Cost Optimization", 
                  icon: <FaServer size={40} className="text-info mb-3" />, 
                  desc: "Decommission unused resources automatically and track infrastructure costs." 
                },
                { 
                  title: "Version Control", 
                  icon: <FaCode size={40} className="text-info mb-3" />, 
                  desc: "Track changes, roll back to previous states, and maintain a full audit trail." 
                },
                { 
                  title: "Disaster Recovery", 
                  icon: <FaCloud size={40} className="text-info mb-3" />, 
                  desc: "Rebuild entire environments from code in case of a failure or outage." 
                }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card shadow-lg border-0 p-4 h-100 benefit-card">
                    {benefit.icon}
                    <h5>{benefit.title}</h5>
                    <p className="text-muted mt-2 mb-0">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.h3 
              className="text-center text-primary mb-4 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Success Stories
            </motion.h3>
            
            <motion.div 
              className="row"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.8 }}
            >
              {[
                { company: "Global E-commerce Platform", result: "Reduced infrastructure deployment time from days to minutes using Terraform." },
                { company: "Financial Services Provider", result: "Achieved 99.99% uptime through automated infrastructure management." },
                { company: "Healthcare Organization", result: "Cut operational costs by 40% through infrastructure optimization." }
              ].map((story, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <div className="d-flex align-items-center mb-3">
                      <FaCheckCircle className="text-success me-2" size={24} />
                      <h5 className="text-info mb-0">{story.company}</h5>
                    </div>
                    <p className="mb-0">{story.result}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="row mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4">
                  <h3 className="text-center text-primary mb-4">ROI of Infrastructure as Code</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success display-5">30-50%</h4>
                        <p className="text-muted">Reduction in operational costs</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success display-5">75%</h4>
                        <p className="text-muted">Faster deployment time</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <h4 className="text-success display-5">90%</h4>
                        <p className="text-muted">Reduction in configuration errors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <motion.h2 
              className="text-center text-primary mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Key Solutions We Offer
            </motion.h2>
            
            <motion.div 
              className="row"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { 
                  title: "IaC Framework Development", 
                  icon: <FaCode size={40} className="text-info mb-3" />, 
                  desc: "Custom-built infrastructure automation frameworks using Terraform, Ansible, or a hybrid approach." 
                },
                { 
                  title: "Multi-Cloud Deployments", 
                  icon: <FaCloud size={40} className="text-info mb-3" />, 
                  desc: "Unified IaC strategies across AWS, Azure, GCP, and on-premises environments." 
                },
                { 
                  title: "CI/CD Pipeline Integration", 
                  icon: <FaRocket size={40} className="text-info mb-3" />, 
                  desc: "Automate your full software delivery lifecycle, including infrastructure updates." 
                },
                { 
                  title: "Policy as Code", 
                  icon: <FaServer size={40} className="text-info mb-3" />, 
                  desc: "Enforce security, compliance, and governance through tools like OPA (Open Policy Agent)." 
                },
                { 
                  title: "Modular Templates", 
                  icon: <FaLayerGroup size={40} className="text-info mb-3" />, 
                  desc: "Pre-built modules for common services to ensure quick, reliable deployments." 
                },
                { 
                  title: "IaC as a Service", 
                  icon: <FaTools size={40} className="text-info mb-3" />, 
                  desc: "Fully managed IaC delivery and support, enabling you to focus on your core business." 
                }
              ].map((solution, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card shadow-lg border-0 p-4 h-100 solution-card">
                    <div className="text-center mb-3">
                      {solution.icon}
                    </div>
                    <h5 className="text-center">{solution.title}</h5>
                    <p className="text-muted text-center mb-0">{solution.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="row mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="col-12">
                <div className="card bg-gradient-dark text-white shadow-lg border-0 p-5 text-center">
                  <h3 className="mb-4">We don't just automate infrastructure—we engineer resilience, speed, and agility into your business.</h3>
                  <Link to="/contact" className="btn btn-light btn-lg fw-bold px-4 py-2 mx-auto" style={{ maxWidth: "250px" }}>
                    Start Your IaC Journey
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        );
      case 'faqs':
        return (
          <div className="container py-5">
            <motion.h2 
              className="text-center text-primary mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            
            <motion.div 
              className="accordion-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Accordion defaultActiveKey="0" className="custom-accordion">
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index} className="mb-3">
                    <Accordion.Header className="accordion-header">
                      <span className="fw-bold">{faq.question}</span>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      {faq.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </motion.div>
            
            <motion.div 
              className="mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-center text-primary mb-4">Resources to Learn More</h3>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5 className="mb-3">Documentation</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Terraform Documentation</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Ansible User Guide</li>
                      <li><FaArrowRight className="me-2 text-primary" /> Kubernetes Docs</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5 className="mb-3">Training</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> IaC Fundamentals Course</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Tool-specific certifications</li>
                      <li><FaArrowRight className="me-2 text-primary" /> Hands-on workshops</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card shadow-lg border-0 p-4 h-100">
                    <h5 className="mb-3">Community</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> GitHub repositories</li>
                      <li className="mb-2"><FaArrowRight className="me-2 text-primary" /> Stack Overflow</li>
                      <li><FaArrowRight className="me-2 text-primary" /> Tool-specific forums</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
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
          position: "relative"
        }}
      >
        <motion.div 
          className="container text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="display-3 fw-bold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Infrastructure as Code: Automate Your Platform
          </motion.h1>
          <motion.p
            className="lead fs-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Transform Infrastructure Management Through Intelligent Automation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg fw-bold px-4 py-3 me-3">
              Get Started
            </Link>
           
          </motion.div>
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
                <h2 className="display-5 fw-bold text-primary">Discover Infrastructure as Code</h2>
                <p className="lead text-muted">Everything you need to know about modern infrastructure management</p>
              </motion.div>
              
              <div className="custom-tabs-container">
                {/* Tab navigation */}
                <motion.div 
                  className="tab-navigation mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="iacTabs" role="tablist">
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

      {/* Testimonials Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-primary">What Our Clients Say</h2>
            <p className="lead text-muted">Success stories from businesses that transformed with IaC</p>
          </motion.div>
          
          <motion.div 
            className="row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                quote: "Our deployment time went from days to minutes, and configuration errors dropped by over 90%.",
                author: "CTO, Global Retail Company",
                
              },
              {
                quote: "The ability to version control our infrastructure has been a game-changer for our team's productivity.",
                author: "DevOps Lead, Financial Services",
              
              },
              {
                quote: "The monitoring and security integration has helped us maintain compliance while moving faster.",
                author: "Security Director, Healthcare Tech",
                
              }
            ].map((testimonial, index) => (
              <motion.div 
                className="col-lg-4 mb-4" 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="card shadow-lg border-0 p-4 h-100">
                  <div className="d-flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-warning me-1">★</span>
                    ))}
                  </div>
                  <p className="testimonial-quote mb-4">"{testimonial.quote}"</p>
                  <div className="d-flex align-items-center mt-auto">
                    <img src={testimonial.image} alt="Client" className="rounded-circle me-3" width="60" height="60" />
                    <div>
                      <p className="mb-0 fw-bold">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="py-5 bg-gradient-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <motion.h3 
                className="display-6 fw-bold mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Revolutionize Your Infrastructure Management Today!
              </motion.h3>
              <motion.p 
                className="lead mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Contact us to see how Infrastructure as Code can transform your operations.
              </motion.p>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to="/contact" className="btn btn-light btn-lg fw-bold px-5 py-3">
                  Request a Demo
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS */}
      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #4A6FFF 0%, #5E54FA 100%);
        }
        
        .bg-gradient-dark {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
        }
        
        .custom-tabs .nav-link {
          border-radius: 10px;
          padding: 1rem 1.5rem;
          font-weight: 600;
          color: #718096;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
        }
        
        .custom-tabs .nav-link:hover {
          background-color: rgba(74, 111, 255, 0.1);
          color: #4A6FFF;
        }
        
        .custom-tabs .nav-link.active {
          background-color: #4A6FFF;
          color: white;
          border: 1px solid #4A6FFF;
          box-shadow: 0 4px 15px rgba(74, 111, 255, 0.3);
        }
        
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
        }
        
        .feature-icon-container {
          height: 70px;
          width: 70px;
          border-radius: 50%;
          background-color: rgba(74, 111, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        
        .custom-accordion .accordion-button:not(.collapsed) {
          background-color: rgba(74, 111, 255, 0.1);
          color: #4A6FFF;
          box-shadow: none;
        }
        
        .custom-accordion .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(74, 111, 255, 0.5);
        }
        
        .custom-accordion .accordion-item {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .custom-accordion .accordion-body {
          background-color: #f8f9fa;
          padding: 1.5rem;
        }
        
        .testimonial-quote {
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .custom-tabs .nav-link {
            padding: 0.75rem 1rem;
          }
          
          .tab-text {
            font-size: 0.9rem;
          }
          
          .hero-section {
            height: 70vh !important;
          }
          
          .feature-cards-container {
            position: relative !important;
            bottom: 0 !important;
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InfrastructureAsCode;