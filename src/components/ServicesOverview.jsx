import { useState } from 'react';
import { C } from '../tokens';
import Btn from './Btn';
import SectionTag from './SectionTag';
import Heading from './Heading';

const SERVICES = [
  { icon: '🦷', title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacements that restore your smile and confidence.' },
  { icon: '✨', title: 'Invisalign', desc: 'Clear, comfortable aligners to straighten teeth without traditional metal braces.' },
  { icon: '🪥', title: 'Teeth Cleaning', desc: 'Professional cleaning and hygiene care to keep your smile healthy and bright.' },
  { icon: '💎', title: 'Teeth Whitening', desc: 'Dramatically whiten your smile in a single visit with our in-office treatment.' },
  { icon: '👑', title: 'Dental Crowns', desc: 'Durable, tooth-colored crowns that protect and restore damaged teeth.' },
  { icon: '🌟', title: 'Porcelain Veneers', desc: 'Ultra-thin porcelain shells that create a flawlessly beautiful smile.' },
  { icon: '🔬', title: 'Root Canal', desc: 'Comfortable, effective treatment to save damaged teeth and relieve pain.' },
  { icon: '👶', title: 'Pediatric Care', desc: 'Gentle, fun dental care designed to create positive experiences for kids.' },
];

function ServiceCard({ icon, title, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.white,
        borderRadius: '16px',
        padding: '28px 24px',
        boxShadow: hov ? '0 12px 40px rgba(27,48,112,0.14)' : '0 2px 12px rgba(27,48,112,0.06)',
        transform: hov ? 'translateY(-6px)' : 'none',
        transition: 'all 0.3s ease',
        cursor: 'default',
        borderTop: hov ? `3px solid ${C.red}` : '3px solid transparent',
      }}
    >
      <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{icon}</div>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, color: C.navy, marginBottom: '10px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '13.5px', color: C.textMuted, lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

export default function ServicesOverview({ setPage }) {
  return (
    <section style={{ padding: '100px 24px', background: C.grayLight }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionTag>Our Services</SectionTag>
          <Heading level={2} center style={{ marginBottom: '16px' }}>
            Comprehensive Dental Care<br />for the Whole Family
          </Heading>
          <p style={{ color: C.textMuted, fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto' }}>
            From routine cleanings to complete smile makeovers, we offer everything your family
            needs under one roof.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          {SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Btn variant="navy" onClick={() => setPage('services')}>View All Services →</Btn>
        </div>
      </div>
    </section>
  );
}
