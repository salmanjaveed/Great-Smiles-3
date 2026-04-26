import { useState, useEffect } from 'react';
import { C } from '../tokens';
import Btn from './Btn';
import Heading from './Heading';

export default function Hero({ setPage, headline = 'Your Confident Smile Starts Here' }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Parallax background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        transform: `translateY(${scrollY * 0.4}px)`,
        transition: 'transform 0.1s linear',
      }}>
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80"
          alt=""
          style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center top' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,10,18,0.78) 0%, rgba(20,20,35,0.60) 55%, rgba(10,10,18,0.65) 100%)',
        }} />
      </div>

      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'rgba(204,34,41,0.08)', filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: '-60px', bottom: '10%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(42,64,152,0.15)', filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ maxWidth: '680px' }}>
          <div className="animate-fadeUp" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '2px', background: C.red }} />
            <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
              Frisco, Texas • Family Dentistry
            </span>
          </div>

          <Heading level={1} light className="animate-fadeUp delay-1" style={{ marginBottom: '20px', lineHeight: 1.08 }}>
            Your Confident<br />
            <em style={{ color: '#E8A4A7', fontStyle: 'italic' }}>Smile</em> Starts Here
          </Heading>

          <p className="animate-fadeUp delay-2" style={{
            fontSize: 'clamp(1rem,2vw,1.2rem)',
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.7,
            marginBottom: '36px',
            maxWidth: '520px',
          }}>
            Premium, compassionate dental care for the whole family. Experience the difference
            that gentle expertise and modern technology make.
          </p>

          <div className="animate-fadeUp delay-3" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Btn onClick={() => setPage('book')} style={{ fontSize: '16px', padding: '16px 36px' }}>
              📅 Book Appointment
            </Btn>
            <Btn variant="outline" onClick={() => window.open('tel:+14695550100')} style={{ fontSize: '16px', padding: '16px 36px' }}>
              📞 (469) 555-0100
            </Btn>
          </div>

          {/* Trust pills */}
          <div className="animate-fadeUp delay-4" style={{ display: 'flex', gap: '20px', marginTop: '48px', flexWrap: 'wrap' }}>
            {['⭐ 500+ 5-Star Reviews', '✓ Insurance Accepted', '✓ Same-Day Emergency'].map(t => (
              <div key={t} style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.20)',
                borderRadius: '50px',
                padding: '8px 18px',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.90)',
                fontWeight: 500,
              }}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.6,
      }}>
        <span style={{ fontSize: '11px', color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.4)', animation: 'pulse 2s infinite' }} />
      </div>
    </section>
  );
}
