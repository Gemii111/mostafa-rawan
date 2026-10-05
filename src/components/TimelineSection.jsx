import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Clock } from 'lucide-react';

/**
 * Timeline Section:
 * Ultra-delicate, chic schedule without clutter or repeated paragraphs.
 */
export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="section"
      style={{
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
      }}
    >
      <div className="container-narrow">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          <h2
            className="font-arabic"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
              fontWeight: 700,
              color: 'var(--color-gold-dark)',
              marginBottom: '0.3rem',
            }}
          >
            فقرات السهرة
          </h2>

          <div
            className="font-sans"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}
          >
            The Timeline
          </div>

          <div className="gold-divider" style={{ margin: '0.5rem auto' }}>
            <div className="gold-divider-diamond" />
          </div>
        </div>

        {/* 5-Step Delicate List */}
        <div
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {weddingConfig.timeline.map((item) => (
            <div
              key={item.num}
              className="editorial-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.15rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '8px',
                direction: 'rtl',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span
                  className="timeline-badge-pulse"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    color: 'var(--color-gold-dark)',
                    fontWeight: 700,
                    minWidth: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 160, 89, 0.12)',
                  }}
                >
                  {item.num}
                </span>

                <div>
                  <h3
                    className="font-arabic"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      margin: 0,
                    }}
                  >
                    {item.titleAr}
                  </h3>

                  <div
                    className="font-sans"
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      fontWeight: 500,
                      marginTop: '0.15rem',
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>

              {/* Time Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.8rem',
                  backgroundColor: 'rgba(197, 160, 89, 0.12)',
                  borderRadius: '999px',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  color: 'var(--color-gold-dark)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-arabic)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Clock size={13} />
                <span>{item.timeAr}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
