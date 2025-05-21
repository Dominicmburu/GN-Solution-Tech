import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaLaptopCode, FaShieldAlt, FaCloudUploadAlt, FaCogs, FaUserTie, FaArrowRight, FaQuestionCircle, FaTools, FaSyncAlt, FaChartLine, FaChartBar, FaAward, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/TechnologyTransition.css';
import techTransformation from '../assets/tech-transformation.avif';

const TechnologyTransitionPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Modified tabs - removed features tab and replaced technologies with why choose us
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaInfoCircle /> },
    { id: 'whychooseus', label: 'Why Choose Us', icon: <FaAward /> },
    { id: 'benefits', label: 'Key Benefits', icon: <FaCheckCircle /> },
    { id: 'solutions', label: 'Key Solutions', icon: <FaRocket /> },
    { id: 'faqs', label: 'FAQs', icon: <FaQuestionCircle /> }
  ];
  
  const faqs = [
    { question: "What's the difference between technology transition and transformation?", answer: "Transition is the process of migrating from an old to a new technology. Transformation is a broader initiative that includes reimagining processes, business models, and user experiences through new technologies." },
    { question: "How long does a transition and transformation project take?", answer: "It depends on scope and complexity. Some projects may take weeks, while others span several months or more. We work with you to define clear timelines and milestones." },
    { question: "Will our operations be disrupted during the transition?", answer: "We employ phased migration, parallel runs, and testing to minimize downtime. Most transitions occur with zero or limited disruption to business operations." },
    { question: "What kind of support do you provide post-transition?", answer: "We offer comprehensive support services including monitoring, optimization, user training, and ongoing advisory." },
    { question: "Can you help us justify the investment to our stakeholders?", answer: "Yes. We provide clear ROI models, business case documents, and performance improvement projections tailored to your organizational objectives." }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">What is Technology Transition and Transformation?</h2>
            <div className="row">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4 mb-5 gradient-card">
                  <p className="text-center text-light fw-bold mb-0">
                   In today’s rapidly evolving digital landscape, organizations must continuously adapt their technology environments to remain competitive, efficient, and secure. Technology Transition and Transformation (T3) refers to the structured process of moving from outdated, legacy, or inefficient systems to modern, optimized, and scalable technology platforms.
Whether it’s migrating from on-premises to the cloud, integrating modern DevOps practices, or overhauling legacy infrastructure, our T3 services help businesses embrace change with minimal risk and maximum value.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="row mb-5">
              <div className="col-12">
                <div className="card shadow-sm border-0 p-4">
                  <p className="text-center mb-0">
                    Whether it's migrating from on-premises to the cloud, integrating modern DevOps practices, or overhauling legacy infrastructure, our T3 services help businesses embrace change with minimal risk and maximum value.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Key Features section moved from separate tab to overview */}
            <h3 className="text-center text-primary mb-4">Key Features</h3>
            <div className="row">
              {[
                { title: "Assessment & Readiness Evaluation", desc: "Comprehensive analysis of your current IT landscape to understand technical, operational, and business needs.", icon: <FaChartBar size={40} className="feature-icon" /> },
                { title: "Strategic Roadmap Development", desc: "Expert design of a phased, realistic transformation roadmap aligned with your business goals.", icon: <FaRocket size={40} className="feature-icon" /> },
                { title: "Risk & Impact Analysis", desc: "Identification of potential transition risks with implemented mitigation strategies to ensure smooth changeover.", icon: <FaShieldAlt size={40} className="feature-icon" /> },
                { title: "Legacy System Migration", desc: "Seamless migration of workloads, applications, and data from legacy environments to modern platforms.", icon: <FaSyncAlt size={40} className="feature-icon" /> },
                { title: "Platform Modernization", desc: "Infrastructure modernization using cloud, virtualization, containerization, and automation tools.", icon: <FaCloudUploadAlt size={40} className="feature-icon" /> },
                { title: "Change Management", desc: "Support for organizational change, including staff training and communication strategies.", icon: <FaUserTie size={40} className="feature-icon" /> }
              ].map((feature, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 feature-card">
                    <div className="text-center mb-3">{feature.icon}</div>
                    <h5 className="text-center">{feature.title}</h5>
                    <p className="text-center">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Our Approach</h3>
            <div className="approach-timeline">
              {[
                { phase: "1. Discover", desc: "Assessment of current state and requirements gathering" },
                { phase: "2. Design", desc: "Architecture design and transformation roadmap creation" },
                { phase: "3. Build", desc: "Environment preparation and implementation" },
                { phase: "4. Transition", desc: "Staged migration with testing and validation" },
                { phase: "5. Optimize", desc: "Performance tuning and continuous improvement" }
              ].map((step, index) => (
                <motion.div className="approach-step" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }}>
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h5>{step.phase}</h5>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'whychooseus':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Why Choose Us</h2>
            
            <div className="row mb-5">
              <div className="col-md-8 mx-auto">
                <div className="card shadow-lg border-0 p-4 mb-5">
                  <p className="text-center mb-0">
                    With years of experience across diverse industries, our team brings trusted expertise to every technology transition and transformation project. We take a tailored approach focused on your business outcomes and minimize risk every step of the way.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="row">
              {[
                { title: "Proven Expertise", desc: "With years of hands-on experience across industries, our team has successfully led multiple high-impact transitions.", icon: <FaUserTie size={40} className="whychoose-icon" /> },
                { title: "Tailored Approach", desc: "We don't believe in one-size-fits-all. Each transformation plan is custom-built for your unique environment and goals.", icon: <FaCogs size={40} className="whychoose-icon" /> },
                { title: "Business-First Focus", desc: "We align technical transitions with strategic business outcomes—ensuring technology enables growth, not complexity.", icon: <FaChartLine size={40} className="whychoose-icon" /> },
                { title: "Risk Mitigation Professionals", desc: "Our systematic risk assessment frameworks reduce downtime, data loss, and operational disruption.", icon: <FaShieldAlt size={40} className="whychoose-icon" /> },
                { title: "End-to-End Partnership", desc: "From planning to execution and beyond, we walk the entire journey with you.", icon: <FaRocket size={40} className="whychoose-icon" /> }
              ].map((item, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 whychoose-card">
                    <div className="text-center mb-3">{item.icon}</div>
                    <h5 className="text-center">{item.title}</h5>
                    <p className="text-center">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Client Success Stories</h3>
            <div className="success-stories">
              {[
                { company: "Enterprise Financial Institution", result: "Reduced infrastructure costs by 40% through cloud migration while improving system reliability by 99.99%." },
                { company: "Healthcare Services Provider", result: "Modernized legacy applications to improve patient data access speeds by 300% and achieve HIPAA compliance." },
                { company: "Retail Chain", result: "Transformed e-commerce platform resulting in 65% faster page loads and 28% increase in conversion rates." }
              ].map((story, index) => (
                <motion.div className="story-card" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: index * 0.2 }}>
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
            <h2 className="text-center text-primary mb-4">Key Benefits</h2>
            <div className="row">
              {[
                { title: "Increased Efficiency & Agility", desc: "Modern platforms streamline processes, enabling faster innovation and adaptability.", icon: <FaRocket size={40} className="benefit-icon" /> },
                { title: "Reduced Costs", desc: "Decommissioning legacy systems reduces maintenance and infrastructure costs.", icon: <FaChartLine size={40} className="benefit-icon" /> },
                { title: "Enhanced Security & Compliance", desc: "New systems often come with updated security models and support compliance requirements.", icon: <FaShieldAlt size={40} className="benefit-icon" /> },
                { title: "Improved User Experience", desc: "Better performance, availability, and interfaces improve productivity and satisfaction.", icon: <FaLaptopCode size={40} className="benefit-icon" /> },
                { title: "Business Continuity", desc: "A modern, redundant, and scalable setup ensures better uptime and disaster recovery preparedness.", icon: <FaCogs size={40} className="benefit-icon" /> },
                { title: "Future-Proofing", desc: "Adaptable architectures that can evolve with technology and business needs.", icon: <FaTools size={40} className="benefit-icon" /> }
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
                { company: "Enterprise Financial Institution", result: "Reduced infrastructure costs by 40% through cloud migration while improving system reliability by 99.99%." },
                { company: "Healthcare Services Provider", result: "Modernized legacy applications to improve patient data access speeds by 300% and achieve HIPAA compliance." },
                { company: "Retail Chain", result: "Transformed e-commerce platform resulting in 65% faster page loads and 28% increase in conversion rates." }
              ].map((story, index) => (
                <motion.div className="story-card" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: index * 0.2 }}>
                  <div className="story-content">
                    <h5>{story.company}</h5>
                    <p>{story.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'solutions':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Key Solutions We Offer</h2>
            <div className="solutions-grid">
              {[
                { title: "Cloud Migration & Optimization", desc: "Azure, AWS, GCP migration and right-sizing of workloads for performance and cost-efficiency.", icon: <FaCloudUploadAlt size={40} /> },
                { title: "Legacy System Retirement", desc: "Decommissioning outdated systems and replacing them with secure, cloud-native, or hybrid solutions.", icon: <FaSyncAlt size={40} /> },
                { title: "DevOps & Automation Integration", desc: "Implementation of CI/CD pipelines, Infrastructure as Code (IaC), and automated provisioning.", icon: <FaLaptopCode size={40} /> },
                { title: "Network & Infrastructure Modernization", desc: "Transitioning from traditional architectures to software-defined, containerized, and virtualized environments.", icon: <FaCogs size={40} /> },
                { title: "Digital Workspace Enablement", desc: "Migration to modern collaboration tools (e.g., Microsoft 365, Google Workspace) and VDI platforms.", icon: <FaUserTie size={40} /> },
                { title: "Enterprise Application Transformation", desc: "Refactoring or re-platforming enterprise applications for improved performance and integration.", icon: <FaTools size={40} /> }
              ].map((solution, index) => (
                <motion.div className="solution-card" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="solution-icon">{solution.icon}</div>
                  <h5>{solution.title}</h5>
                  <p>{solution.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Transformation Methodologies</h3>
            <div className="methodology-container">
              {[
                { title: "Lift and Shift", desc: "Rehosting applications with minimal changes to quickly move to new platforms." },
                { title: "Refactor and Optimize", desc: "Modifying code and configurations to better leverage modern technologies." },
                { title: "Replatform", desc: "Moving to new platforms while preserving core functionality and adding new capabilities." },
                { title: "Rebuild", desc: "Completely redesigning applications for cloud-native and modern architecture patterns." }
              ].map((method, index) => (
                <motion.div className="methodology-item" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <h5>{method.title}</h5>
                  <p>{method.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'faqs':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Frequently Asked Questions</h2>
            <div className="faqs-container">
              {faqs.map((faq, index) => (
                <motion.div className="faq-item" key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Accordion>
                    <Accordion.Item eventKey={index.toString()}>
                      <Accordion.Header>
                        <div className="faq-question">
                          <span className="question-icon">Q</span>
                          <span className="question-text">{faq.question}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="faq-answer">
                          <span className="answer-icon">A</span>
                          <p>{faq.answer}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="container-fluid p-0">
    <div 
      className="hero-section text-white d-flex flex-column align-items-center justify-content-center"
      style={{ 
        background: `linear-gradient(rgba(0, 30, 60, 0.7), rgba(0, 30, 60, 0.8)), url(${techTransformation}) center/cover no-repeat`,
        height: "60vh",
        position: "relative"
      }}
    >
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Technology Transition & Transformation
        </motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          Modernize your IT infrastructure with minimal risk and maximum value
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
          <Link to="/contact" className="cta-button">
            Request Consultation <FaArrowRight className="ms-2" />
          </Link>
        </motion.div>
      </div>
      <div className="hero-overlay"></div>

     {/* Tabs Section */}
     <section className="tabs-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div 
                className="text-center mb-5"
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
                          className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                          onClick={() => setActiveTab(tab.id)}
                          id={`${tab.id}-tab`}
                          type="button"
                          role="tab"
                          aria-controls={tab.id}
                          aria-selected={activeTab === tab.id}
                        >
                          {tab.icon}
                          <span className="tab-text ms-2">{tab.label}</span>
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

      <div className="cta-section">
        <div className="container">
          <h3>Ready to Transform Your Technology?</h3>
          <p>Let's discuss how we can help modernize your IT environment with minimal disruption.</p>
          <Link to="/contact" className="cta-button-secondary">
            Schedule a Consultation <FaArrowRight className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechnologyTransitionPage;