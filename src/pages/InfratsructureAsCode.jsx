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
  FaCheckCircle,
  FaLock,
  FaCheck
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import "../assets/css/infrastructure.css";
import "../assets/css/TabsSection.css";
import backgroundImage from "../assets/platform.webp";
import PageBanner from '../components/common/PageBanner';


// Intro Section Component
const InfrastructureAsCodeIntro = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-divider"></div>
            <h1 className="main-title">
              What is Infrastructure as Code?
            </h1>
          </div>
          <div className="col-lg-7">
            <p className="intro-text">
              Infrastructure as Code (IaC) is a modern approach to provisioning and managing IT infrastructure using machine-readable configuration files, rather than through manual processes. It allows system administrators and DevOps teams to define infrastructure using code, enabling repeatable, reliable, and automated deployments. This approach streamlines the management of resources and minimizes human error, ensuring consistency across environments.
              By treating infrastructure definitions just like application code, teams gain the ability to version, review, and reuse configurations in a consistent and automated way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfrastructureAsCode = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeKey, setActiveKey] = useState(null);


  const handleAccordionChange = (eventKey) => {
    setActiveKey(eventKey);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'why-choose-us', label: 'Why Choose Us', icon: <FaAward /> },
    { id: 'benefits', label: 'Key Benefits', icon: <FaRocket /> },
    { id: 'solutions', label: 'Key Solutions', icon: <FaTools /> },
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
          <><div className="container py-5">
            <div className="intro-box">
              <InfrastructureAsCodeIntro />
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Principles</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                {
                  title: "Declarative Definitions",
                  desc: "Define the desired end state of resources and let the IaC engine handle provisioning steps.",
                  icon: <FaCheckCircle size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Idempotency",
                  desc: "Applying the same configuration multiple times yields the same infrastructure state, preventing configuration drift.",
                  icon: <FaCheckCircle size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Version Control",
                  desc: "Store all infrastructure definitions in source control (Git), enabling collaboration, history tracking, and rollback.",
                  icon: <FaCheckCircle size={40} style={{ color: "var(--primary-color)" }} />
                }
              ].map((principle, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="text-center mb-3">{principle.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{principle.title}</h5>
                    <p className="text-center">{principle.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Features of Our IaC Service</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
              {[
                {
                  title: "Code-Driven Infrastructure",
                  icon: <FaCode size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Use industry-standard tools (Terraform, Ansible, CloudFormation, etc.) to define infrastructure resources programmatically."
                },
                {
                  title: "Multi-Cloud & Hybrid Support",
                  icon: <FaCloud size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Deploy infrastructure on AWS, Azure, Google Cloud, or on-premises data centers with consistent automation."
                },
                {
                  title: "Modular and Reusable Templates",
                  icon: <FaLayerGroup size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Use customizable and scalable code modules for common services like load balancers, firewalls, and databases."
                },
                {
                  title: "CI/CD Integration",
                  icon: <FaRocket size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Seamlessly integrate with your CI/CD pipelines for automated infrastructure testing and delivery."
                },
                {
                  title: "Drift Detection & Compliance",
                  icon: <FaTools size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Automatically detect and remediate configuration drift and enforce policies for compliance and security."
                },
                {
                  title: "Role-Based Access Control & Auditing",
                  icon: <FaLock size={30} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Track changes and manage who can apply, modify, or destroy infrastructure using granular access control."
                }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="mb-3">{feature.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }}>{feature.title}</h5>
                    <p className="text-muted mb-0">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div><h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Use Cases of Infrastructure as Code</h3><div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div><div className="row">
              {[
                { title: "Cloud Infrastructure", desc: "Rapidly provision and manage cloud resources." },
                { title: "Hybrid Environments", desc: "Consistently manage resources across multiple platforms." },
                { title: "Continuous Deployment", desc: "Integrate infrastructure deployment into CI/CD pipelines." },
                { title: "Disaster Recovery", desc: "Quickly rebuild infrastructure in case of failures." }
              ].map((useCase, index) => (
                <motion.div className="col-md-6 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <h5 style={{ color: "var(--ct-color)" }}>{useCase.title}</h5>
                    <p>{useCase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div></>

        );

      case 'why-choose-us':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Why Choose Us</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
              {[
                {
                  title: "Expertise Across Technologies",
                  icon: <FaTools size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Our team has hands-on experience with leading tools like Terraform, Ansible, and Pulumi, and across platforms including AWS, Azure, GCP, and VMware."
                },
                {
                  title: "Customized Solutions",
                  icon: <FaLayerGroup size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "We don't believe in one-size-fits-all. We tailor IaC strategies to your environment, whether you're starting fresh or transitioning from manual configurations."
                },
                {
                  title: "Security and Compliance First",
                  icon: <FaLock size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "We integrate DevSecOps practices, ensuring your infrastructure is compliant, auditable, and protected by policy-as-code."
                },
                {
                  title: "End-to-End Delivery",
                  icon: <FaRocket size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "From architecture design to code development, deployment, and ongoing support—we handle it all."
                },
                {
                  title: "Training and Handover",
                  icon: <FaCode size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "We empower your teams with documentation, training, and best practices so you remain in control."
                }
              ].map((advantage, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="mb-3">{advantage.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }}>{advantage.title}</h5>
                    <p className="text-muted mb-0">{advantage.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="row mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <div className="col-12">
                <div className="card border-0 p-5 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                  <h3 style={{ color: "var(--tt-color)" }} className="mb-4">We don't just automate infrastructure—we engineer resilience, speed, and agility into your business.</h3>
                  <Link to="/contact" className="btn" style={{
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                    padding: "12px 25px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}>
                    Start Your IaC Journey <FaArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        );
      case 'benefits':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Benefits of Infrastructure as Code</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div className="row text-center" variants={containerVariants} initial="hidden" animate="visible">
              {[
                {
                  title: "Speed and Efficiency",
                  icon: <FaRocket size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Provision infrastructure in minutes instead of hours or days."
                },
                {
                  title: "Consistency and Repeatability",
                  icon: <FaCode size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Eliminate human error by automating standard environments with code."
                },
                {
                  title: "Scalability",
                  icon: <FaLayerGroup size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Easily replicate infrastructure across multiple environments and regions."
                },
                {
                  title: "Cost Optimization",
                  icon: <FaServer size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Decommission unused resources automatically and track infrastructure costs with greater visibility."
                },
                {
                  title: "Version Control and Auditability",
                  icon: <FaCode size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Track changes, roll back to previous states, and maintain a full audit trail using Git-based workflows."
                },
                {
                  title: "Disaster Recovery Ready",
                  icon: <FaCloud size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Rebuild entire environments from code in case of a failure or outage."
                }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="mb-3">{benefit.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }}>{benefit.title}</h5>
                    <p className="text-muted mt-2 mb-0">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-4 mt-5">Success Stories</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
              {[
                { company: "Global E-commerce Platform", result: "Reduced infrastructure deployment time from days to minutes using Terraform." },
                { company: "Financial Services Provider", result: "Achieved 99.99% uptime through automated infrastructure management." },
                { company: "Healthcare Organization", result: "Cut operational costs by 40% through infrastructure optimization." }
              ].map((story, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="d-flex align-items-center mb-3">
                      <FaCheckCircle style={{ color: "var(--primary-color)" }} className="me-2" size={24} />
                      <h5 style={{ color: "var(--ct-color)" }} className="mb-0">{story.company}</h5>
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
                <div className="metrics-banner">
                  <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">ROI of Infrastructure as Code</h3>
                  <div className="d-flex justify-content-center mb-5">
                    <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                  </div>
                  <div className="row">
                    {[
                      {
                        value: "30-50%",
                        label: "Reduction in operational costs",
                        image: "https://i.pinimg.com/736x/cf/91/c4/cf91c43d36fc951cd8199fda571770da.jpg",
                        alt: "Cost Reduction"
                      },
                      {
                        value: "75%",
                        label: "Faster deployment time",
                        image: "https://i.pinimg.com/736x/89/c1/4f/89c14f387f878f4be3797bd52bf152a5.jpg",
                        alt: "Fast Deployment"
                      },
                      {
                        value: "90%",
                        label: "Reduction in configuration errors",
                        image: "https://i.pinimg.com/736x/f7/bd/eb/f7bdebbd732438479a7de7f3a56c3e7b.jpg",
                        alt: "Error Reduction"
                      }
                    ].map((metric, index) => (
                      <motion.div
                        className="col-md-4 col-sm-6 mb-4"
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
                            background: "linear-gradient(90deg, var(--primary-color) 0%, rgba(var(--primary-color-rgb, 240, 139, 10), 0.6) 100%)"
                          }}></div>

                          {/* Metric circle background */}
                          <div className="position-absolute" style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, rgba(var(--primary-color-rgb, 240, 139, 10), 0.05) 0%, rgba(var(--primary-color-rgb, 240, 139, 10), 0.1) 100%)",
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
              </div>
            </motion.div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Solutions We Offer</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
              {[
                {
                  title: "IaC Framework Development",
                  icon: <FaCode size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Custom-built infrastructure automation frameworks using Terraform, Ansible, or a hybrid approach."
                },
                {
                  title: "Multi-Cloud and Hybrid Deployments",
                  icon: <FaCloud size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Unified IaC strategies across AWS, Azure, GCP, and on-premises environments."
                },
                {
                  title: "CI/CD Pipeline Integration",
                  icon: <FaRocket size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Automate your full software delivery lifecycle, including infrastructure updates."
                },
                {
                  title: "Policy as Code",
                  icon: <FaServer size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Enforce security, compliance, and governance through tools like OPA (Open Policy Agent)."
                },
                {
                  title: "Modular & Reusable Templates",
                  icon: <FaLayerGroup size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Pre-built modules for common services to ensure quick, reliable deployments."
                },
                {
                  title: "IaC as a Service (IaCaaS)",
                  icon: <FaTools size={40} style={{ color: "var(--primary-color)", marginBottom: "1rem" }} />,
                  desc: "Fully managed IaC delivery and support, enabling you to focus on your core business."
                }
              ].map((solution, index) => (
                <motion.div className="col-md-4 mb-4" key={index} variants={itemVariants}>
                  <div className="card border-0 p-4 h-100 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <div className="mb-3">{solution.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{solution.title}</h5>
                    <p className="text-muted text-center mb-0">{solution.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="row mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <div className="col-12">
                <div className="card border-0 p-5 text-center" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                  <h3 style={{ color: "var(--tt-color)" }} className="mb-4">We don't just automate infrastructure—we engineer resilience, speed, and agility into your business.</h3>
                  <Link to="/contact" className="btn" style={{
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                    padding: "12px 25px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}>
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
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Frequently Asked Questions</h2>
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
                      eventKey={index.toString()} key={index}
                      style={{
                        marginBottom: "15px",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}>
                      <Accordion.Header>
                        <div className="faq-question">
                          <span className="question-icon" style={{ paddingRight: "5px" }}>Q</span>
                          <span className="question-text" style={{ fontWeight: "600" }}>{faq.question}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body style={{ backgroundColor: "#f9fbff" }}>
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
            <motion.div className="mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Resources to Learn More</h3>
              <div className="d-flex justify-content-center mb-5">
                <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
              </div>
              <div className="row">
                {[
                  {
                    title: "Documentation",
                    items: ["Terraform Documentation", "Ansible User Guide", "Kubernetes Docs"]
                  },
                  {
                    title: "Training",
                    items: ["IaC Fundamentals Course", "Tool-specific certifications", "Hands-on workshops"]
                  },
                  {
                    title: "Community",
                    items: ["GitHub repositories", "Stack Overflow", "Tool-specific forums"]
                  }
                ].map((resource, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                      <h5 style={{ color: "var(--ct-color)" }} className="mb-3">{resource.title}</h5>
                      <ul className="list-unstyled">
                        {resource.items.map((item, i) => (
                          <li key={i} className="mb-2">
                            <FaArrowRight style={{ color: "var(--primary-color)", marginRight: "8px" }} /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div >
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="container-fluid p-0">
      <PageBanner
        title="Infrastructure as Code - Automate Your Platform"
        subtitle="Transform Infrastructure Management Through Intelligent Automation"
        backgroundImage={backgroundImage}
        background="#0a1033"
        currentpage="Infrastructure as Code"
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
                          <span style={{ color: "var(--tt-color)" }} className="tab-text ms-2">{tab.label}</span>
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
            <h2 style={{ color: "var(--tt-color)" }} className="display-5 fw-bold">What Our Clients Say</h2>
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
              { quote: "Our deployment time went from days to minutes, and configuration errors dropped by over 90%.", author: "CTO, Global Retail Company" },
              { quote: "The ability to version control our infrastructure has been a game-changer for our team's productivity.", author: "DevOps Lead, Financial Services" },
              { quote: "The monitoring and security integration has helped us maintain compliance while moving faster.", author: "Security Director, Healthcare Tech" }
            ].map((testimonial, index) => (
              <motion.div
                className="col-lg-4 mb-4"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                  <div className="d-flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "var(--primary-color)" }} className="me-1">★</span>
                    ))}
                  </div>
                  <p className="testimonial-quote mb-4">"{testimonial.quote}"</p>
                  <div className="d-flex align-items-center mt-auto">
                    <div>
                      <p style={{ color: "var(--ct-color)" }} className="mb-0 fw-bold">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section style={{ backgroundColor: "var(--tt-color)", padding: "50px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white mb-3">
                  Revolutionize Your Infrastructure Management Today!
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-white-50 mb-0">
                  Contact us to see how Infrastructure as Code can transform your operations.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureAsCode;