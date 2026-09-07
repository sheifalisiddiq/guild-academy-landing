import { benefits } from '../content';
import { cx, useReveal } from '../hooks/useReveal';
import './Benefits.css';

export default function Benefits({ onCtaClick }) {
  const [ref, isVisible] = useReveal();

  return (
    <section className="section benefits" id="benefits">
      <div className="container container--narrow">
        <div className="benefits__head">
          <span className="eyebrow">{benefits.eyebrow}</span>
          <h2 className="section-title">{benefits.title}</h2>
        </div>

        <div ref={ref} className={cx('benefits__card reveal', isVisible && 'is-visible')}>
          <ul className="benefits__checklist">
            {benefits.items.map((item, i) => (
              <li key={i} className="benefits__item">
                <span className="benefits__tick" aria-hidden="true">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
                    <path
                      d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="benefits__item-text">{item}</span>
              </li>
            ))}

            {benefits.location && (
              <li className="benefits__item benefits__item--location">
                <svg
                  className="benefits__flag-svg"
                  viewBox="0 0 24 16"
                  width="24"
                  height="16"
                  aria-hidden="true"
                >
                  <rect width="24" height="16" fill="#00732f" />
                  <rect y="5.33" width="24" height="5.34" fill="#ffffff" />
                  <rect y="10.67" width="24" height="5.33" fill="#000000" />
                  <rect width="6" height="16" fill="#ff0000" />
                </svg>
                <span className="benefits__item-text">{benefits.location}</span>
              </li>
            )}
          </ul>

          <div className="benefits__footer">
            <div className="benefits__social">
              <div className="benefits__avatars">
                {benefits.socialProof.avatars.map((av, idx) => (
                  <img
                    key={idx}
                    className="benefits__avatar"
                    src={av}
                    alt=""
                    width="44"
                    height="44"
                  />
                ))}
              </div>
              <p className="benefits__social-text">
                <strong>{benefits.socialProof.count}</strong> {benefits.socialProof.label}
              </p>
            </div>

            <button
              type="button"
              className="btn btn--primary benefits__cta"
              onClick={onCtaClick}
            >
              {benefits.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
