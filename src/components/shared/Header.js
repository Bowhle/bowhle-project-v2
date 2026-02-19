// Header.js — Public site navigation
// Uses real Bowhle-WHITE.png logo image
// Layout: Logo left | Nav center | Auth right | Hamburger mobile

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logoWhite from '../../Bowhle-WHITE.png';

const NAV_LINKS = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: "Let's Connect", to: '/connect' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(o => !o);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="sticky-header">
      <nav className="header-navbar" aria-label="Main navigation">

        {/* LEFT — Logo image */}
        <div className="header-nav-left">
          <Link to="/home" className="header-logo" aria-label="Bowhle Home">
            <img src={logoWhite} alt="Bowhle — Let's Create Some Magic!" />
          </Link>
        </div>

        {/* CENTER — Nav links */}
        <div className="header-nav-center">
          <ul className={`header-nav-links${menuOpen ? ' open' : ''}`} role="list">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {/* Mobile-only auth — lives inside the slide panel */}
            <li className="header-mobile-auth">
              <Link to="/login" className="header-login-button" onClick={closeMenu}>Login</Link>
              <Link to="/connect" className="header-signup-button" onClick={closeMenu}>Let's Chat</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT — Desktop auth */}
        <div className="header-nav-right">
          <div className="header-auth-buttons">
            <Link to="/login" className="header-login-button">Login</Link>
            <Link to="/connect" className="header-signup-button">Let's Chat</Link>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={`header-hamburger-button${menuOpen ? ' is-open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <line className="ham-top" x1="20" y1="30" x2="80" y2="30" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
            <line className="ham-mid" x1="20" y1="50" x2="80" y2="50" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
            <line className="ham-bot" x1="20" y1="70" x2="80" y2="70" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </button>

      </nav>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div className="header-backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  );
}