import React, { useState } from 'react';
import {
  FaLinkedin, FaTwitter, FaEnvelope, FaGithub,
  FaCode, FaCertificate, FaTrophy, FaGraduationCap
} from 'react-icons/fa';

const TeamMember = ({ profileData }) => {
  const [activeTab, setActiveTab] = useState('skills');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div className="skills-section p-3">
            <h5 className="text-primary mb-3">
              <FaCertificate className="me-2" /> Technical Skills
            </h5>
            <div className="d-flex flex-wrap">
              {profileData.technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="badge bg-info text-white me-2 mb-2"
                  style={{
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    padding: '5px 10px'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      case 'knowledge':
        return (
          <div className="knowledge-section p-3">
            <h5 className="text-primary mb-3">
              <FaGraduationCap className="me-2" /> Education & Certifications
            </h5>
            <div className="card bg-light border-0">
              <div className="card-body">
                <h6 className="card-title">{profileData.education.degree}</h6>
                <p className="card-text text-muted">
                  {profileData.education.university}
                  <br />
                  Graduation Year: {profileData.education.graduationYear}
                </p>
                <h6 className="mt-3 text-primary">Certifications</h6>
                <ul className="list-unstyled">
                  {profileData.certifications.map((cert, index) => (
                    <li key={index} className="text-muted">
                      • {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="experience-section p-3">
            <h5 className="text-primary mb-3">
              <FaTrophy className="me-2" /> Professional Experience
            </h5>
            <div>
              {profileData.professionalExperience.map((job, index) => (
                <div key={index} className="mb-4">
                  <h6 className="text-secondary">{job.company} - {job.title}</h6>
                  <p className="text-muted">
                    <strong>Period:</strong> {job.period}
                  </p>
                  <ul className="list-unstyled">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="team-member-card rounded-3 overflow-hidden">

      <div
        className="card-header text-center position-relative p-4"
        style={{
          background: 'linear-gradient(90deg, #0a1033 0%, #3a47d5 150%)',
          color: 'white',
          clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0% 100%)'
        }}
      >
        <div className="position-relative d-inline-block">
          <img
            src="https://i.pinimg.com/736x/34/df/e8/34dfe8242ca6d0b663de5d4098d39f47.jpg"
            alt={profileData.personalInfo.name}
            className="rounded-circle mb-3 shadow-lg"
            style={{
              width: '160px',
              height: '160px',
              objectFit: 'cover',
              border: '5px solid white'
            }}
          />
          <div
            className="position-absolute bottom-0 end-0 bg-info text-white rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: '40px',
              height: '40px',
              transform: 'translate(5px, -10px)'
            }}
          >
            <FaCode />
          </div>
        </div>
        <h4 className="mt-2 mb-1">{profileData.personalInfo.name}</h4>
        <p className="text-white-50">{profileData.overview.currentRole}</p>
        <p className="text-white-50 mt-2">
          <strong>Location:</strong> {profileData.personalInfo.location}
        </p>
        <p className="text-white-50 mt-2">
          <strong>Email:</strong> <a href={`mailto:${profileData.personalInfo.email}`} className="text-white">{profileData.personalInfo.email}</a>
        </p>
        <p className="text-white-50 mt-2">
          <strong>Phone:</strong> <a href={`tel:${profileData.personalInfo.phone}`} className="text-white">{profileData.personalInfo.phone}</a>
        </p>
      </div>


      <div className="card-body">
        <div className="nav nav-pills nav-fill mb-3">
          {['skills', 'knowledge', 'experience'].map((tab) => (
            <div
              key={tab}
              className={`nav-item cursor-pointer ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              style={{
                opacity: activeTab === tab ? 1 : 0.6,
                borderBottom: activeTab === tab ? '2px solid #3490dc' : 'none'
              }}
            >
              <span className="nav-link text-capitalize">{tab}</span>
            </div>
          ))}
        </div>

        {renderTabContent()}
      </div>

      <div className="card-footer bg-light d-flex justify-content-center p-3">
        {Object.entries(profileData.socialLinks).map(([platform, link]) => {
          const icons = {
            linkedin: FaLinkedin,
            github: FaGithub
          };
          const Icon = icons[platform];
          return (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-muted"
              style={{
                transition: 'color 0.3s ease',
                color: '#3498db'
              }}
              onMouseEnter={(e) => e.target.style.color = '#2980b9'}
              onMouseLeave={(e) => e.target.style.color = '#3498db'}
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMember;
