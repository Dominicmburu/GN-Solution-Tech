import React, { useState } from 'react';

const ResourcesPage = () => {
  const [resources, setResources] = useState([
    {
      id: 1,
      title: 'Network Security Best Practices Guide',
      type: 'PDF',
      category: 'Cybersecurity',
      size: '2.5 MB',
      downloads: 342,
      uploadDate: '2024-01-15',
      status: 'published',
      description: 'Comprehensive guide covering network security fundamentals and advanced protection strategies.',
      tags: ['security', 'network', 'guide'],
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Checklist',
      type: 'Excel',
      category: 'Cloud Solutions',
      size: '1.2 MB',
      downloads: 156,
      uploadDate: '2024-01-12',
      status: 'published',
      description: 'Step-by-step checklist for successful cloud migration projects.',
      tags: ['cloud', 'migration', 'checklist'],
      featured: false
    },
    {
      id: 3,
      title: 'SD-WAN Implementation Whitepaper',
      type: 'PDF',
      category: 'Network Management',
      size: '3.8 MB',
      downloads: 89,
      uploadDate: '2024-01-10',
      status: 'draft',
      description: 'Technical whitepaper on SD-WAN implementation strategies and considerations.',
      tags: ['sd-wan', 'whitepaper', 'implementation'],
      featured: false
    },
    {
      id: 4,
      title: 'IT Infrastructure Assessment Template',
      type: 'Word',
      category: 'Infrastructure',
      size: '0.8 MB',
      downloads: 234,
      uploadDate: '2024-01-08',
      status: 'published',
      description: 'Template for conducting comprehensive IT infrastructure assessments.',
      tags: ['assessment', 'infrastructure', 'template'],
      featured: true
    }
  ]);

  const [currentView, setCurrentView] = useState('list'); // list, upload, edit
  const [selectedResource, setSelectedResource] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const categories = ['Cybersecurity', 'Cloud Solutions', 'Network Management', 'Infrastructure', 'IT Training'];
  const fileTypes = ['PDF', 'Word', 'Excel', 'PowerPoint', 'Video', 'Image'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || resource.category === filterCategory;
    const matchesType = filterType === 'all' || resource.type === filterType;
    const matchesStatus = filterStatus === 'all' || resource.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesType && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'published':
        return <span className="badge bg-success">Published</span>;
      case 'draft':
        return <span className="badge bg-secondary">Draft</span>;
      case 'pending':
        return <span className="badge bg-warning">Pending</span>;
      default:
        return <span className="badge bg-light text-dark">Unknown</span>;
    }
  };

  const getFileTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <i className="fas fa-file-pdf text-danger"></i>;
      case 'word':
        return <i className="fas fa-file-word text-primary"></i>;
      case 'excel':
        return <i className="fas fa-file-excel text-success"></i>;
      case 'powerpoint':
        return <i className="fas fa-file-powerpoint text-warning"></i>;
      case 'video':
        return <i className="fas fa-file-video text-info"></i>;
      case 'image':
        return <i className="fas fa-file-image text-secondary"></i>;
      default:
        return <i className="fas fa-file text-muted"></i>;
    }
  };

  const handleUploadResource = () => {
    setSelectedResource(null);
    setCurrentView('upload');
  };

  const handleEditResource = (resource) => {
    setSelectedResource(resource);
    setCurrentView('edit');
  };

  const handleDeleteResource = (resourceId) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      setResources(resources.filter(resource => resource.id !== resourceId));
    }
  };

  const handleStatusChange = (resourceId, newStatus) => {
    setResources(resources.map(resource => 
      resource.id === resourceId ? { ...resource, status: newStatus } : resource
    ));
  };

  const getResourceStats = () => {
    return {
      total: resources.length,
      published: resources.filter(r => r.status === 'published').length,
      drafts: resources.filter(r => r.status === 'draft').length,
      totalDownloads: resources.reduce((sum, r) => sum + r.downloads, 0),
      featured: resources.filter(r => r.featured).length
    };
  };

  const stats = getResourceStats();

  if (currentView === 'upload' || currentView === 'edit') {
    return <ResourceUploadForm resource={selectedResource} onBack={() => setCurrentView('list')} />;
  }

  return (
    <div className="resources-page">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold text-dark mb-1">Resource Management</h2>
          <p className="text-muted mb-0">Upload, organize, and manage downloadable resources</p>
        </div>
        <div className="col-auto">
          <div className="d-flex gap-2">
            <button className="btn btn-outline-success">
              <i className="fas fa-download me-2"></i>
              Bulk Export
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleUploadResource}
            >
              <i className="fas fa-upload me-2"></i>
              Upload Resource
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
              <div className="text-muted small">Total Resources</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-success fs-3 fw-bold">{stats.published}</div>
              <div className="text-muted small">Published</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-warning fs-3 fw-bold">{stats.drafts}</div>
              <div className="text-muted small">Drafts</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-info fs-3 fw-bold">{stats.totalDownloads}</div>
              <div className="text-muted small">Total Downloads</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-warning fs-3 fw-bold">{stats.featured}</div>
              <div className="text-muted small">Featured</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <div className="text-secondary fs-3 fw-bold">2.1GB</div>
              <div className="text-muted small">Storage Used</div>
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
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                {fileTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
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

      {/* Resources List */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white border-0 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0 fw-bold">
              Resources ({filteredResources.length})
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
          {filteredResources.length === 0 ? (
            <div className="text-center py-5">
              <div className="text-muted">
                <i className="fas fa-folder-open fs-1 mb-3"></i>
                <div>No resources found</div>
                <small>Try adjusting your search or filters</small>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col" className="border-0">Resource</th>
                    <th scope="col" className="border-0">Type</th>
                    <th scope="col" className="border-0">Category</th>
                    <th scope="col" className="border-0">Status</th>
                    <th scope="col" className="border-0">Downloads</th>
                    <th scope="col" className="border-0">Size</th>
                    <th scope="col" className="border-0">Date</th>
                    <th scope="col" className="border-0">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResources.map((resource) => (
                    <tr key={resource.id}>
                      <td className="py-3">
                        <div className="d-flex align-items-center">
                          <div className="me-3 fs-4">
                            {getFileTypeIcon(resource.type)}
                          </div>
                          <div>
                            <div className="d-flex align-items-center">
                              <div className="fw-semibold text-dark">{resource.title}</div>
                              {resource.featured && (
                                <i className="fas fa-star text-warning ms-2" title="Featured"></i>
                              )}
                            </div>
                            <div className="text-muted small">{resource.description}</div>
                            <div className="mt-1">
                              {resource.tags.map(tag => (
                                <span key={tag} className="badge bg-light text-dark me-1 small">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <span className="badge bg-light text-dark">{resource.type}</span>
                      </td>
                      <td className="py-3">{resource.category}</td>
                      <td className="py-3">{getStatusBadge(resource.status)}</td>
                      <td className="py-3">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-download text-muted me-2"></i>
                          <span>{resource.downloads.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="py-3">{resource.size}</td>
                      <td className="py-3">
                        <div className="small">{new Date(resource.uploadDate).toLocaleDateString()}</div>
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
                              <button className="dropdown-item">
                                <i className="fas fa-download me-2"></i>Download
                              </button>
                            </li>
                            <li>
                              <button 
                                className="dropdown-item"
                                onClick={() => handleEditResource(resource)}
                              >
                                <i className="fas fa-edit me-2"></i>Edit
                              </button>
                            </li>
                            <li>
                              <button 
                                className="dropdown-item"
                                onClick={() => handleStatusChange(resource.id, 
                                  resource.status === 'published' ? 'draft' : 'published')}
                              >
                                <i className="fas fa-toggle-on me-2"></i>
                                {resource.status === 'published' ? 'Unpublish' : 'Publish'}
                              </button>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                              <button 
                                className="dropdown-item text-danger"
                                onClick={() => handleDeleteResource(resource.id)}
                              >
                                <i className="fas fa-trash me-2"></i>Delete
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
    </div>
  );
};

// Resource Upload Form Component
const ResourceUploadForm = ({ resource, onBack }) => {
  const [formData, setFormData] = useState({
    title: resource?.title || '',
    description: resource?.description || '',
    category: resource?.category || '',
    type: resource?.type || '',
    status: resource?.status || 'draft',
    featured: resource?.featured || false,
    tags: resource?.tags?.join(', ') || '',
    file: null
  });

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, file: e.dataTransfer.files[0] }));
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSave = () => {
    console.log('Saving resource:', formData);
    // Add save logic here
    onBack();
  };

  return (
    <div className="resource-upload-form">
      <div className="row mb-4">
        <div className="col">
          <button className="btn btn-outline-secondary me-3" onClick={onBack}>
            <i className="fas fa-arrow-left me-2"></i>Back to Resources
          </button>
          <h2 className="fw-bold text-dark mb-1 d-inline">
            {resource ? 'Edit Resource' : 'Upload New Resource'}
          </h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-secondary me-2">
            <i className="fas fa-eye me-2"></i>Preview
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save me-2"></i>Save Resource
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          {/* File Upload */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">File Upload</h6>
            </div>
            <div className="card-body">
              <div
                className={`border-2 border-dashed rounded p-5 text-center ${
                  dragActive ? 'border-primary bg-primary bg-opacity-10' : 'border-light'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {formData.file ? (
                  <div>
                    <i className="fas fa-file fs-2 text-success mb-3"></i>
                    <div className="fw-semibold">{formData.file.name}</div>
                    <div className="text-muted small">
                      {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                    <button 
                      className="btn btn-outline-secondary btn-sm mt-2"
                      onClick={() => setFormData(prev => ({ ...prev, file: null }))}
                    >
                      Remove File
                    </button>
                  </div>
                ) : (
                  <div>
                    <i className="fas fa-cloud-upload-alt fs-2 text-muted mb-3"></i>
                    <div className="fw-semibold mb-2">Drop files here or click to browse</div>
                    <div className="text-muted small mb-3">
                      Supported formats: PDF, DOC, XLS, PPT, MP4, JPG, PNG (Max 50MB)
                    </div>
                    <input
                      type="file"
                      className="form-control d-none"
                      id="fileInput"
                      onChange={handleFileSelect}
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.mp4,.jpg,.jpeg,.png"
                    />
                    <label htmlFor="fileInput" className="btn btn-primary">
                      <i className="fas fa-plus me-2"></i>Select File
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Resource Details */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">Resource Details</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter resource title..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the resource and its purpose..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Enter tags separated by commas..."
                />
                <div className="form-text">Use tags to make your resource more discoverable</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          {/* Publishing Options */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">Publishing Options</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="pending">Pending Review</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Category</label>
                <select
                  className="form-select"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="Network Management">Network Management</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="IT Training">IT Training</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">File Type</label>
                <select
                  className="form-select"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="">Select Type</option>
                  <option value="PDF">PDF Document</option>
                  <option value="Word">Word Document</option>
                  <option value="Excel">Excel Spreadsheet</option>
                  <option value="PowerPoint">PowerPoint Presentation</option>
                  <option value="Video">Video File</option>
                  <option value="Image">Image File</option>
                </select>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                />
                <label className="form-check-label fw-semibold">
                  Featured Resource
                </label>
                <div className="form-text">Featured resources appear prominently on the website</div>
              </div>
            </div>
          </div>

          {/* SEO Settings */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">SEO Settings</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Meta Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="SEO title for search engines..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Meta Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="SEO description for search engines..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;