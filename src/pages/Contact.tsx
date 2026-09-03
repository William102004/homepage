import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
import linkedin from '../textures/linkedin.png';
import github from '../textures/github.png';
import phone from '../textures/phone.png';
import email from '../textures/email.png';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus('');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('Thank you for your message! I will get back to you soon.');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error.text);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact-page">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
        <h2>Connect</h2>
        <div className="contact-cards">
          <a className="contact-card" href="https://www.linkedin.com/in/william-almaguer-b680432ab/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
            William Almaguer
          </a>
          <a className="contact-card" href="https://github.com/williamalmaguer" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
            William102004
          </a>
          <a className="contact-card" href="mailto:william10182004@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="Email" />
            William10182004@gmail.com
          </a>
          <a className="contact-card" href="tel:+17867972876" target="_blank" rel="noopener noreferrer">
            <img src={phone} alt="Phone" />
            (786)-797-2876
          </a>
        </div>

        <h3>Message</h3>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={6} required></textarea>

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
