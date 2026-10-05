import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Calendar, MapPin } from 'lucide-react';

/**
 * Couple Section:
 * Gallery showcase centering the couple's authentic artwork illustration
 * with the iconic lyric: "صالحت بيك أيامي.. سامحت بيك الزمن"
 * Zero fake stories, zero fake counters.
 */
export default function CoupleSection() {
  return (
    <section id="couple" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
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
            The Couple
          </span>

          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.4rem',
            }}
          >
            {weddingConfig.groom} &amp; {weddingConfig.bride}
          </h2>

          <div
            className="font-arabic"
            style={{
              fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)',
              fontWeight: 700,
              color: 'var(--color-gold-dark)',
              marginBottom: '0.75rem',
            }}
          >
            {weddingConfig.groomAr} &amp; {weddingConfig.brideAr}
          </div>

          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>

          {/* Calligraphic Lyric */}
          <div
            className="font-arabic"
            style={{
              fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)',
              color: 'var(--color-crimson-lyric)',
              fontWeight: 700,
              lineHeight: 1.5,
              marginTop: '0.5rem',
            }}
          >
            "{weddingConfig.romanticQuoteAr}"
          </div>
        </div>

        {/* Centerpiece Artwork Frame */}
        <div
          style={{
            maxWidth: '520px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div
            className="editorial-card"
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              boxShadow: '0 24px 60px -10px rgba(41, 35, 28, 0.16), 0 0 0 1px rgba(197, 160, 89, 0.35)',
              borderRadius: '8px',
            }}
          >
            {/* The Authentic Artwork */}
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '6px',
                aspectRatio: '2 / 3',
                backgroundColor: '#FAF5ED',
                border: '1px solid rgba(197, 160, 89, 0.25)',
              }}
            >
              <img
                src={weddingConfig.coupleDetails.artPhoto}
                alt="Mostafa & Rawan Artwork"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Couple Footer Info */}
            <div
              style={{
                textAlign: 'center',
                padding: '1.5rem 1rem 0.75rem 1rem',
              }}
            >
              <div
                className="font-arabic"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.3rem',
                }}
              >
                {weddingConfig.groomAr} <span style={{ color: 'var(--color-gold)' }}>&amp;</span> {weddingConfig.brideAr}
              </div>

              <div
                className="font-sans"
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '0.22em',
                  color: 'var(--color-gold-dark)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                {weddingConfig.groom} &amp; {weddingConfig.bride}
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-text-secondary)',
                  padding: '0.4rem 1rem',
                  borderTop: '1px solid rgba(197, 160, 89, 0.25)',
                }}
                className="font-arabic"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={14} color="var(--color-gold-dark)" />
                  <span>{weddingConfig.displayDateAr}</span>
                </div>
                <span style={{ color: 'var(--color-champagne)' }}>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} color="var(--color-gold-dark)" />
                  <span>{weddingConfig.location.venueNameAr}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
