import { useState } from 'react';
import { C } from '../tokens';

export default function Btn({ children, variant = 'primary', onClick, style = {}, small = false }) {
  const [hov, setHov] = useState(false);

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    transition: 'all 0.25s ease',
    letterSpacing: '0.01em',
    borderRadius: '50px',
  };

  const sizes = {
    padding: small ? '10px 22px' : '14px 32px',
    fontSize: small ? '13px' : '15px',
  };

  const variants = {
    primary: {
      background: hov ? C.redLight : C.red,
      color: C.white,
      boxShadow: hov
        ? '0 8px 25px rgba(204,34,41,0.4)'
        : '0 4px 15px rgba(204,34,41,0.25)',
      transform: hov ? 'translateY(-2px)' : 'none',
    },
    outline: {
      background: 'transparent',
      color: C.white,
      border: '2px solid rgba(255,255,255,0.7)',
      backdropFilter: 'blur(8px)',
      transform: hov ? 'translateY(-2px)' : 'none',
      opacity: hov ? 1 : 0.9,
    },
    navy: {
      background: hov ? C.navyLight : C.navy,
      color: C.white,
      boxShadow: hov
        ? '0 8px 25px rgba(27,48,112,0.4)'
        : '0 4px 15px rgba(27,48,112,0.2)',
      transform: hov ? 'translateY(-2px)' : 'none',
    },
    ghost: {
      background: 'transparent',
      color: C.navy,
      border: `2px solid ${C.navy}`,
      transform: hov ? 'translateY(-2px)' : 'none',
      boxShadow: hov ? '0 4px 15px rgba(27,48,112,0.15)' : 'none',
    },
  };

  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{ ...base, ...sizes, ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
}
