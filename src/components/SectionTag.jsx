import { C } from '../tokens';

export default function SectionTag({ children }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
      <div style={{ width: '30px', height: '2px', background: C.red, borderRadius: '2px' }} />
      <span style={{
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: C.red,
      }}>
        {children}
      </span>
      <div style={{ width: '30px', height: '2px', background: C.red, borderRadius: '2px' }} />
    </div>
  );
}
