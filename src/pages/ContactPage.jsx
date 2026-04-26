import { useState } from 'react';
import { C } from '../tokens';
import Btn from '../components/Btn';
import SectionTag from '../components/SectionTag';
import Heading from '../components/Heading';
import InfoBlock from '../components/InfoBlock';

const HOURS = [
  { day: 'Monday – Thursday', time: '8:00 AM – 6:00 PM' },
  { day: 'Friday', time: '8:00 AM – 4:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  border: `1.5px solid ${C.grayMid}`,
  borderRadius: '10px',
  fontSize: '15px',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  background: C.white,
  color: C.text,
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: C.text,
  marginBottom: '6px',
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div style={{ paddingTop: '80px' }}>
      <div style={{
        background: `linear-gradient(160deg,${C.navyDark} 0%,${C.navy} 100%)`,
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <SectionTag>Get in Touch</SectionTag>
        <Heading level={1} light center style={{ marginBottom: '16px' }}>We'd Love to Hear From You</Heading>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem' }}>
          Questions, concerns, or just want to say hello — we're here.
        </p>
      </div>

      <section style={{ padding: '80px 24px', background: C.cream }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
        }}>
          {/* Contact Info */}
          <div>
            <Heading level={2} style={{ marginBottom: '32px' }}>Contact Information</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <InfoBlock icon="📍" title="Office Address">
                5200 Legacy Drive, Suite 200<br />Frisco, TX 75034
              </InfoBlock>
              <InfoBlock icon="📞" title="Phone">(469) 555-0100</InfoBlock>
              <InfoBlock icon="✉️" title="Email">hello@greatsmilesdental.com</InfoBlock>
              <InfoBlock icon="🌐" title="Website">www.greatsmilesdental.com</InfoBlock>
            </div>

            <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: C.navy, marginBottom: '16px' }}>
              Office Hours
            </h4>
            {HOURS.map(h => (
              <div key={h.day} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: `1px solid ${C.grayMid}`,
                fontSize: '14px',
              }}>
                <span style={{ fontWeight: 500, color: C.text }}>{h.day}</span>
                <span style={{ color: h.time === 'Closed' ? C.red : C.textMuted, fontWeight: h.time === 'Closed' ? 600 : 400 }}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          {!sent ? (
            <div style={{ background: C.white, borderRadius: '20px', padding: '40px', boxShadow: '0 4px 30px rgba(27,48,112,0.08)' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: C.navy, marginBottom: '24px' }}>
                Send Us a Message
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input value={form.name} onChange={update('name')} placeholder="Your name" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = C.navy}
                      onBlur={e => e.target.style.borderColor = C.grayMid} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input value={form.phone} onChange={update('phone')} placeholder="(469) 000-0000" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = C.navy}
                      onBlur={e => e.target.style.borderColor = C.grayMid} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input value={form.email} onChange={update('email')} type="email" placeholder="you@email.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = C.navy}
                    onBlur={e => e.target.style.borderColor = C.grayMid} />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea value={form.message} onChange={update('message')} rows={5} placeholder="How can we help?" style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = C.navy}
                    onBlur={e => e.target.style.borderColor = C.grayMid} />
                </div>
              </div>
              <Btn
                onClick={() => setSent(true)}
                style={{ marginTop: '24px', width: '100%', justifyContent: 'center', fontSize: '16px', padding: '15px' }}
              >
                Send Message →
              </Btn>
            </div>
          ) : (
            <div style={{ background: C.white, borderRadius: '20px', padding: '60px 40px', boxShadow: '0 4px 30px rgba(27,48,112,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
              <Heading level={3} center style={{ marginBottom: '12px' }}>Message Received!</Heading>
              <p style={{ color: C.textMuted, lineHeight: 1.7 }}>
                Thank you for reaching out. We'll get back to you within one business day.
                Or call us directly at <strong>(469) 555-0100</strong>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Map placeholder */}
      <div style={{
        height: '350px',
        background: `linear-gradient(135deg,${C.navy}10,${C.grayMid})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '12px',
        borderTop: `1px solid ${C.grayMid}`,
      }}>
        <span style={{ fontSize: '2.5rem' }}>🗺️</span>
        <span style={{ fontFamily: 'monospace', fontSize: '13px', color: C.textMuted }}>
          Google Maps — 5200 Legacy Drive, Frisco TX 75034
        </span>
      </div>
    </div>
  );
}
