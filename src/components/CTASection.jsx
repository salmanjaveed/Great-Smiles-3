import { C } from '../tokens';
import Btn from './Btn';
import Heading from './Heading';

export default function CTASection({ setPage }) {
  return (
    <section style={{
      padding: '100px 24px',
      background: `linear-gradient(135deg,${C.red} 0%,#A01820 100%)`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(0,0,0,0.06)', pointerEvents: 'none',
      }} />
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <Heading level={2} light center style={{ marginBottom: '20px' }}>
          Ready for Your Best Smile?
        </Heading>
        <p style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          marginBottom: '40px',
        }}>
          Join thousands of happy patients in Frisco. Book your appointment today and take the
          first step toward the smile you deserve.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Btn
            variant="outline"
            onClick={() => setPage('book')}
            style={{ fontSize: '16px', padding: '16px 36px', borderColor: 'white', color: 'white' }}
          >
            📅 Book Online — It's Free
          </Btn>
          <Btn
            onClick={() => window.open('tel:+14695550100')}
            style={{ background: 'white', color: C.red, fontSize: '16px', padding: '16px 36px' }}
          >
            📞 Call (469) 555-0100
          </Btn>
        </div>
      </div>
    </section>
  );
}
