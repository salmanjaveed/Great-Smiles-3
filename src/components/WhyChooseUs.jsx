import { C } from '../tokens';
import SectionTag from './SectionTag';
import Heading from './Heading';

const REASONS = [
  { icon: '🏆', title: 'Award-Winning Care', desc: 'Recognized as a top Frisco dental practice for patient satisfaction and clinical excellence.' },
  { icon: '🔬', title: 'Advanced Technology', desc: 'Digital X-rays, 3D imaging, and same-day CEREC crowns for precise, efficient treatment.' },
  { icon: '💙', title: 'Gentle Dentistry', desc: 'We specialize in anxiety-free dentistry with a calm, caring approach for nervous patients.' },
  { icon: '💳', title: 'Flexible Payment', desc: 'Interest-free financing, insurance billing, and transparent pricing with no surprises.' },
  { icon: '⏰', title: 'Convenient Hours', desc: 'Early morning, evening, and Saturday appointments to fit your busy schedule.' },
  { icon: '🚨', title: 'Emergency Care', desc: "Same-day emergency appointments available. We're here when you need us most." },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: '100px 24px', background: C.white }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionTag>Why Choose Us</SectionTag>
          <Heading level={2} center>The Great Smiles Difference</Heading>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
          {REASONS.map(r => (
            <div key={r.title} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: `linear-gradient(135deg,${C.navy}12,${C.red}08)`,
                border: `1px solid ${C.grayMid}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}>
                {r.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: C.navy, marginBottom: '8px' }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: C.textMuted, lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
