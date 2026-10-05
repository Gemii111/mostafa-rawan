import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Clock, Sparkles } from 'lucide-react';

/**
 * The Celebration Section:
 * Elegant English card highlighting the 8:00 PM start time and key celebration details.
 * Clean, minimal, zero clutter.
 */
export default function CelebrationSection() {
  return (
    <section
      id="celebration"
      className="section"
      style={{
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.75rem, 3.8vw, 2.6rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: 'var(--color-text-primary)',
              marginBottom: '0.35rem',
            }}
          >
            The Celebration
          </h2>

          <div
            className="font-sans"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            An Evening of Love &amp; Joy
          </div>

          <div className="gold-divider" style={{ margin: '0.5rem auto' }}>
            <div className="gold-divider-diamond" />
          </div>
        </div>

        {/* Celebration Highlights Card */}
        <div
          className="editorial-card"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            backgroundColor: 'rgba(255, 255, 255, 0.94)',
            borderRadius: '12px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Doors Open */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold-dark)',
                  flexShrink: 0,
                }}
              >
                <Clock size={20} />
              </div>
              <div>
                <h3
                  className="font-serif"
                  style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}
                >
                  8:00 PM Sharp
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Doors open for guest reception. The celebration commences promptly at 8:00 PM.
                </p>
              </div>
            </div>

            {/* Dress Code */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold-dark)',
                  flexShrink: 0,
                }}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <h3
                  className="font-serif"
                  style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}
                >
                  {weddingConfig.dressCode.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {weddingConfig.dressCode.description}
                </p>
              </div>
            </div>
          </div>

          {/* Warm Note */}
          <div
            style={{
              marginTop: '2rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(197, 160, 89, 0.25)',
              textAlign: 'center',
            }}
          >
            <p
              className="font-serif"
              style={{
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: 'var(--color-gold-dark)',
                marginBottom: '0.4rem',
              }}
            >
              "{weddingConfig.celebration.quote}"
            </p>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              {weddingConfig.celebration.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
