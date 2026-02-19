// ClientAccount.js — Client account page with Personal Information and Settings tabs

import React, { useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import './ClientAccount.css';

const NAV_ITEMS = [
  { label: 'Dashboard', to: '/client-dashboard', icon: '📊' },
  { label: 'My Account', to: '/client-dashboard/account', icon: '👤' },
  { label: 'Projects', to: '/client-dashboard', icon: '📁' },
  { label: 'Files', to: '/client-dashboard', icon: '📎' },
  { label: 'Messages', to: '/client-dashboard', icon: '💬' },
];

const TOGGLES = [
  { label: 'Email Notifications', sub: 'Receive project update emails', key: 'emailNotif', default: true },
  { label: 'WhatsApp Updates', sub: 'Get notified via WhatsApp', key: 'whatsapp', default: false },
  { label: 'File Download Alerts', sub: 'Notify when new files are shared', key: 'fileAlerts', default: true },
  { label: 'Marketing Emails', sub: 'Tips and Bowhle news', key: 'marketing', default: false },
];

export default function ClientAccount() {
  const [activeTab, setActiveTab] = useState('info');
  const [form, setForm] = useState({
    firstName: 'Thandi',
    lastName: 'Mokoena',
    email: 'thandi@client.com',
    phone: '+27 82 000 0000',
    company: 'Zuri Brand Co.',
    clientNumber: 'BW-2024-041',
  });
  const [toggles, setToggles] = useState(
    TOGGLES.reduce((acc, t) => ({ ...acc, [t.key]: t.default }), {})
  );
  const [saved, setSaved] = useState(false);
  const [pwForm, setPwForm] = useState({ current: '', new: '', confirm: '' });

  const handleFormChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setSaved(false);
  };

  const handleSave = e => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleToggle = key => {
    setToggles(t => ({ ...t, [key]: !t[key] }));
  };

  return (
    <DashboardLayout
      navItems={NAV_ITEMS}
      role="Client"
      username={`${form.firstName} ${form.lastName}`}
      email={form.email}
      title="My Account"
    >
      <div className="dash-card">
        {/* Tabs */}
        <div className="account-tabs" role="tablist">
          <button
            className={`account-tab-btn${activeTab === 'info' ? ' active' : ''}`}
            onClick={() => setActiveTab('info')}
            role="tab"
            aria-selected={activeTab === 'info'}
            aria-controls="tab-info"
          >
            Personal Information
          </button>
          <button
            className={`account-tab-btn${activeTab === 'settings' ? ' active' : ''}`}
            onClick={() => setActiveTab('settings')}
            role="tab"
            aria-selected={activeTab === 'settings'}
            aria-controls="tab-settings"
          >
            Settings
          </button>
        </div>

        {/* PERSONAL INFO TAB */}
        {activeTab === 'info' && (
          <div id="tab-info" role="tabpanel">
            <div className="profile-header">
              <div className="profile-avatar-wrap">
                <div className="profile-avatar" aria-label={`${form.firstName} ${form.lastName} avatar`}>
                  {form.firstName[0]}{form.lastName[0]}
                </div>
                <button className="profile-avatar-edit" aria-label="Edit profile picture">✎</button>
              </div>
              <div>
                <div className="profile-name">{form.firstName} {form.lastName}</div>
                <div className="profile-number">Client # {form.clientNumber}</div>
              </div>
            </div>

            <form onSubmit={handleSave} aria-label="Personal information form">
              <div className="profile-form-grid">
                <div className="profile-field">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handleFormChange} autoComplete="given-name" />
                </div>
                <div className="profile-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleFormChange} autoComplete="family-name" />
                </div>
                <div className="profile-field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleFormChange} autoComplete="email" />
                </div>
                <div className="profile-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleFormChange} autoComplete="tel" />
                </div>
                <div className="profile-field">
                  <label htmlFor="company">Company / Brand</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleFormChange} />
                </div>
                <div className="profile-field">
                  <label htmlFor="clientNumber">Client Number</label>
                  <input id="clientNumber" name="clientNumber" type="text" value={form.clientNumber} readOnly style={{ background: 'var(--light-gray)', cursor: 'not-allowed' }} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary profile-save-btn">
                {saved ? '✓ Changes Saved!' : 'Save Changes'}
              </button>
            </form>
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div id="tab-settings" role="tabpanel">
            {/* Password */}
            <div className="settings-section">
              <div className="settings-section-title">Change Password</div>
              <div className="settings-card">
                <div className="profile-form-grid" style={{ gridTemplateColumns: '1fr', gap: '14px' }}>
                  {[
                    { id: 'current-pass', label: 'Current Password', key: 'current', placeholder: '••••••••' },
                    { id: 'new-pass', label: 'New Password', key: 'new', placeholder: 'Min. 8 characters' },
                    { id: 'confirm-pass', label: 'Confirm New Password', key: 'confirm', placeholder: 'Repeat new password' },
                  ].map(f => (
                    <div key={f.id} className="profile-field">
                      <label htmlFor={f.id}>{f.label}</label>
                      <input
                        id={f.id}
                        type="password"
                        value={pwForm[f.key]}
                        onChange={e => setPwForm(p => ({ ...p, [f.key]: e.target.value }))}
                        placeholder={f.placeholder}
                        autoComplete={f.key === 'current' ? 'current-password' : 'new-password'}
                      />
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary" style={{ marginTop: '16px', padding: '12px 28px', fontSize: '0.83rem' }}>
                  Update Password
                </button>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="settings-section">
              <div className="settings-section-title">Notification Preferences</div>
              <div className="settings-card">
                {TOGGLES.map(t => (
                  <div key={t.key} className="settings-toggle-row">
                    <div>
                      <div className="settings-toggle-label">{t.label}</div>
                      <div className="settings-toggle-sub">{t.sub}</div>
                    </div>
                    <button
                      className={`toggle-switch${toggles[t.key] ? ' on' : ''}`}
                      onClick={() => handleToggle(t.key)}
                      aria-label={`${t.label}: ${toggles[t.key] ? 'enabled' : 'disabled'}`}
                      aria-pressed={toggles[t.key]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
