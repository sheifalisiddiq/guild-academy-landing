import { trackRecord } from '../content';
import { cx, useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';
import './TrackRecord.css';

function Stat({ stat, run, accent }) {
  const display = useCountUp(stat.value, {
    decimals: stat.decimals,
    run,
  });

  return (
    <div className={cx('track-record__card', accent && 'track-record__card--accent')}>
      <span className="track-record__value">
        {display}
        {stat.suffix}
      </span>
      <span className="track-record__label">{stat.label}</span>
    </div>
  );
}

export default function TrackRecord() {
  const [ref, isVisible] = useReveal({ threshold: 0.4 });

  return (
    <section className="section track-record" id="agts">
      <div className="container container--narrow">
        <span className="eyebrow track-record__eyebrow">{trackRecord.eyebrow}</span>

        <div ref={ref} className="track-record__grid">
          {trackRecord.stats.map((stat, i) => (
            <Stat
              key={stat.label}
              stat={stat}
              run={isVisible}
              accent={i === trackRecord.highlightIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
