import { C } from '../tokens';

export default function DrName({ children, light = false }) {
  return (
    <span style={{
      color: light ? '#FFD580' : C.red,
      fontWeight: 700,
      fontStyle: 'italic',
      fontFamily: 'Playfair Display, serif',
      borderBottom: `1.5px solid ${light ? '#FFD58060' : C.red + '50'}`,
      paddingBottom: '1px',
      letterSpacing: '0.01em',
    }}>
      {children}
    </span>
  );
}
