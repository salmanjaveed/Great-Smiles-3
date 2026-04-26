import { C } from '../tokens';
import SectionTag from '../components/SectionTag';
import Heading from '../components/Heading';
import CTASection from '../components/CTASection';
import DrName from '../components/DrName';

const TEAM = [
  { name: 'Lisa Torres', role: 'Dental Hygienist', note: '10+ years of gentle care' },
  { name: 'Maria Chen', role: 'Patient Coordinator', note: 'Your first friendly face' },
  { name: 'James Okafor', role: 'Dental Assistant', note: 'CEREC & digital imaging' },
  { name: 'Priya Sharma', role: 'Office Manager', note: 'Insurance & billing expert' },
];

const VALUES = [
  { icon: '❤️', title: 'Compassion First', desc: 'We treat every patient like family, with kindness and genuine concern.' },
  { icon: '🎯', title: 'Clinical Excellence', desc: 'Continuous education and advanced technology for the best outcomes.' },
  { icon: '🔍', title: 'Transparency', desc: 'Clear communication about your dental health and treatment costs.' },
  { icon: '🌱', title: 'Long-Term Relationships', desc: 'We invest in your smile for years, not just a single appointment.' },
];

export default function AboutPage({ setPage }) {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <div style={{
        background: `linear-gradient(160deg,${C.navyDark} 0%,${C.navy} 100%)`,
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <SectionTag>Our Story</SectionTag>
          <Heading level={1} light center style={{ marginBottom: '20px' }}>
            More Than a Dental Office —<br />We're Your Smile Partner
          </Heading>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Founded in 2009 with a simple mission: deliver world-class dental care with
            small-town warmth, right here in Frisco, Texas.
          </p>
        </div>
      </div>

      {/* Story */}
      <section style={{ padding: '100px 24px', background: C.cream }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          <div>
            <SectionTag>Our Mission</SectionTag>
            <Heading level={2} style={{ marginBottom: '20px' }}>Dentistry That Changes Lives</Heading>
            {[
              'When Dr. Zakia Sultana opened Great Smiles Dental in 2009, she had a vision: to create a practice where patients looked forward to their appointments. Where anxiety was replaced with confidence, and where every treatment was delivered with technical mastery and human warmth.',
              "Today, that vision is alive in every interaction — from the moment you walk through our doors to the day you leave with your healthiest, most beautiful smile yet. We are proud to be Frisco's most trusted dental home.",
            ].map((t, i) => (
              <p key={i} style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: '16px', fontSize: '1.05rem' }}>
                {t}
              </p>
            ))}
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(27,48,112,0.15)' }}>
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80"
              alt="Clinic interior"
              style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              onError={e => {
                e.target.outerHTML = `<div style="width:100%;height:420px;background:#F5F4F0;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:12px;color:#9CA3AF">dental office interior photo</div>`;
              }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 24px', background: C.grayLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <SectionTag>Our Values</SectionTag>
            <Heading level={2} center>What We Stand For</Heading>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
            {VALUES.map(v => (
              <div key={v.title} style={{
                background: C.white,
                borderRadius: '16px',
                padding: '28px 24px',
                boxShadow: '0 2px 12px rgba(27,48,112,0.06)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: C.navy, marginBottom: '10px' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: C.textMuted, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '100px 24px', background: C.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <SectionTag>The Team</SectionTag>
            <Heading level={2} center>Friendly Faces Behind Every Smile</Heading>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
            {TEAM.map(m => (
              <div key={m.name} style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(27,48,112,0.08)',
                background: C.cream,
              }}>
                <div style={{
                  height: '200px',
                  background: `linear-gradient(135deg,${C.navy}12,${C.grayMid})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="22" r="12" stroke={C.textLight} strokeWidth="1.5" />
                    <path d="M6 58c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke={C.textLight} strokeWidth="1.5" />
                  </svg>
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: C.navy, marginBottom: '4px' }}>
                    {m.name}
                  </h4>
                  <div style={{ fontSize: '13px', color: C.red, fontWeight: 600, marginBottom: '6px' }}>{m.role}</div>
                  <div style={{ fontSize: '12.5px', color: C.textMuted }}>{m.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection setPage={setPage} />
    </div>
  );
}
