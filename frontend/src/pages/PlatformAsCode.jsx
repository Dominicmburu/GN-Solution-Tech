import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight,
  FaDocker, FaGitlab, FaJenkins, FaCogs, FaShieldAlt, FaCloudDownloadAlt,
  FaSyncAlt, FaUsersCog, FaQuestionCircle, FaAward, FaCheckCircle, FaInfoCircle,
  FaHandshake, FaChartLine
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import "../assets/css/network.css";
import "../assets/css/TabsSection.css";
import backgroundImage from "../assets/platform3.webp";
import PageBanner from '../components/common/PageBanner';
import HoverLineCard from "../components/common/HoverLineCard";

// Intro Section Component
const PlatformAsCodeIntro = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-divider"></div>
            <h1 className="main-title">
              Platform as Code...
            </h1>
          </div>
          <div className="col-lg-7">
            <p className="intro-text">
              At GN Solutions, our Platform as Code approach brings DevOps-style agility, automation, and intelligence to managing entire technology platforms—whether in the cloud, hybrid, or on-prem environments.
            </p>
            <p className="intro-text" style={{ textAlign: 'justify' }}>
              Platform as Code (PaaC) represents the evolution of platform management into a programmable, automated, and scalable discipline. Traditionally, platform operations have been manual, error-prone, and siloed. With PaaC, your entire technology stack—services, runtime environments, network configurations, security policies, and CI/CD pipelines—is managed using code. This enables you to define, provision, test, and manage your platform the same way software is developed. PaaC transforms platforms from static, component-by-component management into dynamic, code-driven environments, accelerating service delivery, improving consistency, and enhancing visibility and control across your infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlatformAsCode = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeKey, setActiveKey] = useState(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'whychooseus', label: 'Why Choose Us', icon: <FaHandshake /> },
    { id: 'benefits', label: 'Key Benefits', icon: <FaAward /> },
    { id: 'solutions', label: 'Key Solutions', icon: <FaRocket /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> }
  ];

  const solutions = [
    {
      title: "PaaC Framework Design",
      desc: "Custom architecture for integrating PaaC into your environment—toolchain selection, workflows, and policies.",
      icon: <FaCogs size={40} />
    },
    {
      title: "Automated Platform Provisioning",
      desc: "Use tools like Terraform, Ansible, or Helm to automate infrastructure, services, and application stacks.",
      icon: <FaRocket size={40} />
    },
    {
      title: "CI/CD for Platforms",
      desc: "Implement pipelines with Jenkins, GitLab CI, or ArgoCD to test and deploy platform changes.",
      icon: <FaCode size={40} />
    },
    {
      title: "Kubernetes & Container Orchestration",
      desc: "Define clusters, Helm charts, and service meshes as code for scalable deployments.",
      icon: <FaDocker size={40} />
    },
    {
      title: "Observability & Monitoring",
      desc: "Integrate Prometheus, Grafana, or ELK stack for real-time platform insights.",
      icon: <FaChartLine size={40} />
    },
    {
      title: "Security & Compliance as Code",
      desc: "Embed IAM policies, encryption, and compliance checks (CIS, NIST) into platform code.",
      icon: <FaShieldAlt size={40} />
    },
    {
      title: "Multi-Cloud Platform Management",
      desc: "Automate and manage platforms across AWS, Azure, GCP, and on-prem.",
      icon: <FaCloud size={40} />
    },
    {
      title: "Developer Self-Service Portals",
      desc: "Enable developers to spin up full platform stacks using PaaC blueprints.",
      icon: <FaUsersCog size={40} />
    },
    {
      title: "Training & Enablement",
      desc: "Upskill your team with workshops and hands-on PaaC training.",
      icon: <FaLayerGroup size={40} />
    }
  ];

  const faqs = [
    {
      question: "Is Platform as Code suitable for small and medium businesses?",
      answer: "Yes. PaaC can be scaled to fit SMBs, offering cost-effective automation and reliability without enterprise-level complexity."
    },
    {
      question: "How is PaaC different from Infrastructure as Code (IaC)?",
      answer: "IaC focuses on provisioning infrastructure, while PaaC extends to the entire platform stack—services, applications, security, and CI/CD pipelines."
    },
    {
      question: "What platforms can be managed with PaaC?",
      answer: "Cloud-native platforms, Kubernetes clusters, CI/CD pipelines, observability stacks, and hybrid environments can all be managed with PaaC."
    },
    {
      question: "What tools do you use to implement PaaC?",
      answer: "We use Terraform, Ansible, Helm, Kubernetes, Docker, Jenkins, GitLab, Prometheus, and cloud-native SDKs across vendors like AWS, Azure, and GCP."
    },
    {
      question: "How long does a PaaC implementation take?",
      answer: "From weeks to months depending on scope, with a phased rollout starting with pilot automation."
    },
    {
      question: "Will you train our internal team?",
      answer: "Yes. We provide workshops, documentation, playbooks, and hands-on training for your teams."
    },
    {
      question: "Do I need to replace my current infrastructure for PaaC?",
      answer: "No. We integrate PaaC practices with your existing infrastructure and platforms."
    },
    {
      question: "Is Platform as Code secure?",
      answer: "Yes. PaaC enhances security by embedding governance, access controls, and compliance checks into the platform code, reducing manual errors."
    }
  ];

  const colorSchemes = [
    { primary: '#f08b0a', secondary: '#F2F2F2', accent: '#301934' },
    { primary: '#301934', secondary: '#F2F2F2', accent: '#f08b0a' },
    { primary: '#1e0f20', secondary: '#F2F2F2', accent: '#f08b0a' },
    { primary: '#f08b0a', secondary: '#301934', accent: '#F2F2F2' },
    { primary: '#000000', secondary: '#F2F2F2', accent: '#f08b0a' },
    { primary: '#301934', secondary: '#f08b0a', accent: '#1e0f20' },
    { primary: '#1e0f20', secondary: '#301934', accent: '#f08b0a' },
    { primary: '#f08b0a', secondary: '#1e0f20', accent: '#F2F2F2' },
    { primary: '#FFFFFF', secondary: '#301934', accent: '#f08b0a' }
  ];

  const handleAccordionChange = (eventKey) => {
    setActiveKey(eventKey);
  };

  const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

  // Counter component with easing effect
  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const endValue = parseInt(end.replace("+", "")) || parseInt(end);

    useEffect(() => {
      let startTime = null;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
        const easedProgress = easeOutQuad(progress); // Apply easing
        const currentCount = Math.floor(easedProgress * endValue);

        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
    }, [end, duration]);

    return (
      <span>
        {count}
        {end.includes("+") ? "+" : ""}
      </span>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <div className="intro-box">
              <PlatformAsCodeIntro />
            </div>

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Use Cases of Platform as Code</h3>
            <div className="d-flex justify-content-center mb-4">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <motion.div
              className="use-case-image-container mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://www.damcogroup.com/wp-content/uploads/2022/09/accelerate-modernization-with-low-code-insurance-platforms.jpg"
                alt="Platform as Code Use Case Illustration"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(var(--primary-color-rgb), 0.2)",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  display: "block",
                  margin: "0 auto"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </motion.div>
            <div className="row">
              {[
                { title: "Cloud-Native Platform Automation", desc: "Automatically provision and manage cloud-native application stacks." },
                { title: "Hybrid Platform Management", desc: "Streamline operations across cloud and on-prem environments." },
                { title: "Developer Productivity", desc: "Enable self-service platforms for faster development cycles." },
                { title: "Compliance & Security", desc: "Enforce consistent security and compliance policies through code." }
              ].map((useCase, index) => (
                <motion.div className="col-md-6 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                      <h5 style={{ color: "var(--ct-color)" }}>{useCase.title}</h5>
                      <p>{useCase.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Implementation Steps</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>

            <div className="position-relative py-3" style={{ marginBottom: "50px" }}>
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
                  step: "Define Platform Requirements",
                  desc: "Assess your platform and automation goals",
                  icon: <FaLayerGroup size={24} />,
                  nodeIcon: <FaLayerGroup size={20} />
                },
                {
                  step: "Choose Automation Tools",
                  desc: "Select tools like Terraform, Ansible, or Helm",
                  icon: <FaTools size={24} />,
                  nodeIcon: <FaTools size={20} />
                },
                {
                  step: "Implement Version Control",
                  desc: "Set up Git for platform configuration management",
                  icon: <FaCode size={24} />,
                  nodeIcon: <FaCode size={20} />
                },
                {
                  step: "Monitor & Validate",
                  desc: "Ensure reliability with continuous monitoring",
                  icon: <FaCheckCircle size={24} />,
                  nodeIcon: <FaCheckCircle size={20} />
                }
              ].map((step, index) => (
                <motion.div
                  className="row mb-5 position-relative"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
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
            <style jsx>{`
              @media (max-width: 768px) {
                .use-case-image-container {
                  text-align: center;
                }
                .use-case-image-container img {
                  max-width: 100%;
                }
              }
            `}</style>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Solutions We Provide</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="solutions-grid mb-5">
              {solutions.map((solution, index) => (
                <motion.div
                  className="card solution-card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}
                >
                  <div className="card border-0 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                      <div className="icon-circle-core">{solution.icon}</div>
                      <h5 style={{ color: "var(--ct-color)" }}>{solution.title}</h5>
                      <p>{solution.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'whychooseus':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Why Choose GN Solutions</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <motion.div
                  className="p-4 bg-white rounded shadow-lg h-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ border: "1px solid rgba(var(--primary-color-rgb), 0.2)" }}
                >
                  <h3 style={{ color: "var(--ct-color)" }} className="mb-4">Our Expertise</h3>
                  <p>At GN Solutions, we bring deep experience in platform engineering, DevOps, and automation to help enterprises evolve their legacy platforms into programmable, future-ready infrastructures.</p>
                  <div className="mt-4">
                    <h5 style={{ color: "var(--primary-color)" }}>We design PaaC solutions that are:</h5>
                    <ul className="list-unstyled mt-3">
                      {[
                        "Vendor-neutral and platform-agnostic",
                        "Secure by design, with integrated governance and compliance",
                        "Tailored to your environment—cloud, on-prem, or hybrid"
                      ].map((item, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-center">
                          <FaCheckCircle style={{ color: "var(--primary-color)", marginRight: "10px" }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-6">
                <motion.div
                  className="p-4 bg-white rounded shadow-lg h-100"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ border: "1px solid rgba(var(--primary-color-rgb), 0.2)" }}
                >
                  <h3 style={{ color: "var(--ct-color)" }} className="mb-4">Technology Stack</h3>
                  <div className="d-flex flex-wrap">
                    {[
                      { name: "Infrastructure as Code", icon: <FaCloud size={24} style={{ color: "var(--primary-color)" }} /> },
                      { name: "Container Orchestration", icon: <FaDocker size={24} style={{ color: "var(--primary-color)" }} /> },
                      { name: "CI/CD Integration", icon: <FaJenkins size={24} style={{ color: "var(--primary-color)" }} /> },
                      { name: "Version Control", icon: <FaCode size={24} style={{ color: "var(--primary-color)" }} /> },
                      { name: "Automated Testing", icon: <FaCheckCircle size={24} style={{ color: "var(--primary-color)" }} /> },
                      { name: "Observability as Code", icon: <FaChartLine size={24} style={{ color: "var(--primary-color)" }} /> }
                    ].map((tech, idx) => (
                      <div key={idx} className="tech-badge d-flex align-items-center mb-3 me-3 p-2 rounded" style={{
                        backgroundColor: "rgba(var(--primary-color-rgb), 0.1)",
                        border: "1px solid rgba(var(--primary-color-rgb), 0.2)"
                      }}>
                        {tech.icon}
                        <span className="ms-2">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Our Core Strengths</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                {
                  title: "Vendor-Neutral Approach",
                  desc: "We support multi-vendor platforms including AWS, Azure, GCP, Kubernetes, and more.",
                  icon: <FaHandshake size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Security-First Design",
                  desc: "Our solutions enhance security with integrated governance, compliance, and auditable configurations.",
                  icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Comprehensive Team Training",
                  desc: "We provide workshops, documentation, playbooks, and hands-on training for your teams.",
                  icon: <FaUsersCog size={40} style={{ color: "var(--primary-color)" }} />
                }
              ].map((strength, index) => (
                <motion.div
                  className="col-md-4 mb-4"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                      <div className="text-center mb-3">{strength.icon}</div>
                      <h5 style={{ color: "var(--ct-color)" }} className="text-center">{strength.title}</h5>
                      <p className="text-center">{strength.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
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
                { title: "Faster Time to Delivery", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} />, desc: "Implement platform changes in hours, not days." },
                { title: "Operational Consistency", icon: <FaLayerGroup size={40} style={{ color: "var(--primary-color)" }} />, desc: "Eliminate configuration drift and manual errors." },
                { title: "Enhanced Uptime", icon: <FaServer size={40} style={{ color: "var(--primary-color)" }} />, desc: "Proactive validations and test-driven deployments reduce downtime." },
                { title: "Full Visibility", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} />, desc: "Gain control over every change, with traceability and reporting." },
                { title: "Reduced Costs", icon: <FaCloudDownloadAlt size={40} style={{ color: "var(--primary-color)" }} />, desc: "Save on operational overhead through automation." },
                { title: "Empowered Teams", icon: <FaUsersCog size={40} style={{ color: "var(--primary-color)" }} />, desc: "Shift engineers from repetitive tasks to strategic work." }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                    <div className="text-center mb-3">{benefit.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }}>{benefit.title}</h5>
                    <p>{benefit.desc}</p>
                    </HoverLineCard>
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
                { company: "Global SaaS Provider", result: "Reduced platform deployment time from weeks to hours using Platform as Code." },
                { company: "Financial Tech Company", result: "Achieved 99.99% platform uptime through automated configuration management." },
                { company: "E-Commerce Enterprise", result: "Cut operational costs by 30% through platform automation." }
              ].map((story, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                    <h5 style={{ color: "var(--ct-color)" }}>{story.company}</h5>
                    <p>{story.result}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="metrics-banner">
                  <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">ROI of Platform as Code</h3>
                  <div className="d-flex justify-content-center mb-5">
                    <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                  </div>
                  <div className="row">
                    {[
                      {
                        value: "40",
                        label: "Reduction in operational costs",
                        image: "https://i.pinimg.com/736x/cf/91/c4/cf91c43d36fc951cd8199fda571770da.jpg",
                        alt: "Cost Reduction"
                      },
                      {
                        value: "80",
                        label: "Faster platform deployment",
                        image: "https://i.pinimg.com/736x/89/c1/4f/89c14f387f878f4be3797bd52bf152a5.jpg",
                        alt: "Fast Deployment"
                      },
                      {
                        value: "95",
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
                          <div className="position-absolute top-0 start-0 w-100" style={{
                            height: "4px",
                            background: "linear-gradient(90deg, var(--primary-color) 0%, rgba(var(--primary-color-rgb, 64, 36, 86), 0.6) 100%)"
                          }}></div>
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
                              <Counter end={metric.value} duration={4000} />%

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
                      }}
                    >
                      <Accordion.Header>
                        <div className="faq-question">
                          <span className="question-icon" style={{ paddingRight: "5px" }}>Q</span>
                          <span className="question-text" style={{ fontWeight: "600" }}>{faq.question}</span>
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
                    items: ["Terraform Guides", "Kubernetes Documentation", "Ansible Playbooks"]
                  },
                  {
                    title: "Training",
                    items: ["Platform Automation Workshops", "Container Orchestration Courses", "CI/CD Best Practices"]
                  },
                  {
                    title: "Community",
                    items: ["Platform Engineering Community", "Cloud Computing Foundation", "DevOps Forums"]
                  }
                ].map((resource, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="card border-0 p-4" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                      <HoverLineCard>
                      <h5 style={{ color: "var(--ct-color)" }}>{resource.title}</h5>
                      <ul className="list-unstyled">
                        {resource.items.map((item, i) => (
                          <li key={i}><FaArrowRight style={{ color: "var(--primary-color)", marginRight: "8px" }} /> {item}</li>
                        ))}
                      </ul>
                      </HoverLineCard>
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
        title="Platform as Code - Automate Your Technology Stack"
        subtitle="Leverage automation to deploy, manage, and optimize platforms efficiently."
        backgroundImage={backgroundImage}
        background="#0a1033"
        currentpage="Platform as Code"
      />
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
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="pacTabs" role="tablist">
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
                <div className="tab-content-container">
                  <div className="tab-content" id="pacTabsContent">
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
      <section style={{
        backgroundColor: "var(--tt-color)",
        padding: "50px 0",
        marginTop: "40px"
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <h3 className="text-white mb-3">Start Your Platform Automation Journey Today!</h3>
              <p className="text-white-50 mb-0">Contact us to see how Platform as Code can transform your business.</p>
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

export default PlatformAsCode;