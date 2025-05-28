import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaBullseye, FaCloud, FaServer, FaChartLine, FaTools, FaSyncAlt, FaRocket, FaArrowRight, FaCogs, FaSearch, FaInfoCircle, FaCheckCircle, FaMobile, FaQuestionCircle, FaAward, FaUserTie, FaHandshake, FaBalanceScale, FaProjectDiagram, FaUsers, FaLightbulb, FaCalendarAlt, FaClipboardCheck, FaMoneyBillWave, FaFileAlt, FaTasks } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/ManagedNetworkServices.css';
import backgroundImage from '../assets/managed.jpg';
import PageBanner from '../components/common/PageBanner';
import HoverLineCard from '../components/common/HoverLineCard';
import ProjectManagementTools from '../components/home/ProjectManagementTools';

const ITProjectManagementIntro = () => {
    return (
        <section className="intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="section-divider"></div>
                        <h1 className="main-title">
                            IT Project Management...
                        </h1>
                    </div>
                    <div className="col-lg-7">
                        <p className="intro-text" style={{ textAlign: 'justify' }}>
                            IT Project Management is the disciplined planning, execution, and delivery of technology-related projects that align with your business goals. It involves applying knowledge, skills, tools, and techniques to project activities—from software development and infrastructure rollouts to cloud migrations and digital transformation initiatives.
                            At <strong>gnsolutions</strong>, we provide expert IT project management services designed to reduce risk, maximize resources, and deliver measurable results across every stage of the IT project lifecycle. Successful IT project management ensures projects are completed on time, within budget, and to defined quality standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};


const ITProjectManagementPage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [activeKey, setActiveKey] = useState(null);

    const tabs = [
        { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
        { id: 'whychooseus', label: 'Why Choose Us', icon: <FaAward /> },
        { id: 'benefits', label: 'Key Benefits', icon: <FaCheckCircle /> },
        { id: 'solutions', label: 'Key Solutions', icon: <FaRocket /> },
        { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> }
    ];

    const faqs = [
        { question: "What size of projects do you handle?", answer: "We manage projects of all sizes—from small application rollouts to enterprise-wide transformation programs." },
        { question: "Can you manage remote or hybrid teams?", answer: "Absolutely. Our project managers are experienced in handling global, remote, and hybrid teams across time zones." },
        { question: "Do you offer tools for project collaboration and tracking?", answer: "Yes, we use industry-standard tools like Jira, Microsoft Project, Trello, and Asana depending on your preferences." },
        { question: "What industries do you specialize in?", answer: "We work across sectors, with particular strength in telecom, healthcare, finance, public sector, and IT services." },
        { question: "How do you handle changes in project scope?", answer: "Through formal change management protocols ensuring all scope adjustments are documented, approved, and communicated." }
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
                            <ITProjectManagementIntro />
                        </div>
                        <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Key Features</h3>
                        <div className="d-flex justify-content-center mb-5">
                            <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                        </div>
                        <div className="row">
                            {[
                                { title: "End-to-End Project Lifecycle Management", desc: "From initiation and planning to execution, monitoring, and closure.", icon: <FaProjectDiagram size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Agile, Waterfall, and Hybrid Methodologies", desc: "We tailor the approach to fit your project's complexity and delivery goals.", icon: <FaSyncAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Risk & Change Management", desc: "Proactive identification and mitigation of project risks with structured change control.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Stakeholder & Vendor Coordination", desc: "Clear communication across internal teams, third-party vendors, and project stakeholders.", icon: <FaUsers size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Resource Allocation & Budget Control", desc: "Efficient resource planning, task assignment, and budget adherence.", icon: <FaMoneyBillWave size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Project Documentation & Reporting", desc: "Transparent progress tracking, status reports, and performance KPIs.", icon: <FaFileAlt size={40} style={{ color: "var(--primary-color)" }} /> }
                            ].map((feature, index) => (
                                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                                    <div className="card border-0 p-4 h-100"
                                        style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}>
                                        <HoverLineCard>
                                            <div className="text-center mb-3">{feature.icon}</div>
                                            <h5 style={{ color: "var(--ct-color)" }} className="text-center">{feature.title}</h5>
                                            <p className="text-center">{feature.desc}</p>
                                        </HoverLineCard>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Project Management Process</h3>
                        <div className="d-flex justify-content-center mb-5">
                            <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                        </div>

                        {/* Project Management Timeline - Vertical responsive design */}
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
                                    step: "Project Initiation",
                                    desc: "Define project scope, objectives, and stakeholder requirements",
                                    icon: <FaLightbulb size={24} />,
                                    nodeIcon: <FaLightbulb size={20} />
                                },
                                {
                                    step: "Planning & Design",
                                    desc: "Develop comprehensive project plans, timelines, and resource allocation",
                                    icon: <FaCalendarAlt size={24} />,
                                    nodeIcon: <FaCalendarAlt size={20} />
                                },
                                {
                                    step: "Execution & Implementation",
                                    desc: "Deploy project deliverables while maintaining quality standards",
                                    icon: <FaTools size={24} />,
                                    nodeIcon: <FaTools size={20} />
                                },
                                {
                                    step: "Monitoring & Control",
                                    desc: "Track progress, manage risks, and ensure adherence to plans",
                                    icon: <FaChartLine size={24} />,
                                    nodeIcon: <FaChartLine size={20} />
                                },
                                {
                                    step: "Project Closure",
                                    desc: "Deliver final outcomes, document lessons learned, and transition to operations",
                                    icon: <FaClipboardCheck size={24} />,
                                    nodeIcon: <FaClipboardCheck size={20} />
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
                    </div>
                );
            case 'features':
                return (
                    <div className="container py-5">
                        <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">Key Features</h2>
                        <div className="d-flex justify-content-center mb-5">
                            <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                        </div>
                        <div className="row">
                            {[
                                { title: "Proactive Monitoring", desc: "Continuous monitoring to prevent issues.", icon: <FaSearch size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Scalable Infrastructure", desc: "Adapts to your growing business needs.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Centralized Management", desc: "Unified control with real-time analytics.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Security Integration", desc: "Robust protection with firewalls and IDS.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> }
                            ].map((feature, index) => (
                                <motion.div className="col-md-6 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
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
                    </div>
                );
            case 'whychooseus':
                return (
                    <div className="container py-5">
                        <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Why Choose Our IT Project Management Services</h2>
                        <div className="d-flex justify-content-center mb-5">
                            <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                        </div>

                        {/* Why Choose Us Cards Section */}
                        <div className="row mb-5">
                            {[
                                {
                                    title: "Certified Project Managers",
                                    desc: "Our team holds industry-recognized certifications including PMP®, PRINCE2®, and Agile Scrum Masters with proven expertise.",
                                    icon: <FaAward size={40} style={{ color: "var(--primary-color)" }} />
                                },
                                {
                                    title: "Proven Track Record",
                                    desc: "Extensive experience in enterprise IT deployments across diverse industries and project complexities.",
                                    icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} />
                                },
                                {
                                    title: "Deep Industry Experience",
                                    desc: "Specialized knowledge across telecom, healthcare, finance, public sector, and SMBs with tailored approaches.",
                                    icon: <FaUserTie size={40} style={{ color: "var(--primary-color)" }} />
                                },
                                {
                                    title: "Technology-Agnostic Approach",
                                    desc: "Platform-neutral methodology ensuring optimal technology selection based on your specific requirements.",
                                    icon: <FaBalanceScale size={40} style={{ color: "var(--primary-color)" }} />
                                },
                                {
                                    title: "Communication & Transparency",
                                    desc: "Emphasis on clear communication, regular updates, and complete transparency throughout the project lifecycle.",
                                    icon: <FaUsers size={40} style={{ color: "var(--primary-color)" }} />
                                },
                                {
                                    title: "Flexible Engagement Models",
                                    desc: "Choose from fixed-cost, time & materials, or dedicated team models to match your project needs and budget.",
                                    icon: <FaHandshake size={40} style={{ color: "var(--primary-color)" }} />
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

                        <ProjectManagementTools/>

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
                                            <FaProjectDiagram size={50} style={{ color: "white", opacity: 0.8, marginBottom: "20px" }} />
                                            <h4 style={{ color: "white", marginBottom: "20px" }}>Expert Project Leadership When You Need It Most</h4>
                                            <p style={{ color: "white", fontSize: "18px", fontStyle: "italic", opacity: 0.9, marginBottom: "25px" }}>
                                                "We understand that successful IT projects require more than just technical expertise. Our certified project managers bring strategic thinking, stakeholder management, and proven methodologies to ensure your technology investments deliver measurable business value."
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
                                { title: "Faster Time-to-Market", desc: "Deliver projects efficiently without compromising quality.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Reduced Cost & Scope Creep", desc: "Minimize rework, delays, and budget overruns.", icon: <FaMoneyBillWave size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Enhanced Visibility & Control", desc: "Real-time project tracking with full stakeholder visibility.", icon: <FaChartLine size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Alignment with Business Goals", desc: "Ensure IT investments directly support your strategic objectives.", icon: <FaBullseye size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Reduced Project Risks", desc: "Structured planning and proactive mitigation reduce failure rates.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Improved Team Productivity", desc: "Clear processes and accountability boost overall performance.", icon: <FaUsers size={40} style={{ color: "var(--primary-color)" }} /> }
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

                        <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-3 mt-5">Success Stories</h3>
                        <div className="d-flex justify-content-center mb-5">
                            <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                        </div>
                        <div className="row">
                            {[
                                {
                                    company: "Healthcare Technology Firm",
                                    result: "Successfully migrated legacy patient management systems to cloud infrastructure, completing the project 20% under budget and 2 weeks ahead of schedule.",
                                    icon: <FaCloud size={36} style={{ color: "#fff" }} />,
                                    color: "linear-gradient(135deg, #f08b0a, #f08b0a"
                                },
                                {
                                    company: "Financial Services Corporation",
                                    result: "Led digital transformation initiative involving 15 departments, achieving 99.2% user adoption rate and reducing operational costs by 35%.",
                                    icon: <FaChartLine size={36} style={{ color: "#fff" }} />,
                                    color: "linear-gradient(135deg, #301934, #301934"
                                },
                                {
                                    company: "Telecom Infrastructure Provider",
                                    result: "Managed multi-site network rollout across 50 locations, completing deployment with zero service interruptions and 100% compliance with industry standards.",
                                    icon: <FaServer size={36} style={{ color: "#fff" }} />,
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
                        <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-2">Core Network Solutions</h2>
                        <div className="d-flex justify-content-center mb-5">
                            <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
                        </div>
                        <div className="solutions-grid mb-5">
                            {[
                                { title: "IT Infrastructure Deployment Projects", desc: "Data center builds, cloud migration, network rollouts, and system upgrades.", icon: <FaServer size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Application Development & Integration", desc: "Custom software, SaaS implementations, and third-party integrations.", icon: <FaMobile size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Digital Transformation Initiatives", desc: "Modernization of legacy systems, automation, and agile transformation.", icon: <FaRocket size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Disaster Recovery & Business Continuity", desc: "Strategic planning and implementation of resilient IT solutions.", icon: <FaShieldAlt size={40} style={{ color: "var(--primary-color)" }} /> },
                                { title: "Vendor Management & Procurement", desc: "RFP management, vendor selection, and third-party coordination.", icon: <FaHandshake size={40} style={{ color: "var(--primary-color)" }} /> }
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
                                        onSelect={handleAccordionChange}>
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

    const tabTextStyle = {
        color: 'var(--tt-color)',
        fontWeight: 500
    };

    const activeTabTextStyle = {
        color: 'var(--tt-color)',
        fontWeight: 700
    };

    return (
        <div className="container-fluid p-0">
            <PageBanner
                title="IT Project Management"
                subtitle="Strategic planning, execution, and delivery of technology projects that drive business success"
                // backgroundImage={backgroundImage}
                backgroundImage="https://i.pinimg.com/736x/04/43/3f/04433f17a61e37494cb9043d6dd9b76d.jpg"
                background="#0a1033"
                currentpage="IT Project Management"
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
                            >
                            </motion.div>
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
            <section style={{
                backgroundColor: "var(--tt-color)",
                padding: "50px 0",
                marginTop: "40px"
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h3 className="text-white mb-3">Ready to transform your IT project delivery?</h3>
                            <p className="text-white-50 mb-0">Get in touch for a free consultation and discover how our expert project management can ensure your technology initiatives deliver maximum business value.</p>
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
                                Start Your Project Success Story <FaArrowRight style={{ marginLeft: "8px" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ITProjectManagementPage;