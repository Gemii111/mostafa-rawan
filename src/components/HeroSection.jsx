import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Calendar, MapPin } from 'lucide-react';

/**
 * Hero Section:
 * Full-screen cinematic hero with majestic editorial typography,
 * animated gradient lighting, and delicate floating accents.
 */
export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCouple = () => {
    const el = document.getElementById('couple');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '6rem 1.5rem 4rem 1.5rem',
      }}
    >
      {/* Cinematic Ambient Glow & Parallax Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          width: 'clamp(300px, 60vw, 750px)',
          height: 'clamp(300px, 60vw, 750px)',
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.15}px))`,
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, rgba(223, 207, 190, 0.08) 45%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(40px)',
        }}
      />

      {/* Decorative Editorial Border Framing */}
      <div
        style={{
          position: 'absolute',
          inset: 'clamp(1rem, 3vw, 2.5rem)',
          border: '1px solid rgba(197, 160, 89, 0.22)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <div style={{ position: 'absolute', top: -3, left: -3, width: 7, height: 7, borderTop: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)' }} />
        <div style={{ position: 'absolute', top: -3, right: -3, width: 7, height: 7, borderTop: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)' }} />
        <div style={{ position: 'absolute', bottom: -3, left: -3, width: 7, height: 7, borderBottom: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)' }} />
        <div style={{ position: 'absolute', bottom: -3, right: -3, width: 7, height: 7, borderBottom: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)' }} />
      </div>

      {/* Main Content Area */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '1000px',
          width: '100%',
          transform: `translateY(${scrollY * -0.12}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Monogram / Header Label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            marginBottom: '2rem',
            padding: '0.4rem 1.25rem',
            border: '1px solid rgba(197, 160, 89, 0.28)',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            className="font-sans"
            style={{
              fontSize: 'clamp(0.68rem, 1.2vw, 0.8rem)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              fontWeight: 500,
            }}
          >
            Official Wedding Invitation
          </span>
          <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem' }}>✦</span>
          <span
            className="font-serif"
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-gold-dark)',
              letterSpacing: '0.15em',
            }}
          >
            EL TORATH BALLROOM
          </span>
        </div>

        {/* Centerpiece Names */}
        <div style={{ margin: '1rem 0' }}>
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(3rem, 9.5vw, 6.8rem)',
              fontWeight: 300,
              letterSpacing: '0.12em',
              color: 'var(--color-text-primary)',
              lineHeight: 1.05,
              textTransform: 'uppercase',
            }}
          >
            <div>{weddingConfig.groom}</div>
            <div
              style={{
                fontSize: 'clamp(1.8rem, 5.5vw, 3.8rem)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-gold)',
                margin: '0.1rem 0',
                fontWeight: 300,
                letterSpacing: '0.05em',
              }}
            >
              &amp;
            </div>
            <div>{weddingConfig.bride}</div>
          </h1>
        </div>

        {/* English Event Type: THE WEDDING (Replaced Arabic زواج as requested) */}
        <div
          className="font-serif"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 300,
            letterSpacing: '0.22em',
            color: 'var(--color-gold-dark)',
            margin: '0.5rem 0',
            lineHeight: 1.2,
            textTransform: 'uppercase',
          }}
        >
          {weddingConfig.eventType}
        </div>

        {/* Divider */}
        <div className="gold-divider" style={{ margin: '1.25rem auto' }}>
          <div className="gold-divider-diamond" />
        </div>

        {/* Subtitle */}
        <p
          className="font-sans"
          style={{
            fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            fontWeight: 400,
            marginBottom: '0.5rem',
          }}
        >
          {weddingConfig.eventSubtitle}
        </p>

        {/* Arabic Subtitle */}
        <p
          className="font-arabic"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            color: 'var(--color-text-muted)',
            marginBottom: '2rem',
          }}
        >
          {weddingConfig.subtitleAr}
        </p>

        {/* Date & Location Pill */}
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            padding: '0.8rem 1.8rem',
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            border: '1px solid var(--color-border)',
            borderRadius: '2px',
            boxShadow: 'var(--shadow-subtle)',
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
          }}
          className="font-sans"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={15} color="var(--color-gold)" />
            <span style={{ letterSpacing: '0.08em', fontWeight: 500 }}>
              {weddingConfig.displayDate}
            </span>
          </div>
          <span style={{ color: 'var(--color-champagne)' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={15} color="var(--color-gold)" />
            <span style={{ letterSpacing: '0.08em', fontWeight: 500 }}>
              {weddingConfig.location.venueName} • {weddingConfig.location.city}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        onClick={scrollToCouple}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
          cursor: 'pointer',
          zIndex: 4,
          transition: 'opacity 0.3s ease',
        }}
      >
        <span
          className="font-sans"
          style={{
            fontSize: '0.68rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            fontWeight: 500,
          }}
        >
          Scroll to discover
        </span>

        {/* Delicate animated vertical line */}
        <div
          style={{
            width: '1px',
            height: '34px',
            backgroundColor: 'rgba(197, 160, 89, 0.35)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '14px',
              backgroundColor: 'var(--color-gold)',
              animation: 'scrollIndicatorMove 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
