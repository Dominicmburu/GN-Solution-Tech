import React from 'react';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';
import '../../assets/css/TestimonialsSection.css'; 

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: 'https://i.pinimg.com/736x/66/c1/df/66c1df254bc06478550b7c9c90a03fc2.jpg',
      text: 'GN Solutions transformed our network infrastructure with their automation expertise. Their Network-as-Code implementation reduced deployment time by 60% across our European branches.',
      name: 'Liam O\'Connor',
      role: 'CTO, Financial Services Group'
    },
    {
      image: 'https://i.pinimg.com/736x/c3/b4/06/c3b40603d1f5206d69b4f935860694e5.jpg',
      text: 'The cybersecurity framework implementation exceeded our expectations. GN Solutions helped us achieve ISO 27001 compliance while maintaining operational continuity during migration.',
      name: 'Sophie Müller',
      role: 'Head of IT, Manufacturing Enterprise'
    },
    {
      image: 'https://i.pinimg.com/736x/f5/c5/5c/f5c55cbad76af7facba04670b8466625.jpg',
      text: 'Their cloud containerization strategy enabled seamless scaling of our e-commerce platform. The 24/7 smart hands support has been invaluable for our operations.',
      name: 'Andrej Kovac',
      role: 'CIO, Retail Corporation'
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <SectionTitle 
          subtitle="Client Success"
          title={<span style={{ color: '#594099' }}>"Enterprise Transformations We've Enabled" </span>}
          centered={true}
        />
        
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 mb-4 mb-lg-0">
              <div className={`testimonial-card-wrapper ${index === 1 ? 'testimonial-card-featured' : ''}`}>
                <TestimonialCard 
                  image={testimonial.image}
                  text={testimonial.text}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;