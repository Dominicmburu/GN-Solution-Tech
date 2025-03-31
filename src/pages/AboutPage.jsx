import React from 'react';
import { FaChartLine, FaLightbulb, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';
import PageBanner from '../components/common/PageBanner';
import georgeProfile from '../components/common/profileData.json';
import TeamMember from '../components/about/TeamMember';
import '../assets/css/AboutPage.css';

const AboutPage = () => {
  const companyValues = [
    {
      icon: <FaLightbulb className="text-info" size={36} />,
      title: "Innovation",
      description: "We constantly explore cutting-edge technologies and methodologies to deliver forward-thinking solutions."
    },
    {
      icon: <FaShieldAlt className="text-info" size={36} />,
      title: "Security",
      description: "We implement military-grade security protocols to protect our clients' digital assets and data."
    },
    {
      icon: <FaChartLine className="text-info" size={36} />,
      title: "Efficiency",
      description: "We optimize IT infrastructure and processes to maximize operational efficiency and ROI."
    },
    {
      icon: <FaSyncAlt className="text-info" size={36} />,
      title: "Adaptability",
      description: "We rapidly adapt to evolving technologies and business requirements to keep our clients ahead."
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: "John Murphy",
      position: "Founder & CEO",
      image: "https://i.pinimg.com/736x/34/df/e8/34dfe8242ca6d0b663de5d4098d39f47.jpg",
      description: "With over 15 years in IT infrastructure and automation, John founded GN Solutions to bridge the gap between traditional IT and next-gen technologies."
    },
    {
      name: "Emma O'Connor",
      position: "CTO",
      image: "https://i.pinimg.com/736x/96/e4/be/96e4bec69e84da35f11007ed9f0e48e7.jpg",
      description: "Emma leads our technical strategy, focusing on cloud-native architectures and advanced automation solutions."
    },
    {
      name: "Michael Chen",
      position: "Cybersecurity Director",
      image: "https://i.pinimg.com/736x/bc/79/d4/bc79d498869b2ccc0c094ae81781a702.jpg",
      description: "Michael brings expertise in enterprise security frameworks and compliance from his background in financial services."
    }
  ];

  // Timeline milestones
  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "GN Solutions was established in Dublin, Ireland with a mission to modernize IT services."
    },
    {
      year: "2023",
      title: "First Enterprise Client",
      description: "Successfully implemented automation solutions for a major financial institution, reducing operational costs by 35%."
    },
    {
      year: "2024",
      title: "Service Expansion",
      description: "Expanded service offerings to include comprehensive cybersecurity and cloud migration solutions."
    },
    {
      year: "2025",
      title: "International Growth",
      description: "Opened new offices in Europe and established partnerships with leading technology providers."
    }
  ];

  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Transforming Business Through Technology"
        background="#0a1033"
        currentpage="About Us"
      />

      {/* Company Story Section */}

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative">
                <img
                  src="https://i.pinimg.com/736x/d1/c6/f4/d1c6f4df8380dbbfd15270de804bc882.jpg"
                  alt="GN Solutions Office"
                  className="img-fluid rounded shadow"
                  style={{ borderRadius: '12px', transform: 'rotate(-2deg)' }}
                />
                <div
                  className="circle-founder-intro position-absolute bg-info text-white rounded-circle shadow-lg d-flex justify-content-center align-items-center"
                  
                >
                  <div className="text-center">
                    <h4 className="mb-0 fw-bold">2022</h4>
                    <small>Founded</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="mb-4">
                <span className="badge bg-info text-white p-2 mb-3">Our Journey</span>
                <h2 className="fw-bold display-5 mb-4" style={{ color: '#0a1033' }}>
                  Our Story
                </h2>
              </div>
              <p className="lead mb-4" style={{ color: '#455880' }}>
                Founded in 2022 in Ireland, GN Solutions was created to bridge the gap between traditional IT services and next-generation automation and cloud technologies.
              </p>
              <p className="mb-4" style={{ color: '#455880' }}>
                We identified a critical need in the market: businesses were struggling to modernize their IT infrastructure while maintaining security and operational efficiency. Our founders combined their expertise in network automation, cloud architecture, and cybersecurity to create a comprehensive solution.
              </p>
              <p style={{ color: '#455880' }}>
                Since our inception, we've helped organizations across industries transform their digital infrastructure, implementing cutting-edge automation solutions that drive efficiency, security, and innovation.
              </p>
              {/* <div className="mt-4">
                <a href="#services" className="btn btn-info text-white px-4 py-2 me-2">
                  Our Services
                </a>
                <a href="#contact" className="btn btn-outline-secondary px-4 py-2">
                  Contact Us
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Diagonal Design */}
      <section className="py-5 position-relative" style={{ backgroundColor: "#f8f9fa", overflow: "hidden" }}>
        <div className="diagonal-bg position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(135deg, rgba(6, 26, 138, 0.07) 25%, transparent 25%)" }}></div>
        <div className="container position-relative">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4" style={{ color: "#0a1033" }}>Our Mission & Vision</h2>
              <div className="d-flex justify-content-center mb-4">
                <div style={{ width: "80px", height: "4px", backgroundColor: "#00e8ff" }}></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-info rounded-circle p-3 me-3">
                      <i className="fas fa-rocket text-white"></i>
                    </div>
                    <h3 className="fw-bold m-0" style={{ color: "#0a1033" }}>Mission</h3>
                  </div>
                  <p className="card-text">To empower businesses through innovative automation, robust security measures, and optimized IT infrastructure that drives growth and operational excellence.</p>
                  <p className="card-text">We're committed to delivering solutions that not only solve today's challenges but prepare our clients for tomorrow's opportunities.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-info rounded-circle p-3 me-3">
                      <i className="fas fa-eye text-white"></i>
                    </div>
                    <h3 className="fw-bold m-0" style={{ color: "#0a1033" }}>Vision</h3>
                  </div>
                  <p className="card-text">To become the leading provider of integrated IT solutions that seamlessly blend automation, security, and infrastructure optimization.</p>
                  <p className="card-text">We envision a future where businesses can harness the full potential of digital technologies without complexity, risk, or excessive costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3" style={{ color: "#0a1033" }}>Our Core Values</h2>
              <p className="text-muted">The principles that guide our work and relationships</p>
            </div>
          </div>
          <div className="row">
            {companyValues.map((value, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card border-0 h-100 text-center shadow-sm hover-card">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {value.icon}
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: "#0a1033" }}>{value.title}</h4>
                    <p className="card-text text-muted">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Timeline Section */}
      <section className="py-5" style={{ backgroundColor: "#0a1033" }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4 text-white">Our Growth Journey</h2>
              <div className="d-flex justify-content-center mb-4">
                <div style={{ width: "80px", height: "4px", backgroundColor: "#00e8ff" }}></div>
              </div>
            </div>
          </div>

          <div className="timeline position-relative">
            {/* Timeline center line */}
            <div className="growth-timeline position-absolute"></div>

            {milestones.map((milestone, index) => (
              <div className={`row timeline-item mb-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={index}>
                <div className="col-md-6">
                  <div className={`timeline-content p-4 rounded-3 shadow bg-white ${index % 2 === 0 ? 'ms-auto me-4' : 'me-auto ms-4'}`}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-info text-white rounded-circle p-2 me-3 fw-bold" style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {milestone.year}
                      </div>
                      <h4 className="fw-bold mb-0" style={{ color: "#0a1033" }}>{milestone.title}</h4>
                    </div>
                    <p className="mb-0 text-muted">{milestone.description}</p>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 teamMembers">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3" style={{ color: "#000" }}>Meet Our Leadership</h2>
              <p className="" style={{ color: "#00e8ff" }}>The experts behind GN Solutions' innovative approach</p>
            </div>
          </div>
          <div className="row">
            <TeamMember profileData={georgeProfile} />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5" style={{ background: "linear-gradient(90deg,rgb(10, 16, 51) 10%, rgb(23, 33, 95) 100%)" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 text-center text-white">
              <h2 className="fw-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="lead mb-4">Partner with GN Solutions and harness the power of automation, security, and optimization.</p>
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

export default AboutPage;