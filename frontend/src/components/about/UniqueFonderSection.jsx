import React, { useState } from 'react';
import { FaLinkedin, FaCertificate, FaQuoteLeft, FaGlobe, FaNetworkWired, FaShieldAlt, FaCode, FaAward } from 'react-icons/fa';

const UniqueFonderSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const certifications = ["JNCIA-DevOps", "Cisco DevOps", "CCNP", "Prince 2", "ITIL Foundation"];
  
  const founderQuotes = [
    "Technology without automation is just complexity waiting to cause problems.",
    "In network infrastructure, security isn't an option—it's the foundation.",
    "The best solutions are those that make complex systems simple to manage."
  ];
  
  const experienceHighlights = [
    { company: "AWS", role: "DevOps Leadership", achievement: "Led 12-engineer team" },
    { company: "Aptiv", role: "Global Network Design", achievement: "148 sites worldwide" },
    { company: "COMCAST", role: "Network Automation", achievement: "€1M cost savings" },
    { company: "Vodafone", role: "Technical Leadership", achievement: "50+ countries" }
  ];

  return (
    <section className="py-5 position-relative" style={{ backgroundColor: "var(--founder-color)" }}>
      {/* Animated network grid background */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ 
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(240,139,10,0.15) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        animation: 'networkPulse 20s linear infinite'
      }}></div>
      
      <div className="container position-relative">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3 text-white">Meet the Visionary</h2>
            <p style={{color: '#f08b0a'}}>The mind behind GN Solutions' innovation</p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row align-items-center">
              {/* Left Column - Image and Quick Info */}
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="position-relative">
                  {/* Circular frame for image */}
                  <div className="circle-wrapper mx-auto" style={{ width: '280px', height: '280px', position: 'relative' }}>
                    <div style={{ 
                      width: '280px', 
                      height: '280px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #f08b0a, #0a1033)',
                      padding: '5px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        width: '270px',
                        height: '270px',
                        borderRadius: '50%',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src="/images/George.jpg" 
                          alt="George Chege Njeru"
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Name and Title Card */}
                  <div className="text-center mt-4">
                    <h3 className="text-white fw-bold mb-2">George Chege Njeru</h3>
                    <p className="mb-3" style={{ color: '#f08b0a' }}>Founder & Director of Network Solutions</p>
                    <a href="https://www.linkedin.com/in/georgenjeru/" className="btn btn-outline-light btn-sm rounded-pill">
                      <FaLinkedin className="me-2" /> Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Interactive Content */}
              <div className="col-lg-8">
                <div className="bg-dark bg-opacity-50 rounded-4 p-4 backdrop-blur">
                  {/* Interactive Tabs */}
                  <div className="d-flex flex-wrap justify-content-center mb-4">
                    <button 
                      className={`btn btn-sm me-2 mb-2 rounded-pill ${activeTab === 'experience' ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={() => setActiveTab('experience')}
                    >
                      <FaGlobe className="me-1" /> Experience
                    </button>
                    <button 
                      className={`btn btn-sm me-2 mb-2 rounded-pill ${activeTab === 'expertise' ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={() => setActiveTab('expertise')}
                    >
                      <FaNetworkWired className="me-1" /> Expertise
                    </button>
                    <button 
                      className={`btn btn-sm me-2 mb-2 rounded-pill ${activeTab === 'certifications' ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={() => setActiveTab('certifications')}
                    >
                      <FaCertificate className="me-1" /> Certifications
                    </button>
                    <button 
                      className={`btn btn-sm mb-2 rounded-pill ${activeTab === 'philosophy' ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={() => setActiveTab('philosophy')}
                    >
                      <FaQuoteLeft className="me-1" /> Philosophy
                    </button>
                  </div>
                  
                  {/* Tab Content */}
                  <div className="tab-content">
                    {activeTab === 'experience' && (
                      <div className="fade-in">
                        <h4 className="text-white mb-3">17+ Years of Global Excellence</h4>
                        <div className="row g-3">
                          {experienceHighlights.map((exp, idx) => (
                            <div className="col-md-6" key={idx}>
                              <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(240,139,10,0.1)', border: '1px solid rgba(240,139,10,0.3)' }}>
                                <h6 className="text-warning mb-1">{exp.company}</h6>
                                <p className="text-white mb-1">{exp.role}</p>
                                <small style={{ color: '#8b9dc3' }}>{exp.achievement}</small>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'expertise' && (
                      <div className="fade-in">
                        <h4 className="text-white mb-3">Technical Mastery</h4>
                        <div className="row g-3">
                          <div className="col-md-4">
                            <div className="text-center p-3">
                              <FaNetworkWired className="mb-2" style={{ fontSize: '2.5rem', color: '#f08b0a' }} />
                              <h6 className="text-white">Network Architecture</h6>
                              <p className="small mb-0" style={{ color: '#8b9dc3' }}>MPLS, SD-WAN, BGP</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center p-3">
                              <FaShieldAlt className="mb-2" style={{ fontSize: '2.5rem', color: '#f08b0a' }} />
                              <h6 className="text-white">Security</h6>
                              <p className="small mb-0" style={{ color: '#8b9dc3' }}>Zero Trust, Segmentation</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center p-3">
                              <FaCode className="mb-2" style={{ fontSize: '2.5rem', color: '#f08b0a' }} />
                              <h6 className="text-white">Automation</h6>
                              <p className="small mb-0" style={{ color: '#8b9dc3' }}>DevOps, Python, Ansible</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'certifications' && (
                      <div className="fade-in">
                        <h4 className="text-white mb-3">Professional Credentials</h4>
                        <div className="d-flex flex-wrap justify-content-center">
                          {certifications.map((cert, idx) => (
                            <div key={idx} className="m-2">
                              <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: 'rgba(240,139,10,0.2)', border: '1px solid #f08b0a', color: '#f08b0a' }}>
                                <FaAward className="me-1" /> {cert}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'philosophy' && (
                      <div className="fade-in">
                        <h4 className="text-white mb-3">Leadership Philosophy</h4>
                        <div className="position-relative">
                          <FaQuoteLeft className="position-absolute" style={{ fontSize: '3rem', color: 'rgba(240,139,10,0.2)', top: '-10px', left: '-10px' }} />
                          <div className="ps-4 pt-3">
                            {founderQuotes.map((quote, idx) => (
                              <p key={idx} className="text-white mb-3 fst-italic">"{quote}"</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Stats Row */}
                  <div className="row mt-5 pt-4 border-top border-secondary">
                    <div className="col-4 text-center">
                      <h2 className="fw-bold mb-0" style={{ color: '#f08b0a' }}>17+</h2>
                      <p className="small mb-0 text-white">Years Experience</p>
                    </div>
                    <div className="col-4 text-center">
                      <h2 className="fw-bold mb-0" style={{ color: '#f08b0a' }}>50+</h2>
                      <p className="small mb-0 text-white">Countries Served</p>
                    </div>
                    <div className="col-4 text-center">
                      <h2 className="fw-bold mb-0" style={{ color: '#f08b0a' }}>€1M+</h2>
                      <p className="small mb-0 text-white">Cost Savings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFonderSection;