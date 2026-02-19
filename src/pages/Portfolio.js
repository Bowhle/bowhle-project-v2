// Portfolio.js — Big edge-to-edge image-card grid with text overlay, filters, lightbox

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Portfolio.css';

const CATEGORIES = ['All', 'Campaign Design', 'Email Marketing', 'Wireframing', 'Prototyping', 'Web Development', 'Social Media'];

const PROJECTS = [
  {
    id: 1,
    title: 'Bowhle Dashboard',
    subtitle: 'Functional, thoughtful, Samazing!',
    category: 'Web Development',
    desc: 'Client & employee portal with file sharing and real-time project tracking.',
    color: 'linear-gradient(135deg, #7f2cdd 0%, #3a0078 100%)',
    featured: true,
  },
  {
    id: 2,
    title: 'Zuri Brand Identity',
    subtitle: 'Visual branding & assets',
    category: 'Campaign Design',
    desc: 'Full rebrand for a South African lifestyle label — identity, packaging, campaign.',
    color: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  },
  {
    id: 3,
    title: 'Nurture Email Sequence',
    subtitle: 'Emails that convert',
    category: 'Email Marketing',
    desc: '12-touch email campaign achieving 48% average open rate.',
    color: 'linear-gradient(135deg, #0d7377 0%, #14a085 100%)',
  },
  {
    id: 4,
    title: 'Fintech App Wireframes',
    subtitle: 'Blueprints that flow',
    category: 'Wireframing',
    desc: 'Complete user flow and screen architecture for a mobile banking app.',
    color: 'linear-gradient(135deg, #1c2340 0%, #2d3561 100%)',
  },
  {
    id: 5,
    title: 'E-Commerce Prototype',
    subtitle: 'Interactive design thinking magic',
    category: 'Prototyping',
    desc: 'High-fidelity Figma prototype for a fashion marketplace with user testing.',
    color: 'linear-gradient(135deg, #c84b31 0%, #a83000 100%)',
  },
  {
    id: 6,
    title: 'Social Growth Campaign',
    subtitle: 'Voice with vibes',
    category: 'Social Media',
    desc: 'Content strategy and design for a 90-day growth sprint across platforms.',
    color: 'linear-gradient(135deg, #46237a 0%, #7f2cdd 100%)',
  },
  {
    id: 7,
    title: 'Skinrise Launch Campaign',
    subtitle: 'Visual branding & assets',
    category: 'Campaign Design',
    desc: 'Product launch campaign across print, digital, and social — skincare brand.',
    color: 'linear-gradient(135deg, #7b3f6e 0%, #4a1040 100%)',
    featured: true,
  },
  {
    id: 8,
    title: 'Bella Luna Newsletter',
    subtitle: 'Emails that convert',
    category: 'Email Marketing',
    desc: 'Full redesign of a weekly jewellery brand newsletter — open rates up 32%.',
    color: 'linear-gradient(135deg, #8B6914 0%, #5a4200 100%)',
  },
  {
    id: 9,
    title: 'Fitness App Prototype',
    subtitle: 'Interactive design thinking magic',
    category: 'Prototyping',
    desc: 'Interactive prototype for a fitness tracking mobile app — tested across 40 participants.',
    color: 'linear-gradient(135deg, #2a5c45 0%, #1a3d2b 100%)',
  },
];

const MARQUEE_CARDS = [
  { color: '#7f2cdd', label: 'Post Design' },
  { color: '#1a1a1a', label: 'Story Series' },
  { color: '#0d7377', label: 'Reel Cover' },
  { color: '#c84b31', label: 'Carousel' },
  { color: '#2d3561', label: 'Ad Creative' },
  { color: '#46237a', label: 'Campaign' },
];
const MARQUEE_DOUBLED = [...MARQUEE_CARDS, ...MARQUEE_CARDS];

export default function Portfolio() {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter && CATEGORIES.includes(filter)) setActiveFilter(filter);
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [activeFilter]);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <main>
      {/* HERO */}
      <section className="portfolio-hero" aria-label="Portfolio hero">
        <div className="container">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Selected Work</div>
          <h1 className="portfolio-hero__title fade-up">
            The <span>Work</span><br />Speaks.
          </h1>
          <p className="portfolio-hero__sub fade-up fade-up-delay-1">
            A collection of design, strategy, and code projects built to make an impact.
          </p>
        </div>
      </section>

      {/* FILTER PILLS */}
      <div className="portfolio-filters" role="navigation" aria-label="Portfolio category filters">
        <div className="container">
          <div className="portfolio-filters__pills" role="list">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-pill${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRID — no container, goes edge to edge */}
      <section className="portfolio-grid-section" aria-label="Portfolio items">
        <div className="portfolio-grid">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="portfolio-skeleton skeleton" />
              ))
            : filtered.map(item => (
                <article
                  key={item.id}
                  className={`portfolio-card${item.featured ? ' featured' : ''}`}
                  onClick={() => setLightbox(item)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${item.title}`}
                  onKeyDown={e => e.key === 'Enter' && setLightbox(item)}
                >
                  {/* Image or gradient placeholder */}
                  {item.image
                    ? <img src={item.image} alt={item.title} className="portfolio-card__image" />
                    : <div
                        className="portfolio-card__placeholder"
                        style={{ background: item.color }}
                        aria-hidden="true"
                      >
                        {item.title.split(' ').map(w => w[0]).join('')}
                      </div>
                  }

                  <div className="portfolio-card__scrim" aria-hidden="true" />

                  <div className="portfolio-card__overlay">
                    <div className="portfolio-card__tag">{item.category}</div>
                    <div className="portfolio-card__title">{item.title}</div>
                    <div className="portfolio-card__desc">{item.subtitle}</div>
                  </div>
                </article>
              ))
          }
        </div>

        {!loading && filtered.length === 0 && (
          <div className="container">
            <p style={{ textAlign: 'center', color: 'var(--mid-gray)', padding: '80px 0', fontSize: '1rem' }}>
              No projects in this category yet — check back soon!
            </p>
          </div>
        )}
      </section>

      {/* SOCIAL MARQUEE */}
      {(activeFilter === 'All' || activeFilter === 'Social Media') && (
        <section className="social-media-section" aria-label="Social media work">
          <div className="container social-media-section__header">
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Social Content</div>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Social Media Work</h2>
          </div>
          <div className="marquee-wrapper" aria-hidden="true">
            <div className="marquee-track">
              {MARQUEE_DOUBLED.map((card, i) => (
                <div key={i} className="marquee-card" style={{ background: card.color }}>{card.label}</div>
              ))}
            </div>
          </div>
          <div className="phone-mockup-wrap">
            <div className="phone-mockup">
              <div className="phone-mockup__notch" />
              <div className="phone-mockup__screen">
                <div className="phone-mockup__label">BOWHLE<br />SOCIALS</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={e => e.target === e.currentTarget && setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${lightbox.title}`}
        >
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
            <div className="lightbox-img">
              {lightbox.image
                ? <img src={lightbox.image} alt={lightbox.title} />
                : <div className="lightbox-img-placeholder" style={{ background: lightbox.color }}>
                    {lightbox.title.split(' ').map(w => w[0]).join('')}
                  </div>
              }
            </div>
            <div className="lightbox-body">
              <div className="lightbox-body__tag">{lightbox.category}</div>
              <h3>{lightbox.title}</h3>
              <p>{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}