import React, { useState } from 'react';

const Header = ({ user, onLogout, onToggleSidebar, sidebarCollapsed }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications] = useState([
    { id: 1, message: 'New contact form submission', time: '5 min ago', unread: true },
    { id: 2, message: 'New blog comment', time: '15 min ago', unread: true },
    { id: 3, message: 'System backup completed', time: '1 hour ago', unread: false }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="admin-header bg-white border-bottom shadow-sm">
      <div className="container-fluid">
        <div className="row align-items-center py-2">
          <div className="col-auto">
            <button 
              className="btn btn-outline-secondary btn-sm me-3"
              onClick={onToggleSidebar}
              title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              <i className={`fas ${sidebarCollapsed ? 'fa-bars' : 'fa-times'}`}></i>
            </button>
          </div>
          
          <div className="col">
            <h4 className="mb-0 text-dark fw-semibold">
              GN Solutions Admin Dashboard
            </h4>
          </div>

          <div className="col-auto">
            <div className="d-flex align-items-center gap-3">
              {/* Search */}
              <div className="search-box position-relative d-none d-md-block">
                <input 
                  type="text" 
                  className="form-control form-control-sm ps-5" 
                  placeholder="Search..."
                  style={{ width: '250px' }}
                />
                <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
              </div>

              {/* Notifications */}
              <div className="dropdown">
                <button 
                  className="btn btn-outline-secondary btn-sm position-relative"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-bell"></i>
                  {unreadCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {unreadCount}
                    </span>
                  )}
                </button>
                <div className="dropdown-menu dropdown-menu-end" style={{ width: '300px' }}>
                  <div className="dropdown-header d-flex justify-content-between align-items-center">
                    <span>Notifications</span>
                    <small className="text-muted">{unreadCount} unread</small>
                  </div>
                  <div className="dropdown-divider"></div>
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`dropdown-item py-2 ${notification.unread ? 'bg-light' : ''}`}
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div className="fw-semibold small">{notification.message}</div>
                          <small className="text-muted">{notification.time}</small>
                        </div>
                        {notification.unread && (
                          <div className="flex-shrink-0">
                            <span className="badge bg-primary rounded-circle" style={{ width: '8px', height: '8px' }}></span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item text-center small">View all notifications</a>
                </div>
              </div>

              {/* User Menu */}
              <div className="dropdown">
                <button 
                  className="btn btn-link text-decoration-none d-flex align-items-center p-0"
                  data-bs-toggle="dropdown"
                >
                  <div className="d-flex align-items-center">
                    <div className="avatar bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" 
                         style={{ width: '32px', height: '32px' }}>
                      <span className="text-white fw-bold">
                        {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                      </span>
                    </div>
                    <div className="d-none d-sm-block text-start">
                      <div className="fw-semibold text-dark small">{user?.name || 'Admin User'}</div>
                      <div className="text-muted small">{user?.role || 'Administrator'}</div>
                    </div>
                    <i className="fas fa-chevron-down ms-2 text-muted small"></i>
                  </div>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="dropdown-header">
                    <div className="fw-semibold">{user?.name || 'Admin User'}</div>
                    <small className="text-muted">{user?.email || 'admin@gnsolutions.eu'}</small>
                  </div>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-user me-2"></i>Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-cog me-2"></i>Settings
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-question-circle me-2"></i>Help
                  </a>
                  <div className="dropdown-divider"></div>
                  <button 
                    className="dropdown-item text-danger"
                    onClick={onLogout}
                  >
                    <i className="fas fa-sign-out-alt me-2"></i>Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;