import { forwardRef } from 'react';
import { video } from '../content';
import { cx, useReveal } from '../hooks/useReveal';
import './VideoSection.css';

/**
 * The video block.
 *
 * With `video.src` empty it renders a finished-looking placeholder frame; with
 * a src it renders the real player inside the identical frame. Both states use
 * the same 16:9 container, so dropping the video in later causes no layout
 * shift and no redesign.
 */
const VideoSection = forwardRef(function VideoSection(_props, ref) {
  const [revealRef, isVisible] = useReveal();
  const isEmbed = /^https?:\/\//i.test(video.src);

  return (
    <section className="section video" id="video" ref={ref}>
      <div className="container container--narrow video__head">
        <span className="eyebrow">{video.eyebrow}</span>
        <h2 className="section-title">{video.title}</h2>
      </div>

      <div className="container">
        <div ref={revealRef} className={cx('video__frame reveal', isVisible && 'is-visible')}>
          <span className="video__corner video__corner--tl" aria-hidden="true" />
          <span className="video__corner video__corner--tr" aria-hidden="true" />
          <span className="video__corner video__corner--bl" aria-hidden="true" />
          <span className="video__corner video__corner--br" aria-hidden="true" />

          <div className="video__stage">
            {!video.src && (
              /* Placeholder state — intentionally empty, waiting on the film. */
              <div className="video__placeholder">
                <span className="video__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" focusable="false">
                    <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
                  </svg>
                </span>
                <p className="video__placeholder-label">Video coming soon</p>
              </div>
            )}

            {video.src && isEmbed && (
              <iframe
                className="video__media"
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}

            {video.src && !isEmbed && (
              <video className="video__media" src={video.src} controls playsInline preload="metadata" />
            )}
          </div>
        </div>

        <p className="video__caption">{video.caption}</p>
      </div>
    </section>
  );
});

export default VideoSection;
