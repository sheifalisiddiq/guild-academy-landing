import { testimonials } from '../content';
import './Testimonials.css';

/**
 * Movie carousel flowing testimonials.
 * Continuous smooth horizontal marquee animation that pauses on hover.
 */
export default function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <div
      className="marquee"
      role="region"
      aria-label="Student reviews movie carousel"
      tabIndex={0}
    >
      <div className="marquee__track">
        {items.map((t, idx) => (
          <figure key={idx} className="marquee__card">
            <div className="marquee__stars" aria-label="5 stars rating">
              {'★'.repeat(t.rating || 5)}
            </div>

            <blockquote className="marquee__quote">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="marquee__author">
              <div className="marquee__avatar" aria-hidden="true">
                {t.name.charAt(0)}
              </div>
              <div className="marquee__meta">
                <span className="marquee__name">{t.name}</span>
                <span className="marquee__role">{t.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
