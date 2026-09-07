import { brand, thankYou } from '../content';
import Footer from '../components/Footer';
import './ThankYou.css';

export default function ThankYou() {
  return (
    <>
      <main className="ty">
        <div className="ty__glow" aria-hidden="true" />

        <div className="container ty__inner">
          <div className="ty__card">
            <img className="ty__mark" src={brand.markGradient} alt="" width="512" height="512" />

            <h1 className="ty__headline">{thankYou.headline}</h1>
            <p className="ty__message">{thankYou.message}</p>

            <div className="ty__actions">
              <a className="btn btn--primary" href={thankYou.primaryHref}>
                {thankYou.primaryCta}
              </a>
              <a
                className="btn btn--ghost"
                href={thankYou.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {thankYou.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
