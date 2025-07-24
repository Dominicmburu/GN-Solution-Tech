import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaShieldAlt, FaCloudUploadAlt, FaCogs, FaUserTie, FaArrowRight, FaQuestionCircle, FaTools, FaSyncAlt, FaChartLine, FaRocket, FaAward, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/ITTechnologyTraining.css';
import backgroundImage from '../assets/training.jpg';
import PageBanner from '../components/common/PageBanner';
import HoverLineCard from '../components/common/HoverLineCard';


const ManagedITTrainingServicesIntro = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-divider"></div>
            <h1 className="main-title">
              IT Technology Training...
            </h1>
          </div>
          <div className="col-lg-7">
            <p className="intro-text" style={{ textAlign: 'justify' }}>
              Our IT Technology Training program is designed to empower professionals, teams, and organizations with the practical knowledge and hands-on skills needed to thrive in today’s fast-evolving digital world. We deliver industry-relevant training across key domains such as cloud computing, network engineering, cybersecurity, DevOps, automation, and enterprise infrastructure.
              Our training is not just theoretical — it's tailored to real-world challenges and aligned with global certifications and vendor technologies, helping learners apply what they know from day one.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const ITTechnologyTrainingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionChange = (eventKey) => {
    setActiveKey(eventKey);
  };

  // Modified tabs - removed Key Features tab and replaced Technologies with Why Choose Us
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'why-choose-us', label: 'Why Choose Us', icon: <FaAward /> },
    { id: 'benefits', label: 'Key Benefits', icon: <FaCheckCircle /> },
    { id: 'solutions', label: 'Key Solutions', icon: <FaRocket /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> }
  ];

  const faqs = [
    { question: "Who can enroll in your IT training programs?", answer: "Our training is designed for IT professionals at all levels — from beginners and students to mid-career specialists and enterprise teams." },
    { question: "Do your programs include certifications?", answer: "While we prepare students for certifications (like AWS, Cisco, CompTIA), the actual certification exams are offered by third-party vendors. We help you prepare thoroughly for them." },
    { question: "Can we get customized training for our organization?", answer: "Absolutely. We offer custom training packages for businesses based on your technology stack, skill gaps, and business objectives." },
    { question: "How hands-on is the training?", answer: "Very hands-on. We use real lab environments, EVE-NG, cloud sandboxes, and project-based assignments to ensure practical skill development." },
    { question: "Is support provided after training?", answer: "Yes. We offer post-training mentorship and can bundle services like implementation support or advanced consulting." },
    { question: "Where is the training conducted?", answer: "Training can be delivered online, on-site (within Ireland/EU), or hybrid — depending on your preference." }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <div className="intro-box">
              <ManagedITTrainingServicesIntro />
            </div>

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Features</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>

            <div className="row">
              {[
                { title: "Instructor-Led & Self-Paced Options", desc: "Live online, in-person, and on-demand courses to suit all learning styles.", icon: <FaGraduationCap size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Hands-On Labs", desc: "Access to real-world simulations and sandbox environments like EVE-NG, GNS3, and cloud sandboxes.", icon: <FaLaptopCode size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Certification-Ready Curriculum", desc: "Content aligned with CompTIA, Cisco, Juniper, AWS, Microsoft, and other leading certification bodies.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Customized Corporate Training", desc: "Tailored programs to address specific skill gaps and business goals.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Expert Trainers", desc: "Learn from seasoned professionals with field experience in enterprise networks, cloud, automation, and cybersecurity.", icon: <FaUserTie size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Access to Learning Portal", desc: "24/7 access to training materials, lab environments, assignments, and assessments.", icon: <FaCloudUploadAlt size={40} style={{ color: "var(--primary-color)" }} /> }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 feature-card">
                    <HoverLineCard>
                      <div className="text-center mb-3">{feature.icon}</div>
                      <h5 style={{ color: "var(--ct-color)" }} className="text-center">{feature.title}</h5>
                      <p className="text-center">{feature.desc}</p>
                    </HoverLineCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'why-choose-us':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Why Choose Us</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>

            {/* Why Choose Us Cards Section */}
            <div className="row mb-5">
              {[
                {
                  title: "Industry Expertise",
                  desc: "We are not just trainers — we are practitioners with real-world consulting and implementation experience.",
                  icon: <FaUserTie size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Tailored for Europe & Global Markets",
                  desc: "Our training is localized and relevant to regulatory, compliance, and operational realities in Ireland, the EU, and beyond.",
                  icon: <FaGraduationCap size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Hands-On Focus",
                  desc: "We emphasize practice over theory, using simulations and live labs that mirror production environments.",
                  icon: <FaLaptopCode size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Integrated with Services",
                  desc: "Training can be bundled with consulting and support for seamless knowledge transfer and transformation.",
                  icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} />
                },
                {
                  title: "Flexible Delivery",
                  desc: "Whether you're an individual professional or an enterprise team, we offer flexible schedules and learning formats.",
                  icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} />
                }
              ].map((feature, index) => (
                <motion.div className="col-md-6 col-lg-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="card border-0 p-4 h-100"
                    style={{
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      border: "1px solid #eaeaea",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease"
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
                          margin: "0 auto 15px"
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

            {/* Our Approach Timeline Section */}
            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Our Approach</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>

            {/* Implementation Timeline - Vertical responsive design */}
            <div className="position-relative py-3" style={{ marginBottom: "50px" }}>
              {/* Vertical timeline line */}
              <div className="position-absolute" style={{
                top: "0",
                bottom: "0",
                left: "50%",
                width: "4px",
                backgroundColor: "var(--primary-color)",
                transform: "translateX(-50%)"
              }}></div>

              {[
                {
                  step: "Assess",
                  desc: "We identify your specific skill gaps and training needs",
                  icon: <FaInfoCircle size={24} />,
                  nodeIcon: <FaInfoCircle size={20} />
                },
                {
                  step: "Customize",
                  desc: "We design training programs aligned with your goals",
                  icon: <FaTools size={24} />,
                  nodeIcon: <FaTools size={20} />
                },
                {
                  step: "Deliver",
                  desc: "We provide hands-on, practical training experiences",
                  icon: <FaLaptopCode size={24} />,
                  nodeIcon: <FaLaptopCode size={20} />
                },
                {
                  step: "Support",
                  desc: "We offer post-training mentorship and assistance",
                  icon: <FaUserTie size={24} />,
                  nodeIcon: <FaUserTie size={20} />
                },
                {
                  step: "Evaluate",
                  desc: "We measure results and refine for continuous improvement",
                  icon: <FaChartLine size={24} />,
                  nodeIcon: <FaChartLine size={20} />
                }
              ].map((step, index) => (
                <motion.div
                  className="row mb-5 position-relative"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline node/circle with icon - properly centered */}
                  <div className="col-12 d-flex justify-content-center" style={{
                    marginBottom: "0px",
                    height: "0px"
                  }}>
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
                      top: "-30px"
                    }}>
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold"
                      }}>
                        {step.nodeIcon}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`col-md-5 ${index % 2 === 0 ? "offset-md-1 pe-md-5 text-md-end" : "offset-md-6 ps-md-5 text-md-start"}`}>
                    <div style={{
                      backgroundColor: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      position: "relative",
                      marginTop: "-20px"
                    }}>
                      {/* Triangle pointer */}
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
                        borderTop: index % 2 === 0 ? "1px solid rgba(0,0,0,0.05)" : "none"
                      }}></div>

                      <div className="d-flex align-items-center" style={{
                        marginBottom: "12px",
                      }}>
                        <div style={{
                          backgroundColor: "var(--primary-color)",
                          borderRadius: "50%",
                          width: "38px",
                          height: "38px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "12px",
                          color: "white"
                        }}>
                          {step.icon}
                        </div>
                        <h5 style={{
                          color: "var(--ct-color)",
                          margin: "0",
                          fontWeight: "600"
                        }}>{step.step}</h5>
                      </div>
                      <p style={{
                        margin: "0",
                        color: "#666",
                        fontSize: "15px"
                      }}>{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Responsive styles for mobile */}
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

            {/* Customer Testimonial or Highlight Section */}
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
                    padding: "3rem"
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-8 mx-auto text-center">
                      <FaQuestionCircle size={50} style={{ color: "white", opacity: 0.8, marginBottom: "20px" }} />
                      <h4 style={{ color: "white", marginBottom: "20px" }}>Our Commitment</h4>
                      <p style={{ color: "white", fontSize: "18px", fontStyle: "italic", opacity: 0.9, marginBottom: "25px" }}>
                        "Our training is not just theoretical — it's tailored to real-world challenges and aligned with global certifications and vendor technologies, helping learners apply what they know from day one."
                      </p>
                      <div style={{ width: "80px", height: "4px", backgroundColor: "white", margin: "0 auto" }}></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );

        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Key Benefits</h2>
            <div className="row">
              {[
                { title: "Upskill with Confidence", desc: "Gain the skills required to work with cutting-edge technologies.", icon: <FaGraduationCap size={40} className="benefit-icon" /> },
                { title: "Accelerate Career Growth", desc: "Prepare for in-demand roles such as Network Engineer, DevOps Specialist, Cloud Architect, or Security Analyst.", icon: <FaRocket size={40} className="benefit-icon" /> },
                { title: "Boost Team Productivity", desc: "Equip your IT teams to deliver faster, safer, and more reliable services.", icon: <FaChartLine size={40} className="benefit-icon" /> },
                { title: "Enhance Project Success", desc: "Minimize downtime and deployment issues by training teams ahead of digital transformation initiatives.", icon: <FaTools size={40} className="benefit-icon" /> },
                { title: "Achieve Certification Goals", desc: "Improve pass rates for key industry certifications through guided training and mock exams.", icon: <FaShieldAlt size={40} className="benefit-icon" /> },
                { title: "Practical Skill Development", desc: "Learn by doing with hands-on environments that mirror real-world scenarios.", icon: <FaLaptopCode size={40} className="benefit-icon" /> }
              ].map((benefit, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 benefit-card">
                    <div className="text-center mb-3">{benefit.icon}</div>
                    <h5 className="text-center">{benefit.title}</h5>
                    <p className="text-center">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-center text-primary mb-4 mt-5">Success Stories</h3>
            <div className="success-stories">
              {[
                { company: "Financial Services Firm", result: "85% improvement in IT team skill assessment scores after custom cybersecurity training." },
                { company: "Healthcare Provider", result: "Successfully migrated to cloud infrastructure with zero downtime after AWS training." },
                { company: "Manufacturing Enterprise", result: "Reduced incident resolution time by 60% following DevOps and automation training." }
              ].map((story, index) => (
                <motion.div className="story-card" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="story-content">
                    <h5>{story.company}</h5>
                    <p>{story.result}</p>
                  </div>
                </motion.div>
              ))}
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
                { title: "Upskill with Confidence", desc: "Gain the skills required to work with cutting-edge technologies.", icon: <FaGraduationCap size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Accelerate Career Growth", desc: "Prepare for in-demand roles such as Network Engineer, DevOps Specialist, Cloud Architect, or Security Analyst.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Boost Team Productivity", desc: "Equip your IT teams to deliver faster, safer, and more reliable services.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Enhance Project Success", desc: "Minimize downtime and deployment issues by training teams ahead of digital transformation initiatives.", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Achieve Certification Goals", desc: "Improve pass rates for key industry certifications through guided training and mock exams.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Practical Skill Development", desc: "Learn by doing with hands-on environments that mirror real-world scenarios.", icon: <FaLaptopCode size={40} style={{ color: "var(--primary-color)" }} /> }
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

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-3">Success Stories</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                {
                  company: "Financial Services Firm",
                  result: "85% improvement in IT team skill assessment scores after custom cybersecurity training.",
                  icon: <FaShieldAlt size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #f08b0a, #f08b0a"
                },
                {
                  company: "Healthcare Provider",
                  result: "Successfully migrated to cloud infrastructure with zero downtime after AWS training.",
                  icon: <FaCloudUploadAlt size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #301934, #301934"
                },
                {
                  company: "Manufacturing Enterprise",
                  result: "Reduced incident resolution time by 60% following DevOps and automation training.",
                  icon: <FaCogs size={36} style={{ color: "#fff" }} />,
                  color: "linear-gradient(135deg, #000000, #000000"
                }
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
                      flexDirection: "column"
                    }}
                  >
                    <div className="story-header p-4 d-flex align-items-center" style={{ background: story.color }}>
                      <div className="story-icon me-3 d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          width: "60px",
                          height: "60px"
                        }}>
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
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Training Solutions</h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="solutions-grid mb-5">
              {[
                { title: "Network Engineering Training", desc: "LAN/WAN, SD-WAN, routing & switching, MPLS, BGP, OSPF, VLANs, and network automation. Tools: Cisco, Juniper, Arista, EVE-NG, GNS3.", icon: <FaCogs size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Cloud & Virtualization Training", desc: "AWS, Azure, Docker, Kubernetes, VMware with infrastructure as code, CI/CD pipelines, and container orchestration.", icon: <FaCloudUploadAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Cybersecurity Training", desc: "Firewalls, endpoint security, threat detection, security audits, SIEM, and compliance. Certification Paths: CompTIA Security+, CEH, CISSP, ISO 27001.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "DevOps & Automation Training", desc: "Jenkins, Ansible, Terraform, GitHub Actions, CI/CD, automated provisioning, monitoring with project-based delivery.", icon: <FaLaptopCode size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "IT Infrastructure & Support Training", desc: "ITIL, Windows/Linux system administration, monitoring, virtualization, and remote IT support best practices.", icon: <FaTools size={40} style={{ color: "var(--primary-color)" }} /> },
                { title: "Custom Corporate IT Training Programs", desc: "Designed for internal IT teams or clients undergoing digital transformation or network modernization projects.", icon: <FaUserTie size={40} style={{ color: "var(--primary-color)" }} /> }
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

            <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Delivery Methods</h3>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
            </div>
            <div className="row">
              {[
                {
                  title: "Instructor-Led Training",
                  desc: "Live sessions with expert trainers in virtual or physical classrooms providing real-time interaction and personalized guidance.",
                  icon: <FaUserTie size={32} style={{ color: "var(--primary-color)" }} />,
                  delay: 0.1
                },
                {
                  title: "Self-Paced Learning",
                  desc: "On-demand access to course materials, videos, and practice labs allowing you to learn at your own convenience and pace.",
                  icon: <FaLaptopCode size={32} style={{ color: "var(--primary-color)" }} />,
                  delay: 0.2
                },
                {
                  title: "Blended Learning",
                  desc: "Combination of instructor-led sessions and self-paced modules offering the best of both structured guidance and flexible learning.",
                  icon: <FaCogs size={32} style={{ color: "var(--primary-color)" }} />,
                  delay: 0.3
                },
                {
                  title: "Boot Camps",
                  desc: "Intensive, immersive training programs for rapid skill development with hands-on projects and immediate application of concepts.",
                  icon: <FaRocket size={32} style={{ color: "var(--primary-color)" }} />,
                  delay: 0.4
                }
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
                      height: "100%"
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
                  <Accordion
                    activeKey={activeKey}
                    onSelect={handleAccordionChange}
                  >
                    <Accordion.Item
                      eventKey={index.toString()}
                      style={{
                        marginBottom: "15px",
                        borderRadius: "8px",
                        overflow: "hidden"
                      }}
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
              <Link to="/contact" className="btn" style={{
                backgroundColor: "var(--primary-color)",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "30px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px var(--primary-color)"
              }}>
                Have More Questions? Contact Us <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="container-fluid p-0">
      <PageBanner
        title="IT Technology Training"
        subtitle="Empowering professionals with hands-on skills for today's digital landscape"
        // backgroundImage={backgroundImage}
        backgroundImage="https://i.pinimg.com/736x/35/90/d2/3590d224cdeb3137603ea7e18dbc2398.jpg"
        background="#0a1033"
        currentpage="IT Technology Training"
      />
      <div className="hero-overlay"></div>

      {/* Tabs Section */}
      <section className="tabs-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
              </motion.div>
              <div className="custom-tabs-container">
                {/* Tab navigation */}
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
                        >
                          <i className="tab-icon" style={{ color: "var(--tt-color)" }}>{tab.icon}</i>
                          <span style={{ color: "var(--tt-color)" }}>{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tab content */}
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

      <section style={{
        backgroundColor: "var(--tt-color)",
        padding: "50px 0",
        marginTop: "40px"
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <h3 className="text-white mb-3">Advance Your IT Career Today</h3>
              <p className="text-white-50 mb-0">Contact us to learn about our training programs tailored to your professional goals.</p>
            </div>
            <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
              <Link to="/contact" className="btn" style={{
                backgroundColor: "var(--primary-color)",
                color: "#fff",
                padding: "12px 25px",
                borderRadius: "30px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}>
                Request Training Info <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITTechnologyTrainingPage;