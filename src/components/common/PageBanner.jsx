import React, { useEffect, useState } from 'react';
import '../../assets/css/PageBanner.css';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, subtitle, background, backgroundImage, currentpage }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const particleCount = 15;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: 3 + Math.random() * 10,
          opacity: 0.1 + Math.random() * 0.4,
          animationDuration: 15 + Math.random() * 30,
          delay: Math.random() * 5
        });
      }

      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Determine background style based on props
  const bannerStyle = {
    backgroundColor: background || "#0a1033",
    padding: "100px 0 80px",
    position: "relative",
    overflow: "hidden",
    ...(backgroundImage && {
      backgroundImage: `linear-gradient(rgba(10, 16, 51, 0.4), rgba(10, 16, 51, 0.3)), url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      // backgroundAttachment: "fixed"
    })
  };

  return (
    <section
      className="page-banner position-relative d-flex align-items-center"
      style={bannerStyle}
    >
      {/* Animated background elements - keep existing ones */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ overflow: "hidden" }}>
        <div className="position-absolute" style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(0, 232, 255, 0.2)",
          right: "-150px",
          top: "-150px",
          animation: "pulse 8s infinite alternate"
        }}></div>
        <div className="position-absolute" style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(0, 232, 255, 0.1)",
          right: "-250px",
          top: "-250px",
          animation: "pulse 12s infinite alternate"
        }}></div>

        {/* Digital particles effect - keep existing */}
        <div className="position-absolute end-0 top-50 translate-middle-y" style={{
          width: "400px",
          height: "400px",
          opacity: 0.7,
          backgroundImage: "url('/api/placeholder/400/400')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}></div>

        {/* Added: Floating particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="position-absolute rounded-circle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              backgroundColor: "rgba(0, 232, 255, 0.3)",
              opacity: particle.opacity,
              animation: `float ${particle.animationDuration}s infinite alternate ease-in-out`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}

        {/* Added: Light beam effect */}
        <div
          className="position-absolute"
          style={{
            width: "150%",
            height: "2px",
            backgroundColor: "rgba(0, 232, 255, 0.2)",
            top: "30%",
            left: "-25%",
            transform: "rotate(30deg)",
            animation: "glow 8s infinite alternate"
          }}
        />

        {/* Added: Digital circuit lines */}
        <div
          className="position-absolute"
          style={{
            width: "200px",
            height: "200px",
            bottom: "10%",
            left: "5%",
            backgroundImage: "url('/api/placeholder/200/200')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.2,
            animation: "pulse 10s infinite alternate"
          }}
        />
      </div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-content">
              <h1 className="text-white fw-bold display-4 mb-3">{title}</h1>
              {subtitle && <p className="text-white-50 lead mb-4">{subtitle}</p>}

              {/* Breadcrumb navigation */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/" style={{color: "var(--primary-color)"}} className="text-decoration-none">Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">{currentpage}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;