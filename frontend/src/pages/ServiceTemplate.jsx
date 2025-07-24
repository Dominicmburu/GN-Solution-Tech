import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Accordion } from 'react-bootstrap';
import { 
  FaNetworkWired, FaShieldAlt, FaChartLine, FaTools, 
  FaSyncAlt, FaHeadset, FaRocket, FaArrowRight, 
  FaCogs, FaSearch, FaCode, FaServer, FaCloud,
  FaLaptopCode, FaDiagnoses, FaFileAlt, FaKey
} from 'react-icons/fa';

import PageBanner from '../components/common/PageBanner';
import '../assets/css/ServiceTemplate.css';

// This will be imported from your services data file
import servicesData from '../data/servicesData';

const ServiceTemplate = () => {
  const { serviceSlug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the service data that matches the current URL
    const currentService = servicesData.find(service => service.slug === serviceSlug);
    
    if (currentService) {
      setServiceData(currentService);
      document.title = `${currentService.title} | GN Solutions`;
    } else {
      // Handle case when service is not found
      console.error(`Service with slug "${serviceSlug}" not found`);
    }
    
    setLoading(false);
  }, [serviceSlug]);

  // Tabs configuration
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'bi bi-info-circle' },
    { id: 'features', label: 'Features', icon: 'bi bi-list-check' },
    // { id: 'benefits', label: 'Benefits', icon: 'bi bi-award' },
    { id: 'solutions', label: 'Solutions', icon: 'bi bi-gear' },
    { id: 'faqs', label: 'FAQs', icon: 'bi bi-question-square' }
  ];

  // Icon mapping helper
  const getIcon = (iconName, size = 40, color = "var(--primary-color)") => {
    const icons = {
      'FaNetworkWired': <FaNetworkWired size={size} style={{ color }} />,
      'FaShieldAlt': <FaShieldAlt size={size} style={{ color }} />,
      'FaChartLine': <FaChartLine size={size} style={{ color }} />,
      'FaTools': <FaTools size={size} style={{ color }} />,
      'FaSyncAlt': <FaSyncAlt size={size} style={{ color }} />,
      'FaHeadset': <FaHeadset size={size} style={{ color }} />,
      'FaRocket': <FaRocket size={size} style={{ color }} />,
      'FaCogs': <FaCogs size={size} style={{ color }} />,
      'FaSearch': <FaSearch size={size} style={{ color }} />,
      'FaCode': <FaCode size={size} style={{ color }} />,
      'FaServer': <FaServer size={size} style={{ color }} />,
      'FaCloud': <FaCloud size={size} style={{ color }} />,
      'FaLaptopCode': <FaLaptopCode size={size} style={{ color }} />,
      'FaDiagnoses': <FaDiagnoses size={size} style={{ color }} />,
      'FaFileAlt': <FaFileAlt size={size} style={{ color }} />,
      'FaKey': <FaKey size={size} style={{ color }} />
    };
    
    return icons[iconName] || icons['FaCogs']; // Default to FaCogs if icon not found
  };

  // Section title with underline
  const SectionTitle = ({ title, centered = true }) => (
    <>
      <h3 
        style={{ color: "var(--tt-color)" }} 
        className={`${centered ? 'text-center' : ''} mb-2`}
      >
        {title}
      </h3>
      <div className="d-flex justify-content-center mb-5">
        <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
      </div>
    </>
  );

  const renderTabContent = () => {
    if (loading || !serviceData) return <div className="text-center py-5"><div className="spinner-border" role="status"></div></div>;

    switch (activeTab) {
      case 'overview':
        return (
          <div className="container py-5">
            <h2 style={{ color: "var(--tt-color)" }} className="text-center mb-4">What is {serviceData.title}?</h2>
            <div className="row">
              <div className="col-12">
                <div style={{ backgroundColor: 'var(--tt-color)' }} className="card shadow-lg border-0 p-4 mb-5">
                  <p className="text-center text-light fw-bold mb-0">
                    {serviceData.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Overview Content */}
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="overview-content pe-lg-4">
                  <div dangerouslySetInnerHTML={{ __html: serviceData.overview }} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="overview-image rounded shadow-lg overflow-hidden">
                  <img 
                    src={serviceData.mainImage} 
                    alt={serviceData.title} 
                    className="img-fluid w-100"
                    style={{ objectFit: "cover", height: "100%", minHeight: "300px" }}
                  />
                </div>
              </div>
            </div>

            <SectionTitle title="Key Features" />
            <div className="row">
              {serviceData.keyFeatures.map((feature, index) => (
                <motion.div 
                  className="col-md-4 mb-4" 
                  key={index} 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: index * 0.1 }}
                >
                  <div 
                    className="card border-0 p-4 h-100 feature-card"
                    style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}
                  >
                    <div className="text-center mb-3">{getIcon(feature.icon)}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{feature.title}</h5>
                    <p className="text-center">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {serviceData.implementationProcess && (
              <>
                <SectionTitle title="Implementation Process" />
                <div className="implementation-timeline position-relative">
                  {/* Timeline connector line */}
                  <div className="timeline-connector"></div>

                  {serviceData.implementationProcess.map((step, index) => (
                    <motion.div
                      className={`d-flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="timeline-content-wrapper col-5">
                        <div className="timeline-content p-4 bg-white rounded shadow-sm">
                          <h5 style={{ color: "var(--ct-color)" }}>{step.title}</h5>
                          <p className="mb-0 text-muted">{step.description}</p>
                        </div>
                      </div>

                      <div className="timeline-icon-wrapper col-2 d-flex justify-content-center">
                        <div className="timeline-icon-circle">
                          <div style={{ color: "#fff", backgroundColor: "var(--primary-color)" }} className="timeline-icon d-flex align-items-center justify-content-center">
                            {getIcon(step.icon, 24, "#fff")}
                          </div>
                        </div>
                      </div>

                      <div className="col-5"></div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      
      case 'features':
        return (
          <div className="container py-5">
            <SectionTitle title="Key Features & Capabilities" />
            <div className="row mb-5">
              {serviceData.extendedFeatures.map((feature, index) => (
                <motion.div 
                  className="col-lg-6 mb-4" 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="card border-0 h-100 shadow-sm feature-details-card">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="feature-icon rounded-circle me-3 d-flex align-items-center justify-content-center"
                          style={{ 
                            backgroundColor: "rgba(var(--primary-color-rgb), 0.1)",
                            width: "60px",
                            height: "60px"
                          }}
                        >
                          {getIcon(feature.icon, 28)}
                        </div>
                        <h4 style={{ color: "var(--ct-color)" }} className="mb-0">{feature.title}</h4>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: feature.description }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {serviceData.technologies && (
              <>
                <SectionTitle title="Technologies & Tools" />
                <div className="row mb-5">
                  {serviceData.technologies.map((tech, index) => (
                    <motion.div 
                      className="col-md-6 col-lg-3 mb-4"
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div 
                        className="card border-0 p-4 h-100 tech-card"
                        style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}
                      >
                        <div className="text-center mb-3">{getIcon(tech.icon)}</div>
                        <h5 style={{ color: "var(--ct-color)" }} className="text-center">{tech.name}</h5>
                        <p className="text-center mt-2">{tech.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
            
            {serviceData.architecture && (
              <>
                <SectionTitle title="Architecture & Stack" />
                <div className="row mb-5">
                  <div className="col-lg-6">
                    <div className="platform-stack mb-3">
                      {serviceData.architecture.stack.map((layer, index) => (
                        <motion.div 
                          className="stack-layer" 
                          key={index} 
                          initial={{ opacity: 0, x: -20 }} 
                          animate={{ opacity: 1, x: 0 }} 
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="icon-circle-net">
                            {getIcon(layer.icon)}
                          </div>
                          <div className="stack-content">
                            <h5 style={{ color: "var(--ct-color)" }}>{layer.title}</h5>
                            <p>{layer.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <motion.div
                      className="architecture-image-container"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      style={{
                        backgroundColor: "var(--card-color)",
                        borderRadius: "8px",
                        padding: "20px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                        border: "1px solid #e0e9fa",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                      }}
                    >
                      <h5 style={{ color: "var(--tt-color)" }} className="text-center mb-3">{serviceData.architecture.title}</h5>
                      <img
                        src={serviceData.architecture.image}
                        alt={serviceData.architecture.title}
                        className="img-fluid mb-3"
                        style={{ maxHeight: "300px", objectFit: "contain" }}
                      />
                      <p className="text-center mb-0 text-muted">{serviceData.architecture.description}</p>
                    </motion.div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
        
      case 'benefits':
        return (
          <div className="container py-5">
            <SectionTitle title="Key Benefits" />
            <div className="row">
              {serviceData.benefits.map((benefit, index) => (
                <motion.div 
                  className="col-md-4 mb-4" 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="card shadow-lg border-0 p-4 h-100 benefit-card">
                    <div className="text-center mb-3">{getIcon(benefit.icon)}</div>
                    <h5 style={{ color: "var(--ct-color)" }} className="text-center">{benefit.title}</h5>
                    <p className="text-center">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {serviceData.testimonials && (
              <>
                <SectionTitle title="Success Stories" />
                <div className="row">
                  {serviceData.testimonials.map((story, index) => (
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
                        <div className="story-header p-4 d-flex align-items-center" style={{ background: story.color || "linear-gradient(135deg, #f08b0a, rgba(110, 71, 20, 0.7)" }}>
                          <div className="story-icon me-3 d-flex align-items-center justify-content-center rounded-circle"
                            style={{
                              background: "rgba(255,255,255,0.2)",
                              width: "60px",
                              height: "60px"
                            }}
                          >
                            {getIcon(story.icon, 36, "#fff")}
                          </div>
                          <h5 className="text-white mb-0">{story.company}</h5>
                        </div>
                        <div className="story-content p-4 bg-white flex-grow-1 d-flex align-items-center">
                          <p className="mb-0">{story.result}</p>
                        </div>
                        <div className="story-footer p-3 text-center" style={{ background: "#f7f9fc", borderTop: "1px solid #eaeaea" }}>
                          <Link to={story.link || "#"} className="btn btn-sm" style={{ color: "var(--primary-color)", fontWeight: "600" }}>
                            Read Case Study <FaArrowRight style={{ marginLeft: "5px", fontSize: "12px" }} />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
        
      case 'solutions':
        return (
          <div className="container py-5">
            <SectionTitle title={`Our ${serviceData.title} Solutions`} />
            <div className="solutions-grid">
              {serviceData.solutions.map((solution, index) => (
                <motion.div
                  className="solution-card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "1px solid #eaeaea" }}
                >
                  <div className="icon-circle-core">{getIcon(solution.icon)}</div>
                  <h5 style={{ color: "var(--ct-color)" }}>{solution.title}</h5>
                  <p>{solution.description}</p>
                </motion.div>
              ))}
            </div>

            <SectionTitle title={`Why Choose Our ${serviceData.title}`} />
            <div className="row">
              {serviceData.whyChooseUs.map((item, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <motion.div
                    className="why-choose-card h-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                      border: "1px solid #eaeaea",
                      height: "100%"
                    }}
                  >
                    <div className="card-header d-flex align-items-center p-4" 
                      style={{ 
                        background: "rgba(var(--primary-color-rgb), 0.08)", 
                        borderBottom: "1px solid rgba(var(--primary-color-rgb), 0.1)" 
                      }}
                    >
                      <div className="icon-container me-3 rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          background: "#fff",
                          width: "60px",
                          height: "60px",
                          boxShadow: "0 4px 15px rgba(var(--primary-color-rgb), 0.2)"
                        }}
                      >
                        {getIcon(item.icon, 32)}
                      </div>
                      <h5 style={{ color: "var(--ct-color)", margin: 0 }}>{item.title}</h5>
                    </div>
                    <div className="card-body p-4">
                      <p className="mb-0">{item.description}</p>
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
            <SectionTitle title="Frequently Asked Questions" />
            <div className="faqs-container">
              {serviceData.faqs.map((faq, index) => (
                <motion.div 
                  className="faq-item" 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.1 }}
                >
                  <Accordion>
                    <Accordion.Item
                      eventKey={index.toString()}
                      style={{
                        marginBottom: "15px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: "1px solid rgba(var(--primary-color-rgb), 0.2)"
                      }}
                    >
                      <Accordion.Header>
                        <div className="faq-question">
                          <span className="question-icon" style={{ backgroundColor: "var(--primary-color)" }}>Q</span>
                          <span className="question-text" style={{ color: "var(--ct-color)", fontWeight: "600" }}>{faq.question}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body style={{ backgroundColor: "#f9fbff" }}>
                        <div className="faq-answer">
                          <span className="answer-icon" style={{ backgroundColor: "var(--tt-color)" }}>A</span>
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
                boxShadow: "0 4px 15px rgba(var(--primary-color-rgb), 0.3)"
              }}>
                Have More Questions? Contact Us <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        );
        
      default:
        return <div className="text-center py-5">Content not found</div>;
    }
  };

  if (loading) {
    return (
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!serviceData) {
    return (
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h2>Service not found</h2>
          <p>The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-0">
      <PageBanner
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        backgroundImage={serviceData.bannerImage}
        background="#0a1033"
        currentpage={serviceData.title}
      />

      <section className="tabs-section py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="custom-tabs-container">
                <div className="tab-navigation">
                  <ul className="nav custom-tabs justify-content-center flex-nowrap overflow-auto" id="serviceTabs" role="tablist">
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
                          style={{
                            borderBottom: activeTab === tab.id ? `3px solid var(--primary-color)` : 'none',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <i className={`${tab.icon} tab-icon`} style={{ color: "var(--primary-color)" }}></i>
                          <span style={{ color: "var(--tt-color)" }}>{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tab-content-container mt-4">
                  <div className="tab-content" id="serviceTabsContent">
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

      {/* Call-to-Action Section */}
      <section style={{
        backgroundColor: "var(--tt-color)",
        padding: "50px 0",
        marginTop: "40px"
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <h3 className="text-white mb-3">{serviceData.cta.title}</h3>
              <p className="text-white-50 mb-0">{serviceData.cta.description}</p>
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
                {serviceData.cta.buttonText} <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;