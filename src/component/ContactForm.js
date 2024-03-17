import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can replace this with your actual form submission logic)
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        {formSubmitted ? (
          <p className="form-submitted-message">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
