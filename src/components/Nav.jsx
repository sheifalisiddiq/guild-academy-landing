import { useEffect, useState } from 'react';
import { brand, nav } from '../content';
import { cx } from '../hooks/useReveal';
import './Nav.css';

/**
 * Fixed header. Transparent over the hero, then picks up a blurred navy
 * backdrop once the page has scrolled past the fold's opening.
 *
 * There is no menu: this is a single-page funnel with exactly one destination,
 * so a hamburger would only add a control that leads nowhere.
 */
export default function Nav({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cx('nav', scrolled && 'is-scrolled')}>
      <div className="nav__inner">
        <a className="nav__logo" href="./index.html" aria-label={`${brand.name} — home`}>
          <img src={brand.textLogoWhite} alt="" width="480" height="195" />
        </a>

        <button type="button" className="btn btn--primary nav__cta" onClick={onCtaClick}>
          {nav.cta}
        </button>
      </div>
    </header>
  );
}
