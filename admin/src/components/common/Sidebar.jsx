import React from 'react';

const Sidebar = ({ currentPage, setCurrentPage, collapsed, user }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      badge: null
    },
    {
      id: 'blogs',
      label: 'Blog Management',
      icon: 'fas fa-blog',
      badge: '12'
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: 'fas fa-folder',
      badge: '8'
    },
    {
      id: 'contacts',
      label: 'Contact Forms',
      icon: 'fas fa-envelope',
      badge: '5'
    },
    {
      id: 'chat',
      label: 'Live Chat',
      icon: 'fas fa-comments',
      badge: '3'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'fas fa-cog',
      badge: null
    }
  ];

  const handleMenuClick = (pageId) => {
    setCurrentPage(pageId);
  };

  return (
    <aside className={`admin-sidebar bg-dark text-white ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content">
        {/* Logo */}
        <div className="sidebar-header p-3 border-bottom border-secondary">
          <div className="d-flex align-items-center">
            <div className="logo bg-primary rounded d-flex align-items-center justify-content-center me-2"
                 style={{ width: '32px', height: '32px' }}>
              <span className="text-white fw-bold">GN</span>
            </div>
            {!collapsed && (
              <div>
                <div className="fw-bold">GN Solutions</div>
                <small className="text-muted">Admin Panel</small>
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        {!collapsed && (
          <div className="user-info p-3 border-bottom border-secondary">
            <div className="d-flex align-items-center">
              <div className="avatar bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
                   style={{ width: '40px', height: '40px' }}>
                <span className="text-white fw-bold">
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
                </span>
              </div>
              <div className="flex-grow-1">
                <div className="fw-semibold small">{user?.name || 'Admin User'}</div>
                <div className="text-muted small">{user?.role || 'Administrator'}</div>
                <div className="online-status d-flex align-items-center mt-1">
                  <span className="badge bg-success rounded-circle me-1" style={{ width: '6px', height: '6px' }}></span>
                  <small className="text-success">Online</small>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="sidebar-nav mt-3">
          <ul className="nav flex-column">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link btn btn-link text-start w-100 border-0 rounded-0 px-3 py-2 d-flex align-items-center ${
                    currentPage === item.id ? 'active bg-primary text-white' : 'text-light'
                  }`}
                  onClick={() => handleMenuClick(item.id)}
                  title={collapsed ? item.label : ''}
                >
                  <i className={`${item.icon} ${collapsed ? 'text-center' : 'me-3'}`} 
                     style={{ width: collapsed ? 'auto' : '16px' }}></i>
                  {!collapsed && (
                    <>
                      <span className="flex-grow-1">{item.label}</span>
                      {item.badge && (
                        <span className="badge bg-secondary rounded-pill small">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Stats */}
        {!collapsed && (
          <div className="sidebar-footer mt-auto p-3 border-top border-secondary">
            <div className="quick-stats">
              <div className="stat-item d-flex justify-content-between align-items-center mb-2">
                <small className="text-muted">Active Users</small>
                <span className="badge bg-success">24</span>
              </div>
              <div className="stat-item d-flex justify-content-between align-items-center mb-2">
                <small className="text-muted">Pending Tasks</small>
                <span className="badge bg-warning">8</span>
              </div>
              <div className="stat-item d-flex justify-content-between align-items-center">
                <small className="text-muted">System Status</small>
                <span className="badge bg-success">Online</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .admin-sidebar {
          width: 280px;
          min-height: 100vh;
          transition: all 0.3s ease;
          position: sticky;
          top: 0;
        }
        
        .admin-sidebar.collapsed {
          width: 70px;
        }
        
        .admin-sidebar .nav-link {
          transition: all 0.2s ease;
        }
        
        .admin-sidebar .nav-link:hover:not(.active) {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .admin-sidebar .nav-link.active {
          background-color: #0d6efd !important;
        }
        
        .admin-sidebar.collapsed .sidebar-header > div > div:last-child,
        .admin-sidebar.collapsed .user-info,
        .admin-sidebar.collapsed .sidebar-footer {
          display: none;
        }
        
        .admin-sidebar.collapsed .nav-link {
          justify-content: center;
          padding-left: 0;
          padding-right: 0;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;