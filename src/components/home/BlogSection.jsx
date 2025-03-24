import React from 'react';
import SectionTitle from './SectionTitle';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const blogs = [
    {
      image: '/api/placeholder/400/250',
      author: {
        avatar: '/api/placeholder/30/30',
        name: 'Techtlk'
      },
      date: 'Jan 29, 2025',
      title: 'Blockchain Beyond Crypto IT Applications Industries',
      excerpt: 'We specialize in helping individuals and families regain control of their financial...'
    },
    {
      image: '/api/placeholder/400/250',
      author: {
        avatar: '/api/placeholder/30/30',
        name: 'Techtlk'
      },
      date: 'Jan 29, 2025',
      title: 'How Cloud Computing Revol IT Infrastructure',
      excerpt: 'We specialize in helping individuals and families regain control of their financial...'
    },
    {
      image: '/api/placeholder/400/250',
      author: {
        avatar: '/api/placeholder/30/30',
        name: 'Techtlk'
      },
      date: 'Jan 29, 2025',
      title: 'Cybersecurity Best Practices Protect Business',
      excerpt: 'We specialize in helping individuals and families regain control of their financial...'
    }
  ];

  return (
    <section className="blog-section py-5">
      <div className="container">
        <SectionTitle 
          subtitle="Tech Insights"
          title="Latest news and articles"
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