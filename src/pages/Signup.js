// Signup.js — Signup placeholder page

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <style>{`
        .signup-card { background: var(--white); border-radius: var(--radius-lg); padding: 48px 40px; width: 100%; max-width: 440px; box-shadow: var(--shadow-lg); }
        .signup-logo { font-family: var(--font-display); font-size: 2rem; letter-spacing: 0.08em; color: var(--black); text-align: center; margin-bottom: 8px; }
        .signup-logo span { color: var(--accent); }
        .signup-form label { display: block; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--dark-gray); margin-bottom: 7px; }
        .signup-form input, .signup-form select { width: 100%; padding: 13px 16px; border: 2px solid var(--border); border-radius: var(--radius-sm); font-family: var(--font-body); font-size: 0.95rem; color: var(--charcoal); outline: none; transition: border-color var(--transition); margin-bottom: 16px; }
        .signup-form input:focus, .signup-form select:focus { border-color: var(--accent); }
      `}</style>
      <div className="signup-card">
        <div className="signup-logo">BOW<span>H</span>LE</div>
        <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--mid-gray)', marginBottom: '32px' }}>Create your account</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--black)', letterSpacing: '0.04em', marginBottom: '24px' }}>Join the team.</h1>
        <form className="signup-form" aria-label="Signup form">
          <label htmlFor="signup-name">Full Name</label>
          <input id="signup-name" type="text" placeholder="Your full name" autoComplete="name" />
          <label htmlFor="signup-email">Email Address</label>
          <input id="signup-email" type="email" placeholder="your@email.com" autoComplete="email" />
          <label htmlFor="signup-role">Account Type</label>
          <select id="signup-role">
            <option value="">Select role...</option>
            <option value="client">Client</option>
            <option value="employee">Employee</option>
          </select>
          <label htmlFor="signup-pass">Password</label>
          <input id="signup-pass" type="password" placeholder="Create a password" autoComplete="new-password" />
          <button type="button" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '0.9rem' }}>
            Create Account
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.85rem', color: 'var(--mid-gray)' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--accent)', fontWeight: '600' }}>Login</Link>
        </div>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button className="btn btn-outline" style={{ justifyContent: 'center' }} onClick={() => navigate('/client-dashboard')}>Preview Client Dashboard</button>
          <button className="btn btn-outline" style={{ justifyContent: 'center' }} onClick={() => navigate('/employee-dashboard')}>Preview Employee Dashboard</button>
        </div>
      </div>
    </div>
  );
}
