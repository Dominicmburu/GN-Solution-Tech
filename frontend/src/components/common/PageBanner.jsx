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
    backgroundColor: background || "var(--tt-color)",
    padding: "120px 0 80px",
    position: "relative",
    overflow: "hidden",
    minHeight: "650px",
    maxwidth: "100%",
    ...(backgroundImage && {
      backgroundImage: `linear-gradient(rgba(10, 16, 51, 0.4), rgba(10, 16, 51, 0.3)), url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    })
  };

  return (
    <section
      className="page-banner position-relative d-flex align-items-center"
      style={bannerStyle}
    >
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ overflow: "hidden", zIndex: 1 }}>
        <div className="position-absolute d-none d-md-block" style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(0, 232, 255, 0.2)",
          right: "-150px",
          top: "-150px",
          animation: "pulse 8s infinite alternate"
        }}></div>
        <div className="position-absolute d-none d-lg-block" style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(0, 232, 255, 0.1)",
          right: "-250px",
          top: "-250px",
          animation: "pulse 12s infinite alternate"
        }}></div>

        <div className="position-absolute d-md-none" style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          border: "1px solid rgba(0, 232, 255, 0.3)",
          right: "-75px",
          top: "-75px",
          animation: "pulse 6s infinite alternate"
        }}></div>

        <div className="position-absolute d-none d-lg-block" style={{
          width: "400px",
          height: "400px",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.7,
          backgroundImage: "url('/api/placeholder/400/400')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}></div>

        <div className="position-absolute d-none d-md-block d-lg-none" style={{
          width: "250px",
          height: "250px",
          right: "2%",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.5,
          backgroundImage: "url('/api/placeholder/250/250')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}></div>

        <div className="position-absolute d-md-none" style={{
          width: "120px",
          height: "120px",
          right: "5%",
          bottom: "10%",
          opacity: 0.4,
          backgroundImage: "url('/api/placeholder/120/120')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}></div>

        {particles.slice(0, window.innerWidth < 768 ? 8 : 15).map(particle => (
          <div
            key={particle.id}
            className="position-absolute rounded-circle"
            style={{
              width: `${window.innerWidth < 768 ? particle.size * 0.7 : particle.size}px`,
              height: `${window.innerWidth < 768 ? particle.size * 0.7 : particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              backgroundColor: "rgba(0, 232, 255, 0.3)",
              opacity: particle.opacity,
              animation: `float ${particle.animationDuration}s infinite alternate ease-in-out`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}

        <div
          className="position-absolute d-none d-md-block"
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

        <div
          className="position-absolute d-md-none"
          style={{
            width: "120%",
            height: "1px",
            backgroundColor: "rgba(0, 232, 255, 0.3)",
            top: "25%",
            left: "-10%",
            transform: "rotate(20deg)",
            animation: "glow 6s infinite alternate"
          }}
        />

        <div
          className="position-absolute d-none d-lg-block"
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

        <div
          className="position-absolute d-lg-none"
          style={{
            width: "100px",
            height: "100px",
            bottom: "5%",
            left: "5%",
            backgroundImage: "url('/api/placeholder/100/100')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.3,
            animation: "pulse 8s infinite alternate"
          }}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-7 col-md-8 col-12">
            <div className="banner-content">
              <h1 className="text-white fw-bold mb-3" style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.2"
              }}>
                {title}
              </h1>
              {subtitle && (
                <p className="text-white-50 mb-4" style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  lineHeight: "1.6"
                }}>
                  {subtitle}
                </p>
              )}

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{
                  backgroundColor: "transparent",
                  padding: 0,
                  margin: 0
                }}>
                  <li className="breadcrumb-item">
                    <Link 
                      to="/" 
                      style={{color: "var(--primary-color)"}} 
                      className="text-decoration-none"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item text-white" aria-current="page">
                    <span style={{
                      fontSize: "clamp(0.875rem, 2vw, 1rem)"
                    }}>
                      {currentpage}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for better responsive behavior */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes glow {
          0% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.1;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 767px) {
          .page-banner {
            padding: 80px 0 60px !important;
            min-height: 400px !important;
          }
          
          .banner-content {
            text-align: center;
          }
          
          .breadcrumb {
            justify-content: center;
          }
        }

        @media (max-width: 575px) {
          .page-banner {
            padding: 60px 0 40px !important;
            min-height: 350px !important;
          }
        }

        /* Ensure background image covers properly on all devices */
        .page-banner {
          background-attachment: scroll !important;
        }

        @media (min-width: 1200px) {
          .page-banner {
            background-attachment: fixed;
          }
        }
      `}</style>
    </section>
  );
};

export default PageBanner;