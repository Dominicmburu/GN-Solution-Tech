import React, { useState } from 'react';
import { API_URL } from '../../api/main';

const ContactForm = () => {
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
  const [validationErrors, setValidationErrors] = useState([]);

  const inquiryTypes = [
    'Business Process Automation',
    'Enterprise Solutions',
    'IT Consulting Services',
    'Cybersecurity',
    'Cloud Migration',
    'Support & Maintenance',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.name || formData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address.');
    }
    if (formData.phone && !/^[\+]?[1-9][\d]{7,15}$/.test(formData.phone)) {
      errors.push('Please enter a valid international phone number.');
    }
    if (formData.company.length > 100) {
      errors.push('Company name must not exceed 100 characters.');
    }
    if (!formData.message || formData.message.length < 5) {
      errors.push('Please add more message.');
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length) {
      setValidationErrors(errors);
      setSubmitError(true);
      return;
    }

    setValidationErrors([]);
    setSubmitError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: '',
          message: ''
        });
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitError(false);
        setValidationErrors([]);
      }, 5000);
    }
  };

  return (
    <div className="contact-form-wrapper p-4 bg-white rounded shadow-sm">
      <h3 className="mb-4" style={{ color: 'var(--card-color)' }}>Send Us a Message</h3>

      {submitSuccess && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Thank you!</strong> Your message has been sent successfully.
          <button type="button" className="btn-close" onClick={() => setSubmitSuccess(false)}></button>
        </div>
      )}

      {submitError && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {validationErrors.length > 0 ? (
            <>
              <strong>Please fix the following:</strong>
              <ul className="mb-0 mt-2">
                {validationErrors.map((err, idx) => <li key={idx}>{err}</li>)}
              </ul>
            </>
          ) : (
            <>Something went wrong. Please try again later.</>
          )}
          <button type="button" className="btn-close" onClick={() => {
            setSubmitError(false);
            setValidationErrors([]);
          }}></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label" style={{ color: 'var(--card-color)' }}>Full Name *</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label" style={{ color: 'var(--card-color)' }}>Email *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label" style={{ color: 'var(--card-color)' }}>Phone</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="company" className="form-label" style={{ color: 'var(--card-color)' }}>Company</label>
            <input
              type="text"
              className="form-control"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inquiryType" className="form-label" style={{ color: 'var(--card-color)' }}>Inquiry Type *</label>
          <select
            className="form-select"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select inquiry type</option>
            {inquiryTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label" style={{ color: 'var(--card-color)' }}>Message *</label>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn text-white px-4 py-2 w-100"
          style={{ backgroundColor: '#f08b0a' }}
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
  );
};

export default ContactForm;
