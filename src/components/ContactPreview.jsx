import { C } from '../tokens';
import SectionTag from './SectionTag';
import Heading from './Heading';
import InfoBlock from './InfoBlock';

const HOURS = [
  { day: 'Mon – Thu', time: '8:00 AM – 6:00 PM' },
  { day: 'Friday', time: '8:00 AM – 4:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactPreview({ setPage }) {
  return (
    <section style={{ padding: '100px 24px', background: C.cream }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}>
        <div>
          <SectionTag>Find Us</SectionTag>
          <Heading level={2} style={{ marginBottom: '28px' }}>Visit Our Frisco Office</Heading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <InfoBlock icon="📍" title="Address">
              5200 Legacy Drive, Suite 200<br />Frisco, TX 75034
            </InfoBlock>
            <InfoBlock icon="📞" title="Phone">(469) 555-0100</InfoBlock>
            <InfoBlock icon="✉️" title="Email">hello@greatsmilesdental.com</InfoBlock>
          </div>
          <div style={{ marginTop: '36px' }}>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: C.navy, marginBottom: '16px' }}>
              Office Hours
            </h4>
            {HOURS.map(h => (
              <div key={h.day} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: `1px solid ${C.grayMid}`,
                fontSize: '14px',
              }}>
                <span style={{ color: C.text, fontWeight: 500 }}>{h.day}</span>
                <span style={{ color: h.time === 'Closed' ? C.red : C.textMuted }}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(27,48,112,0.10)',
          height: '400px',
          background: C.grayLight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '12px',
          border: `1px solid ${C.grayMid}`,
        }}>
          <span style={{ fontSize: '2rem' }}>🗺️</span>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', color: C.textLight }}>Google Maps embed</span>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: C.textLight }}>5200 Legacy Drive, Frisco TX</span>
        </div>
      </div>
    </section>
  );
}
