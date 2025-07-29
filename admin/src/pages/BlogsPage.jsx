import React, { useState, useEffect } from 'react';

const BlogsPage = () => {
  const [currentView, setCurrentView] = useState('list'); // list, create, edit
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Understanding Enterprise Network Security',
      excerpt: 'A comprehensive guide to implementing robust security measures for enterprise networks...',
      author: 'John Smith',
      status: 'published',
      publishDate: '2024-01-15',
      views: 1247,
      category: 'Cybersecurity',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Best Practices',
      excerpt: 'Learn how to optimize your cloud infrastructure for maximum performance and cost-efficiency...',
      author: 'Sarah Johnson',
      status: 'draft',
      publishDate: null,
      views: 0,
      category: 'Cloud Solutions',
      featured: false
    },
    {
      id: 3,
      title: 'Network Automation with SD-WAN',
      excerpt: 'Discover how SD-WAN technology can revolutionize your network management approach...',
      author: 'Mike Wilson',
      status: 'published',
      publishDate: '2024-01-10',
      views: 892,
      category: 'Network Management',
      featured: false
    }
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['Cybersecurity', 'Cloud Solutions', 'Network Management', 'IT Training', 'Infrastructure'];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || blog.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || blog.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleCreateBlog = () => {
    setSelectedBlog(null);
    setCurrentView('create');
  };

  const handleEditBlog = (blog) => {
    setSelectedBlog(blog);
    setCurrentView('edit');
  };

  const handleDeleteBlog = (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(blogs.filter(blog => blog.id !== blogId));
    }
  };

  const handleStatusChange = (blogId, newStatus) => {
    setBlogs(blogs.map(blog => 
      blog.id === blogId ? { ...blog, status: newStatus } : blog
    ));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'published':
        return <span className="badge bg-success">Published</span>;
      case 'draft':
        return <span className="badge bg-secondary">Draft</span>;
      case 'scheduled':
        return <span className="badge bg-info">Scheduled</span>;
      default:
        return <span className="badge bg-light text-dark">Unknown</span>;
    }
  };

  if (currentView === 'create' || currentView === 'edit') {
    return <BlogEditor blog={selectedBlog} onBack={() => setCurrentView('list')} />;
  }

  return (
    <div className="blogs-page">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold text-dark mb-1">Blog Management</h2>
          <p className="text-muted mb-0">Create, edit, and manage your blog posts</p>
        </div>
        <div className="col-auto">
          <button 
            className="btn btn-primary"
            onClick={handleCreateBlog}
          >
            <i className="fas fa-plus me-2"></i>
            Create New Blog
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="text-primary fs-2 fw-bold">{blogs.length}</div>
              <div className="text-muted small">Total Posts</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="text-success fs-2 fw-bold">
                {blogs.filter(b => b.status === 'published').length}
              </div>
              <div className="text-muted small">Published</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="text-warning fs-2 fw-bold">
                {blogs.filter(b => b.status === 'draft').length}
              </div>
              <div className="text-muted small">Drafts</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="text-info fs-2 fw-bold">
                {blogs.reduce((total, blog) => total + blog.views, 0)}
              </div>
              <div className="text-muted small">Total Views</div>
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
                  placeholder="Search blogs..."
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
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
            <div className="col-md-3">
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
            <div className="col-md-3">
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary">
                  <i className="fas fa-filter me-2"></i>
                  More Filters
                </button>
                <button className="btn btn-outline-success">
                  <i className="fas fa-download me-2"></i>
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white border-0 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0 fw-bold">
              Blog Posts ({filteredBlogs.length})
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
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-5">
              <div className="text-muted">
                <i className="fas fa-blog fs-1 mb-3"></i>
                <div>No blog posts found</div>
                <small>Try adjusting your search or filters</small>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col" className="border-0">Title</th>
                    <th scope="col" className="border-0">Author</th>
                    <th scope="col" className="border-0">Category</th>
                    <th scope="col" className="border-0">Status</th>
                    <th scope="col" className="border-0">Views</th>
                    <th scope="col" className="border-0">Date</th>
                    <th scope="col" className="border-0">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr key={blog.id}>
                      <td className="py-3">
                        <div className="d-flex align-items-center">
                          {blog.featured && (
                            <i className="fas fa-star text-warning me-2" title="Featured"></i>
                          )}
                          <div>
                            <div className="fw-semibold text-dark">{blog.title}</div>
                            <div className="text-muted small">{blog.excerpt}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">{blog.author}</td>
                      <td className="py-3">
                        <span className="badge bg-light text-dark">{blog.category}</span>
                      </td>
                      <td className="py-3">{getStatusBadge(blog.status)}</td>
                      <td className="py-3">{blog.views.toLocaleString()}</td>
                      <td className="py-3">
                        {blog.publishDate ? new Date(blog.publishDate).toLocaleDateString() : '-'}
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
                                onClick={() => handleEditBlog(blog)}
                              >
                                <i className="fas fa-edit me-2"></i>Edit
                              </button>
                            </li>
                            <li>
                              <button 
                                className="dropdown-item"
                                onClick={() => handleStatusChange(blog.id, 
                                  blog.status === 'published' ? 'draft' : 'published')}
                              >
                                <i className="fas fa-toggle-on me-2"></i>
                                {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                              </button>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                              <button 
                                className="dropdown-item text-danger"
                                onClick={() => handleDeleteBlog(blog.id)}
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

// Blog Editor Component
const BlogEditor = ({ blog, onBack }) => {
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || '',
    category: blog?.category || '',
    status: blog?.status || 'draft',
    featured: blog?.featured || false,
    tags: blog?.tags || '',
    publishDate: blog?.publishDate || ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    console.log('Saving blog:', formData);
    // Add save logic here
    onBack();
  };

  return (
    <div className="blog-editor">
      <div className="row mb-4">
        <div className="col">
          <button className="btn btn-outline-secondary me-3" onClick={onBack}>
            <i className="fas fa-arrow-left me-2"></i>Back to Blogs
          </button>
          <h2 className="fw-bold text-dark mb-1 d-inline">
            {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-secondary me-2">
            <i className="fas fa-eye me-2"></i>Preview
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save me-2"></i>Save Post
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Excerpt</label>
                <textarea
                  className="form-control"
                  name="excerpt"
                  rows="3"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Brief description of the blog post..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Content</label>
                <textarea
                  className="form-control"
                  name="content"
                  rows="15"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Write your blog content here..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">Publish Settings</h6>
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
                  <option value="scheduled">Scheduled</option>
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
                  <option value="IT Training">IT Training</option>
                  <option value="Infrastructure">Infrastructure</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Publish Date</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="publishDate"
                  value={formData.publishDate}
                  onChange={handleInputChange}
                />
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
                  Featured Post
                </label>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h6 className="fw-bold mb-0">SEO & Tags</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Enter tags separated by commas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;