import React from 'react';

const PageBanner = ({ title, subtitle, background, currentpage }) => {
  return (
    <section 
      className="page-banner position-relative d-flex align-items-center"
      style={{ 
        backgroundColor: background || "#0a1033", 
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated background elements */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ overflow: "hidden" }}>
        <div className="position-absolute" style={{ 
          width: "300px", 
          height: "300px", 
          borderRadius: "50%", 
          border: "1px solid rgba(0, 232, 255, 0.2)", 
          right: "-150px", 
          top: "-150px"
        }}></div>
        <div className="position-absolute" style={{ 
          width: "500px", 
          height: "500px", 
          borderRadius: "50%", 
          border: "1px solid rgba(0, 232, 255, 0.1)", 
          right: "-250px", 
          top: "-250px"
        }}></div>
        
        {/* Digital particles effect */}
        <div className="position-absolute end-0 top-50 translate-middle-y" style={{ 
          width: "400px", 
          height: "400px",
          opacity: 0.7,
          backgroundImage: "url('/api/placeholder/400/400')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}></div>
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
                  <li className="breadcrumb-item"><a href="/" className="text-info text-decoration-none">Home</a></li>
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