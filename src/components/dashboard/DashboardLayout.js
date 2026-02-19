// DashboardLayout.js — Shared shell for client and employee dashboards
// Renders sidebar + top header + main content area

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DashboardLayout.css';

export default function DashboardLayout({ navItems, role, username, email, title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const initials = username ? username.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) : 'U';

  return (
    <div className="dash-shell">
      {/* Sidebar */}
      <nav
        className={`dash-sidebar${sidebarOpen ? '' : ' mobile-closed'}`}
        aria-label="Dashboard navigation"
      >
        <div className="dash-sidebar__logo">
          <div className="dash-sidebar__logo-text">BOW<span>H</span>LE</div>
          <span className="dash-sidebar__role-badge">{role}</span>
        </div>

        <div className="dash-sidebar__nav">
          <div className="dash-sidebar__section-label">Menu</div>
          {navItems.map(item => (
            <Link
              key={item.label}
              to={item.to}
              className={`dash-nav-link${window.location.pathname === item.to ? ' active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="dash-nav-link__icon" aria-hidden="true">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="dash-sidebar__footer">
          <div className="dash-sidebar__user">
            <div className="dash-sidebar__avatar" aria-hidden="true">{initials}</div>
            <div className="dash-sidebar__user-info">
              <div className="dash-sidebar__user-name">{username}</div>
              <div className="dash-sidebar__user-email">{email}</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`dash-overlay${sidebarOpen ? ' visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Top header */}
      <header className="dash-header">
        <button
          className="dash-header__menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          aria-expanded={sidebarOpen}
        >
          <span /><span /><span />
        </button>

        <div className="dash-header__title">{title}</div>

        <div className="dash-header__actions">
          <button className="dash-header__notification" aria-label="Notifications">
            🔔
            <span className="dash-header__notif-dot" aria-hidden="true" />
          </button>
          <div className="dash-header__avatar" aria-label={`${username} avatar`}>{initials}</div>
          <button
            className="dash-header__logout-btn"
            onClick={() => navigate('/login')}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="dash-main">
        {children}
      </main>
    </div>
  );
}
