import React from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaTools, FaServer, FaRocket, FaCode, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import backgroundImage from "../assets/platform.png";
import "../assets/css/platform.css"

const PlatformAsCode = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const benefits = [
    { 
      title: "Scalability", 
      icon: <FaLayerGroup size={40} className="text-primary mb-3" />,
      description: "Easily scale your infrastructure with code-driven approaches",
      link: "#scalability"
    },
    { 
      title: "Efficiency", 
      icon: <FaRocket size={40} className="text-success mb-3" />,
      description: "Reduce manual interventions and accelerate deployment cycles",
      link: "#efficiency"
    },
    { 
      title: "Consistency", 
      icon: <FaCode size={40} className="text-info mb-3" />,
      description: "Maintain uniform infrastructure across all environments",
      link: "#consistency"
    },
    { 
      title: "Security", 
      icon: <FaServer size={40} className="text-warning mb-3" />,
      description: "Implement robust security policies through code",
      link: "#security"
    }
  ];

  const technologies = [
    { name: "Terraform", color: "text-primary", icon: <FaCloud /> },
    { name: "Kubernetes", color: "text-success", icon: <FaServer /> },
    { name: "Docker", color: "text-info", icon: <FaTools /> },
    { name: "Ansible", color: "text-warning", icon: <FaCode /> }
  ];

  return (
    <div className="platform-as-code">
      {/* Hero Section */}
      <motion.div 
        className="hero-section text-white text-center d-flex flex-column align-items-center justify-content-center"
        style={{
          background: `url(${backgroundImage}) center/cover no-repeat`,
          height: "80vh",
          position: "relative"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay position-absolute w-100 h-100" style={{ zIndex: 1 }}></div>
        
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <motion.h1
            className="display-4 fw-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Platform as Code
          </motion.h1>
          <motion.p
            className="lead mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transform Infrastructure Management Through Intelligent Automation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link 
              to="/contact" 
              className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg d-inline-flex align-items-center"
            >
              Get Started <FaArrowRight className="ms-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Key Benefits */}
      <motion.div 
        className="container py-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-center mb-5 fw-bold"
          variants={itemVariants}
        >
          Key Benefits
        </motion.h2>
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <motion.div 
              className="col-md-6 col-lg-3" 
              key={index}
              variants={itemVariants}
            >
              <Link to={benefit.link} className="text-decoration-none">
                <div className="card h-100 border-0 text-center p-4 shadow-sm hover-lift">
                  {benefit.icon}
                  <h5 className="mb-3 text-dark">{benefit.title}</h5>
                  <p className="text-muted mb-0">{benefit.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technologies & Tools */}
      <motion.div 
        className="container py-5 bg-light"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-center mb-5 fw-bold"
          variants={itemVariants}
        >
          Technologies & Tools
        </motion.h2>
        <div className="row g-4 justify-content-center">
          {technologies.map((tech, index) => (
            <motion.div 
              className="col-md-3 col-6" 
              key={index}
              variants={itemVariants}
            >
              <div className="card border-0 p-4 shadow-sm hover-lift text-center">
                <div className={`${tech.color} mb-3`}>
                  {tech.icon}
                </div>
                <h5 className="mb-0 text-dark">{tech.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center py-5"
        style={{ background: 'var(--light-bg)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h3 
            className="mb-4 fw-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Revolutionize Your Infrastructure Management
          </motion.h3>
          <motion.p
            className="lead text-muted mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Unlock the power of automated, code-driven infrastructure
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link 
              to="/contact" 
              className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg d-inline-flex align-items-center"
            >
              Request a Demo <FaArrowRight className="ms-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlatformAsCode;