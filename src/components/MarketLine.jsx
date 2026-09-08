import './MarketLine.css';

/**
 * Japanese Candlestick Chart (OHLC) for the Hero background.
 * Undulating Harmonic Market Wave (Elliott / Dow Market Cycles):
 * - Replaces the artificial exponential curve with a natural, rhythmic wave
 * - Peak 1 (Wave 1) -> Higher Low (Wave 2) -> Peak 2 -> Higher Low -> Breakout (Wave 5)
 * - Keeps the text zone comfortable with a natural wave trough
 * - Clean, understated institutional aesthetic (1.5px hairline curve, thin wicks)
 */

const WAVE_CANDLES = [
  // --- Wave 1: First Crest (X: 55 - 340) ---
  { id: 1,  x: 55,   w: 18, wTop: 630, wBot: 740, bTop: 655, bH: 60,  type: 'bronze' },
  { id: 2,  x: 105,  w: 18, wTop: 580, wBot: 700, bTop: 605, bH: 75,  type: 'rose' },
  { id: 3,  x: 155,  w: 18, wTop: 540, wBot: 660, bTop: 565, bH: 75,  type: 'rose' },
  { id: 4,  x: 205,  w: 20, wTop: 505, wBot: 630, bTop: 530, bH: 85,  type: 'rose' },   // Crest 1 Peak
  { id: 5,  x: 255,  w: 18, wTop: 530, wBot: 640, bTop: 555, bH: 65,  type: 'bronze' },
  { id: 6,  x: 305,  w: 18, wTop: 575, wBot: 685, bTop: 600, bH: 65,  type: 'bronze' },

  // --- Wave 2: First Pullback & Higher Low (X: 360 - 520) ---
  { id: 7,  x: 360,  w: 18, wTop: 620, wBot: 730, bTop: 645, bH: 65,  type: 'bronze' },
  { id: 8,  x: 415,  w: 18, wTop: 645, wBot: 760, bTop: 670, bH: 70,  type: 'bronze' }, // Trough 1
  { id: 9,  x: 470,  w: 18, wTop: 630, wBot: 740, bTop: 655, bH: 65,  type: 'rose' },
  { id: 10, x: 525,  w: 18, wTop: 590, wBot: 705, bTop: 615, bH: 70,  type: 'rose' },

  // --- Wave 3: Second Crest & Expansion (X: 580 - 790) ---
  { id: 11, x: 580,  w: 18, wTop: 535, wBot: 655, bTop: 560, bH: 75,  type: 'rose' },
  { id: 12, x: 635,  w: 20, wTop: 475, wBot: 605, bTop: 500, bH: 85,  type: 'rose' },
  { id: 13, x: 690,  w: 22, wTop: 420, wBot: 555, bTop: 445, bH: 90,  type: 'rose' },   // Crest 2 Peak
  { id: 14, x: 745,  w: 18, wTop: 445, wBot: 565, bTop: 470, bH: 75,  type: 'bronze' },
  { id: 15, x: 800,  w: 18, wTop: 490, wBot: 605, bTop: 515, bH: 70,  type: 'bronze' },

  // --- Wave 4: Healthy Pullback & Re-accumulation Valley (X: 860 - 1030) ---
  { id: 16, x: 860,  w: 18, wTop: 525, wBot: 645, bTop: 550, bH: 75,  type: 'bronze' },
  { id: 17, x: 920,  w: 18, wTop: 540, wBot: 655, bTop: 565, bH: 70,  type: 'bronze' }, // Trough 2 (Higher Low)
  { id: 18, x: 980,  w: 18, wTop: 515, wBot: 630, bTop: 540, bH: 70,  type: 'rose' },
  { id: 19, x: 1040, w: 20, wTop: 460, wBot: 580, bTop: 485, bH: 80,  type: 'rose' },

  // --- Wave 5: Major Breakout Wave to New Highs (X: 1100 - 1550) ---
  { id: 20, x: 1100, w: 20, wTop: 390, wBot: 520, bTop: 415, bH: 85,  type: 'rose' },
  { id: 21, x: 1160, w: 22, wTop: 310, wBot: 455, bTop: 340, bH: 95,  type: 'rose' },
  { id: 22, x: 1220, w: 22, wTop: 240, wBot: 395, bTop: 270, bH: 105, type: 'rose' },
  { id: 23, x: 1280, w: 24, wTop: 180, wBot: 340, bTop: 210, bH: 110, type: 'rose' },   // Breakout Surge
  { id: 24, x: 1340, w: 20, wTop: 210, wBot: 350, bTop: 240, bH: 80,  type: 'bronze' }, // Small Bull Flag
  { id: 25, x: 1400, w: 22, wTop: 165, wBot: 310, bTop: 195, bH: 95,  type: 'rose' },
  { id: 26, x: 1465, w: 22, wTop: 125, wBot: 270, bTop: 155, bH: 95,  type: 'rose' },
  { id: 27, x: 1530, w: 22, wTop: 95,  wBot: 235, bTop: 120, bH: 95,  type: 'rose' },   // Final High
];

export default function MarketLine() {
  return (
    <div className="market-line" aria-hidden="true">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
        focusable="false"
      >
        <defs>
          {/* Muted Rose-Gold Candle Gradient */}
          <linearGradient id="wave-rose-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3c2ba" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#a96248" stopOpacity="0.30" />
          </linearGradient>

          {/* Muted Bronze Candle Gradient */}
          <linearGradient id="wave-bronze-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a96248" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#552c1e" stopOpacity="0.12" />
          </linearGradient>

          {/* Harmonic Wave Hairline Trend Curve Gradient */}
          <linearGradient id="wave-line-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a96248" stopOpacity="0.2" />
            <stop offset="25%" stopColor="#f3c2ba" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#a2614c" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#f3c2ba" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
          </linearGradient>

          {/* Architectural Drafting Grid */}
          <pattern id="market-grid-wave" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.025"
              strokeWidth="1"
            />
          </pattern>

          {/* Vertical mask to keep upper areas soft and text crisp */}
          <linearGradient id="wave-mask-v" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="40%" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#fff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fff" stopOpacity="1" />
          </linearGradient>

          <mask id="wave-mask">
            <rect width="1600" height="900" fill="url(#wave-mask-v)" />
          </mask>
        </defs>

        {/* Minimal Drafting Grid */}
        <rect width="1600" height="900" fill="url(#market-grid-wave)" />

        <g mask="url(#wave-mask)">
          {/* Harmonic Candlesticks */}
          <g className="market-candles">
            {WAVE_CANDLES.map((c, i) => {
              const isRose = c.type === 'rose';
              return (
                <g
                  key={c.id}
                  className={`candle-item ${isRose ? 'candle-item--rose' : 'candle-item--bronze'}`}
                  style={{ '--c-idx': i }}
                >
                  {/* Thin 1px Center Wick */}
                  <line
                    x1={c.x}
                    y1={c.wTop}
                    x2={c.x}
                    y2={c.wBot}
                    stroke={isRose ? '#f3c2ba' : '#a96248'}
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity={isRose ? 0.45 : 0.25}
                  />

                  {/* Candle Body */}
                  <rect
                    x={c.x - c.w / 2}
                    y={c.bTop}
                    width={c.w}
                    height={c.bH}
                    rx="2"
                    fill={isRose ? 'url(#wave-rose-grad)' : 'url(#wave-bronze-grad)'}
                    stroke={isRose ? 'rgba(243, 194, 186, 0.35)' : 'rgba(169, 98, 72, 0.2)'}
                    strokeWidth="1"
                  />
                </g>
              );
            })}
          </g>

          {/* Undulating Harmonic Wave Hairline Curve (1.5px) */}
          {/* Crest 1 (205, 520) -> Trough 1 (415, 680) -> Crest 2 (690, 440) -> Trough 2 (920, 570) -> Final Surge (1530, 110) */}
          <path
            className="trend-core"
            d="M 0 680 C 90 640, 140 520, 205 520 C 275 520, 340 680, 415 680 C 500 680, 600 440, 690 440 C 780 440, 840 570, 920 570 C 1020 570, 1140 330, 1260 210 C 1360 110, 1440 130, 1600 95"
            fill="none"
            stroke="url(#wave-line-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Subtle live tip beacon */}
          <circle cx="1530" cy="110" r="3" fill="#f3c2ba" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
