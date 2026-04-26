import { useState } from 'react';
import { C } from '../tokens';
import Btn from '../components/Btn';
import SectionTag from '../components/SectionTag';
import Heading from '../components/Heading';
import CTASection from '../components/CTASection';

const CATEGORIES = [
  {
    id: 'general', label: 'General Dentistry', icon: '🦷',
    services: [
      { title: 'Routine Cleanings & Exams', desc: 'Preventive care is the cornerstone of long-term dental health. Our thorough exams catch problems early.', benefits: ['Early cavity detection', 'Gum disease screening', 'Cancer screening', 'Digital X-rays'] },
      { title: 'Dental Fillings', desc: 'Tooth-colored composite fillings restore strength and beauty to damaged teeth.', benefits: ['Matches natural tooth color', 'Metal-free options', 'Same-day treatment', 'Long-lasting results'] },
      { title: 'Tooth Extractions', desc: 'When necessary, we perform gentle extractions with minimal discomfort and fast recovery.', benefits: ['Gentle technique', 'Sedation available', 'Implant planning', 'Fast healing protocol'] },
      { title: 'Emergency Dental Care', desc: "Dental emergencies don't wait. We offer same-day appointments for urgent situations.", benefits: ['Same-day availability', 'Pain relief focused', 'After-hours guidance', 'Weekend appointments'] },
    ],
  },
  {
    id: 'cosmetic', label: 'Cosmetic Dentistry', icon: '✨',
    services: [
      { title: 'Teeth Whitening', desc: 'Professional in-office whitening delivers dramatic results in just one visit.', benefits: ['Up to 8 shades whiter', '1-hour in-office treatment', 'Take-home kits available', 'Long-lasting results'] },
      { title: 'Porcelain Veneers', desc: 'Ultra-thin porcelain shells crafted to create a flawlessly beautiful smile.', benefits: ['Natural appearance', 'Stain-resistant', 'Minimal tooth prep', 'Custom designed'] },
      { title: 'Invisalign', desc: 'Clear aligners that straighten your teeth discreetly and comfortably.', benefits: ['Removable & comfortable', 'Virtually invisible', 'Faster than braces', 'No dietary restrictions'] },
      { title: 'Smile Makeover', desc: 'A comprehensive transformation combining multiple cosmetic treatments.', benefits: ['Fully customized plan', 'Combines best treatments', 'Digital smile preview', 'Financing available'] },
    ],
  },
  {
    id: 'restorative', label: 'Restorative Dentistry', icon: '👑',
    services: [
      { title: 'Dental Implants', desc: 'The gold standard for replacing missing teeth — permanent, natural-feeling, and beautiful.', benefits: ['Looks & feels natural', 'Lifetime durability', 'Preserves jawbone', 'No adhesives needed'] },
      { title: 'Dental Crowns', desc: 'Same-day CEREC crowns restore damaged teeth with precision-milled ceramic.', benefits: ['Same-day CEREC crowns', 'Metal-free options', 'Perfect color match', 'Protects weak teeth'] },
      { title: 'Dental Bridges', desc: 'Fixed bridges replace missing teeth and restore your smile and bite.', benefits: ['Fixed — no removal', 'Natural appearance', 'Restores bite function', 'Supported by implants or teeth'] },
      { title: 'Root Canal Therapy', desc: 'Modern root canals are comfortable and tooth-saving. Most patients report little to no pain.', benefits: ['Save your natural tooth', 'Virtually painless', 'Same-day treatment', 'No recovery needed'] },
    ],
  },
  {
    id: 'pediatric', label: 'Pediatric Dentistry', icon: '👶',
    services: [
      { title: "Children's Cleanings", desc: "Fun, gentle cleanings that teach kids great habits and make dentistry enjoyable.", benefits: ['Kid-friendly environment', 'Educational & fun', 'Fluoride treatment', 'Dental sealants'] },
      { title: 'Dental Sealants', desc: "Protective coatings that prevent cavities in children's back teeth.", benefits: ['Prevents up to 80% of cavities', 'Quick & painless', 'Lasts 5-10 years', 'Highly recommended by ADA'] },
      { title: 'Orthodontic Evaluation', desc: "Early evaluation ensures your child's smile develops correctly.", benefits: ['Ages 7+ screening', 'Early intervention saves time', 'Space maintainers', 'Invisalign Teen available'] },
      { title: 'Pulp Therapy', desc: 'Baby tooth root canals that save primary teeth until permanent ones are ready.', benefits: ['Saves baby teeth', 'Prevents premature loss', 'Pain-free with sedation', 'Protects permanent teeth'] },
    ],
  },
];

function ServiceDetailCard({ title, desc, benefits, setPage }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.white,
        borderRadius: '16px',
        padding: '32px',
        boxShadow: hov ? '0 12px 40px rgba(27,48,112,0.12)' : '0 2px 12px rgba(27,48,112,0.06)',
        transition: 'all 0.3s',
        transform: hov ? 'translateY(-4px)' : 'none',
        border: `1px solid ${C.grayMid}`,
      }}
    >
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: C.navy, marginBottom: '12px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: C.textMuted, lineHeight: 1.75, marginBottom: '20px' }}>{desc}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '24px' }}>
        {benefits.map(b => (
          <div key={b} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: C.text }}>
            <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
          </div>
        ))}
      </div>
      <Btn variant="ghost" onClick={() => setPage('book')} small>Book Consultation</Btn>
    </div>
  );
}

export default function ServicesPage({ setPage }) {
  const [active, setActive] = useState('general');
  const cat = CATEGORIES.find(c => c.id === active);

  return (
    <div style={{ paddingTop: '80px' }}>
      <div style={{
        background: `linear-gradient(160deg,${C.navyDark} 0%,${C.navy} 100%)`,
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <SectionTag>Our Services</SectionTag>
        <Heading level={1} light center style={{ marginBottom: '16px' }}>
          Comprehensive Care Under One Roof
        </Heading>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto' }}>
          From your child's first check-up to full-mouth restoration, we have you covered.
        </p>
      </div>

      {/* Category Tabs */}
      <div style={{
        background: C.white,
        borderBottom: `1px solid ${C.grayMid}`,
        position: 'sticky',
        top: '68px',
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '4px',
          padding: '0 24px',
          overflowX: 'auto',
        }}>
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '20px 24px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: active === c.id ? C.navy : C.textMuted,
                borderBottom: active === c.id ? `3px solid ${C.red}` : '3px solid transparent',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>
      </div>

      <section style={{ padding: '80px 24px', background: C.cream }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px' }}>
            {cat.services.map(s => (
              <ServiceDetailCard key={s.title} {...s} setPage={setPage} />
            ))}
          </div>
        </div>
      </section>

      <CTASection setPage={setPage} />
    </div>
  );
}
