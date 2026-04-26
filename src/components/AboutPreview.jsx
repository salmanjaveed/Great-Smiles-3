import { C } from '../tokens';
import Btn from './Btn';
import SectionTag from './SectionTag';
import Heading from './Heading';
import DrName from './DrName';

export default function AboutPreview({ setPage }) {
  return (
    <section style={{ padding: '100px 24px', background: C.cream }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        {/* Image stack */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', top: '-20px', left: '-20px',
            width: '240px', height: '240px',
            background: `linear-gradient(135deg,${C.navy}15,${C.red}08)`,
            borderRadius: '50%', zIndex: 0,
          }} />

          {/* Main image */}
          <div style={{
            position: 'relative', zIndex: 1,
            borderRadius: '20px', overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(27,48,112,0.18)',
          }}>
            <img
              src="/uploads/dental-implant-1.jpg"
              alt="Happy patient"
              style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

          {/* Smaller overlapping image */}
          <div style={{
            position: 'absolute', bottom: '-28px', right: '-28px',
            width: '190px', height: '140px',
            borderRadius: '14px', overflow: 'hidden',
            boxShadow: '0 10px 35px rgba(27,48,112,0.22)',
            border: `3px solid ${C.white}`,
            zIndex: 3,
          }}>
            <img
              src="/uploads/about-us.jpg"
              alt="Our clinic"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* Badge */}
          <div style={{
            position: 'absolute', top: '20px', left: '-20px',
            background: C.navy, borderRadius: '14px', padding: '14px 18px',
            boxShadow: '0 8px 30px rgba(27,48,112,0.28)', zIndex: 4, textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: C.white, lineHeight: 1 }}>
              15+
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.70)', fontWeight: 500, marginTop: '4px' }}>
              Years of Care
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionTag>About Us</SectionTag>
          <Heading level={2} style={{ marginBottom: '20px' }}>
            Caring for Smiles in<br />Frisco Since 2009
          </Heading>
          <p style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: '20px', fontSize: '1.05rem' }}>
            At The Great Smiles Dental, we believe every patient deserves a healthy, beautiful smile
            delivered with compassion and expertise. Our state-of-the-art Frisco practice combines
            the warmth of a family dentist with the precision of modern technology.
          </p>
          <p style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: '32px', fontSize: '1.05rem' }}>
            Led by <DrName>Dr. Zakia Sultana</DrName>, our dedicated team is committed to making
            every visit comfortable, transparent, and effective — from first check-up to final smile.
          </p>
          <div style={{ display: 'flex', gap: '24px', marginBottom: '36px' }}>
            {['Patient-First', 'Transparent Pricing', 'Gentle Touch'].map(v => (
              <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: C.red, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '11px', color: 'white', flexShrink: 0,
                }}>
                  ✓
                </div>
                <span style={{ fontSize: '14px', fontWeight: 500, color: C.text }}>{v}</span>
              </div>
            ))}
          </div>
          <Btn variant="navy" onClick={() => setPage('about')}>Meet Our Team →</Btn>
        </div>
      </div>
    </section>
  );
}
