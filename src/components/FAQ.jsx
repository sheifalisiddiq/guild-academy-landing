import { faq } from '../content';
import { cx, useReveal } from '../hooks/useReveal';
import './FAQ.css';

function renderAnswer(text) {
  if (typeof text !== 'string') return text;
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <a key={match.index} href={match[2]} className="faq__link">
        {match[1]}
      </a>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

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
                <p>{renderAnswer(item.a)}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
