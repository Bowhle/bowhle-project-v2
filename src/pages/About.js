// About.js — About page with timeline, brand archetype, and values

import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Heart, Settings2, Lightbulb } from 'lucide-react';
import './About.css';

const TIMELINE = [
  { year: '2018', event: 'The Beginning', detail: 'Discovered a passion for visual communication through a graphic design course. Fell in love with the power of aesthetics.' },
  { year: '2019', event: 'First Client Projects', detail: 'Started freelancing — social media designs, event flyers, and basic brand kits for small businesses.' },
  { year: '2020', event: 'Brand Thinking', detail: 'Deepened understanding of brand strategy, archetypes, and human psychology in design decision-making.' },
  { year: '2021', event: 'Digital & Motion', detail: 'Expanded into email marketing design, campaign graphics, and early UI exploration.' },
  { year: '2022', event: 'UI/UX & Wireframing', detail: 'Took on product design work — wireframes, user flows, interactive prototypes. Started studying frontend development.' },
  { year: '2023', event: 'Frontend Development', detail: 'Built first live projects with HTML, CSS, JavaScript. Began learning React. Bridging design and code.' },
  { year: '2024', event: 'Bowhle Brand Launch', detail: 'Officially launched Bowhle as a full creative studio — offering design, strategy, and frontend development.' },
  { year: '2025', event: 'Growing the Studio', detail: 'Launched the Bowhle Client & Employee Dashboard. Expanding services, client base, and technical depth.' },
];

const VALUES = [
  { Icon: Zap,       title: 'Boldness',  desc: 'We never play it safe with visuals or ideas.' },
  { Icon: Heart,     title: 'Humanity',  desc: 'Every design begins with understanding people.' },
  { Icon: Settings2, title: 'Craft',     desc: 'No cutting corners. Every detail is intentional.' },
  { Icon: Lightbulb, title: 'Strategy',  desc: 'Beauty backed by thinking that actually works.' },
];

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="about-hero" aria-label="About hero">
        <div className="container">
          <div className="about-hero__label">About Bowhle</div>
          <h1 className="about-hero__title fade-up">
            The <em>Empowered</em><br />Expressionist.
          </h1>
          <p className="about-hero__sub fade-up fade-up-delay-1">
            Bowhle sits at the intersection of the Rebel and the Lover — a creative force
            that breaks conventions while building genuine human connections through design.
          </p>
        </div>
      </section>

      {/* ARCHETYPE */}
      <section className="archetype" aria-label="Brand archetype">
        <div className="container">
          <div className="archetype__label">Brand Archetype</div>
          <h2 className="archetype__title">Rebel + Lover</h2>
          <div className="archetype__badges">
            <span className="archetype__badge">Core: Rebel</span>
            <span className="archetype__badge">Secondary: Lover</span>
          </div>
          <p className="archetype__desc">
            Challenging the ordinary. Creating with emotion. Building brands that are as
            rebelliously beautiful as the people behind them.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline" aria-label="Journey timeline">
        <div className="container">
          <div className="timeline__title">
            <div className="section-label">The Journey</div>
            <h2 className="section-title">2018 – 2025</h2>
          </div>
          <div className="timeline__track">
            {TIMELINE.map((item) => (
              <article className="timeline__item" key={item.year}>
                <div className="timeline__year">{item.year}</div>
                <div className="timeline__event">{item.event}</div>
                <p className="timeline__detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values" aria-label="Core values">
        <div className="container">
          <div className="section-label">What I stand for</div>
          <h2 className="section-title">Core Values</h2>
          <div className="about-values__grid">
            {VALUES.map(({ Icon, title, desc }) => (
              <div className="value-card" key={title}>
                <div className="value-card__icon">
                  <Icon size={52} strokeWidth={1} />
                </div>
                <div className="value-card__title">{title}</div>
                <p className="value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" aria-label="Contact CTA">
        <div className="container">
          <h2 className="about-cta__title">
            Ready to build<br />something <span>bold</span>?
          </h2>
          <Link to="/connect" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '16px 36px' }}>
            Let's connect →
          </Link>
        </div>
      </section>
    </main>
  );
}