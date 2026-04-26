import { useState } from 'react';
import { C } from '../tokens';
import Btn from './Btn';
import SectionTag from './SectionTag';
import Heading from './Heading';

const PLANS = [
  {
    title: 'New Patient Special',
    price: '$99',
    orig: '$250',
    items: ['Comprehensive Exam', 'Full X-Rays', 'Professional Cleaning', 'Personalized Care Plan'],
    popular: false,
  },
  {
    title: 'Smile Makeover',
    price: 'From $299/mo',
    orig: null,
    items: ['Invisalign Treatment', 'Teeth Whitening', 'Porcelain Veneers Consult', '0% Financing Available'],
    popular: true,
  },
  {
    title: 'Implant Consultation',
    price: 'Free',
    orig: null,
    items: ['3D Implant Imaging', 'Treatment Planning', 'Cost & Finance Review', 'Same-Day Quotes'],
    popular: false,
  },
];

function PricingCard({ title, price, orig, items, popular, setPage }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: popular ? `2px solid ${C.red}` : `2px solid ${hov ? C.navy : C.grayMid}`,
        borderRadius: '20px',
        padding: '36px 28px',
        background: popular ? `linear-gradient(160deg,${C.navy} 0%,${C.navyDark} 100%)` : C.white,
        transition: 'all 0.3s ease',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? '0 12px 40px rgba(27,48,112,0.15)' : 'none',
        position: 'relative',
      }}
    >
      {popular && (
        <div style={{
          position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
          background: C.red, color: 'white', fontSize: '12px', fontWeight: 700,
          padding: '5px 18px', borderRadius: '50px', letterSpacing: '0.05em',
        }}>
          MOST POPULAR
        </div>
      )}
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: popular ? C.white : C.navy, marginBottom: '12px' }}>
        {title}
      </h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
        <span style={{ fontSize: '2rem', fontWeight: 700, color: popular ? C.white : C.navy, fontFamily: 'Playfair Display, serif' }}>
          {price}
        </span>
      </div>
      {orig && (
        <div style={{ fontSize: '13px', color: popular ? 'rgba(255,255,255,0.55)' : C.textLight, textDecoration: 'line-through', marginBottom: '24px' }}>
          {orig} regular price
        </div>
      )}
      <div style={{ height: '1px', background: popular ? 'rgba(255,255,255,0.15)' : C.grayMid, margin: '20px 0' }} />
      <ul style={{ listStyle: 'none', marginBottom: '28px' }}>
        {items.map(it => (
          <li key={it} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px', fontSize: '14px', color: popular ? 'rgba(255,255,255,0.8)' : C.textMuted }}>
            <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>✓</span>{it}
          </li>
        ))}
      </ul>
      <Btn variant={popular ? 'primary' : 'ghost'} onClick={() => setPage('book')} style={{ width: '100%', justifyContent: 'center' }}>
        Get Started
      </Btn>
    </div>
  );
}

export default function Pricing({ setPage }) {
  return (
    <section style={{ padding: '100px 24px', background: C.white }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionTag>Pricing & Offers</SectionTag>
          <Heading level={2} center>Transparent, Affordable Care</Heading>
          <p style={{ color: C.textMuted, marginTop: '12px', fontSize: '1.05rem' }}>
            No hidden fees. No surprises. Just honest dentistry.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {PLANS.map(p => <PricingCard key={p.title} {...p} setPage={setPage} />)}
        </div>
      </div>
    </section>
  );
}
