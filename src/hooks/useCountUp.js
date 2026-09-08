import { useEffect, useRef, useState } from 'react';

/**
 * Animated number count-up.
 *
 * Starts at `start` and eases toward `target` over `duration` ms once `run`
 * becomes true — fast at first, decelerating into the final value
 * (easeOutQuart). Pair with `useReveal` so it fires when scrolled into view.
 *
 * Honours `prefers-reduced-motion`: the final value is returned immediately with
 * no animation. Returns the current value as a fixed-decimals string.
 *
 * @param {number} target
 * @param {{ decimals?: number, duration?: number, start?: number, run?: boolean }} options
 */
export function useCountUp(
  target,
  { decimals = 0, duration = 1800, start = 0, run = false } = {}
) {
  const [value, setValue] = useState(start);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!run) return;

    const reduced =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || typeof requestAnimationFrame === 'undefined') {
      setValue(target);
      return;
    }

    const from = start;
    const startTime = performance.now();

    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(from + (target - from) * eased);
      if (p < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [run, target, duration, start]);

  return value.toFixed(decimals);
}
