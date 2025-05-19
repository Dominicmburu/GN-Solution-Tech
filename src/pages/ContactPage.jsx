import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaComments, FaHeadset } from 'react-icons/fa';
import PageBanner from '../components/common/PageBanner';
import '../assets/css/ContactPage.css';
import FaqItem from '../components/contact/FaqItem';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'system', message: 'Welcome to GN Solutions live chat! How can we help you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const [openFaqId, setOpenFaqId] = useState(1); // First FAQ is open by default

  // Toggle FAQ function
  const toggleFaq = (faqId) => {
    setOpenFaqId(openFaqId === faqId ? null : faqId);
  };

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What services does GN Solutions offer?",
      answer: "GN Solutions offers a comprehensive range of IT services including Business Process Automation (Network as Code, Platform as Code, Software as Code), Enterprise Solutions (Managed Networks, Cybersecurity, Infrastructure Design), and IT Consulting Services (Project Management, Technology Transitions, IT Training)."
    },
    {
      id: 2,
      question: "How can I request a consultation or quote?",
      answer: "You can request a consultation or quote by filling out our contact form on this page, calling our support line at +353 (0) 874 896 800, or sending an email to info@gnsolutions.eu. Our team will get back to you within 24 hours to discuss your requirements and provide a customized solution."
    },
    {
      id: 3,
      question: "What support options do you offer for existing clients?",
      answer: "Existing clients can access support through multiple channels: phone support during business hours, 24/7 email support, and live chat. We also offer remote assistance, on-site support for critical issues, and a client portal where you can track tickets and access documentation."
    },
    {
      id: 4,
      question: "Do you offer custom IT solutions for specific industries?",
      answer: "Yes, we specialize in developing custom IT solutions tailored to specific industries including finance, healthcare, manufacturing, retail, and education. Our team works closely with clients to understand industry-specific requirements and compliance needs to deliver customized solutions that address unique challenges."
    }
  ];

  const inquiryTypes = [
    'Business Process Automation',
    'Enterprise Solutions',
    'IT Consulting Services',
    'Cybersecurity',
    'Cloud Migration',
    'Support & Maintenance',
    'Other'
  ];

  // Contact information
  const contactInfo = [
    {
      icon: <FaPhone className="contact-icon" />,
      title: 'Phone Support',
      info: '+353 (0) 874 896 800',
      subInfo: 'Monday to Friday, 9am - 6pm'
    },
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: 'Email Us',
      info: 'info@gnsolutions.eu',
      subInfo: 'We reply within 24 hours'
    },
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: 'Visit Our Office',
      info: 'GN Solutions HQ, The Oaks',
      subInfo: 'Scholastown Wood, Dublin 16'
    },
    {
      icon: <FaClock className="contact-icon" />,
      title: 'Working Hours',
      info: 'Mon-Fri: 9:00AM - 6:00PM',
      subInfo: 'Sat-Sun: Closed'
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  // Handle chat message submission
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    // Add user message
    setChatMessages([
      ...chatMessages,
      { sender: 'user', message: chatInput }
    ]);
    
    // Clear input
    setChatInput('');
    
    // Simulate automated response after delay
    setTimeout(() => {
      setChatMessages(prevMessages => [
        ...prevMessages,
        { 
          sender: 'agent', 
          message: 'Thank you for your message. One of our support agents will be with you shortly. In the meantime, you can check our FAQ section or leave your contact details for us to reach out to you.' 
        }
      ]);
    }, 1000);
  };

  // Toggle chat window
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <PageBanner 
        title="Contact & Support" 
        subtitle="Get in Touch with Our Expert Team"
        backgroundImage={'https://i.pinimg.com/736x/ed/9c/4f/ed9c4f1621b11333d09c49df24179108.jpg'}
        background="#0a1033"
        currentpage="Contact"
      />

      {/* Contact Information Cards */}
      <section className="contact-cards-section py-5">
        <div className="container">
          <div className="row">
            {contactInfo.map((item, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="contact-card h-100 p-4 text-center">
                  <div className="icon-circle mb-3">
                    {item.icon}
                  </div>
                  <h4 className="card-title" style={{ color: '#0a1033' }}>{item.title}</h4>
                  <p className="card-info">{item.info}</p>
                  <p className="card-subinfo">{item.subInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section with Form and Map */}
      <section className="contact-main-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title mb-2">How Can We Help You?</h2>
              <div className="title-underline mx-auto" style={{ backgroundColor: '#f08b0a' }}></div>
              <p className="lead text-muted mt-3">Fill out the form below with your inquiry and our team will get back to you shortly</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="contact-form-wrapper p-4 bg-white rounded shadow-sm">
                <h3 className="mb-4" style={{color: "var(--card-color)"}}>Send Us a Message</h3>
                
                {/* Success Message */}
                {submitSuccess && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Thank you!</strong> Your message has been sent successfully. We'll respond shortly.
                    <button type="button" className="btn-close" onClick={() => setSubmitSuccess(false)}></button>
                  </div>
                )}
                
                {/* Error Message */}
                {submitError && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Oops!</strong> Something went wrong. Please try again later.
                    <button type="button" className="btn-close" onClick={() => setSubmitError(false)}></button>
                  </div>
                )}
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label style={{color: "var(--card-color)"}} htmlFor="name" className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        style={{ borderColor: '#dee2e6', outline: 'none' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label style={{color: "var(--card-color)"}} htmlFor="email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        style={{ borderColor: '#dee2e6', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label style={{color: "var(--card-color)"}} htmlFor="phone" className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{ borderColor: '#dee2e6', outline: 'none' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label style={{color: "var(--card-color)"}} htmlFor="company" className="form-label">Company Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        style={{ borderColor: '#dee2e6', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label style={{color: "var(--card-color)"}} htmlFor="inquiryType" className="form-label">Inquiry Type *</label>
                    <select 
                      className="form-select" 
                      id="inquiryType" 
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      style={{ borderColor: '#dee2e6', outline: 'none' }}
                    >
                      <option value="" disabled>Select inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label style={{color: "var(--card-color)"}} htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      style={{ borderColor: '#dee2e6', outline: 'none' }}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn text-white px-4 py-2 submit-btn"
                    style={{backgroundColor: '#f08b0a'}}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="map-wrapper rounded shadow-sm overflow-hidden h-100">
                {/* Updated Google Maps embed to point to Dublin 16 */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19097.171459566788!2d-6.277941444238281!3d53.27438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867932a8eb7d667%3A0xf1a0c20a698b3b4d!2sDublin%2016%2C%20Ireland!5e0!3m2!1sen!2sus!4v1653598094447!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GN Solutions Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="support-options-section py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title mb-2">Support Options</h2>
              <div className="title-underline mx-auto" style={{ backgroundColor: '#f08b0a' }}></div>
              <p className="lead text-muted mt-3">Choose the support option that works best for you</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="support-card h-100 p-4 text-center">
                <div className="support-icon mb-3" style={{ color: '#f08b0a' }}>
                  <FaHeadset size={48} />
                </div>
                <h4 className="mb-3">Phone Support</h4>
                <p className="mb-3">Speak directly with our support team for urgent matters or complex issues.</p>
                <p className="support-highlight" style={{ color: '#f08b0a' }}>+353 (0) 874 896 800</p>
                <p className="support-hours">Mon-Fri: 9:00AM - 6:00PM</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="support-card h-100 p-4 text-center featured-support" style={{ borderColor: '#f08b0a', backgroundColor: 'rgba(240, 139, 10, 0.05)' }}>
                <div className="support-icon mb-3" style={{ color: '#f08b0a' }}>
                  <FaComments size={48} />
                </div>
                <h4 className="mb-3">Live Chat</h4>
                <p className="mb-3">Get real-time assistance with our technical support team via live chat.</p>
                <button className="btn support-btn" onClick={toggleChat} style={{ backgroundColor: '#f08b0a', color: 'white' }}>
                  Start Live Chat
                </button>
                <p className="support-hours mt-2">Available during business hours</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="support-card h-100 p-4 text-center">
                <div className="support-icon mb-3" style={{ color: '#f08b0a' }}>
                  <FaEnvelope size={48} />
                </div>
                <h4 className="mb-3">Email Support</h4>
                <p className="mb-3">Send us your inquiries anytime and we'll respond within 24 hours.</p>
                <p className="support-highlight" style={{ color: '#f08b0a' }}>info@gnsolutions.eu</p>
                <p className="support-hours">24/7 Ticket Submission</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated with React state-based accordion */}
      <section className="faq-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title mb-2">Frequently Asked Questions</h2>
              <div className="title-underline mx-auto" style={{ backgroundColor: '#f08b0a' }}></div>
              <p className="lead text-muted mt-3">Find quick answers to common questions</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faq-accordion">
                {faqData.map((faq) => (
                  <FaqItem 
                    key={faq.id}
                    faqId={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaqId === faq.id}
                    toggleFaq={toggleFaq}
                    accentColor="#f08b0a"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <div className={`live-chat-widget ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-header" onClick={toggleChat} style={{ backgroundColor: '#f08b0a' }}>
          <h5 className="mb-0">Live Support</h5>
          <button className="chat-close-btn">
            {isChatOpen ? '×' : '+'}
          </button>
        </div>
        {isChatOpen && (
          <>
            <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.sender === 'agent' && (
                    <div className="agent-avatar" style={{ backgroundColor: '#f08b0a' }}>GN</div>
                  )}
                  <div className="message-bubble" style={{ 
                    backgroundColor: msg.sender === 'user' ? '#f1f1f1' : '#f08b0a',
                    color: msg.sender === 'user' ? '#333' : 'white'
                  }}>
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
            <form className="chat-input-form" onSubmit={handleChatSubmit}>
              <input
                type="text"
                placeholder="Type your message here..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                style={{ borderColor: '#ddd', outline: 'none' }}
              />
              <button 
                type="submit" 
                className="chat-send-btn"
                style={{ backgroundColor: '#f08b0a', color: 'white' }}
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ContactPage;