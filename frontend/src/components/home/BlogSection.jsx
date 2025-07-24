import React from 'react';
import SectionTitle from './SectionTitle';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const blogs = [
    {
      image: 'https://i.pinimg.com/736x/70/b0/df/70b0dfe0a075b55dff046083540269f8.jpg',
      author: {
        avatar: 'https://i.pinimg.com/736x/70/b0/df/70b0dfe0a075b55dff046083540269f8.jpg',
        name: 'GN Solutions'
      },
      date: 'Mar 15, 2024',
      title: 'Implementing Network-as-Code for Enterprise Scalability',
      excerpt: 'Discover how infrastructure automation accelerates deployment while maintaining security compliance in large-scale environments.'
    },
    {
      image: 'https://i.pinimg.com/736x/ba/ef/e4/baefe4b15d9ed3c6e120eef1eb3d22d5.jpg',
      author: {
        avatar: 'https://i.pinimg.com/736x/ba/ef/e4/baefe4b15d9ed3c6e120eef1eb3d22d5.jpg',
        name: 'GN Solutions'
      },
      date: 'Feb 28, 2024',
      title: 'Secure Cloud Migration Strategies for Financial Institutions',
      excerpt: 'Best practices for containerization and data protection during cloud transitions in regulated industries.'
    },
    {
      image: 'https://i.pinimg.com/736x/04/36/41/04364177e11c9f6a0de496e89010a16d.jpg',
      author: {
        avatar: 'https://i.pinimg.com/736x/04/36/41/04364177e11c9f6a0de496e89010a16d.jpg',
        name: 'GN Solutions'
      },
      date: 'Apr 2, 2024',
      title: 'Achieving ISO 27001 Compliance with Zero-Trust Architecture',
      excerpt: 'Step-by-step guide to implementing enterprise-grade cybersecurity frameworks for government organizations.'
    }
  ];

  return (
    <section className="blog-section py-5">
      <div className="container">
        <SectionTitle 
          subtitle="IT Innovation Insights"
          title="Expert Perspectives on Digital Transformation"
          centered={true}
        />
        
        <div className="row">
          {blogs.map((blog, index) => (
            <div key={index} className="col-lg-4 mb-4 mb-lg-0">
              <BlogCard 
                image={blog.image}
                author={blog.author}
                date={blog.date}
                title={blog.title}
                excerpt={blog.excerpt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;