import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Heart, ChevronUp } from 'lucide-react';

/**
 * Closing Section:
 * Minimal, heartfelt closing. Zero clutter.
 * All-English Luxury Haute-Couture Edition.
 */
export default function ClosingSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#151311',
        color: '#FAF6F0',
        padding: '5rem 1.25rem 3rem 1.25rem',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="container-narrow" style={{ position: 'relative', zIndex: 2 }}>
        {/* Heart Icon */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(197, 160, 89, 0.15)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            color: 'var(--color-gold)',
            marginBottom: '1.5rem',
            animation: 'pulseGlow 3s ease-in-out infinite',
          }}
        >
          <Heart size={22} fill="var(--color-gold)" strokeWidth={0} />
        </div>

        {/* Names */}
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            color: '#FFFFFF',
            fontWeight: 400,
            letterSpacing: '0.06em',
            marginBottom: '0.5rem',
          }}
        >
          {weddingConfig.groom} <span style={{ color: 'var(--color-gold)', fontStyle: 'italic', fontWeight: 300 }}>&amp;</span> {weddingConfig.bride}
        </h2>

        {/* English Event Type */}
        <div
          className="font-sans"
          style={{
            fontSize: '0.82rem',
            color: 'var(--color-champagne)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '1.5rem',
          }}
        >
          {weddingConfig.eventType}
        </div>

        <div className="gold-divider" style={{ margin: '1rem auto 1.75rem auto' }}>
          <div className="gold-divider-diamond" />
        </div>

        {/* Warm Closing Line */}
        <p
          className="font-sans"
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
            color: '#FFFFFF',
            fontWeight: 500,
            marginBottom: '2.5rem',
            letterSpacing: '0.02em',
          }}
        >
          We cannot wait to celebrate with you!
        </p>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            background: 'transparent',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            color: 'var(--color-champagne)',
            borderRadius: '999px',
            padding: '0.65rem 1.4rem',
            cursor: 'pointer',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            marginBottom: '3rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-gold)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.35)';
            e.currentTarget.style.color = 'var(--color-champagne)';
          }}
        >
          <span>Back to Top</span>
          <ChevronUp size={14} />
        </button>

        {/* Minimal Footer Watermark */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            fontSize: '0.75rem',
            color: '#706860',
            letterSpacing: '0.1em',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
          }}
          className="font-sans"
        >
          <div>MOSTAFA &amp; RAWAN • THE WEDDING</div>
          <div style={{ color: '#887E75' }}>
            October 17, 2026 • El Torath Ballroom, Mansoura
          </div>
        </div>
      </div>
    </footer>
  );
}
