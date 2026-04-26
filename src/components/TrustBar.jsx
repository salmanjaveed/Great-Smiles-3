import { useState, useEffect, useRef } from 'react';
import { C } from '../tokens';
import { useCountUp } from '../hooks/useCountUp';

function StatItem({ n, label }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const match = n.match(/^([\d,]+)(\+|%)?$/);
  const numericTarget = match ? parseInt(match[1].replace(',', ''), 10) : null;
  const suffix = match ? (match[2] || '') : '';
  const count = useCountUp(numericTarget || 0, 2200, inView);

  useEffect(() => {
    if (inView && numericTarget != null && count >= numericTarget) setDone(true);
  }, [count, inView, numericTarget]);

  const display = numericTarget != null
    ? (numericTarget >= 1000 ? count.toLocaleString() : count) + suffix
    : n;

  const counting = inView && !done;

  return (
    <div ref={ref} style={{
      textAlign: 'center',
      padding: '16px 8px',
      transition: 'transform 0.3s',
      transform: counting ? 'scale(1.06)' : 'scale(1)',
    }}>
      <div style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '2.4rem',
        fontWeight: 700,
        lineHeight: 1,
        color: C.white,
        textShadow: counting
          ? '0 0 20px rgba(255,255,255,0.5),0 0 40px rgba(255,200,200,0.3)'
          : 'none',
        transition: 'text-shadow 0.3s',
        opacity: inView ? 1 : 0,
      }}>
        {display}
      </div>
      <div style={{
        fontSize: '13px',
        color: 'rgba(255,255,255,0.65)',
        marginTop: '8px',
        fontWeight: 500,
        letterSpacing: '0.02em',
      }}>
        {label}
      </div>
    </div>
  );
}

export default function TrustBar() {
  const stats = [
    { n: '15+', label: 'Years of Excellence' },
    { n: '8000+', label: 'Happy Patients' },
    { n: '98%', label: 'Patient Satisfaction' },
    { n: '30+', label: 'Services Offered' },
  ];

  return (
    <section style={{ background: C.navy, padding: '28px 24px' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '16px',
      }}>
        {stats.map(s => <StatItem key={s.n} {...s} />)}
      </div>
    </section>
  );
}
