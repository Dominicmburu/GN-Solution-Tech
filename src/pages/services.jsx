import React from "react";
import { Link } from "react-router-dom";
import { 
  FaNetworkWired, 
  FaLaptopCode, 
  FaShieldAlt, 
  FaServer, 
  FaChalkboardTeacher,
  FaUserTie,
  FaHandshake,
  FaProjectDiagram,
  FaCertificate
} from "react-icons/fa";
import { motion } from "framer-motion";
import backgroundImage from "../assets/css/services.avif";

const services = [
  {
    category: "Business Process Automation",
    icon: <FaNetworkWired size={40} className="text-info" />,
    description:
      "Led by experts with 17+ years of telecommunications experience, we automate deployment, infrastructure provisioning, and software development with cutting-edge solutions.",
    services: [
      { 
        title: "Network as Code", 
        link: "/services/network-as-code",
        description: "Automated deployment and management of network infrastructure using DevOps methodologies"
      },
      { 
        title: "Infrastructure as Code", 
        link: "/services/platform-as-code",
        description: "Infrastructure provisioning and configuration automation for efficient IT operations"
      },
      { 
        title: "Platform as Code", 
        link: "/services/platform-as-code",
        description: "Streamline software development lifecycle through automated CI/CD pipelines"
      },
    ],
  },
  {
    category: "Enterprise Solutions",
    icon: <FaServer size={40} className="text-info" />,
    description:
      "Comprehensive IT solutions backed by certified professionals with extensive experience in MPLS, DWDM, SDH, OTN, and modern network architectures.",
    services: [
      { 
        title: "Managed Network (LAN, WAN, SD-WAN)", 
        link: "/services/managed-network",
        description: "End-to-end network management with 24/7 monitoring and support"
      },
      { 
        title: "Cybersecurity", 
        link: "/services/cybersecurity",
        description: "Security audits, vulnerability assessments, and robust network protection strategies"
      },
      { 
        title: "Infrastructure Design & Management", 
        link: "/services/infrastructure-design",
        description: "Custom architecture solutions including virtualization, containerization, and cloud integration"
      },
      { 
        title: "IT Remote & Smart Hands Support", 
        link: "/services/remote-smart-hands",
        description: "On-demand technical assistance and on-site support for critical infrastructure"
      },
    ],
  },
  {
    category: "IT Consulting Services",
    icon: <FaChalkboardTeacher size={40} className="text-info" />,
    description:
      "Expert consulting from industry veterans who have managed global networks, data centers, and multi-million euro technology projects.",
    services: [
      { 
        title: "IT Project Management", 
        link: "/services/it-project-management",
        description: "PRINCE2-certified project management for IT infrastructure and network deployments"
      },
      { 
        title: "Technology Transitions & Transformation", 
        link: "/services/technology-transitions",
        description: "Strategic guidance for cloud migration, network upgrades, and digital transformation"
      },
      { 
        title: "IT Training", 
        link: "/services/it-training",
        description: "Customized training programs for networking, security, and modern IT practices"
      },
    ],
  },
];

// Our expertise sections based on George's CV
const expertise = [
  {
    icon: <FaProjectDiagram size={30} className="text-warning" />,
    title: "Network Design & Implementation",
    description: "From zero to enterprise-grade networks spanning continents. Experience with Cisco, Juniper, Alcatel, and more."
  },
  {
    icon: <FaShieldAlt size={30} className="text-warning" />,
    title: "Enterprise Security",
    description: "Network segmentation, vulnerability management, and security infrastructure design for global organizations."
  },
  {
    icon: <FaUserTie size={30} className="text-warning" />,
    title: "Operations Management",
    description: "16+ years leading technical teams, managing SLAs, and ensuring 99.95% service uptime."
  },
  {
    icon: <FaCertificate size={30} className="text-warning" />,
    title: "Certified Expertise",
    description: "Team holding certifications in CCNP, JNCIA, DevOps, ITIL, and PRINCE2 methodologies."
  }
];

// Testimonial data
const testimonials = [
  {
    text: "GN Solutions transformed our network infrastructure, reducing incident resolution times by 20% and significantly improving our customer satisfaction.",
    author: "Network Director, Enterprise Client"
  },
  {
    text: "Their automation solutions cut our deployment time in half and virtually eliminated manual errors in our configurations.",
    author: "CTO, Technology Startup"
  }
];

// Case study highlight
const caseStudy = {
  title: "Network Vulnerability Management Success",
  description: "We designed and implemented a comprehensive security framework that reduced potential network vulnerabilities by 70% while optimizing operational costs.",
  metrics: [
    { value: "70%", label: "Reduction in vulnerabilities" },
    { value: "50%", label: "Faster incident response" },
    { value: "€1M+", label: "Annual savings" }
  ]
};

const Services = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section with Background Image */}
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
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Enterprise-Grade IT Solutions by Industry Experts
          </motion.h1>
          <motion.p
            className="lead mt-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Transform your business with our automation, security, and cloud solutions backed by 17+ years of enterprise experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="d-flex justify-content-center gap-3"
          >
            <Link to="/contact" className="btn btn-warning btn-lg fw-bold px-4 py-2">
              Get a Free Consultation
            </Link>
            <Link to="/case-studies" className="btn btn-outline-light btn-lg px-4 py-2">
              View Success Stories
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Expertise Section */}
      <div className="bg-light py-5">
        <div className="container">
          <motion.h2 
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Technical Expertise
          </motion.h2>
          
          <div className="row">
            {expertise.map((item, index) => (
              <motion.div 
                className="col-md-3 mb-4" 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="text-center p-4">
                  <div className="mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p className="text-muted small">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="container py-5">
        <motion.h2 
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Comprehensive IT Services
        </motion.h2>
        
        <div className="row">
          {services.map((section, index) => (
            <motion.div 
              className="col-lg-4 mb-4" 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="card shadow-lg border-0 h-100 p-4">
                <div className="text-center mb-3">{section.icon}</div>
                <h4 className="card-title text-info text-center mb-3">{section.category}</h4>
                <p className="card-text text-muted mb-4">{section.description}</p>
                
                {section.services.map((service, idx) => (
                  <div key={idx} className="mb-3 p-3 bg-light rounded">
                    <Link to={service.link} className="text-decoration-none">
                      <h5 className="text-dark fw-bold mb-2">{service.title}</h5>
                      <p className="text-muted mb-0 small">{service.description}</p>
                    </Link>
                  </div>
                ))}
                
                <div className="mt-auto pt-3 text-center">
                  <Link to={`/services/${section.category.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-sm btn-outline-info">
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Case Study Highlight */}
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h3 className="mb-4">Case Study: {caseStudy.title}</h3>
              <p className="lead">{caseStudy.description}</p>
              <Link to="/case-studies" className="btn btn-warning mt-3">Read Full Case Study</Link>
            </motion.div>
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="row text-center">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="col-md-4 mb-3">
                    <div className="bg-info bg-opacity-25 p-4 rounded">
                      <h2 className="display-5 fw-bold text-info">{metric.value}</h2>
                      <p>{metric.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="container py-5">
        <motion.h3 
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h3>
        
        <div className="row justify-content-center">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              className="col-md-5 mb-4" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.2), duration: 0.5 }}
            >
              <div className="card shadow border-0 h-100 p-4">
                <div className="card-body">
                  <p className="lead font-italic">"{testimonial.text}"</p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="bg-info rounded-circle p-2 me-3">
                      <FaUserTie size={20} className="text-white" />
                    </div>
                    <p className="mb-0 fw-bold">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
          <h3 className="mb-4">Ready to Transform Your IT Infrastructure?</h3>
          <p className="lead mb-4">Our team of certified experts is ready to help you automate, secure, and optimize your business operations.</p>
          <Link to="/contact" className="btn btn-warning btn-lg px-5 py-3 fw-bold">
            Schedule Your Free Consultation
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;