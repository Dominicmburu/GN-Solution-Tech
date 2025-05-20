import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight, 
  FaDocker, FaGitlab, FaJenkins, FaCogs, FaShieldAlt, FaCloudDownloadAlt, 
  FaSyncAlt, FaUsersCog, FaQuestionCircle, FaAward, FaCheckCircle, FaInfoCircle 
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import "../assets/css/platformAsCode.css";
import "../assets/css/TabsSection.css";
import backgroundImage from "../assets/platform3.webp";

// Intro Section Component
const PlatformAsCodeIntro = () => (
  <div className="container py-5">
    <h2 className="text-center text-primary mb-4">What is Platform as Code?</h2>
    <div className="row">
      <div className="col-12">
        <div className="card shadow-lg border-0 p-4 mb-5 gradient-card">
          <p className="text-center text-light fw-bold mb-0">
            Platform as Code (PaaC) is a modern IT delivery model that enables organizations to define, provision, 
            and manage entire technology platforms using code—extending beyond infrastructure to include services, 
            runtime environments, network configurations, security policies, monitoring, and CI/CD pipelines.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const PlatformAsCodePage = () => {
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
      question: "What is Platform as Code?", 
      answer: "Platform as Code (PaaC) is a methodology that defines, provisions, and manages entire technology platforms using code. Unlike Infrastructure as Code (IaC) which focuses on provisioning infrastructure, PaaC extends this concept to include the entire application platform stack—services, runtime environments, network configurations, security policies, monitoring, CI/CD pipelines, and more." 
    },
    { 
      question: "How is PaaC different from Infrastructure as Code (IaC)?", 
      answer: "IaC focuses on provisioning infrastructure (VMs, networks, etc.), while PaaC includes everything from infrastructure to middleware, applications, observability, and security policies—essentially the entire platform lifecycle." 
    },
    { 
      question: "Do I need to have DevOps experience to implement Platform as Code?", 
      answer: "Not necessarily. While DevOps experience is beneficial, our services include setup, configuration, training, and support to help organizations of all technical levels implement Platform as Code solutions effectively." 
    },
    { 
      question: "Can platform blueprints be customized for specific business needs?", 
      answer: "Yes, all platform templates are modular and can be tailored to your specific business and compliance requirements." 
    },
    { 
      question: "Which tools and technologies are supported for Platform as Code?", 
      answer: "We support Terraform, Ansible, Helm, Kubernetes, Docker, Jenkins, GitHub, AWS, Azure, GCP, OpenShift, and many more technologies that enable codifying platform components." 
    },
    { 
      question: "How does Platform as Code ensure security and compliance?", 
      answer: "Security is integrated into every step—from IAM policies and encryption to compliance-as-code (CIS, NIST, ISO frameworks). Platform as Code enables embedding governance, access controls, and compliance checks directly into platform code." 
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <PlatformAsCodeIntro />
            <div className="container py-5">
              <h3 className="text-center text-primary mb-4">Key Features</h3>
              <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
                {[
                  { 
                    title: "Declarative Platform Definitions", 
                    desc: "Define full-stack platform configurations (infrastructure + services + policies) using YAML, JSON, or HCL code.",
                    icon: <FaCode size={40} className="feature-icon" />
                  },
                  { 
                    title: "Multi-Cloud Support", 
                    desc: "Seamlessly deploy across AWS, Azure, GCP, or on-premise environments with unified code templates.",
                    icon: <FaCloud size={40} className="feature-icon" />
                  },
                  { 
                    title: "Automated Provisioning", 
                    desc: "Auto-provision infrastructure, services, and applications with full lifecycle management.",
                    icon: <FaRocket size={40} className="feature-icon" />
                  },
                  { 
                    title: "Security as Code", 
                    desc: "Embed governance, access controls, and compliance checks directly into platform code.",
                    icon: <FaShieldAlt size={40} className="feature-icon" />
                  },
                  { 
                    title: "CI/CD Integration", 
                    desc: "Integrated with Jenkins, GitHub Actions, GitLab CI, or ArgoCD for continuous delivery.",
                    icon: <FaJenkins size={40} className="feature-icon" />
                  },
                  { 
                    title: "Observability as Code", 
                    desc: "Deploy monitoring, logging, and alerting configurations automatically as part of the platform.",
                    icon: <FaCogs size={40} className="feature-icon" />
                  }
                ].map((feature, index) => (
                  <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                    <div className="card shadow-lg border-0 p-4 h-100 feature-card">
                      <div className="text-center mb-3">
                        {feature.icon}
                      </div>
                      <h5 className="text-center">{feature.title}</h5>
                      <p className="text-center">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <h3 className="text-center text-primary mb-4 mt-5">Implementation Process</h3>
              <div className="implementation-timeline">
                {[
                  { step: "Define Requirements", icon: <FaLayerGroup size={24} /> }, 
                  { step: "Select Platform Tools", icon: <FaTools size={24} /> }, 
                  { step: "Develop Platform Code", icon: <FaCode size={24} /> }, 
                  { step: "Test & Validate", icon: <FaServer size={24} /> },
                  { step: "Deploy & Monitor", icon: <FaRocket size={24} /> }
                ].map((step, index) => (
                  <motion.div 
                    className="timeline-item" 
                    key={index} 
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
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
          </div>
        );
      case 'technologies':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Technologies & Tools</h2>
            <motion.div className="row text-center" variants={containerVariants} initial="hidden" animate="visible">
              {[
                { 
                  name: "Docker & Kubernetes", 
                  icon: <FaDocker size={40} className="tech-icon" />, 
                  desc: "Containerization and orchestration for consistent application environments" 
                },
                { 
                  name: "Terraform & Ansible", 
                  icon: <FaServer size={40} className="tech-icon" />, 
                  desc: "Infrastructure and configuration automation at scale" 
                },
                { 
                  name: "CI/CD Tools", 
                  icon: <FaJenkins size={40} className="tech-icon" />, 
                  desc: "Jenkins, GitHub Actions, GitLab CI for continuous delivery pipelines" 
                },
                { 
                  name: "Cloud Providers", 
                  icon: <FaCloud size={40} className="tech-icon" />, 
                  desc: "AWS, Azure, GCP with unified deployment templates" 
                }
              ].map((tech, index) => (
                <motion.div className="col-md-6 col-lg-3 mb-4" key={index} variants={itemVariants}>
                  <div className="card shadow-lg border-0 p-4 h-100 tech-card">
                    {tech.icon}
                    <h5>{tech.name}</h5>
                    <p className="mt-2">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Platform Component Stack</h3>
            <div className="platform-stack">
              {[
                { name: "Applications", desc: "Microservices, APIs, Web Applications", icon: <FaRocket /> },
                { name: "CI/CD & DevOps", desc: "Automated Build, Test, Deploy Pipelines", icon: <FaJenkins /> },
                { name: "Containers & Orchestration", desc: "Docker, Kubernetes, Service Mesh", icon: <FaDocker /> },
                { name: "Middleware & Services", desc: "Databases, Message Queues, Caches", icon: <FaCogs /> },
                { name: "Infrastructure", desc: "Compute, Storage, Networking", icon: <FaServer /> }
              ].map((layer, index) => (
                <motion.div className="stack-layer" key={index} variants={itemVariants} initial="hidden" animate="visible">
                  <div className="stack-icon">{layer.icon}</div>
                  <div className="stack-content">
                    <h5>{layer.name}</h5>
                    <p>{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Integration Ecosystem</h3>
            <div className="integration-ecosystem">
              <div className="ecosystem-center">
                <div className="center-icon">
                  <FaLayerGroup size={50} />
                  <h5>Platform as Code</h5>
                </div>
              </div>
              <div className="ecosystem-connections">
                {[
                  { name: "Security Tools", icon: <FaShieldAlt size={24} /> },
                  { name: "Monitoring", icon: <FaCogs size={24} /> },
                  { name: "Version Control", icon: <FaGitlab size={24} /> },
                  { name: "Cloud Services", icon: <FaCloud size={24} /> },
                  { name: "CI/CD Pipelines", icon: <FaJenkins size={24} /> },
                  { name: "Container Registry", icon: <FaDocker size={24} /> }
                ].map((item, index) => (
                  <motion.div 
                    className="ecosystem-item" 
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ 
                      transform: `rotate(${index * 60}deg) translate(120px) rotate(-${index * 60}deg)`
                    }}
                  >
                    <div className="ecosystem-icon">{item.icon}</div>
                    <div className="ecosystem-name">{item.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'benefits':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Key Benefits</h2>
            <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
              {[
                { 
                  title: "Consistency", 
                  icon: <FaLayerGroup size={40} className="benefit-icon" />, 
                  desc: "Identical environments across development, staging, and production eliminate 'it works on my machine' problems" 
                },
                { 
                  title: "Rapid Scalability", 
                  icon: <FaRocket size={40} className="benefit-icon" />, 
                  desc: "Spin up fully-configured environments in minutes—scalable on demand" 
                },
                { 
                  title: "DevOps Efficiency", 
                  icon: <FaUsersCog size={40} className="benefit-icon" />, 
                  desc: "Eliminate manual configurations, reduce errors, and increase team productivity" 
                },
                { 
                  title: "Cost Reduction", 
                  icon: <FaCloudDownloadAlt size={40} className="benefit-icon" />, 
                  desc: "Automate repetitive tasks and optimize cloud/resource utilization to cut down OPEX" 
                },
                { 
                  title: "Auditability", 
                  icon: <FaShieldAlt size={40} className="benefit-icon" />, 
                  desc: "Full platform state is version-controlled and auditable—perfect for meeting regulatory requirements" 
                },
                { 
                  title: "Automation", 
                  icon: <FaSyncAlt size={40} className="benefit-icon" />, 
                  desc: "Streamlines software deployment and update processes with consistent results" 
                }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card shadow-lg border-0 p-4 h-100 benefit-card">
                    <div className="benefit-icon-container">
                      {benefit.icon}
                    </div>
                    <h5 className="text-center">{benefit.title}</h5>
                    <p className="text-center">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Success Stories</h3>
            <div className="success-stories">
              {[
                { 
                  company: "Enterprise Financial Services", 
                  result: "Reduced platform deployment time from weeks to hours using platform-as-code practices, with 90% fewer configuration errors." 
                },
                { 
                  company: "Global Media Company", 
                  result: "Automated deployments and configuration management reduced downtime by 80% and accelerated feature releases by 60%." 
                },
                { 
                  company: "Healthcare Solutions Provider", 
                  result: "CI/CD pipelines and containerization with platform-as-code enabled compliance-as-code, reducing audit preparation time by 70%." 
                }
              ].map((story, index) => (
                <motion.div className="story-card" key={index} variants={itemVariants} initial="hidden" animate="visible">
                  <div className="story-content">
                    <h5>{story.company}</h5>
                    <p>{story.result}</p>
                  </div>
                </motion.div> 
              ))}
              
            </div>
            
            <div className="metrics-banner mt-5">
              <h3 className="text-center mb-4">ROI of Platform as Code</h3>
              <div className="metrics-container">
                {[
                  { value: "70%", label: "Faster Time to Value" },
                  { value: "85%", label: "Reduction in Deployment Errors" },
                  { value: "35%", label: "Reduction in Development Costs" },
                  { value: "60%", label: "More Releases per Month" }
                ].map((metric, index) => (
                  <motion.div 
                    className="metric" 
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
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
            <h2 className="text-center text-primary mb-4">Key Solutions We Deliver</h2>
            <div className="solutions-grid">
              {[
                { 
                  title: "Cloud Migration & Modernization", 
                  desc: "Lift-and-shift legacy apps into cloud-native platforms using code.",
                  icon: <FaCloud size={40} /> 
                },
                { 
                  title: "Kubernetes & Container Management", 
                  desc: "Define clusters, Helm charts, ingress controllers, observability stacks, GitOps workflows and service meshes as code.",
                  icon: <FaDocker size={40} /> 
                },
                { 
                  title: "Developer Self-Service Portals", 
                  desc: "Portals that allow developers to spin up entire application stacks using PaaC blueprints.",
                  icon: <FaUsersCog size={40} /> 
                },
                { 
                  title: "CI/CD Pipeline Automation", 
                  desc: "Codify build, test, and deployment workflows for repeatable delivery processes.",
                  icon: <FaJenkins size={40} /> 
                },
                { 
                  title: "Disaster Recovery as Code", 
                  desc: "Automatically recover full platforms in alternate regions or datacenters using version-controlled platform definitions.",
                  icon: <FaSyncAlt size={40} /> 
                },
                { 
                  title: "DevSecOps Pipelines", 
                  desc: "Pipelines that build, test, secure, and deploy PaaC environments with vulnerability scanning and policy enforcement.",
                  icon: <FaShieldAlt size={40} /> 
                }
              ].map((solution, index) => (
                <motion.div 
                  className="solution-card" 
                  key={index} 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="solution-icon">
                    {solution.icon}
                  </div>
                  <h5>{solution.title}</h5>
                  <p>{solution.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Why Choose Our Platform as Code Service</h3>
            <div className="why-choose-us">
              {[
                { 
                  title: "End-to-End Expertise", 
                  desc: "From architecture design to automation and support, we bring full-stack knowledge across networks, DevOps, cloud, and platforms." 
                },
                { 
                  title: "Custom-Built Solutions", 
                  desc: "Every PaaC deployment is tailored to your business, compliance, and operational needs." 
                },
                { 
                  title: "Faster Time to Value", 
                  desc: "Our templated platform blueprints and automation pipelines accelerate time to deployment by up to 70%." 
                },
                { 
                  title: "Security-First Mindset", 
                  desc: "Security policies, IAM roles, network segmentation, and encryption are integrated from Day 0." 
                }
              ].map((item, index) => (
                <motion.div 
                  className="why-choose-item" 
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
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
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
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
                {[
                  {
                    title: "Documentation",
                    items: [
                      "Platform as Code Best Practices",
                      "Kubernetes & Docker Guides",
                      "CI/CD Implementation Strategies"
                    ]
                  },
                  {
                    title: "Training",
                    items: [
                      "DevOps & Platform Engineering",
                      "Container Orchestration",
                      "GitOps Workflow Workshop"
                    ]
                  },
                  {
                    title: "Community",
                    items: [
                      "Platform Engineering Community",
                      "Cloud Native Computing Foundation",
                      "DevOps Exchange Forums"
                    ]
                  }
                ].map((resource, index) => (
                  <div className="resource-card" key={index}>
                    <h5>{resource.title}</h5>
                    <ul className="list-unstyled">
                      {resource.items.map((item, i) => (
                        <li key={i}>
                          <FaArrowRight className="me-2 text-primary" /> {item}
                        </li>
                      ))}
                    </ul>
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
          position: "relative"
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Platform as Code
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Define, provision, and manage entire technology platforms using code
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/contact" className="cta-button" aria-label="Get started with Platform as Code">
            Get Started
            <FaArrowRight className="ms-2" />
          </Link>
        </motion.div>
      </div>
      <div className="hero-overlay"></div>

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

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container">
          <h3>Start Your Platform Automation Journey Today!</h3>
          <p>Contact us to see how Platform as Code can transform your technology delivery.</p>
          <Link to="/contact" className="cta-button-secondary" aria-label="Request a demo for Platform as Code">
            Request a Demo
            <FaArrowRight className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformAsCodePage;