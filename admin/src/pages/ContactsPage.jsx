import React, { useState, useEffect } from 'react';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      phone: '+353 89 123 4567',
      company: 'Tech Solutions Ltd',
      subject: 'Network Infrastructure Consultation',
      message: 'We are interested in upgrading our network infrastructure and would like to discuss managed network services...',
      status: 'new',
      priority: 'high',
      source: 'contact_form',
      submittedAt: '2024-01-20T10:30:00Z',
      assignedTo: null,
      tags: ['enterprise', 'consultation'],
      followUpDate: null
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      email: 'sarah.mitchell@startup.io',
      phone: '+353 87 987 6543',
      company: 'StartupCorp',
      subject: 'Cybersecurity Services',
      message: 'Looking for comprehensive cybersecurity solutions for our growing startup. Need urgent assistance...',
      status: 'in_progress',
      priority: 'urgent',
      source: 'live_chat',
      submittedAt: '2024-01-19T14:15:00Z',
      assignedTo: 'Mike Wilson',
      tags: ['cybersecurity', 'startup'],
      followUpDate: '2024-01-22T09:00:00Z'
    },
    {
      id: 3,
      name: 'David Johnson',
      email: 'david.j@enterprise.com',
      phone: '+353 86 555 1234',
      company: 'Enterprise Group',
      subject: 'Cloud Migration Support',
      message: 'We need assistance with migrating our legacy systems to cloud infrastructure...',
      status: 'responded',
      priority: 'medium',
      source: 'email',
      submittedAt: '2024-01-18T16:45:00Z',
      assignedTo: 'Sarah Johnson',
      tags: ['cloud', 'migration'],
      followUpDate: '2024-01-25T10:00:00Z'
    }
  ]);

  const [selectedContact, setSelectedContact] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterSource, setFilterSource] = useState('all');

  const statuses = [
    { value: 'new', label: 'New', color: 'primary' },
    { value: 'in_progress', label: 'In Progress', color: 'warning' },
    { value: 'responded', label: 'Responded', color: 'info' },
    { value: 'resolved', label: 'Resolved', color: 'success' },
    { value: 'closed', label: 'Closed', color: 'secondary' }
  ];

  const priorities = [
    { value: 'low', label: 'Low', color: 'secondary' },
    { value: 'medium', label: 'Medium', color: 'info' },
    { value: 'high', label: 'High', color: 'warning' },
    { value: 'urgent', label: 'Urgent', color: 'danger' }
  ];

  const sources = [
    { value: 'contact_form', label: 'Contact Form', icon: 'fas fa-wpforms' },
    { value: 'live_chat', label: 'Live Chat', icon: 'fas fa-comments' },
    { value: 'email', label: 'Email', icon: 'fas fa-envelope' },
    { value: 'phone', label: 'Phone', icon: 'fas fa-phone' }
  ];

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || contact.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || contact.priority === filterPriority;
    const matchesSource = filterSource === 'all' || contact.source === filterSource;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesSource;
  });

  const getStatusBadge = (status) => {
    const statusObj = statuses.find(s => s.value === status);
    return <span className={`badge bg-${statusObj.color}`}>{statusObj.label}</span>;
  };

  const getPriorityBadge = (priority) => {
    const priorityObj = priorities.find(p => p.value === priority);
    return <span className={`badge bg-${priorityObj.color}`}>{priorityObj.label}</span>;
  };

  const getSourceIcon = (source) => {
    const sourceObj = sources.find(s => s.value === source);
    return <i className={sourceObj.icon} title={sourceObj.label}></i>;
  };

  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setShowContactModal(true);
  };

  const handleStatusChange = (contactId, newStatus) => {
    setContacts(contacts.map(contact => 
      contact.id === contactId ? { ...contact, status: newStatus } : contact
    ));
  };

  const handleAssignContact = (contactId, assignee) => {
    setContacts(contacts.map(contact => 
      contact.id === contactId ? { ...contact, assignedTo: assignee } : contact
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString() + ' ' + 
           new Date(dateString).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  const getContactStats = () => {
    return {
      total: contacts.length,
      new: contacts.filter(c => c.status === 'new').length,
      inProgress: contacts.filter(c => c.status === 'in_progress').length,
      resolved: contacts.filter(c => c.status === 'resolved').length,
      urgent: contacts.filter(c => c.priority === 'urgent').length
    };
  };

  const stats = getContactStats();

  return (
    <div className="contacts-page">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold text-dark mb-1">Contact Management</h2>
          <p className="text-muted mb-0">Manage customer inquiries and support requests</p>
        </div>
        <div className="col-auto">
          <div className="d-flex gap-2">
            <button className="btn btn-outline-success">
              <i className="fas fa-download me-2"></i>
              Export Contacts
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-plus me-2"></i>
              Add Contact
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-primary fs-3 fw-bold">{stats.total}</div>
              <div className="text-muted small">Total Contacts</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-primary fs-3 fw-bold">{stats.new}</div>
              <div className="text-muted small">New</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-warning fs-3 fw-bold">{stats.inProgress}</div>
              <div className="text-muted small">In Progress</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-success fs-3 fw-bold">{stats.resolved}</div>
              <div className="text-muted small">Resolved</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-danger fs-3 fw-bold">{stats.urgent}</div>
              <div className="text-muted small">Urgent</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-info fs-3 fw-bold">92%</div>
              <div className="text-muted small">Response Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                {statuses.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
              >
                <option value="all">All Priority</option>
                {priorities.map(priority => (
                  <option key={priority.value} value={priority.value}>{priority.label}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={filterSource}
                onChange={(e) => setFilterSource(e.target.value)}
              >
                <option value="all">All Sources</option>
                {sources.map(source => (
                  <option key={source.value} value={source.value}>{source.label}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-outline-secondary w-100">
                <i className="fas fa-filter me-2"></i>
                Advanced
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white border-0 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0 fw-bold">
              Contacts ({filteredContacts.length})
            </h5>
            <div className="btn-group btn-group-sm">
              <button className="btn btn-outline-secondary active">
                <i className="fas fa-list"></i>
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fas fa-th"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          {filteredContacts.length === 0 ? (
            <div className="text-center py-5">
              <div className="text-muted">
                <i className="fas fa-envelope fs-1 mb-3"></i>
                <div>No contacts found</div>
                <small>Try adjusting your search or filters</small>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col" className="border-0">Contact</th>
                    <th scope="col" className="border-0">Subject</th>
                    <th scope="col" className="border-0">Status</th>
                    <th scope="col" className="border-0">Priority</th>
                    <th scope="col" className="border-0">Source</th>
                    <th scope="col" className="border-0">Assigned</th>
                    <th scope="col" className="border-0">Date</th>
                    <th scope="col" className="border-0">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.map((contact) => (
                    <tr key={contact.id}>
                      <td className="py-3">
                        <div className="d-flex align-items-center">
                          <div className="avatar bg-light rounded-circle d-flex align-items-center justify-content-center me-3"
                               style={{ width: '40px', height: '40px' }}>
                            <span className="fw-bold text-muted">
                              {contact.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="fw-semibold text-dark">{contact.name}</div>
                            <div className="text-muted small">{contact.email}</div>
                            <div className="text-muted small">{contact.company}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="fw-semibold">{contact.subject}</div>
                        <div className="text-muted small">
                          {contact.message.substring(0, 50)}...
                        </div>
                      </td>
                      <td className="py-3">{getStatusBadge(contact.status)}</td>
                      <td className="py-3">{getPriorityBadge(contact.priority)}</td>
                      <td className="py-3">
                        <div className="d-flex align-items-center">
                          {getSourceIcon(contact.source)}
                          <span className="ms-2 small">
                            {sources.find(s => s.value === contact.source)?.label}
                          </span>
                        </div>
                      </td>
                      <td className="py-3">
                        {contact.assignedTo ? (
                          <span className="badge bg-light text-dark">{contact.assignedTo}</span>
                        ) : (
                          <span className="text-muted small">Unassigned</span>
                        )}
                      </td>
                      <td className="py-3">
                        <div className="small">{formatDate(contact.submittedAt)}</div>
                      </td>
                      <td className="py-3">
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-outline-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button 
                                className="dropdown-item"
                                onClick={() => handleViewContact(contact)}
                              >
                                <i className="fas fa-eye me-2"></i>View Details
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item">
                                <i className="fas fa-reply me-2"></i>Reply
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item">
                                <i className="fas fa-user-plus me-2"></i>Assign
                              </button>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                              <button className="dropdown-item text-success">
                                <i className="fas fa-check me-2"></i>Mark Resolved
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item text-danger">
                                <i className="fas fa-archive me-2"></i>Archive
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Contact Details Modal */}
      {showContactModal && selectedContact && (
        <ContactDetailsModal 
          contact={selectedContact} 
          onClose={() => setShowContactModal(false)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

// Contact Details Modal Component
const ContactDetailsModal = ({ contact, onClose, onStatusChange }) => {
  const [newNote, setNewNote] = useState('');
  const [notes] = useState([
    { id: 1, text: 'Initial contact received via contact form', author: 'System', date: contact.submittedAt },
    { id: 2, text: 'Assigned to technical team for review', author: 'Admin', date: '2024-01-20T11:00:00Z' }
  ]);

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Contact Details</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {/* Contact Info */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h6 className="fw-bold mb-3">Contact Information</h6>
                <div className="mb-2">
                  <strong>Name:</strong> {contact.name}
                </div>
                <div className="mb-2">
                  <strong>Email:</strong> {contact.email}
                </div>
                <div className="mb-2">
                  <strong>Phone:</strong> {contact.phone}
                </div>
                <div className="mb-2">
                  <strong>Company:</strong> {contact.company}
                </div>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold mb-3">Request Details</h6>
                <div className="mb-2">
                  <strong>Subject:</strong> {contact.subject}
                </div>
                <div className="mb-2">
                  <strong>Status:</strong> 
                  <select 
                    className="form-select form-select-sm d-inline-block w-auto ms-2"
                    value={contact.status}
                    onChange={(e) => onStatusChange(contact.id, e.target.value)}
                  >
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="responded">Responded</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                <div className="mb-2">
                  <strong>Priority:</strong> 
                  <span className={`badge bg-${contact.priority === 'urgent' ? 'danger' : 'warning'} ms-2`}>
                    {contact.priority}
                  </span>
                </div>
                <div className="mb-2">
                  <strong>Submitted:</strong> {new Date(contact.submittedAt).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Message</h6>
              <div className="bg-light p-3 rounded">
                {contact.message}
              </div>
            </div>

            {/* Notes */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Notes & Activity</h6>
              <div className="mb-3">
                {notes.map(note => (
                  <div key={note.id} className="border-start border-3 border-primary ps-3 mb-3">
                    <div className="small text-muted">
                      {note.author} • {new Date(note.date).toLocaleString()}
                    </div>
                    <div>{note.text}</div>
                  </div>
                ))}
              </div>
              <div className="input-group">
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Add a note..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
                <button className="btn btn-primary">Add Note</button>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-secondary me-2">
              <i className="fas fa-envelope me-2"></i>Send Email
            </button>
            <button className="btn btn-outline-success me-2">
              <i className="fas fa-phone me-2"></i>Call Contact
            </button>
            <button className="btn btn-success">
              <i className="fas fa-check me-2"></i>Mark Resolved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;