// ClientDashboard.js — Client dashboard home page
// Shows project progress, past work thumbnails, and status sidebar

import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../DashboardLayout';
import './ClientDashboard.css';

const NAV_ITEMS = [
  { label: 'Dashboard', to: '/client-dashboard', icon: '📊' },
  { label: 'My Account', to: '/client-dashboard/account', icon: '👤' },
  { label: 'Projects', to: '/client-dashboard', icon: '📁' },
  { label: 'Files', to: '/client-dashboard', icon: '📎' },
  { label: 'Messages', to: '/client-dashboard', icon: '💬' },
];

const PROGRESS_STEPS = [
  { label: 'Brief Received', sub: 'Completed', state: 'completed' },
  { label: 'Design Started', sub: 'Completed', state: 'completed' },
  { label: 'Design In Review', sub: 'In progress', state: 'current' },
  { label: 'Design Completed', sub: 'Pending', state: 'pending' },
];

const PAST_PROJECTS = [
  { label: 'Brand Kit', color: '#7f2cdd' },
  { label: 'Email Seq', color: '#1a1a1a' },
  { label: 'Landing Pg', color: '#0d7377' },
  { label: 'Social Pack', color: '#c84b31' },
  { label: 'Pitch Deck', color: '#2d3561' },
  { label: 'Ad Creative', color: '#46237a' },
];

const FILES = [
  { name: 'Brand_Guidelines_v2.pdf', size: '4.2 MB', icon: '📄' },
  { name: 'Logo_Suite_Final.zip', size: '12.8 MB', icon: '📦' },
  { name: 'Social_Templates.fig', size: '8.1 MB', icon: '🎨' },
  { name: 'WeTransfer_link.txt', size: 'Link', icon: '🔗' },
];

export default function ClientDashboard() {
  return (
    <DashboardLayout
      navItems={NAV_ITEMS}
      role="Client"
      username="Thandi Mokoena"
      email="thandi@client.com"
      title="Dashboard"
    >
      {/* Stats */}
      <div className="client-stats-row">
        <div className="stat-card">
          <div className="stat-card__value">3</div>
          <div className="stat-card__label">Active Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">6</div>
          <div className="stat-card__label">Past Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">4</div>
          <div className="stat-card__label">Files Ready</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value" style={{ color: 'var(--success)' }}>✓</div>
          <div className="stat-card__label">Account Active</div>
        </div>
      </div>

      <div className="client-dash-grid">
        {/* LEFT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Current Project Progress */}
          <div className="dash-card">
            <div className="dash-card__title">Current Project</div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--black)', letterSpacing: '0.04em', marginBottom: '4px' }}>
                Full Brand Identity &amp; Web Presence
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--mid-gray)' }}>
                Started: 01 Feb 2026 &nbsp;·&nbsp; Expected: 28 Feb 2026
              </div>
            </div>

            {/* Progress steps */}
            <div className="progress-steps" role="list" aria-label="Project progress">
              {PROGRESS_STEPS.map((step, i) => (
                <React.Fragment key={step.label}>
                  <div
                    className={`progress-step ${step.state}`}
                    role="listitem"
                    aria-current={step.state === 'current' ? 'step' : undefined}
                  >
                    <div className="progress-step__dot" aria-hidden="true">
                      {step.state === 'completed' ? '✓' : step.state === 'current' ? '◉' : '○'}
                    </div>
                    <div>
                      <div className="progress-step__label">{step.label}</div>
                      <div className="progress-step__sub">{step.sub}</div>
                    </div>
                  </div>
                  {i < PROGRESS_STEPS.length - 1 && (
                    <>
                      <div className={`progress-step__connector${step.state === 'completed' ? ' done' : ''}`} aria-hidden="true" />
                      <div className={`progress-step-mobile-line${step.state === 'completed' ? ' done' : ''}`} aria-hidden="true" />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Past Projects */}
          <div className="dash-card">
            <div className="dash-card__title">Past Projects</div>
            <div className="past-projects-grid" role="list" aria-label="Past projects gallery">
              {PAST_PROJECTS.map(p => (
                <div
                  key={p.label}
                  className="past-project-thumb"
                  style={{ background: p.color }}
                  role="listitem"
                  tabIndex={0}
                  aria-label={p.label}
                >
                  {p.label}
                </div>
              ))}
            </div>
          </div>

          {/* Shared Files */}
          <div className="dash-card">
            <div className="dash-card__title">Shared Files &amp; Links</div>
            <div className="files-list" role="list">
              {FILES.map(f => (
                <div className="file-item" key={f.name} role="listitem" tabIndex={0} aria-label={`Download ${f.name}`}>
                  <span className="file-item__icon" aria-hidden="true">{f.icon}</span>
                  <span className="file-item__name">{f.name}</span>
                  <span className="file-item__size">{f.size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="client-info-box">
          <div className="info-box-card">
            <div className="dash-card__title" style={{ marginBottom: '12px' }}>Project Info</div>
            <div className="info-box-card__row">
              <label>Status</label>
              <span className="status-dot">Active</span>
            </div>
            <div className="info-box-card__row">
              <label>Phase</label>
              <span>Design Review</span>
            </div>
            <div className="info-box-card__row">
              <label>Account</label>
              <Link to="/client-dashboard/account" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.82rem' }}>View Profile →</Link>
            </div>
            <div className="info-box-card__row">
              <label>Client #</label>
              <span>BW-2024-041</span>
            </div>
          </div>

          <button className="btn btn-primary download-all-btn" aria-label="Download all project files">
            ⬇ Download All Files
          </button>

          <div className="info-box-card">
            <div className="dash-card__title" style={{ marginBottom: '12px' }}>Need Help?</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--mid-gray)', lineHeight: 1.65, marginBottom: '14px' }}>
              Have a question about your project? Send a message directly.
            </p>
            <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '11px', fontSize: '0.8rem' }}>
              💬 Send Message
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
