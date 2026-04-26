import { C } from '../tokens';
import Btn from './Btn';
import SectionTag from './SectionTag';
import Heading from './Heading';
import DrName from './DrName';

export default function MeetDentist() {
  return (
    <section style={{
      padding: '100px 24px',
      background: `linear-gradient(160deg,${C.navyDark} 0%,${C.navy} 100%)`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'rgba(204,34,41,0.06)', filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div>
          <SectionTag>Meet Your Doctor</SectionTag>
          <Heading level={2} light style={{ marginBottom: '20px' }}>
            Your Confident<br />Smile Starts Here
          </Heading>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '16px', fontSize: '1.05rem' }}>
            <DrName light>Dr. Sultana</DrName> is a proud graduate of the University of Texas School of
            Dentistry and has dedicated her career to creating beautiful, healthy smiles for patients of all ages.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '32px', fontSize: '1.05rem' }}>
            Her approach combines clinical excellence with genuine warmth — she believes dentistry
            should be comfortable, educational, and even enjoyable.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {['UT School of Dentistry', '15+ Years Experience', 'Invisalign Certified', 'CEREC Specialist'].map(c => (
              <div key={c} style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50px',
                padding: '8px 16px',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
              }}>
                {c}
              </div>
            ))}
          </div>
          <Btn onClick={() => {}}>Schedule with Dr. Sultana →</Btn>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}>
            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80"
              alt="Dr. Sultana"
              style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
              onError={e => {
                e.target.outerHTML = `<div style="width:100%;height:480px;background:rgba(255,255,255,0.05);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="15" r="8" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/><path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/></svg><span style="font-family:monospace;font-size:11px;color:rgba(255,255,255,0.35)">Dr. Sultana portrait photo</span></div>`;
              }}
            />
          </div>
          <div style={{
            position: 'absolute', bottom: '-16px', left: '24px',
            background: C.red, borderRadius: '12px', padding: '14px 20px',
            boxShadow: '0 8px 25px rgba(204,34,41,0.4)',
          }}>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
              ⭐⭐⭐⭐⭐ 500+ Reviews
            </div>
            <div style={{ fontSize: '13px', color: 'white', fontWeight: 700, marginTop: '2px' }}>
              "Gentle, expert, caring"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
