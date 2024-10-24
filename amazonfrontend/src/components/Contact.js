import React, { useState } from 'react';
import './Contact.css'; // Optional for adding styles

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to a backend
    alert('Thank you for reaching out to us!');
    setForm({ name: '', email: '', message: '' });

  };

  return (
    <div className="contact-container">
      <h1>Contact ASPV GROUP </h1><br></br>
      <p>We'd love to hear from you! Whether you have a question about our fresh produce inventory or need information about our other services, feel free to reach out to us.</p>
      <br></br>
      {/* <div className="contact-details"><br></br>
        <p>Address: No.45, 1st and 2nd floor, Om Sakthi Nagar, Kasi Towers, Mettukuppam, Vanagaram, Chennai, Tamil Nadu 600095</p>
        <p>Phone: +91 44 1234 5678</p>
        <p>Email: info@aspvgroup.com</p>
      </div> */}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
