import { C } from '../tokens';

const sizes = {
  1: { fontSize: 'clamp(2.4rem,5vw,3.8rem)', lineHeight: 1.1 },
  2: { fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', lineHeight: 1.2 },
  3: { fontSize: 'clamp(1.3rem,2.5vw,1.6rem)', lineHeight: 1.3 },
};

export default function Heading({ children, level = 2, light = false, center = false, style = {} }) {
  const Tag = `h${level}`;
  return (
    <Tag style={{
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      color: light ? C.white : C.navy,
      textAlign: center ? 'center' : 'left',
      ...sizes[level],
      ...style,
    }}>
      {children}
    </Tag>
  );
}
