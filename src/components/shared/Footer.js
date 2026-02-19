// Footer.js — Public site footer with nav links and social icons

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">BOW<span>H</span>LE</div>
            <p className="footer__tagline">
              Graphic Designer & Frontend Dev Student.<br />
              Bold ideas. Clean code. Real results.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Navigate</div>
            <div className="footer__links">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Services</div>
            <div className="footer__links">
              <Link to="/services">UI/UX Design</Link>
              <Link to="/services">Brand Design</Link>
              <Link to="/services">Frontend Dev</Link>
              <Link to="/services">Copywriting</Link>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Connect</div>
            <div className="footer__links" style={{ marginBottom: '20px' }}>
              <Link to="/connect">Get in Touch</Link>
              <a href="mailto:hello@bowhle.com">hello@bowhle.com</a>
            </div>
            <div className="footer__socials">
              <a href="#!" className="footer__social-link" aria-label="Instagram">IG</a>
              <a href="#!" className="footer__social-link" aria-label="LinkedIn">LI</a>
              <a href="#!" className="footer__social-link" aria-label="Behance">BE</a>
              <a href="#!" className="footer__social-link" aria-label="Twitter">TW</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} <span>Bowhle</span>. All rights reserved.
          </p>
          <p className="footer__copy">
            Designed with soul. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
