import React from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Accordion } from 'react-bootstrap';
import backgroundImage from "../assets/platform.webp";
import "../assets/css/platform.css";

const InfrastructureAsCode = () => {
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

      {/* Responsive Quick Links Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center">
              {[
                { title: "What is Infrastructure as Code?", link: "#introduction" },
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
        <h2 className="text-center text-primary mb-4">What is Infrastructure as Code?</h2>
        <p className="text-center text-light fw-bold">
          Infrastructure as Code (IaC) is a practice that enables the automation and management of infrastructure through code instead of manual processes.
          By defining infrastructure components in configuration files, teams can version, test, and deploy infrastructure consistently and efficiently.
        </p>
      </div>

      {/* Technologies & Tools */}
      <div id="technologies" className="container py-5">
        <h2 className="text-center text-primary mb-4">Technologies & Tools</h2>
        <div className="row text-center">
          {[
            { name: "Terraform", icon: <FaCloud size={40} className="text-info mb-3" /> },
            { name: "Kubernetes", icon: <FaServer size={40} className="text-info mb-3" /> },
            { name: "Docker", icon: <FaTools size={40} className="text-info mb-3" /> },
            { name: "Ansible", icon: <FaCode size={40} className="text-info mb-3" /> }
          ].map((tech, index) => (
            <motion.div className="col-md-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                {tech.icon}
                <h5>{tech.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div id="usecases" className="container py-5">
        <h2 className="text-center text-primary mb-4">Use Cases of Infrastructure as Code</h2>
        <div className="row">
          {[
            { title: "Cloud Infrastructure", desc: "Rapidly provision and manage cloud resources." },
            { title: "Hybrid Cloud Environments", desc: "Consistently manage resources across multiple platforms." },
            { title: "Continuous Deployment", desc: "Integrate infrastructure deployment into CI/CD pipelines." },
            { title: "Disaster Recovery", desc: "Quickly rebuild infrastructure in case of failures." }
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
        <h2 className="text-center text-primary mb-4">How to Implement Infrastructure as Code</h2>
        <div className="row">
          {[
            "Define infrastructure requirements", 
            "Select appropriate IaC tools", 
            "Version control your configurations", 
            "Implement automated testing"
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
            { title: "Scalability", icon: <FaLayerGroup size={40} className="text-info mb-3" />, desc: "Easily scale your infrastructure with code-driven approaches" },
            { title: "Efficiency", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Reduce manual interventions and accelerate deployment cycles" },
            { title: "Consistency", icon: <FaCode size={40} className="text-info mb-3" />, desc: "Maintain uniform infrastructure across all environments" },
            { title: "Security", icon: <FaServer size={40} className="text-info mb-3" />, desc: "Implement robust security policies through code" },
            { title: "Cost Savings", icon: <FaRocket size={40} className="text-info mb-3" />, desc: "Optimize resource usage and reduce operational costs" }
          ].map((benefit, index) => (
            <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                {benefit.icon}
                <h5>{benefit.title}</h5>
                <p className="mt-2">{benefit.desc}</p>
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
            { company: "Global E-commerce Platform", result: "Reduced infrastructure deployment time from days to minutes using Terraform." },
            { company: "Financial Services Provider", result: "Achieved 99.99% uptime through automated infrastructure management." },
            { company: "Healthcare Organization", result: "Cut operational costs by 40% through infrastructure optimization." }
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