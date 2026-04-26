import { useState, useEffect } from 'react';
import { C } from '../tokens';
import SectionTag from './SectionTag';
import Heading from './Heading';

const REVIEWS = [
  { name: 'Jennifer M.', loc: 'Frisco, TX', text: "Dr. Sultana and her team are absolutely incredible. I used to fear the dentist, but now I look forward to my visits. They transformed my smile with Invisalign!", rating: 5 },
  { name: 'Robert K.', loc: 'Allen, TX', text: "Had a dental emergency and they saw me the same day. Completely painless root canal — I couldn't believe it. The whole staff made me feel so at ease.", rating: 5 },
  { name: 'Amanda L.', loc: 'McKinney, TX', text: "Best dental experience I've ever had. Transparent pricing, no upselling, just honest, excellent care. My whole family comes here now.", rating: 5 },
  { name: 'David C.', loc: 'Plano, TX', text: "Got dental implants here after years of putting it off. The result is life-changing. Dr. Sultana is truly a perfectionist in the best possible way.", rating: 5 },
];

function ReviewCard({ name, loc, text, rating, featured }) {
  return (
    <div style={{
      background: featured ? C.navy : C.white,
      borderRadius: '16px',
      padding: '28px',
      boxShadow: featured ? '0 12px 40px rgba(27,48,112,0.25)' : '0 2px 12px rgba(27,48,112,0.06)',
      transition: 'all 0.4s ease',
      transform: featured ? 'scale(1.02)' : 'scale(1)',
    }}>
      <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} style={{ fontSize: '14px' }}>⭐</span>
        ))}
      </div>
      <p style={{
        fontSize: '14px',
        lineHeight: 1.75,
        color: featured ? 'rgba(255,255,255,0.85)' : C.textMuted,
        marginBottom: '20px',
        fontStyle: 'italic',
      }}>
        "{text}"
      </p>
      <div>
        <div style={{ fontWeight: 700, fontSize: '14px', color: featured ? C.white : C.navy }}>{name}</div>
        <div style={{ fontSize: '12px', color: featured ? 'rgba(255,255,255,0.55)' : C.textLight }}>{loc}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ padding: '100px 24px', background: C.grayLight }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionTag>Patient Stories</SectionTag>
          <Heading level={2} center>What Our Patients Say</Heading>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.name} {...r} featured={i === active} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
          {REVIEWS.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 28 : 8,
                height: '8px',
                borderRadius: '4px',
                background: i === active ? C.red : C.grayMid,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
