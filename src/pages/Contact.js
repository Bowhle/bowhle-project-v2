// Contact.js — Connect/Contact page with form validation and success state

import React, { useState } from 'react';
import './Contact.css';

const SERVICE_OPTIONS = [
  'Graphic Design',
  'Email Marketing',
  'Copywriting',
  'Wireframing',
  'Prototyping',
  'Web Development',
  'Not sure yet',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Please share at least a few words about your project.';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <div className="container">
        <section className="contact-hero" aria-label="Contact hero">
          <div className="section-label">Let's Chat</div>
          <h1 className="contact-hero__title fade-up">
            Got a project<br />in <span>mind</span>?
          </h1>
          <p className="contact-hero__sub fade-up fade-up-delay-1">
            Whether it's a full brand build, a quick design task, or just a chat — I'm here.
            Fill in the form and I'll be in touch within 24 hours.
          </p>
        </section>

        <div className="contact-body">
          {/* FORM */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success" role="alert">
                <div className="form-success__icon" aria-hidden="true">🎉</div>
                <div className="form-success__title">Message received!</div>
                <p className="form-success__sub">
                  Thank you, {form.name.split(' ')[0]}. I'll review your message and get back
                  to you within 24 hours. Looking forward to connecting.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="contact-form-title">Send a message</div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={errors.name ? 'error' : ''}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      autoComplete="name"
                    />
                    {errors.name && <span className="form-error" id="name-error" role="alert">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={errors.email ? 'error' : ''}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      autoComplete="email"
                    />
                    {errors.email && <span className="form-error" id="email-error" role="alert">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Inquiry (optional)</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_OPTIONS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className={errors.message ? 'error' : ''}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <span className="form-error" id="message-error" role="alert">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="contact-sidebar" aria-label="Contact information">
            <div className="contact-info-card">
              <div className="contact-info-card__title">Email</div>
              <div className="contact-info-card__value">hello@bowhle.com</div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__title">Response Time</div>
              <div className="contact-info-card__value">Within 24 hours</div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__title">Based in</div>
              <div className="contact-info-card__value">South Africa 🇿🇦<br />(Available globally)</div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-card__title">Follow along</div>
              <div className="contact-socials" style={{ marginTop: '8px' }}>
                <a href="#!" className="contact-social-link" aria-label="Instagram">IG</a>
                <a href="#!" className="contact-social-link" aria-label="LinkedIn">LI</a>
                <a href="#!" className="contact-social-link" aria-label="Behance">BE</a>
                <a href="#!" className="contact-social-link" aria-label="Twitter">TW</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
