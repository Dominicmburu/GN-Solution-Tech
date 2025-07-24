import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaChartLine, FaRocket, FaShieldAlt } from 'react-icons/fa';
import PageBanner from '../components/common/PageBanner';
import '../assets/css/TestimonialsPage.css';

const TestimonialsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Industries' },
    { id: 'finance', name: 'Finance' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'retail', name: 'Retail' },
    { id: 'technology', name: 'Technology' }
  ];

  // Featured testimonial
  const featuredTestimonial = {
    id: 1,
    clientName: "Quantum Finance Group",
    industry: "finance",
    logo: "https://i.pinimg.com/736x/52/8f/cf/528fcf888642c11bd4b71e50b06b1446.jpg",
    quote: "GN Solutions transformed our IT infrastructure with their Network as Code solution, reducing deployment time by 75% and saving us €350,000 annually. Their expertise in automation has been invaluable to our digital transformation journey.",
    personName: "Sarah Johnson",
    personTitle: "CIO",
    personImage: "https://i.pinimg.com/736x/14/01/4c/14014c874623a16e3d502a53ad52e7ac.jpg",
    rating: 5,
    projectDetails: {
      title: "Enterprise Network Automation & Security Overhaul",
      description: "Quantum Finance Group needed to modernize their legacy network infrastructure while enhancing security and reducing operational costs.",
      challenges: [
        "Manual network configuration processes taking 2-3 weeks per deployment",
        "Increasing security vulnerabilities due to inconsistent configurations",
        "High operational costs with 12 full-time network engineers",
        "Difficulty scaling to support new branches and services"
      ],
      solution: "GN Solutions implemented a comprehensive Network as Code solution with automated security policies and compliance checks. The platform enabled self-service provisioning for development teams while maintaining enterprise security standards.",
      results: [
        "Reduced network deployment time from 2-3 weeks to just 3 days (75% reduction)",
        "Decreased security incidents by 68% through consistent policy enforcement",
        "Saved €350,000 annually by optimizing network engineering resources",
        "Accelerated new branch office deployment from 30 days to 7 days"
      ],
      technologies: ["Network as Code", "Automated Compliance", "Security Automation"]
    }
  };

  // Client testimonials
  const testimonials = [
    {
      id: 2,
      clientName: "MediCare Systems",
      industry: "healthcare",
      logo: "https://i.pinimg.com/736x/2b/db/c4/2bdbc45de6c282052c6905c46d6dce9a.jpg",
      quote: "The cybersecurity solution implemented by GN Solutions has been transformative for our healthcare data protection strategy. We've seen a 68% reduction in security incidents and gained full compliance with GDPR and healthcare regulations.",
      personName: "Michael Chen",
      personTitle: "Head of IT Security",
      personImage: "https://i.pinimg.com/736x/bc/79/d4/bc79d498869b2ccc0c094ae81781a702.jpg",
      rating: 5,
      projectDetails: {
        title: "Healthcare Data Security & Compliance Solution",
        description: "MediCare Systems needed a comprehensive security solution to protect sensitive patient data while ensuring regulatory compliance.",
        challenges: [
          "Rising cybersecurity threats targeting healthcare organizations",
          "Complex compliance requirements (GDPR, HIPAA, etc.)",
          "Siloed security tools creating visibility gaps",
          "Limited security staff resources"
        ],
        solution: "GN Solutions designed and implemented an integrated cybersecurity platform with automated threat detection, continuous compliance monitoring, and centralized security management.",
        results: [
          "68% reduction in security incidents within first 6 months",
          "Achieved full compliance with healthcare regulatory requirements",
          "Reduced audit preparation time by 82%",
          "Improved threat detection speed by 94%"
        ],
        technologies: ["Cybersecurity", "Compliance Automation", "Threat Intelligence"]
      }
    },
    {
      id: 3,
      clientName: "Global Manufacturing Inc.",
      industry: "manufacturing",
      logo: "https://i.pinimg.com/736x/5e/84/2e/5e842e945dafd2cad60fb07e09131047.jpg",
      quote: "GN Solutions' cloud migration and Infrastructure as Code implementation revolutionized our manufacturing systems. Production downtime has decreased by 43%, and we've cut infrastructure costs by €240,000 annually.",
      personName: "Robert Williams",
      personTitle: "VP of Operations",
      personImage: "https://i.pinimg.com/736x/9e/1a/d5/9e1ad57da5f1467b0ecb4c8e8ec49bd7.jpg",
      rating: 4.5,
      projectDetails: {
        title: "Manufacturing Infrastructure Modernization",
        description: "Global Manufacturing Inc. sought to modernize their aging manufacturing systems and reduce costly production downtime.",
        challenges: [
          "Legacy infrastructure causing frequent system outages",
          "High maintenance costs for outdated hardware",
          "Lack of scalability during peak production periods",
          "Limited visibility into system performance and issues"
        ],
        solution: "GN Solutions designed and executed a phased cloud migration with Infrastructure as Code automation, creating a scalable, resilient manufacturing technology platform with comprehensive monitoring.",
        results: [
          "Reduced production downtime by 43% in the first year",
          "Decreased infrastructure costs by €240,000 annually",
          "Improved system scalability with auto-scaling during peak periods",
          "Enhanced visibility with real-time monitoring and predictive maintenance"
        ],
        technologies: ["Infrastructure as Code", "Cloud Migration", "Monitoring Automation"]
      }
    },
    {
      id: 4,
      clientName: "TechInnovate Solutions",
      industry: "technology",
      logo: "https://i.pinimg.com/736x/46/1a/8d/461a8dbdedcdbaeeb71ffca70c606fa0.jpg",
      quote: "The DevOps transformation led by GN Solutions has been game-changing. Our deployment frequency increased by 400%, while deployment failures decreased by 75%. Their expertise in automation has given us a competitive advantage.",
      personName: "Emily Rodriguez",
      personTitle: "DevOps Director",
      personImage: "https://i.pinimg.com/736x/e6/dd/fe/e6ddfe24f1794ae3afaf1c8d49f6be3f.jpg",
      rating: 5,
      projectDetails: {
        title: "DevOps Transformation & Deployment Automation",
        description: "TechInnovate Solutions needed to accelerate their software delivery while maintaining quality and reliability.",
        challenges: [
          "Slow, manual deployment processes (2-3 deployments per month)",
          "High failure rate (30%) during production deployments",
          "Limited collaboration between development and operations teams",
          "Inability to quickly respond to market changes"
        ],
        solution: "GN Solutions implemented a comprehensive DevOps transformation with CI/CD pipelines, automated testing, and infrastructure automation using Software as Code principles.",
        results: [
          "Increased deployment frequency from 3 per month to 3 per day (400% increase)",
          "Reduced deployment failures by 75%",
          "Shortened lead time from commit to deployment from weeks to hours",
          "Improved mean time to recovery (MTTR) from days to minutes"
        ],
        technologies: ["Software as Code", "CI/CD Automation", "DevOps Transformation"]
      }
    },
    {
      id: 5,
      clientName: "EuroRetail Group",
      industry: "retail",
      logo: "/api/placeholder/150/80",
      quote: "GN Solutions helped us modernize our omnichannel retail platform. The results have been outstanding - 99.99% uptime, 65% faster page loads, and a 28% increase in online conversion rates. Their expertise in Platform as Code has transformed our business.",
      personName: "Lisa Müller",
      personTitle: "Digital Transformation Lead",
      personImage: "/api/placeholder/100/100",
      rating: 5,
      projectDetails: {
        title: "Retail Omnichannel Platform Modernization",
        description: "EuroRetail Group needed to modernize their e-commerce platform to support omnichannel retail and improve performance during peak shopping periods.",
        challenges: [
          "Performance issues during high-traffic periods (Black Friday, holidays)",
          "Limited integration between online and in-store systems",
          "High maintenance costs for legacy e-commerce platform",
          "Slow implementation of new features and updates"
        ],
        solution: "GN Solutions designed and implemented a cloud-native retail platform using Platform as Code principles, with automated scaling and continuous deployment capabilities.",
        results: [
          "Achieved 99.99% uptime, even during peak shopping periods",
          "Improved page load times by 65%, enhancing user experience",
          "Increased online conversion rates by 28% after platform modernization",
          "Reduced time-to-market for new features from months to days"
        ],
        technologies: ["Platform as Code", "Cloud-Native Architecture", "Performance Optimization"]
      }
    },
    {
      id: 6,
      clientName: "First National Bank",
      industry: "finance",
      logo: "/api/placeholder/150/80",
      quote: "The managed security service from GN Solutions has transformed our approach to cybersecurity. We've reduced incident response time by 90% and achieved a level of protection that gives our customers and regulators confidence in our digital banking platform.",
      personName: "Thomas Anderson",
      personTitle: "CISO",
      personImage: "/api/placeholder/100/100",
      rating: 4.5,
      projectDetails: {
        title: "Banking Security Operations Transformation",
        description: "First National Bank needed to enhance their security operations to protect against evolving cyber threats and meet strict financial regulatory requirements.",
        challenges: [
          "Increasing sophistication of cyber attacks targeting financial institutions",
          "Long mean time to detect (MTTD) and respond (MTTR) to security incidents",
          "Resource constraints in security operations center",
          "Complex regulatory compliance requirements"
        ],
        solution: "GN Solutions implemented a managed security service with 24/7 monitoring, automated threat detection and response, and comprehensive compliance reporting.",
        results: [
          "Reduced security incident response time by 90%",
          "Improved threat detection capabilities, identifying 35% more potential threats",
          "Achieved full compliance with financial industry security regulations",
          "Enhanced security posture score from 68/100 to 94/100"
        ],
        technologies: ["Managed Security", "Threat Intelligence", "Compliance Automation"]
      }
    }
  ];

  // Filter testimonials based on active tab
  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(item => item.industry === activeTab);

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="star-icon" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="star-icon" />);
    }
    
    return stars;
  };

  // Key metrics from all case studies
  const impactMetrics = [
    {
      metric: "75%",
      label: "Average Reduction in Deployment Time",
      icon: <FaRocket className="metric-icon" />
    },
    {
      metric: "68%",
      label: "Decrease in Security Incidents",
      icon: <FaShieldAlt className="metric-icon" />
    },
    {
      metric: "€250K+",
      label: "Average Annual Cost Savings",
      icon: <FaChartLine className="metric-icon" />
    }
  ];

  return (
    <>
      <PageBanner 
        title="Client Success Stories" 
        subtitle="Real Results from Real Businesses"
        background="#0a1033"
        currentpage="Testimonials"
      />

      {/* Impact Metrics Section */}
      <section className="impact-metrics-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            {impactMetrics.map((item, index) => (
              <div className="col-md-4 mb-4 mb-md-0" key={index}>
                <div className="impact-metric-card text-center">
                  <div className="metric-icon-wrapper mb-3">
                    {item.icon}
                  </div>
                  <h2 className="metric-value">{item.metric}</h2>
                  <p className="metric-label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="featured-case-study-section py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="section-title">Featured Client Success</h2>
              <div className="title-underline"></div>
            </div>
          </div>
          
          <div className="featured-case-study">
            <div className="row align-items-center mb-4">
              <div className="col-md-8">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={featuredTestimonial.logo} 
                    alt={featuredTestimonial.clientName} 
                    className="client-logo me-3"
                  />
                  <h3 className="client-name mb-0">{featuredTestimonial.clientName}</h3>
                </div>
                <div className="case-study-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="quote-text">{featuredTestimonial.quote}</p>
                  <div className="quote-attribution">
                    <div className="d-flex align-items-center">
                      <img 
                        src={featuredTestimonial.personImage} 
                        alt={featuredTestimonial.personName} 
                        className="testimonial-avatar" 
                      />
                      <div className="ms-3">
                        <p className="person-name mb-0">{featuredTestimonial.personName}</p>
                        <p className="person-title mb-0">{featuredTestimonial.personTitle}</p>
                        <div className="rating">
                          {renderStars(featuredTestimonial.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="key-results-card">
                  <h4 className="card-title">Key Results</h4>
                  <ul className="results-list">
                    {featuredTestimonial.projectDetails.results.map((result, index) => (
                      <li key={index} className="result-item">{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="case-study-details">
              <div className="row">
                <div className="col-12">
                  <h4 className="details-title">{featuredTestimonial.projectDetails.title}</h4>
                  <p className="details-description">{featuredTestimonial.projectDetails.description}</p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="before-card">
                    <h5 className="card-title">The Challenge</h5>
                    <ul className="challenge-list">
                      {featuredTestimonial.projectDetails.challenges.map((challenge, index) => (
                        <li key={index} className="challenge-item">{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="after-card">
                    <h5 className="card-title">Our Solution</h5>
                    <p>{featuredTestimonial.projectDetails.solution}</p>
                    <div className="tech-tags">
                      {featuredTestimonial.projectDetails.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials List */}
      <section className="testimonials-list-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">More Success Stories</h2>
              <div className="title-underline mx-auto"></div>
              <p className="section-subtitle">See how we've helped clients across different industries</p>
            </div>
          </div>
          
          {/* Industry Filters */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="industry-filters d-flex justify-content-center flex-wrap">
                {categories.map(category => (
                  <button 
                    key={category.id}
                    className={`filter-btn ${activeTab === category.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="row">
            {filteredTestimonials.map(testimonial => (
              <div className="col-lg-6 mb-4" key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <img 
                        src={testimonial.logo} 
                        alt={testimonial.clientName} 
                        className="client-logo" 
                      />
                      <div className="rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="project-title">{testimonial.projectDetails.title}</h4>
                    <div className="quote">
                      <FaQuoteLeft className="quote-icon" />
                      <p className="quote-text">{testimonial.quote}</p>
                    </div>
                    <div className="quote-attribution">
                      <div className="d-flex align-items-center">
                        <img 
                          src={testimonial.personImage} 
                          alt={testimonial.personName} 
                          className="testimonial-avatar" 
                        />
                        <div className="ms-3">
                          <p className="person-name mb-0">{testimonial.personName}</p>
                          <p className="person-title mb-0">{testimonial.personTitle}, {testimonial.clientName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="mb-2">Before</h6>
                        <p className="challenge-text">{testimonial.projectDetails.challenges[0]}</p>
                      </div>
                      <div className="col-md-6">
                        <h6 className="mb-2">After</h6>
                        <p className="result-text">{testimonial.projectDetails.results[0]}</p>
                      </div>
                    </div>
                    <button className="btn btn-outline-info view-details-btn mt-3 w-100">
                      View Full Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="client-logos-section py-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Trusted by Leading Companies</h2>
              <div className="title-underline mx-auto"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="logos-container">
                {[...testimonials, featuredTestimonial].map(testimonial => (
                  <div className="logo-item" key={testimonial.id}>
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.clientName} 
                      className="img-fluid" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5" style={{background: "linear-gradient(90deg, #0a1033 0%, #1a2563 100%)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <h2 className="mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="lead mb-4">Join our satisfied clients and experience the difference our solutions can make for your business.</p>
              <button className="btn btn-info btn-lg px-5 py-3 text-white">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;