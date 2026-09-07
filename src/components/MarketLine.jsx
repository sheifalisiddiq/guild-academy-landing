import './MarketLine.css';

/**
 * The hero's market visual: a single line chart drawn in bronze over a faint
 * grid. It draws itself once on load and then holds — no loop, no pulse, no
 * scroll coupling. Vector rather than stock photography, so it stays on-brand
 * and weighs nothing.
 *
 * Decorative only; hidden from assistive technology.
 */
export default function MarketLine() {
  return (
    <div className="market-line" aria-hidden="true">
      <svg
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMax slice"
        role="presentation"
        focusable="false"
      >
        <defs>
          <linearGradient id="ml-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a96248" stopOpacity="0" />
            <stop offset="18%" stopColor="#a96248" stopOpacity="1" />
            <stop offset="72%" stopColor="#a2614c" stopOpacity="1" />
            <stop offset="100%" stopColor="#f3c2ba" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="ml-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a96248" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#a96248" stopOpacity="0" />
          </linearGradient>

          <pattern id="ml-grid" width="90" height="90" patternUnits="userSpaceOnUse">
            <path d="M90 0H0V90" fill="none" stroke="#ffffff" strokeOpacity="0.045" strokeWidth="1" />
          </pattern>

          {/* Fades the whole visual out toward the top and edges so it never
              competes with the headline sitting above it. */}
          <linearGradient id="ml-mask-v" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="45%" stopColor="#888" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <mask id="ml-mask">
            <rect width="1440" height="560" fill="url(#ml-mask-v)" />
          </mask>
        </defs>

        <g mask="url(#ml-mask)">
          <rect width="1440" height="560" fill="url(#ml-grid)" />

          <path
            className="market-line__area"
            d="M0 452 L96 430 L192 466 L288 398 L384 424 L480 350 L576 382 L672 300 L768 336 L864 262 L960 292 L1056 214 L1152 246 L1248 168 L1344 196 L1440 122 L1440 560 L0 560 Z"
            fill="url(#ml-fill)"
          />

          <path
            className="market-line__path"
            d="M0 452 L96 430 L192 466 L288 398 L384 424 L480 350 L576 382 L672 300 L768 336 L864 262 L960 292 L1056 214 L1152 246 L1248 168 L1344 196 L1440 122"
            fill="none"
            stroke="url(#ml-stroke)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle className="market-line__tip" cx="1440" cy="122" r="4" fill="#f3c2ba" />
        </g>
      </svg>
    </div>
  );
}
