import { useState } from 'react';
import { brand, hero, video } from '../content';
import MarketLine from './MarketLine';
import './Hero.css';

export default function Hero({ onCtaClick }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [notice, setNotice] = useState(false);

  const isEmbed = /^https?:\/\//i.test(video.src);

  const handlePlay = () => {
    if (video.src) {
      setIsPlaying(true);
    } else {
      setNotice(true);
      setTimeout(() => setNotice(false), 3200);
    }
  };

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <MarketLine />

      <div className="container hero__inner">
        <div className="hero__grid">
          {/* LEFT: Video Player Frame */}
          <div className="hero__col-video">
            <div className="hero__video hero__video--portrait">
              <div className="video__frame">
                <span className="video__corner video__corner--tl" aria-hidden="true" />
                <span className="video__corner video__corner--tr" aria-hidden="true" />
                <span className="video__corner video__corner--bl" aria-hidden="true" />
                <span className="video__corner video__corner--br" aria-hidden="true" />

                <div className="video__stage">
                  {video.poster && !isPlaying && (
                    <img
                      className="video__poster-img"
                      src={video.poster}
                      alt={video.title || 'GUILD Academy Introduction'}
                      loading="eager"
                    />
                  )}

                  {!isPlaying && (
                    <div
                      className="video__placeholder"
                      onClick={handlePlay}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlay()}
                      aria-label="Play video introduction"
                    >
                      <span className="video__play" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
                          <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
                        </svg>
                      </span>
                      <p className="video__placeholder-label">
                        {notice
                          ? 'Trailer releasing soon — apply below for priority access'
                          : 'Watch Introduction'}
                      </p>
                    </div>
                  )}

                  {isPlaying && video.src && isEmbed && (
                    <iframe
                      className="video__media"
                      src={`${video.src}${video.src.includes('?') ? '&' : '?'}autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}

                  {isPlaying && video.src && !isEmbed && (
                    <video
                      className="video__media"
                      src={video.src}
                      poster={video.poster}
                      autoPlay
                      controls
                      playsInline
                    />
                  )}
                </div>
              </div>

              {video.caption && <p className="hero__video-caption">{video.caption}</p>}
            </div>
          </div>

          {/* RIGHT: Hero Copy & Actions */}
          <div className="hero__col-content">
            <div className="hero__badge">
              <img
                className="hero__mark"
                src={brand.markGradient}
                alt=""
                width="512"
                height="512"
              />
              <span className="hero__badge-text">GUILD Academy • Dubai</span>
            </div>

            <h1 className="hero__headline">{hero.headline}</h1>

            <p className="hero__supporting">{hero.supporting}</p>

            <div className="hero__actions">
              <button type="button" className="btn btn--primary hero__cta" onClick={onCtaClick}>
                {hero.cta}
              </button>
            </div>
          </div>
        </div>

        <div className="hero__cue" aria-hidden="true">
          <span>{hero.scrollCue}</span>
          <i />
        </div>
      </div>
    </section>
  );
}
