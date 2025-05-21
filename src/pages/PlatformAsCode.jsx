import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight, 
  FaDocker, FaGitlab, FaJenkins, FaCogs, FaShieldAlt, FaCloudDownloadAlt, 
  FaSyncAlt, FaUsersCog, FaQuestionCircle, FaAward, FaCheckCircle, FaInfoCircle,
  FaHeadset, FaUserShield, FaChartLine, FaEye
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
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
           Platform as Code (PaaC) as a Service is a modern IT delivery model that enables organizations to define, provision, and manage entire technology platforms using code. Unlike Infrastructure as Code (IaC), which focuses on provisioning infrastructure, PaaC extends this concept to include the entire application platform stack—services, runtime environments, network configurations, security policies, monitoring, CI/CD pipelines, and more—all written and maintained as code.
At GN Solutions, our PaaC as a Service offering abstracts the complexity of building and operating cloud-native platforms, empowering businesses to accelerate innovation, ensure consistency, and reduce operational overhead.

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
    { id: 'whychooseus', label: 'Why Choose Us', icon: <FaAward /> },
    { id: 'benefits', label: 'Key Benefits', icon: <FaCheckCircle /> },
    { id: 'solutions', label: 'Key Solutions', icon: <FaRocket /> },
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
      answer: "Not at all. We offer a fully managed service. Our team handles everything from setup and configuration to training and support." 
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
      case 'whychooseus':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Why Choose Our Platform as Code Service</h2>
            <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
              {[
                { 
                  title: "End-to-End Expertise", 
                  desc: "From architecture design to automation and support, we bring full-stack knowledge across networks, DevOps, cloud, and platforms.",
                  icon: <FaUserShield size={40} className="why-choose-icon" />
                },
                { 
                  title: "Custom-Built Solutions", 
                  desc: "Every PaaC deployment is tailored to your business, compliance, and operational needs.",
                  icon: <FaTools size={40} className="why-choose-icon" />
                },
                { 
                  title: "Faster Time to Value", 
                  desc: "Our templated platform blueprints and automation pipelines accelerate time to deployment by up to 70%.",
                  icon: <FaChartLine size={40} className="why-choose-icon" />
                },
                { 
                  title: "Security-First Mindset", 
                  desc: "Security policies, IAM roles, network segmentation, and encryption are integrated from Day 0.",
                  icon: <FaShieldAlt size={40} className="why-choose-icon" />
                },
                { 
                  title: "Ongoing Support and Optimization", 
                  desc: "We offer 24/7 support, performance monitoring, and continuous improvement of your platform codebase.",
                  icon: <FaHeadset size={40} className="why-choose-icon" />
                },
                { 
                  title: "Reusable Blueprints and Modules", 
                  desc: "Create and share platform blueprints for repeatable deployments across teams or environments.",
                  icon: <FaLayerGroup size={40} className="why-choose-icon" />
                }
              ].map((item, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card shadow-lg border-0 p-4 h-100 why-choose-card">
                    <div className="text-center mb-3">
                      {item.icon}
                    </div>
                    <h5 className="text-center">{item.title}</h5>
                    <p className="text-center">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Our Approach to Platform as Code</h3>
            <div className="approach-container">
              <div className="row">
                <div className="col-md-6">
                  <motion.div 
                    className="approach-card"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h4>Multi-Cloud and Hybrid Support</h4>
                    <p>
                      Our Platform as Code service enables deployment across AWS, Azure, GCP, or on-premise 
                      environments with unified code templates. We manage the complexity of different cloud 
                      providers so you can focus on your applications.
                    </p>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div 
                    className="approach-card"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h4>Automated Lifecycle Management</h4>
                    <p>
                      We implement full lifecycle management (create, update, destroy) for your platform components, 
                      ensuring that every resource is properly provisioned, updated, and decommissioned when needed.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <motion.div 
                    className="approach-card"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h4>Proactive Performance Optimization</h4>
                    <p>
                      Our team continuously monitors and optimizes your platform for performance, 
                      cost efficiency, and security using HA architectures, auto-scaling, and 
                      self-healing components.
                    </p>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div 
                    className="approach-card"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h4>Knowledge Transfer & Training</h4>
                    <p>
                      We don't just build your platform—we ensure your team knows how to leverage it. 
                      Our comprehensive training and documentation empowers your developers and operators.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Our Commitment to Success</h3>
            <div className="commitment-container">
              <motion.div 
                className="commitment-banner"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="commitment-content">
                  <FaEye size={40} className="mb-3" />
                  <h4>Vision</h4>
                  <p>
                    We believe that Platform as Code is not just about technology, but about enabling 
                    organizations to innovate faster, operate more efficiently, and scale confidently. 
                    We're committed to helping you transform your technology delivery through automation, 
                    consistency, and operational excellence.
                  </p>
                </div>
              </motion.div>
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