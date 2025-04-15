import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaDocker, FaGitlab, FaJenkins, FaCogs, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import backgroundImage from "../assets/software.jpg";
import { Accordion } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/SoftwareAsCode.css";

const SoftwareAsCodePage = () => {
  const faqs = [
    { 
      question: "What is Software as Code?", 
      answer: "SaC defines software environments, configurations, and infrastructure using code to automate development, deployment, and maintenance." 
    },
    { 
      question: "What are the benefits of SaC?", 
      answer: "It improves automation, security, and consistency while reducing manual errors and speeding up software delivery." 
    },
    { 
      question: "How does it improve DevOps efficiency?", 
      answer: "By automating software configurations and deployments, SaC enhances collaboration, reduces operational overhead, and accelerates development cycles." 
    }
  ];

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

      {/* Responsive Quick Links Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center">
              {[
                { title: "What is Software as Code?", link: "#introduction" },
                { title: "Technologies & Tools", link: "#technologies" },
                { title: "Use Cases", link: "#usecases" },
                { title: "Implementation Steps", link: "#implementation" },
                { title: "Key Benefits", link: "#benefits" },
                { title: "Success Stories", link: "#success" },
                { title: "FAQs", link: "#faqs" }
              ].map((item, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link" href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div id="introduction" className="container py-5 introduction-section" style={{backgroundColor:"#0a1033"}}>
        <h2 className="text-center text-primary mb-4">What is Software as Code?</h2>
        <p className="text-center text-light fw-bold">
          Software as Code (SaC) automates software configurations, deployments, and environments through code,
          ensuring scalability, security, and efficiency while reducing human errors.
        </p>
      </div>

      {/* Technologies & Tools */}
      <div id="technologies" className="container py-5">
        <h2 className="text-center text-primary mb-4">Technologies & Tools</h2>
        <div className="row text-center">
          {["Terraform", "Ansible", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD"].map((tool, index) => (
            <motion.div className="col-md-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                <FaCogs size={40} className="text-info mb-3" />
                <h5>{tool}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div id="usecases" className="container py-5">
        <h2 className="text-center text-primary mb-4">Use Cases of Software as Code</h2>
        <div className="row">
          {[
            { title: "Automated Deployments", desc: "Streamline software release processes with automation." },
            { title: "Infrastructure as Code (IaC)", desc: "Define and manage infrastructure using code." },
            { title: "Configuration Management", desc: "Maintain consistency across multiple environments." },
            { title: "Continuous Integration & Delivery", desc: "Enhance DevOps efficiency with automated testing and deployment." }
          ].map((useCase, index) => (
            <motion.div className="col-md-6 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                <h5 className="text-info">{useCase.title}</h5>
                <p>{useCase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Implementation Steps */}
      <div id="implementation" className="container py-5">
        <h2 className="text-center text-primary mb-4">How to Implement Software as Code</h2>
        <div className="row">
          {[
            "Define requirements", 
            "Choose the right tools", 
            "Write infrastructure code", 
            "Test and validate"
          ].map((step, index) => (
            <motion.div className="col-md-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4 text-center">
                <h5 className="mt-3">{step}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div id="benefits" className="container py-5">
        <h2 className="text-center text-primary mb-4">Key Benefits</h2>
        <div className="row text-center">
          {[
            { icon: "⚡", title: "Automation", text: "Streamlines software deployment and updates." },
            { icon: "✅", title: "Consistency", text: "Ensures uniform configurations across environments." },
            { icon: "📜", title: "Version Control", text: "Tracks changes and rollbacks efficiently." },
            { icon: "🔐", title: "Security", text: "Enforces policies through automation." },
            { icon: "🚀", title: "Faster Deployment", text: "Speeds up the software lifecycle." }
          ].map((benefit, index) => (
            <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                <FaRocket size={40} className="text-info mb-3" />
                <h5>{benefit.title}</h5>
                <p className="mt-2">{benefit.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div id="success" className="container py-5">
        <h2 className="text-center text-primary mb-4">Success Stories</h2>
        <div className="row">
          {[
            { company: "Netflix", result: "Uses IaC to manage thousands of cloud instances efficiently." },
            { company: "Spotify", result: "Automated deployments reduced downtime by 80%." },
            { company: "Airbnb", result: "CI/CD pipelines speed up feature releases." }
          ].map((story, index) => (
            <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                <h5 className="text-info">{story.company}</h5>
                <p>{story.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faqs" className="container py-5">
        <h2 className="text-center text-primary mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Collapse eventKey={index.toString()}>
                <Accordion.Body>
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Collapse>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* Call to Action */}
      <div className="container py-5 CTA-section" style={{backgroundColor:"#00e8ff"}}>
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