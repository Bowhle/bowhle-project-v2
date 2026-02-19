// EmployeeDashboard.js — Employee dashboard with file upload and link sharing

import React, { useState, useRef } from 'react';
import DashboardLayout from '../DashboardLayout';
import './EmployeeDashboard.css';

const NAV_ITEMS = [
  { label: 'Dashboard', to: '/employee-dashboard', icon: '📊' },
  { label: 'Upload Files', to: '/employee-dashboard', icon: '📤' },
  { label: 'Share Links', to: '/employee-dashboard', icon: '🔗' },
  { label: 'Clients', to: '/employee-dashboard', icon: '👥' },
  { label: 'Projects', to: '/employee-dashboard', icon: '📁' },
];

const CLIENTS = ['Thandi M.', 'Sipho K.', 'Lebo R.', 'Aisha D.'];

const INITIAL_SUBMISSIONS = [
  { id: 1, type: 'file', name: 'Brand_Guidelines_v2.pdf', client: 'Thandi M.', date: '2026-02-15', size: '4.2 MB', note: 'Final brand guidelines' },
  { id: 2, type: 'link', name: 'WeTransfer — Logo Files', client: 'Sipho K.', date: '2026-02-14', size: '—', note: 'https://we.tl/example123' },
  { id: 3, type: 'file', name: 'Social_Templates.zip', client: 'Lebo R.', date: '2026-02-12', size: '8.1 MB', note: 'Canva + PSD versions' },
  { id: 4, type: 'link', name: 'SwissTransfer — Pitch Deck', client: 'Aisha D.', date: '2026-02-10', size: '—', note: 'https://swisstransfer.com/d/example' },
];

export default function EmployeeDashboard() {
  const [selectedClient, setSelectedClient] = useState('Thandi M.');
  const [dragOver, setDragOver] = useState(false);
  const [submissions, setSubmissions] = useState(INITIAL_SUBMISSIONS);
  const [uploadNote, setUploadNote] = useState('');
  const [uploadClient, setUploadClient] = useState('Thandi M.');

  // Link form
  const [linkForm, setLinkForm] = useState({ label: '', url: '', client: 'Thandi M.', note: '' });
  const [linkSubmitted, setLinkSubmitted] = useState(false);

  const fileInputRef = useRef();

  const handleFileSelect = (files) => {
    if (!files || !files.length) return;
    const newItems = Array.from(files).map((f, i) => ({
      id: Date.now() + i,
      type: 'file',
      name: f.name,
      client: uploadClient,
      date: new Date().toISOString().split('T')[0],
      size: f.size > 1024 * 1024 ? `${(f.size / 1024 / 1024).toFixed(1)} MB` : `${Math.round(f.size / 1024)} KB`,
      note: uploadNote || 'No note',
    }));
    setSubmissions(s => [...newItems, ...s]);
    setUploadNote('');
    fileInputRef.current.value = '';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleLinkSubmit = (e) => {
    e.preventDefault();
    if (!linkForm.url || !linkForm.label) return;
    setSubmissions(s => [{
      id: Date.now(),
      type: 'link',
      name: linkForm.label,
      client: linkForm.client,
      date: new Date().toISOString().split('T')[0],
      size: '—',
      note: linkForm.url,
    }, ...s]);
    setLinkForm({ label: '', url: '', client: 'Thandi M.', note: '' });
    setLinkSubmitted(true);
    setTimeout(() => setLinkSubmitted(false), 3000);
  };

  const handleDelete = (id) => {
    setSubmissions(s => s.filter(item => item.id !== id));
  };

  return (
    <DashboardLayout
      navItems={NAV_ITEMS}
      role="Employee"
      username="Bowhle Studio"
      email="studio@bowhle.com"
      title="Employee Dashboard"
    >
      {/* Stats */}
      <div className="emp-stats-row">
        <div className="dash-card" style={{ padding: '20px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--black)', marginBottom: '4px' }}>
            {submissions.filter(s => s.type === 'file').length}
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--mid-gray)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Files Uploaded</div>
        </div>
        <div className="dash-card" style={{ padding: '20px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--black)', marginBottom: '4px' }}>
            {submissions.filter(s => s.type === 'link').length}
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--mid-gray)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Links Shared</div>
        </div>
        <div className="dash-card" style={{ padding: '20px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--black)', marginBottom: '4px' }}>{CLIENTS.length}</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--mid-gray)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Active Clients</div>
        </div>
        <div className="dash-card" style={{ padding: '20px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--success)', marginBottom: '4px' }}>✓</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--mid-gray)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>All Systems OK</div>
        </div>
      </div>

      <div className="emp-grid">
        {/* FILE UPLOAD */}
        <div className="dash-card">
          <div className="dash-card__title">Upload Files for Client</div>

          {/* Client selector */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--mid-gray)', marginBottom: '8px' }}>
              Select Client
            </div>
            <div className="client-chip-row">
              {CLIENTS.map(c => (
                <button
                  key={c}
                  className={`client-chip${uploadClient === c ? ' selected' : ''}`}
                  onClick={() => setUploadClient(c)}
                  aria-pressed={uploadClient === c}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Drop zone */}
          <div
            className={`upload-area${dragOver ? ' drag-over' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
            role="button"
            tabIndex={0}
            aria-label="Click or drag to upload files"
            onKeyDown={e => e.key === 'Enter' && fileInputRef.current.click()}
          >
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.zip,.fig"
              ref={fileInputRef}
              onChange={e => handleFileSelect(e.target.files)}
              aria-hidden="true"
            />
            <div className="upload-area__icon" aria-hidden="true">📤</div>
            <div className="upload-area__title">Drag & drop or click to upload</div>
            <div className="upload-area__sub">
              Supported: PDF, JPG, PNG, ZIP<br />
              For large files use WeTransfer or SwissTransfer and share the link below.
            </div>
          </div>

          <div className="link-input-group" style={{ marginBottom: '12px' }}>
            <label htmlFor="upload-note">Note for client (optional)</label>
            <input
              id="upload-note"
              type="text"
              value={uploadNote}
              onChange={e => setUploadNote(e.target.value)}
              placeholder="e.g. Final approved files — v3"
            />
          </div>

          <button
            className="btn btn-primary upload-btn"
            onClick={() => fileInputRef.current.click()}
          >
            Choose Files
          </button>
        </div>

        {/* LINK SHARE */}
        <div className="dash-card">
          <div className="dash-card__title">Share External Link</div>
          <p style={{ fontSize: '0.85rem', color: 'var(--mid-gray)', lineHeight: 1.65, marginBottom: '20px' }}>
            Share a WeTransfer, SwissTransfer, Google Drive, or any external link with your client.
          </p>
          <form onSubmit={handleLinkSubmit} className="link-form" aria-label="Share link form">
            <div className="link-form__row">
              <div className="link-input-group">
                <label htmlFor="link-label">Link Label</label>
                <input
                  id="link-label"
                  type="text"
                  value={linkForm.label}
                  onChange={e => setLinkForm(f => ({ ...f, label: e.target.value }))}
                  placeholder="e.g. Logo Package — Final"
                  required
                />
              </div>
              <div className="link-input-group">
                <label htmlFor="link-client">Client</label>
                <select
                  id="link-client"
                  value={linkForm.client}
                  onChange={e => setLinkForm(f => ({ ...f, client: e.target.value }))}
                >
                  {CLIENTS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="link-input-group link-form__row">
              <div style={{ width: '100%' }}>
                <label htmlFor="link-url">External URL</label>
                <input
                  id="link-url"
                  type="url"
                  value={linkForm.url}
                  onChange={e => setLinkForm(f => ({ ...f, url: e.target.value }))}
                  placeholder="https://we.tl/... or drive.google.com/..."
                  required
                />
              </div>
            </div>
            <div className="link-input-group">
              <label htmlFor="link-note">Note (optional)</label>
              <input
                id="link-note"
                type="text"
                value={linkForm.note}
                onChange={e => setLinkForm(f => ({ ...f, note: e.target.value }))}
                placeholder="e.g. Password: bowhle2024"
              />
            </div>
            <button type="submit" className="btn btn-primary link-submit-btn">
              {linkSubmitted ? '✓ Link Shared!' : '🔗 Share Link'}
            </button>
          </form>
        </div>
      </div>

      {/* SUBMISSIONS TABLE */}
      <div className="dash-card" style={{ marginTop: '24px' }}>
        <div className="dash-card__title">All Submissions</div>
        <div className="submissions-table-wrap">
          <table className="submissions-table" aria-label="Submissions list">
            <thead>
              <tr>
                <th>Type</th>
                <th>Name / Label</th>
                <th>Client</th>
                <th>Date</th>
                <th>Size</th>
                <th>Note / URL</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(item => (
                <tr key={item.id}>
                  <td>
                    <span className={`sub-type-badge ${item.type}`}>
                      {item.type === 'file' ? '📄 File' : '🔗 Link'}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600, maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.name}
                  </td>
                  <td>{item.client}</td>
                  <td style={{ color: 'var(--mid-gray)', whiteSpace: 'nowrap' }}>{item.date}</td>
                  <td>{item.size}</td>
                  <td style={{ maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--mid-gray)', fontSize: '0.8rem' }}>
                    {item.note}
                  </td>
                  <td>
                    <button
                      className="sub-action-btn"
                      onClick={() => handleDelete(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {submissions.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', color: 'var(--mid-gray)', padding: '32px' }}>
                    No submissions yet. Upload a file or share a link above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
