import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaShieldAlt, FaCloudUploadAlt, FaCogs, FaUserTie, FaArrowRight, FaQuestionCircle, FaTools, FaSyncAlt, FaChartLine, FaRocket, FaAward, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import '../assets/css/ITTechnologyTraining.css';
import backgroundImage from '../assets/training.jpg';

const ITTechnologyTrainingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
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
            <h2 className="text-center text-primary mb-4">What is IT Technology Training?</h2>
            <div className="row">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4 mb-5 gradient-card">
                  <p className="text-center text-light fw-bold mb-0">
                   Our IT Technology Training program is designed to empower professionals, teams, and organizations with the practical knowledge and hands-on skills needed to thrive in today’s fast-evolving digital world. We deliver industry-relevant training across key domains such as cloud computing, network engineering, cybersecurity, DevOps, automation, and enterprise infrastructure.
Our training is not just theoretical — it's tailored to real-world challenges and aligned with global certifications and vendor technologies, helping learners apply what they know from day one.

                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-center text-primary mb-4">Key Features</h3>
            <div className="row">
              {[
                { title: "Instructor-Led & Self-Paced Options", desc: "Live online, in-person, and on-demand courses to suit all learning styles.", icon: <FaGraduationCap size={40} className="feature-icon" /> },
                { title: "Hands-On Labs", desc: "Access to real-world simulations and sandbox environments like EVE-NG, GNS3, and cloud sandboxes.", icon: <FaLaptopCode size={40} className="feature-icon" /> },
                { title: "Certification-Ready Curriculum", desc: "Content aligned with CompTIA, Cisco, Juniper, AWS, Microsoft, and other leading certification bodies.", icon: <FaShieldAlt size={40} className="feature-icon" /> },
                { title: "Customized Corporate Training", desc: "Tailored programs to address specific skill gaps and business goals.", icon: <FaCogs size={40} className="feature-icon" /> },
                { title: "Expert Trainers", desc: "Learn from seasoned professionals with field experience in enterprise networks, cloud, automation, and cybersecurity.", icon: <FaUserTie size={40} className="feature-icon" /> },
                { title: "Access to Learning Portal", desc: "24/7 access to training materials, lab environments, assignments, and assessments.", icon: <FaCloudUploadAlt size={40} className="feature-icon" /> }
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
          </div>
        );
      case 'why-choose-us':
        return (
          <div className="container py-5">
            <h2 className="text-center text-primary mb-4">Why Choose Us</h2>
            <div className="row">
              {[
                { title: "Industry Expertise", desc: "We are not just trainers — we are practitioners with real-world consulting and implementation experience.", icon: <FaUserTie size={40} className="why-choose-icon" /> },
                { title: "Tailored for Europe & Global Markets", desc: "Our training is localized and relevant to regulatory, compliance, and operational realities in Ireland, the EU, and beyond.", icon: <FaGraduationCap size={40} className="why-choose-icon" /> },
                { title: "Hands-On Focus", desc: "We emphasize practice over theory, using simulations and live labs that mirror production environments.", icon: <FaLaptopCode size={40} className="why-choose-icon" /> },
                { title: "Integrated with Services", desc: "Training can be bundled with consulting and support for seamless knowledge transfer and transformation.", icon: <FaCogs size={40} className="why-choose-icon" /> },
                { title: "Flexible Delivery", desc: "Whether you're an individual professional or an enterprise team, we offer flexible schedules and learning formats.", icon: <FaRocket size={40} className="why-choose-icon" /> }
              ].map((item, index) => (
                <motion.div className="col-md-4 mb-4" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <div className="card shadow-lg border-0 p-4 h-100 why-choose-card">
                    <div className="text-center mb-3">{item.icon}</div>
                    <h5 className="text-center">{item.title}</h5>
                    <p className="text-center">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-center text-primary mb-4 mt-5">Our Commitment</h3>
            <div className="row">
              <div className="col-12">
                <div className="card shadow-lg border-0 p-4 mb-4 commitment-card">
                  <p className="text-center mb-0">
                    Our training is not just theoretical — it's tailored to real-world challenges and aligned with global certifications and vendor technologies, helping learners apply what they know from day one.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="why-choose-timeline mt-5">
              <h3 className="text-center text-primary mb-4">Our Approach</h3>
              {[
                { step: "Assess", desc: "We identify your specific skill gaps and training needs", icon: <FaInfoCircle size={24} /> },
                { step: "Customize", desc: "We design training programs aligned with your goals", icon: <FaTools size={24} /> },
                { step: "Deliver", desc: "We provide hands-on, practical training experiences", icon: <FaLaptopCode size={24} /> },
                { step: "Support", desc: "We offer post-training mentorship and assistance", icon: <FaUserTie size={24} /> },
                { step: "Evaluate", desc: "We measure results and refine for continuous improvement", icon: <FaChartLine size={24} /> }
              ].map((item, index) => (
                <motion.div className="timeline-item" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <h5>{item.step}</h5>
                    <p>{item.desc}</p>
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
                { title: "Network Engineering Training", desc: "LAN/WAN, SD-WAN, routing & switching, MPLS, BGP, OSPF, VLANs, and network automation. Tools: Cisco, Juniper, Arista, EVE-NG, GNS3.", icon: <FaCogs size={40} /> },
                { title: "Cloud & Virtualization Training", desc: "AWS, Azure, Docker, Kubernetes, VMware with infrastructure as code, CI/CD pipelines, and container orchestration.", icon: <FaCloudUploadAlt size={40} /> },
                { title: "Cybersecurity Training", desc: "Firewalls, endpoint security, threat detection, security audits, SIEM, and compliance. Certification Paths: CompTIA Security+, CEH, CISSP, ISO 27001.", icon: <FaShieldAlt size={40} /> },
                { title: "DevOps & Automation Training", desc: "Jenkins, Ansible, Terraform, GitHub Actions, CI/CD, automated provisioning, monitoring with project-based delivery.", icon: <FaLaptopCode size={40} /> },
                { title: "IT Infrastructure & Support Training", desc: "ITIL, Windows/Linux system administration, monitoring, virtualization, and remote IT support best practices.", icon: <FaTools size={40} /> },
                { title: "Custom Corporate IT Training Programs", desc: "Designed for internal IT teams or clients undergoing digital transformation or network modernization projects.", icon: <FaUserTie size={40} /> }
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