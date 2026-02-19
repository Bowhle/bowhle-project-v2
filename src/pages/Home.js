// Home.js — Public home page

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Paintbrush2, Mail, Monitor, Smartphone, Code2 } from 'lucide-react';

const HEADLINES = [
  'Brewing Something Bowtiful',
  'Designing with Soul',
  'Crafting Digital Magic',
  'Where Ideas Come to Life',
  'Building Brands that Speak',
  'Art Meets Strategy',
];

const SERVICES = [
  { Icon: Paintbrush2, title: 'Design',          desc: 'Bold visuals that command attention.' },
  { Icon: Mail,        title: 'Email Marketing',  desc: 'Campaigns that convert and connect.' },
  { Icon: Monitor,     title: 'Wireframing',      desc: 'Clear structure before the pixels.' },
  { Icon: Smartphone,  title: 'Prototyping',      desc: 'Interactive ideas, faster sign-off.' },
  { Icon: Code2,       title: 'Web Development',  desc: 'Clean frontend, pixel-perfect builds.' },
];

const FEATURED = [
  {
    title: 'Bowhle Dashboard',
    tag: 'Web Development',
    desc: 'Client & employee portal with file sharing and project tracking.',
    color: 'linear-gradient(135deg, #7f2cdd 0%, #3a0078 100%)',
  },
  {
    title: 'Brand Campaign',
    tag: 'Campaign Design',
    desc: 'Full brand identity and launch campaign for a local lifestyle brand.',
    color: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  },
  {
    title: 'Email Series',
    tag: 'Email Marketing',
    desc: '12-touch nurture sequence achieving 48% open rate.',
    color: 'linear-gradient(135deg, #0d7377 0%, #14a085 100%)',
  },
];

const TESTIMONIALS = [
  { text: 'Working with Bowhle was seamless. The designs were bold, the communication was clear, and the results exceeded our expectations.', author: 'Thandi M.', role: 'Creative Director' },
  { text: 'Every pixel intentional, every word deliberate. Bowhle brings both design instinct and technical discipline to every project.', author: 'Sipho K.', role: 'Startup Founder' },
  { text: 'From concept to delivery, Bowhle took our brief and turned it into something we could not have imagined ourselves.', author: 'Lebo R.', role: 'Marketing Lead' },
];

export default function Home() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headlineKey, setHeadlineKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex(i => (i + 1) % HEADLINES.length);
      setHeadlineKey(k => k + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const lines = HEADLINES[headlineIndex].split(' ');
  const lastWord = lines[lines.length - 1];
  const firstWords = lines.slice(0, -1).join(' ');

  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-label="Hero section">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__grid-overlay" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__eyebrow fade-up">Designer &amp; Frontend Developer</div>
          <h1 className="hero__headline fade-up fade-up-delay-1">
            {firstWords}{' '}
            <span className="rotating-word" key={headlineKey}>{lastWord}</span>
          </h1>
          <p className="hero__sub fade-up fade-up-delay-2">
            I design bold, human experiences and build them with clean frontend code.
          </p>
          <div className="hero__ctas fade-up fade-up-delay-3">
            <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
            <Link to="/about" className="btn btn-outline-white">Get to know Bowhle</Link>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-arrow">↓</span>
          <span>Scroll</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro" aria-label="Introduction">
        <div className="container">
          <div className="intro__grid">
            <div className="intro__text">
              <div className="section-label">Who I am</div>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>Design meets<br />strategy + code.</h2>
              <p>Bowhle is where creative direction collides with technical skill. I build brand identities, digital campaigns, and frontend experiences that are as functional as they are beautiful.</p>
              <p>Every project starts with understanding people—their needs, their desires, their language. Then we build something that speaks directly to them.</p>
              <div className="intro__chips">
                <span className="intro__chip">UI / UX</span>
                <span className="intro__chip">Brand Design</span>
                <span className="intro__chip">Frontend Dev</span>
              </div>
            </div>
            <div className="intro__visual" aria-hidden="true">
              <div className="intro__big-text">BOW<span>H</span>LE</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="section services-preview" aria-label="Core services">
        <div className="container">
          <div className="section-label">What I do</div>
          <h2 className="section-title">Core Services</h2>
          <div className="services-preview__grid">
            {SERVICES.map(({ Icon, title, desc }) => (
              <div className="service-tile" key={title}>
                <div className="service-tile__icon">
                  <Icon size={52} strokeWidth={1} />
                </div>
                <div className="service-tile__title">{title}</div>
                <div className="service-tile__desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK — edge-to-edge image cards */}
      <section className="featured-work" aria-label="Featured work">
        {/* Header — title only, no button */}
        <div className="container">
          <div className="featured-work__header">
            <div>
              <div className="section-label">Selected Work</div>
              <h2 className="section-title">Featured Projects</h2>
            </div>
          </div>
        </div>

        {/* Grid — edge-to-edge */}
        <div className="featured-work__grid">
          {FEATURED.map(item => (
            <Link
              to="/portfolio"
              className="work-card"
              key={item.title}
              aria-label={`View ${item.title}`}
            >
              <div
                className="work-card__placeholder"
                style={{ background: item.color }}
                aria-hidden="true"
              >
                {item.title.split(' ').map(w => w[0]).join('')}
              </div>
              <div className="work-card__scrim" aria-hidden="true" />
              <div className="work-card__body">
                <div className="work-card__tag">{item.tag}</div>
                <div className="work-card__title">{item.title}</div>
                <div className="work-card__desc">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA — centred below the grid */}
        <div className="featured-work__cta">
          <Link to="/portfolio" className="btn btn-outline">View All Work</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials" aria-label="Client testimonials">
        <div className="container">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Social Proof</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>What clients say</h2>
          <div className="testimonials__grid">
            {TESTIMONIALS.map(t => (
              <blockquote className="testimonial-card" key={t.author}>
                <div className="testimonial-card__quote" aria-hidden="true">"</div>
                <p className="testimonial-card__text">{t.text}</p>
                <footer>
                  <div className="testimonial-card__author">{t.author}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip" aria-label="Call to action">
        <div className="container">
          <h2 className="cta-strip__title">
            Let's build something<br />worth looking at.
          </h2>
          <Link to="/connect" className="btn btn-outline-white">Start a conversation →</Link>
        </div>
      </section>
    </main>
  );
}