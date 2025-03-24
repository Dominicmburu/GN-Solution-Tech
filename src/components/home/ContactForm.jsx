import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-6 mb-3 mb-md-0">
          <input
            type="text"
            className="form-control bg-transparent text-white border-secondary"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control bg-transparent text-white border-secondary"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6 mb-3 mb-md-0">
          <input
            type="email"
            className="form-control bg-transparent text-white border-secondary"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            className="form-control bg-transparent text-white border-secondary"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <input
          type="url"
          className="form-control bg-transparent text-white border-secondary"
          placeholder="Company Website Url"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="form-control bg-transparent text-white border-secondary"
          placeholder="Write Your Message Here"
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-info w-100 py-3">
        Send Request
      </button>
    </form>
  );
};

export default ContactForm;