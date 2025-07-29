import React from 'react';

const Footer = () => {
  return (
    <footer className="admin-footer bg-white border-top mt-auto">
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          <div className="col-md-6">
            <div className="d-flex align-items-center text-muted small">
              <span>© 2024 GN Solutions. All rights reserved.</span>
              <span className="mx-2">|</span>
              <span>Admin Dashboard v2.1.0</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-md-end align-items-center">
              <div className="d-flex align-items-center text-muted small">
                <div className="d-flex align-items-center me-4">
                  <div className="bg-success rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                  <span>System Status: Operational</span>
                </div>
                <div className="d-flex align-items-center me-4">
                  <i className="fas fa-server me-2"></i>
                  <span>Server: Online</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-clock me-2"></i>
                  <span id="current-time">{new Date().toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;