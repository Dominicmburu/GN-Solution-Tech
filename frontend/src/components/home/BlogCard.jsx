import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ image, author, date, title, excerpt }) => {
  return (
    <div className="blog-card border rounded overflow-hidden h-100">
      <div className="blog-image">
        <img src={image} alt={title} className="img-fluid w-100" />
      </div>
      <div className="blog-content p-4">
        <div className="d-flex align-items-center mb-3">
          <img src={author.avatar} alt={author.name} className="img-fluid rounded-circle me-2" style={{ width: "30px", height: "30px" }} />
          <span className="me-3">{author.name}</span>
          <span className="text-muted">{date}</span>
        </div>
        <h4 className="mb-3"><a href="#" className="text-decoration-none text-dark">{title}</a></h4>
        <p className="text-muted mb-3">{excerpt}</p>
        <a href="#" className="btn btn-info px-4 py-2 rounded-1">
          Read More <FaArrowRight className="ms-2" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;