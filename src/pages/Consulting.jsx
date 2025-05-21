import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { 
  FaChalkboardTeacher, 
  FaProjectDiagram, 
  FaSearchDollar, 
  FaCloudUploadAlt, 
  FaChartLine, 
  FaUserTie,
  FaClipboardCheck,
  FaLightbulb,
  FaCertificate,
  FaQuoteLeft
} from "react-icons/fa";

// Hero background image - update path as needed
import backgroundImage from "../assets/Consulting.jpeg";

// Define color scheme (equivalent to :root variables)
const colors = {
  primaryColor: "#f08b0a",
  ttColor: "#301934",
  founderColor: "#1e0f20",
  ctColor: "#000000",
  cardColor: "#F2F2F2",
  mutedColor: "rgba(0, 0, 0, 0.6)",
  white: "#ffffff",
};

// Styled components
const HeroSection = styled(motion.div)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage}) center/cover no-repeat;
  padding: 120px 20px;
  color: ${colors.white};
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  background: transparent;
  color: ${colors.primaryColor};
  position: relative;
  z-index: 10;
`;

const LeadText = styled(motion.p)`
  font-size: 1.25rem;
  margin: 1rem 0 1.5rem;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const PrimaryButton = styled(Link)`
  background-color: ${colors.primaryColor};
  border-color: ${colors.primaryColor};
  color: ${colors.white};
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  &:hover {
    background-color: #d07a09;
    border-color: #d07a09;
  }
`;

const OutlineButton = styled.a`
  border: 1px solid ${colors.ttColor};
  color: ${colors.ttColor};
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  &:hover {
    background-color: ${colors.ttColor};
    color: ${colors.white};
  }
`;

const Section = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
`;

const CardSection = styled.div`
  background-color: ${colors.cardColor};
  padding: 3rem 0;
`;

const FounderSection = styled.div`
  background-color: ${colors.founderColor};
  padding: 3rem 0;
  color: ${colors.white};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  flex: ${props => props.size ? `0 0 ${props.size}%` : "1"};
  padding: 0 15px;
  ${props => props.offset && `margin-left: ${props.offset}%`};
`;

const Heading2 = styled(motion.h2)`
  text-align: center;
  margin-bottom: 2rem;
`;

const Badge = styled.span`
  background-color: ${colors.cardColor};
  color: ${colors.ctColor};
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 0.25rem;
`;

const Card = styled.div`
  background-color: ${colors.white};
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
`;

const NavButton = styled.button`
  color: ${colors.ctColor};
  background-color: ${colors.cardColor};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  &.active {
    background-color: ${colors.primaryColor};
    color: ${colors.white};
  }
`;

const TextPrimary = styled.span`
  color: ${colors.primaryColor};
`;

const TextMuted = styled.p`
  color: ${colors.mutedColor};
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background-color: ${colors.cardColor};
`;

const TimelineStep = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.primaryColor};
  color: ${colors.white};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChallengeCard = styled.div`
  background-color: rgba(30, 15, 32, 0.5);
  padding: 1.5rem;
  border-radius: 0.25rem;
  height: 100%;
  text-align: center;
`;

// IT Consulting services with detailed information
const consultingServices = [
  {
    id: "it-project-management",
    title: "IT Project Management",
    icon: <FaProjectDiagram size={40} />,
    shortDescription: "PRINCE2-certified project management for IT infrastructure and network deployments.",
    fullDescription: "Our IT Project Management service delivers expert leadership for complex IT initiatives. With certified PRINCE2 and PMP project managers, we provide structured oversight from planning to delivery, ensuring your IT projects are completed on time, within budget, and meeting all business requirements.",
    benefits: [
      "Reduce project delivery timelines by up to 30%",
      "Maintain strict budget control with transparent reporting",
      "Minimize risk through structured governance frameworks",
      "Ensure consistent communication across all stakeholders"
    ],
    technologies: ["PRINCE2", "PMP", "Agile", "Scrum", "MS Project", "Jira", "Risk Management"],
    caseStudy: {
      title: "Multi-Site Network Deployment",
      description: "We managed a complex network deployment across 30 locations for a manufacturing company, delivering the project three weeks ahead of schedule while maintaining 99.9% uptime during transition."
    }
  },
  {
    id: "technology-transitions",
    title: "Technology Transitions & Transformation",
    icon: <FaCloudUploadAlt size={40} />,
    shortDescription: "Strategic guidance for cloud migration, network upgrades, and digital transformation.",
    fullDescription: "Our Technology Transitions & Transformation service provides strategic direction and hands-on expertise for organizations undergoing major technology changes. We guide clients through cloud migrations, network modernization, digital transformation initiatives, and legacy system transitions with minimal disruption.",
    benefits: [
      "Develop clear, business-aligned transition roadmaps",
      "Minimize downtime during major technology shifts",
      "Reduce transformation costs through optimized planning",
      "Accelerate time-to-value for new technology investments"
    ],
    technologies: ["Cloud Migration", "Legacy Modernization", "Digital Transformation", "Hybrid IT", "Change Management"],
    caseStudy: {
      title: "Enterprise Cloud Migration",
      description: "We guided a financial services company through a full infrastructure migration to AWS, reducing their operational costs by 45% while improving system reliability and scalability."
    }
  },
  {
    id: "it-training",
    title: "IT Training",
    icon: <FaChalkboardTeacher size={40} />,
    shortDescription: "Customized training programs for networking, security, and modern IT practices.",
    fullDescription: "Our IT Training services provide targeted knowledge transfer and skills development for technical teams. We deliver customized training programs covering networking, security, cloud technologies, and modern IT practices, empowering your staff to effectively manage and optimize your technology investments.",
    benefits: [
      "Increase internal team capabilities and reduce dependency on external support",
      "Improve operational efficiency through enhanced technical knowledge",
      "Accelerate adoption of new technologies and methodologies",
      "Develop custom curriculums aligned with your specific environments"
    ],
    technologies: ["Network Operations", "Cloud Technologies", "Security Best Practices", "IT Service Management", "DevOps"],
    caseStudy: {
      title: "Security Operations Team Training",
      description: "We developed and delivered a comprehensive security operations training program for a healthcare provider, resulting in 65% faster incident response times and improved threat detection capabilities."
    }
  }
];

// Common consulting challenges and solutions
const challengesSolutions = [
  {
    challenge: "Technology Investment ROI",
    solution: "Our ROI-focused approach ensures technology investments deliver measurable business value.",
    icon: <FaSearchDollar size={30} />
  },
  {
    challenge: "Change Resistance",
    solution: "Our change management methodology ensures smooth adoption of new technologies and processes.",
    icon: <FaUserTie size={30} />
  },
  {
    challenge: "Project Overruns",
    solution: "Structured project governance with clear milestones prevents scope creep and timeline delays.",
    icon: <FaClipboardCheck size={30} />
  },
  {
    challenge: "Skills Gaps",
    solution: "Tailored knowledge transfer and training programs ensure teams can maintain new technologies.",
    icon: <FaChartLine size={30} />
  }
];

// Consulting benefits with metrics
const consultingBenefits = [
  { metric: "35%", description: "Faster project delivery" },
  { metric: "42%", description: "Cost savings achieved" },
  { metric: "90%", description: "Client satisfaction rate" },
  { metric: "65%", description: "Reduced implementation risks" }
];

// Client testimonials
const testimonials = [
  {
    text: "GN Solutions transformed our approach to IT project management. Their structured methodology and expertise helped us complete our infrastructure upgrade ahead of schedule and under budget.",
    author: "CIO, Manufacturing Enterprise"
  },
  {
    text: "The cloud migration strategy developed by their consultants saved us months of planning and prevented potential pitfalls. Their hands-on guidance was invaluable throughout the transition.",
    author: "IT Director, Financial Services"
  }
];

// Easing function: easeOutQuad
const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

// Counter component with easing effect
const Counter = ({ end, duration = 2000, startAnimation }) => {
  const [count, setCount] = useState(0);
  const endValue = parseInt(end); // Convert percentage string to number

  useEffect(() => {
    if (!startAnimation) return; // Only start animation if triggered

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
      const easedProgress = easeOutQuad(progress); // Apply easing
      const currentCount = Math.floor(easedProgress * endValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, [end, duration, startAnimation]);

  return <span>{count}%</span>;
};

const ITConsulting = () => {
  const [activeTab, setActiveTab] = useState(consultingServices[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Map service IDs to their corresponding route paths
  const serviceRoutes = {
    "it-project-management": "/services/it-project-management",
    "technology-transitions": "/services/technology-transitions",
    "it-training": "/services/it-training"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Section>
          <HeroTitle initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            IT Consulting Services
          </HeroTitle>
          <LeadText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            Expert guidance and strategic planning for your most critical IT initiatives and transformations
            by consultants with decades of enterprise experience.
          </LeadText>
          <ButtonContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
            <PrimaryButton to="/contact" style={{ padding: "0.5rem 1.5rem", fontSize: "1.25rem" }}>
              Schedule Free Consultation
            </PrimaryButton>
            <OutlineButton href="#consulting-services" style={{ padding: "0.5rem 1.5rem", fontSize: "1.25rem" }}>
              Explore Services
            </OutlineButton>
          </ButtonContainer>
        </Section>
      </HeroSection>

      {/* Expert Introduction */}
      <CardSection ref={sectionRef}>
        <Section>
          <Row>
            <Col size={50}>
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
                <h2 style={{ marginBottom: "1.5rem" }}>Industry-Leading IT Consultants</h2>
                <p style={{ fontSize: "1.25rem" }}>
                  Our consultants have managed global networks, data centers, and multi-million euro technology 
                  projects for enterprises across telecommunications, finance, and manufacturing sectors.
                </p>
                <p>
                  With over 16 years of experience leading technical transformations and complex IT initiatives,
                  our team brings practical wisdom and strategic insight to every engagement, helping you navigate
                  technology changes with confidence.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
                  {["PRINCE2", "PMP", "ITIL", "CCNP", "CISM", "AWS Solutions Architect"].map((cert, idx) => (
                    <Badge key={idx}>{cert}</Badge>
                  ))}
                </div>
              </motion.div>
            </Col>
            <Col size={50}>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
                <Row>
                  {consultingBenefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx} 
                      style={{ flex: "0 0 50%", marginBottom: "1.5rem" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2, duration: 0.5 }}
                    >
                      <Card style={{ padding: "1.5rem" }}>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                          <TextPrimary>
                            <Counter end={benefit.metric} duration={2000} startAnimation={isVisible} />
                          </TextPrimary>
                        </h2>
                        <p style={{ margin: 0 }}>{benefit.description}</p>
                      </Card>
                    </motion.div>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Section>
      </CardSection>

      {/* Consulting Services Section */}
      <Section id="consulting-services">
        <Heading2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          Our Consulting Services
        </Heading2>

        {/* Service Navigation Tabs */}
        <NavList>
          {consultingServices.map((service, index) => (
            <NavItem key={index}>
              <NavButton 
                className={activeTab === service.id ? "active" : ""}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </NavButton>
            </NavItem>
          ))}
        </NavList>

        {/* Service Content */}
        <div>
          {consultingServices.map((service, index) => (
            <motion.div 
              key={index}
              style={{ display: activeTab === service.id ? "block" : "none" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === service.id ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Row>
                <Col size={41.666667}>
                  <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    <TextPrimary>{service.icon}</TextPrimary>
                  </div>
                  <h3 style={{ marginBottom: "1rem" }}>{service.title}</h3>
                  <p style={{ fontSize: "1.25rem" }}>{service.fullDescription}</p>
                  
                  <h5 style={{ margin: "1.5rem 0 1rem" }}>Key Benefits</h5>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} style={{ marginBottom: "0.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <TextPrimary><FaLightbulb style={{ marginRight: "0.5rem" }} /></TextPrimary>
                          <span>{benefit}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <PrimaryButton to={serviceRoutes[service.id]} style={{ marginTop: "1rem" }}>
                    View Full Details
                  </PrimaryButton>
                </Col>
                
                <Col size={58.333333}>
                  <Card style={{ height: "100%" }}>
                    <div style={{ padding: "1.5rem" }}>
                      <h5 style={{ borderBottom: `1px solid ${colors.cardColor}`, paddingBottom: "1rem", marginBottom: "1rem" }}>
                        Expertise & Methodologies
                      </h5>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx}>{tech}</Badge>
                        ))}
                      </div>
                      
                      <h5 style={{ borderBottom: `1px solid ${colors.cardColor}`, paddingBottom: "1rem", marginBottom: "1rem" }}>
                        Success Story
                      </h5>
                      <h6>{service.caseStudy.title}</h6>
                      <TextMuted>{service.caseStudy.description}</TextMuted>
                    </div>
                  </Card>
                </Col>
              </Row>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Common Challenges Section */}
      <FounderSection>
        <Section>
          <Heading2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            Common Challenges We Address
          </Heading2>
          
          <Row>
            {challengesSolutions.map((item, index) => (
              <motion.div 
                key={index}
                style={{ flex: "0 0 25%", marginBottom: "1.5rem" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <ChallengeCard>
                  <div style={{ marginBottom: "1rem" }}>
                    <TextPrimary>{item.icon}</TextPrimary>
                  </div>
                  <h5><TextPrimary>{item.challenge}</TextPrimary></h5>
                  <p style={{ color: colors.white }}>{item.solution}</p>
                </ChallengeCard>
              </motion.div>
            ))}
          </Row>
        </Section>
      </FounderSection>
      
      {/* Our Consulting Approach */}
      <Section>
        <Heading2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          Our Consulting Approach
        </Heading2>
        
        <Col size={83.333333}>
          <div style={{ position: "relative" }}>
            <TimelineLine />
            
            {[
              { 
                step: 1, 
                title: "Discovery & Assessment", 
                description: "We begin by understanding your business objectives and conducting a thorough assessment of your current technologies and processes." 
              },
              { 
                step: 2, 
                title: "Strategic Planning", 
                description: "Our experts develop a customized strategic roadmap aligned with your specific business goals and technology requirements." 
              },
              { 
                step: 3, 
                title: "Solution Design", 
                description: "We design detailed solutions that address your specific challenges while leveraging best practices and industry standards." 
              },
              { 
                step: 4, 
                title: "Implementation Support", 
                description: "Our consultants provide hands-on guidance throughout implementation, ensuring successful execution of recommendations." 
              },
              { 
                step: 5, 
                title: "Knowledge Transfer", 
                description: "We ensure your team has the skills and expertise needed to maintain and optimize implemented solutions." 
              },
              { 
                step: 6,
                title: "Continuous Improvement", 
                description: "We provide ongoing support and recommendations to continuously enhance your technology environment." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                style={{ display: "flex", marginBottom: "1.5rem", position: "relative" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Col size={50} offset={index % 2 === 0 ? 0 : 50} style={index % 2 === 0 ? { textAlign: "right", paddingRight: "2rem" } : { paddingLeft: "2rem" }}>
                  <Card>
                    <div style={{ padding: "1rem" }}>
                      <h5><TextPrimary>{item.title}</TextPrimary></h5>
                      <p>{item.description}</p>
                    </div>
                  </Card>
                </Col>
                
                <TimelineStep>{item.step}</TimelineStep>
              </motion.div>
            ))}
          </div>
        </Col>
      </Section>
      
      {/* Testimonials Section */}
      <CardSection>
        <Section>
          <Heading2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            Client Success Stories
          </Heading2>
          
          <Row>
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                style={{ flex: "0 0 50%", marginBottom: "1.5rem" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.2), duration: 0.5 }}
              >
                <Card>
                  <div style={{ padding: "1.5rem" }}>
                    <FaQuoteLeft size={30} style={{ color: colors.ctColor, opacity: 0.25, marginBottom: "1rem" }} />
                    <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>{testimonial.text}</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ backgroundColor: colors.primaryColor, borderRadius: "50%", padding: "1rem", display: "inline-flex", alignItems: "center", justifyContent: "center", marginRight: "1rem" }}>
                        <FaUserTie size={20} style={{ color: colors.white }} />
                      </span>
                      <strong>{testimonial.author}</strong>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </Row>
        </Section>
      </CardSection>

      {/* Our Credentials */}
      <Section>
        <Heading2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          Our Credentials
        </Heading2>
        
        <Row>
          {[
            {
              title: "Certified Expertise",
              icon: <FaCertificate size={40} />,
              description: "Our consultants hold advanced certifications in PRINCE2, PMP, ITIL, and various technical specializations."
            },
            {
              title: "Industry Experience",
              icon: <FaUserTie size={40} />,
              description: "Over 16 years experience managing IT for telecommunications, finance, healthcare, and manufacturing sectors."
            },
            {
              title: "Project Success",
              icon: <FaChartLine size={40} />,
              description: "Successfully delivered over 50 major IT transformation projects with a 97% on-time, on-budget completion rate."
            },
            {
              title: "Global Reach",
              icon: <FaProjectDiagram size={40} />,
              description: "Implemented solutions across Europe, North America, and Asia for multinational enterprises."
            }
          ].map((credential, index) => (
            <motion.div 
              key={index}
              style={{ flex: "0 0 25%", marginBottom: "1.5rem" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card style={{ height: "100%", textAlign: "center" }}>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    <TextPrimary>{credential.icon}</TextPrimary>
                  </div>
                  <h4 style={{ fontSize: "1.25rem" }}>{credential.title}</h4>
                  <TextMuted>{credential.description}</TextMuted>
                </div>
              </Card>
            </motion.div>
          ))}
        </Row>
      </Section>

      {/* Call to Action */}
      <CardSection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
        <Section>
          <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Ready to Transform Your IT Strategy?</h3>
          <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem", textAlign: "center" }}>
            Connect with our expert consultants to discuss your challenges 
            and discover how our strategic guidance can deliver measurable business value.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <PrimaryButton to="/contact" style={{ padding: "0.75rem 2rem", fontSize: "1.25rem" }}>
              Schedule Consultation
            </PrimaryButton>
            <OutlineButton to="/services" style={{ padding: "0.75rem 2rem", fontSize: "1.25rem" }}>
              Explore All Services
            </OutlineButton>
          </div>
        </Section>
      </CardSection>
    </div>
  );
};

export default ITConsulting;