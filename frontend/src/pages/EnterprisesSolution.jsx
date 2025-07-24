import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaCloud, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaSearchLocation, 
  FaChartLine, 
  FaBriefcase,
  FaClipboardCheck,
  FaLightbulb
} from "react-icons/fa";

// Hero background image - update path as needed
import backgroundImage from "../assets/enterprise.jpg";

// Enterprise solutions with detailed information
const enterpriseSolutions = [
  {
    id: "cloud-services",
    title: "Cloud Services",
    icon: <FaCloud size={40} className="text-info" />,
    shortDescription: "Secure, scalable cloud solutions customized for enterprise requirements.",
    fullDescription: "Our Enterprise Cloud Services offer secure, scalable, and cost-effective solutions tailored to your specific business needs. We help you navigate the complexities of cloud adoption, from migration planning to ongoing optimization, ensuring your enterprise realizes the full potential of cloud technology.",
    benefits: [
      "Reduce infrastructure costs by up to 40%",
      "Scale resources dynamically based on business demands",
      "Enhance disaster recovery capabilities with geo-redundant systems",
      "Accelerate deployment of new applications and services"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "VMware Cloud", "Hybrid Cloud", "Multi-cloud Management"],
    caseStudy: {
      title: "Manufacturing Enterprise Cloud Transformation",
      description: "We helped a global manufacturing company migrate their mission-critical applications to a hybrid cloud architecture, resulting in 35% cost savings and 60% faster time-to-market for new digital initiatives."
    }
  },
  {
    id: "security-solutions",
    title: "Security Solutions",
    icon: <FaShieldAlt size={40} className="text-info" />,
    shortDescription: "Comprehensive cybersecurity frameworks to protect enterprise assets and data.",
    fullDescription: "Our Enterprise Security Solutions provide comprehensive protection against evolving cyber threats. We implement multi-layered security frameworks that safeguard your critical assets, sensitive data, and digital infrastructure while ensuring compliance with industry regulations and standards.",
    benefits: [
      "Reduce security incidents through proactive threat detection",
      "Implement zero-trust security architecture for modern workforces",
      "Ensure compliance with industry regulations (GDPR, HIPAA, etc.)",
      "Minimize breach impact with advanced response protocols"
    ],
    technologies: ["SIEM", "Zero Trust Architecture", "Identity Management", "Endpoint Protection", "Vulnerability Management", "Security Compliance Automation"],
    caseStudy: {
      title: "Financial Services Security Transformation",
      description: "We implemented a comprehensive security framework for a multinational financial institution, reducing security incidents by 75% and achieving full regulatory compliance across multiple jurisdictions."
    }
  },
  {
    id: "network-solutions",
    title: "Network Solutions",
    icon: <FaNetworkWired size={40} className="text-info" />,
    shortDescription: "Next-generation networking infrastructure for digital enterprise operations.",
    fullDescription: "Our Enterprise Network Solutions deliver high-performance, secure, and resilient connectivity that supports your mission-critical applications and digital initiatives. We design and implement modern network architectures that provide the foundation for your digital transformation journey.",
    benefits: [
      "Increase network performance and reliability by up to 60%",
      "Enable secure access for remote and hybrid workforces",
      "Optimize bandwidth utilization and reduce operating costs",
      "Support expanding IoT and edge computing initiatives"
    ],
    technologies: ["SD-WAN", "SASE", "Zero Trust Network Access", "5G Integration", "Network Automation", "Intent-Based Networking"],
    caseStudy: {
      title: "Global Retail Network Transformation",
      description: "We modernized the network infrastructure for a retail enterprise with 500+ locations worldwide, implementing SD-WAN and Zero Trust security, resulting in 45% cost reduction and dramatically improved application performance."
    }
  },
  {
    id: "analytics-solutions",
    title: "Data & Analytics",
    icon: <FaSearchLocation size={40} className="text-info" />,
    shortDescription: "Transform raw data into actionable business intelligence for strategic advantage.",
    fullDescription: "Our Enterprise Data & Analytics solutions help you harness the full potential of your organization's data assets. We implement end-to-end data strategies and platforms that enable data-driven decision making, uncover valuable insights, and create new opportunities for innovation and growth.",
    benefits: [
      "Gain real-time visibility into business operations and performance",
      "Uncover hidden patterns and correlations for strategic advantage",
      "Implement predictive analytics to anticipate market changes",
      "Automate reporting and decision-support processes"
    ],
    technologies: ["Big Data Platforms", "Machine Learning", "Business Intelligence", "Real-time Analytics", "Data Governance", "Predictive Analytics"],
    caseStudy: {
      title: "Healthcare Provider Analytics Transformation",
      description: "We developed a comprehensive analytics platform for a healthcare network, enabling real-time patient flow optimization, predictive resource allocation, and improved clinical outcomes across 12 facilities."
    }
  }
];

// Common enterprise challenges and solutions
const challengesSolutions = [
  {
    challenge: "Digital Transformation Obstacles",
    solution: "Tailored roadmaps with practical implementation steps that align with your business objectives.",
    icon: <FaClipboardCheck size={30} className="text-warning" />
  },
  {
    challenge: "Complex Legacy Systems",
    solution: "Staged modernization approaches that minimize disruption while enabling innovation.",
    icon: <FaBriefcase size={30} className="text-warning" />
  },
  {
    challenge: "Data Silos & Fragmentation",
    solution: "Unified data platforms that integrate information across your entire organization.",
    icon: <FaSearchLocation size={30} className="text-warning" />
  },
  {
    challenge: "Scaling Technology Operations",
    solution: "Automated, cloud-native architectures that adapt to changing business requirements.",
    icon: <FaChartLine size={30} className="text-warning" />
  }
];

// Enterprise benefits with metrics
const enterpriseBenefits = [
  { metric: "65%", description: "Faster time to market" },
  { metric: "40%", description: "Reduced operational costs" },
  { metric: "85%", description: "Improved business agility" },
  { metric: "30%", description: "Increased revenue growth" }
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

const EnterpriseSolutions = () => {
  const [activeTab, setActiveTab] = useState(enterpriseSolutions[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Map service IDs to their corresponding route paths
  const serviceRoutes = {
    "cloud-services": "/services/cloud-services",
    "security-solutions": "/services/security-solutions",
    "network-solutions": "/services/network-solutions",
    "analytics-solutions": "/services/data-analytics"
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
            Enterprise Solutions
          </motion.h1>
          <motion.p
            className="lead mt-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Comprehensive technology solutions designed to empower large organizations 
            with the agility, security, and scalability required in today's digital landscape.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="d-flex justify-content-center gap-3"
          >
            <Link to="/contact" className="btn btn-warning btn-lg fw-bold px-4 py-2">
              Schedule Enterprise Consultation
            </Link>
            <a href="#enterprise-solutions" className="btn btn-outline-light btn-lg px-4 py-2">
              Explore Solutions
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Enterprise Expertise Introduction */}
      <div className="bg-light py-5" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h2 className="mb-4">Enterprise-Grade Solutions & Expertise</h2>
              <p className="lead">
                With over two decades of experience serving Fortune 500 companies and global organizations,
                our enterprise solutions are built on proven methodologies and best practices.
              </p>
              <p>
                Our enterprise team comprises seasoned professionals with backgrounds in 
                global IT operations, enterprise architecture, and digital transformation initiatives.
                We understand the unique challenges faced by large organizations and deliver 
                solutions that balance innovation with stability and security.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <span className="badge bg-info p-2">ISO 27001</span>
                <span className="badge bg-info p-2">CMMI Level 5</span>
                <span className="badge bg-info p-2">ITIL Certified</span>
                <span className="badge bg-info p-2">AWS Enterprise Partner</span>
                <span className="badge bg-info p-2">Microsoft Gold Partner</span>
                <span className="badge bg-info p-2">Google Cloud Partner</span>
              </div>
            </motion.div>
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="row text-center">
                {enterpriseBenefits.map((benefit, idx) => (
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

      {/* Enterprise Solutions Section */}
      <div id="enterprise-solutions" className="container py-5">
        <motion.h2 
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Our Enterprise Solutions
        </motion.h2>

        {/* Solution Navigation Tabs */}
        <div className="d-flex justify-content-center mb-4">
          <ul className="nav nav-pills">
            {enterpriseSolutions.map((solution, index) => (
              <li className="nav-item" key={index}>
                <button 
                  className={`nav-link ${activeTab === solution.id ? 'active bg-info' : ''} mx-2`}
                  onClick={() => setActiveTab(solution.id)}
                >
                  {solution.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution Content */}
        <div className="tab-content">
          {enterpriseSolutions.map((solution, index) => (
            <motion.div 
              key={index}
              className={`tab-pane fade ${activeTab === solution.id ? 'show active' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === solution.id ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="row align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0">
                  <div className="text-center mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="mb-3">{solution.title}</h3>
                  <p className="lead">{solution.fullDescription}</p>
                  
                  <h5 className="mt-4 mb-3">Key Benefits</h5>
                  <ul className="list-unstyled">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-2">
                        <div className="d-flex align-items-center">
                          <FaLightbulb className="text-warning me-2" />
                          <span>{benefit}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={serviceRoutes[solution.id]} className="btn btn-info mt-3">
                    Learn More
                  </Link>
                </div>
                
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 h-100">
                    <div className="card-body p-4">
                      <h5 className="card-title border-bottom pb-3 mb-3">Technologies & Capabilities</h5>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {solution.technologies.map((tech, idx) => (
                          <span key={idx} className="badge bg-light text-dark p-2">{tech}</span>
                        ))}
                      </div>
                      
                      <h5 className="card-title border-bottom pb-3 mb-3">Case Study Highlight</h5>
                      <h6>{solution.caseStudy.title}</h6>
                      <p className="text-muted">{solution.caseStudy.description}</p>
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
            Enterprise Challenges We Solve
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
      
      {/* Our Enterprise Approach Section */}
      <div className="container py-5">
        <motion.h2 
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Our Enterprise Implementation Approach
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
                  title: "Strategic Assessment", 
                  description: "We conduct a comprehensive analysis of your current technology ecosystem, business objectives, and challenges." 
                },
                { 
                  step: 2, 
                  title: "Solution Architecture", 
                  description: "Our enterprise architects design a tailored solution that addresses your specific requirements and aligns with industry best practices." 
                },
                { 
                  step: 3, 
                  title: "Phased Implementation", 
                  description: "We deploy solutions using a staged approach that minimizes business disruption while delivering rapid value." 
                },
                { 
                  step: 4, 
                  title: "Integration & Testing", 
                  description: "Rigorous integration testing ensures seamless operation within your existing enterprise environment." 
                },
                { 
                  step: 5, 
                  title: "Knowledge Transfer", 
                  description: "We provide comprehensive training and documentation to ensure your team can effectively manage the new solutions." 
                },
                { 
                  step: 6,
                  title: "Continuous Optimization", 
                  description: "Our enterprise support team provides ongoing monitoring, maintenance, and performance optimization." 
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
          <h3 className="mb-4">Ready to Transform Your Enterprise Technology?</h3>
          <p className="lead mb-4">
            Connect with our enterprise solutions team to discuss how we can help you 
            achieve your digital transformation objectives.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/contact" className="btn btn-warning btn-lg px-5 py-3 fw-bold">
              Request Enterprise Consultation
            </Link>
            <Link to="/case-studies" className="btn btn-outline-info btn-lg px-5 py-3">
              View Enterprise Case Studies
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnterpriseSolutions;