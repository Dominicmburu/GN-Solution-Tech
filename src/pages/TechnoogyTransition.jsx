import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaSearch, FaDrawPolygon, FaHammer, FaExchangeAlt, FaLaptopCode, FaShieldAlt, FaCloudUploadAlt, FaCogs, FaUserTie, FaArrowRight, FaQuestionCircle, FaTools, FaSyncAlt, FaChartLine, FaChartBar, FaAward, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/TechnologyTransition.css';
import techTransformation from '../assets/tech-transformation.avif';
import PageBanner from '../components/common/PageBanner';
import HoverLineCard from '../components/common/HoverLineCard';
import TechnologiesWeSupport from '../components/home/TechnologiesWeSupport';

const TechnologyTransitionIntro = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-divider"></div>
            <h1 className="main-title">
              Technology Transition & Transformation...
            </h1>
          </div>
          <div className="col-lg-7">
            <p className="intro-text" style={{ textAlign: 'justify' }}>
              In today’s rapidly evolving digital landscape, organizations must continuously adapt their technology environments to remain competitive, efficient, and secure. Our Technology Transition and Transformation (T3) services provide a structured process to move from outdated, legacy, or inefficient systems to modern, optimized, and scalable technology platforms. Whether it’s migrating to the cloud, integrating DevOps practices, or overhauling legacy infrastructure, we ensure minimal risk and maximum value, acting as your trusted partner to drive business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnologyTransitionPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeKey, setActiveKey] = useState(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'whychooseus', label: 'Why Choose Us', icon: <FaAward /> },
    { id: 'benefits', label: 'Key Benefits', icon: <FaCheckCircle /> },
    { id: 'solutions', label: 'Key Solutions', icon: <FaRocket /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> },
  ];

  const faqs = [
    { question: "What's the difference between technology transition and transformation?", answer: "Transition is the process of migrating from an old to a new technology. Transformation is a broader initiative that includes reimagining processes, business models, and user experiences through new technologies." },
    { question: "How long does a transition and transformation project take?", answer: "It depends on scope and complexity. Some projects may take weeks, while others span several months or more. We work with you to define clear timelines and milestones." },
    { question: "Will our operations be disrupted during the transition?", answer: "We employ phased migration, parallel runs, and testing to minimize downtime. Most transitions occur with zero or limited disruption to business operations." },
    { question: "What kind of support do you provide post-transition?", answer: "We offer comprehensive support services including monitoring, optimization, user training, and ongoing advisory." },
    { question: "Can you help us justify the investment to our stakeholders?", answer: "Yes. We provide clear ROI models, business case documents, and performance improvement projections tailored to your organizational objectives." },
  ];

  const handleAccordionChange = (eventKey) => {
    setActiveKey(eventKey);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <div className="intro-box">
              <TechnologyTransitionIntro />
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Features</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { title: "Assessment & Readiness Evaluation", desc: "Comprehensive analysis of your current IT landscape.", icon: <FaChartBar size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Strategic Roadmap Development", desc: "Phased transformation roadmap aligned with your goals.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Risk & Impact Analysis", desc: "Identify and mitigate risks for a smooth transition.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Legacy System Migration", desc: "Seamless migration to modern platforms.", icon: <FaSyncAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Platform Modernization", desc: "Leverage cloud, virtualization, and automation tools.", icon: <FaCloudUploadAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Change Management", desc: "Support for staff training and communication.", icon: <FaUserTie size={40} style={{ color: "var(--primary-color)" }} /> },
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                    <HoverLineCard>
                    <div className="text-center mb-3">{feature.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Implementation Process</h3>
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
                transform: "translateX(-50%)",
              }}></div>
              {[
                { step: "Discover", desc: "Assessment of current state and requirements gathering.", icon: <FaSearch size={24} />, nodeIcon: <FaSearch size={20} /> },
                { step: "Design", desc: "Architecture design and transformation roadmap creation.", icon: <FaDrawPolygon size={24} />, nodeIcon: <FaDrawPolygon size={20} /> },
                { step: "Build", desc: "Environment preparation and implementation.", icon: <FaHammer size={24} />, nodeIcon: <FaHammer size={20} /> },
                { step: "Transition", desc: "Staged migration with testing and validation.", icon: <FaExchangeAlt size={24} />, nodeIcon: <FaExchangeAlt size={20} /> },
                { step: "Optimize", desc: "Performance tuning and continuous improvement.", icon: <FaChartLine size={24} />, nodeIcon: <FaChartLine size={20} /> },
              ].map((step, index) => (
                <motion.div
                  className="row mb-5 position-relative"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="col-12 d-flex justify-content-center" style={{ marginBottom: "0px", height: "0px" }}>
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
                      top: "-30px",
                    }}>
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
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
                      marginTop: "-20px",
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
                        borderTop: index % 2 === 0 ? "1px solid rgba(0,0,0,0.05)" : "none",
                      }}></div>
                      <div className="d-flex align-items-center" style={{ marginBottom: "12px" }}>
                        <div style={{
                          backgroundColor: "var(--primary-color)",
                          borderRadius: "50%",
                          width: "38px",
                          height: "38px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "12px",
                          color: "white",
                        }}>
                          {step.icon}
                        </div>
                        <h5 style={{ color: "var(--ct-color)", margin: "0", fontWeight: "600" }}>{step.step}</h5>
                      </div>
                      <p style={{ margin: "0", color: "#666", fontSize: "15px" }}>{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <style jsx>{`
              @media (max-width: 767px) {
                .position-relative > div:first-child {
                  left: 20px !important;
                  transform: none !important;
                }
                .col-md-5 {
                  margin-left: 60px !important;
                  padding-left: 20px !important;
                  text-align: left !important;
                }
                .col-md-5 > div > div:first-of-type {
                  left: -10px !important;
                  right: auto !important;
                  border-left: 1px solid rgba(0,0,0,0.05) !important;
                  border-bottom: 1px solid rgba(0,0,0,0.05) !important;
                  border-right: none !important;
                  border-top: none !important;
                }
                .col-12.d-flex.justify-content-center {
                  justify-content: flex-start !important;
                  padding-left: 20px !important;
                }
              }
            `}</style>
          </div>
        );
      case 'whychooseus':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Why Choose Our Technology Transition Services</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row mb-5">
              {[
                { title: "Proven Expertise", desc: "Years of experience across industries with successful high-impact transitions.", icon: <FaUserTie size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Tailored Approach", desc: "Custom-built transformation plans for your unique environment and goals.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Business-First Focus", desc: "Align technical transitions with strategic business outcomes.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Risk Mitigation", desc: "Systematic frameworks to reduce downtime and operational disruption.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "End-to-End Partnership", desc: "Comprehensive support from planning to execution and beyond.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
              ].map((feature, index) => (
                <motion.div className="col-md-6 col-lg-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div
                    className="card border-0 p-4 h-100"
                    style={{
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      border: "1px solid #eaeaea",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
                    }}
                  >
                    <HoverLineCard>
                    <div className="text-center mb-3">
                      <div style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(var(--primary-color-rgb), 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 15px",
                      }}>
                        {feature.icon}
                      </div>
                    </div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center mb-3">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <TechnologiesWeSupport/>

            <div className="row mt-5">
              <div className="col-12">
                <motion.div
                  className="card shadow-lg border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    background: "linear-gradient(135deg, var(--primary-color) 0%, var(--tt-color) 100%)",
                    padding: "3rem",
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-8 mx-auto text-center">
                      <FaQuestionCircle size={50} style={{ color: "white", opacity: 0.8, marginBottom: "20px" }} />
                      <h4 style={{ color: "white", marginBottom: "20px" }}>Expert Support for Your Transformation Journey</h4>
                      <p style={{ color: "white", fontSize: "18px", fontStyle: "italic", opacity: 0.9, marginBottom: "25px" }}>
                        "We understand that technology transformation is critical to your business success. Our team is committed to guiding you through every step, ensuring a seamless transition with minimal disruption."
                      </p>
                      <div style={{ width: "80px", height: "4px", backgroundColor: "white", margin: "0 auto" }}></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      case 'benefits':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Benefits</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { title: "Increased Efficiency", desc: "Streamline processes for faster innovation.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Reduced Costs", desc: "Lower maintenance and infrastructure costs.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Enhanced Security", desc: "Updated systems improve compliance and security.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Improved User Experience", desc: "Better performance and interfaces boost productivity.", icon: <FaLaptopCode size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Business Continuity", desc: "Scalable setups ensure uptime and recovery.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Future-Proofing", desc: "Architectures that evolve with your needs.", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} /> },
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 benefit-card">
                    <HoverLineCard>
                    <div className="text-center mb-3">{benefit.icon}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{benefit.title}</h5>
                    <p className="text-center">{benefit.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="row mt-5 mb-4">
              <div className="col-lg-8 mx-auto">
                <motion.img
                  src={techTransformation}
                  alt="Technology transformation in progress"
                  className="img-fluid rounded shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </div>
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-3">Success Stories</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                {
                  company: "Enterprise Financial Institution",
                  result: "Reduced infrastructure costs by 40% through cloud migration while improving system reliability by 99.99%.",
                  icon: <FaCloudUploadAlt size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #f08b0a, #f08b0a)",
                },
                {
                  company: "Healthcare Services Provider",
                  result: "Modernized legacy applications to improve patient data access speeds by 300% and achieve HIPAA compliance.",
                  icon: <FaShieldAlt size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #301934, #301934)",
                },
                {
                  company: "Retail Chain",
                  result: "Transformed e-commerce platform resulting in 65% faster page loads and 28% increase in conversion rates.",
                  icon: <FaRocket size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #000000, #000000)",
                },
              ].map((story, index) => (
                <div className="col-lg-4 mb-4" key={index}>
                  <motion.div
                    className="success-story-card h-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="story-header p-4 d-flex align-items-center" style={{ background: story.color }}>
                      <div
                        className="story-icon me-3 d-flex align-items-center justify-content-center rounded-circle"
                        style={{ background: "rgba(255,255,255,0.2)", width: "60px", height: "60px" }}
                      >
                        {story.icon}
                      </div>
                      <h5 className="text-white mb-0">{story.company}</h5>
                    </div>
                    <div className="story-content p-4 bg-white flex-grow-1 d-flex align-items-center">
                      <p className="mb-0">{story.result}</p>
                    </div>                    
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Core Technology Solutions</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="solutions-grid mb-5">
              {[
                { title: "Cloud Migration & Optimization", desc: "Azure, AWS, GCP migration and workload optimization.", icon: <FaCloudUploadAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Legacy System Retirement", desc: "Replace outdated systems with modern solutions.", icon: <FaSyncAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "DevOps & Automation", desc: "Implement CI/CD pipelines and Infrastructure as Code.", icon: <FaLaptopCode size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Infrastructure Modernization", desc: "Transition to software-defined and virtualized environments.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Digital Workspace Enablement", desc: "Migrate to modern collaboration tools and VDI platforms.", icon: <FaUserTie size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Application Transformation", desc: "Refactor applications for improved performance.", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} /> },
              ].map((solution, index) => (
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
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Why Choose Our Technology Transition Services</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                { title: "Proven Expertise", desc: "Decades of experience in high-impact technology transitions.", icon: <FaTools size={32} style={{ color: "var(--primary-color)" }} />, delay: 0.1 },
                { title: "Customized Solutions", desc: "Tailored support options to meet your specific needs.", icon: <FaCogs size={32} style={{ color: "var(--primary-color)" }} />, delay: 0.2 },
                { title: "Vendor-Neutral Approach", desc: "Best-fit solutions from leading technology providers.", icon: <FaSyncAlt size={32} style={{ color: "var(--primary-color)" }} />, delay: 0.3 },
                { title: "Proactive Management", desc: "AI-enhanced systems to prevent issues before they arise.", icon: <FaRocket size={32} style={{ color: "var(--primary-color)" }} />, delay: 0.4 },
              ].map((item, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <motion.div
                    className="why-choose-card h-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay }}
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                      border: "1px solid #eaeaea",
                      height: "100%",
                    }}
                  >
                    <div className="card border-0 h-100" style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                      <HoverLineCard>
                        <div className="card-header d-flex align-items-center p-4" style={{ background: "rgba(var(--primary-color-rgb), 0.08)", borderBottom: "1px solid rgba(var(--primary-color-rgb), 0.1)" }}>
                          <div className="icon-container me-3 rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              background: "#fff",
                              width: "60px",
                              height: "60px",
                              boxShadow: "0 4px 15px rgba(var(--primary-color-rgb), 0.2)"
                            }}>
                            {item.icon}
                          </div>
                          <h5 style={{ color: "var(--ct-color)", margin: 0 }}>{item.title}</h5>
                        </div>
                        <div className="card-body p-4">
                          <p className="mb-0">{item.desc}</p>
                        </div>
                      </HoverLineCard>
                    </div>
                  </motion.div>
                </div>
              ))}
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
                  <Accordion activeKey={activeKey} onSelect={handleAccordionChange}>
                    <Accordion.Item
                      eventKey={index.toString()}
                      style={{ marginBottom: "15px", borderRadius: "8px", overflow: "hidden" }}
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
            <div className="text-center mt-5">
              <Link
                to="/contact"
                className="btn"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "#fff",
                  padding: "12px 30px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px var(--primary-color)",
                }}
              >
                Have More Questions? Contact Us <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  const tabTextStyle = { color: 'var(--tt-color)', fontWeight: 500 };
  const activeTabTextStyle = { color: 'var(--tt-color)', fontWeight: 700 };

  return (
    <div className="container-fluid p-0">
      <PageBanner
        title="Technology Transition & Transformation"
        subtitle="Modernize your IT infrastructure with minimal risk and maximum value"
        backgroundImage={techTransformation}
        background="#0a1033"
        currentpage="Technology Transition & Transformation"
      />
      <div className="hero-overlay"></div>
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
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="iacTabs" role="tablist">
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
                          style={activeTab === tab.id ? activeTabTextStyle : tabTextStyle}
                        >
                          <i className="tab-icon" style={{ color: "var(--tt-color)" }}>{tab.icon}</i>
                          <span style={{ color: "var(--tt-color)" }}>{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <div className="tab-content-container">
                  <div className="tab-content" id="iacTabsContent">
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
      <section style={{ backgroundColor: "var(--tt-color)", padding: "50px 0", marginTop: "40px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <h3 className="text-white mb-3">Ready to transform your technology infrastructure?</h3>
              <p className="text-white-50 mb-0">Get in touch for a free consultation and discover how our T3 services can modernize your IT environment.</p>
            </div>
            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <Link
                to="/contact"
                className="btn"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "#fff",
                  padding: "12px 25px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
              >
                Request a Consultation <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyTransitionPage;