import { C } from '../tokens';

const LINKS = {
  'Quick Links': [
    { l: 'Home', p: 'home' },
    { l: 'About Us', p: 'about' },
    { l: 'Services', p: 'services' },
    { l: 'Book Appointment', p: 'book' },
    { l: 'Contact', p: 'contact' },
  ],
  Services: [
    { l: 'Dental Implants', p: 'services' },
    { l: 'Invisalign', p: 'services' },
    { l: 'Teeth Whitening', p: 'services' },
    { l: 'Dental Crowns', p: 'services' },
    { l: 'Pediatric Care', p: 'services' },
  ],
};

export default function Footer({ setPage }) {
  return (
    <footer style={{ background: C.navyDark, color: 'rgba(255,255,255,0.70)', padding: '60px 24px 0' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
        gap: '48px',
        marginBottom: '48px',
      }}>
        {/* Brand */}
        <div>
          <img
            src="/uploads/great-smiles-dental-new-logo.png"
            alt="Great Smiles Dental"
            style={{ height: '48px', marginBottom: '20px', filter: 'brightness(0) invert(1)' }}
          />
          <p style={{ fontSize: '14px', lineHeight: 1.8, maxWidth: '280px', marginBottom: '24px' }}>
            Premium, compassionate dental care for the whole family in Frisco, Texas.
            Your smile is our mission.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['f', 'in', 'ig', 'yt'].map(s => (
              <div
                key={s}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.20)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([title, items]) => (
          <div key={title}>
            <h4 style={{
              color: C.white,
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              marginBottom: '16px',
            }}>
              {title}
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {items.map(({ l, p }) => (
                <li key={l} style={{ marginBottom: '10px' }}>
                  <span
                    onClick={() => setPage(p)}
                    style={{ fontSize: '14px', cursor: 'pointer', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = ''}
                  >
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 style={{
            color: C.white,
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            marginBottom: '16px',
          }}>
            Contact
          </h4>
          <div style={{ fontSize: '14px', lineHeight: 1.9 }}>
            <div>📍 5200 Legacy Drive, Suite 200</div>
            <div style={{ paddingLeft: '20px', marginBottom: '4px' }}>Frisco, TX 75034</div>
            <div>📞 (469) 555-0100</div>
            <div>✉️ hello@greatsmilesdental.com</div>
            <div style={{ marginTop: '12px', color: 'rgba(255,255,255,0.50)', fontSize: '13px' }}>
              Mon–Fri 8am–6pm<br />Sat 9am–2pm
            </div>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.10)',
        padding: '20px 0',
        textAlign: 'center',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.40)',
      }}>
        © 2024 Great Smiles Dental. All rights reserved. | 5200 Legacy Drive, Frisco TX 75034
      </div>
    </footer>
  );
}
