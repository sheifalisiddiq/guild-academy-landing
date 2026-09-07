import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll via IntersectionObserver.
 *
 * Fires once and then disconnects — the animation never replays on scroll-back,
 * which is what separates a considered reveal from a distracting one.
 *
 * Returns [ref, isVisible]. Apply `className={cx('reveal', isVisible && 'is-visible')}`
 * to the observed element, or spread the state down to staggered children.
 *
 * @param {{ threshold?: number, rootMargin?: string }} options
 */
export function useReveal({ threshold = 0.2, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Without IntersectionObserver, show the content immediately rather than
    // leaving it hidden behind an animation that will never run.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

/** Joins truthy class names. */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}
