import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.text())
    .then((data) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      setFormData({ name: '', email: '', message: '' }); 
    })
    .catch((error) => {
      alert('Failed to send message');
    });
  };

  return (
    <div className="contact-page">
      {showSuccessMessage && (
        <div className="success-message">
          Message sent successfully
        </div>
      )}
      <div className="contact-container">
        <h1 className="contact-header">Contact Me</h1>
        <p className="contact-subheader">I'm looking forward to working with you!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Send me a Message"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
