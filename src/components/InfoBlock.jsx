import { C } from '../tokens';

export default function InfoBlock({ icon, title, children }) {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        background: `linear-gradient(135deg,${C.navy}12,${C.red}08)`,
        border: `1px solid ${C.grayMid}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: C.textMuted,
          marginBottom: '4px',
        }}>
          {title}
        </div>
        <div style={{ fontSize: '14.5px', color: C.text, lineHeight: 1.6 }}>
          {children}
        </div>
      </div>
    </div>
  );
}
