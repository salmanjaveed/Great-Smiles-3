import { C } from '../tokens';

const INSURERS = ['Aetna', 'Delta Dental', 'Cigna', 'BlueCross', 'MetLife', 'United Healthcare'];

export default function InsuranceBar() {
  return (
    <section style={{
      background: C.white,
      borderBottom: `1px solid ${C.grayMid}`,
      padding: '20px 24px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <span style={{
          fontSize: '13px',
          fontWeight: 700,
          color: C.textMuted,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          flexShrink: 0,
        }}>
          Insurance Accepted:
        </span>
        {INSURERS.map(i => (
          <div key={i} style={{
            padding: '8px 20px',
            border: `1px solid ${C.grayMid}`,
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 600,
            color: C.textMuted,
            background: C.grayLight,
          }}>
            {i}
          </div>
        ))}
        <span style={{ fontSize: '13px', color: C.red, fontWeight: 600, cursor: 'pointer' }}>
          + Many More
        </span>
      </div>
    </section>
  );
}
