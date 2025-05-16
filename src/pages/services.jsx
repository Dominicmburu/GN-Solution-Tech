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
  FaCertificate,
  FaArrowRight,
  FaQuoteLeft,
  FaLongArrowAltRight
} from "react-icons/fa";
import { motion } from "framer-motion";
import PageBanner from '../components/common/PageBanner';
import backgroundImage from "../assets/css/services.avif";

// Services data - unchanged from original
const services = [
  {
    category: "Business Process Automation",
    icon: <FaNetworkWired size={40} className="text-primary" />,
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
    icon: <FaServer size={40} className="text-primary" />,
    description:
      "Comprehensive IT solutions backed by certified professionals with extensive experience in MPLS, DWDM, SDH, OTN, and modern network architectures.",
    services: [
      {
        title: "Managed Network",
        link: "/services/managed-network",
        description: "End-to-end network management with 24/7 monitoring and support"
      },
      {
        title: "Cybersecurity",
        link: "/services/cybersecurity",
        description: "Security audits, vulnerability assessments, and robust network protection strategies"
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
    icon: <FaChalkboardTeacher size={40} className="text-primary" />,
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

// Our expertise sections
const expertise = [
  {
    icon: <FaProjectDiagram size={40} className="text-warning" />,
    title: "Network Design & Implementation",
    description: "From zero to enterprise-grade networks spanning continents. Experience with Cisco, Juniper, Alcatel, and more."
  },
  {
    icon: <FaShieldAlt size={40} className="text-warning" />,
    title: "Enterprise Security",
    description: "Network segmentation, vulnerability management, and security infrastructure design for global organizations."
  },
  {
    icon: <FaUserTie size={40} className="text-warning" />,
    title: "Operations Management",
    description: "16+ years leading technical teams, managing SLAs, and ensuring 99.95% service uptime."
  },
  {
    icon: <FaCertificate size={40} className="text-warning" />,
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
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div>
      <PageBanner
        title="Our Services"
        subtitle="Enterprise-Grade IT Solutions by Industry Experts"
        backgroundImage={backgroundImage}
        background="#0a1033"
        currentpage="Services"
      />

      {/* Expertise Section */}
      <section className="bg-light py-5">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ color: 'var(--tt-color)' }} className="display-5 fw-bold mb-3">Our Technical Expertise</h2>
            <div className="d-flex justify-content-center mb-4">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
          </motion.div>

          <div className="row">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="card h-100 border-0 shadow">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-opacity-10 p-3 d-inline-flex mb-4" style={{ backgroundColor: 'var(--card-color)' }}>
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <h4 className="card-title h5 fw-bold">{item.title}</h4>
                    <p className="card-text text-muted">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ color: 'var(--tt-color)' }} className="display-5 fw-bold mb-3">Comprehensive IT Services</h2>
            <div className="d-flex justify-content-center mb-4">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Our suite of specialized services is designed to enhance your IT infrastructure,
              improve security, and optimize operational efficiency.
            </p>
          </motion.div>

          <div className="row">
            {services.map((section, index) => (
              <motion.div
                key={index}
                className="col-lg-4 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="card h-100 shadow border-0">
                  <div  style={{backgroundColor: 'var(--card-color)'}} className="card-header bg-opacity-10 text-center p-4 border-0">
                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm p-3 mb-3">
                      <div className="text-primary">{section.icon}</div>
                    </div>
                    <h3 style={{ color: 'var(--tt-color)' }} className="h4 card-title fw-bold">{section.category}</h3>
                    <div className="d-flex justify-content-center mb-4">
                      <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                    </div>
                    <p className="card-text text-muted small">{section.description}</p>
                  </div>

                  <div className="card-body p-4">
                    {section.services.map((service, idx) => (
                      <Link to={service.link} key={idx} className="text-decoration-none">
                        <div className="card mb-3 border-0 shadow-sm hover-card">
                          <div className="card-body p-3">
                            <h4 className="h6 fw-bold text-dark mb-2">{service.title}</h4>
                            <p className="text-muted small mb-2">{service.description}</p>
                            <small className="text-primary fw-bold d-flex align-items-center">
                              Learn more <FaArrowRight size={12} className="ms-1" />
                            </small>
                          </div>
                        </div>
                      </Link>
                    ))}

                    <div className="text-center mt-4">
                      <Link
                        to={`/services/${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="btn rounded-pill"
                        style={{ borderColor: 'var(--tt-color)', color: 'var(--ct-color)' }}  
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section style={{backgroundColor: "var(--tt-color)"}} className="py-5 text-white">
        <div className="container py-4">
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6 mb-4 mb-lg-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span style={{backgroundColor: "var(--primary-color)", color: "white"}} className="badge mb-3 px-3 py-2">CASE STUDY</span>
              <h3 className="display-6 fw-bold mb-4">{caseStudy.title}</h3>
              <p className="lead mb-5">{caseStudy.description}</p>
              <Link
                to="/case-studies"
                className="btn btn-lg px-4 py-2 d-inline-flex align-items-center fw-bold"
                style={{ backgroundColor: 'var(--primary-color)', color: 'var(--tt-color)' }}
              >
                Read Full Case Study
                <FaLongArrowAltRight className="ms-2" />
              </Link>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="row">
                {caseStudy.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    className="col-md-4 mb-3"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + (idx * 0.2), duration: 0.5 }}
                  >
                    <div style={{backgroundColor: "--card-color"}} className="card bg-opacity-25 border-0 h-100 text-center p-4">
                      <div className="card-body">
                        <h2 style={{color: 'var(--primary-color)'}} className="display-5 fw-bold mb-2">{metric.value}</h2>
                        <p style={{color: 'var(--ct-color)'}} className="mb-0">{metric.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 style={{color: "var(--tt-color)"}} className="display-5 fw-bold mb-3">What Our Clients Say</h3>
             <div className="d-flex justify-content-center mb-4">
                <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
              </div>
          </motion.div>

          <div className="row justify-content-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-5 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.2), duration: 0.5 }}
              >
                <div className="card border-0 shadow h-100">
                  <div className="card-body p-4">
                    <FaQuoteLeft size={30} className="opacity-25 mb-3" style={{color: "var(--ct-color)"}} />
                    <p className="lead mb-4">{testimonial.text}</p>
                    <div className="d-flex align-items-center">
                      <span style={{ backgroundColor: "var(--primary-color)"}} className="d-inline-flex align-items-center justify-content-center rounded-circle text-white p-3 me-3">
                        <FaUserTie size={20} />
                      </span>
                      <strong>{testimonial.author}</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .hover-card {
          transition: all 0.3s ease;
        }
        
        .hover-card:hover {
          transform: translateY(-3px);
          background-color: rgba(138, 151, 173, 0.05);
        }
      `}</style>
    </div>
  );
};

export default Services;