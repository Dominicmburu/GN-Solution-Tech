import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalContacts: 156,
    totalBlogs: 23,
    totalResources: 45,
    activeChatUsers: 8,
    pendingApprovals: 12,
    systemHealth: 98.5
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'New contact form submission', user: 'John Doe', time: '2 minutes ago', type: 'contact' },
    { id: 2, action: 'Blog post published', user: 'Admin', time: '15 minutes ago', type: 'blog' },
    { id: 3, action: 'Resource uploaded', user: 'Admin', time: '1 hour ago', type: 'resource' },
    { id: 4, action: 'Live chat started', user: 'Jane Smith', time: '2 hours ago', type: 'chat' },
    { id: 5, action: 'User registered', user: 'Mike Johnson', time: '3 hours ago', type: 'user' }
  ]);

  const [quickActions] = useState([
    { id: 'new-blog', label: 'Create New Blog', icon: 'fas fa-plus', color: 'primary' },
    { id: 'upload-resource', label: 'Upload Resource', icon: 'fas fa-upload', color: 'success' },
    { id: 'view-contacts', label: 'View Contacts', icon: 'fas fa-envelope', color: 'info' },
    { id: 'system-settings', label: 'System Settings', icon: 'fas fa-cog', color: 'secondary' }
  ]);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'contact': return 'fas fa-envelope text-primary';
      case 'blog': return 'fas fa-blog text-success';
      case 'resource': return 'fas fa-file text-info';
      case 'chat': return 'fas fa-comments text-warning';
      case 'user': return 'fas fa-user text-secondary';
      default: return 'fas fa-bell text-muted';
    }
  };

  return (
    <div className="dashboard-page">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold text-dark mb-1">Dashboard Overview</h2>
          <p className="text-muted mb-0">Welcome back! Here's what's happening with your website.</p>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">
            <i className="fas fa-download me-2"></i>
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                    <i className="fas fa-envelope text-primary fs-4"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <div className="text-muted small">Total Contacts</div>
                  <div className="fw-bold fs-2">{stats.totalContacts}</div>
                  <div className="text-success small">
                    <i className="fas fa-arrow-up me-1"></i>
                    +12% this month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="bg-success bg-opacity-10 rounded-3 p-3">
                    <i className="fas fa-blog text-success fs-4"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <div className="text-muted small">Published Blogs</div>
                  <div className="fw-bold fs-2">{stats.totalBlogs}</div>
                  <div className="text-success small">
                    <i className="fas fa-arrow-up me-1"></i>
                    +3 this week
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="bg-info bg-opacity-10 rounded-3 p-3">
                    <i className="fas fa-folder text-info fs-4"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <div className="text-muted small">Resources</div>
                  <div className="fw-bold fs-2">{stats.totalResources}</div>
                  <div className="text-info small">
                    <i className="fas fa-arrow-up me-1"></i>
                    +5 this month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="bg-warning bg-opacity-10 rounded-3 p-3">
                    <i className="fas fa-comments text-warning fs-4"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <div className="text-muted small">Active Chats</div>
                  <div className="fw-bold fs-2">{stats.activeChatUsers}</div>
                  <div className="text-warning small">
                    <i className="fas fa-users me-1"></i>
                    Currently online
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="row">
        {/* Recent Activity */}
        <div className="col-lg-8 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0 fw-bold">Recent Activity</h5>
                <button className="btn btn-outline-primary btn-sm">View All</button>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="list-group-item border-0 py-3">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                             style={{ width: '40px', height: '40px' }}>
                          <i className={getActivityIcon(activity.type)}></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="fw-semibold text-dark">{activity.action}</div>
                        <div className="text-muted small">by {activity.user}</div>
                      </div>
                      <div className="flex-shrink-0">
                        <small className="text-muted">{activity.time}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & System Health */}
        <div className="col-lg-4">
          {/* Quick Actions */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="card-title mb-0 fw-bold">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="row g-2">
                {quickActions.map((action) => (
                  <div key={action.id} className="col-6">
                    <button className={`btn btn-outline-${action.color} w-100 text-center py-3`}>
                      <i className={`${action.icon} d-block mb-2 fs-4`}></i>
                      <small className="fw-semibold">{action.label}</small>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Health */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="card-title mb-0 fw-bold">System Health</h5>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-semibold">Overall Health</span>
                    <span className="text-success fw-bold">{stats.systemHealth}%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar bg-success" 
                      style={{ width: `${stats.systemHealth}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="small">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted">Server Uptime</span>
                  <span className="badge bg-success">99.9%</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted">Database Status</span>
                  <span className="badge bg-success">Healthy</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted">Storage Usage</span>
                  <span className="badge bg-warning">72%</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">Pending Tasks</span>
                  <span className="badge bg-info">{stats.pendingApprovals}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats Row */}
      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                   style={{ width: '60px', height: '60px' }}>
                <i className="fas fa-chart-line text-primary fs-3"></i>
              </div>
              <h6 className="fw-bold">Website Traffic</h6>
              <div className="fw-bold fs-4 text-primary">2,547</div>
              <small className="text-muted">visitors this week</small>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                   style={{ width: '60px', height: '60px' }}>
                <i className="fas fa-handshake text-success fs-3"></i>
              </div>
              <h6 className="fw-bold">New Leads</h6>
              <div className="fw-bold fs-4 text-success">34</div>
              <small className="text-muted">potential clients</small>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                   style={{ width: '60px', height: '60px' }}>
                <i className="fas fa-star text-info fs-3"></i>
              </div>
              <h6 className="fw-bold">Client Satisfaction</h6>
              <div className="fw-bold fs-4 text-info">4.8/5</div>
              <small className="text-muted">average rating</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;