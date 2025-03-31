import React from "react";
import { Link } from "react-router-dom";
import { FaNetworkWired, FaLaptopCode, FaShieldAlt, FaProjectDiagram, FaServer, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";
import backgroundImage from "../assets/css/services.avif"; // Ensure the correct path to your image

const services = [
  {
    category: "Business Process Automation",
    icon: <FaNetworkWired size={40} className="text-info" />,
    description:
      "Automate deployment, infrastructure provisioning, and software development with cutting-edge automation solutions.",
    services: [
      { title: "Network as Code", link: "/services/network-as-code" },
      { title: "Platform as Code", link: "/services/platform-as-code" },
      { title: "Software as Code", link: "/services/software-as-code" },
    ],
  },
  {
    category: "Enterprise Solutions",
    icon: <FaServer size={40} className="text-info" />,
    description:
      "Comprehensive IT solutions including managed networks, cybersecurity, infrastructure design, and IT support services.",
    services: [
      { title: "Managed Network (LAN, WAN, SD-WAN)", link: "/services/managed-network" },
      { title: "Cybersecurity", link: "/services/cybersecurity" },
      { title: "Infrastructure Design & Management", link: "/services/infrastructure-design" },
      { title: "IT Remote & Smart Hands Support", link: "/services/remote-smart-hands" },
    ],
  },
  {
    category: "IT Consulting Services",
    icon: <FaChalkboardTeacher size={40} className="text-info" />,
    description:
      "Expert consulting services covering project management, technology transitions, and IT training for businesses.",
    services: [
      { title: "IT Project Management", link: "/services/it-project-management" },
      { title: "Technology Transitions & Transformation", link: "/services/technology-transitions" },
      { title: "IT Training", link: "/services/it-training" },
    ],
  },
];

const Services = () => {
  return (
    <div className="container py-5">
      {/* Improved Hero Section with Background Image */}
      <motion.div 
        className="hero-section text-center text-white py-5"
        style={{ 
          background: `url(${backgroundImage}) center/cover no-repeat`, 
          borderRadius: '10px',
          padding: '100px 20px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transform Your Business with Expert IT Solutions
        </motion.h1>
        <motion.p
          className="lead mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We provide automation, security, and cloud solutions to help your business grow efficiently.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/contact" className="btn btn-warning btn-lg fw-bold px-4 py-2 me-3">
            Get a Free Consultation
          </Link>
          
        </motion.div>
      </motion.div>

      <motion.p 
        className="text-center text-muted my-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Explore our cutting-edge IT solutions designed to optimize automation, enhance security, and drive business success.
      </motion.p>

      <div className="row">
        {services.map((section, index) => (
          <motion.div 
            className="col-md-4 mb-4" 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="card shadow-lg border-0 h-100 text-center p-4">
              <div className="mb-3">{section.icon}</div>
              <h5 className="card-title text-info">{section.category}</h5>
              <p className="card-text text-muted">{section.description}</p>
              <ul className="list-unstyled">
                {section.services.map((service, idx) => (
                  <li key={idx} className="mb-2">
                    <Link to={service.link} className="text-decoration-none text-dark fw-bold">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
