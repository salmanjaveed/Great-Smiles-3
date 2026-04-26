import { useState } from 'react';
import { C } from '../tokens';
import Btn from '../components/Btn';
import SectionTag from '../components/SectionTag';
import Heading from '../components/Heading';

const SERVICES = [
  'Routine Cleaning & Exam',
  'Teeth Whitening',
  'Invisalign Consultation',
  'Dental Implants',
  'Porcelain Veneers',
  'Crowns & Bridges',
  'Root Canal',
  'Emergency Visit',
  'Other',
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
  transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: C.text,
  marginBottom: '6px',
  letterSpacing: '0.02em',
};

export default function BookPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', service: '', message: '' });
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 1 && validate()) setStep(2);
    else if (step === 2) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: '80px', minHeight: '100vh', background: C.cream, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          textAlign: 'center',
          padding: '60px 40px',
          background: C.white,
          borderRadius: '24px',
          boxShadow: '0 10px 40px rgba(27,48,112,0.10)',
          maxWidth: '500px',
          margin: '24px',
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🎉</div>
          <Heading level={2} center style={{ marginBottom: '16px' }}>You're All Set!</Heading>
          <p style={{ color: C.textMuted, lineHeight: 1.7, marginBottom: '32px' }}>
            We've received your appointment request. Our team will call you within 2 hours to
            confirm your time. Welcome to the Great Smiles family!
          </p>
          <div style={{ background: C.grayLight, borderRadius: '12px', padding: '20px', marginBottom: '28px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', color: C.textMuted, marginBottom: '4px' }}>Appointment Request For:</div>
            <div style={{ fontWeight: 700, color: C.navy, fontSize: '16px' }}>{form.name}</div>
            <div style={{ fontSize: '14px', color: C.textMuted, marginTop: '4px' }}>
              {form.service || 'General Consultation'} · {form.date || 'Flexible'}
            </div>
          </div>
          <p style={{ fontSize: '13px', color: C.textMuted }}>
            Questions? Call <strong style={{ color: C.navy }}>(469) 555-0100</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: C.cream }}>
      <div style={{
        background: `linear-gradient(160deg,${C.navyDark} 0%,${C.navy} 100%)`,
        padding: '60px 24px',
        textAlign: 'center',
      }}>
        <SectionTag>Schedule a Visit</SectionTag>
        <Heading level={1} light center style={{ marginBottom: '16px' }}>Book Your Appointment</Heading>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem' }}>
          Quick, easy, and free. We'll confirm within 2 hours.
        </p>
      </div>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '60px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: '40px',
        alignItems: 'start',
      }}>
        {/* Form */}
        <div style={{ background: C.white, borderRadius: '20px', padding: '40px', boxShadow: '0 4px 30px rgba(27,48,112,0.08)' }}>
          {/* Progress */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '36px' }}>
            {[1, 2].map(n => (
              <div key={n} style={{ display: 'contents' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: step >= n ? C.navy : C.grayLight,
                    color: step >= n ? C.white : C.textMuted,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontWeight: 700, flexShrink: 0, transition: 'all 0.3s',
                  }}>
                    {n}
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: step === n ? 700 : 500, color: step === n ? C.navy : C.textMuted }}>
                    {n === 1 ? 'Your Info' : 'Preferences'}
                  </span>
                </div>
                {n < 2 && (
                  <div style={{ flex: 1, height: '2px', background: step > n ? C.navy : C.grayMid, borderRadius: '1px', transition: 'background 0.3s' }} />
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Smith"
                    style={{ ...inputStyle, borderColor: errors.name ? C.red : C.grayMid }}
                    onFocus={e => e.target.style.borderColor = C.navy}
                    onBlur={e => e.target.style.borderColor = errors.name ? C.red : C.grayMid}
                  />
                  {errors.name && <div style={{ fontSize: '12px', color: C.red, marginTop: '4px' }}>{errors.name}</div>}
                </div>
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="(469) 555-0000"
                    style={{ ...inputStyle, borderColor: errors.phone ? C.red : C.grayMid }}
                    onFocus={e => e.target.style.borderColor = C.navy}
                    onBlur={e => e.target.style.borderColor = errors.phone ? C.red : C.grayMid}
                  />
                  {errors.phone && <div style={{ fontSize: '12px', color: C.red, marginTop: '4px' }}>{errors.phone}</div>}
                </div>
              </div>
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input
                  value={form.email}
                  onChange={update('email')}
                  type="email"
                  placeholder="jane@example.com"
                  style={{ ...inputStyle, borderColor: errors.email ? C.red : C.grayMid }}
                  onFocus={e => e.target.style.borderColor = C.navy}
                  onBlur={e => e.target.style.borderColor = errors.email ? C.red : C.grayMid}
                />
                {errors.email && <div style={{ fontSize: '12px', color: C.red, marginTop: '4px' }}>{errors.email}</div>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Service Needed</label>
                <select
                  value={form.service}
                  onChange={update('service')}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = C.navy}
                  onBlur={e => e.target.style.borderColor = C.grayMid}
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Preferred Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={update('date')}
                  style={inputStyle}
                  min={new Date().toISOString().split('T')[0]}
                  onFocus={e => e.target.style.borderColor = C.navy}
                  onBlur={e => e.target.style.borderColor = C.grayMid}
                />
              </div>
              <div>
                <label style={labelStyle}>Additional Notes</label>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  placeholder="Any concerns, allergies, or questions..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = C.navy}
                  onBlur={e => e.target.style.borderColor = C.grayMid}
                />
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'space-between' }}>
            {step > 1 && <Btn variant="ghost" onClick={() => setStep(s => s - 1)}>← Back</Btn>}
            <div style={{ marginLeft: 'auto' }}>
              <Btn onClick={next}>{step === 2 ? 'Confirm Request 🎉' : 'Next Step →'}</Btn>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: C.white, borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(27,48,112,0.06)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: C.navy, marginBottom: '16px' }}>
              Why Book Online?
            </h3>
            {['Instant confirmation within 2 hours', 'Choose your preferred time', 'No phone hold times', 'Easy rescheduling anytime'].map(t => (
              <div key={t} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px', fontSize: '13.5px', color: C.textMuted }}>
                <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>✓</span>{t}
              </div>
            ))}
          </div>

          <div style={{ background: C.navy, borderRadius: '16px', padding: '28px', color: 'white' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📞</div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, marginBottom: '8px' }}>Prefer to Call?</h4>
            <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.72)', marginBottom: '14px' }}>
              Our friendly team is ready to help Mon–Sat.
            </p>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: C.white }}>(469) 555-0100</div>
          </div>

          <div style={{ background: `${C.red}12`, border: `1px solid ${C.red}25`, borderRadius: '16px', padding: '20px' }}>
            <div style={{ fontWeight: 700, color: C.red, marginBottom: '6px', fontSize: '14px' }}>🎁 New Patient Special</div>
            <div style={{ fontSize: '13px', color: C.textMuted }}>
              Exam + X-Rays + Cleaning for just{' '}
              <strong style={{ color: C.navy }}>$99</strong> (reg. $250)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
