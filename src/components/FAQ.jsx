import { faq } from '../content';
import { cx, useReveal } from '../hooks/useReveal';
import './FAQ.css';

export default function FAQ() {
  const [ref, isVisible] = useReveal({ threshold: 0.2 });

  return (
    <section className="section faq" id="faq">
      <div className="container container--narrow">
        <div className="faq__head">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="section-title">{faq.title}</h2>
        </div>

        <div className={cx('faq__list', isVisible && 'is-visible')} ref={ref}>
          {faq.items.map((item, i) => (
            <details
              key={item.q}
              className={cx('faq__item reveal', isVisible && 'is-visible')}
              style={{ '--reveal-delay': `${200 + i * 90}ms` }}
            >
              <summary className="faq__q">
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <div className="faq__a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
