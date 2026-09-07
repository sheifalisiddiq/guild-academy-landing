import { howItWorks } from '../content';
import { cx, useReveal } from '../hooks/useReveal';
import './HowItWorks.css';

export default function HowItWorks() {
  const [ref, isVisible] = useReveal({ threshold: 0.25 });

  return (
    <section className="section how" id="how-it-works">
      <div className="container">
        <div className="how__head">
          <span className="eyebrow">{howItWorks.eyebrow}</span>
          <h2 className="section-title">{howItWorks.title}</h2>
        </div>

        <ol className={cx('how__steps', isVisible && 'is-visible')} ref={ref}>
          {/* Connector draws left-to-right (top-to-bottom on mobile) behind
              the steps, so the sequence reads before the copy does. */}
          <span className="how__connector" aria-hidden="true" />

          {howItWorks.steps.map((step, i) => (
            <li
              key={step.title}
              className={cx('how__step reveal', isVisible && 'is-visible')}
              style={{ '--reveal-delay': `${300 + i * 130}ms` }}
            >
              <span className="how__numeral" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="how__node" aria-hidden="true" />
              <h3 className="how__title">{step.title}</h3>
              <p className="how__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
