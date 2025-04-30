import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaSearch, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import PageBanner from '../components/common/PageBanner';
import '../assets/css/BlogsPage.css';

const BlogsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'automation', name: 'Business Automation' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'networking', name: 'Networking' },
    { id: 'guides', name: 'How-to Guides' }
  ];

  const featuredBlog = {
    id: 1,
    title: "The Future of Network Automation: 5 Trends to Watch in 2025",
    excerpt: "Network as Code is revolutionizing how enterprises manage their infrastructure. Discover the key trends that will shape the future of network automation.",
    date: "March 20, 2025",
    author: "John Murphy",
    category: "automation",
    image: "https://i.pinimg.com/736x/97/e8/dd/97e8ddb09a792b66c7853a9fa8c92806.jpg",
    tags: ["Network Automation", "DevOps", "Infrastructure"]
  };

  const blogData = [
    {
      id: 2,
      title: "How Zero Trust Security Models Protect Remote Workforces",
      excerpt: "With remote work becoming the norm, zero trust security models offer robust protection against evolving cyber threats. Learn implementation strategies.",
      date: "March 15, 2025",
      author: "Emma O'Connor",
      category: "cybersecurity",
      image: "https://i.pinimg.com/736x/69/e0/0b/69e00be05f7eb68fb22adfcff784f799.jpg",
      tags: ["Cybersecurity", "Zero Trust", "Remote Work"]
    },
    {
      id: 3,
      title: "Containerization vs Virtualization: Choosing the Right Strategy",
      excerpt: "Understand the key differences between containerization and virtualization to make informed decisions for your IT infrastructure modernization.",
      date: "March 10, 2025",
      author: "Michael Chen",
      category: "cloud",
      image: "https://i.pinimg.com/736x/9a/4c/97/9a4c97ed85e1a2501d55c773d3957821.jpg",
      tags: ["Containers", "Virtualization", "Cloud Infrastructure"]
    },
    {
      id: 4,
      title: "Platform as Code: Automating Infrastructure Deployment",
      excerpt: "Discover how Platform as Code is transforming infrastructure provisioning and configuration, enabling rapid and consistent deployments.",
      date: "March 5, 2025",
      author: "Sarah Johnson",
      category: "automation",
      image: "https://i.pinimg.com/736x/ba/18/dc/ba18dc7d4153c1647acdcee893a51fdc.jpg",
      tags: ["Automation", "IaC", "DevOps"]
    },
    {
      id: 5,
      title: "Optimizing SD-WAN Deployments for Enterprise Networks",
      excerpt: "Learn how to implement and optimize SD-WAN solutions to improve network performance, reduce costs, and enhance security across distributed environments.",
      date: "February 28, 2025",
      author: "David Rodriguez",
      category: "networking",
      image: "https://i.pinimg.com/736x/c9/a2/e3/c9a2e37ce95e36aaa867f56103b299ba.jpg",
      tags: ["SD-WAN", "Networking", "Enterprise IT"]
    },
    {
      id: 6,
      title: "Step-by-Step Guide: Implementing Multi-Factor Authentication",
      excerpt: "Follow this comprehensive guide to set up multi-factor authentication across your organization's systems and applications for enhanced security.",
      date: "February 20, 2025",
      author: "Emma O'Connor",
      category: "guides",
      image: "https://i.pinimg.com/736x/8c/10/1c/8c101cd63442a03760778f2a583b8943.jpg",
      tags: ["MFA", "Security", "How-to Guide"]
    },
    {
      id: 7,
      title: "The Business Case for Cloud Migration: ROI and Beyond",
      excerpt: "Explore the financial and operational benefits of migrating to cloud infrastructure, with real-world case studies and ROI calculations.",
      date: "February 15, 2025",
      author: "John Murphy",
      category: "cloud",
      image: "https://i.pinimg.com/736x/ae/70/96/ae7096e8c42185fbc1eda6b54eefa4f8.jpg",
      tags: ["Cloud Computing", "ROI", "Digital Transformation"]
    }
  ];

  const popularTags = [
    "Automation", "Cybersecurity", "Cloud", "DevOps", 
    "Networking", "Infrastructure", "SD-WAN", "Digital Transformation"
  ];

  useEffect(() => {
    setBlogs([featuredBlog, ...blogData]);
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [blogs, activeFilter, searchTerm]);

  const filterBlogs = () => {
    let filtered = [...blogs];
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(blog => blog.category === activeFilter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredBlogs(filtered);
  };

  return (
    <>
      <PageBanner 
        title="Blogs & Knowledge Hub" 
        subtitle="Insights, Guides & Industry Expertise"
        backgroundImage={"https://i.pinimg.com/736x/d9/4e/81/d94e81de9fbff47ebf18dbbfbd0d7d95.jpg"}
        background="#0a1033"
        currentpage="Blogs"
      />

      <section className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="d-flex flex-wrap">
                {categories.map(category => (
                  <button 
                    key={category.id}
                    className={`btn btn-sm me-2 mb-2 ${activeFilter === category.id ? 'btn-info text-white' : 'btn-outline-secondary'}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn text-white" style={{backgroundColor: 'var(--primary-color)'}}>
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fw-bold section-title">Featured Article</h2>
              <div className="title-underline"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="featured-image-container">
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title} 
                  className="img-fluid rounded shadow-sm"
                />
                <div className="featured-category-badge">
                  {featuredBlog.category.charAt(0).toUpperCase() + featuredBlog.category.slice(1)}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="featured-content p-4">
                <div className="blog-meta mb-2">
                  <span className="me-3"><FaCalendarAlt className="text-info me-1" />{featuredBlog.date}</span>
                  <span><FaUser className="text-info me-1" />{featuredBlog.author}</span>
                </div>
                <h2 className="fw-bold mb-3">{featuredBlog.title}</h2>
                <p className="lead mb-4">{featuredBlog.excerpt}</p>
                <div className="mb-4">
                  {featuredBlog.tags.map((tag, index) => (
                    <span key={index} className="badge bg-light text-dark me-2 p-2">
                      <FaTag className="me-1 text-info" />{tag}
                    </span>
                  ))}
                </div>
                <Link to={`/blog/${featuredBlog.id}`} className="btn btn-info text-white px-4 read-more-btn">
                  Read Full Article <FaArrowRight className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12 mb-4">
                  <h2 className="fw-bold section-title">Latest Articles</h2>
                  <div className="title-underline"></div>
                </div>
                
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.slice(1).map(blog => (
                    <div className="col-md-6 mb-4" key={blog.id}>
                      <div className="card border-0 h-100 blog-card shadow-sm">
                        <div className="blog-image-container">
                          <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="card-img-top"
                          />
                          <div className="blog-category-badge">
                            {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="blog-meta small mb-2 text-muted">
                            <span className="me-3"><FaCalendarAlt className="text-info me-1" />{blog.date}</span>
                            <span><FaUser className="text-info me-1" />{blog.author}</span>
                          </div>
                          <h5 className="card-title fw-bold">{blog.title}</h5>
                          <p className="card-text text-muted">{blog.excerpt}</p>
                        </div>
                        <div className="card-footer bg-transparent border-0 pt-0">
                          <Link to={`/blog/${blog.id}`} className="text-info fw-bold text-decoration-none read-more-link">
                            Read More <FaChevronRight className="ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <h4>No articles found matching your criteria</h4>
                    <button 
                      className="btn btn-outline-info mt-3"
                      onClick={() => {
                        setActiveFilter('all');
                        setSearchTerm('');
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
              
              {filteredBlogs.length > 0 && (
                <div className="row mt-4">
                  <div className="col-12">
                    <nav aria-label="Blog pagination">
                      <ul className="pagination justify-content-center">
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">About Our Blog</h4>
                  <p className="text-muted">Stay informed with GN Solutions' latest insights on IT solutions, automation, cybersecurity, and digital transformation. Our experts share industry knowledge to help your business thrive.</p>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">Popular Categories</h4>
                  <ul className="list-group list-group-flush sidebar-list">
                    {categories.slice(1).map(category => (
                      <li key={category.id} className="list-group-item border-0 py-2 px-0">
                        <button 
                          className="btn btn-link text-decoration-none category-link"
                          onClick={() => setActiveFilter(category.id)}
                        >
                          <FaChevronRight className="me-2 text-info" />
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">Popular Tags</h4>
                  <div className="tags-cloud">
                    {popularTags.map((tag, index) => (
                      <button 
                        key={index} 
                        className="btn btn-sm btn-light mb-2 me-2 tag-button"
                        onClick={() => setSearchTerm(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm newsletter-card">
                <div className="card-body p-4 text-center">
                  <h4 className="fw-bold mb-3">Subscribe to Our Newsletter</h4>
                  <p className="text-muted mb-4">Get the latest articles, guides, and industry insights delivered to your inbox.</p>
                  <form>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Your Email Address" required />
                    </div>
                    <button type="submit" className="btn btn-info text-white w-100">
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section py-5" style={{background: "linear-gradient(90deg, #0a1033 0%, #1a2563 100%)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center text-white">
              <h2 className="fw-bold mb-4">Download Our Latest Whitepapers</h2>
              <p className="lead mb-4">Gain in-depth knowledge with our comprehensive whitepapers on IT automation, cybersecurity, and digital transformation.</p>
              <button className="btn btn-light btn-lg px-4">
                Explore Resources <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;