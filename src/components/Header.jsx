import { useState, useEffect } from 'react';
import { C } from '../tokens';
import Btn from './Btn';

const NAV = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  {
    label: 'Services',
    page: 'services',
    sub: ['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Pediatric Dentistry'],
  },
  { label: 'Book Appointment', page: 'book' },
  { label: 'Contact', page: 'contact' },
];

export default function Header({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const isHome = page === 'home';
  const solid = scrolled || !isHome;
  const bg = solid ? 'rgba(255,255,255,0.97)' : 'transparent';
  const shadow = solid ? '0 2px 20px rgba(27,48,112,0.10)' : 'none';
  const textColor = solid ? C.navy : C.white;

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: bg,
      boxShadow: shadow,
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.35s ease',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scrolled ? '68px' : '80px',
        transition: 'height 0.35s ease',
      }}>
        {/* Logo */}
        <div
          onClick={() => setPage('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <img
            src="/uploads/great-smiles-dental-new-logo.png"
            alt="Great Smiles Dental"
            style={{
              height: solid ? '44px' : '52px',
              transition: 'height 0.35s ease',
              filter: solid ? 'none' : 'brightness(0) invert(1)',
            }}
          />
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {NAV.map(n => (
            <div
              key={n.page}
              style={{ position: 'relative' }}
              onMouseEnter={() => n.sub && setDropdown(n.page)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                onClick={() => { setPage(n.page); setDropdown(null); }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: textColor,
                  fontFamily: 'Inter, sans-serif',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                  opacity: page === n.page ? 1 : 0.85,
                  borderBottom: page === n.page ? `2px solid ${C.red}` : '2px solid transparent',
                }}
              >
                {n.label}
                {n.sub && <span style={{ marginLeft: '4px', fontSize: '10px' }}>▾</span>}
              </button>

              {n.sub && dropdown === n.page && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: C.white,
                  borderRadius: '12px',
                  boxShadow: '0 8px 30px rgba(27,48,112,0.15)',
                  padding: '8px',
                  minWidth: '220px',
                  animation: 'slideDown 0.2s ease',
                }}>
                  {n.sub.map(s => (
                    <div
                      key={s}
                      onClick={() => { setPage('services'); setDropdown(null); }}
                      style={{
                        padding: '10px 16px',
                        fontSize: '14px',
                        color: C.text,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = C.grayLight}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Btn onClick={() => setPage('book')} small style={{ marginLeft: '8px' }}>
            Book Now
          </Btn>
        </nav>
      </div>
    </header>
  );
}
