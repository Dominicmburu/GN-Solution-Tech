import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaNetworkWired, 
  FaCode, 
  FaServer, 
  FaRobot, 
  FaChartLine, 
  FaUserCog,
  FaClipboardCheck,
  FaLightbulb
} from "react-icons/fa";

// Hero background image - update path as needed
import backgroundImage from "../assets/Automation.jpg";

// Automation services with detailed information
const automationServices = [
  {
    id: "network-as-code",
    title: "Network as Code",
    icon: <FaNetworkWired size={40} className="text-info" />,
    shortDescription: "Automate network deployment and management using infrastructure as code principles.",
    fullDescription: "Transform your network infrastructure management with our Network as Code solutions. By applying DevOps methodologies to network operations, we enable your organization to provision, configure, and manage network infrastructure programmatically through code rather than manual processes.",
    benefits: [
      "Reduce network configuration errors by up to 70%",
      "Accelerate network changes deployment from days to minutes",
      "Ensure consistent network configuration across all environments",
      "Enable version control and audit trails for all network changes"
    ],
    technologies: ["Terraform", "Ansible", "Python", "Network APIs", "CI/CD pipelines"],
    caseStudy: {
      title: "Financial Services Network Transformation",
      description: "We implemented Network as Code practices for a European financial services company, automating their complex network infrastructure across 50+ locations. This resulted in 90% faster deployment times and virtually eliminated configuration errors."
    }
  },
  {
    id: "platform-as-code",
    title: "Platform as Code",
    icon: <FaServer size={40} className="text-info" />,
    shortDescription: "Automated infrastructure provisioning and configuration for efficient IT operations.",
    fullDescription: "Our Platform as Code solutions provide comprehensive infrastructure automation, allowing you to define your entire technology stack as code. This approach enables rapid, consistent provisioning of servers, storage, networking, and middleware components across on-premise data centers and cloud environments.",
    benefits: [
      "Provision complete environments in minutes instead of weeks",
      "Ensure consistency between development, testing, and production",
      "Scale infrastructure resources up or down based on actual needs",
      "Implement automated testing for infrastructure configurations"
    ],
    technologies: ["Kubernetes", "Docker", "AWS CloudFormation", "Azure Resource Manager", "Google Cloud Deployment Manager", "Pulumi"],
    caseStudy: {
      title: "E-commerce Platform Migration",
      description: "We helped an e-commerce company codify their entire platform infrastructure, enabling them to migrate seamlessly between cloud providers and reduce infrastructure costs by 40% while improving system reliability."
    }
  },
  {
    id: "software-as-code",
    title: "Software as Code",
    icon: <FaCode size={40} className="text-info" />,
    shortDescription: "Streamline software development lifecycle through automated CI/CD pipelines.",
    fullDescription: "Our Software as Code approach applies automation throughout the entire software development lifecycle. We implement robust CI/CD pipelines that automate building, testing, and deploying applications, ensuring rapid delivery of high-quality software with minimal human intervention.",
    benefits: [
      "Reduce software release cycles from months to days or hours",
      "Automatically detect and prevent defects early in development",
      "Enable continuous delivery of new features to production",
      "Improve code quality through automated testing and verification"
    ],
    technologies: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "ArgoCD", "Automated testing frameworks"],
    caseStudy: {
      title: "Healthcare Software Delivery Transformation",
      description: "We implemented CI/CD pipelines for a healthcare software provider, reducing their release cycle from 3 months to weekly releases while improving reliability and maintaining strict compliance requirements."
    }
  }
];

// Common automation challenges and solutions
const challengesSolutions = [
  {
    challenge: "Manual Configuration Errors",
    solution: "Standardized templates and automated validation checks eliminate human-error in configurations.",
    icon: <FaClipboardCheck size={30} className="text-warning" />
  },
  {
    challenge: "Slow Deployment Processes",
    solution: "CI/CD pipelines and automated testing reduce deployment times from weeks to hours.",
    icon: <FaRobot size={30} className="text-warning" />
  },
  {
    challenge: "Inconsistent Environments",
    solution: "Infrastructure as code ensures development, testing, and production environments are identical.",
    icon: <FaUserCog size={30} className="text-warning" />
  },
  {
    challenge: "Scaling Limitations",
    solution: "Automated provisioning allows resources to scale up or down based on actual demand.",
    icon: <FaChartLine size={30} className="text-warning" />
  }
];

// Automation benefits with metrics
const automationBenefits = [
  { metric: "70%", description: "Reduction in configuration errors" },
  { metric: "60%", description: "Faster deployment cycles" },
  { metric: "40%", description: "Lower operational costs" },
  { metric: "90%", description: "More time for innovation" }
];

// Easing function: easeOutQuad
const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

// Counter component with easing effect
const Counter = ({ end, duration = 2000, startAnimation }) => {
  const [count, setCount] = useState(0);
  const endValue = parseInt(end); // Convert percentage string to number

  useEffect(() => {
    if (!startAnimation) return; // Only start animation if triggered

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
  }, [end, duration, startAnimation]);

  return <span>{count}%</span>;
};

const BusinessProcessAutomation = () => {
  const [activeTab, setActiveTab] = useState(automationServices[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Map service IDs to their corresponding route paths
  const serviceRoutes = {
    "network-as-code": "/services/network-as-code",
    "platform-as-code": "/services/infrastructure-as-code",
    "software-as-code": "/services/software-as-code"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <motion.div 
        className="hero-section text-center text-white py-5"
        style={{ 
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage}) center/cover no-repeat`, 
          padding: '120px 20px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.h1
            className="display-4 fw-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              background: 'transparent', 
              color: '#f08b0a',
              position: 'relative',
              zIndex: 10
            }}
          >
            Business Process Automation
          </motion.h1>
          <motion.p
            className="lead mt-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Transform your IT operations with code-driven automation solutions that reduce errors, 
            accelerate deployments, and free your team to focus on innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="d-flex justify-content-center gap-3"
          >
            <Link to="/contact" className="btn btn-warning btn-lg fw-bold px-4 py-2">
              Request Automation Assessment
            </Link>
            <a href="#automation-services" className="btn btn-outline-light btn-lg px-4 py-2">
              Explore Solutions
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Expert Introduction */}
      <div className="bg-light py-5" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h2 className="mb-4">Expert-Led Automation Solutions</h2>
              <p className="lead">
                Led by professionals with 17+ years of experience in network operations and automation,
                our team has implemented automation solutions for global enterprises across multiple industries.
              </p>
              <p>
                Our automation experts have managed large-scale network deployments, data center operations,
                and complex IT transformations. We bring this experience to every automation project,
                ensuring practical, reliable, and scalable solutions.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <span className="badge bg-info p-2">DevOps</span>
                <span className="badge bg-info p-2">JNCIA-DevOps</span>
                <span className="badge bg-info p-2">Cisco DevOps</span>
                <span className="badge bg-info p-2">CCNP</span>
                <span className="badge bg-info p-2">ITIL</span>
                <span className="badge bg-info p-2">Prince2</span>
              </div>
            </motion.div>
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="row text-center">
                {automationBenefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx} 
                    className="col-6 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                  >
                    <div className="bg-white shadow p-4 rounded">
                      <h2 className="display-4 fw-bold text-info">
                        <Counter end={benefit.metric} duration={2000} startAnimation={isVisible} />
                      </h2>
                      <p className="mb-0">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Automation Services Section */}
      <div id="automation-services" className="container py-5">
        <motion.h2 
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Our Automation Solutions
        </motion.h2>

        {/* Service Navigation Tabs */}
        <div className="d-flex justify-content-center mb-4">
          <ul className="nav nav-pills">
            {automationServices.map((service, index) => (
              <li className="nav-item" key={index}>
                <button 
                  className={`nav-link ${activeTab === service.id ? 'active bg-info' : ''} mx-2`}
                  onClick={() => setActiveTab(service.id)}
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Content */}
        <div className="tab-content">
          {automationServices.map((service, index) => (
            <motion.div 
              key={index}
              className={`tab-pane fade ${activeTab === service.id ? 'show active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === service.id ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="row align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0">
                  <div className="text-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="lead">{service.fullDescription}</p>
                  
                  <h5 className="mt-4 mb-3">Key Benefits</h5>
                  <ul className="list-unstyled">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-2">
                        <div className="d-flex align-items-center">
                          <FaLightbulb className="text-warning me-2" />
                          <span>{benefit}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={serviceRoutes[service.id]} className="btn btn-info mt-3">
                    Learn More
                  </Link>
                </div>
                
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 h-100">
                    <div className="card-body p-4">
                      <h5 className="card-title border-bottom pb-3 mb-3">Technologies & Tools</h5>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="badge bg-light text-dark p-2">{tech}</span>
                        ))}
                      </div>
                      
                      <h5 className="card-title border-bottom pb-3 mb-3">Case Study Highlight</h5>
                      <h6>{service.caseStudy.title}</h6>
                      <p className="text-muted">{service.caseStudy.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Challenges Section */}
      <div className="bg-dark text-white py-5">
        <div className="container">
          <motion.h2 
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Common Challenges We Solve
          </motion.h2>
          
          <div className="row">
            {challengesSolutions.map((item, index) => (
              <motion.div 
                className="col-md-6 col-lg-3 mb-4" 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="bg-dark bg-opacity-50 p-4 rounded h-100">
                  <div className="text-center mb-3">{item.icon}</div>
                  <h5 className="text-warning text-center">{item.challenge}</h5>
                  <p className="text-light text-center">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Our Process Section */}
      <div className="container py-5">
        <motion.h2 
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Our Automation Implementation Process
        </motion.h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="position-relative">
              {/* Process Timeline */}
              <div className="position-absolute top-0 bottom-0 start-50 translate-middle-x" style={{ width: '2px', backgroundColor: '#dee2e6' }}></div>
              
              {/* Process Steps */}
              {[
                { 
                  step: 1, 
                  title: "Assessment & Discovery", 
                  description: "We analyze your current processes, identify automation opportunities, and define clear objectives." 
                },
                { 
                  step: 2, 
                  title: "Solution Design", 
                  description: "Our experts design a tailored automation strategy leveraging the most suitable technologies for your needs." 
                },
                { 
                  step: 3, 
                  title: "Implementation", 
                  description: "We deploy the automation solutions with minimal disruption to your ongoing operations." 
                },
                { 
                  step: 4, 
                  title: "Testing & Validation", 
                  description: "Rigorous testing ensures your automation solutions work flawlessly and meet all requirements." 
                },
                { 
                  step: 5, 
                  title: "Training & Knowledge Transfer", 
                  description: "We train your team on the new automation tools and processes to ensure long-term success." 
                },
                { 
                  step: 6,
                  title: "Ongoing Support & Optimization", 
                  description: "Our team provides continuous support and regularly optimizes your automation solutions." 
                }
              ].map((item, index) => (
                <motion.div 
                  className="row mb-4 position-relative"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <div className={`col-6 ${index % 2 === 0 ? 'text-end pe-5' : 'offset-6 ps-5'}`}>
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <h5 className="card-title text-info">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="rounded-circle bg-info text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      {item.step}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <motion.div 
        className="bg-info bg-opacity-10 py-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="container">
          <h3 className="mb-4">Ready to Automate Your Business Processes?</h3>
          <p className="lead mb-4">
            Let our experts show you how automation can transform your operations, 
            reduce costs, and accelerate your business growth.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/contact" className="btn btn-warning btn-lg px-5 py-3 fw-bold">
              Request Free Consultation
            </Link>
            <Link to="/case-studies" className="btn btn-outline-info btn-lg px-5 py-3">
              View Success Stories
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessProcessAutomation;