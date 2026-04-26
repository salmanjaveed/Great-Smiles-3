import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import InsuranceBar from '../components/InsuranceBar';
import AboutPreview from '../components/AboutPreview';
import ServicesOverview from '../components/ServicesOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import MeetDentist from '../components/MeetDentist';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTASection from '../components/CTASection';
import ContactPreview from '../components/ContactPreview';

export default function HomePage({ setPage, showPricing = true }) {
  return (
    <>
      <Hero setPage={setPage} />
      <TrustBar />
      <InsuranceBar />
      <AboutPreview setPage={setPage} />
      <ServicesOverview setPage={setPage} />
      <WhyChooseUs />
      <MeetDentist />
      <Testimonials />
      {showPricing && <Pricing setPage={setPage} />}
      <CTASection setPage={setPage} />
      <ContactPreview setPage={setPage} />
    </>
  );
}
