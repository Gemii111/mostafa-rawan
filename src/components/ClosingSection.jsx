import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Heart, ChevronUp } from 'lucide-react';

/**
 * Closing Section:
 * Minimal, heartfelt closing. Zero clutter.
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
        <div
          className="font-arabic"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            color: '#FFFFFF',
            fontWeight: 800,
            marginBottom: '0.4rem',
          }}
        >
          {weddingConfig.groomAr} <span style={{ color: 'var(--color-gold)', fontWeight: 300 }}>&amp;</span> {weddingConfig.brideAr}
        </div>

        <div
          className="font-sans"
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-dark)',
            fontWeight: 600,
            marginBottom: '1rem',
          }}
        >
          {weddingConfig.groom} &amp; {weddingConfig.bride}
        </div>

        {/* Calligraphy Lyric */}
        <p
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.8rem)',
            fontWeight: 700,
            color: 'var(--color-gold)',
            marginBottom: '0.4rem',
            lineHeight: 1.4,
          }}
        >
          "{weddingConfig.romanticQuoteAr}"
        </p>

        {/* English Event Type */}
        <div
          className="font-sans"
          style={{
            fontSize: '0.82rem',
            color: 'var(--color-champagne)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 600,
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
          className="font-arabic"
          style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
            color: '#FFFFFF',
            fontWeight: 600,
            marginBottom: '2.5rem',
            direction: 'rtl',
          }}
        >
          مستنيينكم تنورونا وتفرحوا معانا!
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
          <div className="font-arabic" style={{ color: '#887E75' }}>
            قاعة التراث • المنصورة
          </div>
        </div>
      </div>
    </footer>
  );
}
