import { whyGuild } from '../content';
import { cx, useReveal } from '../hooks/useReveal';
import Testimonials from './Testimonials';
import './WhyGuild.css';

export default function WhyGuild() {
  const [statementRef, statementVisible] = useReveal({ threshold: 0.3 });
  const [proofRef, proofVisible] = useReveal();

  return (
    <section className="section why" id="why">
      <div className="container">
        <div
          ref={statementRef}
          className={cx('why__head reveal', statementVisible && 'is-visible')}
        >
          <span className="eyebrow">{whyGuild.eyebrow}</span>
          <h2 className="why__statement">{whyGuild.statement}</h2>
          <p className="lead why__supporting">{whyGuild.supporting}</p>
        </div>

        <ul className="why__proof" ref={proofRef}>
          {whyGuild.proof.map((item, i) => (
            <li
              key={item.label}
              className={cx('why__proof-item reveal', proofVisible && 'is-visible')}
              style={{ '--reveal-delay': `${i * 110}ms` }}
            >
              <h3 className="why__proof-label">{item.label}</h3>
              <p className="why__proof-detail">{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="why__testimonials">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
