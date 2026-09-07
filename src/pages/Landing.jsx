import { useRef } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import WhyGuild from '../components/WhyGuild';
import HowItWorks from '../components/HowItWorks';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';

export default function Landing() {
  const formRef = useRef(null);

  /* Scrolled via refs rather than hash links so the URL stays clean for the
     ad platforms pointing at this page. Honours reduced-motion. */
  const scrollTo = (ref) => () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    ref.current?.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Nav onCtaClick={scrollTo(formRef)} />
      <main>
        <Hero onCtaClick={scrollTo(formRef)} />
        <Benefits onCtaClick={scrollTo(formRef)} />
        <WhyGuild />
        <HowItWorks />
        <LeadForm ref={formRef} />
      </main>
      <Footer />
    </>
  );
}
