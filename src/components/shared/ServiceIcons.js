// ServiceIcons.js — Custom SVG icon set for Bowhle services
// Clean, minimal line icons with accent colour accent points

import React from 'react';

const defaults = { width: 40, height: 40, stroke: '#7f2cdd', strokeWidth: 1.8, fill: 'none' };

export function IconDesign({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Paintbrush */}
      <path d="M28 6L34 12L16 30C14 32 11 33 8 33C8 30 9 27 11 25L28 6Z"
        stroke="#7f2cdd" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M24 10L30 16" stroke="#7f2cdd" strokeWidth="1.8" strokeLinecap="round" />
      {/* Colour dot */}
      <circle cx="9" cy="32" r="2.5" fill="#7f2cdd" opacity="0.35" />
      {/* Palette dots */}
      <circle cx="32" cy="26" r="1.5" fill="#7f2cdd" />
      <circle cx="28" cy="30" r="1.5" fill="#7f2cdd" opacity="0.5" />
      <circle cx="35" cy="31" r="1.5" fill="#7f2cdd" opacity="0.25" />
    </svg>
  );
}

export function IconEmailMarketing({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Envelope */}
      <rect x="5" y="10" width="30" height="22" rx="3" stroke="#7f2cdd" strokeWidth="1.8" />
      {/* Fold lines */}
      <path d="M5 13L20 23L35 13" stroke="#7f2cdd" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Send arrow */}
      <path d="M27 30L34 30M34 30L31 27M34 30L31 33" stroke="#7f2cdd" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCopywriting({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Page */}
      <rect x="7" y="4" width="22" height="28" rx="2.5" stroke="#7f2cdd" strokeWidth="1.8" />
      {/* Lines of text */}
      <line x1="12" y1="12" x2="24" y2="12" stroke="#7f2cdd" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="12" y1="17" x2="24" y2="17" stroke="#7f2cdd" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="12" y1="22" x2="19" y2="22" stroke="#7f2cdd" strokeWidth="1.6" strokeLinecap="round" />
      {/* Pen nib overlay */}
      <path d="M25 26L33 18L36 21L28 29L24 30L25 26Z"
        stroke="#7f2cdd" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M31 20L34 23" stroke="#7f2cdd" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconWireframing({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Browser frame */}
      <rect x="4" y="6" width="32" height="26" rx="3" stroke="#7f2cdd" strokeWidth="1.8" />
      {/* Browser top bar */}
      <line x1="4" y1="13" x2="36" y2="13" stroke="#7f2cdd" strokeWidth="1.6" />
      {/* Dot buttons */}
      <circle cx="9"  cy="9.5" r="1.2" fill="#7f2cdd" />
      <circle cx="13" cy="9.5" r="1.2" fill="#7f2cdd" opacity="0.5" />
      <circle cx="17" cy="9.5" r="1.2" fill="#7f2cdd" opacity="0.25" />
      {/* Layout placeholder boxes */}
      <rect x="9"  y="17" width="10" height="10" rx="1.5" stroke="#7f2cdd" strokeWidth="1.4" />
      <line x1="23" y1="18" x2="31" y2="18" stroke="#7f2cdd" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="23" y1="22" x2="31" y2="22" stroke="#7f2cdd" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="23" y1="26" x2="28" y2="26" stroke="#7f2cdd" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconPrototyping({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Phone */}
      <rect x="11" y="4" width="18" height="28" rx="3.5" stroke="#7f2cdd" strokeWidth="1.8" />
      <line x1="11" y1="9"  x2="29" y2="9"  stroke="#7f2cdd" strokeWidth="1.4" />
      <line x1="11" y1="27" x2="29" y2="27" stroke="#7f2cdd" strokeWidth="1.4" />
      <circle cx="20" cy="30.5" r="1.2" fill="#7f2cdd" />
      {/* Tap cursor */}
      <path d="M23 19L29 14L30 17L26 21L29 22L22 25L21 18L23 19Z"
        stroke="#7f2cdd" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWebDev({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Code brackets */}
      <path d="M14 13L7 20L14 27" stroke="#7f2cdd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 13L33 20L26 27" stroke="#7f2cdd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Slash */}
      <line x1="22" y1="10" x2="18" y2="30" stroke="#7f2cdd" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
