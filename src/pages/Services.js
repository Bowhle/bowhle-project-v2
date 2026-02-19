// Services.js — Services page with detailed service sections

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Services.css';

const SERVICES = [
  {
    title: 'Design',
    desc: 'Visual design that stops the scroll and starts a conversation. From brand identity to campaign assets, every element is crafted with intention and built to make an impression.',
    bestFor: ['Startups needing brand identity', 'Businesses relaunching their look', 'Creatives needing visual assets'],
    deliverables: ['Brand Identity Pack', 'Logo Suite', 'Brand Guidelines', 'Social Media Templates', 'Print-ready Files'],
    portfolioFilter: 'Campaign Design',
  },

  {
    title: 'Email Marketing',
    desc: 'Email campaigns that people actually want to open. Strategy, design, and copy that builds relationships and drives meaningful action—not just clicks.',
    bestFor: ['E-commerce brands', 'Course creators & coaches', 'Service businesses with client lists'],
    deliverables: ['Email Template Design', 'Campaign Strategy', 'Copy & Messaging', 'A/B Testing Setup', 'Performance Report', 'Flows and Automations'],
    portfolioFilter: 'Email Marketing',
  },
  
  {
    title: 'Wireframing',
    desc: 'Clear product structure before the pixels hit the screen. Wireframes that align your team, communicate your vision, and reduce revision cycles.',
    bestFor: ['Apps in early planning stages', 'Teams before developer handoff', 'Founders validating product ideas'],
    deliverables: ['Low-fidelity Wireframes', 'User Flow Diagrams', 'Screen Annotations', 'Clickable Prototype PDF', 'Navigation structure'],
    portfolioFilter: 'Wireframing',
  },

  {
    title: 'Prototyping',
    desc: 'Interactive, clickable prototypes that bring your product to life before a single line of code is written. Get real feedback, faster sign-off, and developer-ready specs.',
    bestFor: ['Product teams before build phase', 'Investors needing product demos', 'UX reviews and user testing'],
    deliverables: ['Figma/ Adobe XD Interactive Prototype', 'User Testing Report', 'Design Specifications', 'Handoff-ready Files', 'Design specs', 'Interactive mockups'],
    portfolioFilter: 'Prototyping',
  },
  
  {
    title: 'Web Development',
    desc: 'Clean, modern, responsive frontend development. Built with React or plain HTML/CSS/JS — pixel-perfect implementation that performs across all devices.',
    bestFor: ['Brands needing a new website', 'Designers who need a dev partner', 'Clients who want design + code from one person'],
    deliverables: ['Responsive Website', 'React Components', 'Performance Optimisation', 'Accessibility Audit', 'Deployment Support'],
    portfolioFilter: 'Web Development',
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="services-hero" aria-label="Services hero">
        <div className="container">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.4)' }}>What I offer</div>
          <h1 className="services-hero__title fade-up">
            Services Built<br />to <span>Perform</span>.
          </h1>
          <p className="services-hero__sub fade-up fade-up-delay-1">
            Every service is designed to solve a real problem. No fluff, no filler —
            just focused creative work that delivers results you can actually see.
          </p>
        </div>
      </section>

      {SERVICES.map((svc, i) => (
        <section className="service-section" key={svc.title} id={svc.title.toLowerCase().replace(/\s+/g, '-')} aria-label={svc.title}>
          <div className="container">
            <div className="service-section__inner">
              <div>
                <div className="service-section__icon" aria-hidden="true">{svc.icon}</div>
                <h2 className="service-section__title">{svc.title}</h2>
                <p className="service-section__desc">{svc.desc}</p>

                <div className="service-section__best-for">
                  <div className="service-section__list-title">Best for</div>
                  <ul className="service-section__list">
                    {svc.bestFor.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/portfolio?filter=${encodeURIComponent(svc.portfolioFilter)}`)}
                  style={{ marginTop: '4px' }}
                >
                  See related work →
                </button>
              </div>

              <div className="service-section__deliverables">
                <div className="service-section__list-title">Deliverables</div>
                <div>
                  {svc.deliverables.map(d => (
                    <span className="deliverable-badge" key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: 'var(--accent)', padding: '80px 0', textAlign: 'center' }} aria-label="Services CTA">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--white)', marginBottom: '24px', letterSpacing: '0.02em' }}>
            Not sure which service you need?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '1rem', lineHeight: 1.7 }}>
            Let's have a conversation. I'll help you figure out the best approach.
          </p>
          <Link to="/connect" className="btn btn-outline-white">Book a free discovery call</Link>
        </div>
      </section>
    </main>
  );
}
