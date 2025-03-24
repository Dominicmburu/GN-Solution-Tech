import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const TeamMember = ({ name, position, image, description }) => {
  return (
    <div className="card border-0 h-100 shadow-sm team-card">
      <div className="position-relative">
        <img src={image} alt={name} className="card-img-top" />
        <div className="team-social position-absolute bottom-0 start-0 w-100 d-flex justify-content-center pb-3">
          <ul className="list-unstyled d-flex mb-0">
            <li className="mx-1">
              <a href="#" className="btn btn-sm btn-info rounded-circle">
                <FaLinkedin className="text-white" />
              </a>
            </li>
            <li className="mx-1">
              <a href="#" className="btn btn-sm btn-info rounded-circle">
                <FaTwitter className="text-white" />
              </a>
            </li>
            <li className="mx-1">
              <a href="#" className="btn btn-sm btn-info rounded-circle">
                <FaEnvelope className="text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body p-4">
        <h5 className="card-title fw-bold mb-1" style={{color: "#0a1033"}}>{name}</h5>
        <p className="text-info mb-3">{position}</p>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;