import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Heart, ChevronUp } from 'lucide-react';

/**
 * Closing Section:
 * Cinematic finale with glowing heart and heartfelt gratitude.
 * Warm Egyptian phrasing, verified facts.
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
        padding: '6.5rem 1.5rem 3.5rem 1.5rem',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(250px, 50vw, 600px)',
          height: 'clamp(250px, 50vw, 600px)',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.16) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 2 }}>
        {/* Animated Heart Icon */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(197, 160, 89, 0.15)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            color: 'var(--color-gold)',
            marginBottom: '1.75rem',
            animation: 'pulseGlow 3s ease-in-out infinite',
          }}
        >
          <Heart size={24} fill="var(--color-gold)" strokeWidth={0} />
        </div>

        {/* Large Cinematic Names */}
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.4rem, 7vw, 4.8rem)',
            fontWeight: 300,
            letterSpacing: '0.14em',
            lineHeight: 1.1,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          {weddingConfig.groom}
          <span
            style={{
              fontStyle: 'italic',
              color: 'var(--color-gold)',
              margin: '0 0.5rem',
              fontWeight: 300,
            }}
          >
            &amp;
          </span>
          {weddingConfig.bride}
        </h2>

        <div
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            color: 'var(--color-gold-light)',
            fontWeight: 700,
            marginBottom: '1rem',
          }}
        >
          {weddingConfig.groomAr} <span style={{ color: 'var(--color-gold)' }}>&amp;</span> {weddingConfig.brideAr}
        </div>

        {/* Calligraphy Lyric */}
        <p
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.3rem, 3.2vw, 2rem)',
            fontWeight: 700,
            color: 'var(--color-gold)',
            marginBottom: '0.5rem',
            lineHeight: 1.4,
          }}
        >
          "{weddingConfig.romanticQuoteAr}"
        </p>

        {/* English Event Type */}
        <div
          className="font-sans"
          style={{
            fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
            color: 'var(--color-champagne)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}
        >
          {weddingConfig.eventType}
        </div>

        <div
          className="gold-divider"
          style={{
            margin: '1.5rem auto 2.2rem auto',
          }}
        >
          <div className="gold-divider-diamond" />
        </div>

        {/* Warm Egyptian Farewell Message */}
        <p
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.2rem, 2.4vw, 1.55rem)',
            color: '#FFFFFF',
            fontWeight: 600,
            marginBottom: '0.5rem',
            direction: 'rtl',
            lineHeight: 1.7,
          }}
        >
          مستنيينكم تنورونا وتفرحوا معانا.. وجودكم هو أحلى هدية لينا!
        </p>

        <p
          className="font-arabic"
          style={{
            fontSize: '1rem',
            color: 'var(--color-gold-light)',
            marginBottom: '3rem',
          }}
        >
          {weddingConfig.displayDateAr} • {weddingConfig.location.venueNameAr}
        </p>

        {/* Back To Top Action */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            background: 'transparent',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            color: 'var(--color-champagne)',
            borderRadius: '999px',
            padding: '0.75rem 1.6rem',
            cursor: 'pointer',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            marginBottom: '3.5rem',
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
          <ChevronUp size={15} />
        </button>

        {/* Watermark Credits */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            fontSize: '0.75rem',
            color: '#706860',
            letterSpacing: '0.12em',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="font-sans"
        >
          <div>
            MOSTAFA &amp; RAWAN • THE WEDDING • 17.10.2026
          </div>
          <div className="font-arabic" style={{ color: '#887E75' }}>
            {weddingConfig.location.venueNameAr} • المنصورة، مصر
          </div>
        </div>
      </div>
    </footer>
  );
}
