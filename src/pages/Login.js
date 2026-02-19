// Login.js — Login placeholder page with brand styling

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const sharedStyles = `
  .auth-page {
    min-height: 100vh;
    background: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }
  .auth-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 48px 40px;
    width: 100%;
    max-width: 440px;
    box-shadow: var(--shadow-lg);
  }
  .auth-logo {
    font-family: var(--font-display);
    font-size: 2rem;
    letter-spacing: 0.08em;
    color: var(--black);
    text-align: center;
    margin-bottom: 8px;
  }
  .auth-logo span { color: var(--accent); }
  .auth-tagline {
    text-align: center;
    font-size: 0.82rem;
    color: var(--mid-gray);
    margin-bottom: 36px;
  }
  .auth-title {
    font-family: var(--font-display);
    font-size: 1.8rem;
    color: var(--black);
    letter-spacing: 0.04em;
    margin-bottom: 24px;
  }
  .auth-form .form-group { margin-bottom: 16px; }
  .auth-form label {
    display: block;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--dark-gray);
    margin-bottom: 7px;
  }
  .auth-form input {
    width: 100%;
    padding: 13px 16px;
    border: 2px solid var(--border);
    border-radius: var(--radius-sm);
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: var(--charcoal);
    outline: none;
    transition: border-color var(--transition);
  }
  .auth-form input:focus { border-color: var(--accent); }
  .auth-submit { width: 100%; justify-content: center; padding: 15px; font-size: 0.9rem; margin-top: 8px; margin-bottom: 20px; }
  .auth-divider { text-align: center; color: var(--mid-gray); font-size: 0.82rem; margin-bottom: 20px; }
  .auth-dash-btns { display: flex; flex-direction: column; gap: 10px; }
  .auth-dash-btns .btn { justify-content: center; }
  .auth-footer { text-align: center; margin-top: 24px; font-size: 0.85rem; color: var(--mid-gray); }
  .auth-footer a { color: var(--accent); font-weight: 600; }
`;

function AuthStyles() {
  return <style>{sharedStyles}</style>;
}

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <AuthStyles />
      <div className="auth-card">
        <div className="auth-logo">BOW<span>H</span>LE</div>
        <div className="auth-tagline">Graphic Designer & Frontend Dev Student</div>
        <h1 className="auth-title">Welcome back.</h1>
        <form className="auth-form" aria-label="Login form">
          <div className="form-group">
            <label htmlFor="login-email">Email Address</label>
            <input id="login-email" type="email" placeholder="your@email.com" autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" placeholder="••••••••" autoComplete="current-password" />
          </div>
          <button type="button" className="btn btn-primary auth-submit">Login</button>
        </form>
        <div className="auth-divider">— or go directly to —</div>
        <div className="auth-dash-btns">
          <button className="btn btn-outline" onClick={() => navigate('/client-dashboard')}>
            Go to Client Dashboard
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/employee-dashboard')}>
            Go to Employee Dashboard
          </button>
        </div>
        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
