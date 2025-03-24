import React from 'react';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: '/api/placeholder/60/60',
      text: 'Working with Techio has been a game-changer for our business. Their team of experts delivered a custom software solution.',
      name: 'Abdur Rashid',
      role: 'Founder & CEO'
    },
    {
      image: '/api/placeholder/60/60',
      text: 'Techio provided us with innovative solutions that transformed our operations. Their attention to detail & unique requirements set them apart.',
      name: 'Alen Walker',
      role: 'Manager'
    },
    {
      image: '/api/placeholder/60/60',
      text: 'From the initial consultation to the final delivery, Techio demonstrated professional and reliability continuing our partnership.',
      name: 'Brish Jhonson',
      role: 'Web Developer'
    }
  ];

  return (
    <section className="testimonial-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <SectionTitle 
          subtitle="Testimonial"
          title="What saying our customers"
          centered={true}
        />
        
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 mb-4 mb-lg-0">
              <TestimonialCard 
                image={testimonial.image}
                text={testimonial.text}
                name={testimonial.name}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;