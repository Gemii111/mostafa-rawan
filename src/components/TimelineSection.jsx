import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Clock } from 'lucide-react';

/**
 * Timeline Section:
 * Ultra-delicate, chic, and streamlined schedule.
 * Elegant minimal styling, zero fluff.
 */
export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="section"
      style={{
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
      }}
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 4rem auto' }}>
          <span
            className="font-sans"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.6rem',
            }}
          >
            The Timeline
          </span>

          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}
          >
            Order of Events
          </h2>

          <div
            className="font-arabic"
            style={{
              fontSize: '1.35rem',
              color: 'var(--color-gold-dark)',
              fontWeight: 700,
              marginBottom: '0.5rem',
            }}
          >
            برنامج ليلتنا
          </div>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>

          <p
            className="font-arabic"
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-secondary)',
              fontWeight: 500,
            }}
          >
            عشان نفرح ونعيش كل لحظة سوا من البداية!
          </p>
        </div>

        {/* Chic Delicate Timeline List */}
        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
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
                padding: '1.4rem 1.8rem',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                borderRadius: '8px',
                direction: 'rtl',
              }}
            >
              {/* Event Title & English subtitle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    color: 'var(--color-gold-dark)',
                    fontWeight: 400,
                    minWidth: '32px',
                  }}
                >
                  {item.num}
                </span>

                <div>
                  <h3
                    className="font-arabic"
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      marginBottom: '0.15rem',
                    }}
                  >
                    {item.titleAr}
                  </h3>

                  <div
                    className="font-sans"
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      fontWeight: 500,
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
                  gap: '0.45rem',
                  padding: '0.4rem 0.9rem',
                  backgroundColor: 'rgba(197, 160, 89, 0.12)',
                  borderRadius: '999px',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  color: 'var(--color-gold-dark)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-arabic)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Clock size={14} />
                <span>{item.timeAr}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
