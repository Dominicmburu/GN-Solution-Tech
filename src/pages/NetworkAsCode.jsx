import React from "react";
import { Link } from "react-router-dom";
import { FaCodeBranch, FaServer, FaCloud, FaRocket, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import backgroundImage from "../assets/network-as-code.webp";
import { Accordion } from 'react-bootstrap';
 import "../assets/css/NetworkAsCode.css";

const NetworkAsCode = () => {
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
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
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

      {/* Responsive Quick Links Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center">
              {[
                { title: "What is Network as Code?", link: "#introduction" },
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
        <h2 className="text-center text-primary mb-4">What is Network as Code?</h2>
        <p className="text-center text-light fw-bold">
          Network as Code (NaC) automates the deployment and management of network infrastructure using code-based principles. 
          By treating network configurations as version-controlled code, businesses can achieve scalability, security, and operational efficiency.
        </p>
      </div>

      {/* Technologies & Tools */}
      <div id="technologies" className="container py-5">
        <h2 className="text-center text-primary mb-4">Technologies & Tools</h2>
        <div className="row text-center">
          {["Terraform", "Ansible", "Cisco NSO", "NetBox"].map((tool, index) => (
            <motion.div className="col-md-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                <FaTools size={40} className="text-info mb-3" />
                <h5>{tool}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div id="usecases" className="container py-5">
        <h2 className="text-center text-primary mb-4">Use Cases of Network as Code</h2>
        <div className="row">
          {["Cloud Network Automation", "Data Center Automation", "5G & Edge Computing", "Security & Compliance"].map((useCase, index) => (
            <motion.div className="col-md-6 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                <h5 className="text-info">{useCase}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Implementation Steps */}
      <div id="implementation" className="container py-5">
        <h2 className="text-center text-primary mb-4">How to Implement Network as Code</h2>
        <div className="row">
          {["Define Infrastructure", "Version Control", "Automate Deployment", "Monitor & Validate"].map((step, index) => (
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
          {["Automation", "Scalability", "Consistency", "Speed", "Security & Compliance"].map((benefit, index) => (
            <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                <FaRocket size={40} className="text-info mb-3" />
                <h5>{benefit}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div id="success" className="container py-5">
        <h2 className="text-center text-primary mb-4">Success Stories</h2>
        <div className="row">
          {["Enterprise Cloud Migration", "Telecom Network Automation"].map((story, index) => (
            <motion.div className="col-md-6 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="card shadow-lg border-0 p-4">
                <h5 className="text-info">{story}</h5>
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