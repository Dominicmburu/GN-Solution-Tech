import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaShieldAlt, FaCloudUploadAlt, FaCogs, FaUserTie, FaArrowRight, FaQuestionCircle, FaTools, FaSyncAlt, FaChartLine, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/ITTechnologyTraining.css';
import backgroundImage from '../assets/training.jpg';

const ITTechnologyTrainingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'bi bi-info-circle' },
    { id: 'courses', label: 'Courses', icon: 'bi bi-book' },
    { id: 'benefits', label: 'Benefits', icon: 'bi bi-award' },
    { id: 'solutions', label: 'Solutions', icon: 'bi bi-gear' },
    { id: 'faqs', label: 'FAQs', icon: 'bi bi-question-square' }
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
            <h2 className="text-center text-primary mb-4">What is IT Technology Training?</h2>
            <div className="row">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4 mb-5 gradient-card">
                  <p className="text-center text-light fw-bold mb-0">
                    Our IT Technology Training program is designed to empower professionals, teams, and organizations with the practical knowledge and hands-on skills needed to thrive in today's fast-evolving digital world. We deliver industry-relevant training across key domains such as cloud computing, network engineering, cybersecurity, DevOps, automation, and enterprise infrastructure.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-center text-primary mb-4">Key Features</h3>
            <div className="row">
              {[
                { title: "Instructor-Led & Self-Paced Options", desc: "Live online, in-person, and on-demand courses.", icon: <FaGraduationCap size={40} className="feature-icon" /> },
                { title: "Hands-On Labs", desc: "Access to real-world simulations and sandbox environments.", icon: <FaLaptopCode size={40} className="feature-icon" /> },
                { title: "Certification-Ready Curriculum", desc: "Content aligned with CompTIA, Cisco, AWS, and others.", icon: <FaShieldAlt size={40} className="feature-icon" /> },
                { title: "Customized Corporate Training", desc: "Tailored programs for specific skill gaps and goals.", icon: <FaCogs size={40} className="feature-icon" /> },
                { title: "Expert Trainers", desc: "Learn from seasoned professionals with field experience.", icon: <FaUserTie size={40} className="feature-icon" /> },
                { title: "Access to Learning Portal", desc: "24/7 access to training materials and labs.", icon: <FaCloudUploadAlt size={40} className="feature-icon" /> }
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
            
            <h3 className="text-center text-primary mb-4 mt-5">Why Choose Us</h3>
            <div className="why-choose-timeline">
              {[
                { reason: "Industry Expertise", desc: "We are practitioners with real-world implementation experience", icon: <FaUserTie size={24} /> },
                { reason: "Tailored for Europe & Global Markets", desc: "Localized to EU regulations and compliance", icon: <FaGraduationCap size={24} /> },
                { reason: "Hands-On Focus", desc: "Emphasizing practice over theory", icon: <FaLaptopCode size={24} /> },
                { reason: "Integrated with Services", desc: "Bundle with consulting and support", icon: <FaCogs size={24} /> },
                { reason: "Flexible Delivery", desc: "Online, on-site, or hybrid options", icon: <FaRocket size={24} /> }
              ].map((item, index) => (
                <motion.div className="timeline-item" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <h5>{item.reason}</h5>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'courses':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Training Courses</h2>
            <div className="row text-center">
              {[
                { name: "Network Engineering", desc: "LAN/WAN, SD-WAN, routing & switching, MPLS, BGP, OSPF, VLANs, network automation", icon: <FaCogs size={40} className="tech-icon" /> },
                { name: "Cloud & Virtualization", desc: "AWS, Azure, Docker, Kubernetes, VMware, infrastructure as code", icon: <FaCloudUploadAlt size={40} className="tech-icon" /> },
                { name: "Cybersecurity", desc: "Firewalls, endpoint security, threat detection, security audits, SIEM, compliance", icon: <FaShieldAlt size={40} className="tech-icon" /> },
                { name: "DevOps & Automation", desc: "Jenkins, Ansible, Terraform, GitHub Actions, CI/CD, monitoring", icon: <FaLaptopCode size={40} className="tech-icon" /> }
              ].map((course, index) => (
                <motion.div className="col-md-6 col-lg-3 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 tech-card">
                    {course.icon}
                    <h5>{course.name}</h5>
                    <p className="mt-2">{course.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Learning Paths</h3>
            <div className="platform-stack">
              {[
                { title: "Beginner IT Professional", desc: "Foundational knowledge and essential skills.", icon: <FaGraduationCap /> },
                { title: "Mid-Level Specialist", desc: "Advanced techniques and specialized domains.", icon: <FaLaptopCode /> },
                { title: "Enterprise Team Training", desc: "Collaborative skills for IT departments.", icon: <FaUserTie /> },
                { title: "Certification Preparation", desc: "Focused exam readiness programs.", icon: <FaShieldAlt /> },
                { title: "Executive Technology Overview", desc: "Strategic understanding for decision-makers.", icon: <FaCogs /> }
              ].map((path, index) => (
                <motion.div className="stack-layer" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="stack-icon">{path.icon}</div>
                  <div className="stack-content">
                    <h5>{path.title}</h5>
                    <p>{path.desc}</p>
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
                { title: "Upskill with Confidence", desc: "Gain skills required for cutting-edge technologies.", icon: <FaGraduationCap size={40} className="benefit-icon" /> },
                { title: "Accelerate Career Growth", desc: "Prepare for in-demand IT roles and positions.", icon: <FaRocket size={40} className="benefit-icon" /> },
                { title: "Boost Team Productivity", desc: "Equip IT teams to deliver faster, safer services.", icon: <FaChartLine size={40} className="benefit-icon" /> },
                { title: "Enhance Project Success", desc: "Minimize downtime and deployment issues.", icon: <FaTools size={40} className="benefit-icon" /> },
                { title: "Achieve Certification Goals", desc: "Improve pass rates for key industry certifications.", icon: <FaShieldAlt size={40} className="benefit-icon" /> },
                { title: "Practical Skill Development", desc: "Learn by doing with hands-on environments.", icon: <FaLaptopCode size={40} className="benefit-icon" /> }
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
            <h2 className="text-center text-primary mb-4">Training Solutions</h2>
            <div className="solutions-grid">
              {[
                { title: "Network Engineering Training", desc: "LAN/WAN, SD-WAN, routing & switching, MPLS, BGP, OSPF, VLANs, and network automation.", icon: <FaCogs size={40} /> },
                { title: "Cloud & Virtualization Training", desc: "AWS, Azure, Docker, Kubernetes, VMware with infrastructure as code and CI/CD pipelines.", icon: <FaCloudUploadAlt size={40} /> },
                { title: "Cybersecurity Training", desc: "Firewalls, endpoint security, threat detection, security audits, SIEM, and compliance.", icon: <FaShieldAlt size={40} /> },
                { title: "DevOps & Automation Training", desc: "Jenkins, Ansible, Terraform, GitHub Actions, CI/CD, and automated provisioning.", icon: <FaLaptopCode size={40} /> },
                { title: "IT Infrastructure & Support Training", desc: "ITIL, Windows/Linux administration, monitoring, virtualization, and remote IT support.", icon: <FaTools size={40} /> },
                { title: "Custom Corporate IT Training", desc: "Tailored for teams undergoing digital transformation or network modernization.", icon: <FaUserTie size={40} /> }
              ].map((solution, index) => (
                <motion.div className="solution-card" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <div className="solution-icon">{solution.icon}</div>
                  <h5>{solution.title}</h5>
                  <p>{solution.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Delivery Methods</h3>
            <div className="delivery-methods">
              {[
                { title: "Instructor-Led Training", desc: "Live sessions with expert trainers in virtual or physical classrooms." },
                { title: "Self-Paced Learning", desc: "On-demand access to course materials, videos, and practice labs." },
                { title: "Blended Learning", desc: "Combination of instructor-led sessions and self-paced modules." },
                { title: "Boot Camps", desc: "Intensive, immersive training programs for rapid skill development." }
              ].map((method, index) => (
                <motion.div className="delivery-method-item" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
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
          background: `linear-gradient(rgba(0, 30, 60, 0.7), rgba(0, 30, 60, 0.8)), url(${backgroundImage}) center/cover no-repeat`,
          height: "60vh",
          position: "relative"
        }}
      >
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          IT Technology Training
        </motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          Empowering professionals with hands-on skills for today's digital landscape
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
          <Link to="/contact" className="cta-button">
            Explore Courses <FaArrowRight className="ms-2" />
          </Link>
        </motion.div>
      </div>
      <div className="hero-overlay"></div>

      <section className="tabs-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="custom-tabs-container">
                <div className="tab-navigation">
                  <ul className="nav custom-tabs justify-content-center" id="trainingTabs" role="tablist">
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
                          <i className={`${tab.icon} tab-icon`}></i>
                          <span className="tab-text">{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tab-content-container mt-4">
                  <div className="tab-content" id="trainingTabsContent">
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
          <h3>Advance Your IT Career Today!</h3>
          <p>Contact us to learn about our training programs tailored to your professional goals.</p>
          <Link to="/contact" className="cta-button-secondary">
            Request Training Info <FaArrowRight className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ITTechnologyTrainingPage;