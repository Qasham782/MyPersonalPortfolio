import React, { useState } from "react";
import emailjs from "emailjs-com"; // 👈 new import
import "../Css/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_iyl479v",    // 🔁 Replace with your EmailJS service ID
        "template_360j0ws",   // 🔁 Replace with your EmailJS template ID
        formData,
        "fMF5lZtTrt64l38-7"     // 🔁 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("An error occurred. Please try again.");
        }
      );

    // Optional: Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <span className="blue-square" />
        <h2>Let's talk</h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              required
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              required
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="5"
            name="message"
            onChange={handleChange}
            value={formData.message}
          />
        </div>

        <button type="submit" className="send-btn">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
