import React from 'react';
import '../styles/styles.css';

function ContactPage() {
  return (
    <div className="container contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-container">
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Masukkan nama Anda" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Masukkan email Anda" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Tulis pesan Anda di sini"></textarea>
          </div>
          <button onClick={() => alert('Pesan terkirim!')}>Send</button>
        </div>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:support@luxurystore.com">support@luxurystore.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+62123456789">+62 123 456 789</a></p>
          <p><strong>Addreass:</strong> Jl. Elegansi No. 1, Jakarta, Indonesia</p>
          <p>Follow Us:</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;